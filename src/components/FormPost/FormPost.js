import { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import useHttp from "../../hooks/useHttp";
import config from "../../react.config";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: "${label} is required!",
};

const MySwal = withReactContent(Swal);

export default function FormPost({ open, setOpen, item }) {
  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = async (values) => {
    const post = {
      id: values.id,
      title: values.title,
      body: values.content,
      userId: 1,
    };
    const editedItem = await axios.put(
      `${config.api_url}/posts/${item.id}`,
      post
    );

    if (editedItem) {
      MySwal.fire("Good job!", "Edited Succesfuly!", "success");
      setOpen(false);
    }
  };
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={open}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{ title: item.title, content: item.body }}
        >
          <Form.Item
            name="title"
            label="Post Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            rules={[{ required: true }]}
            name="content"
            label="Content"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
