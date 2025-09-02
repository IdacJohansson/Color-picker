import Card from "react-bootstrap/Card";

export default function ProductCard({ image, name, price }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{ width: "150px", height: "auto" }}
          className="d-block mx-auto"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mt-3">Price: {price}</Card.Subtitle>
          <Card.Text className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            deserunt pariatur unde maxime tenetur, saepe modi praesentium esse
            accusamus.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
