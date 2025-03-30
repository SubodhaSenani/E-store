import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface RootState {
    cart: {
        cart: CartItem[];
    };
}

interface CartProps {
    onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ onCheckout }) => {
    const cartItems = useSelector((state: RootState) => state.cart.cart) || [];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeItemFromCart = (itemId: number) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { id: itemId }
        });
    };

    const updateQuantity = (itemId: number, newQuantity: number) => {
        if (newQuantity < 1) return;
        dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { id: itemId, quantity: newQuantity }
        });
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="container py-5">
                <div className="text-center">
                    <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
                    <h2 className="mb-4">Your cart is empty</h2>
                    <button 
                        className="btn btn-primary btn-lg"
                        onClick={() => navigate('/products')}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h2 className="mb-4">Shopping Cart</h2>
            <div className="row">
                <div className="col-lg-8">
                    <div className="card shadow-sm mb-4">
                        {cartItems.map(item => (
                            <div key={item.id} className="card-body border-bottom">
                                <div className="row align-items-center">
                                    <div className="col-md-2">
                                        <img 
                                            src={item.image} 
                                            alt={item.name}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: '80px', objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="mb-0">{item.name}</h5>
                                        <small className="text-muted">${item.price.toFixed(2)}</small>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center">
                                            <button 
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <i className="bi bi-dash"></i>
                                            </button>
                                            <span className="mx-3">{item.quantity}</span>
                                            <button 
                                                className="btn btn-outline-secondary btn-sm"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <i className="bi bi-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <span className="fw-bold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="col-md-1">
                                        <button 
                                            className="btn btn-link text-danger"
                                            onClick={() => removeItemFromCart(item.id)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total</strong>
                                <strong>${getTotalPrice().toFixed(2)}</strong>
                            </div>
                            <button 
                                className="btn btn-primary w-100"
                                onClick={onCheckout}
                            >
                                Proceed to Checkout
                            </button>
                            <button 
                                className="btn btn-outline-secondary w-100 mt-2"
                                onClick={() => navigate('/products')}
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;