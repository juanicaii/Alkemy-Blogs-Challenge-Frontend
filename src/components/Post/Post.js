import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import "./Post.css";
import "../../hover.css";
const { Title, Paragraph } = Typography;

export default function Post({ title, body, id, image }) {
  const img = image ? image : "/blog1.png";
  return (
    <Link to={`/post/${id}`} className="post hvr-grow">
      <Row>
        <Col md={12} lg={{ offset: 3, span: 8 }}>
          <img width={250} src={img} alt="postimage" />
        </Col>
        <Col md={12} lg={8}>
          <Title level={3}>{title}</Title>
          <Paragraph ellipsis={{ rows: 5, expandable: false }}>
            {body}
          </Paragraph>
        </Col>
      </Row>
    </Link>
  );
}
