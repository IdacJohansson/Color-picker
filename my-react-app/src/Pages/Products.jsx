import React from 'react'; 

import ProductCard from "../Components/ProductCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import bananaBubs from "../assets/Banana_Bubs.png";
import raspberryLicoriceSkull from "../assets/Hallon_Lakritsskalle.png";
import foamSanta from "../assets/juleskum_picture.png";
import foamIcecream from "../assets/stora-skumma-glasstrutar_picture.png";
import waterMelon from "../assets/vattenmelonbomber_picture.png";
import greenFrogs from "../assets/grona-grodor_picture.png";

export default function Products() {
    return (
        <>
        <h1 className="mt-5">Products</h1>
        <Container>
          <Row>
            <Col>
              <ProductCard 
                image={bananaBubs} 
                name="Banana Bubs" 
                price="13 $" />
            </Col>
            <Col>
              <ProductCard
                image={raspberryLicoriceSkull}
                name="Raspberry Licorice Skull"
                price="10 $"
              />
            </Col>
            <Col>
              <ProductCard 
                image={foamSanta} 
                name="Foam Stanta" 
                price="11 $" />
            </Col>
          </Row>
          <Row className="mt-3 mb-3">
            <Col>
              <ProductCard
                image={foamIcecream}
                name="Foam Icecream"
                price="12 $"
              />
            </Col>
            <Col>
              <ProductCard 
                image={waterMelon} 
                name="Water Melons" 
                price="9 $" />
            </Col>
            <Col>
              <ProductCard 
                image={greenFrogs} 
                name="Green Frogs" 
                price="9 $" />
            </Col>
          </Row>
        </Container>
      </>
    )
  }