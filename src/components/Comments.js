import React from "react";
import { useState, useEffect } from "react";
import { List, Avatar } from "antd";
import { PageHeader } from "antd";

export default function Comments({ commentsURL }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(commentsURL)
      .then((response) => response.json())
      .then((output) => setComments(output));
  }, [commentsURL]);

  const toReturn =
    comments.length > 0 ? (
      <div>
        <PageHeader
          className="site-page-header"
          title="Comments"
          subTitle="Comments posted by users on this issue"
        />
        ,
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(comment) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={comment.user.avatar_url} />}
                title={
                  <a href={comment.user.url}>{"User: " + comment.user.login}</a>
                }
                description={comment.body}
              />
            </List.Item>
          )}
        />
      </div>
    ) : (
      <div></div>
    );

  return toReturn;
}
