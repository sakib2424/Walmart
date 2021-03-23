import React from "react";
import { Card } from "antd";
import { Statistic, Row, Col, Button, Avatar, Tag } from "antd";
import Comments from "./Comments";

const { Meta } = Card;

export default function IssueDisplay({ issueToDisplay, switchDisplayToHome }) {
  const outputDate = (dateObject) => {
    let dateObj = new Date(dateObject);
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    const output = month + "/" + day + "/" + year;

    return output;
  };

  const toReturn = issueToDisplay ? (
    <div>
      <Button
        type="primary"
        onClick={() => {
          switchDisplayToHome();
        }}
        block
      >
        Go Back To Home Page
      </Button>
      <Card
        title={issueToDisplay.title}
        bordered={false}
        style={{ width: "90%", marginLeft: "5%", marginTop: "2%" }}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic
                title="Date Created"
                value={outputDate(issueToDisplay.created_at)}
              ></Statistic>
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic
                title="Last Updated"
                value={outputDate(issueToDisplay.updated_at)}
              ></Statistic>
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic title="ID" value={issueToDisplay.id}></Statistic>
            </Card>
          </Col>

          <Col span={6}>
            <Card>
              <Statistic
                title="Number Of Comments"
                value={issueToDisplay.comments}
              ></Statistic>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "1%" }}>
          <Col span={24}>
            <Card>
              <Card title="Body" bordered={false}>
                {issueToDisplay.body}
              </Card>
            </Card>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "1%" }}>
          <Col span={4}></Col>

          <Col span={8}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Meta
                avatar={<Avatar src={issueToDisplay.user.avatar_url} />}
                title={issueToDisplay.user.login}
                //   description="This is the description"
              />
              <a href={issueToDisplay.user.url}>Profile URL</a>
            </Card>
          </Col>

          <Col span={8}>
            <Card>
              <Card title="Status" bordered={false}>
                <Tag
                  color={issueToDisplay.state === "open" ? "geekblue" : "green"}
                >
                  {issueToDisplay.state.toUpperCase()}
                </Tag>
              </Card>
            </Card>
          </Col>

          <Col span={4}></Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "1%" }}>
          <Col span={24}>
            <Comments commentsURL={issueToDisplay.comments_url}></Comments>
          </Col>
        </Row>
      </Card>
    </div>
  ) : (
    <div></div>
  );
  return toReturn;
}
