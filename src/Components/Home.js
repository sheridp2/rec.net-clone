import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

import Featured from "./Featured.js";

import subData from "./data.js";

function Home() {
  return (
    <div className="main-container">
      <Container fluid>
        <Row className="banner-container">
          <Col className="main-banner"></Col>
        </Row>
        <Row className="sub-banners">
          <Col></Col>
          <Col>
            <div className="main-text">
              <h1
                style={{
                  color: "white",
                  fontSize: "3.0rem",
                }}
              >
                Join the Fun for Free!
              </h1>
              <Button variant="danger">Download</Button>
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
                <Col sm={6} md={6} lg={3}>
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
      <Featured />
    </div>
  );
}

export default Home;
