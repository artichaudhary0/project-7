import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure, signupSuccess, signupFailure, logout } from '../features/authSlice';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, error, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would make API calls here
    if (isLogin) {
      // Simulating login validation
      if (email === 'test@test.com' && password === 'password') {
        dispatch(loginSuccess({ email, id: 1 }));
      } else {
        dispatch(loginFailure('Invalid credentials'));
      }
    } else {
      // Simulating signup
      if (email && password.length >= 6) {
        dispatch(signupSuccess({ email, id: Date.now() }));
      } else {
        dispatch(signupFailure('Invalid email or password too short'));
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    setEmail('');
    setPassword('');
  };

  if (isAuthenticated) {
    return (
      <div className="auth-container">
        <p>Welcome, {user.email}!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button 
        className="switch-auth"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </button>
    </div>
  );
}

export default Auth;