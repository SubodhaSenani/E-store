import React from 'react';

interface Product {
    name: string;
    description: string;
    price: number;
}

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
        return (
                <div>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                </div>
        );
};

export default ProductDetails;