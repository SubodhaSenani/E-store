import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Products from './components/Products';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Profile from './components/Profile';

const App: React.FC = () => {
    const handleShopNow = () => {
        // Add your shop now logic here
    };

    const handleCheckout = () => {
        // Add your checkout logic here
    };

    return (
        <div className="min-vh-100 bg-light">
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Home onShopNow={handleShopNow} />
                        <Footer />
                    </>
                } />
                <Route path="/products" element={
                    <>
                        <Products />
                        <Footer />
                    </>
                } />
                <Route path="/cart" element={<Cart onCheckout={handleCheckout} />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
};

export default App;