import React from "react";
import { Card, Row, Col, Table, Pagination, Button } from "react-bootstrap";
import CountUp from "react-countup";
import PageTitle from "../../../components/PageTitle";
import { Link } from 'react-router-dom';


function Orders() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Total Order Summary",
            path: "/farmer/crop-orders",
            active: true,
          },
        ]}
        title={"Total Order Summary"}
      />
     <Row>
                <Col>
                    <Card className="bg-gradient-info">
                        <Card.Body>
                            <h5 className="text-white">Total Sales</h5>
                            <h3 className='text-white mt-2 font-24'><strong>INR 2,00,000 +</strong></h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-primary">
                        <Card.Body>
                            <h5 className="text-white">Total Expected Amount</h5>
                            <h3 className='text-white mt-2 font-24'><strong>INR 50, 00, 000 +</strong></h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="bg-gradient-info">
                        <Card.Body>
                            <h5 className="text-white">Total Cancelled Amount</h5>
                            <h3 className='text-white mt-2 font-24'><strong>INR 10, 00, 000 +</strong></h3>
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
                  Total Order Summary
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control w-25"
                  />
                </div>
              </div>
              <div className="table-responsive m-3">
                <Table hover className="m-0">
                  <thead>
                    <tr>
                      <th>Order Id </th>
                      <th>Invoice No. </th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Order Location</th>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>#897656</span>
                      </td>
                      <td><Link to='/pages/invoice'>Ag0001</Link></td>
                      <td>10 Sep 2022</td>
                      <td>In-Transit</td>
                      <td>Indore</td>
                      <td>Abhijit Chaudhary</td>
                      <td>₹ 2,15,000</td>
                      <td>
                        <span className="me-1 bg-success badge rounded-pill bg-primary">
                          Completed
                        </span>
                      </td>
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

export default Orders;
