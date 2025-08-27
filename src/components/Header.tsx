import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-dark text-white text-center p-4 shadow-lg">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
            <Link to="/" className="text-white text-decoration-none">
              <h1>Oferta Educativa de Mendoza</h1>
              <p className="lead mb-0">Encuentra tu futura carrera</p>
            </Link>
          </div>
          <Link to="/test" className="btn btn-success btn-lg">Hacer Test Vocacional</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;