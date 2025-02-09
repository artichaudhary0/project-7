import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { store } from './app/store';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Footer from './components/Footer';
import './App.css';

function MainContent() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return (
      <div className="auth-wrapper">
        <h2>Welcome to Redux Shop</h2>
        <p>Please login or sign up to start shopping</p>
        <Auth />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="main-content">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <MainContent />
      </div>
    </Provider>
  );
}

export default App;