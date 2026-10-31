import React, { useState } from 'react';
import { Scale, Award, ArrowRight, UserCheck } from 'lucide-react';
import { UserProgress, DifficultyLevel, JurisdictionCode } from '../types';
import { soundService } from '../services/soundService';

interface OnboardingModalProps {
  progress: UserProgress;
  onComplete: (updated: Partial<UserProgress>) => void;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  progress,
  onComplete,
  onClose
}) => {
  const [userName, setUserName] = useState(progress.userName || 'Kofi Mensah');
  const [institution, setInstitution] = useState(progress.institution || 'University of Ghana School of Law');
  const [academicYear, setAcademicYear] = useState(progress.academicYear || 'LLB Year 2');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>(progress.selectedDifficulty || 'intermediate');

  const institutionsList = [
    'University of Ghana School of Law (Legon)',
    'KNUST Faculty of Law (Kumasi)',
    'Ghana School of Law (Makola)',
    'GIMPA Faculty of Law (Greenhill)',
    'UPSA Faculty of Law',
    'Ashesi University Law & Governance',
    'Central University Faculty of Law',
    'Wisconsin International University Law',
    'Mountcrest University College',
    'General Law Enthusiast / Independent Scholar'
  ];

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playLevelUp();
    onComplete({
      userName: userName.trim() || 'Kofi Mensah',
      institution,
      academicYear,
      selectedDifficulty
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl">
        
        {/* Welcome Emblem */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono-legal text-amber-400 uppercase tracking-wider block">
              LexQuest Africa · Law Student Induction
            </span>
            <h2 className="font-serif-legal text-xl sm:text-2xl font-bold text-slate-100">
              Welcome to the Legal Mind Arena
            </h2>
          </div>
        </div>

        <form onSubmit={handleFinish} className="space-y-4">
          
          {/* Name input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Student / Advocate Full Name:
            </label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* Institution Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Law Faculty or Institution:
            </label>
            <select
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            >
              {institutionsList.map(inst => (
                <option key={inst} value={inst}>{inst}</option>
              ))}
            </select>
          </div>

          {/* Academic Stage */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 block">
              Academic Stage:
            </label>
            <select
              value={academicYear}
              onChange={(e) => setAcademicYear(e.target.value)}
              className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            >
              <option value="LLB Year 1 (Foundations)">LLB Year 1 (Foundations)</option>
              <option value="LLB Year 2 (Intermediate)">LLB Year 2 (Intermediate)</option>
              <option value="LLB Year 3 & 4 (Advanced)">LLB Year 3 & 4 (Advanced)</option>
              <option value="Professional Law Entrance Prep">Professional Law Entrance Candidate (Makola)</option>
              <option value="Pupil Barrister / Junior Associate">Pupil Barrister / Junior Associate</option>
              <option value="Public Citizen / Law Enthusiast">Public Citizen / Law Enthusiast</option>
            </select>
          </div>

          {/* Three Interconnected Learning Paths */}
          <div className="space-y-2 pt-1">
            <label className="text-xs font-semibold text-slate-300 block">
              Choose Your Starting Learning Path:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              
              <button
                type="button"
                onClick={() => {
                  soundService.playClick();
                  setSelectedDifficulty('beginner');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedDifficulty === 'beginner'
                    ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/40 text-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono-legal uppercase font-bold text-amber-400 block mb-0.5">
                  1. The Apprentice
                </span>
                <p className="text-[11px] text-slate-300">
                  Everyday English analogies, guided concepts, matching questions.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundService.playClick();
                  setSelectedDifficulty('intermediate');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedDifficulty === 'intermediate'
                    ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/40 text-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono-legal uppercase font-bold text-amber-400 block mb-0.5">
                  2. Investigator
                </span>
                <p className="text-[11px] text-slate-300">
                  Case ratio extraction, statutory interpretation, explaining why.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  soundService.playClick();
                  setSelectedDifficulty('advanced');
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedDifficulty === 'advanced'
                    ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/40 text-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono-legal uppercase font-bold text-amber-400 block mb-0.5">
                  3. The Advocate
                </span>
                <p className="text-[11px] text-slate-300">
                  Moot court advocacy, conflicting precedents, policy analysis.
                </p>
              </button>

            </div>
          </div>

          {/* Submit */}
          <div className="pt-3 flex justify-end">
            <button
              type="submit"
              className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Enter The Legal Mind Arena</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
