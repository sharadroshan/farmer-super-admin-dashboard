import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

interface MegaMenuProps {
    subMenus: {
        id: number;
        title: string;
        menuItems: Array<string>;
    }[];
}

const MegaMenu = ({ subMenus }: MegaMenuProps) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    /*
     * toggle megamenu-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
      <Dropdown
        show={dropdownOpen}
        onToggle={toggleDropdown}
        className="position-static"
      >
        <Dropdown.Toggle
          id="dropdown-megamenu"
          as="a"
          onClick={toggleDropdown}
          className={classNames("nav-link", "waves-effect", "waves-light", {
            show: dropdownOpen,
          })}
        >
          Quick Links <i className="mdi mdi-chevron-down"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu dropdown-megamenu">
          <div onClick={toggleDropdown}>
            <Row>
              <Col sm={12}>
                <Row>
                  <Col md={2}>
                    <h4 className=" mt-0 text-info">Products</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/farmer/buy-products">Buy Products</Link>
                      </li>
                      <li>
                        <Link to="/farmer/sell-products">Sell Products</Link>
                      </li>
                      <li>
                        <Link to="/farmer/buy-products-history">
                          Buy Products History
                        </Link>
                      </li>
                      <li>
                        <Link to="/farmer/sell-products-history">
                          Sell Products History
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-info">Contract Farming</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/">Overview</Link>
                      </li>
                      <li>
                        <Link to="/farmer/new-contracts">New Contracts</Link>
                      </li>
                      <li>
                        <Link to="/farmer/new-contracts">
                          Ongoing Contracts
                        </Link>
                      </li>
                      <li>
                        <Link to="/">Upcoming Contracts</Link>
                      </li>
                      <li>
                        <Link to="/">Completed Contracts</Link>
                      </li>
                      <li>
                        <Link to="/">Mid Cancelled Contracts</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-info">Analysis</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/farmer/soil-analysis">Soil Analysis</Link>
                      </li>
                      <li>
                        <Link to="/farmer/plant-analysis">Plant Analysis</Link>
                      </li>
                      <li>
                        <Link to="/farmer/biological-analysis">
                          Biological Analysis
                        </Link>
                      </li>
                      <li>
                        <Link to="/farmer/water-analysis">Water Analysis</Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-info">Orders</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/farmer/revenue">Revenue</Link>
                      </li>
                      <li>
                        <Link to="/farmer/quotation-received">
                          Received Quotation
                        </Link>
                      </li>
                      <li>
                        <Link to="/farmer/accepted-orders">Accepts Orders</Link>
                      </li>
                      <li>
                        <Link to="/farmer/rejected-orders">
                          Rejected Orders
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col md={2}>
                    <h4 className=" mt-0 text-info">Schedule</h4>
                    <ul className="list-unstyled megamenu-list">
                      <li>
                        <Link to="/farmer/new-schedule">Currect Schedule</Link>
                      </li>
                      <li>
                        <Link to="/farmer/new-schedule">Upcoming Schedule</Link>
                      </li>
                      <li>
                        <Link to="/farmer/new-schedule">
                          Completed Schedule
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              {/* <Col sm={4}>
                            <div className="text-center mt-3">
                                <h3 className="text-dark">Special Discount Sale!</h3>
                                <h4>Save up to 70% off.</h4>
                                <button className="btn btn-primary rounded-pill mt-3">Download Now</button>
                            </div>
                        </Col> */}
            </Row>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default MegaMenu;
