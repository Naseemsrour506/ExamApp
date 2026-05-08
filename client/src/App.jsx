import React, { useState } from 'react';
import TeacherDashboard from './TeacherDashboard';
import StudentPortal from './StudentPortal';

function App() {
  const [role, setRole] = useState('teacher'); // Default to teacher

  const toggleRole = () => {
    setRole(prevRole => prevRole === 'teacher' ? 'student' : 'teacher');
  };

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">E-Test System</span>
          <button 
            className={`btn ${role === 'teacher' ? 'btn-info' : 'btn-warning'}`} 
            onClick={toggleRole}
          >
            Switch to {role === 'teacher' ? 'Student' : 'Teacher'} View
          </button>
        </div>
      </nav>

      <main>
        {role === 'teacher' ? <TeacherDashboard /> : <StudentPortal />}
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
