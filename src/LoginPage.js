import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added useNavigate for React Router
import './loginpage.css'; // Added CSS of LoginPage

function LoginPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [username, setUsername] = useState(''); // Added state for username
  const [password, setPassword] = useState(''); // Added state for password
  const [error, setError] = useState(''); // Added state for error message

  const handleLogin = () => {
    if (username === 'Mack' && password === '123456') {
      setError('');
      navigate('/landingpage');
      return;
    } else {
      setError('Invalid username or password');
    }
  }; // Added Login Function

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Added onChange to update username
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Added onChange to update password  
      /><br />
      <button onClick={handleLogin}>Login</button> 
      {error && (
        <div style={{ color: '#ff6b6b', marginTop: '12px' }}>
          {error}
        </div>
      )}
    </div> // Added onClick on Login & Error message display
  );
}

export default LoginPage;
