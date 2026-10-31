import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle,
  FileText,
  Send
} from 'lucide-react';
import { LEGAL_SOURCE_REGISTRY, JURISDICTIONS } from '../data/legalSources';
import { soundService } from '../services/soundService';

export const ReviewerHubView: React.FC = () => {
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [feedbackSubject, setFeedbackSubject] = useState<string>('Citation Accuracy');
  const [feedbackNote, setFeedbackNote] = useState<string>('');

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playCorrect();
    setFeedbackSent(true);
    setFeedbackNote('');
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal uppercase tracking-wider mb-1">
          <span>Academic Integrity & Citation Accuracy</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Phase 1 Research & Legal Safety</span>
        </div>
        <h1 className="font-serif-legal text-2xl sm:text-3xl font-bold text-slate-100">
          Source Verification & Reviewer Hub
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          All case citations, statutory articles, and legal doctrines in LexQuest Africa are traceable to official
          free public repositories (GhaLII, Judicial Service of Ghana, and Parliament of Ghana).
        </p>
      </div>

      {/* Mandatory Legal & Educational Disclaimer */}
      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-4">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
          <span className="font-semibold text-amber-300 block">Academic Educational Disclaimer:</span>
          <p>
            LexQuest Africa is an interactive educational simulation designed for law students and legal enthusiasts.
            It does not constitute formal legal advice, representation, or an attorney-client relationship.
            Litigants with active disputes in Ghanaian or African courts should consult a qualified legal practitioner
            duly licensed by the General Legal Council.
          </p>
        </div>
      </div>

      {/* Free Public Legal Source Registry */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-400 font-mono-legal">
            Verified Legal Source Repositories
          </h2>
          <span className="text-xs text-slate-500">Free Access to Law Movement</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LEGAL_SOURCE_REGISTRY.map(src => (
            <div key={src.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-legal text-amber-400 font-semibold">{src.jurisdiction}</span>
                <span className="text-[10px] font-mono-legal text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {src.verificationStatus}
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-100 font-serif-legal">{src.name}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{src.description}</p>
              </div>

              <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex items-center justify-between">
                <span>Coverage: {src.coverage}</span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 font-mono-legal"
                >
                  <span>Visit Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pan-African Comparative Packs Roadmap */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-400 font-mono-legal">
          Pan-African Common Law Jurisdictions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {JURISDICTIONS.map(j => (
            <div
              key={j.code}
              className={`p-3.5 rounded-xl border text-center space-y-1 ${
                j.isPrimary
                  ? 'bg-slate-900 border-amber-500/40 text-slate-100'
                  : 'bg-slate-950 border-slate-800 text-slate-400'
              }`}
            >
              <div className="text-2xl mb-1">{j.flag}</div>
              <p className="text-xs font-bold truncate">{j.name}</p>
              <span className={`text-[10px] font-mono-legal block ${j.isPrimary ? 'text-amber-400' : 'text-slate-500'}`}>
                {j.isPrimary ? 'Active Primary' : 'Comparative'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviewer / Lecturer Feedback Form */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal uppercase">
          <ShieldCheck className="w-4 h-4" />
          <span>Faculty & Legal Educator Review Workflow</span>
        </div>

        <h3 className="font-serif-legal text-lg font-bold text-slate-100">
          Submit Academic Verification or Citation Correction
        </h3>

        <p className="text-xs text-slate-400">
          Are you a law lecturer, researcher, or member of the bar? We welcome citation verification,
          recent statutory reform notices (e.g. Legal Education reforms or Land Act 2020 rulings),
          and suggested learning scenarios.
        </p>

        {feedbackSent ? (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs">
            Thank you! Your academic review notes have been logged for inspection by our curriculum team.
          </div>
        ) : (
          <form onSubmit={handleSendFeedback} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name & Institution (e.g., Dr. Mensah, UG Law)"
                className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              />
              <select
                value={feedbackSubject}
                onChange={(e) => setFeedbackSubject(e.target.value)}
                className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
              >
                <option value="Citation Accuracy">Citation Verification</option>
                <option value="Ratio Decidendi Refinement">Ratio Decidendi Refinement</option>
                <option value="Statutory Amendment">Statutory Amendment Update</option>
                <option value="New Scenario Suggestion">Suggest Real Case Scenario</option>
              </select>
            </div>

            <textarea
              rows={3}
              required
              value={feedbackNote}
              onChange={(e) => setFeedbackNote(e.target.value)}
              placeholder="Detail the case citation, statute section, or academic rationale..."
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            />

            <button
              type="submit"
              className="py-2.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit for Verification</span>
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
