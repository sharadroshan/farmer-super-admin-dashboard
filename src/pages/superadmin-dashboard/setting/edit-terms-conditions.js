import React,{useState} from 'react';
import { Card, Row, Col, Button , Form,Modal} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/form";

function EditTermsConditions() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Edit Terms And Conditions",
            path: "/admin/edit-about-company",
            active: true,
          },
        ]}
        title={"Edit Terms And Conditions"}
      />
        <Card>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-3 text-primary'>Add Terms And Conditions</h3>
                    <Button onClick={handleShow}>Add Terms And Conditions</Button>
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
                            <Form.Label>Description Paragraph 3</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={5}
                            key="textarea"
                            placeholder='Enter Description Paragraph 1'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Description Paragraph 4 (Optional)</Form.Label>
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
                        <Modal.Title>Add Terms And Conditions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form >
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
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    </>
  )
}
export default EditTermsConditions;
