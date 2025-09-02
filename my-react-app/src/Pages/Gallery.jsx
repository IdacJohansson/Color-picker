import ProductCard from "../components/ProductCard";

import { Container, Row, Col } from "react-bootstrap";

import bananaBubs from "../assets/Banana_Bubs.png";
import raspberryLicoriceSkull from "../assets/Hallon_Lakritsskalle.png";
import foamSanta from "../assets/juleskum_picture.png";
import foamIcecream from "../assets/stora-skumma-glasstrutar_picture.png";
import waterMelon from "../assets/vattenmelonbomber_picture.png";
import greenFrogs from "../assets/grona-grodor_picture.png";

export default function Products() {
    return (
        <>
        <main className="d-flex flex-column min-vh-100">
        <h1 className="mt-5">Products</h1>
        <Container className="text-center">
          <Row>
            <Col className="d-flex justify-content-center">
              <ProductCard 
                
                image={bananaBubs} 
                name="Banana Bubs" 
                price="13 $" />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProductCard
                image={raspberryLicoriceSkull}
                name="Raspberry Licorice Skull"
                price="10 $"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProductCard 
                image={foamSanta} 
                name="Foam Stanta" 
                price="11 $" />
            </Col>
          </Row>
          <Row className="mt-3 mb-5">
            <Col className="d-flex justify-content-center">
              <ProductCard
                image={foamIcecream}
                name="Foam Icecream"
                price="12 $"
              />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProductCard 
                image={waterMelon} 
                name="Water Melons" 
                price="9 $" />
            </Col>
            <Col className="d-flex justify-content-center">
              <ProductCard 
                image={greenFrogs} 
                name="Green Frogs" 
                price="9 $" />
            </Col>
          </Row>
        </Container>
        </main>
      </>
    )
  }