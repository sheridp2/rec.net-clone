import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button, ListGroup } from "react-bootstrap";
import { BiCrown } from "react-icons/bi";

import featuredData from "./featuredData";

export default function Featured() {
  const [featured, setFeatured] = useState([]);

  async function fetchComments(data) {
    let temp = data;
    for (let i = 0; i < data.length; i++) {
      await fetch(`https://api.rec.net//api/images/v1/${data[i].Id}/comments`)
        .then((comments) => comments.json())
        .then((commentsArray) => (temp[i].comments = commentsArray));
    }
    console.log(temp);
    setFeatured(temp);
  }

  const fetchPosts = async () => {
    await fetch(
      "https://api.rec.net/api/images/v3/feed/global?skip=0&take=10&since=2021-08-16T17%3A28%3A38.384Z"
    ).then((response) =>
      response.json().then((data) => {
        fetchComments(data);
      })
    );
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={3}>
          <Button variant="outline-dark">
            <BiCrown size={20} />
            View Top Creators
          </Button>
          <div
            style={{
              boxShadow:
                "0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%)",
            }}
          >
            <h5>Featured Rooms</h5>
            {featuredData.Rooms.map((item) => {
              let { RoomId, RoomName, ImageName } = item;
              return (
                <div key={RoomId} style={{ padding: "15px" }}>
                  <a href={`https://rec.net/room/${RoomName}`}>
                    <Image
                      fluid
                      src={`https://img.rec.net/${ImageName}?cropSquare=true&width=512&height=512`}
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <hr />
        </Col>
        <Col sm={9}>
          <h3>Take a look at what's happening right now in Rec Room</h3>
          <div>
            {featured.map((post) => {
              let { Id, ImageName, comments, CheerCount } = post;

              return (
                <div className="post-container" key={Id}>
                  <Image fluid src={`https://img.rec.net/${ImageName}`} />
                  <span>{CheerCount} Cheers!</span>
                  <ul>
                    {comments.map((comment) => {
                      return (
                        <li>
                          {comment.PlayerId} : {comment.Comment}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}
