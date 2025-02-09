import { useSelector } from 'react-redux';

function Navbar() {
  const { items } = useSelector((state) => state.cart);
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>Redux Shop</h1>
      </div>
      <div className="nav-links">
        <a href="#products">Products</a>
        <a href="#cart">Cart ({cartItemCount})</a>
      </div>
    </nav>
  );
}

export default Navbar;