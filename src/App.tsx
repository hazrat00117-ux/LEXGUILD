import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TerritoryMap } from './components/TerritoryMap';
import { CaseDetectiveView } from './components/CaseDetectiveView';
import { MootCourtView } from './components/MootCourtView';
import { ScenarioIRACView } from './components/ScenarioIRACView';
import { StatuteHunterView } from './components/StatuteHunterView';
import { KnowledgeBoardView } from './components/KnowledgeBoardView';
import { ReviewerHubView } from './components/ReviewerHubView';
import { OnboardingModal } from './components/OnboardingModal';
import { UserProgress, Question, CaseInvestigation, IRACScenario, JurisdictionCode } from './types';
import { StorageService, getRankTitle } from './services/storageService';
import { soundService } from './services/soundService';
import confetti from 'canvas-confetti';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => StorageService.loadProgress());
  const [activeTab, setActiveTab] = useState<string>('territories');
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [levelUpMessage, setLevelUpMessage] = useState<string | null>(null);

  // Sync sound service on mount
  useEffect(() => {
    soundService.setSoundEnabled(progress.soundEnabled);
  }, [progress.soundEnabled]);

  const handleSoundToggle = () => {
    const updated = !progress.soundEnabled;
    soundService.setSoundEnabled(updated);
    if (updated) soundService.playClick();
    const newProgress = { ...progress, soundEnabled: updated };
    setProgress(newProgress);
    StorageService.saveProgress(newProgress);
  };

  const triggerLevelUpAlert = (newLevel: number) => {
    const rank = getRankTitle(newLevel);
    setLevelUpMessage(`Judicial Promotion! You have attained the rank of ${rank.title} (Level ${newLevel})!`);
    soundService.playLevelUp();
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.5 }
    });
    setTimeout(() => setLevelUpMessage(null), 5000);
  };

  // Handler when a question is answered in Territories
  const handleQuestionCompleted = (question: Question, isCorrect: boolean) => {
    if (isCorrect) {
      const { updatedProgress, didLevelUp, unlockedBadgeTitle } = StorageService.addXP(
        progress,
        question.xpReward,
        'quiz',
        `Correct Reasoning: ${question.conceptTested}`,
        question.id
      );

      const withMastery = StorageService.updateSubjectMastery(updatedProgress, question.subject, 10);
      const withCompleted = {
        ...withMastery,
        completedMissions: Array.from(new Set([...withMastery.completedMissions, question.id]))
      };
      StorageService.saveProgress(withCompleted);
      setProgress(withCompleted);

      if (didLevelUp) triggerLevelUpAlert(withCompleted.level);
    }
  };

  // Handler when a Case Detective investigation finishes Stage 6
  const handleInvestigationComplete = (investigation: CaseInvestigation) => {
    const { updatedProgress, didLevelUp } = StorageService.addXP(
      progress,
      50,
      'investigation',
      `Investigated Judgment: ${investigation.realCaseName} (${investigation.citation})`,
      investigation.id
    );

    const withMastery = StorageService.updateSubjectMastery(updatedProgress, investigation.subject, 20);
    StorageService.saveProgress(withMastery);
    setProgress(withMastery);

    if (didLevelUp) triggerLevelUpAlert(withMastery.level);
  };

  // Handler when Moot Court simulation concludes
  const handleMootCourtFinished = (score: number, side: 'appellant' | 'respondent') => {
    const xpReward = Math.max(25, score);
    const { updatedProgress, didLevelUp } = StorageService.addXP(
      progress,
      xpReward,
      'moot_court',
      `Supreme Court Moot Advocacy as ${side === 'appellant' ? 'Lead Appellant' : 'State Respondent'} (Score: ${score}/100)`,
      'moot-curfew-' + Date.now()
    );

    const withMastery = StorageService.updateSubjectMastery(updatedProgress, 'constitutional', 25);
    StorageService.saveProgress(withMastery);
    setProgress(withMastery);

    if (didLevelUp) triggerLevelUpAlert(withMastery.level);
  };

  // Handler when IRAC Scenario finishes
  const handleScenarioCompleted = (scenario: IRACScenario, score: number) => {
    const { updatedProgress, didLevelUp } = StorageService.addXP(
      progress,
      score,
      'irac_scenario',
      `IRAC Legal Reasoning: ${scenario.title}`,
      scenario.id
    );

    const withMastery = StorageService.updateSubjectMastery(updatedProgress, scenario.subject, 15);
    StorageService.saveProgress(withMastery);
    setProgress(withMastery);

    if (didLevelUp) triggerLevelUpAlert(withMastery.level);
  };

  // Toggle Bookmark for Statute
  const handleToggleStatuteBookmark = (statuteId: string) => {
    const current = progress.savedStatuteIds || [];
    const updated = current.includes(statuteId)
      ? current.filter(id => id !== statuteId)
      : [...current, statuteId];
    
    const newProgress = { ...progress, savedStatuteIds: updated };
    StorageService.saveProgress(newProgress);
    setProgress(newProgress);
  };

  // Flashcard SM-2 review
  const handleUpdateFlashcard = (cardId: string, grade: 'again' | 'hard' | 'good' | 'easy') => {
    const updated = StorageService.updateFlashcardReview(progress, cardId, grade);
    const withXP = StorageService.addXP(updated, 5, 'quiz', 'Active Recall Flashcard Review');
    setProgress(withXP.updatedProgress);
  };

  // Import JSON progress
  const handleImportProgress = (json: string) => {
    const imported = StorageService.importProgressJSON(json);
    if (imported) {
      setProgress(imported);
      soundService.playLevelUp();
    }
  };

  // Select Jurisdiction
  const handleSelectJurisdiction = (code: JurisdictionCode) => {
    soundService.playClick();
    const updated = { ...progress, selectedJurisdiction: code };
    StorageService.saveProgress(updated);
    setProgress(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans-body">
      
      {/* Top Bar Contract Navbar */}
      <Navbar
        progress={progress}
        onSoundToggle={handleSoundToggle}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSelectJurisdiction={handleSelectJurisdiction}
      />

      {/* Floating Promotion Alert Toast */}
      {levelUpMessage && (
        <div className="fixed top-20 right-4 z-50 p-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold shadow-2xl border border-amber-400 text-xs sm:text-sm animate-in slide-in-from-top-4 duration-300 flex items-center gap-3">
          <span>{levelUpMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'territories' && (
          <TerritoryMap
            progress={progress}
            onQuestionCompleted={handleQuestionCompleted}
            onNavigateToCases={() => setActiveTab('cases')}
            onNavigateToMoot={() => setActiveTab('moot')}
            onNavigateToScenarios={() => setActiveTab('scenarios')}
          />
        )}

        {activeTab === 'cases' && (
          <CaseDetectiveView
            progress={progress}
            onInvestigationComplete={handleInvestigationComplete}
          />
        )}

        {activeTab === 'moot' && (
          <MootCourtView
            progress={progress}
            onMootCourtFinished={handleMootCourtFinished}
          />
        )}

        {activeTab === 'scenarios' && (
          <ScenarioIRACView
            progress={progress}
            onScenarioCompleted={handleScenarioCompleted}
          />
        )}

        {activeTab === 'statutes' && (
          <StatuteHunterView
            progress={progress}
            onToggleBookmark={handleToggleStatuteBookmark}
          />
        )}

        {activeTab === 'board' && (
          <KnowledgeBoardView
            progress={progress}
            onUpdateFlashcard={handleUpdateFlashcard}
            onImportProgress={handleImportProgress}
          />
        )}

        {activeTab === 'reviewer' && (
          <ReviewerHubView />
        )}
      </main>

      {/* Onboarding Induction Modal */}
      {showOnboarding && (
        <OnboardingModal
          progress={progress}
          onComplete={(updated) => {
            const merged = { ...progress, ...updated };
            StorageService.saveProgress(merged);
            setProgress(merged);
          }}
          onClose={() => setShowOnboarding(false)}
        />
      )}

      {/* Clean Anti-Slop Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 text-xs text-slate-500 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif-legal font-semibold text-slate-400">LEXQUEST AFRICA</span>
            <span aria-hidden="true">·</span>
            <span>The Legal Mind Arena</span>
            <span aria-hidden="true">·</span>
            <span>Ghana Primary Jurisdiction</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button
              onClick={() => setShowOnboarding(true)}
              className="hover:text-amber-400 transition-colors"
            >
              Update Student Profile
            </button>
            <button
              onClick={() => setActiveTab('reviewer')}
              className="hover:text-amber-400 transition-colors"
            >
              Sources & Legal Disclaimer
            </button>
            <a
              href="https://ghalii.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              GhaLII Partner Portal
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
