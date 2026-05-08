import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow" style={{ width: '400px' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">E-Test System Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <div className="mt-3 text-center text-muted small">
            Tip: Use any name to simulate login.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
