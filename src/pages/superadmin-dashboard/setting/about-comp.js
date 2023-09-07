import React,{useState} from 'react';
import { Card, Row, Col, Button , Form, Modal} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/form";

function EditAboutCompany() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Edit About Company",
            path: "/admin/edit-about-company",
            active: true,
          },
        ]}
        title={"Edit About Company"}
      />
        <Card>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-3 text-primary'>Edit About Company</h3>
                    <Button onClick={handleShow}>Add About Company</Button>
                </div>
                <Form>
                    <Row>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Sub Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Sub Title" />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Upload Company Banner 1</Form.Label>
                            <FormInput
                            type="file"
                            name="file"
                            key="file"
                            />
                        </Form.Group>
                       
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Description Paragraph 1</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={5}
                            key="textarea"
                            placeholder='Enter Description Paragraph 1'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Description Paragraph 2</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={5}
                            key="textarea"
                            placeholder='Enter Description Paragraph 1'
                            />
                        </Form.Group>
                        
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Button>Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add About Company </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Title" />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Sub Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Sub Title" />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Upload Company Banner 1</Form.Label>
                                    <FormInput
                                    type="file"
                                    name="file"
                                    key="file"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Upload Company Banner 2 (Optional)</Form.Label>
                                    <FormInput
                                    type="file"
                                    name="file"
                                    key="file"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Description Paragraph 1</Form.Label>
                                    <FormInput
                                    type="textarea"
                                    name="textarea"
                                    rows={5}
                                    key="textarea"
                                    placeholder='Enter Description Paragraph 1'
                                    />
                                </Form.Group>
                               
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Description Paragraph 2 (Optional)</Form.Label>
                                    <FormInput
                                    type="textarea"
                                    name="textarea"
                                    rows={5}
                                    key="textarea"
                                    placeholder='Enter Description Paragraph 1'
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Button>Submit</Button>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    </>
  )
}
export default EditAboutCompany;
