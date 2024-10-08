import { Card, CardImg, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";

const CampsiteCard = ({ campsite }) => {
  const { id, name, image } = campsite;

  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;
