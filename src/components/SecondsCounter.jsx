import { useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";

export const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  console.log(seconds);

  return (
    <>
      <Container style={{ display: "flex" }}>
        {String(seconds)
          .split("")
          .map((item, index) => {
            return (
              <h1 key={index}>
                <Badge bg="primary">{item}</Badge>
              </h1>
            );
          })}
      </Container>

      <Container>
        <Button onClick={() => setSeconds(seconds + 1)}>+</Button>
        <Button onClick={() => setSeconds(seconds - 1)}>-</Button>
      </Container>
    </>
  );
};
