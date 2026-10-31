import { LegalConcept } from '../types';

export const LEGAL_CONCEPTS: LegalConcept[] = [
  {
    id: 'concept-irac',
    term: 'IRAC Legal Reasoning Method',
    subject: 'legal_system',
    difficulty: 'beginner',
    simpleDefinition: 'A 4-step formula used by lawyers and judges to solve any legal dispute: Issue, Rule, Application, Conclusion.',
    formalLegalDefinition: 'A structured legal analytical heuristic consisting of Issue identification (I), Rule articulation (R), factual Application (A), and definitive Conclusion (C).',
    beginnerExplanation: 'Whenever you face a problem in law school or court, don\'t just jump to who should win. First state what question needs answering (Issue). Next state the legal rule or statute that governs that question (Rule). Then apply the rule specifically to the people and facts in the story (Application). Finally, give your reasoned verdict (Conclusion).',
    advancedExplanation: 'In appellate advocacy, variations include CREAC (Conclusion, Rule, Explanation, Application, Counterargument) or ILAC (Issue, Law, Application, Conclusion). Mastery requires recognizing nuanced sub-issues and addressing counter-arguments under the Application prong.',
    realWorldExample: 'A customer buys a bag of cement in Kumasi that turns out to be contaminated. (I) Did the vendor breach the implied condition of merchantable quality? (R) Sale of Goods Act, 1962 (Act 137) Section 13. (A) The cement had hardened due to rain exposure before delivery. (C) Vendor breached the condition and owes damages.',
    commonMisconceptions: [
      'Assuming the conclusion is the most important part (the reasoning in Application carries the highest grade).',
      'Stating moral feelings rather than citing a statutory section or judicial precedent.'
    ],
    relatedCases: ['Tuffuor v Attorney-General [1980] GLR 637'],
    relatedStatutes: ['Constitution 1992, Art 125']
  },
  {
    id: 'concept-consideration',
    term: 'Consideration & The Ghanaian Reform (Act 25)',
    subject: 'contracts',
    difficulty: 'beginner',
    simpleDefinition: 'The price or benefit given by one person in exchange for another person\'s promise in a contract.',
    formalLegalDefinition: 'Some right, interest, profit or benefit accruing to one party, or some forbearance, detriment, loss or responsibility given, suffered or undertaken by the other (Currie v Misa). In Ghana, modified by the Contracts Act, 1960 (Act 25).',
    beginnerExplanation: 'Think of a contract as a two-way street. If Kwame promises to give Ama a car next week for free, that is a gift, not a contract, because Ama gave nothing in return. But if Ama pays GH₵1, or promises to paint Kwame’s fence, that exchange is consideration.',
    advancedExplanation: 'Ghana’s Parliament made revolutionary reforms in the Contracts Act, 1960 (Act 25): Section 8(1) makes firm offers to keep an offer open binding without separate consideration; Section 8(2) validates past consideration if requested; and Section 9 abolishes the rule in Foakes v Beer regarding part payment of debts.',
    realWorldExample: 'A landlord in Accra promises an artisan: "I will hold this workshop for you until Friday 4pm." Under Section 8(1) of Act 25, the landlord cannot rent it to another party on Thursday afternoon, even though the artisan paid no holding deposit.',
    commonMisconceptions: [
      'Thinking English common-law past consideration rules still apply strictly in Ghana (Act 25 s.8(2) reformed this).',
      'Believing consideration must be of equal financial market value (consideration must be sufficient, but need not be adequate).'
    ],
    relatedCases: ['Currie v Misa (1875) LR 10 Ex 153', 'Contracts Act, 1960 (Act 25)'],
    relatedStatutes: ['Contracts Act, 1960 (Act 25), Sections 8 & 9']
  },
  {
    id: 'concept-living-constitution',
    term: 'The Living Constitution Doctrine',
    subject: 'constitutional',
    difficulty: 'intermediate',
    simpleDefinition: 'The principle that a national constitution must be interpreted broadly and flexibly to adapt to modern life, rather than frozen in the past.',
    formalLegalDefinition: 'A canon of constitutional jurisprudence holding that organic constitutional texts possess an inherent vitality that allows them to be construed purposively and dynamically as societies evolve.',
    beginnerExplanation: 'Imagine buying clothes for a growing child: if the clothes cannot stretch, the child will burst through them. Similarly, Sowah JSC held that the Ghanaian Constitution is not a rigid mathematical document, but a living organism that adapts to the hopes and realities of each new generation.',
    advancedExplanation: 'Laid down by Sowah JSC in Tuffuor v Attorney-General [1980] GLR 637 and expanded by Date-Bah JSC in Asare v Attorney-General [2003-2004] 2 SCGLR 823. Rejects strict mechanical literalism and originalism in favour of purposive constitutional construction.',
    realWorldExample: 'Interpreting Article 21 freedom of speech to protect social media publications and digital journalism in 2026, even though internet algorithms did not exist when the 1992 Constitution was drafted.',
    commonMisconceptions: [
      'Believing judges can rewrite constitutional text at their personal whim (purposive interpretation is bounded by the objective goals of the framers).',
      'Treating a constitution like an ordinary tax code or municipal traffic regulation.'
    ],
    relatedCases: ['Tuffuor v Attorney-General [1980] GLR 637', 'Asare v Attorney-General [2003-2004] 2 SCGLR 823'],
    relatedStatutes: ['Constitution of Ghana 1992, Article 1(2), Article 130']
  },
  {
    id: 'concept-ratio-decidendi',
    term: 'Ratio Decidendi vs. Obiter Dicta',
    subject: 'legal_system',
    difficulty: 'intermediate',
    simpleDefinition: 'The Ratio Decidendi is the binding legal rule necessary for the court\'s decision. Obiter Dicta are extra remarks or observations that do not bind future courts.',
    formalLegalDefinition: 'The ratio decidendi is the legal principle or rationale essential to the determination of the dispute upon which the judgment is founded. Obiter dictum is an incidental statement made by a judge which does not form an integral part of the court\'s decision.',
    beginnerExplanation: 'When a Supreme Court judge writes 50 pages of judgment, not every single sentence becomes the law of Ghana. The core legal reason that actually decided the case is the Ratio (binding). The interesting side opinions or hypothetical thoughts are Obiter (persuasive only).',
    advancedExplanation: 'In common-law doctrine (Article 11(1)(e) of the 1992 Constitution and Article 129), only the ratio decidendi of Supreme Court decisions binds all lower courts. Distinguishing ratio from obiter is the supreme skill of the common-law advocate.',
    realWorldExample: 'In Donoghue v Stevenson, the ratio was that a manufacturer owes a duty to the ultimate consumer of an opaque bottle. A judge\'s side musings on whether the same rule would apply to a secondhand horse cart was obiter dictum.',
    commonMisconceptions: [
      'Assuming that everything written in a Supreme Court majority judgment is automatically binding precedent.',
      'Treating concurring judicial comments as having greater weight than the main ratio.'
    ],
    relatedCases: ['Bilson v Apaloo [1981] GLR 24', 'Tuffuor v Attorney-General [1980] GLR 637'],
    relatedStatutes: ['Constitution 1992, Article 129']
  },
  {
    id: 'concept-allodial-title',
    term: 'Allodial Title & Customary Ownership',
    subject: 'land_customary',
    difficulty: 'intermediate',
    simpleDefinition: 'The supreme, ultimate ownership of land in Ghana, usually held by traditional stools, skins, clans, or families.',
    formalLegalDefinition: 'The highest proprietary interest in land recognized under Section 9 of the Land Act, 2020 (Act 1036), beyond which there is no superior landlord or reversionary interest.',
    beginnerExplanation: 'In Ghana, you rarely buy absolute freehold land forever from a stranger. The land originally belongs to a community stool (in southern Ghana), skin (in northern Ghana), or family clan. When an individual acquires land, they usually hold a lease or customary freehold under the ultimate umbrella of that stool\'s allodial title.',
    advancedExplanation: 'Under Section 9 and Section 12 of Act 1036, allodial title is held in fiduciary trust for the subjects of the stool or skin. Alienation of allodial land requires customary consensus. Customary freeholds (usufructuary interests) are co-existent proprietary rights that can be inherited and transferred.',
    realWorldExample: 'The occupant of a stool in Eastern Region attempts to unilaterally convey 200 acres of farmland to a private developer without consulting the council of elders or stool subjects. The alienation is voidable for breach of fiduciary trust under Act 1036.',
    commonMisconceptions: [
      'Thinking the Chief owns the stool land personally as private property (the Chief is merely a trustee).',
      'Assuming English fee simple absolute exists universally across Ghana without customary root title.'
    ],
    relatedCases: ['Awuku v Tetteh [2011] 1 SCGLR 366', 'Okwabi v Adjei [1984-86] 1 GLR 511'],
    relatedStatutes: ['Land Act, 2020 (Act 1036), Sections 9, 12, 13']
  },
  {
    id: 'concept-mens-rea',
    term: 'Mens Rea & Criminal Culpability (Act 29)',
    subject: 'criminal',
    difficulty: 'beginner',
    simpleDefinition: 'The mental element of a crime (guilty mind), such as intent, knowledge, or recklessness.',
    formalLegalDefinition: 'The state of mind expressly or impliedly required by the definition of an offence for an accused person to incur criminal liability.',
    beginnerExplanation: 'A bad act alone does not make someone a criminal; they must also have had a guilty mind. If you accidentally take someone\'s identical black umbrella from an umbrella stand thinking it was yours, you took the umbrella (physical act), but you had no criminal intent to steal.',
    advancedExplanation: 'Under Ghanaian criminal law (Criminal Offences Act, 1960 (Act 29)), mens rea is statutorily defined in Sections 11 (Intent) and 12 (Negligence). Section 11 clarifies that foresight of certainty equates to intent. Strict liability offences (where no mens rea is required) are rare exceptions strictly construed.',
    realWorldExample: 'A driver in Sunyani whose brakes fail unexpectedly due to a latent manufacturing defect cannot be convicted of murder if a pedestrian is killed, because there was no intention or knowledge under Section 11 of Act 29.',
    commonMisconceptions: [
      'Believing intent and motive are the same thing (motive is why you did it; intent is what you aimed to bring about).',
      'Assuming that carelessness automatically qualifies as criminal intent.'
    ],
    relatedCases: ['Republic v Mensah [1979] GLR 529', 'State v Annan [1965] GLR 600'],
    relatedStatutes: ['Criminal Offences Act, 1960 (Act 29), Sections 11, 12, 46']
  }
];
