import React, {useState} from "react";
import { Card, Row, Col, Table, Pagination, Modal, Button, Form } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/form";

function QuizList() {
//Add modal
  const [showAdd, setShowAdd] = useState(false);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

//edit modal
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Add Question",
            path: "/admin/add-question",
            active: true,
          },
        ]}
        title={"Add Question"}
      />
    
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="text-info w-100 font-24">
                  All Questions
                </Card.Title>
                <div className="w-100 text-end d-flex justify-content-end">
                  <div className="form-group">
                    <input type="text" className="form-control me-2 h-100" placeholder="Search"/>
                  </div>
                  <Button onClick={handleShowAdd} className="ms-3">Add Question</Button>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover className='mb-0'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th className="w-50">Questions</th>
                      <th>A-option</th>
                      <th>B-option</th>
                      <th>C-option</th>
                      <th>D-option</th>
                      <th>Answer</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        </td>
                        <td>Option 1</td>
                        <td>Option 2</td>
                        <td>Option 3</td>
                        <td>Option 4</td>
                        <td>A</td>
                        <td>
                            <div className="flex">
                                <Button className='me-1 btn-sm rounded-pill' onClick={handleShowEdit}>Edit</Button>
                                <Button className='btn-danger btn-sm rounded-pill'>Delete</Button>
                            </div>
                        </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <Modal show={showAdd} onHide={handleCloseAdd}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Question</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={3}
                            key="textarea"
                            placeholder='Question'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option A</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option A" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option B</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option B" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option C</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option C" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option D</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option D" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option Correct Answer" />
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
                <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                    <Modal.Title>Edit Question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Question</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={3}
                            key="textarea"
                            placeholder='Question'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option A</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option A" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option B</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option B" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option C</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option C" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Option D</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option D" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control type="text" placeholder="Enter Option Correct Answer" />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseEdit}>
                        Update
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
