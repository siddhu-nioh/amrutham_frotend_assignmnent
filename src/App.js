import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DoctorFinder from './pages/DoctorFinder';
import DoctorProfile from '../amrutham_frotend_assignmnent/DoctorProfile';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<DoctorFinder />} />
        <Route path="/profile" element={<DoctorProfile />} />
      </Routes>
    </Router>
  );
};

export default App;