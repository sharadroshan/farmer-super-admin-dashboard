import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown, Button } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function Comments() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Comment & Review",
            path: "/admin/comment-review",
            active: true,
          },
        ]}
        title={"Comment & Review"}
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
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Total Reviews</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={230} separator="," />
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
                  All Comments & Reviews
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <Dropdown>
                    <Dropdown.Toggle variant="primary" id="crop">
                      Filter By Publish / Unpublish
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Publish
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Unpublish
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
                      <th>Product Id</th>
                      <th>Product Name</th>
                      <th>Customer Name</th>
                      <th>Rating</th>
                      <th>Comment</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1200</td>
                      <td>Tomato</td>
                      <td>Mayur Shimpi</td>
                      <td>4.5</td>
                      <td>Useful Product</td>
                      <td>11 Sep 2022</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1 btn-success'>Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-warning '>Un-Publish</Button>
                        <Button className='btn btn-sm rounded-pill me-1 btn-info'>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
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

export default Comments;
