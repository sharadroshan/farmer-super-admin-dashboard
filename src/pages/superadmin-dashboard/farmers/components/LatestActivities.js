import React, { useState } from "react";
import {Row, Col,Card, Button, Table} from "react-bootstrap";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <>
      <Card>
          <Card.Body>
            <div className="table-responsive">
                <Table>
                    <thead>
                        <tr>
                            <th>Sr.no</th>
                            <th>Activity Name</th>
                            <th>Farmer Name</th>
                            <th>Activity Date</th>
                            <th>Info</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>
                                <span className='bg-success text-white px-2 py-1 rounded-pill'>
                                    Payment Done
                                </span>
                            </td>
                            <td>Abhijeet Chaudhary</td>
                            <td>11 Sep 2022</td>
                            <td>
                                <Button className='rounded-pill'>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                    </thead>
                </Table>
            </div>
          </Card.Body>
        </Card>
    </>
  );
};

export default Activity;
