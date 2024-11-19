import ProductCard from "./Components/ProductCard";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import bananaBubs from "../src/assets/Banana_Bubs.png";
import raspberryLicoriceSkull from "../src/assets/Hallon_Lakritsskalle.png";
import foamSanta from "../src/assets/juleskum_picture.png";
import foamIcecream from "../src/assets/stora-skumma-glasstrutar_picture.png";
import waterMelon from "../src/assets/vattenmelonbomber_picture.png";
import greenFrogs from "../src/assets/grona-grodor_picture.png";

function App() {
  return (
    <>
      <h1 className="mt-2">Swedish Candy Store</h1>
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
  );
}

export default App;
