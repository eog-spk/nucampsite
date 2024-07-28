import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/CampsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const selectedCampsite = selectCampsiteById(campsiteId);
  return (
    <Container>
      <SubHeader current={selectedCampsite.name} detail={true} />
      <Row>
        <CampsiteDetail campsite={selectedCampsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
