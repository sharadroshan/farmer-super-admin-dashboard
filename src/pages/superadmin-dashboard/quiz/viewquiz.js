import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown, Button } from "react-bootstrap";
import CountUp from "react-countup";
import {Link} from 'react-router-dom';
import PageTitle from "../../../components/PageTitle";

function Quiz() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "View Quiz",
            path: "/admin/view-quiz",
            active: true,
          },
        ]}
        title={"View Quiz"}
      />
      <Row>
        <Col>
          <Card className="bg-gradient-pink">
            <Card.Body>
              <h4 className="text-white">Total Questions</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={80} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-orange">
            <Card.Body>
              <h4 className="text-white">Users Attempted</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={120} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-primary">
            <Card.Body>
              <h4 className="text-white">Users Sent To</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={150} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-secondary">
            <Card.Body>
              <h4 className="text-white">Passed Users</h4>
              <h3 className="text-white mt-3" style={{ fontSize: "35px" }}>
                <CountUp duration={1} end={30} separator="," />
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="bg-gradient-danger">
            <Card.Body>
              <h4 className="text-white">Failed Users</h4>
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
                  All Quizs
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                  </div>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover className='mb-0'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Quiz Name</th>
                      <th>Creater Name</th>
                      <th>User Type</th>
                      <th>Creation Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Farmer Quiz</td>
                      <td>Abhijeet Chaudhary</td>
                      <td>Type 1</td>
                      <td>13 Sep 2022</td>
                      <td>
                        <Link to='/admin/quiz-list'>
                            <Button className='btn btn-sm rounded-pill me-1 btn-info'>View</Button>
                        </Link>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Contractor Quiz</td>
                      <td>Abhijeet Chaudhary</td>
                      <td>Type 1</td>
                      <td>13 Sep 2022</td>
                      <td>
                        <Link to='/admin/quiz-list'>
                            <Button className='btn btn-sm rounded-pill me-1 btn-info'>View</Button>
                        </Link>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Farmer Quiz</td>
                      <td>Abhijeet Chaudhary</td>
                      <td>Type 1</td>
                      <td>13 Sep 2022</td>
                      <td>
                        <Link to='/admin/quiz-list'>
                            <Button className='btn btn-sm rounded-pill me-1 btn-info'>View</Button>
                        </Link>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Farmer Quiz</td>
                      <td>Abhijeet Chaudhary</td>
                      <td>Type 1</td>
                      <td>13 Sep 2022</td>
                      <td>
                        <Link to='/admin/quiz-list'>
                            <Button className='btn btn-sm rounded-pill me-1 btn-info'>View</Button>
                        </Link>
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

export default Quiz;
