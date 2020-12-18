import Title from "../../components/Title";
import Post from "../../components/Post";
import useHttp from "../../hooks/useHttp";
import config from "../../react.config";
import { LoadingOutlined } from "@ant-design/icons";
import "./HomeView.css";
export default function HomeView() {
  const posts = useHttp(`${config.api_url}/posts`, "get");

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
    </>
  );
}
