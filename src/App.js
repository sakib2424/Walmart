import logo from "./logo.svg";
import "./App.css";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined, CodeOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { Typography } from "antd";
import Home from "./components/Home";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Title style={{ color: "white" }}>Github Issue Browser</Title>
          {/* <CodeOutlined style={{ float: "right", display: "inline-block" }} />  */}
        </Header>
        <Content>
          <Home></Home>
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
