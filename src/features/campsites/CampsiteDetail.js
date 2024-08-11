import { Card, CardImg, CardBody, CardText, Col } from "reactstrap";

const CampsiteDetail = ({ campsite }) => {
  const { name, image, description } = campsite;

  return (
    <Col md='5' className='m-1'>
      <Card>
        <CardImg top width='100%' src={image} alt={name} />
        <CardBody>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CampsiteDetail;
