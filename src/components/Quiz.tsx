import { useState } from 'react';
import type { Question, QuizState, UserInfo } from '../types';
import { UserForm } from './UserForm';
import { questions } from '../data/questions';

export function Quiz() {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    showResults: false,
    userInfo: null,
  });

  const handleUserSubmit = (userInfo: UserInfo) => {
    setState(prev => ({ ...prev, userInfo }));
  };

  const handleAnswer = (answer: number | string) => {
    const currentQuestion = questions[state.currentQuestionIndex];
    if (!currentQuestion) return;
    
    const isCorrect = answer === currentQuestion.correctAnswer;
    const isLastQuestion = state.currentQuestionIndex === questions.length - 1;
    
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [currentQuestion.id]: answer },
      score: isCorrect ? prev.score + 1 : prev.score,
      currentQuestionIndex: isLastQuestion ? prev.currentQuestionIndex : prev.currentQuestionIndex + 1,
      showResults: isLastQuestion,
    }));
  };

  const currentQuestion = questions[state.currentQuestionIndex];

  if (!state.userInfo) {
    return <UserForm onSubmit={handleUserSubmit} />;
  }

  if (state.showResults) {
    return (
      <div className="w-full max-w-2xl p-8 mx-auto bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Hasil Ujian</h2>
        <div className="text-center mb-6">
          <p className="text-xl text-white mb-2">
            {state.userInfo.firstName} {state.userInfo.lastName}
          </p>
          <p className="text-3xl font-bold text-white">
            Nilai: {state.score} / {questions.length}
          </p>
          <p className="text-lg text-white/80 mt-2">
            ({((state.score / questions.length) * 100).toFixed(1)}%)
          </p>
        </div>
        <div className="space-y-6">
          {questions.map((q, index) => {
            const userAnswer = state.answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            
            return (
              <div 
                key={q.id}
                className={`p-4 rounded-lg ${
                  isCorrect ? 'bg-teal-500/20' : 'bg-red-500/20'
                }`}
              >
                <p className="font-medium text-white mb-2">
                  {index + 1}. {q.question}
                </p>
                <p className="text-sm text-white/80">
                  Jawaban Anda: {Array.isArray(q.options) 
                    ? q.options[userAnswer as number]
                    : q.options[userAnswer as string]
                  }
                </p>
                <p className="text-sm text-white/80">
                  Jawaban Benar: {Array.isArray(q.options)
                    ? q.options[q.correctAnswer as number]
                    : q.options[q.correctAnswer as string]
                  }
                </p>
                {q.explanation && (
                  <p className="text-sm text-white/90 mt-2 italic">
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="w-full max-w-2xl p-8 mx-auto bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg">
        <p className="text-white text-center">Tidak ada soal tersedia.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-8 mx-auto bg-gray-800/40 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white/80">
            Soal {state.currentQuestionIndex + 1} dari {questions.length}
          </p>
          <p className="text-white/80">
            Nilai: {state.score}
          </p>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-gray-500 to-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((state.currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      
      <h2 className="text-xl font-medium text-white mb-6">
        {currentQuestion.question}
      </h2>
      
      <div className="space-y-3">
        {Array.isArray(currentQuestion.options) 
          ? currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-4 text-left bg-gray-700/40 hover:bg-gray-600/40 rounded-lg text-white transition-all duration-300"
            >
              {option}
            </button>
          ))
          : Object.entries(currentQuestion.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className="w-full p-4 text-left bg-gray-700/40 hover:bg-gray-600/40 rounded-lg text-white transition-all duration-300"
            >
              {value}
            </button>
          ))
        }
      </div>
    </div>
  );
}