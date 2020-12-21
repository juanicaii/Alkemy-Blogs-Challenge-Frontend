import { Button, Form, Input } from "antd";
import config from "../../react.config";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import history from "../../history";
import Title from "../../components/Title";
export default function NewPostView() {
  const MySwal = withReactContent(Swal);

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = async (values) => {
    const post = {
      id: values.id,
      title: values.title,
      body: values.content,
      image: values.image,
      category: values.category,
      userId: 1,
    };
    const createdItem = await axios.post(`${config.api_url}/posts`, post);

    if (createdItem) {
      MySwal.fire("Good job!", "Created Succesfuly!", "success");
      history.push("/home");
    }
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Title>Create Post</Title>
      <Form.Item name="title" label="Post Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="image" label="Post Image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="category"
        label="Post Category"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item rules={[{ required: true }]} name="content" label="Content">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
