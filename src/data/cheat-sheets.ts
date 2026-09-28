// ─── High-Yield Library & Information Science Revision Cheat Sheets ─────────
// Focus areas for Bihar Librarian LET 2026

export interface LibraryAct {
  state: string;
  year: number;
  actName: string;
  isBihar?: boolean;
}

// 19 Indian State Public Library Acts (Chronological Order)
export const publicLibraryActs: LibraryAct[] = [
  { state: 'Tamil Nadu (Madras)', year: 1948, actName: 'Madras Public Libraries Act' },
  { state: 'Andhra Pradesh', year: 1960, actName: 'Andhra Pradesh Public Libraries Act' },
  { state: 'Karnataka (Mysore)', year: 1965, actName: 'Karnataka Public Libraries Act' },
  { state: 'Maharashtra', year: 1967, actName: 'Maharashtra Public Libraries Act' },
  { state: 'West Bengal', year: 1979, actName: 'West Bengal Public Libraries Act' },
  { state: 'Manipur', year: 1988, actName: 'Manipur Public Libraries Act' },
  { state: 'Haryana', year: 1989, actName: 'Haryana Public Libraries Act' },
  { state: 'Kerala', year: 1989, actName: 'Kerala Public Libraries Act' },
  { state: 'Goa', year: 1993, actName: 'Goa Public Libraries Act' },
  { state: 'Mizoram', year: 1993, actName: 'Mizoram Public Libraries Act' },
  { state: 'Gujarat', year: 2001, actName: 'Gujarat Public Libraries Act' },
  { state: 'Odisha', year: 2001, actName: 'Odisha Public Libraries Act' },
  { state: 'Uttarakhand', year: 2005, actName: 'Uttaranchal Public Libraries Act' },
  { state: 'Rajasthan', year: 2006, actName: 'Rajasthan Public Libraries Act' },
  { state: 'Uttar Pradesh', year: 2006, actName: 'Uttar Pradesh Public Libraries Act' },
  { state: 'Bihar', year: 2008, actName: 'Bihar Public Libraries and Information Centres Act', isBihar: true },
  { state: 'Chhattisgarh', year: 2008, actName: 'Chhattisgarh Public Libraries Act' },
  { state: 'Arunachal Pradesh', year: 2009, actName: 'Arunachal Pradesh Public Libraries Act' },
];

// DDC 10 Main Classes (000–900)
export const ddcMainClasses = [
  { code: '000', label: 'Computer science, information & general works', keyTopics: 'Libraries, Bibliographies, Encyclopedias, Journalism' },
  { code: '100', label: 'Philosophy & psychology', keyTopics: 'Ethics, Logic, Epistemology, Parapsychology' },
  { code: '200', label: 'Religion', keyTopics: 'Comparative religion, Hinduism, Buddhism, Islam, Christianity' },
  { code: '300', label: 'Social sciences', keyTopics: 'Sociology, Economics, Law, Education, Public Administration' },
  { code: '400', label: 'Language', keyTopics: 'Linguistics, English, Sanskrit, Hindi, Grammar, Dictionaries' },
  { code: '500', label: 'Pure science', keyTopics: 'Mathematics, Physics, Chemistry, Astronomy, Earth Sciences, Biology' },
  { code: '600', label: 'Technology (Applied sciences)', keyTopics: 'Medicine, Engineering, Agriculture, Management, Manufacturing' },
  { code: '700', label: 'Arts & recreation', keyTopics: 'Architecture, Painting, Music, Sports, Photography' },
  { code: '800', label: 'Literature', keyTopics: 'Poetry, Drama, Fiction, Rhetoric, World Literatures' },
  { code: '900', label: 'History & geography', keyTopics: 'World History, Geography, Biography, Travel, Genealogy' },
];

// Colon Classification PMEST Connecting Symbols
export const pmestCategories = [
  { facet: 'Personality [P]', symbol: 'Comma (,)', example: 'Main subject facet, fundamental focus of the class' },
  { facet: 'Matter [M]', symbol: 'Semicolon (;)', example: 'Material, constituent substance, property or quality' },
  { facet: 'Energy [E]', symbol: 'Colon (:)', example: 'Action, process, operation, problem or technique' },
  { facet: 'Space [S]', symbol: 'Dot (.)', example: 'Geographical location, country, state, administrative division' },
  { facet: 'Time [T]', symbol: "Single Quote (')", example: 'Historical period, decade, century, season (dot in early editions)' },
];

// Dr. S. R. Ranganathan's Five Laws of Library Science (1931)
export const fiveLawsOfLibraryScience = [
  {
    law: 'First Law',
    title: 'Books are for use',
    implications: 'Open access system, library location in the heart of town, convenient opening hours, comfortable furniture, helpful courteous staff.',
  },
  {
    law: 'Second Law',
    title: 'Every reader his/her book',
    implications: 'Democratic access for all without discrimination, tailored collection development for specialized users, library legislation to fund public libraries.',
  },
  {
    law: 'Third Law',
    title: 'Every book its reader',
    implications: 'Well-organized classified catalogues, open shelves, book exhibitions, promotional displays, extension services, reference service.',
  },
  {
    law: 'Fourth Law',
    title: 'Save the time of the reader',
    implications: 'Classified shelf arrangement, efficient charging/discharging systems (Browne/Newark), OPAC search, quick reference service, stack guide.',
  },
  {
    law: 'Fifth Law',
    title: 'The library is a growing organism',
    implications: 'Growth in books, readers, staff, and physical space; necessitates systematic weeding of outdated books and adoption of digital technology.',
  },
];

// Bihar Library Heritage Landmarks
export const biharLibraryHeritage = [
  {
    name: 'Khuda Bakhsh Oriental Public Library',
    location: 'Patna, Bihar',
    established: '1891 (Declared Institution of National Importance in 1969)',
    significance: 'World-famous repository of over 21,000 rare Arabic, Persian, and Urdu manuscripts, Mughal miniature paintings, and historical documents.',
    icon: '🏛️',
  },
  {
    name: 'Sachchidananda Sinha Library (State Central Library of Bihar)',
    location: 'Patna, Bihar',
    established: '1924 (Founded by Dr. Sachchidananda Sinha)',
    significance: 'Apex public library in Bihar housing over 1.7 lakh volumes, historic gazettes, and parliamentary debates; named after Constituent Assembly President.',
    icon: '📚',
  },
  {
    name: 'Ancient Nalanda University Library (Dharmaganja)',
    location: 'Nalanda, Bihar',
    established: '5th Century CE (Ancient World Heritage)',
    significance: 'Legendary multi-storied library complex consisting of three grand towers: Ratnasagara (Sea of Jewels), Ratnodadhi (Ocean of Jewels), and Ratnaranjaka (Jewel-Adorned).',
    icon: '✨',
  },
];
