import { CaseInvestigation } from '../types';

export const CASE_INVESTIGATIONS: CaseInvestigation[] = [
  {
    id: 'investigation-tuffuor-ag',
    caseId: 'case-tuffuor-ag',
    title: 'The Constitutional Soul: Tuffuor v Attorney-General',
    subject: 'constitutional',
    jurisdiction: 'ghana',
    realCaseName: 'Tuffuor v Attorney-General',
    citation: '[1980] GLR 637 SC',
    factsNarrative: [
      'In September 1979, the Republic of Ghana transitioned from military rule to the Third Republic under a brand new written Constitution.',
      'Justice F.K. Apaloo was serving as Chief Justice prior to the transition. Section 2 of the First Schedule (Transitional Provisions) stated that judges holding office immediately before the coming into force of the Constitution shall be deemed to have been appointed to hold the corresponding office.',
      'Notwithstanding this transitional deeming clause, President Hilla Limann purported to nominate Justice Apaloo afresh as Chief Justice, sending his name to the newly elected Parliament for vetting and approval.',
      'Parliament convened its Appointments Committee, vetted Justice Apaloo, and voted to reject his nomination as Chief Justice!',
      'An ordinary citizen of Ghana, Mr. Amoako Tuffuor, was outraged by this move. He instructed counsel and filed a writ in the Supreme Court under Article 2, challenging Parliament and the President.'
    ],
    stages: {
      discoverFacts: {
        clues: [
          { label: 'The Appointment Letter', text: 'Presidential letter nominating Justice Apaloo to Parliament for vetting despite his existing tenure.' },
          { label: 'Parliamentary Hansard', text: 'Minutes of Parliament recording the vote rejecting Justice Apaloo by a margin of 68 to 52.' },
          { label: 'The Citizen’s Writ', text: 'Mr. Amoako Tuffuor filed as a private citizen who held no personal dispute or financial stake in the Chief Justice position.' }
        ],
        comprehensionQuestion: {
          question: 'What triggered the constitutional dispute in Tuffuor v Attorney-General?',
          options: [
            'Justice Apaloo was dismissed for criminal financial misconduct.',
            'The President sent the incumbent Chief Justice to Parliament for fresh vetting, and Parliament voted to reject him.',
            'Mr. Tuffuor wanted to become the Chief Justice of Ghana himself.',
            'Parliament abolished the Supreme Court entirely.'
          ],
          correctIndex: 1,
          feedback: 'Correct! The executive treated the incumbent Chief Justice as though his office was vacant, and Parliament purported to reject him after vetting.'
        }
      },
      identifyProblem: {
        legalIssuePrompt: 'Which of the following constitutes the central constitutional issue before the Supreme Court?',
        issueOptions: [
          'Whether an ordinary private citizen (locus standi) who suffered no direct personal harm has the right under Article 2 to invoke the original enforcement jurisdiction of the Supreme Court.',
          'Whether Parliament has the constitutional authority to pass income tax rates without presidential signature.',
          'Whether military officers can be tried in civil courts.',
          'Whether the Chief Justice must wear a ceremonial British wig during cabinet meetings.'
        ],
        correctIndex: 0,
        explanation: 'The threshold procedural battle was standing (locus standi): Could a citizen with no personal grievance sue to enforce the Constitution? On the merits, the issue was whether transitional provisions preserved the Chief Justice automatically.'
      },
      findTheLaw: {
        statuteAndPrecedentCandidates: [
          {
            citation: 'Constitution of Ghana 1979, Article 2(1)',
            summary: 'Any person who alleges that an enactment or act is inconsistent with the Constitution may bring an action in the Supreme Court.',
            isApplicable: true,
            reasoning: 'The text uses "Any person", creating universal standing to defend constitutional supremacy.'
          },
          {
            citation: 'Transitional Provisions, Section 2(1)',
            summary: 'Incumbent judges deemed to have been appointed to hold the corresponding office under the new Constitution.',
            isApplicable: true,
            reasoning: 'Mandatory deeming provision meant Justice Apaloo was already constitutionally the Chief Justice.'
          },
          {
            citation: 'English House of Commons Privileges Act 1770',
            summary: 'Internal parliamentary debates cannot be questioned by external bodies.',
            isApplicable: false,
            reasoning: 'Foreign statutory rules do not override the written supreme Constitution of sovereign Ghana.'
          }
        ]
      },
      buildArguments: {
        plaintiffTaskPrompt: 'Evaluate the strongest constitutional submission for Mr. Tuffuor (Plaintiff):',
        plaintiffArguments: [
          {
            text: 'Under Article 2, every citizen is a constitutional custodian. Under the Transitional Provisions, Justice Apaloo was already substantive Chief Justice; treating his post as vacant and subjecting him to parliamentary veto violated the tenure protections of the judiciary.',
            strength: 'Compelling',
            explanation: 'Directly anchors the action in constitutional supremacy, universal standing, and judicial independence.'
          },
          {
            text: 'Mr. Tuffuor is Justice Apaloo\'s closest childhood school friend.',
            strength: 'Irrelevant',
            explanation: 'Personal relationships carry zero weight in constitutional enforcement.'
          }
        ],
        defendantTaskPrompt: 'Evaluate the Attorney-General\'s defence:',
        defendantArguments: [
          {
            text: 'Mr. Tuffuor suffered no personal legal injury or financial damage; allowing any citizen to sue over public appointments will overwhelm the courts with busybodies and violates parliamentary privilege.',
            strength: 'Compelling',
            explanation: 'This was the classic common-law restrictive standing argument that forced the court to choose between traditional doctrine and constitutional democracy.'
          },
          {
            text: 'The President has royal prerogative to dismiss any judge at midnight.',
            strength: 'Weak',
            explanation: 'In a constitutional republic, presidential powers are strictly circumscribed by the Constitution.'
          }
        ]
      },
      deliverJudgment: {
        question: 'As a Justice of the Supreme Court, what is your ruling on Mr. Tuffuor’s action?',
        options: [
          {
            ruling: 'Grant the declarations in full.',
            reasoning: 'The Constitution is a living organism; Article 2 grants universal standing to every citizen to defend it. Justice Apaloo held office automatically under transitional provisions, and Parliament’s rejection was null and void.',
            isRealBenchVerdict: true,
            feedback: 'Masterful! You delivered the exact landmark verdict formulated by Sowah JSC on behalf of the unanimous Supreme Court of Ghana.'
          },
          {
            ruling: 'Dismiss the action for lack of standing.',
            reasoning: 'Only someone who applied for the job of Chief Justice or was dismissed has sufficient personal interest to file a lawsuit.',
            isRealBenchVerdict: false,
            feedback: 'Incorrect. The Supreme Court decisively rejected this narrow English common-law restriction in favour of expansive citizen standing.'
          }
        ]
      },
      benchVerdictReveal: {
        actualCourtDecision: 'The Supreme Court unanimously ruled in favour of Amoako Tuffuor, declaring that Justice F.K. Apaloo was the substantive Chief Justice of Ghana and that Parliament\'s purported vetting and rejection was unconstitutional, null, and void.',
        ratioDecidendi: 'A written Constitution is not an ordinary Act of Parliament; it is a living organism capable of growth and development to be interpreted broadly and purposively. Under Article 2, every citizen has constitutional standing (actio popularis) to sue to enforce constitutional supremacy without proving personal injury.',
        obiterDicta: 'The courts will respect parliamentary proceedings save where Parliament acts in patent violation of express constitutional injunctions.',
        benchQuotes: [
          '"A written Constitution such as ours is not an ordinary Act of Parliament. It embodies the will of a people. It also mirrors their history. It is a living organism capable of growth and development..." — Sowah JSC',
          '"The duty to defend the Constitution belongs to every citizen of the Republic." — Sowah JSC'
        ],
        academicAnalysis: 'Tuffuor v Attorney-General remains the single most cited constitutional judgment in Ghanaian history. It rescued the Ghanaian judiciary from political subordinance, established the living-tree doctrine of constitutional interpretation, and empowered public-interest litigation across Africa.',
        originalSourceUrl: 'https://ghalii.org/gh/judgment/supreme-court/1980/1'
      }
    }
  },
  {
    id: 'investigation-npp-igp',
    caseId: 'case-npp-igp',
    title: 'The Freedom of the Streets: NPP v Inspector-General of Police',
    subject: 'constitutional',
    jurisdiction: 'ghana',
    realCaseName: 'New Patriotic Party v Inspector-General of Police',
    citation: '[1993-94] 2 GLR 459 SC',
    factsNarrative: [
      'In early 1993, following the restoration of multi-party constitutional democracy under the 1992 Constitution, opposition parties organized peaceful political rallies in Accra.',
      'The Police Service intervened, stopping the demonstrations on the basis that organizers had not applied for and been granted a formal police permit under Sections 7, 8, and 12 of the Public Order Decree, 1972 (NRCD 68).',
      'The opposition party, the New Patriotic Party, brought a direct constitutional challenge in the Supreme Court against the Inspector-General of Police.',
      'The plaintiff argued that requiring citizens to beg the police for permission before holding a peaceful procession turned a fundamental human right into a revocable police favour.'
    ],
    stages: {
      discoverFacts: {
        clues: [
          { label: 'The Banned Procession Notice', text: 'Police communique halting a peaceful protest on grounds of lacking an NRCD 68 police permit.' },
          { label: 'The 1992 Constitution Article 21', text: 'Article 21(1)(d) guarantees: "All persons shall have the right to freedom of assembly including freedom to take part in processions and demonstrations."' }
        ],
        comprehensionQuestion: {
          question: 'What police power was challenged in this historic case?',
          options: [
            'The police power to issue speeding tickets on the motorway.',
            'The police power under military-era decree (NRCD 68) to require prior permits and veto public demonstrations.',
            'The police power to carry firearms.',
            'The power of police recruits to join trade unions.'
          ],
          correctIndex: 1,
          feedback: 'Correct! The challenge targeted the requirement of a prior police permit before exercising freedom of assembly.'
        }
      },
      identifyProblem: {
        legalIssuePrompt: 'Identify the primary constitutional issue:',
        issueOptions: [
          'Whether statutory provisions requiring prior police permits to hold a peaceful public assembly violate the fundamental human right to freedom of assembly guaranteed under Article 21(1)(d) of the 1992 Constitution.',
          'Whether the Inspector-General of Police must be appointed by a majority of regional chiefs.',
          'Whether protest placards must be written in English only.',
          'Whether peaceful assembly is restricted to citizens above 50 years of age.'
        ],
        correctIndex: 0,
        explanation: 'The constitutional dilemma was whether prior police licensing can exist under a democratic constitution that enshrines assembly as a fundamental human right.'
      },
      findTheLaw: {
        statuteAndPrecedentCandidates: [
          {
            citation: '1992 Constitution of Ghana, Article 21(1)(d) & 21(4)',
            summary: 'Freedom of assembly is guaranteed subject only to laws reasonably required in the interest of national security, public order, or protecting freedoms of others.',
            isApplicable: true,
            reasoning: 'Core constitutional benchmark for testing the validity of the police permit decree.'
          },
          {
            citation: '1992 Constitution, Article 1(2)',
            summary: 'The Constitution is supreme; any inconsistent law is void to the extent of inconsistency.',
            isApplicable: true,
            reasoning: 'Mandates striking down pre-1992 decrees that clash with fundamental rights.'
          }
        ]
      },
      buildArguments: {
        plaintiffTaskPrompt: 'Assess the Plaintiff’s constitutional submission:',
        plaintiffArguments: [
          {
            text: 'Prior restraint is antithetical to constitutional democracy. If the police can grant or refuse permits at their unfettered administrative whim, the fundamental right to assemble is extinguished.',
            strength: 'Compelling',
            explanation: 'Highlights the danger of administrative veto over constitutional liberties.'
          }
        ],
        defendantTaskPrompt: 'Assess the State’s defence:',
        defendantArguments: [
          {
            text: 'Article 21(4) permits restrictions necessary for public order. Police permits are vital to manage vehicular traffic and prevent clashes between rival political groups.',
            strength: 'Compelling',
            explanation: 'Relies on the legitimate constitutional limitation of preserving public order.'
          }
        ]
      },
      deliverJudgment: {
        question: 'How do you rule as the Supreme Court of Ghana?',
        options: [
          {
            ruling: 'Declare sections of NRCD 68 requiring police permits unconstitutional, null, and void.',
            reasoning: 'Freedom of assembly is a fundamental right. Police are custodians of public order whose job is to facilitate and protect peaceful demonstrators, not license their speech.',
            isRealBenchVerdict: true,
            feedback: 'Brilliant! You ruled in exact agreement with the unanimous Supreme Court bench headed by Archer CJ and Adade JSC.'
          },
          {
            ruling: 'Uphold the permit system in full.',
            reasoning: 'The police must have total discretion to forbid protests to maintain absolute calm.',
            isRealBenchVerdict: false,
            feedback: 'Incorrect. The Supreme Court struck down the permit system, which resulted in the Public Order Act, 1994 (Act 491).'
          }
        ]
      },
      benchVerdictReveal: {
        actualCourtDecision: 'The Supreme Court unanimously held that sections 7, 8, 12(c), and 13 of NRCD 68 requiring a permit before holding a public procession or meeting were in direct violation of Article 21(1)(d) of the 1992 Constitution and therefore void.',
        ratioDecidendi: 'Police permits constitute unconstitutional prior restraint on freedom of assembly. The state cannot condition the exercise of an inalienable constitutional liberty on administrative consent.',
        obiterDicta: 'Demonstrators still have a civic duty to conduct themselves peacefully and coordinate with law enforcement.',
        benchQuotes: [
          '"Police permits for meetings and processions have no place in a constitutional democracy governed by the rule of law." — Archer CJ',
          '"The police are there to assist citizens to exercise their rights, not to prevent them from doing so." — Adade JSC'
        ],
        academicAnalysis: 'This case revolutionized civil liberties in Fourth Republic Ghana, prompting Parliament to pass the Public Order Act, 1994 (Act 491), transforming Ghana from a permit regime to a notification regime.',
        originalSourceUrl: 'https://ghalii.org/gh/judgment/supreme-court/1993/6'
      }
    }
  },
  {
    id: 'investigation-fosua-dufie',
    caseId: 'case-fosua-dufie',
    title: 'The Family Grove & The Aseda Token: Fosua v Dufie',
    subject: 'land_customary',
    jurisdiction: 'ghana',
    realCaseName: 'Fosua and Adu-Poku v Dufie (Deceased) and Adu-Poku',
    citation: '[2009] SCGLR 310 SC',
    factsNarrative: [
      'In a traditional Akan community, a mother purportedly gifted a piece of valuable cocoa and residential property to one daughter during her lifetime.',
      'After the mother passed away, the surviving siblings claimed that the property was ancestral family property that could not be alienated, and that no valid customary gift had ever taken place.',
      'The dispute escalated to the courts, with the daughter insisting that her mother’s oral blessing was sufficient to transfer customary ownership.',
      'The case turned on what formalities must exist under Ghanaian customary law before a gift of land inter vivos becomes legally irrevocable.'
    ],
    stages: {
      discoverFacts: {
        clues: [
          { label: 'The Oral Blessing', text: 'Evidence that the mother blessed the daughter in the bedroom without external witnesses.' },
          { label: 'The Missing Aseda', text: 'No token drink, schnapps, or thank-offering (Aseda) was presented to the family elders.' }
        ],
        comprehensionQuestion: {
          question: 'What crucial element was disputed regarding the mother’s gift?',
          options: [
            'Whether the mother paid income tax to the municipal assembly.',
            'Whether the mandatory customary requirements for a valid gift inter vivos, including Aseda and family consent, were fulfilled.',
            'Whether the daughter was a registered voter.',
            'Whether the property was surveyed with satellite GPS.'
          ],
          correctIndex: 1,
          feedback: 'Correct! The issue was whether the customary legal formalities of a gift inter vivos were satisfied.'
        }
      },
      identifyProblem: {
        legalIssuePrompt: 'Identify the legal question of customary jurisprudence:',
        issueOptions: [
          'What are the mandatory essential legal requirements for a valid and irrevocable customary gift of land inter vivos under Ghanaian customary law?',
          'Whether females can inherit cocoa trees.',
          'Whether customary law was abolished by English statutes in 1876.',
          'Whether gifts must be stamped with a British royal crest.'
        ],
        correctIndex: 0,
        explanation: 'The case established the definitive checklist for customary gifts of land.'
      },
      findTheLaw: {
        statuteAndPrecedentCandidates: [
          {
            citation: 'Summey v Yohuno [1960] GLR 68 & Bintu v Mahama [1967] GLR 518',
            summary: 'Precedent setting out the 4 requirements of customary gift: intention, disposing power, Aseda, and delivery.',
            isApplicable: true,
            reasoning: 'Directly affirmed by the Supreme Court in Fosua v Dufie.'
          },
          {
            citation: 'Land Act, 2020 (Act 1036) Section 12',
            summary: 'Family property fiduciary protection; individual family members cannot alienate family land unilaterally.',
            isApplicable: true,
            reasoning: 'Reaffirms that disposing power over family land requires family head and elder consent.'
          }
        ]
      },
      buildArguments: {
        plaintiffTaskPrompt: 'Evaluate the Family Elders\' argument:',
        plaintiffArguments: [
          {
            text: 'A customary gift of land cannot be made in secret. Without disposing power over family property, without public presentation and acceptance of Aseda before witnesses, and without delivery of possession, the purported gift is void.',
            strength: 'Compelling',
            explanation: 'Accurately articulates the core requirements of customary land law.'
          }
        ],
        defendantTaskPrompt: 'Evaluate the Donee Daughter\'s argument:',
        defendantArguments: [
          {
            text: 'A mother’s maternal affection and private deathbed verbal declaration overrides all customary formalities and family consent requirements.',
            strength: 'Weak',
            explanation: 'Customary law requires objective legal certainty to prevent fraudulent land claims after death.'
          }
        ]
      },
      deliverJudgment: {
        question: 'Deliver your verdict on the validity of the customary gift:',
        options: [
          {
            ruling: 'Declare the gift invalid and restore the land to the family.',
            reasoning: 'Under Ghanaian customary law, a valid gift inter vivos requires: clear intention, disposing power, acceptance marked by Aseda in the presence of witnesses, and delivery of possession. Private verbal statements without Aseda do not pass customary title.',
            isRealBenchVerdict: true,
            feedback: 'Spot on! You upheld the exact ratio delivered by Dr. Date-Bah JSC and the Supreme Court bench.'
          },
          {
            ruling: 'Uphold the gift as an informal English trust.',
            reasoning: 'Family elders do not need to be informed of land transfers.',
            isRealBenchVerdict: false,
            feedback: 'Incorrect. Ghanaian customary law strictly requires elder consent for family land and Aseda for gifts.'
          }
        ]
      },
      benchVerdictReveal: {
        actualCourtDecision: 'The Supreme Court held that the purported gift was invalid under customary law, and the property remained family property.',
        ratioDecidendi: 'The essential requirements for a valid customary gift of land inter vivos are: (1) Intention of the donor to make the gift; (2) The donor must have disposing power over the property; (3) Acceptance by the donee evidenced by the presentation and acceptance of Aseda (customary consideration/thanksgiving) before witnesses; and (4) Delivery of possession.',
        obiterDicta: 'Aseda serves as the customary equivalent of statutory registration, providing public notice and evidentiary permanence.',
        benchQuotes: [
          '"Aseda is not mere politeness or gratitude; in customary conveyancing it is the solemn evidentiary act that seals the alienation and binds the parties." — Date-Bah JSC'
        ],
        academicAnalysis: 'Fosua v Dufie reaffirmed traditional Akan customary land principles in the modern era, setting a high standard of proof for claims of inter vivos gifts of land.',
        originalSourceUrl: 'https://ghalii.org/gh/judgment/supreme-court/2009/14'
      }
    }
  }
];
