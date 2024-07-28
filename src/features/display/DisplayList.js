import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";

import { selectFeaturedCampsites } from "../campsites/CampsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

import { useState } from "react";

const DisplayList = () => {
  const items = [selectFeaturedCampsites(), selectFeaturedPromotion()];

  return (
    <Row>
      {items.map((item, index) => {
        return (
          <Col md="5" className="m-1" key={index}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
