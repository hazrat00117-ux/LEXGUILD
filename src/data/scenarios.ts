import { IRACScenario } from '../types';

export const IRAC_SCENARIOS: IRACScenario[] = [
  {
    id: 'scen-01-kumasi-furniture',
    title: 'The Kumasi Artisan Furniture Dispute',
    subject: 'contracts',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    location: 'Ahodwo, Kumasi',
    facts: 'Ama contracts with Master Osei, a renowned timber craftsman in Ahodwo, Kumasi, to construct custom mahogany dining and conference chairs for her new restaurant for GH₵25,000. Ama pays a cash deposit of GH₵15,000. Master Osei signs an agreement promising delivery on October 1st, specifically acknowledging that Ama’s grand restaurant launch is scheduled for October 5th. On October 1st, Osei has only built two rough chair frames. He informs Ama that timber prices doubled and demands an extra GH₵10,000 before completing the work, or else he will keep the deposit. Ama cancels the contract, demands the return of her GH₵15,000 deposit, and claims damages for lost opening week revenue.',
    iracBreakdown: {
      issue: {
        prompt: 'Identify the primary legal issue in this contractual dispute:',
        options: [
          'Whether Master Osei committed a fundamental breach of contract by failing to deliver on the agreed date where time was of the essence, entitling Ama to repudiate and claim restitution.',
          'Whether Ama committed a criminal offence by refusing to pay the extra timber inflation surcharge.',
          'Whether contracts for mahogany furniture are illegal under Ghanaian environmental forestry law.',
          'Whether the dispute must be settled exclusively by the Asantehene’s traditional council.'
        ],
        correctIndex: 0,
        explanation: 'The core issue is whether failure to deliver on the agreed delivery date, with knowledge of the restaurant launch, constituted a fundamental breach of a condition where time was of the essence.'
      },
      rule: {
        prompt: 'Which legal rule and statutory provisions govern breach, discharge, and restitution in Ghanaian contract law?',
        options: [
          'Contracts Act, 1960 (Act 25) Part 1 & Common Law rules on breach of condition vs warranty (Hadley v Baxendale).',
          'Criminal Offences Act, 1960 (Act 29) Section 37 on self-defence.',
          'The Statute of Frauds 1677 Section 4 requiring gold sovereign seals.',
          'Public Order Act, 1994 (Act 491) Section 1.'
        ],
        correctIndex: 0,
        explanation: 'Governed by the Contracts Act, 1960 (Act 25) and common-law principles on breach of essential terms and damages under the rule in Hadley v Baxendale.',
        supportingAuthority: 'Contracts Act, 1960 (Act 25) & Hadley v Baxendale (1854) 9 Exch 341'
      },
      application: {
        prompt: 'Apply the legal rules to the facts:',
        options: [
          'Osei had express notice of the October 5th launch; time was of the essence. His unilateral refusal to proceed without extra payment constituted repudiatory breach. Under Hadley v Baxendale, lost opening profits were within reasonable contemplation of the parties.',
          'Osei is excused because timber prices increased due to general market inflation, which constitutes statutory frustration under Act 25.',
          'Ama cannot recover any money because paying a deposit means transferring absolute title in the funds to the craftsman.',
          'Neither party has rights because the contract was made in Kumasi rather than the High Court registry in Accra.'
        ],
        correctIndex: 0,
        explanation: 'Mere price escalation does not constitute frustration (Davis Contractors). Osei repudiated the contract, and because he knew of the opening date, the special loss was within contemplation.'
      },
      conclusion: {
        prompt: 'What is the correct legal conclusion and remedy?',
        options: [
          'Ama is entitled to rescind the contract, recover the GH₵15,000 deposit as money had and received upon total failure of consideration, plus consequential damages for foreseeable losses.',
          'Osei is entitled to keep the GH₵15,000 and jail Ama for refusing to accept the rough frames.',
          'The contract remains alive and Ama must pay the extra GH₵10,000 immediately.',
          'The court will order specific performance compelling Osei to carve chairs overnight.'
        ],
        correctIndex: 0,
        explanation: 'Rescission for repudiatory breach entitles Ama to full restitution of her deposit and compensatory damages for foreseeable lost business.'
      }
    },
    modelAnswer: 'Under Ghanaian contract law, where time is of the essence (here expressly communicated for the restaurant launch), failure to perform constitutes a repudiatory breach of condition. Master Osei’s unilateral demand for GH₵10,000 under threat of non-performance does not constitute frustration, as ordinary price fluctuations do not render performance impossible (Contracts Act 1960 Act 25 Part 1). Ama is entitled to treat the contract as discharged, recover her GH₵15,000 deposit upon total failure of consideration, and recover damages under the second limb of Hadley v Baxendale because the special launch date was made known at the time of contract formation.',
    keyTakeaway: 'In Ghana, unilateral price increases do not excuse performance, and notice of critical deadlines enables recovery of consequential damages.',
    authoritiesCited: ['Contracts Act, 1960 (Act 25)', 'Hadley v Baxendale (1854) 9 Exch 341', 'Victoria Laundry (Windsor) Ltd v Newman Industries Ltd [1949] 2 KB 528'],
    sourceUrl: 'https://ghalii.org/gh/legislation/act/1960/25',
    verifiedStatus: 'Verified Authority'
  },
  {
    id: 'scen-02-independence-square',
    title: 'The Independence Square Assembly Challenge',
    subject: 'constitutional',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    location: 'Accra Central',
    facts: 'The "Coalition for Youth Accountability", a non-partisan civic group, submits a written notification to the Greater Accra Regional Police Command informing them of an intended peaceful procession from Obra Spot, Circle to Independence Square on Thursday. Three days later, the Regional Police Commander writes back stating: "Permission refused due to inadequate police personnel and intelligence of possible traffic disruption. Any gathering will be dispersed with lawful force." The organizers seek legal advice on whether they must obey the police prohibition or can proceed.',
    iracBreakdown: {
      issue: {
        prompt: 'What is the constitutional and statutory issue?',
        options: [
          'Whether the police have statutory or constitutional power to "refuse permission" for a peaceful assembly under the Public Order Act, 1994 (Act 491) and Article 21(1)(d) of the 1992 Constitution.',
          'Whether youth groups have the right to carry concealed weapons during public marches.',
          'Whether the organizers can sue the police in the International Criminal Court in The Hague.',
          'Whether public demonstrations require a certificate from the Registrar General.'
        ],
        correctIndex: 0,
        explanation: 'The critical issue is whether the police possess discretionary licensing power to grant or deny permission to assemble, or whether their role is limited to receiving notification.'
      },
      rule: {
        prompt: 'Identify the governing constitutional provisions and statutory authorities:',
        options: [
          'Article 21(1)(d) of the 1992 Constitution; Public Order Act, 1994 (Act 491) Section 1; New Patriotic Party v IGP [1993-94] 2 GLR 459.',
          'Criminal Offences Act, 1960 Section 46 (Murder).',
          'Courts Act, 1993 Section 112 on bail bonds.',
          'Civil Procedure Rules (CI 47) Order 14 summary judgment.'
        ],
        correctIndex: 0,
        explanation: 'Article 21(1)(d) guarantees freedom of assembly. In NPP v IGP, the Supreme Court struck down permit requirements. Act 491 requires only notification, not a permit.',
        supportingAuthority: '1992 Constitution Article 21(1)(d) & Public Order Act, 1994 (Act 491)'
      },
      application: {
        prompt: 'Apply the rule to the Police Commander\'s refusal letter:',
        options: [
          'Under Act 491 Section 1, organizers need only give at least 5 days notification. If the police have genuine security concerns, they cannot unilaterally "refuse permission"; they must request the organizers to reschedule, and if organizers decline, the police MUST apply to a court of competent jurisdiction for an order prohibiting the event.',
          'The police commander has absolute martial authority to ban any gathering on radio.',
          'The organizers committed treason by writing to the police command.',
          'The police can only intervene if the demonstration is sponsored by a registered political party.'
        ],
        correctIndex: 0,
        explanation: 'Under Section 1(6) of Act 491, police cannot unilaterally veto a protest; they must apply to a court to prohibit it if the organizers do not agree to reschedule.'
      },
      conclusion: {
        prompt: 'What is the correct legal advice to the organizers?',
        options: [
          'The police letter purporting to "refuse permission" is legally ultra vires. Unless the police obtain a High Court restraining order under Section 1(6) of Act 491, the organizers may lawfully hold their peaceful assembly under Article 21(1)(d).',
          'The organizers must disband immediately and pay a fine to the police station.',
          'The organizers should apply for Ghanaian passports and emigrate.',
          'The police commander must be tried before a military court martial.'
        ],
        correctIndex: 0,
        explanation: 'The permit regime was abolished. The police have no administrative veto; only a court order under Act 491 can prohibit an assembly.'
      }
    },
    modelAnswer: 'Following the landmark Supreme Court decision in New Patriotic Party v Inspector-General of Police [1993-94] 2 GLR 459, prior police permits for public assemblies were struck down as unconstitutional violations of Article 21(1)(d). Parliament consequently passed the Public Order Act, 1994 (Act 491), which replaced the permit regime with a notification regime (Section 1). Under Section 1(4)-(6) of Act 491, if the police believe a proposed procession cannot be held safely, they must invite the organizers to postpone or change routes. If organizers disagree, the police have no unilateral power to ban the event; they must apply to a judge or magistrate for an order prohibiting the procession. The Commander’s letter purporting to "refuse permission" is ultra vires.',
    keyTakeaway: 'Ghana replaced police permits with notification; only a court order under Act 491 can lawfully prohibit a peaceful demonstration.',
    authoritiesCited: ['1992 Constitution of Ghana, Article 21(1)(d)', 'Public Order Act, 1994 (Act 491), Section 1', 'New Patriotic Party v Inspector-General of Police [1993-94] 2 GLR 459'],
    sourceUrl: 'https://ghalii.org/gh/judgment/supreme-court/1993/6',
    verifiedStatus: 'Verified Authority'
  },
  {
    id: 'scen-03-aburi-land',
    title: 'The Aburi Ridge Stool Land Alienation',
    subject: 'land_customary',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    location: 'Aburi, Eastern Region',
    facts: 'Nana Otutu, the occupant of the Akyeame Stool in Aburi, executes a 50-year commercial lease of 40 acres of fertile community stool land to a hospitality consortium. The deed is executed by Nana Otutu alone, without the knowledge, signature, or consent of the Mankrado, the Stool Queenmother, or the principal council of elders. Stool youth and farmers discover bulldozers clearing their cocoa and plantain farms. The Stool Elders bring an action to have the lease set aside as void under customary law and Section 12 of the Land Act, 2020 (Act 1036). The hospitality consortium argues they paid valuable consideration and were bona fide purchasers without notice.',
    iracBreakdown: {
      issue: {
        prompt: 'What is the core issue of customary land and statutory property law?',
        options: [
          'Whether the occupant of a stool can validly alienate stool land without the consent and concurrence of the principal elders and councillors of the stool.',
          'Whether cocoa farms can be grown within 50 miles of a ridge.',
          'Whether foreign tourists require a traditional visa to visit Aburi.',
          'Whether hotel developments are forbidden by the Environmental Protection Agency.'
        ],
        correctIndex: 0,
        explanation: 'The critical issue is whether an occupant of a stool possesses unilateral power of alienation, or whether alienation of stool land requires the consent of principal elders as fiduciaries.'
      },
      rule: {
        prompt: 'Which legal rule governs stool land alienation under Ghanaian law?',
        options: [
          'Land Act, 2020 (Act 1036) Section 12, Article 267 of the 1992 Constitution, and customary rules affirmed in Awuku v Tetteh [2011] 1 SCGLR 366.',
          'Sale of Goods Act, 1962 (Act 137) Section 12 on implied warranties.',
          'Road Traffic Act, 2004 (Act 683).',
          'English Law of Property Act 1925.'
        ],
        correctIndex: 0,
        explanation: 'Section 12 of Act 1036 and Article 267(1) establish that stool lands are held in trust by the stool occupant with the consent of council of elders for the benefit of the subjects.',
        supportingAuthority: 'Land Act, 2020 (Act 1036) Section 12 & Awuku v Tetteh [2011] 1 SCGLR 366'
      },
      application: {
        prompt: 'Apply the law to the unilateral lease executed by Nana Otutu:',
        options: [
          'Stool land is held in a fiduciary capacity. Under customary law and Section 12 of Act 1036, alienation requires the concurrence of the principal elders. An alienation made by the chief alone without elder concurrence is voidable (and under Act 1036 void for breach of fiduciary duty). The developer cannot claim bona fide purchaser status because inspection of customary authority is a mandatory duty of due diligence.',
          'Nana Otutu is an absolute monarch whose word is law, superseding all elders and statutes.',
          'The lease is valid because hotel swimming pools provide tourist happiness.',
          'The elders forfeited their rights by failing to chain the chief to the palace.'
        ],
        correctIndex: 0,
        explanation: 'Stool occupants hold land as trustees; unilateral alienation violates customary law and Section 12 of Act 1036. Purchasers must verify elder consent.'
      },
      conclusion: {
        prompt: 'What is the proper judicial decision?',
        options: [
          'The lease must be set aside as invalid for lack of essential stool elder concurrence and breach of fiduciary trust under Act 1036; farmers are entitled to recovery of possession.',
          'The farmers must be evicted and ordered to work as hotel waiters.',
          'The chief must be exiled to Europe.',
          'The land becomes personal private property of the hotel manager.'
        ],
        correctIndex: 0,
        explanation: 'The lease is invalid and set aside; the land remains community stool land for the benefit of stool subjects.'
      }
    },
    modelAnswer: 'Under Article 267(1) of the 1992 Constitution and Section 12 of the Land Act, 2020 (Act 1036), stool lands are vested in the appropriate stool on behalf of and in trust for the subjects of the stool in accordance with customary law and usage. As established in customary jurisprudence (Awuku v Tetteh [2011] 1 SCGLR 366; Okwabi v Adjei), the occupant of a stool is a fiduciary trustee and has no legal authority to unilaterally alienate stool land without the consent and concurrence of the principal elders. A purchaser who fails to ensure the deed is executed by the stool occupant and the principal councillors cannot take shelter behind the plea of bona fide purchaser for value without notice.',
    keyTakeaway: 'A chief or stool occupant holds land in fiduciary trust; unilateral alienation of stool land without elder consent is legally ineffective.',
    authoritiesCited: ['1992 Constitution of Ghana, Article 267(1)', 'Land Act, 2020 (Act 1036), Sections 9 & 12', 'Awuku v Tetteh [2011] 1 SCGLR 366'],
    sourceUrl: 'https://ghalii.org/gh/legislation/act/2020/1036',
    verifiedStatus: 'Verified Authority'
  },
  {
    id: 'scen-04-takoradi-container',
    title: 'The Takoradi Port Container Fall',
    subject: 'torts',
    difficulty: 'intermediate',
    jurisdiction: 'ghana',
    location: 'Takoradi Harbour',
    facts: 'Kwabena, a registered clearing agent, is lawfully walking along a designated pedestrian safety walkway at Takoradi Port. Overhead, a crane operated by Maritime Cargo Ltd is hoisting a 20-foot shipping container. Due to the operator’s failure to inspect worn cable rigging and operating the winch at double the approved safety speed, the hoisting cable snaps. The container crashes onto the walkway, crushing Kwabena’s legs and destroying his laptop and documents. Maritime Cargo Ltd denies liability, arguing that the port is an inherently dangerous place and Kwabena signed a port visitor badge stating: "Entry at own risk."',
    iracBreakdown: {
      issue: {
        prompt: 'What is the primary tortious issue?',
        options: [
          'Whether Maritime Cargo Ltd breached a duty of care owed to a lawful visitor on the walkway, causing actionable damage in negligence, and whether the exemption clause on the badge excludes liability for personal injury.',
          'Whether Kwabena committed criminal trespass by entering a seaport.',
          'Whether shipping containers are exempt from the law of torts under maritime admiralty law.',
          'Whether the crane manufacturer in Germany must be extradited to Takoradi.'
        ],
        correctIndex: 0,
        explanation: 'The issue concerns negligence (duty, breach, causation, damages) and the legal validity of an unnegotiated disclaimer excluding liability for negligent personal injury.'
      },
      rule: {
        prompt: 'Identify the applicable common law and statutory principles of tort:',
        options: [
          'Donoghue v Stevenson [1932] AC 562 (duty of care to foreseeable neighbours), Blyth v Birmingham Waterworks (standard of reasonable crane operator), and Ghanaian public policy against excluding liability for negligent bodily harm.',
          'Contracts Act, 1960 Section 8(2) on past consideration.',
          'Criminal Offences Act, 1960 Section 11 on intent.',
          'Evidence Act, 1975 Section 14 on criminal proof beyond doubt.'
        ],
        correctIndex: 0,
        explanation: 'Negligence requires establishing a duty of care to persons in proximity, breach by falling below the standard of a reasonable operator, causation, and actionable damage.',
        supportingAuthority: 'Donoghue v Stevenson [1932] AC 562 & Blyth v Birmingham Waterworks Co'
      },
      application: {
        prompt: 'Apply the legal rules to the port incident:',
        options: [
          'A crane operator hoisting heavy loads over or near a pedestrian path owes a clear duty of care to lawful pedestrians. Operating at double the safe speed with uninspected worn cables is a flagrant breach of the standard of care. The breach directly caused the container to fall and crush Kwabena’s legs. A general disclaimer on a visitor badge cannot lawfully absolve a commercial operator from gross operational negligence causing personal injury.',
          'Kwabena assumed all risk of death and injury merely by walking in the Western Region.',
          'The crane snapped due to an Act of God (vis major), because gravity exists on Earth.',
          'The shipping container was responsible for its own weight.'
        ],
        correctIndex: 0,
        explanation: 'Clear breach of duty caused catastrophic harm; exculpatory notice on a visitor badge does not defeat a claim for negligent physical injury.'
      },
      conclusion: {
        prompt: 'What is the correct legal finding and award?',
        options: [
          'Maritime Cargo Ltd is vicariously liable in negligence for the acts of its operator and must pay general damages for pain, suffering, loss of amenities, and special damages for medical bills and lost earnings.',
          'The action is dismissed with punitive costs against Kwabena for damaging the container with his legs.',
          'Kwabena must buy a new crane for the shipping company.',
          'The dispute can only be heard by an international maritime arbitrator in London.'
        ],
        correctIndex: 0,
        explanation: 'Maritime Cargo Ltd is liable in tort for negligent injury and must compensate the victim with special and general damages.'
      }
    },
    modelAnswer: 'Under the Ghanaian law of torts (absorbing Donoghue v Stevenson [1932] AC 562 and Nettleship v Weston), crane operators handling heavy suspended machinery owe an obvious duty of care to all persons lawfully on adjacent walkways. The breach is established both directly through proof of excessive speed and worn cables, and alternatively via res ipsa loquitur (the thing speaks for itself, as crane cables do not snap without negligence). The causation (but-for test) and physical injuries are direct and foreseeable. An exculpatory phrase on an entry badge cannot defeat liability for negligent bodily injury under Ghanaian jurisprudence.',
    keyTakeaway: 'Heavy machinery operators owe a non-delegable duty of care; generic entry notices cannot contract out of negligence causing severe physical harm.',
    authoritiesCited: ['Donoghue v Stevenson [1932] AC 562', 'Blyth v Birmingham Waterworks Co (1856) 11 Exch 781', 'Civil Liability Act, 1963 (Act 176)'],
    sourceUrl: 'https://ghalii.org',
    verifiedStatus: 'Verified Authority'
  },
  {
    id: 'scen-05-spousal-consent',
    title: 'The Secret Legon Villa Mortgage',
    subject: 'land_customary',
    difficulty: 'advanced',
    jurisdiction: 'ghana',
    location: 'East Legon, Accra',
    facts: 'Esi and Kojo have been married under the Marriages Act (Cap 127) for 12 years. In 2021, using their pooled income and savings, they acquired a residential property in East Legon where they live with their two children. The title deed was registered in Kojo’s name alone. In 2025, Kojo’s private import business suffers severe cash-flow distress. Without informing Esi, Kojo deposits the title deeds with Apex Bank Ghana Ltd and executes a legal mortgage for GH₵800,000 to secure an overdraft facility. When Kojo defaults, Apex Bank serves an ejectment notice to foreclose and sell the matrimonial home. Esi sues Apex Bank and Kojo, seeking a declaration that the mortgage is void under Section 38 of the Land Act, 2020 (Act 1036).',
    iracBreakdown: {
      issue: {
        prompt: 'What is the governing issue under modern Ghanaian property legislation?',
        options: [
          'Whether a mortgage over matrimonial property executed by one spouse without the written consent of the other spouse is void under Section 38 of the Land Act, 2020 (Act 1036).',
          'Whether commercial banks are exempt from Ghanaian statutory law.',
          'Whether wives are allowed to own land in Greater Accra.',
          'Whether overdraft interest rates exceed Islamic banking prohibitions.'
        ],
        correctIndex: 0,
        explanation: 'The critical statutory question is whether Section 38 of Act 1036 renders the mortgage void ab initio for lack of mandatory spousal written consent.'
      },
      rule: {
        prompt: 'Identify the statutory provisions and relevant authorities:',
        options: [
          'Section 38(1), (3), & (4) of the Land Act, 2020 (Act 1036); Mensah v Mensah [2012] 1 SCGLR 391; Quartson v Quartson [2012] 2 SCGLR 1077.',
          'Criminal Offences Act, 1960 Section 50 on manslaughter.',
          'Customary arbitration rules under the Alternative Dispute Resolution Act, 2010.',
          'Sale of Goods Act, 1962 Section 21 on nemo dat quod non habet.'
        ],
        correctIndex: 0,
        explanation: 'Section 38 of Act 1036 codifies the principle in Mensah v Mensah that marital property is presumed jointly owned and requires written spousal consent for disposition.',
        supportingAuthority: 'Land Act, 2020 (Act 1036) Section 38 & Mensah v Mensah [2012] 1 SCGLR 391'
      },
      application: {
        prompt: 'Apply Section 38 of Act 1036 to Apex Bank\'s mortgage:',
        options: [
          'The East Legon property was acquired during coverture using pooled resources and constitutes matrimonial property. Under Section 38(1), it is presumed jointly owned regardless of nominal registration in Kojo’s name. Section 38(3) and (4) prohibit any disposition or encumbrance without written spousal consent. Apex Bank was under a statutory duty of due diligence to ascertain marital status and obtain Esi’s written consent. Lacking this, the mortgage is void.',
          'Apex Bank wins automatically because Kojo is the husband and family head at common law.',
          'Esi must pay the GH₵800,000 from her personal salary before having any right to speak.',
          'The bank can demolish the house without a court order.'
        ],
        correctIndex: 0,
        explanation: 'Section 38 specifically protects matrimonial property from unilateral encumbrance; the bank had a duty to ensure spousal written consent.'
      },
      conclusion: {
        prompt: 'What is the court\'s holding?',
        options: [
          'The mortgage executed in favour of Apex Bank is declared null and void; the bank’s ejectment notice is set aside, though the bank retains an unsecured personal creditor claim against Kojo personally.',
          'Esi and the children are evicted and the bank takes ownership.',
          'Kojo is sentenced to life imprisonment without trial.',
          'The property is transferred to the Lands Commission.'
        ],
        correctIndex: 0,
        explanation: 'The security mortgage is void under Section 38 of Act 1036. The bank cannot foreclose on the home, but can sue Kojo as an ordinary debtor.'
      }
    },
    modelAnswer: 'Section 38 of the Land Act, 2020 (Act 1036) represents a watershed statutory protection of spousal property rights in Ghana. Subsection (1) establishes a statutory presumption that land acquired during marriage is jointly owned by both spouses. Crucially, Section 38(3) provides that neither spouse shall dispose of or encumber matrimonial property without the written consent of the other spouse, and subsection (4) renders any disposition or encumbrance made in contravention of this requirement void. Applying Mensah v Mensah [2012] 1 SCGLR 391 and Act 1036, Apex Bank’s legal mortgage is null and void for want of Esi’s consent, and no foreclosure can proceed against the property.',
    keyTakeaway: 'The Land Act 2020 Section 38 renders any mortgage or sale of matrimonial land void without the written consent of both spouses.',
    authoritiesCited: ['Land Act, 2020 (Act 1036), Section 38', 'Mensah v Mensah [2012] 1 SCGLR 391', 'Quartson v Quartson [2012] 2 SCGLR 1077'],
    sourceUrl: 'https://ghalii.org/gh/legislation/act/2020/1036',
    verifiedStatus: 'Verified Authority'
  }
];
