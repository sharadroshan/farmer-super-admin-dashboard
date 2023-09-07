import React from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import {Link} from 'react-router-dom';

function Settings() {
  return (
    <>
    <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/dashboard" },
          {
            label: "Page Settings",
            path: "/admin/page-setting",
            active: true,
          },
        ]}
        title={"Page Settings"}
      />
        <Card>
            <Card.Body>
                <Row>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-start">
                                    <h3 className="text-white font-25">About Company</h3>
                                </div>
                                
                                <Link to='/admin/edit-about-company'>
                                    <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="text-white font-25">Service</h3>
                            </div>
                            
                            <Link to='/admin/edit-services'>
                                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="text-white font-25">FAQ's</h3>
                            </div>
                            
                            <Link to='/admin/edit-faq'>
                                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="text-white font-25">Terms and Conditions</h3>
                            </div>
                            
                            <Link to='/admin/edit-terms-conditions'>
                                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="text-white font-25">Privacy Policy</h3>
                            </div>
                            
                            <Link to='/admin/edit-privacy-policy'>
                                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="text-white font-25">Packages</h3>
                            </div>
                            
                            <Link to='/admin/edit-terms'>
                                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} sm={12}>
                        <Card className="bg-primary">
                            <Card.Body>
                            <div className="d-flex justify-content-between align-items-start">
                                <h3 className="text-white font-25">Contracts</h3>
                            </div>
                            
                            <Link to='/admin/edit-contracts'>
                                <Button className="btn text-primary bg-white w-100 rounded-pill mt-3">Update</Button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>
  )
}
export default Settings;
