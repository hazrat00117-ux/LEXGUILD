import React, { useState } from 'react';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  Scale, 
  Gavel, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Quote,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { CaseInvestigation, UserProgress } from '../types';
import { CASE_INVESTIGATIONS } from '../data/investigations';
import { soundService } from '../services/soundService';
import confetti from 'canvas-confetti';

interface CaseDetectiveViewProps {
  progress: UserProgress;
  onInvestigationComplete: (investigation: CaseInvestigation) => void;
}

export const CaseDetectiveView: React.FC<CaseDetectiveViewProps> = ({
  progress,
  onInvestigationComplete
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_INVESTIGATIONS[0].id);
  const [currentStage, setCurrentStage] = useState<number>(1);
  
  // Stage states
  const [stage1SelectedOpt, setStage1SelectedOpt] = useState<number | null>(null);
  const [stage1Answered, setStage1Answered] = useState<boolean>(false);

  const [stage2SelectedOpt, setStage2SelectedOpt] = useState<number | null>(null);
  const [stage2Answered, setStage2Answered] = useState<boolean>(false);

  const [stage3SelectedIndices, setStage3SelectedIndices] = useState<number[]>([]);
  const [stage3Answered, setStage3Answered] = useState<boolean>(false);

  const [stage5SelectedOpt, setStage5SelectedOpt] = useState<number | null>(null);
  const [stage5Answered, setStage5Answered] = useState<boolean>(false);

  const activeInvestigation = CASE_INVESTIGATIONS.find(c => c.id === selectedCaseId) || CASE_INVESTIGATIONS[0];
  const stagesList = [
    { num: 1, name: 'Discover Facts' },
    { num: 2, name: 'Identify Issues' },
    { num: 3, name: 'Find the Law' },
    { num: 4, name: 'Build Arguments' },
    { num: 5, name: 'Deliver Judgment' },
    { num: 6, name: 'Bench Verdict' }
  ];

  const resetInvestigationState = () => {
    setCurrentStage(1);
    setStage1SelectedOpt(null);
    setStage1Answered(false);
    setStage2SelectedOpt(null);
    setStage2Answered(false);
    setStage3SelectedIndices([]);
    setStage3Answered(false);
    setStage5SelectedOpt(null);
    setStage5Answered(false);
  };

  const handleSelectCase = (id: string) => {
    soundService.playClick();
    setSelectedCaseId(id);
    resetInvestigationState();
  };

  const handleStageComplete = (nextStage: number) => {
    soundService.playClick();
    setCurrentStage(nextStage);
    if (nextStage === 6) {
      soundService.playGavel();
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
      onInvestigationComplete(activeInvestigation);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header and Case Selector Tabs */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal uppercase tracking-wider mb-1">
            <span>Supreme Court of Ghana Archives</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real Jurisprudence Investigations</span>
          </div>
          <h1 className="font-serif-legal text-2xl sm:text-3xl font-bold text-slate-100">
            Case Detective: Courtroom Investigations
          </h1>
        </div>

        {/* Case Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {CASE_INVESTIGATIONS.map(inv => {
            const isSelected = inv.id === selectedCaseId;
            return (
              <button
                key={inv.id}
                onClick={() => handleSelectCase(inv.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors border focus:outline-none ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800 hover:bg-slate-800'
                }`}
              >
                {inv.realCaseName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Details Badge Strip */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs text-amber-400 font-mono-legal block">INVESTIGATION DOSSIER</span>
          <h2 className="text-base sm:text-lg font-bold text-slate-100 font-serif-legal">
            {activeInvestigation.title}
          </h2>
          <span className="text-xs font-mono-legal text-slate-400">
            {activeInvestigation.citation}
          </span>
        </div>

        {/* 6 Stage Stepper */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {stagesList.map((st) => {
            const isActive = st.num === currentStage;
            const isPast = st.num < currentStage;

            return (
              <div
                key={st.num}
                className={`px-2.5 py-1 rounded text-xs flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold'
                    : isPast
                    ? 'bg-slate-950 text-emerald-400 border-emerald-500/30'
                    : 'bg-slate-950 text-slate-600 border-slate-800'
                }`}
              >
                <span>{st.num}</span>
                <span className="hidden sm:inline">{st.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Stage Content */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        
        {/* STAGE 1: DISCOVER FACTS */}
        {currentStage === 1 && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">Stage 01 of 06</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                Discover the Material Facts
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Read the chronological facts of the real dispute. Inspect the documentary clues before identifying the legal issues.
              </p>
            </div>

            {/* Narrative Steps */}
            <div className="space-y-3">
              {activeInvestigation.factsNarrative.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="font-mono-legal text-amber-400 font-bold shrink-0 mt-0.5">
                    §{idx + 1}
                  </span>
                  <p>{fact}</p>
                </div>
              ))}
            </div>

            {/* Documentary Clues */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {activeInvestigation.stages.discoverFacts.clues.map((clue, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono-legal text-amber-300 font-semibold block">
                    [EVIDENCE ITEM {idx + 1}]: {clue.label}
                  </span>
                  <p className="text-xs text-slate-300">{clue.text}</p>
                </div>
              ))}
            </div>

            {/* Comprehension Check */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-200 block">
                Fact Comprehension Check: {activeInvestigation.stages.discoverFacts.comprehensionQuestion.question}
              </span>
              <div className="space-y-2">
                {activeInvestigation.stages.discoverFacts.comprehensionQuestion.options.map((opt, idx) => {
                  const isSelected = stage1SelectedOpt === idx;
                  const isCorrect = idx === activeInvestigation.stages.discoverFacts.comprehensionQuestion.correctIndex;
                  let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                  if (stage1Answered) {
                    if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                    else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                  } else if (isSelected) {
                    btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={stage1Answered}
                      onClick={() => setStage1SelectedOpt(idx)}
                      className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-colors ${btnStyle}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {!stage1Answered ? (
                <button
                  disabled={stage1SelectedOpt === null}
                  onClick={() => {
                    if (stage1SelectedOpt === null) return;
                    setStage1Answered(true);
                    if (stage1SelectedOpt === activeInvestigation.stages.discoverFacts.comprehensionQuestion.correctIndex) {
                      soundService.playCorrect();
                    } else {
                      soundService.playIncorrect();
                    }
                  }}
                  className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
                >
                  Confirm Fact Verification
                </button>
              ) : (
                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-emerald-400">
                    {activeInvestigation.stages.discoverFacts.comprehensionQuestion.feedback}
                  </p>
                  <button
                    onClick={() => handleStageComplete(2)}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Proceed to Stage 2: Identify Issues</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* STAGE 2: IDENTIFY THE PROBLEM */}
        {currentStage === 2 && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">Stage 02 of 06</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                Formulate the Core Legal Issue
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                A skilled advocate isolates the exact question of law that determines the dispute.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200">
              <span className="text-xs font-mono-legal text-amber-400 block mb-1">LEGAL QUESTION:</span>
              {activeInvestigation.stages.identifyProblem.legalIssuePrompt}
            </div>

            <div className="space-y-2.5">
              {activeInvestigation.stages.identifyProblem.issueOptions.map((opt, idx) => {
                const isSelected = stage2SelectedOpt === idx;
                const isCorrect = idx === activeInvestigation.stages.identifyProblem.correctIndex;
                let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

                if (stage2Answered) {
                  if (isCorrect) btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  else if (isSelected) btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else if (isSelected) {
                  btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={stage2Answered}
                    onClick={() => setStage2SelectedOpt(idx)}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-colors ${btnStyle}`}
                  >
                    <span className="font-mono-legal font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {!stage2Answered ? (
              <button
                disabled={stage2SelectedOpt === null}
                onClick={() => {
                  if (stage2SelectedOpt === null) return;
                  setStage2Answered(true);
                  if (stage2SelectedOpt === activeInvestigation.stages.identifyProblem.correctIndex) {
                    soundService.playCorrect();
                  } else {
                    soundService.playIncorrect();
                  }
                }}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Lock In Legal Issue
              </button>
            ) : (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="text-amber-400 font-semibold">Judicial Analysis: </span>
                  {activeInvestigation.stages.identifyProblem.explanation}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleStageComplete(3)}
                    className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Proceed to Stage 3: Find the Law</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STAGE 3: FIND THE LAW */}
        {currentStage === 3 && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">Stage 03 of 06</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                Locate Governing Statutes & Precedents
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Evaluate the candidate statutory provisions and precedents. Distinguish binding authorities from irrelevant laws.
              </p>
            </div>

            <div className="space-y-3">
              {activeInvestigation.stages.findTheLaw.statuteAndPrecedentCandidates.map((cand, idx) => {
                const isSelected = stage3SelectedIndices.includes(idx);

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (stage3Answered) return;
                      soundService.playClick();
                      setStage3SelectedIndices(prev => 
                        prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
                      );
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/60 ring-1 ring-amber-500/30'
                        : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-legal text-xs font-semibold text-amber-300">
                        {cand.citation}
                      </span>
                      <span className={`text-[11px] px-2 py-0.5 rounded ${isSelected ? 'bg-amber-500 text-slate-950 font-semibold' : 'bg-slate-900 text-slate-500'}`}>
                        {isSelected ? 'Selected Authority' : 'Click to Select'}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1.5">{cand.summary}</p>
                    {stage3Answered && (
                      <p className={`text-xs mt-2 pt-2 border-t border-slate-800 ${cand.isApplicable ? 'text-emerald-400' : 'text-slate-400'}`}>
                        <span className="font-semibold">{cand.isApplicable ? 'Applicable Authority: ' : 'Distinguished / Inapplicable: '}</span>
                        {cand.reasoning}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {!stage3Answered ? (
              <button
                disabled={stage3SelectedIndices.length === 0}
                onClick={() => {
                  soundService.playCorrect();
                  setStage3Answered(true);
                }}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Validate Legal Authorities
              </button>
            ) : (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleStageComplete(4)}
                  className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Proceed to Stage 4: Build Arguments</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STAGE 4: BUILD ARGUMENTS */}
        {currentStage === 4 && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">Stage 04 of 06</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                Construct the Competing Submissions
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Evaluate both sides of the legal debate before the Supreme Court.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Plaintiff Submissions */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-legal text-amber-400 uppercase font-semibold">
                  <Scale className="w-4 h-4" />
                  <span>Plaintiff\'s Legal Arguments</span>
                </div>
                {activeInvestigation.stages.buildArguments.plaintiffArguments.map((arg, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-mono-legal">Submission {idx + 1}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono-legal ${arg.strength === 'Compelling' ? 'text-emerald-300 bg-emerald-950/60' : 'text-amber-300 bg-amber-950/60'}`}>
                        {arg.strength}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{arg.text}</p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800/60">
                      {arg.explanation}
                    </p>
                  </div>
                ))}
              </div>

              {/* Defendant / State Submissions */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-legal text-amber-400 uppercase font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>State / Respondent\'s Arguments</span>
                </div>
                {activeInvestigation.stages.buildArguments.defendantArguments.map((arg, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 font-mono-legal">Submission {idx + 1}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono-legal ${arg.strength === 'Compelling' ? 'text-emerald-300 bg-emerald-950/60' : 'text-amber-300 bg-amber-950/60'}`}>
                        {arg.strength}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{arg.text}</p>
                    <p className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-800/60">
                      {arg.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => handleStageComplete(5)}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Proceed to Stage 5: Deliver Your Judgment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STAGE 5: DELIVER JUDGMENT */}
        {currentStage === 5 && (
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-mono-legal text-amber-400 uppercase">Stage 05 of 06</span>
              <h3 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                The Judicial Robe: Deliver Your Ruling
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                You are on the Supreme Court bench. Weigh the facts, the Constitution, and arguments to pronounce judgment.
              </p>
            </div>

            <div className="text-sm font-semibold text-slate-200">
              {activeInvestigation.stages.deliverJudgment.question}
            </div>

            <div className="space-y-3">
              {activeInvestigation.stages.deliverJudgment.options.map((opt, idx) => {
                const isSelected = stage5SelectedOpt === idx;
                let optStyle = 'bg-slate-950 border-slate-800 hover:border-slate-700';

                if (stage5Answered) {
                  if (opt.isRealBenchVerdict) optStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  else if (isSelected) optStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else if (isSelected) {
                  optStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={idx}
                    disabled={stage5Answered}
                    onClick={() => {
                      soundService.playClick();
                      setStage5SelectedOpt(idx);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-colors ${optStyle}`}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono-legal text-amber-400 uppercase font-semibold mb-1">
                      <Gavel className="w-4 h-4" />
                      <span>{opt.ruling}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{opt.reasoning}</p>
                    {stage5Answered && isSelected && (
                      <p className={`text-xs mt-2 pt-2 border-t border-slate-800 ${opt.isRealBenchVerdict ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {opt.feedback}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>

            {!stage5Answered ? (
              <button
                disabled={stage5SelectedOpt === null}
                onClick={() => {
                  if (stage5SelectedOpt === null) return;
                  setStage5Answered(true);
                  soundService.playGavel();
                }}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <Gavel className="w-4 h-4" />
                <span>Pronounce Judgment</span>
              </button>
            ) : (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => handleStageComplete(6)}
                  className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
                >
                  <span>Reveal Real Supreme Court Verdict</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* STAGE 6: BENCH VERDICT REVEAL */}
        {currentStage === 6 && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-700/10 border border-amber-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono-legal text-amber-400 uppercase block">INVESTIGATION SOLVED</span>
                <h3 className="font-serif-legal text-xl font-bold text-amber-200">
                  Real Judgment of the Supreme Court of Ghana
                </h3>
              </div>
              <span className="text-xs font-mono-legal font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-lg">
                +50 XP Earned
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono-legal text-slate-400 uppercase font-semibold">ACTUAL HOLDING:</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans-body">
                  {activeInvestigation.stages.benchVerdictReveal.actualCourtDecision}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-mono-legal text-amber-400 uppercase font-semibold">RATIO DECIDENDI (BINDING PRINCIPLE):</span>
                <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-serif-legal">
                  {activeInvestigation.stages.benchVerdictReveal.ratioDecidendi}
                </p>
              </div>

              {activeInvestigation.stages.benchVerdictReveal.obiterDicta && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono-legal text-slate-400 uppercase font-semibold">OBITER DICTA (PERSUASIVE OBSERVATIONS):</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeInvestigation.stages.benchVerdictReveal.obiterDicta}
                  </p>
                </div>
              )}

              {/* Landmark Judicial Quotes */}
              <div className="space-y-2">
                {activeInvestigation.stages.benchVerdictReveal.benchQuotes.map((quote, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-start gap-3">
                    <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 opacity-60" />
                    <p className="text-xs sm:text-sm italic text-slate-300 font-serif-legal">
                      {quote}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <span className="font-semibold text-slate-300 block">Academic Jurist Commentary:</span>
                <p className="text-slate-400 leading-relaxed">
                  {activeInvestigation.stages.benchVerdictReveal.academicAnalysis}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={activeInvestigation.stages.benchVerdictReveal.originalSourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 underline font-mono-legal text-[11px]"
                  >
                    <span>Read Full Unedited Judgment on GhaLII</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      const nextIndex = (CASE_INVESTIGATIONS.findIndex(c => c.id === selectedCaseId) + 1) % CASE_INVESTIGATIONS.length;
                      handleSelectCase(CASE_INVESTIGATIONS[nextIndex].id);
                    }}
                    className="py-1.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg transition-colors text-xs"
                  >
                    Investigate Next Case
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
