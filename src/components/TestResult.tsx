import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AreaResult } from '../data/types';

const TestResult: React.FC = () => {
  const location = useLocation();
  const results: AreaResult[] = location.state?.results;

  if (!results || results.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>No se han encontrado resultados del test.</h2>
        <p>Por favor, completa el test para descubrir tus áreas de interés.</p>
        <Link to="/test" className="btn btn-primary mt-3">Realizar el Test Vocacional</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h2 className="display-5">¡Estos son tus resultados!</h2>
        <p className="lead text-muted">Hemos identificado las áreas que mejor se alinean con tus intereses y habilidades.</p>
      </div>

      {results.map((result, index) => (
        <div key={index} className="card shadow-sm mb-4">
          <div className="card-header bg-success text-white">
            <h3 className="my-0 fw-normal">{index + 1}. {result.area}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">{result.description}</p>
            <h5 className="mt-4">Carreras sugeridas en Mendoza:</h5>
            <ul className="list-group list-group-flush">
              {result.careers.map((career, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  {career.name}
                  <span className="badge bg-secondary rounded-pill">{career.institution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="text-center mt-5">
        <Link to="/test" className="btn btn-lg btn-outline-primary">Hacer el test de nuevo</Link>
      </div>
    </div>
  );
};

export default TestResult;