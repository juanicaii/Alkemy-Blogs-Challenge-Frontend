import { Collapse, Image } from "antd";
import { Row, Col, Divider, Space } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import "./Post.css";
import "./hover.css";
const { Title, Paragraph } = Typography;

export default function Post({ title, body, id, image }) {
  return (
    <Link to={`/post/${id}`} className="post hvr-grow">
      <Row>
        <Col md={12} lg={{ offset: 3, span: 8 }}>
          <img width={250} src={"/blog1.png"} alt="postimage" />
        </Col>
        <Col md={12} lg={8}>
          <Title level={3}>{title}</Title>
          <Paragraph>{body}</Paragraph>
        </Col>
      </Row>
    </Link>
  );
}
