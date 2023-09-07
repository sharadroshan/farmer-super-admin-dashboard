import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import {Link} from "react-router-dom";

import PageTitle from "../../../components/PageTitle";

function TotalPaidInvoices() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Total Paid Invoices",
            path: "/admin/total-paid-invoices",
            active: true,
          },
        ]}
        title={"Total Paid Invoices"}
      />
    
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-18">
                  Total Paid Invoices
                </Card.Title>
                <div className="text-end d-flex justify-content-end">
                   <input type="text" placeholder="search" className="form-control" />
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Sales Date</th>
                      <th>Customer Id</th>
                      <th>Customer Name</th>
                      <th>(₹) Invoice Total</th>
                      <th>(₹) Paid Payment</th>
                      <th>(₹) Due Amount</th>
                      <th>Due Day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>25 sep 2022</td>
                      <td>Anil2022</td>
                      <td>Anil Prajapati</td>
                      <td>(₹) 40,000 </td>
                      <td>(₹) 30,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>26 sep 2022</td>
                      <td>Rajendra2022</td>
                      <td>Rajendra Patil</td>
                      <td>(₹) 80,000 </td>
                      <td>(₹) 70,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>28 sep 2022</td>
                      <td>Mayur2022</td>
                      <td>Mayur Shimpi</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>01 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Manoj Patil</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 0</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>02 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Dhanu Badgujar</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>25 sep 2022</td>
                      <td>Anil2022</td>
                      <td>Anil Prajapati</td>
                      <td>(₹) 40,000 </td>
                      <td>(₹) 30,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>26 sep 2022</td>
                      <td>Rajendra2022</td>
                      <td>Rajendra Patil</td>
                      <td>(₹) 80,000 </td>
                      <td>(₹) 70,000 </td>
                      <td>(₹) 10,000 </td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>28 sep 2022</td>
                      <td>Mayur2022</td>
                      <td>Mayur Shimpi</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>01 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Manoj Patil</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 0</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td><Link to='/pages/invoice'>IN092022</Link></td>
                      <td>02 Oct 2022</td>
                      <td>Cus2022</td>
                      <td>Dhanu Badgujar</td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 20,000 </td>
                      <td>(₹) 5,000 </td>
                      <td>20</td>
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

export default TotalPaidInvoices;
