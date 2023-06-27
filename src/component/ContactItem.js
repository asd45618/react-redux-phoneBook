import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img width={50} src={process.env.PUBLIC_URL + "/user.png"} />
      </Col>
      <Col ls={11}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
