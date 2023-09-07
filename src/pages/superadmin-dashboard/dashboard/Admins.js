import React, {useState} from "react";
import { Card, Row, Col, Table, Pagination, Form, Button , Modal} from "react-bootstrap";
import Select from "react-select";

import PageTitle from "../../../components/PageTitle";

function Admins() {
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [showEditAdmin, setShowEditAdmin] = useState(false);
  const [showPermission, setShowPermission] = useState(false);


  const handleCloseAddAdmin = () => setShowAddAdmin(false);
  const handleShowAddAdmin = () => setShowAddAdmin(true);
  const handleCloseEditAdmin = () => setShowEditAdmin(false);
  const handleShowEditAdmin = () => setShowEditAdmin(true);
  const handleShowPermission = () => setShowPermission(true);
  const handleClosePermission = () => setShowPermission(false);
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Admins",
            path: "/admin/comment-review",
            active: true,
          },
        ]}
        title={"Admins"}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div className="w-100 text-end d-flex justify-content-end">
                  <Button onClick={handleShowPermission} className='me-1'>Permissions</Button>
                  <Button onClick={handleShowAddAdmin}>Add New Admin</Button>
                </div>
              </div>

              <div className="table-responsive my-3">
                <Table striped hover className='mb-0'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Admin Name</th>
                      <th>Email</th>
                      <th>Admin Role</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
                        <Button className='btn btn-sm rounded-pill btn-danger'>Delete</Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Santosh Kumar	</td>
                      <td>santosh@gmail.com</td>
                      <td>Farmer</td>
                      <td>
                        <Button className='btn btn-sm rounded-pill me-1' onClick={handleShowEditAdmin}>Edit</Button>
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
      <Modal show={showAddAdmin} onHide={handleCloseAddAdmin}>
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email address" />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Select Admin Role </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "farmer", label: "Farmer" },
                    { value: "advisor", label: "Advisor" },
                    { value: "contractor", label: "Contractor" },
                    { value: "laboratory", label: "Laboratory" },
                  ]}
                ></Select>
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddAdmin}>
            Close
          </Button>
          <Button variant="primary" >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEditAdmin} onHide={handleCloseEditAdmin}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter email address" />
              </Form.Group>
              <Form.Group as={Col} md={12} className="mb-2">
                <Form.Label>Select Admin Role </Form.Label>
                <Select
                  className="react-select react-select-container"
                  classNamePrefix="react-select"
                  options={[
                    { value: "farmer", label: "Farmer" },
                    { value: "advisor", label: "Advisor" },
                    { value: "contractor", label: "Contractor" },
                    { value: "laboratory", label: "Laboratory" },
                  ]}
                ></Select>
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditAdmin}>
            Close
          </Button>
          <Button variant="primary" >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal size="lg" show={showPermission} onHide={handleClosePermission}>
        <Modal.Header closeButton>
          <Modal.Title>Permissions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <div className="table-responsive">
                  <Table className="m-0">
                    <thead>
                    <tr>
                      <th>Permission</th>
                      <th>Edit</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Permission 1
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Edit
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Update
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1" />
                          Delete
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Permission 2
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Edit
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Update
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1" />
                          Delete
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Permission 3
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Edit
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1"/>
                          Update
                        </div>
                      </td>
                      <td>
                        <div>
                          <input type="checkbox" class="me-1" />
                          Delete
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </Table>
              </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePermission}>
            Close
          </Button>
          <Button variant="primary" >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Admins;
