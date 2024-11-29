import React, { useState, useContext }  from "react";
import { ColorContext } from "../contexts/ColorContext";

import { Container, Row, Col } from "react-bootstrap";

export default function ColorPicker() {
  const { color, setColor } = useContext(ColorContext);
  const [headingColor, setHeadingColor] = useState("#000");

  const handleHeadingColorChange = (e) => {
    setHeadingColor(e.target.value);
  };

  const handleColorNavChange = (e) => {
    setColor(e.target.value);
  };


  return (
    <main className="d-flex flex-column min-vh-100">
      <Container className="text-center">
        <Row>
          <Col>
            <h1 className="mt-5" style={{ color: headingColor }}>
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
                value={headingColor}
                onChange={handleHeadingColorChange}
              ></input>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <label>Change color on navigation:</label>
            <div>
              <input
                type="color"
                value={color}
                onChange={handleColorNavChange}
              ></input>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
