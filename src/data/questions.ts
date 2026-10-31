import { Question } from '../types';

export const QUESTIONS_DATABASE: Question[] = [
  // CONSTITUTIONAL LAW (Beginner, Intermediate, Advanced)
  {
    id: 'q-const-01',
    subject: 'constitutional',
    difficulty: 'beginner',
    jurisdiction: 'ghana',
    questionText: 'Under Article 1(2) of the 1992 Constitution of Ghana, what happens if an Act passed by Parliament conflicts with a constitutional provision?',
    contextScenario: 'Parliament passes a statute requiring local journalists to obtain a police license before publishing newspaper articles.',
    options: [
      {
        id: 'opt-a',
        text: 'The Act is automatically valid because Parliament holds supreme legislative power.',
        isCorrect: false,
        explanation: 'Incorrect. Ghana does not practice British-style parliamentary supremacy. Under Article 1(2), the Constitution is supreme.'
      },
      {
        id: 'opt-b',
        text: 'The Act is void to the extent of its inconsistency with the Constitution.',
        isCorrect: true,
        explanation: 'Correct! Article 1(2) establishes constitutional supremacy: any law inconsistent with the Constitution is void to the extent of the inconsistency.'
      },
      {
        id: 'opt-c',
        text: 'The Act remains valid until the President signs an executive veto.',
        isCorrect: false,
        explanation: 'Incorrect. The Constitution itself invalidates conflicting laws, and the Supreme Court declares the nullity under Article 2(1).'
      },
      {
        id: 'opt-d',
        text: 'The Act overrides the Constitution if passed by a three-quarters majority.',
        isCorrect: false,
        explanation: 'Incorrect. Ordinary legislation cannot override the Constitution regardless of the parliamentary voting margin.'
      }
    ],
    statutoryReference: '1992 Constitution of Ghana, Article 1(2)',
    caseReference: 'New Patriotic Party v Attorney-General (31st December Case) [1993-94] 2 GLR 35',
    conceptTested: 'Constitutional Supremacy',
    xpReward: 20
  },
  {
    id: 'q-const-02',
    subject: 'constitutional',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    questionText: 'In Tuffuor v Attorney-General [1980] GLR 637, what landmark principle did Sowah JSC establish regarding citizen standing (locus standi) in constitutional enforcement actions?',
    options: [
      {
        id: 'opt-a',
        text: 'Only the Attorney-General or an injured litigant with direct financial loss can invoke the Supreme Court’s enforcement jurisdiction.',
        isCorrect: false,
        explanation: 'Incorrect. This was the traditional restrictive common-law view that the Supreme Court expressly rejected.'
      },
      {
        id: 'opt-b',
        text: 'Every citizen has standing under the Constitution to defend its supremacy without needing to show personal injury or direct interest.',
        isCorrect: true,
        explanation: 'Correct! Sowah JSC held that the duty and right to defend the Constitution under Article 2 belongs to every Ghanaian citizen (actio popularis).'
      },
      {
        id: 'opt-c',
        text: 'Standing requires prior written permission from the Chief Justice before filing a writ.',
        isCorrect: false,
        explanation: 'Incorrect. Article 2 confers an unfettered constitutional right directly on any citizen.'
      },
      {
        id: 'opt-d',
        text: 'Standing only applies if the plaintiff is a registered legal practitioner of at least 10 years’ standing.',
        isCorrect: false,
        explanation: 'Incorrect. Mr. Amoako Tuffuor was a private citizen, not a legal practitioner.'
      }
    ],
    statutoryReference: '1992 Constitution of Ghana, Article 2(1)',
    caseReference: 'Tuffuor v Attorney-General [1980] GLR 637 SC',
    conceptTested: 'Universal Constitutional Standing (Locus Standi)',
    xpReward: 25
  },
  {
    id: 'q-const-03',
    subject: 'constitutional',
    difficulty: 'advanced',
    jurisdiction: 'ghana',
    questionText: 'In Asare v Attorney-General [2003-2004] 2 SCGLR 823, how did the Supreme Court resolve the interpretation of Article 60(11) regarding the Speaker acting as President?',
    options: [
      {
        id: 'opt-a',
        text: 'By applying strict literalism to hold that modern digital communication prevents a travelling President from ever being "unable to perform functions".',
        isCorrect: false,
        explanation: 'Incorrect. The majority firmly rejected pure mechanical literalism in favour of modern purposive interpretation.'
      },
      {
        id: 'opt-b',
        text: 'By applying the purposive approach to hold that the objective was to avoid any executive vacuum within Ghana’s territorial borders.',
        isCorrect: true,
        explanation: 'Correct! Date-Bah JSC articulated the purposive approach: the purpose of Article 60(11) is that someone must be physically present in Ghana to execute head-of-state functions.'
      },
      {
        id: 'opt-c',
        text: 'By holding that the Chief Justice must act as President whenever the President travels abroad.',
        isCorrect: false,
        explanation: 'Incorrect. Article 60(11) designates the Speaker of Parliament, not the Chief Justice.'
      },
      {
        id: 'opt-d',
        text: 'By declaring that Article 60(11) was non-justiciable under the political question doctrine.',
        isCorrect: false,
        explanation: 'Incorrect. The Ghanaian Supreme Court has consistently held that constitutional interpretation is fully justiciable.'
      }
    ],
    statutoryReference: '1992 Constitution of Ghana, Article 60(11)',
    caseReference: 'Asare v Attorney-General [2003-2004] 2 SCGLR 823',
    conceptTested: 'Purposive Constitutional Interpretation',
    xpReward: 30
  },
  {
    id: 'q-const-04',
    subject: 'constitutional',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    questionText: 'What was the immediate legal consequence of the Supreme Court decision in New Patriotic Party v Inspector-General of Police [1993-94] 2 GLR 459?',
    options: [
      {
        id: 'opt-a',
        text: 'Protests were completely banned in Ghana without prior military clearance.',
        isCorrect: false,
        explanation: 'Incorrect. The court struck down the police permit requirement, expanding democratic freedoms.'
      },
      {
        id: 'opt-b',
        text: 'Police permits for public meetings under NRCD 68 were struck down as unconstitutional, leading to the enactment of the Public Order Act, 1994 (Act 491).',
        isCorrect: true,
        explanation: 'Correct! The permit requirement was nullified. Under Act 491, organizers merely notify police 5 days in advance rather than seeking permission.'
      },
      {
        id: 'opt-c',
        text: 'The police were stripped of all authority to arrest disorderly individuals at public rallies.',
        isCorrect: false,
        explanation: 'Incorrect. Police maintain lawful authority to maintain order and prevent criminal breaches of peace.'
      },
      {
        id: 'opt-d',
        text: 'Organizers were required to post a mandatory cash bond of GH₵50,000 before taking to the streets.',
        isCorrect: false,
        explanation: 'Incorrect. No financial bond requirement was sanctioned.'
      }
    ],
    statutoryReference: 'Public Order Act, 1994 (Act 491) & Constitution 1992, Article 21(1)(d)',
    caseReference: 'New Patriotic Party v Inspector-General of Police [1993-94] 2 GLR 459',
    conceptTested: 'Freedom of Peaceful Assembly',
    xpReward: 25
  },

  // CONTRACT LAW (Beginner, Intermediate, Advanced)
  {
    id: 'q-cont-01',
    subject: 'contracts',
    difficulty: 'beginner',
    jurisdiction: 'ghana',
    questionText: 'Kwame promises in writing: "I offer to sell you my generator for GH₵4,000, and I promise to keep this offer open until Saturday at 5:00 PM." No deposit is paid. On Friday morning, Kwame sells the generator to someone else. Under Ghanaian law, did Kwame breach a binding promise?',
    options: [
      {
        id: 'opt-a',
        text: 'No, because under English common law (Dickinson v Dodds) a promise to keep an offer open without separate consideration is gratuitous and revocable.',
        isCorrect: false,
        explanation: 'Incorrect! While this was the old English common-law rule, Ghana statutory law specifically reformed this.'
      },
      {
        id: 'opt-b',
        text: 'Yes, because Section 8(1) of the Contracts Act, 1960 (Act 25) makes a promise to keep an offer open binding even without separate consideration.',
        isCorrect: true,
        explanation: 'Correct! Section 8(1) of Act 25 explicitly states that a promise to keep an offer open for a specified time is not invalid for lack of consideration.'
      },
      {
        id: 'opt-c',
        text: 'No, because contracts for the sale of goods require customary witness blessing in Ghana.',
        isCorrect: false,
        explanation: 'Incorrect. Commercial sales are governed by the Contracts Act 1960 and Sale of Goods Act 1962, not customary gift formalities.'
      },
      {
        id: 'opt-d',
        text: 'Yes, but only if the promise was sealed with a red wax corporate seal.',
        isCorrect: false,
        explanation: 'Incorrect. Section 8(1) applies to ordinary promises without requiring a deed under seal.'
      }
    ],
    statutoryReference: 'Contracts Act, 1960 (Act 25), Section 8(1)',
    caseReference: 'Dickinson v Dodds distinguished by Act 25',
    conceptTested: 'Options and Firm Offers under Act 25',
    xpReward: 25
  },
  {
    id: 'q-cont-02',
    subject: 'contracts',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    questionText: 'Abena owes Mensah GH₵10,000 under a valid loan agreement. Unable to pay the full balance, Abena offers GH₵7,000 in cash if Mensah agrees to wipe the debt. Mensah signs an agreement accepting the GH₵7,000 in full discharge. Two weeks later, Mensah sues Abena for the remaining GH₵3,000, citing the English rule in Foakes v Beer. Will Mensah succeed in a Ghanaian court?',
    options: [
      {
        id: 'opt-a',
        text: 'Yes, because part-payment of a debt is never good consideration for the whole at common law.',
        isCorrect: false,
        explanation: 'Incorrect! Section 9 of the Contracts Act, 1960 (Act 25) statutorily abolished Foakes v Beer in Ghana.'
      },
      {
        id: 'opt-b',
        text: 'No, because under Section 9 of the Contracts Act, 1960 (Act 25), the acceptance by a creditor of part performance in satisfaction operates to extinguish the obligation.',
        isCorrect: true,
        explanation: 'Correct! Section 9 of Act 25 provides that acceptance of part performance in satisfaction extinguishes the obligation.'
      },
      {
        id: 'opt-c',
        text: 'Yes, but Mensah can only claim interest, not the principal balance.',
        isCorrect: false,
        explanation: 'Incorrect. The entire debt obligation was lawfully extinguished.'
      },
      {
        id: 'opt-d',
        text: 'No, but only if the payment was made in foreign currency rather than Ghanaian Cedis.',
        isCorrect: false,
        explanation: 'Incorrect. The rule in Pinnel’s case allowed different goods/currency, but Act 25 Section 9 operates on currency without technical evasions.'
      }
    ],
    statutoryReference: 'Contracts Act, 1960 (Act 25), Section 9',
    caseReference: 'Foakes v Beer (Abolished in Ghana by Section 9 of Act 25)',
    conceptTested: 'Discharge of Debt by Part Performance',
    xpReward: 25
  },
  {
    id: 'q-cont-03',
    subject: 'contracts',
    difficulty: 'advanced',
    jurisdiction: 'ghana',
    questionText: 'Which provision of the Contracts Act, 1960 (Act 25) permits a third party who is not a party to a contract to sue directly in their own name to enforce a contractual benefit conferred upon them?',
    options: [
      {
        id: 'opt-a',
        text: 'Section 5(1) of Act 25, which abolished the common-law doctrine of privity of contract regarding third-party beneficiaries.',
        isCorrect: true,
        explanation: 'Correct! Section 5(1) provides that any provision in a contract conferring a benefit on a person who is not a party may be enforced or relied on by that person as if they were a party.'
      },
      {
        id: 'opt-b',
        text: 'Section 1 of the Statute of Frauds 1677, which remains unamended.',
        isCorrect: false,
        explanation: 'Incorrect. Ghana reformed privity through Section 5 of the Contracts Act, 1960 (Act 25).'
      },
      {
        id: 'opt-c',
        text: 'Third parties can never sue under Ghanaian law under any circumstances.',
        isCorrect: false,
        explanation: 'Incorrect. Section 5 of Act 25 specifically grants third parties direct right of action.'
      },
      {
        id: 'opt-d',
        text: 'Section 37 of the Criminal Offences Act, 1960.',
        isCorrect: false,
        explanation: 'Incorrect. That section governs justifiable force in self-defence in criminal law.'
      }
    ],
    statutoryReference: 'Contracts Act, 1960 (Act 25), Section 5(1)',
    caseReference: 'Dunlop Pneumatic Tyre Co Ltd v Selfridge & Co Ltd distinguished in Ghana',
    conceptTested: 'Third Party Beneficiary Rights under Act 25',
    xpReward: 30
  },

  // CRIMINAL LAW (Beginner, Intermediate, Advanced)
  {
    id: 'q-crim-01',
    subject: 'criminal',
    difficulty: 'beginner',
    jurisdiction: 'ghana',
    questionText: 'Under Section 11 of the Criminal Offences Act, 1960 (Act 29), how is "intent" legally established in a criminal prosecution in Ghana?',
    options: [
      {
        id: 'opt-a',
        text: 'Only if the accused signs a written confession detailing their evil motive.',
        isCorrect: false,
        explanation: 'Incorrect. Intent does not require a written confession; it is inferred from acts and surrounding circumstances.'
      },
      {
        id: 'opt-b',
        text: 'If the person acts for the purpose of causing an event, or with knowledge that the act is likely to cause that event.',
        isCorrect: true,
        explanation: 'Correct! Section 11 of Act 29 codifies that acting with purpose OR with knowledge that an act is likely to cause the event constitutes legal intent.'
      },
      {
        id: 'opt-c',
        text: 'Intent is presumed whenever an accused person remains silent during police interrogation.',
        isCorrect: false,
        explanation: 'Incorrect. Article 19(2)(g) of the Constitution protects the right to silence without adverse inferences.'
      },
      {
        id: 'opt-d',
        text: 'Intent is only relevant for misdemeanours, not first-degree felonies.',
        isCorrect: false,
        explanation: 'Incorrect. Intent is crucial for serious offences such as murder under Section 46 of Act 29.'
      }
    ],
    statutoryReference: 'Criminal Offences Act, 1960 (Act 29), Section 11',
    caseReference: 'State v Annan [1965] GLR 600',
    conceptTested: 'Statutory Definition of Intent under Act 29',
    xpReward: 20
  },
  {
    id: 'q-crim-02',
    subject: 'criminal',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    questionText: 'Kofi sees an intruder armed with a toy plastic pistol trying to enter his poultry pen. Kofi, realizing it is merely a harmless plastic toy, grabs an iron rod and repeatedly strikes the intruder in the head, causing fatal injuries. Can Kofi successfully claim justifiable force in self-defence under Section 37 of Act 29?',
    options: [
      {
        id: 'opt-a',
        text: 'Yes, because a property owner has absolute right to kill any intruder on sight.',
        isCorrect: false,
        explanation: 'Incorrect. Ghanaian law does not sanction shoot-on-sight lethal force for property trespass.'
      },
      {
        id: 'opt-b',
        text: 'No, because Section 37 requires the defensive force to be reasonably necessary and proportionate; lethal force is unjustified where there is no reasonable apprehension of death or grievous harm.',
        isCorrect: true,
        explanation: 'Correct! Under Section 37, force causing death is only justifiable when the defender on reasonable grounds believes lethal harm cannot otherwise be prevented.'
      },
      {
        id: 'opt-c',
        text: 'Yes, because any trespasser forfeits their constitutional right to life.',
        isCorrect: false,
        explanation: 'Incorrect. Article 13 of the Constitution protects the right to life of all persons.'
      },
      {
        id: 'opt-d',
        text: 'No, but only because the poultry pen was not registered with the Lands Commission.',
        isCorrect: false,
        explanation: 'Incorrect. Land registration status has no bearing on criminal law justification.'
      }
    ],
    statutoryReference: 'Criminal Offences Act, 1960 (Act 29), Section 37',
    caseReference: 'Yirenkyi v The State [1963] 1 GLR 66',
    conceptTested: 'Proportionality in Self-Defence',
    xpReward: 25
  },
  {
    id: 'q-crim-03',
    subject: 'criminal',
    difficulty: 'advanced',
    jurisdiction: 'ghana',
    questionText: 'Under Section 46 and Section 50 of the Criminal Offences Act, 1960 (Act 29), what is the key legal distinction between Murder and Manslaughter?',
    options: [
      {
        id: 'opt-a',
        text: 'Murder requires intentional unlawful causing of death, whereas manslaughter involves unlawful causing of death by negligence or under sudden extreme provocation.',
        isCorrect: true,
        explanation: 'Correct! Section 46 requires intentional causing of death. Section 50 covers causing death by an unlawful harm without intent, through negligence, or where malice is negatived by statutory extenuation (provocation under Section 52).'
      },
      {
        id: 'opt-b',
        text: 'Murder can only be committed with a firearm, whereas manslaughter is committed with poison.',
        isCorrect: false,
        explanation: 'Incorrect. The weapon or mechanism is irrelevant; the distinction lies in the mental element and degree of culpability.'
      },
      {
        id: 'opt-c',
        text: 'Murder is tried by a District Court magistrate, whereas manslaughter is tried by the Court of Appeal.',
        isCorrect: false,
        explanation: 'Incorrect. Homicide offences are indictable and tried on indictment in the High Court.'
      },
      {
        id: 'opt-d',
        text: 'There is no distinction in Ghanaian law; both carry identical mandatory sentences.',
        isCorrect: false,
        explanation: 'Incorrect. Murder and manslaughter carry fundamentally different definitions and sentencing regimes.'
      }
    ],
    statutoryReference: 'Criminal Offences Act, 1960 (Act 29), Sections 46, 50, 52',
    caseReference: 'Republic v Mensah [1979] GLR 529',
    conceptTested: 'Distinction between Murder and Manslaughter',
    xpReward: 30
  },

  // LAND & CUSTOMARY LAW (Beginner, Intermediate, Advanced)
  {
    id: 'q-land-01',
    subject: 'land_customary',
    difficulty: 'beginner',
    jurisdiction: 'ghana',
    questionText: 'Under the Land Act, 2020 (Act 1036), what is the "Allodial Title"?',
    options: [
      {
        id: 'opt-a',
        text: 'A temporary lease granted to foreign investors for a maximum of 50 years.',
        isCorrect: false,
        explanation: 'Incorrect. A lease is a derived lesser interest, not allodial title.'
      },
      {
        id: 'opt-b',
        text: 'The highest proprietary interest in land in Ghana, from which all other interests and rights are derived.',
        isCorrect: true,
        explanation: 'Correct! Section 9 of Act 1036 recognizes the allodial title as the supreme root title, held by stools, skins, clans, families, or the State.'
      },
      {
        id: 'opt-c',
        text: 'An interest acquired exclusively through statutory adverse possession.',
        isCorrect: false,
        explanation: 'Incorrect. Adverse possession does not create root allodial title under Ghanaian customary law.'
      },
      {
        id: 'opt-d',
        text: 'A mortgage guarantee issued by commercial banks.',
        isCorrect: false,
        explanation: 'Incorrect. A mortgage is an encumbrance/security interest.'
      }
    ],
    statutoryReference: 'Land Act, 2020 (Act 1036), Section 9',
    caseReference: 'Awuku v Tetteh [2011] 1 SCGLR 366',
    conceptTested: 'Allodial Title under Act 1036',
    xpReward: 20
  },
  {
    id: 'q-land-02',
    subject: 'land_customary',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    questionText: 'Under Ghanaian customary law affirmed in Fosua v Dufie [2009] SCGLR 310, what is the role of "Aseda" in the creation of a valid customary gift of land?',
    options: [
      {
        id: 'opt-a',
        text: 'Aseda is an optional ceremonial greeting that has zero legal significance.',
        isCorrect: false,
        explanation: 'Incorrect. The Supreme Court confirmed that Aseda is essential to validate and render the gift irrevocable.'
      },
      {
        id: 'opt-b',
        text: 'Aseda is customary consideration or thanksgiving given by the donee in the presence of witnesses, serving as public evidentiary proof and rendering the gift irrevocable.',
        isCorrect: true,
        explanation: 'Correct! In Fosua v Dufie, the Supreme Court held that the presentation and acceptance of Aseda before witnesses constitutes formal customary evidence of transfer and makes the gift irrevocable.'
      },
      {
        id: 'opt-c',
        text: 'Aseda is a statutory tax paid directly to the Ghana Revenue Authority (GRA).',
        isCorrect: false,
        explanation: 'Incorrect. Aseda is a customary consideration/thanksgiving ritual, not state stamp duty.'
      },
      {
        id: 'opt-d',
        text: 'Aseda is only required when land is transferred to a registered corporation.',
        isCorrect: false,
        explanation: 'Incorrect. It is a prerequisite for valid customary gifts inter vivos.'
      }
    ],
    statutoryReference: 'Customary Law & Land Act, 2020 (Act 1036)',
    caseReference: 'Fosua and Adu-Poku v Dufie [2009] SCGLR 310',
    conceptTested: 'Essential Requirements of Customary Gifts (Aseda)',
    xpReward: 25
  },
  {
    id: 'q-land-03',
    subject: 'land_customary',
    difficulty: 'advanced',
    jurisdiction: 'ghana',
    questionText: 'Mr. Boateng purchased residential land in East Legon during his marriage with Mrs. Boateng. In 2024, without his wife\'s knowledge or written consent, Mr. Boateng signed a deed selling the land to a third-party developer. Under Section 38 of the Land Act, 2020 (Act 1036), what is the legal status of this conveyance?',
    options: [
      {
        id: 'opt-a',
        text: 'The conveyance is fully valid because Mr. Boateng’s name alone appeared on the title document.',
        isCorrect: false,
        explanation: 'Incorrect. Section 38 overrides nominal registration by creating a statutory presumption of joint matrimonial ownership.'
      },
      {
        id: 'opt-b',
        text: 'The conveyance is void because land acquired during marriage is presumed jointly owned, and neither spouse can alienate it without the other’s written consent.',
        isCorrect: true,
        explanation: 'Correct! Section 38(3) and (4) of Act 1036 explicitly renders void any disposition or encumbrance of matrimonial property made without the written consent of the other spouse.'
      },
      {
        id: 'opt-c',
        text: 'The conveyance is valid, but the wife is entitled to 10% of the sale proceeds as consolation.',
        isCorrect: false,
        explanation: 'Incorrect. Section 38 renders the transaction void, protecting the proprietary integrity of the family home.'
      },
      {
        id: 'opt-d',
        text: 'The conveyance can only be challenged if the couple was married under English statute law, not under customary marriage.',
        isCorrect: false,
        explanation: 'Incorrect. The Land Act 2020 protects spouses married under civil, customary, or Islamic marriage.'
      }
    ],
    statutoryReference: 'Land Act, 2020 (Act 1036), Section 38',
    caseReference: 'Mensah v Mensah [2012] 1 SCGLR 391',
    conceptTested: 'Spousal Consent in Matrimonial Land Conveyancing',
    xpReward: 30
  },

  // TORTS & EVIDENCE (Beginner, Intermediate, Advanced)
  {
    id: 'q-tort-01',
    subject: 'torts',
    difficulty: 'beginner',
    jurisdiction: 'ghana',
    questionText: 'In Lord Atkin’s famous dictum in Donoghue v Stevenson [1932] AC 562, which forms part of the common law of Ghana under Article 11(1)(e) of the 1992 Constitution, who is your "neighbour" in the law of negligence?',
    options: [
      {
        id: 'opt-a',
        text: 'Only a person living in the immediate house or plot adjacent to your physical residence.',
        isCorrect: false,
        explanation: 'Incorrect. In law, "neighbour" is not restricted to geographic borders.'
      },
      {
        id: 'opt-b',
        text: 'Persons who are so closely and directly affected by your act that you ought reasonably to have them in contemplation when directing your mind to the acts or omissions in question.',
        isCorrect: true,
        explanation: 'Correct! This is Lord Atkin’s famous Neighbour Principle establishing duty of care in negligence.'
      },
      {
        id: 'opt-c',
        text: 'Anyone with whom you have signed an enforceable written contract.',
        isCorrect: false,
        explanation: 'Incorrect. The entire point of Donoghue v Stevenson was that a tortious duty of care exists independent of contract privity.'
      },
      {
        id: 'opt-d',
        text: 'Members of your immediate nuclear family.',
        isCorrect: false,
        explanation: 'Incorrect. The neighbour principle applies to the public and consumers at large.'
      }
    ],
    statutoryReference: 'Constitution 1992, Article 11(1)(e) & Common Law Negligence',
    caseReference: 'Donoghue v Stevenson [1932] AC 562',
    conceptTested: 'The Neighbour Principle and Duty of Care',
    xpReward: 20
  },
  {
    id: 'q-evid-01',
    subject: 'evidence',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    questionText: 'Under Sections 11 and 12 of the Evidence Act, 1975 (NRCD 323), what is the difference between the standard of proof in a civil case and a criminal prosecution in Ghana?',
    options: [
      {
        id: 'opt-a',
        text: 'Civil cases require proof beyond reasonable doubt, while criminal cases require proof on the balance of probabilities.',
        isCorrect: false,
        explanation: 'Incorrect. This reverses the standards! Criminal cases carry the higher burden.'
      },
      {
        id: 'opt-b',
        text: 'Civil cases require proof by a preponderance of the probabilities, while criminal cases require proof beyond reasonable doubt.',
        isCorrect: true,
        explanation: 'Correct! Section 12 of NRCD 323 sets the civil standard as preponderance of probabilities (balance of probabilities), and Section 14 mandates proof beyond reasonable doubt for criminal prosecution.'
      },
      {
        id: 'opt-c',
        text: 'Both civil and criminal cases require 100% mathematical certainty.',
        isCorrect: false,
        explanation: 'Incorrect. The law recognizes that absolute mathematical certainty is impossible in human affairs.'
      },
      {
        id: 'opt-d',
        text: 'In Ghana, proof in both civil and criminal cases is determined solely by the number of witnesses called.',
        isCorrect: false,
        explanation: 'Incorrect. Evidence is weighed by probative value, credibility, and statutory relevance, not merely head count.'
      }
    ],
    statutoryReference: 'Evidence Act, 1975 (NRCD 323), Sections 11, 12, 14',
    caseReference: 'Adwubeng v Domfeh [1996-97] SCGLR 660',
    conceptTested: 'Standard of Proof: Civil vs Criminal Standards',
    xpReward: 25
  },
  {
    id: 'q-sys-01',
    subject: 'legal_system',
    difficulty: 'beginner',
    jurisdiction: 'ghana',
    questionText: 'According to Article 11(1) of the 1992 Constitution of Ghana, what are the formal sources of Ghanaian law?',
    options: [
      {
        id: 'opt-a',
        text: 'The Constitution, enactments made by Parliament, orders/rules/regulations made under constitutional power, the existing law, and the common law.',
        isCorrect: true,
        explanation: 'Correct! Article 11(1) of the 1992 Constitution exhaustively defines the laws of Ghana, including the common law (which comprises rules of customary law under Article 11(2)).'
      },
      {
        id: 'opt-b',
        text: 'Only presidential executive orders and police directives.',
        isCorrect: false,
        explanation: 'Incorrect. Executive orders must derive authority from the Constitution or an Act of Parliament.'
      },
      {
        id: 'opt-c',
        text: 'English statutes passed in London after 1992.',
        isCorrect: false,
        explanation: 'Incorrect. Post-1992 UK legislation does not apply in sovereign Ghana unless domesticated by the Parliament of Ghana.'
      },
      {
        id: 'opt-d',
        text: 'Only unwritten customary sayings handed down by stool linguists.',
        isCorrect: false,
        explanation: 'Incorrect. While customary law is part of the common law under Article 11(2), it is not the sole source.'
      }
    ],
    statutoryReference: 'Constitution of Ghana 1992, Article 11(1) & 11(2)',
    caseReference: 'Kuenyehia v Archer [1993-94] 2 GLR 525',
    conceptTested: 'Formal Sources of Ghanaian Law',
    xpReward: 20
  }
];
