import React from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  FormControl,
  Button,
  Navbar,
} from "react-bootstrap";

import { BiCalendarEvent, BiBell, BiHome } from "react-icons/bi";

export default function NavBar() {
  return (
    <Navbar bg="light" sticky="top" className="nav-main">
      <Container>
        <Row className="nav-row">
          <Col>
            <img src="https://cdn.rec.net/static/logos/default.png" />
          </Col>
          <Col sm={4}>
            <InputGroup>
              <FormControl placeholder="Search..." aria-label="Search..." />
            </InputGroup>
          </Col>
          <Col sm={2}>
            <a>
              <span>Rooms</span>
              <BiHome size={20} style={{ marginLeft: 10 }} />
            </a>
          </Col>
          <Col sm={2}>
            <a>
              <span>Events</span>
              <BiCalendarEvent size={20} style={{ marginLeft: 10 }} />
            </a>
          </Col>
          <Col>
            <BiBell size={20} style={{ marginLeft: 10 }} />
          </Col>
          {/* <Col>LOGIN</Col> */}
          {/* <Col>
            <Button variant="outline-danger">Download</Button>
          </Col> */}
        </Row>
      </Container>
    </Navbar>
  );
}
