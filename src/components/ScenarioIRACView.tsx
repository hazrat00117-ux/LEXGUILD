import React, { useState } from 'react';
import { 
  FileText, 
  MapPin, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Scale,
  Sparkles
} from 'lucide-react';
import { IRACScenario, UserProgress } from '../types';
import { IRAC_SCENARIOS } from '../data/scenarios';
import { soundService } from '../services/soundService';
import confetti from 'canvas-confetti';

interface ScenarioIRACViewProps {
  progress: UserProgress;
  onScenarioCompleted: (scenario: IRACScenario, score: number) => void;
}

export const ScenarioIRACView: React.FC<ScenarioIRACViewProps> = ({
  progress,
  onScenarioCompleted
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(IRAC_SCENARIOS[0].id);
  const [currentStep, setCurrentStep] = useState<'facts' | 'issue' | 'rule' | 'app' | 'conc' | 'model'>('facts');
  
  // Selection states for each IRAC prong
  const [selectedIssueOpt, setSelectedIssueOpt] = useState<number | null>(null);
  const [selectedRuleOpt, setSelectedRuleOpt] = useState<number | null>(null);
  const [selectedAppOpt, setSelectedAppOpt] = useState<number | null>(null);
  const [selectedConcOpt, setSelectedConcOpt] = useState<number | null>(null);

  const [stepAnswered, setStepAnswered] = useState<boolean>(false);
  const [earnedPoints, setEarnedPoints] = useState<number>(0);

  const activeScenario = IRAC_SCENARIOS.find(s => s.id === selectedScenarioId) || IRAC_SCENARIOS[0];

  const resetState = () => {
    setCurrentStep('facts');
    setSelectedIssueOpt(null);
    setSelectedRuleOpt(null);
    setSelectedAppOpt(null);
    setSelectedConcOpt(null);
    setStepAnswered(false);
    setEarnedPoints(0);
  };

  const handleSelectScenario = (id: string) => {
    soundService.playClick();
    setSelectedScenarioId(id);
    resetState();
  };

  const handleConfirmProng = (isCorrect: boolean, pts: number) => {
    setStepAnswered(true);
    if (isCorrect) {
      soundService.playCorrect();
      setEarnedPoints(prev => prev + pts);
    } else {
      soundService.playIncorrect();
    }
  };

  const handleProceedNext = () => {
    soundService.playClick();
    setStepAnswered(false);
    if (currentStep === 'facts') setCurrentStep('issue');
    else if (currentStep === 'issue') setCurrentStep('rule');
    else if (currentStep === 'rule') setCurrentStep('app');
    else if (currentStep === 'app') setCurrentStep('conc');
    else if (currentStep === 'conc') {
      setCurrentStep('model');
      soundService.playLevelUp();
      confetti({ particleCount: 50, spread: 70 });
      onScenarioCompleted(activeScenario, earnedPoints);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header & Scenario Selection */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal uppercase tracking-wider mb-1">
            <span>Realistic Fact Patterns</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Ghanaian Legal Practice Simulation</span>
          </div>
          <h1 className="font-serif-legal text-2xl sm:text-3xl font-bold text-slate-100">
            IRAC Legal Reasoning Engine
          </h1>
        </div>

        {/* Scenario Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {IRAC_SCENARIOS.map(scen => {
            const isSelected = scen.id === selectedScenarioId;
            return (
              <button
                key={scen.id}
                onClick={() => handleSelectScenario(scen.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors border focus:outline-none ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
              >
                {scen.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scenario Overview Card */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal">
            <MapPin className="w-3.5 h-3.5" />
            <span>{activeScenario.location}</span>
            <span aria-hidden="true">·</span>
            <span className="uppercase">{activeScenario.subject}</span>
          </div>
          <h2 className="text-lg font-bold text-slate-100 font-serif-legal mt-0.5">
            {activeScenario.title}
          </h2>
        </div>

        {/* IRAC Step Tracker */}
        <div className="flex items-center gap-1.5 text-xs font-mono-legal">
          {['Facts', 'Issue (I)', 'Rule (R)', 'Application (A)', 'Conclusion (C)', 'Model Answer'].map((name, idx) => {
            const stepKeys = ['facts', 'issue', 'rule', 'app', 'conc', 'model'];
            const isActive = currentStep === stepKeys[idx];
            return (
              <span
                key={idx}
                className={`px-2 py-0.5 rounded ${
                  isActive ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-500'
                }`}
              >
                {name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Main IRAC Working Deck */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        
        {/* FACTS PRONG */}
        {currentStep === 'facts' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">Case Dossier & Client Brief</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                The Disputed Facts
              </h3>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 leading-relaxed font-sans-body">
              {activeScenario.facts}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleProceedNext}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Step 1: Identify Legal Issue (I)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ISSUE PRONG (I) */}
        {currentStep === 'issue' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">IRAC Step 1: Issue Formulation</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                {activeScenario.iracBreakdown.issue.prompt}
              </h3>
            </div>

            <div className="space-y-2.5">
              {activeScenario.iracBreakdown.issue.options.map((opt, idx) => {
                const isSelected = selectedIssueOpt === idx;
                const isCorrect = idx === activeScenario.iracBreakdown.issue.correctIndex;
                let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (stepAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={stepAnswered}
                    onClick={() => {
                      soundService.playClick();
                      setSelectedIssueOpt(idx);
                    }}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-colors ${btnStyle}`}
                  >
                    <span className="font-mono-legal font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {!stepAnswered ? (
              <button
                disabled={selectedIssueOpt === null}
                onClick={() => handleConfirmProng(selectedIssueOpt === activeScenario.iracBreakdown.issue.correctIndex, 10)}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Lock In Issue (+10 XP)
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs text-slate-300">
                  <span className="text-amber-400 font-semibold">Legal Reasoning: </span>
                  {activeScenario.iracBreakdown.issue.explanation}
                </p>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleProceedNext}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Proceed to Step 2: Rule (R)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* RULE PRONG (R) */}
        {currentStep === 'rule' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">IRAC Step 2: Rule & Governing Authority</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                {activeScenario.iracBreakdown.rule.prompt}
              </h3>
            </div>

            <div className="space-y-2.5">
              {activeScenario.iracBreakdown.rule.options.map((opt, idx) => {
                const isSelected = selectedRuleOpt === idx;
                const isCorrect = idx === activeScenario.iracBreakdown.rule.correctIndex;
                let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (stepAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={stepAnswered}
                    onClick={() => {
                      soundService.playClick();
                      setSelectedRuleOpt(idx);
                    }}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-colors ${btnStyle}`}
                  >
                    <span className="font-mono-legal font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {!stepAnswered ? (
              <button
                disabled={selectedRuleOpt === null}
                onClick={() => handleConfirmProng(selectedRuleOpt === activeScenario.iracBreakdown.rule.correctIndex, 10)}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Lock In Governing Rule (+10 XP)
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs text-slate-300">
                  <span className="text-amber-400 font-semibold">Authority Analysis: </span>
                  {activeScenario.iracBreakdown.rule.explanation}
                </p>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleProceedNext}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Proceed to Step 3: Application (A)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* APPLICATION PRONG (A) */}
        {currentStep === 'app' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">IRAC Step 3: Application to Facts</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                {activeScenario.iracBreakdown.application.prompt}
              </h3>
            </div>

            <div className="space-y-2.5">
              {activeScenario.iracBreakdown.application.options.map((opt, idx) => {
                const isSelected = selectedAppOpt === idx;
                const isCorrect = idx === activeScenario.iracBreakdown.application.correctIndex;
                let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (stepAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={stepAnswered}
                    onClick={() => {
                      soundService.playClick();
                      setSelectedAppOpt(idx);
                    }}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-colors ${btnStyle}`}
                  >
                    <span className="font-mono-legal font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {!stepAnswered ? (
              <button
                disabled={selectedAppOpt === null}
                onClick={() => handleConfirmProng(selectedAppOpt === activeScenario.iracBreakdown.application.correctIndex, 15)}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Lock In Application (+15 XP)
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs text-slate-300">
                  <span className="text-amber-400 font-semibold">Judicial Synthesis: </span>
                  {activeScenario.iracBreakdown.application.explanation}
                </p>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleProceedNext}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Proceed to Step 4: Conclusion (C)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CONCLUSION PRONG (C) */}
        {currentStep === 'conc' && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">IRAC Step 4: Final Conclusion & Remedies</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                {activeScenario.iracBreakdown.conclusion.prompt}
              </h3>
            </div>

            <div className="space-y-2.5">
              {activeScenario.iracBreakdown.conclusion.options.map((opt, idx) => {
                const isSelected = selectedConcOpt === idx;
                const isCorrect = idx === activeScenario.iracBreakdown.conclusion.correctIndex;
                let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (stepAnswered) {
                  if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={stepAnswered}
                    onClick={() => {
                      soundService.playClick();
                      setSelectedConcOpt(idx);
                    }}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-colors ${btnStyle}`}
                  >
                    <span className="font-mono-legal font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {!stepAnswered ? (
              <button
                disabled={selectedConcOpt === null}
                onClick={() => handleConfirmProng(selectedConcOpt === activeScenario.iracBreakdown.conclusion.correctIndex, 10)}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Deliver Legal Conclusion (+10 XP)
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <p className="text-xs text-slate-300">
                  <span className="text-amber-400 font-semibold">Remedy Determination: </span>
                  {activeScenario.iracBreakdown.conclusion.explanation}
                </p>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleProceedNext}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>View Comprehensive Model Answer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* MODEL ANSWER */}
        {currentStep === 'model' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-emerald-700/10 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-legal text-emerald-400 uppercase block">IRAC MASTERY COMPLETE</span>
                <h3 className="font-serif-legal text-xl font-bold text-slate-100">
                  Model Examination Answer
                </h3>
              </div>
              <span className="text-xs font-mono-legal font-bold text-amber-300 bg-amber-950/60 border border-amber-500/40 px-3 py-1.5 rounded-lg">
                +{earnedPoints} XP Earned
              </span>
            </div>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase font-semibold">FACULTY BENCH MODEL RESPONSE:</span>
              <p className="text-sm text-slate-200 leading-relaxed font-sans-body">
                {activeScenario.modelAnswer}
              </p>

              <div className="pt-3 border-t border-slate-800/80">
                <span className="text-xs font-semibold text-amber-300 block mb-1">Key Takeaway for Ghanaian Law Students:</span>
                <p className="text-xs text-slate-300">{activeScenario.keyTakeaway}</p>
              </div>

              <div className="pt-2 text-xs">
                <span className="text-slate-400 font-semibold">Verified Authorities Cited: </span>
                <span className="font-mono-legal text-amber-300">{activeScenario.authoritiesCited.join(' · ')}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={resetState}
                className="py-2 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Re-solve Scenario</span>
              </button>

              <button
                onClick={() => {
                  const nextIdx = (IRAC_SCENARIOS.findIndex(s => s.id === selectedScenarioId) + 1) % IRAC_SCENARIOS.length;
                  handleSelectScenario(IRAC_SCENARIOS[nextIdx].id);
                }}
                className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Examine Next Scenario</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
