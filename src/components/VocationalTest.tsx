import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testQuestions } from '../data/testQuestions';
import { CareerArea } from '../data/testTypes';

const VocationalTest: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<CareerArea, number>>({
    'Tecnología': 0,
    'Ciencias de la Salud': 0,
    'Ciencias Económicas': 0,
    'Arquitectura y Diseño': 0,
    'Ciencias Sociales': 0,
    'Arte y Diseño': 0,
  });

  const navigate = useNavigate();

  const handleAnswer = (isYes: boolean) => {
    if (isYes) {
      const currentArea = testQuestions[currentQuestionIndex].area;
      setScores(prevScores => ({
        ...prevScores,
        [currentArea]: prevScores[currentArea] + 1,
      }));
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < testQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Test finished, navigate to results page
      navigate('/result', { state: { scores } });
    }
  };

  const currentQuestion = testQuestions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / testQuestions.length) * 100);

  return (
    <div className="container mt-5 text-center">
      <h2>Test Vocacional</h2>
      <div className="progress my-4">
        <div 
          className="progress-bar bg-success" 
          role="progressbar" 
          style={{ width: `${progress}%` }} 
          aria-valuenow={progress} 
          aria-valuemin={0} 
          aria-valuemax={100}
        >
          {progress}%
        </div>
      </div>
      <div className="card bg-secondary text-white shadow-lg p-5">
        <h4>{currentQuestion.text}</h4>
        <div className="mt-4">
          <button className="btn btn-primary btn-lg mx-2" onClick={() => handleAnswer(true)}>Me interesa</button>
          <button className="btn btn-danger btn-lg mx-2" onClick={() => handleAnswer(false)}>No me interesa</button>
        </div>
      </div>
    </div>
  );
};

export default VocationalTest;
