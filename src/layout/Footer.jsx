import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col md={2}>Coluna 1</Col>
          <Col md={2}>Coluna 2</Col>
          <Col md={2}>Coluna 3</Col>
          <Col md={2}>Coluna 4</Col>
          <Col md={4}>Coluna 5</Col>
        </Row>
      </Container>
    </>
  );
}
