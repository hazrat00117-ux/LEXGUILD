import React, { useState } from 'react';
import { 
  Search, 
  Bookmark, 
  ExternalLink, 
  BookOpen, 
  Scale, 
  CheckCircle2, 
  Filter
} from 'lucide-react';
import { StatuteObject, UserProgress, SubjectId } from '../types';
import { VERIFIED_STATUTES } from '../data/statutes';
import { soundService } from '../services/soundService';

interface StatuteHunterViewProps {
  progress: UserProgress;
  onToggleBookmark: (statuteId: string) => void;
}

export const StatuteHunterView: React.FC<StatuteHunterViewProps> = ({
  progress,
  onToggleBookmark
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterSubject, setFilterSubject] = useState<SubjectId | 'all'>('all');

  const filteredStatutes = VERIFIED_STATUTES.filter(st => {
    const matchesSubject = filterSubject === 'all' || st.subject === filterSubject;
    const matchesSearch = 
      st.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.sectionHeading.toLowerCase().includes(searchQuery.toLowerCase()) ||
      st.plainExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-amber-400 font-mono-legal uppercase tracking-wider mb-1">
          <span>Primary Legislation Codex</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Constitution 1992 & Acts of Parliament</span>
        </div>
        <h1 className="font-serif-legal text-2xl sm:text-3xl font-bold text-slate-100">
          Statute Hunter: Search & Interpretation
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Explore verbatim statutory texts from the Laws of Ghana paired with plain-language explanations,
          practical application examples, and cross-referenced Supreme Court precedents.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by section, act title, or legal term (e.g., 'Article 1(2)', 'Section 8', 'intent')..."
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/60"
          />
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
          {(['all', 'constitutional', 'contracts', 'criminal', 'land_customary', 'evidence'] as const).map(subj => (
            <button
              key={subj}
              onClick={() => {
                soundService.playClick();
                setFilterSubject(subj);
              }}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap capitalize transition-colors ${
                filterSubject === subj
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {subj.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Statutes Codex List */}
      <div className="space-y-4">
        {filteredStatutes.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center text-slate-400 text-sm">
            No statutes found matching your search. Try another keyword or switch category filter.
          </div>
        ) : (
          filteredStatutes.map(statute => {
            const isBookmarked = progress.savedStatuteIds.includes(statute.id);

            return (
              <div
                key={statute.id}
                className="p-5 sm:p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 transition-colors"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono-legal font-bold text-amber-400">
                        {statute.section}
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-slate-400 font-medium">{statute.title}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-[11px] text-emerald-400 font-mono-legal">{statute.currentStatus}</span>
                    </div>
                    <h2 className="font-serif-legal text-lg font-bold text-slate-100 mt-1">
                      {statute.sectionHeading}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        soundService.playClick();
                        onToggleBookmark(statute.id);
                      }}
                      className={`p-2 rounded-lg border text-xs transition-colors focus:outline-none ${
                        isBookmarked
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                          : 'bg-slate-950 text-slate-400 hover:text-slate-200 border-slate-800'
                      }`}
                      title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Statute'}
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <a
                      href={statute.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-400 transition-colors focus:outline-none"
                      title="Inspect full enactment on GhaLII"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Verbatim Statutory Snippet */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
                  <span className="text-[11px] font-mono-legal text-amber-400 uppercase font-semibold">
                    VERBATIM STATUTORY TEXT:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 italic font-serif-legal leading-relaxed">
                    "{statute.verbatimSnippet}"
                  </p>
                </div>

                {/* Plain-Language Explanation */}
                <div className="space-y-1 text-xs sm:text-sm">
                  <span className="font-semibold text-amber-300">Plain-Language Meaning for Students:</span>
                  <p className="text-slate-300 leading-relaxed font-sans-body">
                    {statute.plainExplanation}
                  </p>
                </div>

                {/* Real-World Application Examples */}
                <div className="space-y-1.5 text-xs">
                  <span className="font-semibold text-slate-400">Practical Applications:</span>
                  <ul className="space-y-1 list-disc list-inside text-slate-300">
                    {statute.applicationExamples.map((ex, idx) => (
                      <li key={idx}>{ex}</li>
                    ))}
                  </ul>
                </div>

                {/* Related Cases */}
                {statute.relatedCases.length > 0 && (
                  <div className="pt-2 text-xs flex flex-wrap items-center gap-2 text-slate-400 border-t border-slate-800/60">
                    <span className="font-semibold text-amber-400">Governing Authorities:</span>
                    <span className="font-mono-legal text-slate-300">
                      {statute.relatedCases.join(' · ')}
                    </span>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
