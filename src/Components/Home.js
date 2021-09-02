import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";

import { useGlobalContext } from "../context";
import Featured from "./Featured.js";
import subData from "./data.js";

async function getUser() {
  try {
    const response = await axios.get("/user?ID=12345");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function regularFetch() {
  await fetch("http://example.com/movies.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function Home() {
  const { loggedIn } = useGlobalContext();
  return (
    <div className="main-container">
      {!loggedIn ? (
        <>
          <Container fluid>
            <Row className="banner-container">
              <Col className="main-banner"></Col>
            </Row>
            <Row className="sub-banners">
              <Col></Col>
              <Col>
                <div className="main-text">
                  {loggedIn ? (
                    <h1
                      style={{
                        color: "white",
                        fontSize: "3.0rem",
                      }}
                    >
                      Welcome back User!
                    </h1>
                  ) : (
                    <>
                      <h1
                        style={{
                          color: "white",
                          fontSize: "3.0rem",
                        }}
                      >
                        Join the Fun for Free!
                      </h1>
                      <Button variant="danger">Download</Button>
                    </>
                  )}
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          <Container
            className="up-content"
            fluid
            style={{ backgroundColor: "white" }}
          >
            <Container>
              <Row style={{ paddingTop: 20 }}>
                {subData.map((item) => {
                  const { title, image, description } = item;
                  return (
                    <Col key={title} sm={6} md={6} lg={3}>
                      <div>
                        <Image fluid src={image} />
                      </div>
                      <p style={{ paddingTop: 10 }}>{title}</p>
                      <p>{description}</p>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </Container>
        </>
      ) : (
        <>
          <div></div>
        </>
      )}
      <Featured />
    </div>
  );
}

export default Home;
