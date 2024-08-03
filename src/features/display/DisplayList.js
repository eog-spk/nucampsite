import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";

import { selectFeaturedCampsites } from "../campsites/CampsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartners } from "../partners/PartnersSlice";

import { useState } from "react";

const DisplayList = () => {
  const items = [
    selectFeaturedCampsites(),
    selectFeaturedPromotion(),
    selectFeaturedPartners(),
  ];

  return (
    <Row>
      {items.map((item, index) => {
        return (
          <Col md='5' className='m-1' key={index}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
