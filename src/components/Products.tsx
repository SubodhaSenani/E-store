import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    const handleAddToCart = (product: Product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image,
                description: product.description,
                quantity: 1
            }
        });

        const notification = document.createElement('div');
        notification.className = 'alert alert-success position-fixed top-0 end-0 m-3 animate__animated animate__fadeIn';
        notification.style.zIndex = '1000';
        notification.innerHTML = `
            <div class="d-flex align-items-center">
                <i class="bi bi-cart-check-fill me-2"></i>
                ${product.title} added to cart!
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
    };

    const shortenDescription = (desc: string, maxLength: number) => {
        return desc.length > maxLength ? desc.slice(0, maxLength) + '...' : desc;
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            {/* <h3 className="display-4 mb-4 text-center">Our Products</h3> */}
            <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                    <div className="input-group">
                        <span className="input-group-text bg-primary text-light rounded-start">
                            <i className="bi bi-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control rounded-end"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="col">
                        <div className="card h-100 shadow-sm hover-effect border-0">
                            <div className="card-img-wrapper p-3 bg-light rounded-top">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="card-img-top"
                                    style={{ height: '200px', objectFit: 'contain' }}
                                />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-truncate mb-2">{product.title}</h5>
                                <p className="card-text text-muted small mb-3">
                                    {shortenDescription(product.description, 100)}
                                </p>
                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                    <span className="fs-5 fw-bold text-primary">${product.price.toFixed(2)}</span>
                                    <button 
                                        className="btn btn-outline-primary d-flex align-items-center gap-2"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        <i className="bi bi-cart-plus"></i>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {filteredProducts.length === 0 && (
                <div className="text-center mt-4">
                    <h3>No products found</h3>
                    <p>Try different search terms</p>
                </div>
            )}
        </div>
    );
};

export default Products;
