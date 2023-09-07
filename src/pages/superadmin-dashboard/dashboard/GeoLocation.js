import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function GeoLocation() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Geo Location",
            path: "/admin/geo-location",
            active: true,
          },
        ]}
        title={"Geo Location"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Agro advisory</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={80} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-orange">
            <Card.Body>
              <h4 className="text-white">Laboratory</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={120} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white">Farmer</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={150} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-info">
            <Card.Body>
              <h4 className="text-white">Contractor</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={30} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  Total Geo Locations
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Abhijeet Chaudhary
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Anil Prajapati
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Mayur Shimpi
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                      Select State
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        State 1
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        State 2
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        State 3
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        State 4
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="ms-2">
                    <Dropdown.Toggle variant="primary" id="crop">
                     Select City
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        City 1
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        City 2
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        City 3
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover className='mb-0'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>State</th>
                      <th>City</th>
                      <th>Pincode</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mayur Shimpi</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td>452010</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mayur Shimpi</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td>452010</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mayur Shimpi</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td>452010</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mayur Shimpi</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td>452010</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mayur Shimpi</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td>452010</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mayur Shimpi</td>
                      <td>Madhya Pradesh</td>
                      <td>Indore</td>
                      <td>452010</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default GeoLocation;
