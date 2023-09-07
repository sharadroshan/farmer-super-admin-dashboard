import React from "react";
import { Card, Row, Col, Table, Pagination, Dropdown, Button } from "react-bootstrap";
import CountUp from "react-countup";

import PageTitle from "../../../components/PageTitle";

function QuizList() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Quiz List",
            path: "/admin/quiz-list",
            active: true,
          },
        ]}
        title={"Quiz List"}
      />
    
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
                      <th>Questions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <div>
                        <h5 className='text-primary'>What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?</h5>
                          <p>A. Default checkbox</p>
                          <p>B. Default checkbox</p>
                          <p>C. Default checkbox</p>
                          <p>D. Default checkbox</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div>
                        <h5 className='text-primary'>What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?</h5>
                          <p>A. Default checkbox</p>
                          <p>B. Default checkbox</p>
                          <p>C. Default checkbox</p>
                          <p>D. Default checkbox</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <div>
                        <h5 className='text-primary'>What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?</h5>
                          <p>A. Default checkbox</p>
                          <p>B. Default checkbox</p>
                          <p>C. Default checkbox</p>
                          <p>D. Default checkbox</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <div>
                        <h5 className='text-primary'>What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?</h5>
                          <p>A. Default checkbox</p>
                          <p>B. Default checkbox</p>
                          <p>C. Default checkbox</p>
                          <p>D. Default checkbox</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <div>
                        <h5 className='text-primary'>What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?</h5>
                          <p>A. Default checkbox</p>
                          <p>B. Default checkbox</p>
                          <p>C. Default checkbox</p>
                          <p>D. Default checkbox</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <div>
                        <h5 className='text-primary'>What is defined in physics as 'a nuclear reaction in which nuclei combine to form more massive nuclei'?</h5>
                          <p>A. Default checkbox</p>
                          <p>B. Default checkbox</p>
                          <p>C. Default checkbox</p>
                          <p>D. Default checkbox</p>
                        </div>
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

export default QuizList;
