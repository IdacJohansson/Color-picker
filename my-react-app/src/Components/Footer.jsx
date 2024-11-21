import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="mt-auto">
      <Container fluid>
        <Row style={{ height: "100px" }}>
          <Col className="d-flex flex-column justify-content-center align-items-center text-center bg-navigationColor color-navigationText">
            <p className="fs-5">Swedish Candy Store · 2024</p>
            <Row>
              <Col>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 icon__link"
                >
                  <i className="bi bi-facebook icon"></i>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 icon__link"
                >
                  <i className="bi bi-linkedin icon"></i>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 icon__link"
                >
                  <i className="bi bi-instagram icon"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 icon__link"
                >
                  <i className="bi bi-youtube icon"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
