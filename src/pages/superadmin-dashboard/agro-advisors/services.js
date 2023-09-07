import React from "react";
import Container from "react-bootstrap/Container";
import PageTitle from "../../../components/PageTitle";
import ServiceProfile from "./ProfileService/index";
import ReviewsTabs from "./Tabs";
import Casestudies from "./Casestudies";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Select from "react-select";


const Services = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Agro Advisory Service",
            path: "/admin/agro-advisory-services",
            active: true,
          },
        ]}
        title={"Agro Advisory Service"}
      />
      <Container>
        <ServiceProfile />
        <Card>
          <Card.Body>
            <h4 className="text-primary">Expertise</h4>
              <Form.Group as={Col} md={4} className="mb-2 mt-3">
                <Form.Label>Select Multiple Expertise </Form.Label>
                <Select
                isMulti={true}
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "expertise1", label: "Expertise 1" },
                    { value: "expertise2", label: "Expertise 2" },
                    { value: "expertise3", label: "Expertise 3" },
                  ]}
                ></Select>
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Add Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter Amount" />
              </Form.Group>
              <Form.Group as={Col} md={4} className="mb-2">
                <Form.Label>Consultation charges</Form.Label>
                <Form.Control type="number" placeholder="Enter Consultation charges" />
              </Form.Group>
              <Button>Submit</Button>
          </Card.Body>
        </Card>
        <ReviewsTabs />
        <Casestudies />
      </Container>
    </>
  );
};

export default Services;
