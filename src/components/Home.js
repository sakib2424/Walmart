import React from "react";
import { Row, Col } from "antd";
import { Layout } from "antd";
import { Input, Space } from "antd";
import { AudioOutlined, CodeOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Table, Tag } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

export default function Home() {
  const URL = "https://api.github.com/repos/walmartlabs/thorax/issues";

  const [retrievedData, setRetrievedData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const filterDisplayData = (output) => {
    return output.map((item) => {
      return { title: item.title, number: item.number, state: item.state };
    });
  };

  const displayColumns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Issue Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "State",
      key: "state",
      dataIndex: "state",
      render: (state) => {
        let color = state === "open" ? "geekblue" : "green";
        return (
          <Tag color={color} key={state}>
            {state.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  // Response is being sliced
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((output) => setRetrievedData(output));
  }, []);

  // When data is set, create a filtered version for display
  useEffect(() => {
    setDisplayData(filterDisplayData(retrievedData));
  }, [retrievedData]);
  return (
    <Row>
      <Col span={4}></Col>
      <Col span={16}>
        <Table
          columns={displayColumns}
          dataSource={displayData}
          style={{ marginTop: "30px" }}
        />
      </Col>
      <Col span={4}></Col>
    </Row>
  );
}
