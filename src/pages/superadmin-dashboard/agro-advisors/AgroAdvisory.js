import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import CountUp from "react-countup";
import Select from "react-select";
import PageTitle from "../../../components/PageTitle";
import { Link } from "react-router-dom";

const AgroAdvisory = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Agro Advisory",
            path: "/admin/crop-insurance",
            active: true,
          },
        ]}
        title={"Agro Advisory"}
      />
      <Container>
      <Row>
        <Col md={4} sm={12}>
          <Card className="bg-primary">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <h4 className="text-white">Total Paid Amount</h4>
                <h4 className="text-white " style={{ fontSize: "25px" }}>
                  <CountUp duration={1} end={80000} separator="," />
                </h4>
              </div>
             
              <Link to='/admin/total-paid-amount'>
                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">View</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="bg-primary">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <h4 className="text-white">Total Paid Invoices</h4>
                <h4 className="text-white " style={{ fontSize: "25px" }}>
                  <CountUp duration={1} end={1200} separator="," />
                </h4>
              </div>
              <Link to='/admin/total-paid-invoices'>
                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">View</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={12}>
          <Card className="bg-primary">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <h4 className="text-white">Total Pending Amount</h4>
                <h4 className="text-white " style={{ fontSize: "25px" }}>
                  <CountUp duration={1} end={15000} separator="," />
                </h4>
              </div>
              <Link to='/admin/total-pending-amount'>
                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">View</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        <Row>
          <Col md={3} sm={12}>
              <Form.Group  className="mb-2">
                <Form.Label>Select Cultivation Type </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "cultivation1", label: "Organic Cultivation" },
                    { value: "cultivation2", label: "Biological Cultivation" },
                    { value: "cultivation3", label: "CHemical + Biological Cultivation" },
                  ]}
                ></Select>
              </Form.Group>
          </Col>
          <Col md={3} sm={12}>
              <Form.Group  className="mb-2">
                <Form.Label>Select State </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "state1", label: "State 1" },
                    { value: "state2", label: "State 2" },
                    { value: "state3", label: "State 3" },
                  ]}
                ></Select>
              </Form.Group>
          </Col>
          <Col md={3} sm={12}>
              <Form.Group  className="mb-2">
                <Form.Label>Select City </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "city1", label: "City 1" },
                    { value: "city2", label: "City 2" },
                    { value: "city3", label: "City 3" },
                  ]}
                ></Select>
              </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-1.png"
                style={{
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <Card.Title className="text-info">Prateek Gupta</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 3 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/admin/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                style={{
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                  margin: "auto",
                  marginTop: "30px",
                }}
                src="http://project.testproject.in/public/assets/img/photos/avatar-2.png"
              />
              <Card.Body>
                <Card.Title className="text-info">Shreeya Jain</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 2 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/admin/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-3.png"
                style={{
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <Card.Title className="text-info">Minali Patil</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 5 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/admin/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                width="100"
                height="250"
                variant="top"
                src="http://project.testproject.in/public/assets/img/photos/avatar-4.png"
                style={{
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                  margin: "auto",
                  marginTop: "30px",
                }}
              />
              <Card.Body>
                <Card.Title className="text-info">Pritam Singh</Card.Title>
                <Card.Text>
                  <b>Advisor Experience 4 Years 2 Months</b>
                  <br />
                  Virgil Abloh’s Off-White is a streetwear-inspired collection
                  that continues to break away from the conventions of
                  mainstream fashion.
                </Card.Text>
                <Link to="/admin/advisor-detail">
                  <Button className="btn rounded-pill bg-gradient-info btn w-100">
                    Contact Me
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AgroAdvisory;
