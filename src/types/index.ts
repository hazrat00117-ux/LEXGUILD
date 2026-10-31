export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type JurisdictionCode = 'ghana' | 'nigeria' | 'kenya' | 'zambia' | 'malawi' | 'tanzania' | 'gambia' | 'uganda';

export interface Jurisdiction {
  code: JurisdictionCode;
  name: string;
  flag: string;
  capital: string;
  supremeCourtName: string;
  constitutionYear: string;
  legalTradition: string;
  primarySourcesRepo: string;
  repoUrl: string;
  isPrimary: boolean;
  status: 'active' | 'comparative_pack';
}

export type SubjectId = 
  | 'constitutional'
  | 'contracts'
  | 'criminal'
  | 'torts'
  | 'land_customary'
  | 'legal_system'
  | 'evidence'
  | 'administrative';

export interface LegalSubject {
  id: SubjectId;
  name: string;
  territoryName: string;
  description: string;
  tagline: string;
  color: string;
  accentBg: string;
  totalMissions: number;
}

export interface CaseObject {
  id: string;
  caseName: string;
  citation: string;
  court: string;
  country: string;
  year: number;
  judges?: string[];
  subject: SubjectId;
  difficulty: DifficultyLevel;
  materialFacts: string;
  proceduralHistory: string;
  legalIssues: string[];
  plaintiffArguments: string;
  defendantArguments: string;
  relevantLaw: string[];
  holding: string;
  ratioDecidendi: string;
  obiterDicta?: string;
  courtReasoning: string;
  remedies: string;
  importance: string;
  subsequentTreatment?: string;
  sourceName: string;
  sourceUrl: string;
  verifiedStatus: 'Verified Authority' | 'Under Academic Review';
  verificationDate: string;
  verificationNotes: string;
}

export interface StatuteObject {
  id: string;
  title: string;
  actNumber: string;
  jurisdiction: string;
  enactmentYear: number;
  currentStatus: 'In Force' | 'Amended' | 'Repealed';
  section: string;
  sectionHeading: string;
  verbatimSnippet: string;
  plainExplanation: string;
  applicationExamples: string[];
  relatedCases: string[];
  sourceUrl: string;
  lastCheckedDate: string;
  subject: SubjectId;
}

export interface LegalConcept {
  id: string;
  term: string;
  subject: SubjectId;
  difficulty: DifficultyLevel;
  simpleDefinition: string;
  formalLegalDefinition: string;
  beginnerExplanation: string;
  advancedExplanation: string;
  realWorldExample: string;
  commonMisconceptions: string[];
  relatedCases: string[];
  relatedStatutes: string[];
}

export interface Question {
  id: string;
  subject: SubjectId;
  difficulty: DifficultyLevel;
  jurisdiction: JurisdictionCode;
  questionText: string;
  contextScenario?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  statutoryReference?: string;
  caseReference?: string;
  conceptTested: string;
  xpReward: number;
}

export interface IRACScenario {
  id: string;
  title: string;
  subject: SubjectId;
  difficulty: DifficultyLevel;
  jurisdiction: JurisdictionCode;
  location: string;
  facts: string;
  iracBreakdown: {
    issue: {
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
    rule: {
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
      supportingAuthority: string;
    };
    application: {
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
    conclusion: {
      prompt: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    };
  };
  modelAnswer: string;
  keyTakeaway: string;
  authoritiesCited: string[];
  sourceUrl: string;
  verifiedStatus: 'Verified Authority' | 'Under Academic Review';
}

export interface CaseInvestigationStage {
  stageNumber: number;
  stageName: string;
  instruction: string;
}

export interface CaseInvestigation {
  id: string;
  caseId: string;
  title: string;
  subject: SubjectId;
  jurisdiction: JurisdictionCode;
  realCaseName: string;
  citation: string;
  factsNarrative: string[];
  stages: {
    discoverFacts: {
      clues: { label: string; text: string }[];
      comprehensionQuestion: {
        question: string;
        options: string[];
        correctIndex: number;
        feedback: string;
      };
    };
    identifyProblem: {
      legalIssuePrompt: string;
      issueOptions: string[];
      correctIndex: number;
      explanation: string;
    };
    findTheLaw: {
      statuteAndPrecedentCandidates: {
        citation: string;
        summary: string;
        isApplicable: boolean;
        reasoning: string;
      }[];
    };
    buildArguments: {
      plaintiffTaskPrompt: string;
      plaintiffArguments: { text: string; strength: 'Compelling' | 'Weak' | 'Irrelevant'; explanation: string }[];
      defendantTaskPrompt: string;
      defendantArguments: { text: string; strength: 'Compelling' | 'Weak' | 'Irrelevant'; explanation: string }[];
    };
    deliverJudgment: {
      question: string;
      options: {
        ruling: string;
        reasoning: string;
        isRealBenchVerdict: boolean;
        feedback: string;
      }[];
    };
    benchVerdictReveal: {
      actualCourtDecision: string;
      ratioDecidendi: string;
      obiterDicta?: string;
      benchQuotes: string[];
      academicAnalysis: string;
      originalSourceUrl: string;
    };
  };
}

export interface MootCourtSubmission {
  id: string;
  title: string;
  argumentText: string;
  authorityCited: string;
  judicialIntervention: {
    judgeName: string;
    question: string;
    responses: {
      text: string;
      score: number; // 0 to 25
      benchReaction: string;
    }[];
  };
}

export interface MootCourtCase {
  id: string;
  title: string;
  court: string;
  bench: { name: string; title: string; avatarTone: string }[];
  proceduralStance: string;
  agreedFacts: string[];
  appellantCase: MootCourtSubmission[];
  respondentCase: MootCourtSubmission[];
  verdictCriteria: {
    jurisdictionGrip: string;
    statutoryApplication: string;
    precedentDistinction: string;
  };
}

export interface Flashcard {
  id: string;
  termOrPrinciple: string;
  jurisdiction: string;
  subject: SubjectId;
  authority: string;
  frontQuestion: string;
  backAnswer: string;
  repetitionInterval: number; // days
  repetitionCount: number;
  nextReviewDate: string; // ISO date string
  easeFactor: number;
}

export interface NoteItem {
  id: string;
  title: string;
  subject: SubjectId;
  content: string;
  createdAt: string;
  tags: string[];
}

export interface XPTransaction {
  id: string;
  timestamp: string;
  amount: number;
  category: 'quiz' | 'investigation' | 'moot_court' | 'irac_scenario' | 'quickfire' | 'statute_hunter' | 'streak_bonus' | 'badge_bonus';
  description: string;
  referenceId?: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  category: SubjectId | 'general';
  icon: string;
  unlockedAt?: string;
}

export interface UserProgress {
  userId: string;
  userName: string;
  institution: string;
  academicYear: string;
  selectedJurisdiction: JurisdictionCode;
  selectedDifficulty: DifficultyLevel;
  level: number;
  totalXp: number;
  gavels: number; // currency for cosmetic/lore unblocks
  streakDays: number;
  lastActiveDate: string;
  soundEnabled: boolean;
  unlockedTerritories: SubjectId[];
  completedMissions: string[];
  bookmarkedCaseIds: string[];
  savedStatuteIds: string[];
  subjectMastery: Record<SubjectId, number>; // 0 to 100 percentage
  xpHistory: XPTransaction[];
  badges: Badge[];
  flashcards: Flashcard[];
  notes: NoteItem[];
}
