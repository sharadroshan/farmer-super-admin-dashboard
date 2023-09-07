import React,{useState} from 'react';
import { Card, Row, Col, Button , Form, Modal} from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import { FormInput } from "../../../components/form";

function EditFAQ() {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Edit FAQ's",
            path: "/admin/edit-faq",
            active: true,
          },
        ]}
        title={"Edit FAQ's"}
      />
        <Card>
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-3 text-primary'>Edit FAQ's</h3>
                    <Button onClick={handleShow}>Add New FAQ</Button>
                </div>
                <Form>
                    <Row>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Question</Form.Label>
                            <Form.Control type="text" placeholder="Enter Question" />
                        </Form.Group>
                       
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Answer</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={5}
                            key="textarea"
                            placeholder='Enter Answer'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Question</Form.Label>
                            <Form.Control type="text" placeholder="Enter Question" />
                        </Form.Group>
                       
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Answer</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={5}
                            key="textarea"
                            placeholder='Enter Answer'
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Question</Form.Label>
                            <Form.Control type="text" placeholder="Enter Question" />
                        </Form.Group>
                       
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Form.Label>Answer</Form.Label>
                            <FormInput
                            type="textarea"
                            name="textarea"
                            rows={5}
                            key="textarea"
                            placeholder='Enter Answer'
                            />
                        </Form.Group>
                        
                        <Form.Group as={Col} md={12} className="mb-2">
                            <Button>Submit</Button>
                        </Form.Group>
                    </Row>
                </Form>
                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add FAQ's</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Question</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Question" />
                                </Form.Group>
                            
                                <Form.Group as={Col} md={12} className="mb-2">
                                    <Form.Label>Answer</Form.Label>
                                    <FormInput
                                    type="textarea"
                                    name="textarea"
                                    rows={5}
                                    key="textarea"
                                    placeholder='Enter Answer'
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
export default EditFAQ;
