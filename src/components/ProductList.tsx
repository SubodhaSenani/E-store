import React from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product: Product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div className="row">
            {products.map(product => (
                <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card h-100">
                        <img src={`https://via.placeholder.com/150?text=${product.name}`} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><strong>${product.price}</strong></p>
                            <button 
                                className="btn btn-primary"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;