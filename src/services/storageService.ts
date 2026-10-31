import { UserProgress, XPTransaction, Badge, Flashcard, NoteItem, SubjectId, DifficultyLevel, JurisdictionCode } from '../types';

const STORAGE_KEY = 'lexquest_africa_progress_v1';

export const INITIAL_BADGES: Badge[] = [
  { id: 'badge-first-case', title: 'First Case Solved', description: 'Complete your first interactive case investigation.', category: 'general', icon: 'gavel' },
  { id: 'badge-const-guardian', title: 'Constitutional Guardian', description: 'Demonstrate proficiency in Constitutional Supremacy & Human Rights.', category: 'constitutional', icon: 'shield-check' },
  { id: 'badge-contract-detective', title: 'Contract Detective', description: 'Master the Ghanaian Contracts Act, 1960 (Act 25) and consideration.', category: 'contracts', icon: 'file-text' },
  { id: 'badge-criminal-inv', title: 'Criminal Law Investigator', description: 'Correctly apply mens rea and self-defence under Act 29.', category: 'criminal', icon: 'alert-triangle' },
  { id: 'badge-allodial-master', title: 'Allodial Master', description: 'Master Land Act 2020 (Act 1036) and customary land titles.', category: 'land_customary', icon: 'landmark' },
  { id: 'badge-precedent-eagle', title: 'The Legal Eagle', description: 'Distinguish binding ratio decidendi from obiter dicta.', category: 'legal_system', icon: 'award' },
  { id: 'badge-moot-champion', title: 'Moot Court Champion', description: 'Successfully argue before the Supreme Court bench.', category: 'general', icon: 'scale' },
  { id: 'badge-streak-7', title: 'Seven-Day Scholar', description: 'Maintain a 7-day daily legal reasoning streak.', category: 'general', icon: 'flame' }
];

export const INITIAL_FLASHCARDS: Flashcard[] = [
  {
    id: 'fc-1',
    termOrPrinciple: 'Living Constitution Doctrine',
    jurisdiction: 'Ghana',
    subject: 'constitutional',
    authority: 'Tuffuor v Attorney-General [1980] GLR 637',
    frontQuestion: 'What does the "Living Constitution" doctrine signify in Ghanaian jurisprudence?',
    backAnswer: 'A constitution is not an ordinary statute with mechanical literalism, but an organic document capable of growth and development to be construed broadly and purposively (Sowah JSC).',
    repetitionInterval: 1,
    repetitionCount: 0,
    nextReviewDate: new Date().toISOString(),
    easeFactor: 2.5
  },
  {
    id: 'fc-2',
    termOrPrinciple: 'Past Consideration in Ghana',
    jurisdiction: 'Ghana',
    subject: 'contracts',
    authority: 'Contracts Act, 1960 (Act 25), Section 8(2)',
    frontQuestion: 'Is past consideration valid under Ghanaian contract law?',
    backAnswer: 'Yes! Unlike English common law, Section 8(2) of Act 25 makes past consideration valid if the act or service was performed at the prior request of the promisor.',
    repetitionInterval: 1,
    repetitionCount: 0,
    nextReviewDate: new Date().toISOString(),
    easeFactor: 2.5
  },
  {
    id: 'fc-3',
    termOrPrinciple: 'Essential Elements of Customary Gift',
    jurisdiction: 'Ghana',
    subject: 'land_customary',
    authority: 'Fosua v Dufie [2009] SCGLR 310',
    frontQuestion: 'What are the 4 prerequisites for an irrevocable customary gift of land in Ghana?',
    backAnswer: '(1) Intention of donor; (2) Disposing power over the property; (3) Acceptance marked by Aseda before witnesses; (4) Delivery of possession.',
    repetitionInterval: 1,
    repetitionCount: 0,
    nextReviewDate: new Date().toISOString(),
    easeFactor: 2.5
  },
  {
    id: 'fc-4',
    termOrPrinciple: 'Matrimonial Land Conveyance Rule',
    jurisdiction: 'Ghana',
    subject: 'land_customary',
    authority: 'Land Act, 2020 (Act 1036), Section 38',
    frontQuestion: 'What happens if a spouse sells matrimonial land without the other spouse’s written consent?',
    backAnswer: 'Under Section 38(3) and (4) of Act 1036, matrimonial property is presumed jointly owned and any disposition or encumbrance without written spousal consent is VOID.',
    repetitionInterval: 1,
    repetitionCount: 0,
    nextReviewDate: new Date().toISOString(),
    easeFactor: 2.5
  }
];

export function getInitialProgress(): UserProgress {
  return {
    userId: 'student-' + Math.random().toString(36).substring(2, 9),
    userName: 'Kofi Mensah',
    institution: 'University of Ghana School of Law',
    academicYear: 'LLB Year 2',
    selectedJurisdiction: 'ghana',
    selectedDifficulty: 'intermediate',
    level: 1,
    totalXp: 0,
    gavels: 50,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    soundEnabled: true,
    unlockedTerritories: ['constitutional', 'contracts', 'criminal', 'torts', 'land_customary', 'legal_system'],
    completedMissions: [],
    bookmarkedCaseIds: ['case-tuffuor-ag', 'case-fosua-dufie'],
    savedStatuteIds: ['statute-const-art1-2', 'statute-act25-sec8'],
    subjectMastery: {
      constitutional: 15,
      contracts: 10,
      criminal: 10,
      torts: 5,
      land_customary: 10,
      legal_system: 20,
      evidence: 5,
      administrative: 5
    },
    xpHistory: [
      {
        id: 'tx-welcome',
        timestamp: new Date().toISOString(),
        amount: 25,
        category: 'streak_bonus',
        description: 'Welcome to LexQuest Africa: The Legal Mind Arena'
      }
    ],
    badges: INITIAL_BADGES,
    flashcards: INITIAL_FLASHCARDS,
    notes: [
      {
        id: 'note-1',
        title: 'Rule of Law & Statutory Hierarchy',
        subject: 'constitutional',
        content: 'Article 1(2) Supremacy > Acts of Parliament > Legislative Instruments > Existing Law > Customary Law (subject to Constitution).',
        createdAt: new Date().toISOString(),
        tags: ['Hierarchy', 'Art 1(2)', 'Sowah JSC']
      }
    ]
  };
}

export const StorageService = {
  loadProgress(): UserProgress {
    if (typeof window === 'undefined') return getInitialProgress();
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: UserProgress = JSON.parse(saved);
        // Check daily streak
        const today = new Date().toISOString().split('T')[0];
        if (parsed.lastActiveDate !== today) {
          const lastDate = new Date(parsed.lastActiveDate);
          const currentDate = new Date(today);
          const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            parsed.streakDays += 1;
          } else if (diffDays > 1) {
            parsed.streakDays = 1;
          }
          parsed.lastActiveDate = today;
          this.saveProgress(parsed);
        }
        return parsed;
      }
    } catch {
      // Fallback
    }
    const initial = getInitialProgress();
    initial.totalXp = 25;
    this.saveProgress(initial);
    return initial;
  },

  saveProgress(progress: UserProgress): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Storage error
    }
  },

  addXP(progress: UserProgress, amount: number, category: XPTransaction['category'], description: string, referenceId?: string): { updatedProgress: UserProgress; didLevelUp: boolean; unlockedBadgeTitle?: string } {
    // Prevent duplicate credit for identical transaction reference in the same session
    if (referenceId && progress.xpHistory.some(tx => tx.referenceId === referenceId)) {
      return { updatedProgress: progress, didLevelUp: false };
    }

    const newTx: XPTransaction = {
      id: 'tx-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toISOString(),
      amount,
      category,
      description,
      referenceId
    };

    const newTotalXp = progress.totalXp + amount;
    const oldLevel = progress.level;
    // Level formula: Level 1 = 0-100 XP, Level 2 = 101-250 XP, Level 3 = 251-500 XP, etc.
    const newLevel = Math.max(1, Math.floor(Math.sqrt(newTotalXp / 50)) + 1);
    const didLevelUp = newLevel > oldLevel;

    // Check badges
    let unlockedBadgeTitle: string | undefined;
    const updatedBadges = progress.badges.map(b => {
      if (!b.unlockedAt) {
        if (b.id === 'badge-first-case' && category === 'investigation') {
          unlockedBadgeTitle = b.title;
          return { ...b, unlockedAt: new Date().toISOString() };
        }
        if (b.id === 'badge-moot-champion' && category === 'moot_court') {
          unlockedBadgeTitle = b.title;
          return { ...b, unlockedAt: new Date().toISOString() };
        }
        if (b.id === 'badge-streak-7' && progress.streakDays >= 7) {
          unlockedBadgeTitle = b.title;
          return { ...b, unlockedAt: new Date().toISOString() };
        }
      }
      return b;
    });

    const updated: UserProgress = {
      ...progress,
      totalXp: newTotalXp,
      level: newLevel,
      gavels: progress.gavels + Math.floor(amount / 5),
      xpHistory: [newTx, ...progress.xpHistory].slice(0, 100),
      badges: updatedBadges
    };

    this.saveProgress(updated);
    return { updatedProgress: updated, didLevelUp, unlockedBadgeTitle };
  },

  updateSubjectMastery(progress: UserProgress, subject: SubjectId, delta: number): UserProgress {
    const current = progress.subjectMastery[subject] || 0;
    const updatedScore = Math.min(100, Math.max(0, current + delta));
    const updated: UserProgress = {
      ...progress,
      subjectMastery: {
        ...progress.subjectMastery,
        [subject]: updatedScore
      }
    };
    this.saveProgress(updated);
    return updated;
  },

  updateFlashcardReview(progress: UserProgress, cardId: string, grade: 'again' | 'hard' | 'good' | 'easy'): UserProgress {
    const updatedCards = progress.flashcards.map(card => {
      if (card.id === cardId) {
        let interval = card.repetitionInterval;
        let count = card.repetitionCount;
        let ease = card.easeFactor;

        if (grade === 'again') {
          interval = 1;
          count = 0;
          ease = Math.max(1.3, ease - 0.2);
        } else if (grade === 'hard') {
          interval = Math.max(1, Math.round(interval * 1.2));
          count += 1;
          ease = Math.max(1.3, ease - 0.15);
        } else if (grade === 'good') {
          interval = count === 0 ? 1 : count === 1 ? 4 : Math.round(interval * ease);
          count += 1;
        } else if (grade === 'easy') {
          interval = count === 0 ? 3 : Math.round(interval * ease * 1.3);
          count += 1;
          ease += 0.15;
        }

        const nextDate = new Date();
        nextDate.setDate(nextDate.getDate() + interval);

        return {
          ...card,
          repetitionInterval: interval,
          repetitionCount: count,
          easeFactor: ease,
          nextReviewDate: nextDate.toISOString()
        };
      }
      return card;
    });

    const updated = { ...progress, flashcards: updatedCards };
    this.saveProgress(updated);
    return updated;
  },

  exportProgressJSON(progress: UserProgress): string {
    return JSON.stringify(progress, null, 2);
  },

  importProgressJSON(jsonString: string): UserProgress | null {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed.totalXp === 'number' && parsed.userId) {
        this.saveProgress(parsed);
        return parsed;
      }
    } catch {
      return null;
    }
    return null;
  }
};

export function getRankTitle(level: number): { title: string; robing: string } {
  if (level <= 1) return { title: 'Legal Novice', robing: 'Student Robes' };
  if (level === 2) return { title: 'Legal Apprentice', robing: 'Junior Scholar Gown' };
  if (level === 3) return { title: 'Pupil Barrister', robing: 'Pupil Wig & Robes' };
  if (level === 4) return { title: 'Advocate & Solicitor', robing: 'Practicing Barrister Silk' };
  if (level === 5) return { title: 'Senior State Attorney', robing: 'State Attorney Robes' };
  if (level === 6) return { title: 'Justice of the High Court', robing: 'Red Judicial Ermine' };
  if (level === 7) return { title: 'Justice of the Court of Appeal', robing: 'Appellate Purple Silk' };
  return { title: 'Justice of the Supreme Court', robing: 'Supreme Judicial Mantle of Ghana' };
}
