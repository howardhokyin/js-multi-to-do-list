// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import NavBar from './components/Navbar';
import RegisterPage from './components/Register';
import MarkDownNotePage from './pages/MarkDownNotePage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/MarkDownNote" element={<MarkDownNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
