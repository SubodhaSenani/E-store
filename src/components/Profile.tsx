import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const Profile: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <Dropdown show={show} onToggle={handleToggle}>
            <Dropdown.Toggle 
                variant="dark" 
                id="profile-dropdown"
                className="profile-toggle"
            >
                <i className="bi bi-person-circle fs-5"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="profile-dropdown-menu">
                <Dropdown.Item as={Link} to="/profile">
                    <i className="bi bi-person me-2"></i>
                    Profile
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/my-account">
                    <i className="bi bi-gear me-2"></i>
                    My Account
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/orders">
                    <i className="bi bi-bag me-2"></i>
                    My Orders
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/checkout">
                    <i className="bi bi-credit-card me-2"></i>
                    Checkout
                </Dropdown.Item>
                <Dropdown.Item onClick={() => console.log('Logout clicked')}>
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Logout
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Profile;