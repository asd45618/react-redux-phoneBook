import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

//1. 왼쪽에는 연락처 등록하는 폼, 오른쪽에는 연락처 리스트와 search창
//2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
//3. 리스트에 아이템이 몇 개인지 볼 수 있다.
//4. 사용자가 유저를 이름으로 검색할 수 있다.

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
