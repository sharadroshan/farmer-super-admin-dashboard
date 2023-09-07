import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function ViewUsers() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "View Users",
            path: "/admin/view-users",
            active: true,
          },
        ]}
        title={"View Users"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-cash-usd"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">INR 
                    <span className='ms-1'>
                       <CountUp duration={1} end={18000} separator="," />
                    </span>
                  </h3>
                  <p className="text-white mb-0">Total Amount</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-purple">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-calendar-month"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    <span className='me-1'>
                      <CountUp duration={1} end={10} separator="," />
                    </span>
                    Month
                  </h3>
                  <p className="text-white mb-0">Total Duration</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <div className="d-flex align-items-start">
                <div className="avatar-lg  p-4">
                  <i className="avatar-title display-4 m-0 text-white mdi mdi-login"></i>
                </div>
                <div className="flex-1 text-end align-self-center">
                  <h3 className="mt-0 text-white">
                    Signed
                  </h3>
                  <p className="text-white mb-0">Signing Status</p>
                </div>
              </div>
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
                  Contract Creator List
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Newest</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">A - Z</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover className='m-0'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Contract Name</th>
                      <th>Creater Name</th>
                      <th>Creation Date</th>
                      <th>Created For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Type 1</td>
                      <td>Mayur shimpi</td>
                      <td>16 Sep 2022</td>
                      <td>Abhijeet Chaudhary</td>
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

export default ViewUsers;
