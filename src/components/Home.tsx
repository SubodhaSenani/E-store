import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/page.jpg';
import electronic from '../assets/images/electronics.jpeg';
import fashion from '../assets/images/fashion.webp';
import living from '../assets/images/living.jpg';
import beauty from '../assets/images/beauty.jpg';

const Home: React.FC<{ onShopNow: () => void }> = ({ onShopNow }) => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <h1 className="display-4 fw-bold mb-4">Welcome to Our Store</h1>
                            <p className="lead mb-4">Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, and more.</p>
                            <button 
                                className="btn btn-primary btn-lg px-5"
                                onClick={onShopNow}
                            >
                                Shop Now
                            </button>
                        </div>
                        <div className="col-md-6">
                            <img 
                                src={image} 
                                alt="Shopping Banner" 
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Features Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-primary text-white">
                                <div className="card-body text-center">
                                    <i className="bi bi-truck fs-1 mb-3"></i>
                                    <h3 className="h5 card-title">Free Shipping</h3>
                                    <p className="card-text">On orders over $50</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-success text-white">
                                <div className="card-body text-center">
                                    <i className="bi bi-shield-check fs-1 mb-3"></i>
                                    <h3 className="h5 card-title">Secure Payments</h3>
                                    <p className="card-text">100% secure transactions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-info text-white">
                                <div className="card-body text-center">
                                    <i className="bi bi-arrow-counterclockwise fs-1 mb-3"></i>
                                    <h3 className="h5 card-title">Easy Returns</h3>
                                    <p className="card-text">30-day return policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Shop by Category</h2>
                    <div className="row g-4">
                        <div className="col-6 col-md-3">
                            <Link to="/products" className="text-decoration-none">
                                <div className="card category-card border-0 shadow-sm h-100">
                                    <img src={electronic} className="card-img-top" alt="Electronics" />
                                    <div className="card-body text-center">
                                        <h3 className="h6 card-title mb-0">Electronics</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to="/products" className="text-decoration-none">
                                <div className="card category-card border-0 shadow-sm h-100">
                                    <img src={fashion} className="card-img-top" alt="Fashion" />
                                    <div className="card-body text-center">
                                        <h3 className="h6 card-title mb-0">Fashion</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to="/products" className="text-decoration-none">
                                <div className="card category-card border-0 shadow-sm h-100">
                                    <img src={living} className="card-img-top" alt="Home & Living" />
                                    <div className="card-body text-center">
                                        <h3 className="h6 card-title mb-0">Home & Living</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <Link to="/products" className="text-decoration-none">
                                <div className="card category-card border-0 shadow-sm h-100">
                                    <img src={beauty} className="card-img-top" alt="Beauty" />
                                    <div className="card-body text-center">
                                        <h3 className="h6 card-title mb-0">Beauty</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;