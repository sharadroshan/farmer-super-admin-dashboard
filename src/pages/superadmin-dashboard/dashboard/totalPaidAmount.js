import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function TotalPaidAmount() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Total Paid Amount",
            path: "/admin/total-paid-amount",
            active: true,
          },
        ]}
        title={"Total Paid Amount"}
      />
    
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-18">
                  Total Paid Amount
                </Card.Title>
                <div className="text-end d-flex justify-content-end">
                   <input type="text" placeholder="search" className="form-control" />
                </div>
              </div>

              <div className="table-responsive my-2">
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Name</th>
                      <th>Crop Name</th>
                      <th>Transaction Date</th>
                      <th>Paid Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Michle Jhon	</td>
                      <td>Tomato</td>
                      <td>10 Sep 2022	</td>
                      <td>₹ 10,000	</td>
                      <td><span className='px-2 py-1 bg-success text-white rounded-pill font-12'>Paid</span></td>
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

export default TotalPaidAmount;
