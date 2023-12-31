import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Badge } from 'react-bootstrap';
import classNames from 'classnames';

// types
import { ProfileMenuItem } from '../../layouts/Topbar';

interface ProfileDropdownProps {
    menuItems: ProfileMenuItem[];
    profilePic?: string;
    username: string;
    userTitle?: string;
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
    const profilePic = props['profilePic'] || null;
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    /*
     * toggle profile-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle
          id="dropdown-profile"
          as="a"
          onClick={toggleDropdown}
          className={classNames(
            "nav-link",
            "nav-user",
            "me-0",
            "waves-effect",
            "waves-light",
            {
              show: dropdownOpen,
            }
          )}
        >
          <img src={profilePic!} className="rounded-circle" alt="" />{" "}
          <span className="pro-user-name ms-1">
            {props["username"]} <i className="mdi mdi-chevron-down"></i>
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
          <div onClick={toggleDropdown}>
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome ! Abhijeet</h6>
            </div>
              <Link
                className="dropdown-item notify-item"
                to="/apps/contacts/profile"
              >
                <i className="ri-account-circle-line me-1"></i>
                <span>My Account</span>
              </Link>
              <Link className="dropdown-item notify-item" to="/farmer/wallet">
                <i className="ri-wallet-line me-1"></i>
                <span>My Wallet</span>
              </Link>
            {(props.menuItems || []).map((item, i) => {
              return (
                <React.Fragment key={i}>
                 
                  <Link
                    to={item.redirectTo}
                    className="dropdown-item notify-item"
                    key={i + "-profile-menu"}
                  >
                    <i className={`${item.icon} me-1`}></i>
                    <span>
                      {item.label}
                      {item.badge && (
                        <Badge bg={item.badge.variant} className="float-end">
                          {item.badge.text}
                        </Badge>
                      )}
                    </span>
                  </Link>
                </React.Fragment>
              );
            })}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
};

export default ProfileDropdown;
