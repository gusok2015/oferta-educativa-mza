import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { careers } from '../data/careers';
import './UniversityList.css';

const UniversityList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueInstitutions = useMemo(() => {
    const institutions = careers.map(career => career.institution);
    const unique = Array.from(new Set(institutions)).sort();
    if (!searchTerm) {
      return unique;
    }
    return unique.filter(inst =>
      inst.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-white">Encuentra tu Universidad</h1>
        <p className="lead text-white-50">Explora las instituciones educativas de Mendoza</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Buscar universidad..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {uniqueInstitutions.map((institution, index) => (
          <div className="col-md-4" key={index}>
            <Link to={`/universidad/${encodeURIComponent(institution)}`} className="university-card text-decoration-none">
              <div className="card-body text-center">
                <div className="logo-placeholder mb-3">
                  <i className="fas fa-university fa-3x"></i>
                </div>
                <h5 className="card-title text-white">{institution}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UniversityList;