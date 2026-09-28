type Difficulty = 'easy' | 'medium' | 'hard';
type SubjectKey = 'library-science' | 'general-knowledge' | 'bihar-gk' | 'reasoning' | 'computer';
type AnswerKey = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: string;
  question: string;
  options: Record<AnswerKey, string>;
  correct: AnswerKey;
  explanation: string;
  subject: SubjectKey;
  unit: string;
  topic: string;
  topicLabel: string;
  difficulty: Difficulty;
  tags?: string[];
}

export const biharGKQuestions: Question[] = [
  {
    id: 'bh-001',
    question: 'Who is considered the founder of Pataliputra?',
    options: { A: 'Bimbisara', B: 'Ajatashatru', C: 'Udayin', D: 'Chandragupta Maurya' },
    correct: 'C',
    explanation: 'Udayin (or Udayabhadra), the son of Ajatashatru, is credited with laying the foundation of the city of Pataliputra at the confluence of the Son and Ganges rivers.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'history-of-bihar',
    topicLabel: 'History of Bihar',
    difficulty: 'medium'
  },
  {
    id: 'bh-002',
    question: 'Which ancient university was located in present-day Bihar and was a great center of learning in the 5th century CE?',
    options: { A: 'Taxila', B: 'Nalanda', C: 'Vikramshila', D: 'Vallabhi' },
    correct: 'B',
    explanation: 'Nalanda University was a renowned Mahavihara (Buddhist monastery) and a great center of learning in ancient Magadha (modern-day Bihar).',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'history-of-bihar',
    topicLabel: 'History of Bihar',
    difficulty: 'easy'
  },
  {
    id: 'bh-003',
    question: 'The famous Vikramshila University was established by which Pala ruler?',
    options: { A: 'Gopala', B: 'Dharmapala', C: 'Devapala', D: 'Ramapala' },
    correct: 'B',
    explanation: 'Vikramshila University was established by King Dharmapala of the Pala dynasty in response to a supposed decline in the quality of scholarship at Nalanda.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'history-of-bihar',
    topicLabel: 'History of Bihar',
    difficulty: 'medium'
  },
  {
    id: 'bh-004',
    question: 'Bodh Gaya, the place where Gautama Buddha attained enlightenment, is situated on the banks of which river?',
    options: { A: 'Ganga', B: 'Falgu', C: 'Son', D: 'Gandak' },
    correct: 'B',
    explanation: 'Bodh Gaya is located on the banks of the Falgu River. It is one of the most important pilgrimage sites for Buddhists worldwide.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'geography-of-bihar',
    topicLabel: 'Geography of Bihar',
    difficulty: 'medium'
  },
  {
    id: 'bh-005',
    question: 'Which river is known as the "Sorrow of Bihar" due to its frequent and devastating floods?',
    options: { A: 'Kosi', B: 'Ganga', C: 'Gandak', D: 'Bagmati' },
    correct: 'A',
    explanation: 'The Kosi River is known as the "Sorrow of Bihar" because of its unstable nature and the severe flooding it causes in the plains of northern Bihar.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'geography-of-bihar',
    topicLabel: 'Geography of Bihar',
    difficulty: 'easy'
  },
  {
    id: 'bh-006',
    question: 'How many districts are there currently in the state of Bihar?',
    options: { A: '35', B: '37', C: '38', D: '40' },
    correct: 'C',
    explanation: 'Bihar is currently divided into 38 administrative districts, which are further grouped into 9 divisions.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-government',
    topicLabel: 'Bihar Government',
    difficulty: 'easy'
  },
  {
    id: 'bh-007',
    question: 'Chhath Puja, the most prominent festival of Bihar, is dedicated to which deity?',
    options: { A: 'Lord Shiva', B: 'Lord Krishna', C: 'Sun God (Surya)', D: 'Goddess Durga' },
    correct: 'C',
    explanation: 'Chhath Puja is an ancient Hindu Vedic festival dedicated to Surya, the Sun God, and Chhathi Maiya, to thank them for bestowing the bounties of life on earth.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'culture-festivals',
    topicLabel: 'Culture & Festivals',
    difficulty: 'easy'
  },
  {
    id: 'bh-008',
    question: 'Madhubani painting, a famous art form of Bihar, is also known by which other name?',
    options: { A: 'Mithila Art', B: 'Bhojpuri Art', C: 'Angika Art', D: 'Magahi Art' },
    correct: 'A',
    explanation: 'Madhubani painting is also known as Mithila Art. It is practiced in the Mithila region of India and Nepal, characterized by eye-catching geometrical patterns.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'culture-festivals',
    topicLabel: 'Culture & Festivals',
    difficulty: 'easy'
  },
  {
    id: 'bh-009',
    question: 'Which of the following is the staple crop of Bihar?',
    options: { A: 'Wheat', B: 'Rice', C: 'Maize', D: 'Sugarcane' },
    correct: 'B',
    explanation: 'Rice is the staple crop of Bihar, grown in almost all districts of the state, especially in the fertile plains of the Ganges basin.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-economy',
    topicLabel: 'Bihar Economy',
    difficulty: 'easy'
  },
  {
    id: 'bh-010',
    question: 'Who was the first Chief Minister of Bihar?',
    options: { A: 'Sri Krishna Sinha', B: 'Anugrah Narayan Sinha', C: 'Karpoori Thakur', D: 'Satyendra Narayan Sinha' },
    correct: 'A',
    explanation: 'Dr. Sri Krishna Sinha, affectionately called Sri Babu, was the first Chief Minister of the Indian state of Bihar (1946-1961).',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-personalities',
    topicLabel: 'Bihar Personalities',
    difficulty: 'medium'
  },
  {
    id: 'bh-011',
    question: 'Under which scheme does the Bihar Government provide ₹50,000 to unmarried girls who complete their graduation?',
    options: { A: 'Kanya Kanya Yojna', B: 'Mukhyamantri Kanya Utthan Yojana', C: 'Balika Shiksha Yojna', D: 'Beti Bachao Beti Padhao' },
    correct: 'B',
    explanation: 'Mukhyamantri Kanya Utthan Yojana is an initiative by the Bihar Government to promote female education, offering ₹50,000 to unmarried girls passing graduation.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-government',
    topicLabel: 'Bihar Government',
    difficulty: 'hard'
  },
  {
    id: 'bh-012',
    question: 'Which major agricultural product of Bihar has received the Geographical Indication (GI) tag recently?',
    options: { A: 'Shahi Litchi', B: 'Malda Mango', C: 'Chiniya Banana', D: 'Hajipur Litchi' },
    correct: 'A',
    explanation: 'Shahi Litchi from Muzaffarpur, Bihar, is renowned for its sweet and juicy flavor and has been granted the Geographical Indication (GI) tag.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-economy',
    topicLabel: 'Bihar Economy',
    difficulty: 'medium'
  },
  {
    id: 'bh-013',
    question: 'Which national park is the only tiger reserve in Bihar?',
    options: { A: 'Rajgir Wildlife Sanctuary', B: 'Valmiki National Park', C: 'Kaimur Wildlife Sanctuary', D: 'Bhimbandh Wildlife Sanctuary' },
    correct: 'B',
    explanation: 'Valmiki National Park, Tiger Reserve and Wildlife Sanctuary is located at the India-Nepal border in the West Champaran district of Bihar. It is the only national park in the state.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'geography-of-bihar',
    topicLabel: 'Geography of Bihar',
    difficulty: 'medium'
  },
  {
    id: 'bh-014',
    question: 'Who among the following from Bihar served as the first President of India?',
    options: { A: 'Dr. Zakir Husain', B: 'Dr. Rajendra Prasad', C: 'Jayaprakash Narayan', D: 'V. V. Giri' },
    correct: 'B',
    explanation: 'Dr. Rajendra Prasad, who was born in the Siwan district of Bihar, served as the first President of independent India.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-personalities',
    topicLabel: 'Bihar Personalities',
    difficulty: 'easy'
  },
  {
    id: 'bh-015',
    question: 'The famous Mahabodhi Temple is located in which city?',
    options: { A: 'Rajgir', B: 'Patna', C: 'Bodh Gaya', D: 'Vaishali' },
    correct: 'C',
    explanation: 'The Mahabodhi Temple Complex is a UNESCO World Heritage Site located in Bodh Gaya, Bihar. It marks the location where the Buddha is said to have attained enlightenment.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'history-of-bihar',
    topicLabel: 'History of Bihar',
    difficulty: 'easy'
  },
  {
    id: 'bh-016',
    question: 'The river Gandak enters Bihar in which district?',
    options: { A: 'Saran', B: 'West Champaran', C: 'Gopalganj', D: 'Muzaffarpur' },
    correct: 'B',
    explanation: 'The river Gandak enters Bihar in the West Champaran district from Nepal and eventually joins the Ganges near Hajipur.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'geography-of-bihar',
    topicLabel: 'Geography of Bihar',
    difficulty: 'hard'
  },
  {
    id: 'bh-017',
    question: 'Which city in Bihar is famous for its silk industry?',
    options: { A: 'Patna', B: 'Bhagalpur', C: 'Gaya', D: 'Darbhanga' },
    correct: 'B',
    explanation: 'Bhagalpur is known as the "Silk City" of India, famous for its Tussar silk and Bhagalpuri silk sarees.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-economy',
    topicLabel: 'Bihar Economy',
    difficulty: 'medium'
  },
  {
    id: 'bh-018',
    question: 'Who led the Revolt of 1857 in Bihar?',
    options: { A: 'Tantia Tope', B: 'Mangal Pandey', C: 'Kunwar Singh', D: 'Nana Sahib' },
    correct: 'C',
    explanation: 'Veer Kunwar Singh of Jagdishpur was a notable leader during the Indian Rebellion of 1857, leading armed forces against the British East India Company in Bihar.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'history-of-bihar',
    topicLabel: 'History of Bihar',
    difficulty: 'medium'
  },
  {
    id: 'bh-019',
    question: 'When is Bihar Diwas celebrated every year?',
    options: { A: '1st April', B: '22nd March', C: '15th November', D: '26th January' },
    correct: 'B',
    explanation: 'Bihar Diwas is celebrated on 22nd March every year to commemorate the carving out of the state of Bihar from the Bengal Presidency by the British in 1912.',
    subject: 'bihar-gk',
    unit: 'bihar-history-geo',
    topic: 'culture-festivals',
    topicLabel: 'Culture & Festivals',
    difficulty: 'easy'
  },
  {
    id: 'bh-020',
    question: 'What is the main objective of the "Saat Nischay" (Seven Resolves) program of the Bihar Government?',
    options: { A: 'To improve industrial development', B: 'To focus on basic infrastructure and human development', C: 'To promote foreign direct investment', D: 'To eradicate malaria from the state' },
    correct: 'B',
    explanation: 'The "Saat Nischay" program aims at basic infrastructure improvement (like roads, electricity, water) and human development (education, skill development) in Bihar.',
    subject: 'bihar-gk',
    unit: 'bihar-economy-admin',
    topic: 'bihar-government',
    topicLabel: 'Bihar Government',
    difficulty: 'hard'
  }
];
