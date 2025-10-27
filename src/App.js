import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import EmployeeForm from './pages/EmployeeForm';

function App() {
  return (
    <div className="app-root">
      <NavBar />
      <main className="py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/form" element={<EmployeeForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
