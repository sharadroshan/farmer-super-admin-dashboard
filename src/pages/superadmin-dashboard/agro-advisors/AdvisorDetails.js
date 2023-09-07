import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import AdvisorProfile from "./Profile/index";
import ReviewsTabs from "./Tabs";
import Casestudies from "./Casestudies";

const AdvisorDetails = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Advisor Detail",
            path: "/admin/advisor-detail",
            active: true,
          },
        ]}
        title={"Advisor Detail"}
      />
      <Container>
        <AdvisorProfile />
       
        <ReviewsTabs />
        <Casestudies />
      </Container>
    </>
  );
};

export default AdvisorDetails;
