import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <main className="d-flex flex-column min-vh-100">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="mt-5">Calculator</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button
              variant="secondary"
              size="lg"
              className="mx-2"
              onClick={increment}
            >
              Increment +
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="mx-2"
              onClick={decrement}
            >
              Decrement -
            </Button>
            <Button variant="dark" size="lg" className="mx-2" onClick={reset}>
              Reset
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Counter: {counter} </h2>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
