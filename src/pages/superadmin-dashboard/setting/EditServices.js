import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import PageTitle from "../../../components/PageTitle";
import {Link} from 'react-router-dom'

function EditServices() {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Home", path: "/farmer" },
          {
            label: "Edit Services",
            path: "/admin/services",
            active: true,
          },
        ]}
        title={"Edit Services"}
      />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="mb-0">Edit Agrola Services</h3>
        <Link to='/admin/request-advisory'>
          <Button className="btn btn-primary rounded-pill">Request Advisory</Button>
        </Link>
      </div>
      <Row>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Soil Test Analysis</h4>
                  <p>Basic Soil Fertility (BSF) Soil pH (1:1), Buffer pH, Or...</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Lawn and Turf Analysis</h4>
                  <p>Basic Soil Fertility (BSF) Soil pH (1:1), Buffer pH, Or...</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Soil Test Analysis</h4>
                  <p>Complete Turf CSF with sufficiency graph </p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Lawn and Turf Analysis</h4>
                  <p>(data provided on a dry basis and sufficiency levels based.</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Heavy Metal Analysis</h4>
                  <p>Digestion EPA method: 3051A   Element by EPA...</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Feed Analysis</h4>
                  <p>Standard NIR Digestibility with minerals % Moisture, % ...</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Manure & Slurry Analysis</h4>
                  <p>(data provided on a dry basis and sufficiency levels based.</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <div className="d-flex">
                <div class="avatar-sm p-2 pt-4">
                  <i class="avatar-title display-4 m-0 text-success mdi mdi-check-decagram"></i>
                </div>
                <div className="ps-3">
                  <h4 className="text-dark">Compost Analysis</h4>
                  <p>Standard Compost pH, % Organic N, % Ammonium N</p>
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <Link to='/admin/service-details' className='w-100'>
                  <Button className="btn btn-primary rounded-pill w-100">View</Button>
                </Link>
                <Button className="btn btn-info rounded-pill w-100 mx-2">Edit</Button>
                <Button className="btn btn-danger rounded-pill w-100">Delete</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default EditServices;
