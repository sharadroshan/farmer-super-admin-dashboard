import React, { Component } from "react";
import Chart from "react-apexcharts";
import {Card,Row, Col, ProgressBar} from "react-bootstrap";
import { BasicPortlet } from '../../../../components/Portlet';

class FarmerSatisafaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      satisfaction: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {
    return (
        <>
          <Card>
              <Card.Body>
                    <h4>Farmer Satisfaction</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                <BasicPortlet cardTitle="Farmer Satisfaction" titleClass="header-title mb-0">
                  <Chart options={this.state.options} series={this.state.satisfaction} type="donut" width="380" />
                </BasicPortlet>
              </Card.Body>
          </Card>
        </>
    );
  }
}

export default FarmerSatisafaction;