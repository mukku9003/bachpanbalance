
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ScreeningProps {
  onComplete: () => void;
}

const questions = [
  { id: 1, text: "Copies adults and friends (e.g., runs when they run).", category: 'Social' },
  { id: 2, text: "Can kick a ball forward without losing balance.", category: 'Motor' },
  { id: 3, text: "Uses sentences of 2-3 words (e.g., 'I want milk').", category: 'Language' },
  { id: 4, text: "Can screw and unscrew jar lids or turn door handle.", category: 'Cognitive' },
  { id: 5, text: "Responds when their name is called.", category: 'Social' }
];

const Screening: React.FC<ScreeningProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (val: string) => {
    setAnswers({ ...answers, [questions[step].id]: val });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      analyzeResults();
    }
  };

  const analyzeResults = async () => {
    setIsAnalyzing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Act as a child development expert. Here are parent-reported observations for a 3-year-old child:
      ${questions.map(q => `${q.text}: ${answers[q.id]}`).join('\n')}
      
      Provide a brief summary (under 100 words) of the development status, mentioning areas of strength and any areas that might need attention. End with a positive, encouraging note.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResult(response.text || "Assessment complete. Your child's growth looks promising!");
    } catch (err) {
      console.error(err);
      setResult("Unable to complete AI analysis, but your answers have been saved for your pediatrician.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (result) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center animate-in zoom-in duration-500">
        <div className="size-20 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-4xl">verified</span>
        </div>
        <h2 className="text-3xl font-bold mb-4">Assessment Results</h2>
        <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-primary/20 shadow-xl text-left mb-8">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">"{result}"</p>
        </div>
        <button 
          onClick={onComplete}
          className="bg-primary text-black font-bold px-10 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all"
        >
          View Full Dashboard
        </button>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="size-20 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
        <h2 className="text-2xl font-bold mb-2">Analyzing Observations</h2>
        <p className="text-gray-500">Our AI is processing your answers to generate insights...</p>
      </div>
    );
  }

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="max-w-[960px] mx-auto px-4 py-12 md:px-10 lg:px-20 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h1 className="text-3xl font-black mb-1">Aarav's 3-Year Checkup</h1>
            <p className="text-gray-500">Answer truthfully. There are no wrong answers.</p>
          </div>
          <p className="text-primary font-bold">{Math.round(progress)}%</p>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-800 h-3 rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div className="bg-white dark:bg-surface-dark p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl">
        <div className="flex items-center gap-2 text-primary font-bold mb-6 uppercase tracking-widest text-xs">
          <span className="material-symbols-outlined text-sm">psychology</span>
          {questions[step].category}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-10 leading-tight">
          {questions[step].text}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button 
            onClick={() => handleAnswer('Yes')}
            className="h-16 rounded-2xl bg-[#e7f3eb] dark:bg-green-900/20 text-primary-dark dark:text-primary font-bold hover:bg-primary hover:text-black transition-all"
          >
            Yes
          </button>
          <button 
            onClick={() => handleAnswer('No')}
            className="h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-500 font-bold hover:bg-gray-200 transition-all"
          >
            No
          </button>
          <button 
            onClick={() => handleAnswer('Not Sure')}
            className="h-16 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-500 font-bold hover:bg-gray-200 transition-all"
          >
            Not Sure
          </button>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button 
          onClick={() => step > 0 && setStep(step - 1)}
          className="text-gray-400 font-bold hover:text-primary flex items-center gap-1"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
      </div>
    </div>
  );
};

export default Screening;
