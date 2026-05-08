import React, { useState } from 'react';
import TeacherDashboard from './TeacherDashboard';
import StudentPortal from './StudentPortal';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('teacher'); // Default to teacher

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const toggleRole = () => {
    setRole(prevRole => prevRole === 'teacher' ? 'student' : 'teacher');
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          {isLoggedIn && (
            <div className="d-flex align-items-center">
              <span className="text-white me-3">Welcome, {user}!</span>
              <button 
                className={`btn btn-sm ${role === 'teacher' ? 'btn-info' : 'btn-warning'} me-2`} 
                onClick={toggleRole}
              >
                Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
              </button>
              <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </nav>

      <main>
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          role === 'teacher' ? <TeacherDashboard /> : <StudentPortal />
        )}
      </main>

      <footer className="mt-5 py-3 text-center text-muted">
        <div className="container">
          <p>&copy; 2026 E-Test System Prototype. Mock API Ready.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
