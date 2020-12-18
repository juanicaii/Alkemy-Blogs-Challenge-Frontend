import { Layout, Menu, Divider, Space } from "antd";
import "./Layout.css";
import {
  LinkedinOutlined,
  GithubOutlined,
  SettingFilled,
  HomeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import history from "../../history";

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutComponent({ children }) {
  const [currentPage, setCurrentPage] = useState(
    history.location.pathname === "/home" ? "1" : "2"
  );
  const [collapsed, setCollapsed] = useState(true);

  const links = [
    { name: "Home", url: "/home", icon: <HomeOutlined />, key: "1" },
    { name: "Admin Panel", url: "/admin", icon: <SettingFilled />, key: "2" },
  ];

  const openGithub = () => {
    window.open("https://github.com/juaniseijas00", "_blank");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/juanignacioseijas/", "_blank");
  };

  const handlerNavigation = (url, key) => {
    setCurrentPage(key);

    history.push(url);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img src="/logo-header.png" alt="logo" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={currentPage} mode="inline">
            {links.map((link) => {
              return (
                <Menu.Item
                  onClick={() => {
                    handlerNavigation(link.url, link.key);
                  }}
                  key={link.key}
                  icon={link.icon}
                >
                  {link.name}
                </Menu.Item>
              );
            })}
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
              <LinkedinOutlined
                onClick={openLinkedin}
                style={{ fontSize: 30 }}
              />
              <GithubOutlined onClick={openGithub} style={{ fontSize: 30 }} />
            </Space>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
