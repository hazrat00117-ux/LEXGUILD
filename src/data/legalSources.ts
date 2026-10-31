import { Jurisdiction } from '../types';

export interface LegalSourceRegistryItem {
  id: string;
  name: string;
  jurisdiction: string;
  url: string;
  category: 'Primary Legislation' | 'Case Law Reporter' | 'Institutional Portal' | 'Open Law Library';
  description: string;
  reusableLicense: string;
  verificationStatus: 'Verified Open Access' | 'Official Government Portal' | 'Academic Repository';
  coverage: string;
}

export const JURISDICTIONS: Jurisdiction[] = [
  {
    code: 'ghana',
    name: 'Ghana',
    flag: '🇬🇭',
    capital: 'Accra',
    supremeCourtName: 'Supreme Court of Ghana',
    constitutionYear: '1992',
    legalTradition: 'English Common Law, Equity, Statutory Law & Customary Law',
    primarySourcesRepo: 'GhaLII & Judicial Service of Ghana',
    repoUrl: 'https://ghalii.org',
    isPrimary: true,
    status: 'active'
  },
  {
    code: 'nigeria',
    name: 'Nigeria',
    flag: '🇳🇬',
    capital: 'Abuja',
    supremeCourtName: 'Supreme Court of Nigeria',
    constitutionYear: '1999 (as amended)',
    legalTradition: 'English Common Law, Statutory Law, Customary Law & Sharia Law',
    primarySourcesRepo: 'NigeriaLII / Law Pavilion',
    repoUrl: 'https://nigerialii.org',
    isPrimary: false,
    status: 'comparative_pack'
  },
  {
    code: 'kenya',
    name: 'Kenya',
    flag: '🇰🇪',
    capital: 'Nairobi',
    supremeCourtName: 'Supreme Court of Kenya',
    constitutionYear: '2010',
    legalTradition: 'Common Law, Equity, Statutory Law & Customary Law',
    primarySourcesRepo: 'Kenya Law Reports (eKLR)',
    repoUrl: 'http://kenyalaw.org',
    isPrimary: false,
    status: 'comparative_pack'
  },
  {
    code: 'zambia',
    name: 'Zambia',
    flag: '🇿🇲',
    capital: 'Lusaka',
    supremeCourtName: 'Supreme Court & Constitutional Court of Zambia',
    constitutionYear: '1991 (Amended 2016)',
    legalTradition: 'English Common Law, Statutory Law & Customary Law',
    primarySourcesRepo: 'ZambiaLII',
    repoUrl: 'https://zambialii.org',
    isPrimary: false,
    status: 'comparative_pack'
  },
  {
    code: 'uganda',
    name: 'Uganda',
    flag: '🇺🇬',
    capital: 'Kampala',
    supremeCourtName: 'Supreme Court of Uganda',
    constitutionYear: '1995',
    legalTradition: 'Common Law, Statutory Law & Customary Law',
    primarySourcesRepo: 'ULII (Uganda Legal Information Institute)',
    repoUrl: 'https://ulii.org',
    isPrimary: false,
    status: 'comparative_pack'
  },
  {
    code: 'malawi',
    name: 'Malawi',
    flag: '🇲🇼',
    capital: 'Lilongwe',
    supremeCourtName: 'Malawi Supreme Court of Appeal',
    constitutionYear: '1994',
    legalTradition: 'Common Law, Statutory Law & Customary Law',
    primarySourcesRepo: 'MalawiLII',
    repoUrl: 'https://malawilii.org',
    isPrimary: false,
    status: 'comparative_pack'
  }
];

export const LEGAL_SOURCE_REGISTRY: LegalSourceRegistryItem[] = [
  {
    id: 'ghalii-ghana',
    name: 'Ghana Legal Information Institute (GhaLII)',
    jurisdiction: 'Ghana',
    url: 'https://ghalii.org',
    category: 'Case Law Reporter',
    description: 'Free, open-access repository of Supreme Court, Court of Appeal, and High Court judgments of Ghana.',
    reusableLicense: 'Free Public Access / Fair Use Educational Summary & Citations',
    verificationStatus: 'Verified Open Access',
    coverage: '1960 — Present (Supreme Court & Appellate decisions)'
  },
  {
    id: 'judicial-gov-gh',
    name: 'Judicial Service of Ghana Official Portal',
    jurisdiction: 'Ghana',
    url: 'https://www.judicial.gov.gh',
    category: 'Institutional Portal',
    description: 'Official court administration, practice directions, cause lists, and published rulings of the Superior Courts.',
    reusableLicense: 'Official Public Record',
    verificationStatus: 'Official Government Portal',
    coverage: 'Current practice directions, court hierarchies, and judicial notices'
  },
  {
    id: 'parliament-gh',
    name: 'Parliament of Ghana Digital Repository',
    jurisdiction: 'Ghana',
    url: 'https://www.parliament.gh',
    category: 'Primary Legislation',
    description: 'Official Acts of Parliament, Hansard, constitutional amendments, and bills.',
    reusableLicense: 'Official Public Record',
    verificationStatus: 'Official Government Portal',
    coverage: '1993 — Present Parliamentary Acts & Legislative Instruments'
  },
  {
    id: 'africanlii-portal',
    name: 'African Legal Information Institute (AfricanLII)',
    jurisdiction: 'Pan-African',
    url: 'https://africanlii.org',
    category: 'Open Law Library',
    description: 'Regional aggregator indexing national LIIs across Anglophone and Francophone Africa.',
    reusableLicense: 'Free Access to Law Movement (FALM)',
    verificationStatus: 'Verified Open Access',
    coverage: 'Multi-jurisdictional African treaties, decisions, and comparative law'
  },
  {
    id: 'ug-law-repo',
    name: 'University of Ghana School of Law Institutional Repository',
    jurisdiction: 'Ghana',
    url: 'https://law.ug.edu.gh',
    category: 'Institutional Portal',
    description: 'Academic articles, lecture monographs, and University of Ghana Law Journal (UGLJ) indices.',
    reusableLicense: 'Educational Citation & Academic Review',
    verificationStatus: 'Academic Repository',
    coverage: 'Scholarly analyses of Ghanaian jurisprudence since 1959'
  },
  {
    id: 'knust-faculty-law',
    name: 'KNUST Faculty of Law Repository',
    jurisdiction: 'Ghana',
    url: 'https://law.knust.edu.gh',
    category: 'Institutional Portal',
    description: 'KNUST Law Journal research and customary land law jurisprudence analyses.',
    reusableLicense: 'Educational Citation & Academic Review',
    verificationStatus: 'Academic Repository',
    coverage: 'Customary tenure, environmental law, natural resource law'
  }
];

export const LEGAL_SUBJECTS = [
  {
    id: 'constitutional',
    name: 'Constitutional Law',
    territoryName: 'The Constitutional Kingdom',
    description: 'Explore the 1992 Constitution of Ghana, constitutional supremacy, human rights, and judicial review.',
    tagline: 'The Supreme Law of the Land',
    color: 'from-amber-500/20 to-amber-700/30 text-amber-300 border-amber-500/40',
    accentBg: 'bg-amber-500/10 text-amber-300',
    totalMissions: 8
  },
  {
    id: 'contracts',
    name: 'Contract Law',
    territoryName: 'The Contract City',
    description: 'Formation, offer and acceptance, consideration under Act 25, privity, breach, and remedies.',
    tagline: 'Pacta Sunt Servanda & The Contracts Act, 1960',
    color: 'from-blue-500/20 to-blue-700/30 text-blue-300 border-blue-500/40',
    accentBg: 'bg-blue-500/10 text-blue-300',
    totalMissions: 7
  },
  {
    id: 'criminal',
    name: 'Criminal Law',
    territoryName: 'The Criminal Justice Realm',
    description: 'Elements of crimes under Act 29, mens rea, actus reus, defences, homicide, and standards of proof.',
    tagline: 'Actus Non Facit Reum Nisi Mens Sit Rea',
    color: 'from-rose-500/20 to-rose-700/30 text-rose-300 border-rose-500/40',
    accentBg: 'bg-rose-500/10 text-rose-300',
    totalMissions: 8
  },
  {
    id: 'torts',
    name: 'Law of Torts',
    territoryName: 'The Torts Territory',
    description: 'Civil wrongs, negligence, duty of care, breach, causation, nuisance, defamation, and damages.',
    tagline: 'Ubi Jus Ibi Remedium',
    color: 'from-emerald-500/20 to-emerald-700/30 text-emerald-300 border-emerald-500/40',
    accentBg: 'bg-emerald-500/10 text-emerald-300',
    totalMissions: 6
  },
  {
    id: 'land_customary',
    name: 'Land & Customary Law',
    territoryName: 'The Land & Customary District',
    description: 'Land Act 2020 (Act 1036), allodial ownership, customary freeholds, stools, skins, and family property.',
    tagline: 'Customary Tenure & Statutory Harmony',
    color: 'from-purple-500/20 to-purple-700/30 text-purple-300 border-purple-500/40',
    accentBg: 'bg-purple-500/10 text-purple-300',
    totalMissions: 6
  },
  {
    id: 'legal_system',
    name: 'Legal System & Ethics',
    territoryName: 'The Supreme Arena & Ethics Hall',
    description: 'Sources of Ghanaian law (Art 11), stare decisis, court hierarchy, and professional legal ethics.',
    tagline: 'The Foundations of Ghanaian Jurisprudence',
    color: 'from-teal-500/20 to-teal-700/30 text-teal-300 border-teal-500/40',
    accentBg: 'bg-teal-500/10 text-teal-300',
    totalMissions: 5
  }
] as const;
