import React, { Component } from "react";
import Chart from "react-apexcharts";
import {Card,Row, Col, ProgressBar} from "react-bootstrap";
import { BasicPortlet } from '../../../../components/Portlet';

class FarmerAnalysis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    const Infarmer = 60;

    return (
        <>
        <Card>
            <Card.Body>
            <Row>
                <Col>
                    <h4>Farmer Details</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    <BasicPortlet cardTitle="Farmer Analysis" titleClass="header-title mb-0">
                        <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="250"
                        width="100%"
                        className="apex-charts" dir="ltr"
                        />
                    </BasicPortlet>
                </Col>
                {/* <Col>
                <div>
                    <h4>Farmer Details</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p> */}
                    {/* <h4>Total Farmer</h4> */}
                    {/* <Row>
                        <Col md={6} col={12}>
                            <h6>Infarmer - 65,485</h6>
                            <ProgressBar now={Infarmer} label={`${'Infarmer '+ Infarmer}%`} />
                        </Col>
                        <Col md={6} col={12}>
                            <h6>Out Farmers - 65,485</h6>
                            <ProgressBar now={Infarmer} label={`${'Out Farmer '+ Infarmer}%`} />
                        </Col>
                    </Row>
                    <h4>Weekly Farmer</h4>
                    <Row>
                        <Col md={6} col={12}>
                            <h6>Infarmer - 65,485</h6>
                            <ProgressBar now={Infarmer} label={`${'Infarmer '+ Infarmer}%`} />
                        </Col>
                        <Col md={6} col={12}>
                            <h6>Out Farmers - 65,485</h6>
                            <ProgressBar now={Infarmer} label={`${'Out Farmer '+ Infarmer}%`} />
                        </Col>
                    </Row>
                    <h4>Monthly Farmer</h4>
                    <Row>
                        <Col md={6} col={12}>
                            <h6>Infarmer - 65,485</h6>
                            <ProgressBar now={Infarmer} label={`${'Infarmer '+ Infarmer}%`} />
                        </Col>
                        <Col md={6} col={12}>
                            <h6>Out Farmers - 65,485</h6>
                            <ProgressBar now={Infarmer} label={`${'Out Farmer '+ Infarmer}%`} />
                        </Col>
                    </Row> */}
                {/* </div>
                </Col> */}
            </Row>
            </Card.Body>
        </Card>
        </>
        
    );
  }
}

export default FarmerAnalysis;