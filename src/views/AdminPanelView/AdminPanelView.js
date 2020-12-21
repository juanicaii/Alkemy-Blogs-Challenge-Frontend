import { Table, Modal, Space } from "antd";
import config from "../../react.config";
import useHttp from "../../hooks/useHttp";
import Title from "../../components/Title";
import FormPost from "../../components/FormPost";
import axios from "axios";
import {
  EditOutlined,
  LoadingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import history from "../../history";
const MySwal = withReactContent(Swal);

export default function AdminPanel() {
  const [edited, setEdited] = useState(false);
  const [seletedItem, setSelectedItem] = useState(null);
  const posts = useHttp(`${config.api_url}/posts`, "get");

  const deletePost = async ({ id }) => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      const deletedItem = await axios.delete(`${config.api_url}/posts/${id}`);
      if (deletedItem) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        history.go(0);
      }
    }
  };

  const editPost = async ({ id, title, body, image, category }) => {
    setSelectedItem({ id, title, body, image, category: category.name });
    setEdited(true);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Post Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => "20/12/2020",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              editPost(record);
            }}
          >
            <EditOutlined />
          </a>
          <a>
            <DeleteOutlined
              onClick={() => {
                deletePost(record);
              }}
            />
          </a>
        </Space>
      ),
    },
  ];

  const data = posts;

  return (
    <>
      <Title>Post Manager</Title>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {posts.length ? (
          <Table rowKey="id" columns={columns} dataSource={data} />
        ) : (
          <LoadingOutlined style={{ fontSize: 50 }} />
        )}
      </div>
      {edited ? (
        <FormPost open={edited} setOpen={setEdited} item={seletedItem} />
      ) : (
        ""
      )}
    </>
  );
}
