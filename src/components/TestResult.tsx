import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CareerArea } from '../data/testTypes';

const TestResult: React.FC = () => {
  const location = useLocation();
  const scores: Record<CareerArea, number> = location.state?.scores;

  if (!scores) {
    return (
      <div className="container text-center mt-5">
        <h2>No se han encontrado resultados del test.</h2>
        <Link to="/test" className="btn btn-primary mt-3">Realizar el Test</Link>
      </div>
    );
  }

  // Find the area with the highest score
  const topArea = Object.keys(scores).reduce((a, b) => scores[a as CareerArea] > scores[b as CareerArea] ? a : b) as CareerArea;

  return (
    <div className="container mt-5 text-center">
      <h2>Resultado del Test</h2>
      <div className="card bg-secondary text-white shadow-lg p-5">
        <h4>Tu área de mayor afinidad es:</h4>
        <h1 className="display-4 text-success my-3">{topArea}</h1>
        <p className="lead">Te recomendamos explorar las carreras en esta área para ver cuáles se alinean con tus intereses.</p>
        <div className="mt-4">
          <Link to={`/?search=${encodeURIComponent(topArea)}`} className="btn btn-primary btn-lg mx-2">Ver Carreras de {topArea}</Link>
          <Link to="/test" className="btn btn-secondary btn-lg mx-2">Hacer el test de nuevo</Link>
        </div>
      </div>
    </div>
  );
};

export default TestResult;
