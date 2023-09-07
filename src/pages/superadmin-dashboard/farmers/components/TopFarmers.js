import React, { useState } from "react";
import {Row, Col,Card, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

const TopFarmers = () => {
  return (
    <>
      <Card>
          <Card.Body>
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <h4>Top Farmers</h4>
                <Button>View More</Button>
            </div>
            <Row>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
                <Col md={4} sm={12}>
                    <div className='border rounded p-2 bg-light mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <h4>Dr.Sid Quebedeaux</h4>
                    </div>
                </Col>
            </Row>
          </Card.Body>
        </Card>
    </>
  );
};

export default TopFarmers;
