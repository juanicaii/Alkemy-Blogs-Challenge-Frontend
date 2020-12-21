import { useParams } from "react-router-dom";
import "./DetailsPostView.css";
import Title from "../../components/Title";
import useHttp from "../../hooks/useHttp";
import config from "../../react.config";
import NotFoundView from "../NotFoundView";
import { Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;
export default function DetailsPostView() {
  let { id } = useParams();
  const posts = useHttp(`${config.api_url}/posts/${id}`, "get");

  if (posts === null) {
    return (
      <NotFoundView
        text="Sorry, the posts you visited does not exist."
        button="Back Home"
      />
    );
  }

  const image = posts.image ? posts.image : "/blog1.png";
  return (
    <div className="post-content">
      {posts !== [] ? (
        <>
          <img src={image} alt="logo" />
          <Title>{posts.title}</Title>

          <Paragraph>{posts.body}</Paragraph>
        </>
      ) : (
        <LoadingOutlined
          style={{
            fontSize: 30,
            display: "flex",
          }}
        />
      )}
    </div>
  );
}
