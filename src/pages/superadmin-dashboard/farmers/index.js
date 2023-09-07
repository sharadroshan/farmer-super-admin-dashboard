import React, { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { Link } from "react-router-dom";
import LatestActivity from './components/LatestActivities';
import FarmerAnalysis from './components/FarmerAnalysis';
import FarmerSatisfaction from './components/FarmerSatisfaction';
import TopFarmers from './components/TopFarmers';
import FarmerReviews from './components/FarmerReviews';

const Farmers = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Farmers",
            path: "/farmers",
            active: true,
          },
        ]}
        title={"Farmers"}
      />
      <Container>
        <Row>
            <Col md={6} col={12}>
                <FarmerAnalysis/>
            </Col>
            <Col md={6} col={12}>
                <FarmerSatisfaction />
            </Col>
        </Row>
        <Row>
            <Col md={8} col={12}>
                <TopFarmers/>
            </Col>
            <Col md={4} col={12}>
                <FarmerReviews />
            </Col>
        </Row>
        <LatestActivity />
      </Container>
    </>
  );
};

export default Farmers;
