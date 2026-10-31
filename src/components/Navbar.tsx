import React from 'react';
import { Volume2, VolumeX, Flame, Scale, BookOpen, Award } from 'lucide-react';
import { UserProgress, JurisdictionCode } from '../types';
import { soundService } from '../services/soundService';
import { getRankTitle } from '../services/storageService';
import { JURISDICTIONS } from '../data/legalSources';

interface NavbarProps {
  progress: UserProgress;
  onSoundToggle: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectJurisdiction: (code: JurisdictionCode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  onSoundToggle,
  activeTab,
  setActiveTab,
  onSelectJurisdiction
}) => {
  const currentJurisdiction = JURISDICTIONS.find(j => j.code === progress.selectedJurisdiction) || JURISDICTIONS[0];
  const rank = getRankTitle(progress.level);

  const handleNavClick = (tab: string) => {
    soundService.playClick();
    setActiveTab(tab);
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/95 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8 h-16">
        
        {/* Zone 1: Single text element wordmark with legal scale symbol */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('territories')}
            className="flex items-center gap-2 text-left group transition-transform focus:outline-none"
            aria-label="LexQuest Africa Home"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400/60 transition-colors">
              <Scale className="w-5 h-5" />
            </div>
            <span className="font-serif-legal font-bold text-lg sm:text-xl tracking-wider text-slate-100 whitespace-nowrap">
              LEXQUEST <span className="text-amber-400">AFRICA</span>
            </span>
          </button>

          {/* Clean unboxed jurisdiction badge */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-400 border-l border-slate-800 pl-3">
            <span>{currentJurisdiction.flag}</span>
            <span className="font-medium text-slate-300">{currentJurisdiction.name} Law</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-amber-400/90 font-mono-legal text-[11px]">Primary</span>
          </div>
        </div>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNavClick('territories')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'territories' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Territories
          </button>
          <button
            onClick={() => handleNavClick('cases')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'cases' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Case Detective
          </button>
          <button
            onClick={() => handleNavClick('moot')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'moot' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Moot Court
          </button>
          <button
            onClick={() => handleNavClick('scenarios')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'scenarios' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            IRAC Scenarios
          </button>
          <button
            onClick={() => handleNavClick('statutes')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'statutes' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Statute Hunter
          </button>
          <button
            onClick={() => handleNavClick('board')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'board' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Knowledge Board
          </button>
          <button
            onClick={() => handleNavClick('reviewer')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${activeTab === 'reviewer' ? 'text-amber-400 font-semibold border-b-2 border-amber-400' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Sources & Verification
          </button>
        </nav>

        {/* Zone 3: 1 primary action group / User XP & Sound toggle */}
        <div className="flex items-center gap-3 shrink-0">
          
          {/* Sound Synthesizer toggle */}
          <button
            onClick={onSoundToggle}
            className="p-2 text-slate-400 hover:text-slate-100 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors focus:outline-none"
            title={progress.soundEnabled ? 'Mute Legal Sound Effects' : 'Enable Legal Sound Effects'}
            aria-label="Toggle Sound"
          >
            {progress.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-amber-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Daily Streak Indicator */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/90 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500/20" />
            <span className="font-mono-legal text-amber-400 font-semibold">{progress.streakDays}</span>
            <span className="text-slate-500 text-[11px]">streak</span>
          </div>

          {/* XP & Level Badge */}
          <button
            onClick={() => handleNavClick('board')}
            className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-600/20 to-amber-700/20 hover:from-amber-600/30 hover:to-amber-700/30 border border-amber-500/40 rounded-lg transition-colors text-xs font-medium text-amber-200"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-mono-legal tabular-nums font-bold text-amber-300">{progress.totalXp} XP</span>
            <span className="hidden sm:inline text-slate-400 font-mono-legal">· Lvl {progress.level}</span>
          </button>
        </div>

      </div>

      {/* Mobile sub-navigation bar */}
      <div className="md:hidden flex items-center gap-2 overflow-x-auto px-4 py-2 border-t border-slate-900 bg-slate-950 text-xs no-scrollbar">
        <button
          onClick={() => handleNavClick('territories')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'territories' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          Territories
        </button>
        <button
          onClick={() => handleNavClick('cases')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'cases' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          Cases
        </button>
        <button
          onClick={() => handleNavClick('moot')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'moot' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          Moot Court
        </button>
        <button
          onClick={() => handleNavClick('scenarios')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'scenarios' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          IRAC
        </button>
        <button
          onClick={() => handleNavClick('statutes')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'statutes' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          Statutes
        </button>
        <button
          onClick={() => handleNavClick('board')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'board' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          Dashboard
        </button>
        <button
          onClick={() => handleNavClick('reviewer')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'reviewer' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
        >
          Sources
        </button>
      </div>
    </header>
  );
};
