import React from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <span className="text-primary">E</span>-Store
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" to="/">
                                <i className="fas fa-home me-1"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/products">
                                <i className="fas fa-store me-1"></i> Products
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/cart">
                                <i className="fas fa-shopping-cart me-1"></i> Cart
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/signup">
                                <i className="fas fa-shopping-cart me-1"></i> Sign Up
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/login">
                                <i className="fas fa-shopping-cart me-1"></i> Login
                            </Link>
                        </li>

                        {/* Profile Dropdown */}
                        <li className="nav-item mx-2 d-flex align-items-center">
                            <Profile />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
