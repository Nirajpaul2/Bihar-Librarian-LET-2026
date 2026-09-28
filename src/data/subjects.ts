import type { Subject } from '@/types';

export const subjects: Subject[] = [
  {
    id: 'library-science',
    label: 'Library & Information Science',
    shortLabel: 'Library Science',
    description: 'Foundations, Classification, Cataloguing, Management, Reference Services, IT & Digital Libraries',
    color: 'blue',
    icon: '📚',
    units: [
      {
        id: 'foundations',
        label: 'Unit 1: Foundations of Library Science',
        topics: [
          { id: 'concept-of-library', label: 'Concept of Library' },
          { id: 'functions-of-libraries', label: 'Functions of Libraries' },
          { id: 'types-of-libraries', label: 'Types of Libraries' },
          { id: 'history-development', label: 'History & Development of Libraries' },
          { id: 'five-laws', label: 'Five Laws of Library Science' },
          { id: 'ranganathan', label: 'Ranganathan' },
          { id: 'library-associations', label: 'Library Associations (ILA, ALA, IFLA)' },
        ],
      },
      {
        id: 'knowledge-organisation',
        label: 'Unit 2: Knowledge Organisation',
        topics: [
          { id: 'classification-principles', label: 'Classification Principles' },
          { id: 'ddc', label: 'Dewey Decimal Classification (DDC)' },
          { id: 'colon-classification', label: 'Colon Classification (CC)' },
          { id: 'udc', label: 'Universal Decimal Classification (UDC)' },
          { id: 'facet-analysis', label: 'Facet Analysis' },
          { id: 'cataloguing', label: 'Cataloguing' },
          { id: 'aacr2', label: 'AACR2' },
          { id: 'rda', label: 'RDA' },
          { id: 'catalogue-types', label: 'Types of Catalogue' },
          { id: 'marc', label: 'MARC' },
          { id: 'bibliographic-description', label: 'Bibliographic Description' },
        ],
      },
      {
        id: 'library-management',
        label: 'Unit 3: Library Management',
        topics: [
          { id: 'library-administration', label: 'Library Administration' },
          { id: 'acquisition', label: 'Acquisition & Collection Development' },
          { id: 'circulation', label: 'Circulation Services' },
          { id: 'stock-verification', label: 'Stock Verification & Weeding' },
          { id: 'budget-accounting', label: 'Budget & Accounting' },
          { id: 'periodical-management', label: 'Periodical Management' },
          { id: 'human-resource', label: 'Human Resource Management' },
        ],
      },
      {
        id: 'reference-services',
        label: 'Unit 4: Reference & Information Services',
        topics: [
          { id: 'reference-service', label: 'Reference Service' },
          { id: 'reference-sources', label: 'Reference Sources' },
          { id: 'encyclopedias', label: 'Encyclopedias & Dictionaries' },
          { id: 'bibliographies', label: 'Bibliographies & Directories' },
          { id: 'user-education', label: 'User Education & Information Literacy' },
          { id: 'document-delivery', label: 'Document Delivery & ILL' },
        ],
      },
      {
        id: 'it-computer',
        label: 'Unit 5: Information Technology & Computer Basics',
        topics: [
          { id: 'computer-fundamentals', label: 'Computer Fundamentals' },
          { id: 'internet-networking', label: 'Internet & Networking' },
          { id: 'library-automation', label: 'Library Automation' },
          { id: 'library-software', label: 'Library Software (KOHA, SOUL, e-Granthalaya)' },
          { id: 'digital-technology', label: 'Digital Technology & Cyber Security' },
        ],
      },
      {
        id: 'networks-digital',
        label: 'Unit 6: Library Networks & Digital Libraries',
        topics: [
          { id: 'inflibnet-delnet', label: 'INFLIBNET & DELNET' },
          { id: 'library-networks', label: 'Library Networks & Resource Sharing' },
          { id: 'digital-libraries', label: 'Digital Libraries & Repositories' },
          { id: 'bibliometrics', label: 'Bibliometrics & Webometrics' },
          { id: 'information-seeking', label: 'Information Seeking Behaviour' },
        ],
      },
    ],
  },
  {
    id: 'general-knowledge',
    label: 'General Knowledge',
    shortLabel: 'GK',
    description: 'Indian History, Polity, Geography, Economy, Science & Technology',
    color: 'green',
    icon: '🌏',
    units: [
      {
        id: 'indian-history',
        label: 'Indian History',
        topics: [
          { id: 'ancient-history', label: 'Ancient History' },
          { id: 'medieval-history', label: 'Medieval History' },
          { id: 'modern-history', label: 'Modern History & Freedom Movement' },
        ],
      },
      {
        id: 'indian-polity',
        label: 'Indian Polity & Constitution',
        topics: [
          { id: 'constitution', label: 'Indian Constitution' },
          { id: 'fundamental-rights', label: 'Fundamental Rights & Duties' },
          { id: 'parliament', label: 'Parliament & Government' },
          { id: 'judiciary', label: 'Judiciary' },
        ],
      },
      {
        id: 'geography-economy',
        label: 'Geography & Economy',
        topics: [
          { id: 'indian-geography', label: 'Indian Geography' },
          { id: 'indian-economy', label: 'Indian Economy & Banking' },
        ],
      },
      {
        id: 'science-culture',
        label: 'Science, Culture & Awards',
        topics: [
          { id: 'science-technology', label: 'Science & Technology' },
          { id: 'culture-awards', label: 'Culture, Awards & Government Schemes' },
        ],
      },
    ],
  },
  {
    id: 'bihar-gk',
    label: 'Bihar General Knowledge',
    shortLabel: 'Bihar GK',
    description: 'History, Geography, Culture, Economy, Government Schemes of Bihar',
    color: 'amber',
    icon: '🏛️',
    units: [
      {
        id: 'bihar-history-geo',
        label: 'Bihar History & Geography',
        topics: [
          { id: 'history-of-bihar', label: 'History of Bihar' },
          { id: 'geography-of-bihar', label: 'Geography of Bihar (Rivers, Districts)' },
          { id: 'culture-festivals', label: 'Culture & Festivals of Bihar' },
        ],
      },
      {
        id: 'bihar-economy-admin',
        label: 'Bihar Economy & Administration',
        topics: [
          { id: 'bihar-economy', label: 'Economy & Agriculture of Bihar' },
          { id: 'bihar-government', label: 'Bihar Government Schemes' },
          { id: 'bihar-personalities', label: 'Important Personalities & Places' },
        ],
      },
    ],
  },
  {
    id: 'reasoning',
    label: 'Reasoning & Analytical Ability',
    shortLabel: 'Reasoning',
    description: 'Analogy, Series, Coding-Decoding, Blood Relations, Syllogism, Puzzles',
    color: 'purple',
    icon: '🧩',
    units: [
      {
        id: 'verbal-reasoning',
        label: 'Verbal Reasoning',
        topics: [
          { id: 'analogy', label: 'Analogy & Classification' },
          { id: 'series', label: 'Number & Alphabet Series' },
          { id: 'coding-decoding', label: 'Coding-Decoding' },
          { id: 'blood-relations', label: 'Blood Relations' },
          { id: 'direction-sense', label: 'Direction Sense & Ranking' },
          { id: 'syllogism', label: 'Syllogism & Venn Diagram' },
        ],
      },
      {
        id: 'logical-reasoning',
        label: 'Logical Reasoning',
        topics: [
          { id: 'statement-conclusion', label: 'Statement & Conclusion' },
          { id: 'puzzles-seating', label: 'Puzzles & Seating Arrangement' },
          { id: 'cause-effect', label: 'Cause & Effect' },
        ],
      },
    ],
  },
  {
    id: 'computer',
    label: 'Computer Awareness',
    shortLabel: 'Computer',
    description: 'Hardware, Software, OS, MS Office, Internet, Networking, Cyber Security',
    color: 'rose',
    icon: '💻',
    units: [
      {
        id: 'computer-basics',
        label: 'Computer Basics',
        topics: [
          { id: 'hardware-software', label: 'Hardware & Software' },
          { id: 'operating-systems', label: 'Operating Systems & Memory' },
          { id: 'ms-office', label: 'MS Office (Word, Excel, PowerPoint)' },
        ],
      },
      {
        id: 'internet-security',
        label: 'Internet & Security',
        topics: [
          { id: 'internet-email', label: 'Internet, Email & Networking' },
          { id: 'cyber-security', label: 'Cyber Security & Digital Technology' },
        ],
      },
    ],
  },
];

export function getSubjectById(id: string) {
  return subjects.find(s => s.id === id);
}

export function getUnitById(subjectId: string, unitId: string) {
  const subject = getSubjectById(subjectId);
  return subject?.units.find(u => u.id === unitId);
}

export function getTopicById(subjectId: string, unitId: string, topicId: string) {
  const unit = getUnitById(subjectId, unitId);
  return unit?.topics.find(t => t.id === topicId);
}
