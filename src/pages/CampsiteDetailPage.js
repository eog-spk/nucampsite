import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsites/CampsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList";
import SubHeader from "../components/SubHeader";
import { useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const selectedCampsite = useSelector(selectCampsiteById(campsiteId));
  console.log("campsiteId", campsiteId);
  console.log("selectedCampsite1", selectedCampsite);

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const error = useSelector((state) => state.campsites.error);
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (error) {
    content = <Error error={error} />;
  } else if (selectedCampsite) {
    console.log("selectedCampsite2", selectedCampsite);
    content = (
      <Row>
        <CampsiteDetail campsite={selectedCampsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    );
  } else {
    content = <div>No campsite found.</div>;
  }

  return (
    <Container>
      {selectedCampsite && (
        <SubHeader current={selectedCampsite.name} detail={true} />
      )}
      <Row>{content}</Row>
    </Container>
  );
};

export default CampsiteDetailPage;
