import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    description: 'Modern smartwatch with health tracking features'
  },
  {
    id: 3,
    name: 'Camera Lens',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
    description: 'Professional camera lens for perfect shots'
  },
  {
    id: 4,
    name: 'Laptop',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    description: 'Powerful laptop for work and entertainment'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="products" id="products">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;