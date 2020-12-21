import { Result, Button } from "antd";
import { Link } from "react-router-dom";
export default function NotFoundView({ text, button }) {
  return (
    <Result
      status="404"
      title="404"
      subTitle={text}
      extra={
        <Button type="primary">
          <Link to="/home">Back Home</Link>
        </Button>
      }
    />
  );
}
