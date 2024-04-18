import { Container } from "react-bootstrap";

export default function Inicial() {
  return (
    <Container fluid>
      <Container>Eu sou a inicial</Container>
      <Container
        fluid
        style={{
          backgroundColor: "tomato",
        }}
      >
        Largura total
      </Container>
      <div className="container ">Eu sou a inicial</div>
      <div className="container-fluid">largura total</div>
    </Container>
  );
}
