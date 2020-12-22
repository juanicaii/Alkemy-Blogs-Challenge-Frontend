import { Layout, Menu, Divider, Space } from "antd";
import "./Layout.css";
import {
  SettingFilled,
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FileAddOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import history from "../../history";
import Icons from "../Icons";

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutComponent({ children, currentPage }) {
  const [collapsed, setCollapsed] = useState(true);

  const links = [
    { name: "Home", url: "/home", icon: <HomeOutlined />, key: "1" },
    { name: "Admin Panel", url: "/admin", icon: <SettingFilled />, key: "2" },
    {
      name: "Create Post",
      url: "/posts/create",
      icon: <FileAddOutlined />,
      key: "3",
    },
  ];

  const socialNetwork = [
    { icon: "linkdin", link: "", key: 1 },
    { icon: "github", link: "", key: 1 },
  ];

  const handlerNavigation = (url, key) => {
    setTimeout(() => {
      history.push(url);
    }, 2000);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  if (currentPage == null) {
    return (
      <LoadingOutlined
        style={{
          fontSize: 30,
          display: "flex",
        }}
      />
    );
  }

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img src="/logo-header.png" alt="logo" />
          </div>

          <Menu theme="dark" defaultSelectedKeys={currentPage} mode="inline">
            {links.map((link) => (
              <Menu.Item
                onClick={() => {
                  handlerNavigation(link.url, link.key);
                }}
                key={link.key}
                icon={link.icon}
              >
                {link.name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: onCollapse,
              }
            )}
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
          <Divider />
          <Footer style={{ textAlign: "center" }}>
            <Space>
              {socialNetwork.map((sn) => {
                return <Icons key={sn.key} icon={sn.icon} link={sn.link} />;
              })}
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
