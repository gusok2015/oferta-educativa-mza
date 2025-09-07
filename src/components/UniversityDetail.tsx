import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { careers } from '../data/careers';
import CareerCard from './CareerCard';

const UniversityDetail: React.FC = () => {
  const { universityName } = useParams<{ universityName: string }>();

  const decodedUniversityName = universityName ? decodeURIComponent(universityName) : '';

  const universityCareers = useMemo(() => {
    return careers.filter(career => career.institution === decodedUniversityName);
  }, [decodedUniversityName]);

  return (
    <main className="container my-5">
      <h2 className="text-white mb-4">Carreras en {decodedUniversityName}</h2>
      <div className="row g-4">
        {universityCareers.length > 0 ? (
          universityCareers.map((career, index) => (
            <div className="col-md-4" key={index}>
              <CareerCard career={career} />
            </div>
          ))
        ) : (
          <p className="text-white">No se encontraron carreras para esta universidad.</p>
        )}
      </div>
    </main>
  );
};

export default UniversityDetail;
