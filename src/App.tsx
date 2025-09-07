import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CareerDetail from './components/CareerDetail';
import VocationalTest from './components/VocationalTest';
import TestResult from './components/TestResult';
import UniversityList from './components/UniversityList';
import UniversityDetail from './components/UniversityDetail';
import './App.css';

// Componente principal de la App con el enrutador
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<UniversityList />} />
          <Route path="/universidad/:universityName" element={<UniversityDetail />} />
          <Route path="/career/:careerName" element={<CareerDetail />} />
          <Route path="/test" element={<VocationalTest />} />
          <Route path="/result" element={<TestResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;