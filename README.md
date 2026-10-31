# LEXQUEST AFRICA — THE LEGAL MIND ARENA
> *Learn the Law. Master the Cases. Defend Your Reasoning.*

**LexQuest Africa** is an interactive, mobile-first educational game and case-law simulator tailored for African law students, candidates for professional legal education (e.g., Ghana School of Law, Makola), and legal enthusiasts.

It transforms primary constitutional provisions, Acts of Parliament, landmark court judgments, and academic commentaries into structured, engaging, and progressively challenging learning quests.

---

## 1. Primary Jurisdiction: Ghana 🇬🇭
The MVP is fully grounded in the legal system of the **Republic of Ghana**, featuring authentic, verified authorities:
- **Constitutional Law**: The 1992 Constitution of Ghana (Articles 1(2), 2(1), 12–30, 60, 125, 130).
- **Contract Law**: The Contracts Act, 1960 (Act 25) — specifically Ghana's revolutionary consideration reforms (Sections 8 & 9) and privity reforms (Section 5).
- **Criminal Law**: The Criminal Offences Act, 1960 (Act 29) — statutory intent (Section 11), justifiable force in self-defence (Section 37), murder vs. manslaughter (Sections 46 & 50).
- **Land & Customary Law**: The Land Act, 2020 (Act 1036) — fiduciary stool land administration (Section 12), allodial title (Section 9), and spousal protection in matrimonial land conveyancing (Section 38).
- **Law of Evidence**: The Evidence Act, 1975 (NRCD 323) — civil preponderance of probabilities (Section 12) vs. criminal proof beyond reasonable doubt (Section 14).
- **Law of Torts**: The common-law duty of care (Donoghue v Stevenson) absorbed into Ghanaian common law under Article 11(1)(e).

---

## 2. Core Game Modes & Modules
1. **The Jurisdictional Territories**:
   Explore 6 territories (The Constitutional Kingdom, The Contract City, The Criminal Justice Realm, The Torts Territory, The Land & Customary District, The Supreme Arena & Ethics Hall) with progressive missions and mastery tracking.
2. **Case Detective (Courtroom Investigations)**:
   6-stage interactive investigations of real judgments:
   - Stage 1: Discover Material Facts & Evidence Clues
   - Stage 2: Formulate Core Legal Issues
   - Stage 3: Find Applicable Statutes & Distinguish Precedents
   - Stage 4: Build Competing Submissions (Plaintiff vs. Defendant)
   - Stage 5: Deliver Reasoned Judgment from the Bench
   - Stage 6: Bench Verdict Reveal (Actual Supreme Court decision, ratio decidendi, obiter dicta, and quotes by Sowah JSC & Date-Bah JSC with GhaLII verification links)
3. **Supreme Court Moot Court Arena**:
   Simulated appellate court challenge before a 3-judge panel (Chief Justice Gertrude Torkornoo, Justice Prof. Henrietta Mensa-Bonsu, Justice Emmanuel Yonny Kulendi). Counsel argues for Appellant or Respondent, addresses direct judicial interruptions, and receives a bench score out of 100.
4. **IRAC Legal Reasoning Engine**:
   Realistic Ghanaian problem scenarios evaluated with partial credit across Issue, Rule, Application, and Conclusion with faculty model answers.
5. **Statute Hunter Codex**:
   Instant searchable repository of primary legislation with verbatim snippets, plain-language explanations, practical examples, and bookmarking.
6. **Student Knowledge Board**:
   Personal dashboard displaying Level, Judicial Rank & Robing Title, Streak, SM-2 Spaced Repetition flashcards, immutable XP Transaction Audit Ledger, and JSON export/import.
7. **Reviewer & Educator Hub**:
   Verification stamps, public repository links, and faculty review submission workflow.

---

## 3. Technology Stack & Architecture
- **Framework**: React 19 SPA, TypeScript, Vite.
- **Styling**: Tailwind CSS v4 with characterful typography (`Cinzel` for dignified legal titles, `Plus Jakarta Sans` for body, `JetBrains Mono` for tabular metrics and citations).
- **Audio Synthesis**: Pure Web Audio API (`SoundService`), generating realistic gavel strikes, success chimes, failure chords, and fanfare offline without external MP3 files.
- **Persistence**: Local-first `localStorage` architecture with transaction-based XP ledger and JSON portability.
- **Visuals**: Clean, anti-slop design adhering strictly to WCAG AA contrast, 3-zone Top Bar Contract, and zero decorative pills on metadata.

---

## 4. Academic Integrity & Legal Safety Policy
- **No Fabricated Citations**: Every case name, law report citation, and statutory section is verified against official records.
- **Educational Disclaimer**: LexQuest Africa is strictly an academic learning tool. It does not provide legal advice or establish an attorney-client relationship.
- **Open-Access Sources**: All content references free public legal repositories operating under the Free Access to Law Movement (FALM), principally GhaLII, the Judicial Service of Ghana, and the Parliament of Ghana.

---

## 5. Deployment
- The app builds with `npm run build` and runs development via `npm run dev`.
- Static output can be deployed to any free static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages) without server dependencies.
