import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { vocationalTestQuestions } from '../data/testQuestions';
import { testResults } from '../data/testResults';
import { VocationalArea, Option, AreaResult } from '../data/types';

const VocationalTest: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<VocationalArea, number>>({
    'Ciencias de la Salud': 0,
    'Ingeniería y Tecnología': 0,
    'Ciencias Sociales y Humanidades': 0,
    'Ciencias Económicas y Empresariales': 0,
    'Arte, Diseño y Comunicación': 0,
    'Ciencias Exactas y Naturales': 0,
    'Ciencias de la Educación': 0,
    'Agropecuarias y Ambientales': 0,
  });

  const navigate = useNavigate();

  const handleAnswer = (selectedOption: Option) => {
    // Update scores based on the selected option's areas
    const updatedScores = { ...scores };
    selectedOption.areas.forEach(area => {
      updatedScores[area] += 1;
    });
    setScores(updatedScores);

    // Move to the next question or finish the test
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < vocationalTestQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Test finished, process results and navigate
      const finalResults = processResults(updatedScores);
      navigate('/result', { state: { results: finalResults } });
    }
  };

  const processResults = (finalScores: Record<VocationalArea, number>): AreaResult[] => {
    const sortedAreas = (Object.keys(finalScores) as VocationalArea[]).sort(
      (a, b) => finalScores[b] - finalScores[a]
    );

    // Get top 3 areas
    const top3Areas = sortedAreas.slice(0, 3);

    // Format results to include description and careers
    return top3Areas.map(area => ({
      area,
      score: finalScores[area],
      ...testResults[area],
    }));
  };

  const currentQuestion = vocationalTestQuestions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / vocationalTestQuestions.length) * 100);

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">Test Vocacional</h2>
      <p className="lead mb-4">Descubre tus áreas de interés. ¡Responde con sinceridad!</p>
      
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

      <div className="card bg-light text-dark shadow-lg p-4">
        <div className="card-body">
          <h4 className="card-title">{currentQuestion.text}</h4>
          <div className="list-group mt-4">
            {currentQuestion.options.map((option, index) => (
              <button 
                key={index} 
                type="button" 
                className="list-group-item list-group-item-action text-start" 
                onClick={() => handleAnswer(option)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocationalTest;