import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

const DisplayCard = ({ item }) => {
  const { name, image, description } = item[0];
  console.log("DisplayCard:", item);

  return (
    <Card>
      <CardImg width='100%' src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
