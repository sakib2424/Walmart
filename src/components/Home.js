import { Row, Col, Table, Tag } from "antd";
import React, { useState, useEffect } from "react";

export default function Home({ retrievedData, switchDisplayToIssue }) {
  const [displayData, setDisplayData] = useState([]);

  const filterDisplayData = (output) => {
    return output.map((item) => {
      return {
        title: [item.title, item.number],
        number: item.number,
        state: item.state,
      };
    });
  };

  // When data is set, create a filtered version for display
  useEffect(() => {
    setDisplayData(filterDisplayData(retrievedData));
  }, [retrievedData]);

  const displayColumns = [
    {
      title: "Issue Title",
      dataIndex: "title",
      key: "title",
      //   render: (text) => <p>{text}</p>
      render: (text) => (
        <a
          onClick={(e) => {
            console.log("hello");
            switchDisplayToIssue(e, text[1]);
          }}
        >
          {text[0]}
        </a>
      ),
    },
    {
      title: "Issue Number",
      dataIndex: "number",
      key: "number",
      render: (num) => (
        <p
          onClick={(e) => {
            console.log("hello");
            switchDisplayToIssue(e, num);
          }}
        >
          {num}
        </p>
      ),
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
