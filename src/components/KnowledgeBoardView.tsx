import React, { useState } from 'react';
import { 
  Award, 
  Flame, 
  BookOpen, 
  Download, 
  Upload, 
  RotateCw, 
  Bookmark, 
  CheckCircle2, 
  Sparkles,
  HelpCircle,
  FileText,
  Clock,
  Layers
} from 'lucide-react';
import { UserProgress, Flashcard } from '../types';
import { getRankTitle, StorageService } from '../services/storageService';
import { LEGAL_SUBJECTS } from '../data/legalSources';
import { VERIFIED_CASES } from '../data/cases';
import { VERIFIED_STATUTES } from '../data/statutes';
import { soundService } from '../services/soundService';

interface KnowledgeBoardViewProps {
  progress: UserProgress;
  onUpdateFlashcard: (cardId: string, grade: 'again' | 'hard' | 'good' | 'easy') => void;
  onImportProgress: (json: string) => void;
}

export const KnowledgeBoardView: React.FC<KnowledgeBoardViewProps> = ({
  progress,
  onUpdateFlashcard,
  onImportProgress
}) => {
  const [boardTab, setBoardTab] = useState<'overview' | 'flashcards' | 'ledger' | 'bookmarks'>('overview');
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [importText, setImportText] = useState<string>('');
  const [showImportModal, setShowImportModal] = useState<boolean>(false);

  const rank = getRankTitle(progress.level);
  const flashcards = progress.flashcards || [];
  const activeCard = flashcards[activeCardIndex] || flashcards[0];

  const bookmarkedCases = VERIFIED_CASES.filter(c => progress.bookmarkedCaseIds.includes(c.id));
  const bookmarkedStatutes = VERIFIED_STATUTES.filter(s => progress.savedStatuteIds.includes(s.id));

  const handleGradeCard = (grade: 'again' | 'hard' | 'good' | 'easy') => {
    soundService.playClick();
    if (activeCard) {
      onUpdateFlashcard(activeCard.id, grade);
    }
    setIsFlipped(false);
    if (activeCardIndex + 1 < flashcards.length) {
      setActiveCardIndex(prev => prev + 1);
    } else {
      setActiveCardIndex(0);
    }
  };

  const handleExport = () => {
    soundService.playClick();
    const dataStr = StorageService.exportProgressJSON(progress);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lexquest_progress_${progress.userName.toLowerCase().replace(/\s+/g, '_')}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportSubmit = () => {
    if (!importText.trim()) return;
    onImportProgress(importText);
    setShowImportModal(false);
    setImportText('');
  };

  return (
    <div className="space-y-8">
      
      {/* Student Profile & Judicial Rank Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif-legal text-2xl font-bold shrink-0">
            {progress.userName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-legal text-amber-400 uppercase">
              <span>{rank.title}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">{rank.robing}</span>
            </div>
            <h1 className="font-serif-legal text-2xl font-bold text-slate-100 mt-0.5">
              {progress.userName}
            </h1>
            <p className="text-xs text-slate-400 font-mono-legal mt-0.5">
              {progress.institution} · {progress.academicYear}
            </p>
          </div>
        </div>

        {/* Quantitative Performance Strip */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono-legal text-slate-400 uppercase block">Total XP</span>
            <span className="font-mono-legal text-base font-bold text-amber-300 tabular-nums">
              {progress.totalXp} XP
            </span>
          </div>

          <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono-legal text-slate-400 uppercase block">Daily Streak</span>
            <div className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="font-mono-legal text-base font-bold text-slate-100 tabular-nums">
                {progress.streakDays} Days
              </span>
            </div>
          </div>

          <div className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[10px] font-mono-legal text-slate-400 uppercase block">Gavels</span>
            <span className="font-mono-legal text-base font-bold text-slate-100 tabular-nums">
              {progress.gavels}
            </span>
          </div>

          <div className="flex items-center gap-2 pl-2">
            <button
              onClick={handleExport}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title="Export Progress JSON (Offline Backup)"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowImportModal(true)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
              title="Import Progress JSON"
            >
              <Upload className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Board Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 text-xs font-medium">
        <button
          onClick={() => setBoardTab('overview')}
          className={`px-3 py-1.5 rounded-lg transition-colors ${
            boardTab === 'overview' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Subject Mastery & Badges
        </button>
        <button
          onClick={() => setBoardTab('flashcards')}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            boardTab === 'flashcards' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Spaced Repetition Deck</span>
        </button>
        <button
          onClick={() => setBoardTab('bookmarks')}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            boardTab === 'bookmarks' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Bookmark className="w-3.5 h-3.5" />
          <span>Bookmarked Law</span>
        </button>
        <button
          onClick={() => setBoardTab('ledger')}
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            boardTab === 'ledger' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>XP Transaction Ledger</span>
        </button>
      </div>

      {/* TAB 1: OVERVIEW & BADGES */}
      {boardTab === 'overview' && (
        <div className="space-y-6">
          {/* Subject Mastery Grid */}
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-400 font-mono-legal">
              Subject Mastery Breakdown
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {LEGAL_SUBJECTS.map(subj => {
                const mastery = progress.subjectMastery[subj.id] || 0;

                return (
                  <div key={subj.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-200 font-serif-legal">{subj.name}</span>
                      <span className="font-mono-legal text-xs font-semibold text-amber-400">{mastery}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${mastery}%` }}
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 block truncate">{subj.tagline}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Badges Showcase */}
          <div className="space-y-3 pt-4">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-slate-400 font-mono-legal">
              Judicial Honors & Badges
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {progress.badges.map(b => {
                const isUnlocked = !!b.unlockedAt;

                return (
                  <div
                    key={b.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isUnlocked
                        ? 'bg-slate-900 border-amber-500/40 text-slate-100'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-600 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Award className={`w-4 h-4 ${isUnlocked ? 'text-amber-400' : 'text-slate-600'}`} />
                      <span className="text-xs font-bold font-serif-legal truncate">{b.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{b.description}</p>
                    {isUnlocked && (
                      <span className="text-[10px] font-mono-legal text-emerald-400 block mt-2">
                        Unlocked
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SPACED REPETITION FLASHCARDS */}
      {boardTab === 'flashcards' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono-legal text-amber-400 uppercase">
                Card {activeCardIndex + 1} of {flashcards.length}
              </span>
              <h2 className="font-serif-legal text-xl font-bold text-slate-100 mt-1">
                Active Recall & Spaced Repetition (SM-2)
              </h2>
            </div>
            <span className="text-xs font-mono-legal text-slate-400">
              {activeCard?.jurisdiction} Jurisprudence
            </span>
          </div>

          {activeCard && (
            <div className="space-y-6">
              {/* Flashcard interactive tile */}
              <div
                onClick={() => {
                  soundService.playClick();
                  setIsFlipped(!isFlipped);
                }}
                className="min-h-[220px] p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 cursor-pointer flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-legal text-slate-500 mb-3">
                    <span className="uppercase text-amber-400">{activeCard.termOrPrinciple}</span>
                    <span>Click card to reveal answer</span>
                  </div>

                  <p className="font-serif-legal text-base sm:text-lg text-slate-100 leading-relaxed">
                    {isFlipped ? activeCard.backAnswer : activeCard.frontQuestion}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono-legal text-slate-500">Authority: {activeCard.authority}</span>
                  <span className="text-amber-400">{isFlipped ? 'Answer Revealed' : 'Question Prompt'}</span>
                </div>
              </div>

              {/* SM-2 Grading Controls */}
              {isFlipped && (
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-300 block text-center">
                    Rate Your Memory Recall for Spaced Scheduling:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleGradeCard('again')}
                      className="py-2.5 px-3 bg-rose-950/40 hover:bg-rose-900/50 border border-rose-800/60 rounded-xl text-xs text-rose-300 font-semibold transition-colors"
                    >
                      Again (&lt;1d)
                    </button>
                    <button
                      onClick={() => handleGradeCard('hard')}
                      className="py-2.5 px-3 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/60 rounded-xl text-xs text-amber-300 font-semibold transition-colors"
                    >
                      Hard (2d)
                    </button>
                    <button
                      onClick={() => handleGradeCard('good')}
                      className="py-2.5 px-3 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/60 rounded-xl text-xs text-blue-300 font-semibold transition-colors"
                    >
                      Good (4d)
                    </button>
                    <button
                      onClick={() => handleGradeCard('easy')}
                      className="py-2.5 px-3 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 font-semibold transition-colors"
                    >
                      Easy (7d)
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: BOOKMARKED LAW */}
      {boardTab === 'bookmarks' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bookmarked Cases */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="text-xs font-mono-legal text-amber-400 uppercase font-semibold">
                Saved Case Judgments ({bookmarkedCases.length})
              </span>
              <div className="space-y-2">
                {bookmarkedCases.length === 0 ? (
                  <p className="text-xs text-slate-500">No cases bookmarked yet.</p>
                ) : (
                  bookmarkedCases.map(c => (
                    <div key={c.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
                      <p className="font-bold text-slate-200 font-serif-legal">{c.caseName}</p>
                      <p className="font-mono-legal text-amber-400">{c.citation}</p>
                      <p className="text-slate-400 line-clamp-2">{c.ratioDecidendi}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Bookmarked Statutes */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <span className="text-xs font-mono-legal text-amber-400 uppercase font-semibold">
                Saved Statutory Provisions ({bookmarkedStatutes.length})
              </span>
              <div className="space-y-2">
                {bookmarkedStatutes.length === 0 ? (
                  <p className="text-xs text-slate-500">No statutes bookmarked yet.</p>
                ) : (
                  bookmarkedStatutes.map(s => (
                    <div key={s.id} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1">
                      <p className="font-mono-legal font-bold text-amber-400">{s.section} · {s.title}</p>
                      <p className="font-semibold text-slate-200">{s.sectionHeading}</p>
                      <p className="text-slate-400 line-clamp-2">{s.plainExplanation}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 4: XP TRANSACTION LEDGER */}
      {boardTab === 'ledger' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <h2 className="font-serif-legal text-base sm:text-lg font-bold text-slate-100">
                Immutable XP Audit Ledger
              </h2>
              <p className="text-xs text-slate-400">
                Individual credit entries preventing progress duplication.
              </p>
            </div>
            <span className="text-xs font-mono-legal text-amber-400">
              {progress.xpHistory.length} Recorded Transactions
            </span>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto no-scrollbar">
            {progress.xpHistory.map(tx => (
              <div
                key={tx.id}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div>
                  <span className="font-semibold text-slate-200 block">{tx.description}</span>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5 font-mono-legal">
                    <span>{new Date(tx.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    <span aria-hidden="true">·</span>
                    <span className="uppercase">{tx.category}</span>
                  </div>
                </div>

                <span className="font-mono-legal font-bold text-emerald-400 shrink-0">
                  +{tx.amount} XP
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Progress Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full space-y-4">
            <h3 className="font-serif-legal text-lg font-bold text-slate-100">
              Import Student Progress
            </h3>
            <p className="text-xs text-slate-400">
              Paste your exported JSON progress text below to restore your level, XP, badges, and notes.
            </p>
            <textarea
              rows={6}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste JSON here..."
              className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl font-mono-legal text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            />
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowImportModal(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 text-xs font-medium rounded-lg hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSubmit}
                className="px-4 py-2 bg-amber-500 text-slate-950 text-xs font-semibold rounded-lg hover:bg-amber-400"
              >
                Restore Progress
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
