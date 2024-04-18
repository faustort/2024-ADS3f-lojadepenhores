import { Container } from "react-bootstrap";
import CarrosselInicial from "../components/CarrosselInicial";

export default function Inicial() {
  return (
    <Container fluid>
      <Container>
        <CarrosselInicial />
        <h1>Bem bindx a PawShop</h1>
        <h2>A melhor loja de penhores de Ratanabá</h2>
        Eu sou a inicial
      </Container>
    </Container>
  );
}
