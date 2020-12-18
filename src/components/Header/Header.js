import { Menu } from "antd";
import { HomeOutlined, SettingFilled } from "@ant-design/icons";
import { useState } from "react";
export default function Header({ currentPage }) {
  const [current, setCurrent] = useState(currentPage);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="admin" icon={<SettingFilled />}>
          Admin Panel
        </Menu.Item>
      </Menu>
    </div>
  );
}
