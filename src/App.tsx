import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import Header from './components/Header';
import CareerCard from './components/CareerCard';
import CareerDetail from './components/CareerDetail';
import VocationalTest from './components/VocationalTest';
import TestResult from './components/TestResult';
import { careers } from './data/careers';
import './App.css';

// Componente para la página de inicio
const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
  }, [searchParams]);

  const filteredCareers = useMemo(() => {
    if (!searchTerm) {
      return careers;
    }
    return careers.filter(career =>
      career.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.area.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const groupedCareers = useMemo(() => {
    return filteredCareers.reduce((acc, career) => {
      const { institution } = career;
      if (!acc[institution]) {
        acc[institution] = [];
      }
      acc[institution].push(career);
      return acc;
    }, {} as { [key: string]: typeof careers });
  }, [filteredCareers]);

  return (
    <main className="container my-5">
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <input
            type="text"
            value={searchTerm}
            className="form-control form-control-lg bg-dark text-white placeholder-white"
            placeholder="Buscar por nombre, institución o área..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {Object.entries(groupedCareers).map(([institution, careers]) => (
        <div key={institution} className="mb-5">
          <h2 className="text-white">{institution}</h2>
          <hr className="text-white"/>
          <div className="row g-4">
            {careers.map((career, index) => (
              <div className="col-md-4" key={index}>
                <CareerCard career={career} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
};

// Componente principal de la App con el enrutador
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career/:careerName" element={<CareerDetail />} />
          <Route path="/test" element={<VocationalTest />} />
          <Route path="/result" element={<TestResult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;