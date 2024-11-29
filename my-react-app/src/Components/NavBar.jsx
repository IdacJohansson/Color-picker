import React, { useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import candyCane from "../assets/candy-cane.png";

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
              src={candyCane}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Swedish Candy Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="/products"
                className="color-navigationText icon__link"
              >
                Products
              </Nav.Link>
              <Nav.Link
                href="/contact"
                className="color-navigationText icon__link"
              >
                Contact
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
