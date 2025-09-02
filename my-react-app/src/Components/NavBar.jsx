import { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import reactImg from "../assets/react.png";

export default function NavBar() {
  const { color } = useContext(ColorContext);

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-navigationColor"
        style={{ backgroundColor: color }}
      >
        <Container>
          <Navbar.Brand href="/" className="color-navigationText">
            <img
              alt=""
              src={reactImg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Assignment Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="/gallery"
                className="color-navigationText icon__link"
              >
                Gallery
              </Nav.Link>
              <Nav.Link
                href="/calculator"
                className="color-navigationText icon__link"
              >
                Calculator
              </Nav.Link>
              <Nav.Link
                href="/colorpicker"
                className="color-navigationText icon__link"
              >
                Color-picker
              </Nav.Link>
              <Nav.Link
                href="/todolist"
                className="color-navigationText icon__link"
              >
                To-Do-List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
