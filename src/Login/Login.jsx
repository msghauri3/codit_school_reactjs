import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('Logging in...');

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: username.trim(),
        password: password.trim(),
      });

      console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
      navigate('/HRM/DashboardHRM');
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      setMessage('❌ Login failed. Check username and password.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>

      {message && <div style={{ marginTop: '20px' }}>{message}</div>}
    </div>
  );
}

export default Login;
