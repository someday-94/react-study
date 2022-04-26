import "./App.css";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Row, Col } from "react-bootstrap";
import s1 from "./s1.png";
import s2 from "./s2.png";
import s3 from "./s3.png";
import datas from "./data";

function App() {

  let [data, setData] = useState(datas);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="jumbotron">
        <h1>Test, Project!</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>

      <Container>
        <Row>
          <Col md={4}>
            <img src={s1} alt="s1" width="100%" />
            <h4>Standard-1</h4>
            <p>HEIndex0.50</p>
          </Col>
          <Col  md={4}>
            <img src={s2} alt="s2" width="100%" />
            <h4>Standard-2</h4>
            <p>CERate0.30</p>
          </Col>
          <Col  md={4}>
            <img src={s3} alt="s3" width="100%" />
            <h4>Standard-3</h4>
            <p>Gamma0.68</p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
