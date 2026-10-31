import React, { useState } from 'react';
import { 
  Scale, 
  Gavel, 
  User, 
  AlertCircle, 
  Award, 
  ChevronRight, 
  ArrowRight, 
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { MootCourtCase, UserProgress } from '../types';
import { MOOT_COURT_CASE } from '../data/mootCourt';
import { soundService } from '../services/soundService';
import confetti from 'canvas-confetti';

interface MootCourtViewProps {
  progress: UserProgress;
  onMootCourtFinished: (score: number, side: 'appellant' | 'respondent') => void;
}

export const MootCourtView: React.FC<MootCourtViewProps> = ({
  progress,
  onMootCourtFinished
}) => {
  const [selectedSide, setSelectedSide] = useState<'appellant' | 'respondent'>('appellant');
  const [currentStep, setCurrentStep] = useState<'brief' | 'submissions' | 'interventions' | 'verdict'>('brief');
  const [submissionIndex, setSubmissionIndex] = useState<number>(0);
  const [selectedResponseIndex, setSelectedResponseIndex] = useState<number | null>(null);
  const [answeredIntervention, setAnsweredIntervention] = useState<boolean>(false);
  const [scoresAccumulator, setScoresAccumulator] = useState<number[]>([]);
  const [verdictDelivered, setVerdictDelivered] = useState<boolean>(false);

  const mootCase = MOOT_COURT_CASE;
  const submissionsList = selectedSide === 'appellant' ? mootCase.appellantCase : mootCase.respondentCase;
  const currentSubmission = submissionsList[submissionIndex] || submissionsList[0];

  const handleStartSubmissions = () => {
    soundService.playGavel();
    setCurrentStep('submissions');
  };

  const handleProceedToIntervention = () => {
    soundService.playClick();
    setCurrentStep('interventions');
    setSelectedResponseIndex(null);
    setAnsweredIntervention(false);
  };

  const handleSelectResponse = (idx: number) => {
    if (answeredIntervention) return;
    soundService.playClick();
    setSelectedResponseIndex(idx);
  };

  const handleSubmitResponse = () => {
    if (selectedResponseIndex === null) return;
    const resp = currentSubmission.judicialIntervention.responses[selectedResponseIndex];
    if (!resp) return;

    setAnsweredIntervention(true);
    setScoresAccumulator(prev => [...prev, resp.score]);

    if (resp.score >= 20) {
      soundService.playCorrect();
    } else {
      soundService.playIncorrect();
    }
  };

  const handleNextSubmissionOrVerdict = () => {
    soundService.playClick();
    if (submissionIndex + 1 < submissionsList.length) {
      setSubmissionIndex(prev => prev + 1);
      setCurrentStep('submissions');
      setSelectedResponseIndex(null);
      setAnsweredIntervention(false);
    } else {
      // Calculate final score
      const totalScore = scoresAccumulator.reduce((a, b) => a + b, 0);
      const normalizedScore = Math.min(100, Math.round((totalScore / (submissionsList.length * 25)) * 100));
      setCurrentStep('verdict');
      setVerdictDelivered(true);
      soundService.playGavel();
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 }
      });
      onMootCourtFinished(normalizedScore, selectedSide);
    }
  };

  const handleRestart = () => {
    setCurrentStep('brief');
    setSubmissionIndex(0);
    setSelectedResponseIndex(null);
    setAnsweredIntervention(false);
    setScoresAccumulator([]);
    setVerdictDelivered(false);
  };

  const totalPossible = submissionsList.length * 25;
  const currentRawScore = scoresAccumulator.reduce((a, b) => a + b, 0);
  const displayScorePercentage = totalPossible > 0 ? Math.round((currentRawScore / totalPossible) * 100) : 0;

  return (
    <div className="space-y-8">
      
      {/* Court Header & Moot Case Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal uppercase tracking-wider mb-1">
          <span>The Supreme Court of Ghana Chamber</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Simulated Appellate Advocacy Arena</span>
        </div>
        <h1 className="font-serif-legal text-2xl sm:text-3xl font-bold text-slate-100">
          Moot Court: {mootCase.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono-legal">
          {mootCase.court}
        </p>
      </div>

      {/* The Supreme Court Bench */}
      <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono-legal text-amber-400 uppercase font-semibold">
            Coram: The Supreme Court Panel of Three
          </span>
          <span className="text-xs text-slate-400 font-mono-legal">Ceremonial Robes & Judicial Ermine</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {mootCase.bench.map((judge, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300 font-serif-legal font-bold shrink-0">
                JSC
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-100 truncate font-serif-legal">
                  {judge.name}
                </p>
                <p className="text-[11px] text-amber-400/90 font-mono-legal truncate">
                  {judge.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: CASE BRIEF & SIDE SELECTION */}
      {currentStep === 'brief' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="font-serif-legal text-xl font-bold text-slate-100">
              Agreed Statement of Facts & Procedural Stance
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Read the appellate record carefully before electing which side of the bar you will represent.
            </p>
          </div>

          <div className="space-y-3">
            {mootCase.agreedFacts.map((fact, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <span className="font-mono-legal text-amber-400 font-bold shrink-0 mt-0.5">
                  §{idx + 1}
                </span>
                <p>{fact}</p>
              </div>
            ))}
          </div>

          {/* Side Selector */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-slate-200 block">
              Select Your Retainer (Choose Your Role at the Bar):
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  soundService.playClick();
                  setSelectedSide('appellant');
                }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedSide === 'appellant'
                    ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/40 text-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono-legal uppercase text-amber-400 font-semibold block mb-1">
                  Lead Counsel for Appellant
                </span>
                <p className="text-xs text-slate-300">
                  Argue that the 14-month curfew violates Article 21(1)(g) and circumvents Article 31 emergency safeguards.
                </p>
              </button>

              <button
                onClick={() => {
                  soundService.playClick();
                  setSelectedSide('respondent');
                }}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedSide === 'respondent'
                    ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500/40 text-amber-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <span className="text-xs font-mono-legal uppercase text-amber-400 font-semibold block mb-1">
                  Lead Counsel for Respondent (State)
                </span>
                <p className="text-xs text-slate-300">
                  Defend ministerial executive discretion under Section 4 of the Public Order Act, 1994 (Act 491).
                </p>
              </button>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={handleStartSubmissions}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Bow to the Bench & Advance Oral Arguments</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: ORAL SUBMISSIONS */}
      {currentStep === 'submissions' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono-legal text-amber-400 uppercase">
                {selectedSide === 'appellant' ? 'Appellant Submission' : 'State Submission'} {submissionIndex + 1} of {submissionsList.length}
              </span>
              <h2 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                {currentSubmission.title}
              </h2>
            </div>
            <div className="text-xs font-mono-legal text-slate-400">
              Coram in Session
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
            <span className="text-xs font-mono-legal text-slate-400 uppercase font-semibold">ORAL SUBMISSION OF COUNSEL:</span>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-serif-legal">
              "{currentSubmission.argumentText}"
            </p>

            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
              <span className="text-amber-400 font-semibold">Authoritative Authorities Cited: </span>
              <span className="font-mono-legal text-slate-300">{currentSubmission.authorityCited}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 italic">
              Notice: The Justices are reviewing your submission...
            </span>
            <button
              onClick={handleProceedToIntervention}
              className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Await Judicial Interruption</span>
              <Gavel className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: JUDICIAL INTERVENTIONS */}
      {currentStep === 'interventions' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-mono-legal text-amber-400 uppercase">Bench Query from the Bench</span>
            <h2 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
              Intervention by {currentSubmission.judicialIntervention.judgeName}
            </h2>
          </div>

          {/* The Justice's Direct Question */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
            <Gavel className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm font-semibold text-amber-200/90 leading-relaxed font-serif-legal">
              "{currentSubmission.judicialIntervention.question}"
            </p>
          </div>

          {/* Possible Responses */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-slate-300 block">
              Counsel\'s Response to the Bench:
            </span>

            {currentSubmission.judicialIntervention.responses.map((resp, idx) => {
              const isSelected = selectedResponseIndex === idx;
              let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700';

              if (answeredIntervention) {
                if (resp.score >= 20) {
                  btnStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                } else if (isSelected && resp.score < 20) {
                  btnStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                } else {
                  btnStyle = 'opacity-40 bg-slate-950 border-slate-800 text-slate-600';
                }
              } else if (isSelected) {
                btnStyle = 'bg-amber-500/10 border-amber-500 text-amber-200 ring-1 ring-amber-500/30';
              }

              return (
                <button
                  key={idx}
                  disabled={answeredIntervention}
                  onClick={() => handleSelectResponse(idx)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-colors ${btnStyle}`}
                >
                  <p className="leading-relaxed">{resp.text}</p>
                  {answeredIntervention && isSelected && (
                    <div className="mt-2 pt-2 border-t border-slate-800 text-xs">
                      <span className="font-mono-legal font-bold text-amber-400">Bench Reaction: </span>
                      <span className="text-slate-300">{resp.benchReaction}</span>
                      <span className="block font-mono-legal text-emerald-400 mt-1">
                        Score awarded: {resp.score} / 25
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {!answeredIntervention ? (
            <button
              disabled={selectedResponseIndex === null}
              onClick={handleSubmitResponse}
              className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
            >
              Deliver Response to the Bench
            </button>
          ) : (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextSubmissionOrVerdict}
                className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
              >
                <span>
                  {submissionIndex + 1 < submissionsList.length ? 'Proceed to Next Ground' : 'Conclude Oral Advocacy'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* STEP 4: FINAL BENCH VERDICT & SCORE */}
      {currentStep === 'verdict' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-700/10 border border-amber-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-mono-legal text-amber-400 uppercase block">CORAM PRONOUNCEMENT</span>
              <h2 className="font-serif-legal text-xl font-bold text-slate-100">
                Supreme Court Appellate Judgment
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono-legal text-slate-400 block">ADVOCACY SCORE</span>
              <span className="text-xl font-mono-legal font-bold text-amber-300">{displayScorePercentage} / 100</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono-legal text-amber-400 uppercase font-semibold">BENCH RULING SUMMARY:</span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif-legal">
                "The Supreme Court unanimously holds that while Section 4 of the Public Order Act, 1994 (Act 491) confers statutory power to impose curfews to preserve public safety, such power cannot be exercised indefinitely without parliamentary debate or formal invocation of Article 31 emergency mechanisms. A 14-month perpetual curfew without legislative review fails the proportionality standard under Tommy Thompson and violates Article 21(1)(g)."
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono-legal text-slate-400 uppercase font-semibold">ADVOCACY RUBRIC BREAKDOWN:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-amber-400 font-semibold block mb-1">Constitutional Supremacy</span>
                  <p className="text-slate-300">{mootCase.verdictCriteria.jurisdictionGrip}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-amber-400 font-semibold block mb-1">Statutory Interplay</span>
                  <p className="text-slate-300">{mootCase.verdictCriteria.statutoryApplication}</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800/80">
                  <span className="text-amber-400 font-semibold block mb-1">Precedent Distinction</span>
                  <p className="text-slate-300">{mootCase.verdictCriteria.precedentDistinction}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-mono-legal text-emerald-400">
                +100 XP & Moot Court Champion Achievement Unlocked!
              </span>
              <button
                onClick={handleRestart}
                className="py-2 px-5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Argue Another Side / Retrial</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
