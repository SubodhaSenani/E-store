import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <div className="container">
                <div className="row gy-4 text-center text-md-start">
                    {/* About Us */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-4">About Us</h5>
                        <p className="text-muted">
                            We provide quality products with excellent customer service.
                            Your trusted destination for a premium shopping experience.
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="text-light me-3 fs-4 hover-effect">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-light me-3 fs-4 hover-effect">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-light me-3 fs-4 hover-effect">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-light me-3 fs-4 hover-effect">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/" className="text-light text-decoration-none hover-link">
                                    <i className="bi bi-chevron-right me-2"></i>Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/products" className="text-light text-decoration-none hover-link">
                                    <i className="bi bi-chevron-right me-2"></i>Products
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className="text-light text-decoration-none hover-link">
                                    <i className="bi bi-chevron-right me-2"></i>Contact
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/faq" className="text-light text-decoration-none hover-link">
                                    <i className="bi bi-chevron-right me-2"></i>FAQ
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/privacy" className="text-light text-decoration-none hover-link">
                                    <i className="bi bi-chevron-right me-2"></i>Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="text-white mb-4">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="bi bi-envelope-fill me-2"></i>
                                example@gmail.com
                            </li>
                            <li className="mb-3">
                                <i className="bi bi-telephone-fill me-2"></i>
                                (123) 456-7890
                            </li>
                            <li className="mb-3">
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                123 Street, City, Country
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="row mt-4">
                    <div className="col-12 text-center border-top pt-3">
                        <p className="mb-0 " style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                            © {new Date().getFullYear()} subodha. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
