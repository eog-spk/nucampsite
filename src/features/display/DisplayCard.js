import { Card, CardImg, CardTitle, CardText, CardImgOverlay } from "reactstrap";

const DisplayCard = ({ item }) => {
  const { name, image, description } = item;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardImgOverlay>
    </Card>
  );
};

export default DisplayCard;
