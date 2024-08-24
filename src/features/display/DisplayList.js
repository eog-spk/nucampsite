import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";

import { selectFeaturedCampsites } from "../campsites/CampsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartners } from "../partners/PartnersSlice";

import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsites(state),
    selectFeaturedPromotion(state),
    selectFeaturedPartners(state),
  ]);

  console.log("items", items);

  return (
    <Row>
      {items.map((item, index) => {
        const { featured, isLoading, errMsg } = item;
        if (isLoading) return <Loading key={index} />;
        if (errMsg) return <Error key={index} errMsg={errMsg} />;

        return (
          featured && (
            <Col md='5' className='m-1' key={index}>
              <DisplayCard item={featured} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
