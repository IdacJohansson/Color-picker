import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <main className="d-flex flex-column min-vh-100">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="mt-5">WELCOME</h1>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p>
              This project was built as part of a React learning assignment and
              gradually expanded through multiple tasks.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>Gallery</strong> – Browse items with images, names, and
                prices.
              </li>
              <li className="mb-2">
                <strong>Navigation & Footer</strong> – A structured multi-page
                layout with routing.
              </li>
              <li className="mb-2">
                <strong>Counter</strong> – Interactive counter with increment,
                decrement, and reset.
              </li>
              <li className="mb-2">
                <strong>Color Picker</strong> – Pick a color and see the UI
                update dynamically.
              </li>
              <li className="mb-2">
                <strong>To-Do List</strong> – Add, manage, and remove tasks with
                ease.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
