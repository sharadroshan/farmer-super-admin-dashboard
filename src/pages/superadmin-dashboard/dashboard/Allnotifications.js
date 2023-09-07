import React, { useState } from "react";
import { Card, Row, Col, Alert, Pagination, Tab, Tabs } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom';


function AllNotifications() {
  const [key, setKey] = useState("all");
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Notifications",
            path: "/farmer/notifications",
            active: true,
          },
        ]}
        title={"Notifications"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">All Notifications</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={200} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-purple">
            <Card.Body>
              <h4 className="text-white">Advisory Notifications</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={32} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-orange">
            <Card.Body>
              <h4 className="text-white">Laboratory Notifications</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={30} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white">Contractor Notifications</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={55} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-danger">
            <Card.Body>
              <h4 className="text-white">Super Agrilo Notifications</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={90} separator="," /> +
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="mb-4 d-flex" >
                <h4 className="w-25">Search Notification</h4>
                <input type="text" placeholder="Search Notification" className="form-control"/>
              </div>
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="all" title="All">
                  <h4 className="header-title mb-3">All Notifications</h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="advisory" title="Advisory">
                  <h4 className="header-title mb-3">Advisory Notifications</h4>

                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="laboratory" title="Laboratory">
                  <h4 className="header-title mb-3">
                    Laboratory Notifications
                  </h4>

                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="contractor" title="Contractor">
                  <h4 className="header-title mb-3">
                    Contractor Notifications
                  </h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="SuperAgriloAdmin" title="Super agrilo Admin">
                  <h4 className="header-title mb-3">
                    Super agrilo Admin Notifications
                  </h4>
                  {["primary", "secondary"].map((color, index) => {
                    return (
                      <Alert variant={color} key={index}>
                        This is a <strong>{color}</strong> Notification
                      </Alert>
                    );
                  })}
                  <Alert variant="success">
                    <i className="mdi mdi-check-all me-2"></i>This is a{" "}
                    <strong>success</strong> Notification
                  </Alert>
                  <Alert variant="danger">
                    <i className="mdi mdi-block-helper me-2"></i> This is a{" "}
                    <strong>danger</strong> Notification
                  </Alert>
                  <Alert variant="warning">
                    <i className="mdi mdi-alert-outline me-2"></i> This is a{" "}
                    <strong>warning</strong> Notification
                  </Alert>
                  <Alert variant="info">
                    <i className="mdi mdi-alert-circle-outline me-2"></i> A
                    simple info alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="light">
                    A simple light alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Alert variant="dark" className="mb-0">
                    A simple dark alert with{" "}
                    <Link to="#" className="alert-link">
                      an example link
                    </Link>
                    . Give it a click if you like.
                  </Alert>
                  <Pagination style={{ marginTop: "40px" }}>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Ellipsis />
                    <Pagination.Item disabled>{10}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default AllNotifications;
