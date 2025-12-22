import { Row, Col, Button } from "react-bootstrap";

export default function App() {
  return (
    <Row>
      <Col 
      sm={1}
      className="d-flex flex-column justify-content-start align0items-center vh-100 bg-light"
      style={{ position: "sticky", top: 0 }}
      >
        <Button variant = {"light"} style={{ marginBottom: "7px" }}>
          <i className={"bi bi-instagram"} style={{ "fontSize": "24px" }}></i>
        </Button>
      </Col>
      <Col sm={11}>Main</Col>
    </Row>
  )
}