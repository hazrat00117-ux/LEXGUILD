import { MootCourtCase } from '../types';

export const MOOT_COURT_CASE: MootCourtCase = {
  id: 'moot-supreme-court-curfew',
  title: 'Civil Liberties Forum v Minister for the Interior & Attorney-General',
  court: 'Supreme Court of Ghana (Constitutional Appeal)',
  bench: [
    { name: 'Her Ladyship Justice Gertrude Torkornoo (Presiding)', title: 'Chief Justice of Ghana', avatarTone: 'Judicial Robe & Ceremonial Wig' },
    { name: 'His Lordship Justice Prof. Henrietta Mensa-Bonsu', title: 'Justice of the Supreme Court', avatarTone: 'Academic Jurist' },
    { name: 'His Lordship Justice Emmanuel Yonny Kulendi', title: 'Justice of the Supreme Court', avatarTone: 'Constitutional Advocate' }
  ],
  proceduralStance: 'Appeal from the Court of Appeal upholding the dismissal of an enforcement writ challenging a ministerial indefinite curfew under the Emergency Powers Act and Article 21(1)(g) of the 1992 Constitution.',
  agreedFacts: [
    'Following localized chieftaincy tensions in a regional municipality, the Minister for the Interior issued an Executive Instrument (EI 42) imposing an indefinite 6:00 PM to 6:00 AM curfew under Section 4 of the Public Order Act.',
    'The curfew has persisted continuously for 14 months without parliamentary debate or formal declaration of a State of Emergency under Article 31 of the 1992 Constitution.',
    'Over 120 small-scale commercial vendors, transport operators, and evening university students have suffered severe economic livelihood disruption.',
    'The Civil Liberties Forum filed an action under Article 2(1) asserting that indefinite curfews without parliamentary oversight violate Article 21(1)(g) freedom of movement and circumvent Article 31 emergency safeguards.',
    'The Attorney-General argues that the Minister acted within statutory discretionary powers to preserve public safety and national peace.'
  ],
  appellantCase: [
    {
      id: 'sub-app-1',
      title: 'Ground 1: Violation of Freedom of Movement (Article 21(1)(g))',
      argumentText: 'May it please this Court, the indefinite curfew imposed under EI 42 constitutes an unlawful and disproportionate derogation from the fundamental human right to freedom of movement guaranteed under Article 21(1)(g). The executive cannot bypass Article 31 emergency mechanisms by using ordinary statutory instruments to permanently suspend constitutional liberties.',
      authorityCited: '1992 Constitution, Article 21(1)(g) & Article 31; Republic v Tommy Thompson Books Ltd (No 2) [1996-97] SCGLR 484 on Proportionality.',
      judicialIntervention: {
        judgeName: 'Justice Prof. Henrietta Mensa-Bonsu JSC',
        question: 'Counsel, is freedom of movement under Article 21(1)(g) an absolute right, or does Article 21(4)(a) not expressly permit restrictions that are reasonably required in the interest of public order and safety?',
        responses: [
          {
            text: 'Indeed, My Lady, the right is not absolute; however, any statutory restriction must pass the strict proportionality test articulated in Tommy Thompson. A 14-month blanket curfew without parliamentary review fails the test of minimum impairment.',
            score: 25,
            benchReaction: 'The Bench nods with approval. You acknowledged the constitutional limitation while adroitly anchoring your defense in the proportionality doctrine.'
          },
          {
            text: 'All rights in Ghana are completely absolute and no minister can ever touch them under any pretext.',
            score: 5,
            benchReaction: 'Justice Mensa-Bonsu frowns. "Counsel, that is an elementary misstatement of Article 21(4). Please address the constitutional text."'
          },
          {
            text: 'The minister acted out of bad faith and should be removed from cabinet immediately.',
            score: 10,
            benchReaction: 'The Chief Justice interjects: "Counsel, we are a court of law determining constitutional validity, not a political rally."'
          }
        ]
      }
    },
    {
      id: 'sub-app-2',
      title: 'Ground 2: Circumvention of Article 31 Parliamentary Checks',
      argumentText: 'We submit that Article 31 of the Constitution establishes an exhaustive constitutional framework for states of emergency, mandating that any emergency measure lapse after seven days unless approved by Parliament. By maintaining a 14-month curfew under executive decree without parliamentary assent, the executive has effectively established an unconstitutional perpetual emergency.',
      authorityCited: '1992 Constitution, Article 31 & Article 58; Tuffuor v Attorney-General [1980] GLR 637.',
      judicialIntervention: {
        judgeName: 'Justice Emmanuel Yonny Kulendi JSC',
        question: 'Counsel, look at Section 4 of the Public Order Act, 1994 (Act 491). Parliament itself conferred this curfew power upon the Minister. Why are you asking us to strike down a power that Parliament democratically granted?',
        responses: [
          {
            text: 'My Lord, because under Article 1(2), the Constitution is supreme over Parliament. Parliament cannot enact ordinary legislation that delegates away constitutional checks or evades the mandatory legislative oversight prescribed in Article 31.',
            score: 25,
            benchReaction: 'Justice Kulendi makes a detailed note in the bench docket. "A formidable invocation of constitutional supremacy, Counsel."'
          },
          {
            text: 'Because politicians do not understand what they vote for in Parliament.',
            score: 0,
            benchReaction: 'The Chief Justice sighs. "Counsel, disparaging the legislature is not an acceptable legal submission in this arena."'
          },
          {
            text: 'We are asking your Lordships to exercise equitable mercy for the small vendors.',
            score: 12,
            benchReaction: 'The Bench listens with sympathy, but Justice Kulendi reminds you that constitutional appeals require legal authority, not just equitable sentiment.'
          }
        ]
      }
    }
  ],
  respondentCase: [
    {
      id: 'sub-resp-1',
      title: 'Ground 1: Statutory Authority & Preservation of the State',
      argumentText: 'May it please the Court, the Attorney-General submits that the primary duty of any sovereign government is to preserve life and territorial peace. Section 4 of the Public Order Act, 1994 (Act 491) was enacted specifically to handle localized skirmishes without resorting to the drastic sledgehammer of a nationwide Article 31 State of Emergency.',
      authorityCited: 'Public Order Act, 1994 (Act 491), Section 4; 1992 Constitution, Article 21(4)(c) & Article 58.',
      judicialIntervention: {
        judgeName: 'Chief Justice Gertrude Torkornoo',
        question: 'Mr. Attorney, can a measure that has lasted 14 continuous months genuinely be characterized as a temporary police measure, or has it transformed into a de facto state of emergency?',
        responses: [
          {
            text: 'My Lady, the duration is dictated by ongoing intelligence of lethal arms proliferation. Section 4 does not set an arbitrary sunset date because peace cannot be scheduled on a calendar; the Minister reviews security weekly with the regional security council.',
            score: 25,
            benchReaction: 'The Chief Justice acknowledges the submission: "The executive security reality is noted."'
          },
          {
            text: 'The executive can keep the curfew for 50 years if the President feels like it.',
            score: 5,
            benchReaction: 'The Bench recoils. "Mr. Attorney, that submission borders on executive autocracy."'
          },
          {
            text: 'The courts have no jurisdiction to question ministerial decisions during curfews.',
            score: 10,
            benchReaction: 'Justice Mensa-Bonsu remarks: "Article 2(1) confers judicial review over all acts of any person in Ghana, Mr. Attorney."'
          }
        ]
      }
    }
  ],
  verdictCriteria: {
    jurisdictionGrip: 'Understanding Article 2 original jurisdiction and standing of civic associations.',
    statutoryApplication: 'Interplay between Public Order Act (Act 491) Section 4 and Article 31 State of Emergency.',
    precedentDistinction: 'Applying the proportionality doctrine from Tommy Thompson and living constitution doctrine from Tuffuor v A-G.'
  }
};
