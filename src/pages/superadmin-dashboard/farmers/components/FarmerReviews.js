import React, { useState } from "react";
import {Row, Col,Card, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from '../../../../components/Rating';


const TopFarmers = () => {
  return (
    <>
      <Card>
          <Card.Body>
            <div className='d-flex align-items-center justify-content-between mb-2'>
                <h4>Farmers Reviews</h4>
                <Button>View More</Button>
            </div>
            <Row>
                <Col md={12}>
                    <div className='border rounded p-2 bg-light d-flex align-items-start mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <div className='ms-2'>
                            <h4 className='mb-0'>Anil Sonwane</h4>
                            <p className='mb-0'>Amazing Products .. 🙂</p>
                            <Rating value={4} />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='border rounded p-2 bg-light d-flex align-items-start mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <div className='ms-2'>
                            <h4 className='mb-0'>Anil Sonwane</h4>
                            <p className='mb-0'>Amazing Products .. 🙂</p>
                            <Rating value={4} />
                        </div>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='border rounded p-2 bg-light d-flex align-items-start mb-1'>
                        <img src='https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg' className='rounded-circle' width='50' height='50' />
                        <div className='ms-2'>
                            <h4 className='mb-0'>Anil Sonwane</h4>
                            <p className='mb-0'>Amazing Products .. 🙂</p>
                            <Rating value={4} />
                        </div>
                    </div>
                </Col>
            </Row>
          </Card.Body>
        </Card>
    </>
  );
};

export default TopFarmers;
