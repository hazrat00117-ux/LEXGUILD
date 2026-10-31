import React, { useState } from 'react';
import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  Scale, 
  Landmark, 
  Award, 
  Compass, 
  CheckCircle2, 
  Lock, 
  ChevronRight, 
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { UserProgress, SubjectId, Question } from '../types';
import { LEGAL_SUBJECTS, JURISDICTIONS } from '../data/legalSources';
import { QUESTIONS_DATABASE } from '../data/questions';
import { soundService } from '../services/soundService';
import confetti from 'canvas-confetti';

interface TerritoryMapProps {
  progress: UserProgress;
  onQuestionCompleted: (question: Question, isCorrect: boolean) => void;
  onNavigateToCases: () => void;
  onNavigateToMoot: () => void;
  onNavigateToScenarios: () => void;
}

export const TerritoryMap: React.FC<TerritoryMapProps> = ({
  progress,
  onQuestionCompleted,
  onNavigateToCases,
  onNavigateToMoot,
  onNavigateToScenarios
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId>('constitutional');
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const activeSubjectData = LEGAL_SUBJECTS.find(s => s.id === selectedSubject) || LEGAL_SUBJECTS[0];
  const subjectQuestions = QUESTIONS_DATABASE.filter(q => q.subject === selectedSubject);

  const getSubjectIcon = (id: SubjectId) => {
    switch (id) {
      case 'constitutional': return <ShieldCheck className="w-5 h-5" />;
      case 'contracts': return <FileText className="w-5 h-5" />;
      case 'criminal': return <AlertTriangle className="w-5 h-5" />;
      case 'torts': return <Scale className="w-5 h-5" />;
      case 'land_customary': return <Landmark className="w-5 h-5" />;
      case 'legal_system': return <Award className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const handleStartQuestion = (q: Question) => {
    soundService.playClick();
    setActiveQuestion(q);
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  const handleSubmitAnswer = () => {
    if (!activeQuestion || !selectedOptionId) return;
    const option = activeQuestion.options.find(o => o.id === selectedOptionId);
    if (!option) return;

    setHasSubmitted(true);
    if (option.isCorrect) {
      soundService.playCorrect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      onQuestionCompleted(activeQuestion, true);
    } else {
      soundService.playIncorrect();
      onQuestionCompleted(activeQuestion, false);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Editorial Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-6 sm:p-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal tracking-wider uppercase">
            <span>Primary Arena</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Republic of Ghana Jurisdiction</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Common Law & 1992 Constitution</span>
          </div>

          <h1 className="font-serif-legal text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
            The Legal Mind Arena
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Journey across the legal territories of Ghana. Test your mastery of the 1992 Constitution,
            the Contracts Act (Act 25), the Criminal Offences Act (Act 29), and customary land tenure.
            Defend your reasoning, cite binding authorities, and earn promotion to the Supreme Court bench.
          </p>

          {/* Quick Access Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateToCases}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2 focus:outline-none"
            >
              <span>Investigate Case Law</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateToMoot}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-2 focus:outline-none"
            >
              <span>Enter Supreme Moot Court</span>
            </button>
            <button
              onClick={onNavigateToScenarios}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-2 focus:outline-none"
            >
              <span>Practice IRAC Scenarios</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Zone Stage: Territory Selectors (Left/Top) & Active Realm Deck (Right/Bottom) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Territories List & Mastery Gauges */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-400 font-mono-legal">
              Jurisdictional Territories
            </h2>
            <span className="text-xs text-slate-500">6 Domains Active</span>
          </div>

          <div className="space-y-2.5">
            {LEGAL_SUBJECTS.map((subject) => {
              const mastery = progress.subjectMastery[subject.id] || 0;
              const isSelected = selectedSubject === subject.id;

              return (
                <button
                  key={subject.id}
                  onClick={() => {
                    soundService.playClick();
                    setSelectedSubject(subject.id);
                    setActiveQuestion(null);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/60 shadow-lg shadow-amber-500/5 ring-1 ring-amber-500/30'
                      : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${subject.accentBg}`}>
                      {getSubjectIcon(subject.id)}
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-sm font-semibold truncate ${isSelected ? 'text-slate-100' : 'text-slate-300'}`}>
                        {subject.territoryName}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                        <span>{subject.name}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-legal tabular-nums">{mastery}% Mastery</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                      <div 
                        className="h-full bg-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${mastery}%` }}
                      />
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-0.5' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Territory Quest Hub */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
          
          {/* Realm Header */}
          <div className="border-b border-slate-800 pb-5">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-xs font-mono-legal text-amber-400 uppercase tracking-wider">
                {activeSubjectData.name} Codex
              </span>
              <span className="text-xs text-slate-400 font-mono-legal">
                Ghanaian Statutory & Case Authority
              </span>
            </div>

            <h2 className="font-serif-legal text-xl sm:text-2xl font-bold text-slate-100">
              {activeSubjectData.territoryName}
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm mt-1 leading-relaxed">
              {activeSubjectData.description}
            </p>

            <div className="mt-3 text-xs italic text-amber-400/80 font-serif-legal">
              "{activeSubjectData.tagline}"
            </div>
          </div>

          {/* Active Question Sandbox (if selected) or Available Missions list */}
          {activeQuestion ? (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="uppercase font-mono-legal text-amber-400 font-semibold">
                    {activeQuestion.difficulty} Level
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-300 font-mono-legal">+{activeQuestion.xpReward} XP</span>
                </div>
                <button
                  onClick={() => setActiveQuestion(null)}
                  className="text-xs text-slate-400 hover:text-slate-200 underline focus:outline-none"
                >
                  Return to Mission List
                </button>
              </div>

              {activeQuestion.contextScenario && (
                <div className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans-body">
                  <span className="font-semibold text-amber-300 block mb-1">Factual Context:</span>
                  {activeQuestion.contextScenario}
                </div>
              )}

              <div className="text-sm font-medium text-slate-100 leading-relaxed">
                {activeQuestion.questionText}
              </div>

              {/* Options list */}
              <div className="space-y-2.5">
                {activeQuestion.options.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;
                  let optionStyles = 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700';

                  if (hasSubmitted) {
                    if (opt.isCorrect) {
                      optionStyles = 'bg-emerald-950/40 border-emerald-500/70 text-emerald-200';
                    } else if (isSelected && !opt.isCorrect) {
                      optionStyles = 'bg-rose-950/40 border-rose-500/70 text-rose-200';
                    } else {
                      optionStyles = 'opacity-40 bg-slate-950 border-slate-800 text-slate-500';
                    }
                  } else if (isSelected) {
                    optionStyles = 'bg-amber-500/10 border-amber-500 text-amber-100 ring-1 ring-amber-500/30';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={hasSubmitted}
                      onClick={() => {
                        soundService.playClick();
                        setSelectedOptionId(opt.id);
                      }}
                      className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-colors focus:outline-none ${optionStyles}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono-legal font-bold shrink-0 text-slate-400 mt-0.5">
                          {opt.id.replace('opt-', '').toUpperCase()}.
                        </span>
                        <div className="space-y-1">
                          <p>{opt.text}</p>
                          {hasSubmitted && (opt.isCorrect || isSelected) && (
                            <p className={`text-xs mt-1 pt-1 border-t border-slate-800 ${opt.isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {opt.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Verification & Authority footer */}
              {hasSubmitted && (
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-amber-400 font-semibold">Statutory Authority:</span>
                    <span className="font-mono-legal text-slate-300">{activeQuestion.statutoryReference || '1992 Constitution of Ghana'}</span>
                  </div>
                  {activeQuestion.caseReference && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-amber-400 font-semibold">Precedent Reference:</span>
                      <span className="italic text-slate-300">{activeQuestion.caseReference}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Submit or Continue button */}
              <div className="pt-2">
                {!hasSubmitted ? (
                  <button
                    disabled={!selectedOptionId}
                    onClick={handleSubmitAnswer}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors focus:outline-none"
                  >
                    Submit Legal Reasoning
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveQuestion(null)}
                    className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg border border-slate-700 transition-colors focus:outline-none"
                  >
                    Complete Quest & Choose Next Mission
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-200">Active Missions in this Territory:</span>
                <span>{subjectQuestions.length} Questions Verified</span>
              </div>

              <div className="space-y-3">
                {subjectQuestions.map((q, idx) => {
                  const isCompleted = progress.completedMissions.includes(q.id);

                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-mono-legal text-amber-400 uppercase font-medium">
                            Mission 0{idx + 1}
                          </span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-slate-400">{q.conceptTested}</span>
                          <span aria-hidden="true" className="text-slate-600">·</span>
                          <span className="text-emerald-400 font-mono-legal">+{q.xpReward} XP</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                          {q.questionText}
                        </p>
                      </div>

                      <button
                        onClick={() => handleStartQuestion(q)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors focus:outline-none ${
                          isCompleted
                            ? 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                            : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                        }`}
                      >
                        {isCompleted ? 'Re-examine' : 'Engage'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
