import Title from "../../components/Title";
import Post from "../../components/Post";
import useHttp from "../../hooks/useHttp";
import config from "../../react.config";
import { Pagination } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./HomeView.css";
export default function HomeView() {
  const [currentPage, setCurrentPage] = useState(1);
  const posts = useHttp(`${config.api_url}/posts?_page=${currentPage}`, "get");

  return (
    <>
      <Title>Post</Title>

      <div className="container">
        <div className="posts">
          {posts.length ? (
            <div className="postswrapper">
              {posts.map((post) => (
                <Post
                  key={post.id}
                  body={post.body}
                  title={post.title}
                  id={post.id}
                />
              ))}
            </div>
          ) : (
            <LoadingOutlined
              style={{
                fontSize: 30,
                display: "flex",
              }}
            />
          )}
        </div>
      </div>
      <div className="pagination">
        <Pagination
          defaultCurrent={currentPage}
          onChange={(page) => {
            setCurrentPage(page);
          }}
          total={50}
        />
      </div>
    </>
  );
}
