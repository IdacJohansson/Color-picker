import React from "react";
import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function ColorPicker() {
  const [currentColor, setCurrentColor] = useState("#ff0000");

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  return (
    <main className="d-flex flex-column min-vh-100">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="mt-5" style={{ color: currentColor }}>
              Color-Picker
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <label>Change color on heading:</label>
            <div>
              <input
                type="color"
                value={currentColor}
                onChange={handleColorChange}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
