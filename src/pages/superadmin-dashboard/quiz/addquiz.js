import React , {useState} from "react";
import { Card, Row, Col, Pagination, Button , Modal, Form} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import {Link} from 'react-router-dom';
import { FormInput } from "../../../components/form";


function QuizList() {
    //Add modal
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Create Quiz Catogery",
            path: "/admin/add-quiz",
            active: true,
          },
        ]}
        title={"Create Quiz Catogery"}
      />
    
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                Create Quiz Catogery
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <div className="form-group h-100">
                    <input type="text" className="form-control h-100" placeholder="Search"/>
                  </div>
                  <Button onClick={handleShowAdd} className="ms-3">Add New Quiz</Button>
                </div>
              </div>
            <Row className="my-3">
                <Col md={4} sm={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div>
                                <h5>Create Quiz Type 1</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <Link to='/admin/add-question'><Button className="w-100 mt-3 rounded-pill">Add Question</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div>
                                <h5>Create Quiz Type 2</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <Link to='/admin/add-question'><Button className="w-100 mt-3 rounded-pill">Add Question</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={12}>
                    <Card className="shadow">
                        <Card.Body>
                            <div>
                                <h5>Create Quiz Type 3</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6>Per Question Mark -</h6>
                                    <h6>01</h6>
                                </div>
                                <Link to='/admin/add-question'><Button className="w-100 mt-3 rounded-pill">Add Question</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={showAdd} onHide={handleCloseAdd}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add New Quiz</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Quiz Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Quiz Name" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Quiz Detail</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={3}
                            key="textarea"
                            placeholder='Enter Quiz Detail'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Per Question Mark</Form.Label>
                            <Form.Control type="text" placeholder="Enter Per Question Mark" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Total Marks</Form.Label>
                            <Form.Control type="text" placeholder="Enter Total Marks" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Total Questions</Form.Label>
                            <Form.Control type="text" placeholder="Enter Total Questions" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Total Time</Form.Label>
                            <Form.Control type="text" placeholder="Enter Total Time" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAdd}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseAdd}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Modal>
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
