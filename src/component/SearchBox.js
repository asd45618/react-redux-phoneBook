import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  let [keyWord, setKeyWord] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyWord } });
  };

  return (
    <Row onSubmit={searchByName} className="searchBox">
      <Col lg={10} className="textSection">
        <Form.Control
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={(event) => setKeyWord(event.target.value)}
        />
      </Col>
      <Col lg={2}>
        <Button type="submit">찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
