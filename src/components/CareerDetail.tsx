import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { careers } from '../data/careers';

const CareerDetail: React.FC = () => {
  const { careerName } = useParams<{ careerName: string }>();
  const career = careers.find(c => c.name === careerName);

  if (!career) {
    return (
      <div className="container text-center mt-5">
        <h2>Carrera no encontrada</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card bg-secondary text-white shadow-lg">
        <div className="card-header">
          <h3>{career.name}</h3>
        </div>
        <div className="card-body">
          <h5 className="card-title">{career.institution}</h5>
          <p className="card-text">
            <strong>Tipo:</strong> {career.type}<br />
            <strong>Duración:</strong> {career.duration}<br />
            <strong>Área:</strong> {career.area}
          </p>
          <Link to="/" className="btn btn-light">← Volver al listado</Link>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
