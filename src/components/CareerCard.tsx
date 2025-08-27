import React from 'react';
import { Link } from 'react-router-dom';
import { Career } from '../data/types';

interface CareerCardProps {
  career: Career;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  return (
    <Link to={`/career/${encodeURIComponent(career.name)}`} className="text-decoration-none">
      <div className="card bg-secondary text-white h-100 shadow-sm career-card">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{career.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{career.institution}</h6>
          <p className="card-text mt-auto">
            <strong>Tipo:</strong> {career.type}<br />
            <strong>Duración:</strong> {career.duration}<br />
            <strong>Área:</strong> {career.area}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CareerCard;