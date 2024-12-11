import { Container } from "react-bootstrap";
import { SecondsCounter } from "../components/SecondsCounter";

export const CounterPage = () => {
  return (
    <Container>
      <h1>Counter Content</h1>
      <SecondsCounter />
    </Container>
  );
};
