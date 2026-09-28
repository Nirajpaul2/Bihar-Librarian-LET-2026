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

export const reasoningQuestions: Question[] = [
  {
    id: 'rs-001',
    question: 'Book is to Reading as Fork is to:',
    options: { A: 'Eating', B: 'Kitchen', C: 'Spoon', D: 'Silverware' },
    correct: 'A',
    explanation: 'A book is an object used for reading. Similarly, a fork is an object used for eating. This is a functional analogy.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'easy'
  },
  {
    id: 'rs-002',
    question: 'Tree is to Forest as Soldier is to:',
    options: { A: 'Gun', B: 'Army', C: 'Uniform', D: 'Battle' },
    correct: 'B',
    explanation: 'A forest is made up of many trees (part to whole relationship). Similarly, an army is made up of many soldiers.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'easy'
  },
  {
    id: 'rs-003',
    question: 'Thermometer is to Temperature as Barometer is to:',
    options: { A: 'Humidity', B: 'Wind', C: 'Pressure', D: 'Rainfall' },
    correct: 'C',
    explanation: 'A thermometer is an instrument used to measure temperature. A barometer is an instrument used to measure atmospheric pressure.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'medium'
  },
  {
    id: 'rs-004',
    question: 'If LION is to ROAR, then HORSE is to:',
    options: { A: 'BLEAT', B: 'NEIGH', C: 'GRUNT', D: 'BRAY' },
    correct: 'B',
    explanation: 'A lion\'s characteristic sound is a roar. A horse\'s characteristic sound is a neigh.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'easy'
  },
  {
    id: 'rs-005',
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
    options: { A: '40', B: '42', C: '44', D: '46' },
    correct: 'B',
    explanation: 'The difference between consecutive terms is increasing by 2 each time: +4, +6, +8, +10. The next difference will be +12. So, 30 + 12 = 42. Alternatively, the pattern is 1x2, 2x3, 3x4, 4x5, 5x6, so next is 6x7 = 42.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'medium'
  },
  {
    id: 'rs-006',
    question: 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
    options: { A: '20', B: '22', C: '23', D: '26' },
    correct: 'B',
    explanation: 'This is an alternating subtraction series. First, 2 is subtracted, then 4 is subtracted, then 2, then 4. So: 36-2=34; 34-4=30; 30-2=28; 28-4=24. The next operation is subtract 2: 24-2=22.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'medium'
  },
  {
    id: 'rs-007',
    question: 'Find the missing term: 1, 9, 25, 49, ?, 121',
    options: { A: '64', B: '81', C: '91', D: '100' },
    correct: 'B',
    explanation: 'The series consists of squares of consecutive odd numbers: 1², 3², 5², 7², 9², 11². The missing term is 9² = 81.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'easy'
  },
  {
    id: 'rs-008',
    question: 'What comes next in the sequence: 5, 11, 23, 47, 95, ?',
    options: { A: '189', B: '190', C: '191', D: '192' },
    correct: 'C',
    explanation: 'The pattern is (previous number × 2) + 1. So, (5×2)+1=11; (11×2)+1=23; (23×2)+1=47; (47×2)+1=95. The next number is (95×2)+1 = 191.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'hard'
  },
  {
    id: 'rs-009',
    question: 'If in a certain language, MADRAS is coded as NBESBT, how is BOMBAY coded in that language?',
    options: { A: 'CPNCBX', B: 'CPNCBZ', C: 'CPOCBZ', D: 'CQOCBZ' },
    correct: 'B',
    explanation: 'Each letter in the word is moved one step forward in the English alphabet. M becomes N, A becomes B, D becomes E, etc. Applying this to BOMBAY: B->C, O->P, M->N, B->C, A->B, Y->Z. Thus, CPNCBZ.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'easy'
  },
  {
    id: 'rs-010',
    question: 'If CAT is coded as 3120, what is the code for DOG?',
    options: { A: '4157', B: '4147', C: '4158', D: '4167' },
    correct: 'A',
    explanation: 'The code represents the numerical position of the letters in the English alphabet. C=3, A=1, T=20, hence 3120. For DOG: D=4, O=15, G=7, hence 4157.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'medium'
  },
  {
    id: 'rs-011',
    question: 'If WATER is written as YCVGT, then what is written as HKTG?',
    options: { A: 'FIRE', B: 'COLD', C: 'HEAT', D: 'SNOW' },
    correct: 'A',
    explanation: 'The pattern is +2 letters forward: W->Y, A->C, T->V, E->G, R->T. To find the original word for HKTG, we must go backwards by 2 letters: H->F, K->I, T->R, G->E. Thus, FIRE.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'medium'
  },
  {
    id: 'rs-012',
    question: 'In a certain code, "786" means "study very hard", "958" means "hard work pays" and "645" means "study and work". Which digit stands for "very"?',
    options: { A: '7', B: '8', C: '6', D: '9' },
    correct: 'A',
    explanation: 'Comparing 1 and 2: "786" & "958" share "8" and "hard", so 8 = hard. Comparing 1 and 3: "786" & "645" share "6" and "study", so 6 = study. From "786" (study very hard), we now know 8=hard, 6=study, so the remaining digit 7 must stand for "very".',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'hard'
  },
  {
    id: 'rs-013',
    question: 'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
    options: { A: 'Brother', B: 'Uncle', C: 'Cousin', D: 'Father' },
    correct: 'D',
    explanation: 'The "only son of my mother" refers to Suresh himself. Therefore, the boy in the photograph is the son of Suresh. So, Suresh is the father of the boy.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'easy'
  },
  {
    id: 'rs-014',
    question: 'If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?',
    options: { A: 'Brother', B: 'Sister', C: 'Nephew', D: 'Cannot be determined' },
    correct: 'D',
    explanation: 'A and B are siblings of C. C is the father of D. Therefore, A is the uncle of D. However, the gender of D is not specified in the question. D could be A\'s nephew or niece. Thus, it cannot be determined.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'medium'
  },
  {
    id: 'rs-015',
    question: 'Introducing a woman, a man said, "Her mother is the only daughter of my mother-in-law." How is the man related to the woman?',
    options: { A: 'Son', B: 'Father', C: 'Brother', D: 'Husband' },
    correct: 'B',
    explanation: 'The "only daughter of my mother-in-law" refers to the man\'s wife. So, the woman\'s mother is the man\'s wife. Therefore, the man is the father of the woman.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'medium'
  },
  {
    id: 'rs-016',
    question: 'Q\'s mother is sister of P and daughter of M. S is daughter of P and sister of T. How is M related to T?',
    options: { A: 'Grandmother', B: 'Father', C: 'Grandfather', D: 'Grandfather or Grandmother' },
    correct: 'D',
    explanation: 'M is the parent of P and Q\'s mother. P is the parent of S and T. Therefore, M is the grandparent of S and T. Since M\'s gender is not given, M is either the Grandfather or Grandmother of T.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'hard'
  },
  {
    id: 'rs-017',
    question: 'A man walks 5 km towards South and then turns to the right. After walking 3 km he turns to the left and walks 4 km. In which direction is he from the starting point?',
    options: { A: 'South-West', B: 'South', C: 'North-West', D: 'South-East' },
    correct: 'A',
    explanation: 'He starts and goes South (5 km), turns right (West) and walks 3 km, turns left (South) and walks 4 km. From the start point, he has moved South and West. Thus, he is in the South-West direction from the starting point.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'medium'
  },
  {
    id: 'rs-018',
    question: 'Rohan walks 20 meters North, then he turns right and walks 30 meters, then he turns right and walks 35 meters, then he turns left and walks 15 meters, finally he turns left and walks 15 meters. In which direction and how many meters is he from the starting position?',
    options: { A: '45 meters East', B: '45 meters West', C: '30 meters East', D: '30 meters West' },
    correct: 'A',
    explanation: 'North 20m, Right(East) 30m, Right(South) 35m, Left(East) 15m, Left(North) 15m. Vertical movement: 20(N) - 35(S) + 15(N) = 0. He is exactly horizontal to start. Horizontal movement: 30(E) + 15(E) = 45m East.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'hard'
  },
  {
    id: 'rs-019',
    question: 'I am facing East. I turn 100 degrees in the clockwise direction and then 145 degrees in the anti-clockwise direction. Which direction am I facing now?',
    options: { A: 'East', B: 'North-East', C: 'North', D: 'South-West' },
    correct: 'B',
    explanation: 'Net turn = 145 degrees anti-clockwise - 100 degrees clockwise = 45 degrees anti-clockwise. Starting from East, turning 45 degrees anti-clockwise places you facing North-East.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'medium'
  },
  {
    id: 'rs-020',
    question: 'One morning after sunrise, Vimal started to walk. During this walking he met Stephen who was coming from opposite direction. Vimal watch that the shadow of Stephen to the right of him (Vimal). To Which direction Vimal was facing?',
    options: { A: 'East', B: 'West', C: 'South', D: 'North' },
    correct: 'C',
    explanation: 'In the morning (sunrise), shadows fall towards the West. If Stephen\'s shadow is to Vimal\'s right, it means Vimal\'s right is West. If Vimal\'s right is West, he must be facing South.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'hard'
  },
  {
    id: 'rs-021',
    question: 'Statements: 1. All dogs are cats. 2. All cats are bats. Conclusion: I. All dogs are bats. II. Some bats are dogs.',
    options: { A: 'Only conclusion I follows', B: 'Only conclusion II follows', C: 'Both conclusion I and II follow', D: 'Neither conclusion I nor II follows' },
    correct: 'C',
    explanation: 'If all dogs are inside cats, and all cats are inside bats, then all dogs are definitively inside bats (I follows). Since all dogs are bats, some bats are indeed dogs (II follows). Both are true.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'syllogism',
    topicLabel: 'Syllogism',
    difficulty: 'medium'
  },
  {
    id: 'rs-022',
    question: 'Statements: 1. Some pens are pencils. 2. No pencil is an eraser. Conclusion: I. No eraser is a pen. II. Some pens are not erasers.',
    options: { A: 'Only conclusion I follows', B: 'Only conclusion II follows', C: 'Either I or II follows', D: 'Neither I nor II follows' },
    correct: 'B',
    explanation: 'Since some pens are pencils, and no pencil is an eraser, the part of the pens that are pencils can never be erasers. Thus, some pens are not erasers (II follows). We cannot definitively say No eraser is a pen. So only II follows.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'syllogism',
    topicLabel: 'Syllogism',
    difficulty: 'hard'
  },
  {
    id: 'rs-023',
    question: 'Statements: A large number of people die every year due to drinking polluted water during the summer. Courses of Action: I. The government should make adequate arrangements to provide safe drinking water to all its citizens. II. The people should be educated about the dangers of drinking polluted water.',
    options: { A: 'Only I follows', B: 'Only II follows', C: 'Either I or II follows', D: 'Both I and II follow' },
    correct: 'D',
    explanation: 'Both actions are appropriate responses. Providing safe drinking water tackles the root cause, and educating people helps them avoid the danger until the infrastructure is fully secure.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'statement-conclusion',
    topicLabel: 'Statement & Conclusion',
    difficulty: 'easy'
  },
  {
    id: 'rs-024',
    question: 'Which word does NOT belong with the others?',
    options: { A: 'Apple', B: 'Orange', C: 'Tomato', D: 'Potato' },
    correct: 'D',
    explanation: 'Apple, Orange, and Tomato are all technically fruits (botanically speaking, containing seeds). Potato is a root vegetable (tuber). Even culinarily, potato is clearly distinct as a root vegetable.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Classification',
    difficulty: 'easy'
  },
  {
    id: 'rs-025',
    question: 'A, B, C, D and E are sitting on a bench. A is sitting next to B, C is sitting next to D, D is not sitting with E who is on the left end of the bench. C is on the second position from the right. A is to the right of B and E. A and C are sitting together. In which position is A sitting?',
    options: { A: 'Between B and D', B: 'Between B and C', C: 'Between E and D', D: 'Between C and E' },
    correct: 'B',
    explanation: 'E is at left end. C is 2nd from right. A and C sit together, so A is in the middle. B is to the left of A. D is on the extreme right (next to C). Order: E, B, A, C, D. A sits between B and C.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'puzzles-seating',
    topicLabel: 'Seating Arrangement',
    difficulty: 'hard'
  },
  {
    id: 'rs-026',
    question: 'Effect: Many people in the area are suffering from severe respiratory problems. Which of the following could be a possible Cause?',
    options: { A: 'The city has established a new hospital.', B: 'A new chemical factory recently started operating without emission controls.', C: 'There has been heavy rainfall in the past week.', D: 'The government reduced taxes on medicines.' },
    correct: 'B',
    explanation: 'A chemical factory operating without emission controls releases pollutants into the air, which directly causes respiratory problems for residents in the area.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'cause-effect',
    topicLabel: 'Cause & Effect',
    difficulty: 'easy'
  },
  {
    id: 'rs-027',
    question: 'If + means x, - means ÷, x means - and ÷ means +, then what is the value of: 16 ÷ 4 x 10 - 5 + 2 = ?',
    options: { A: '12', B: '14', C: '16', D: '18' },
    correct: 'C',
    explanation: 'Applying the substitutions: 16 + 4 - 10 ÷ 5 x 2. Using BODMAS rule: First division (10/5 = 2). Then multiplication (2 x 2 = 4). Equation becomes: 16 + 4 - 4 = 16.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Mathematical Operations',
    difficulty: 'medium'
  },
  {
    id: 'rs-028',
    question: 'How many meaningful English words can be formed using the letters A, L, P, E exactly once?',
    options: { A: 'One', B: 'Two', C: 'Three', D: 'More than three' },
    correct: 'C',
    explanation: 'The letters A, L, P, E can be rearranged to form three meaningful words: PALE, PEAL, and LEAP.',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Word Formation',
    difficulty: 'medium'
  },
  {
    id: 'rs-029',
    question: 'Which of the following diagrams indicates the best relation between Travelers, Train and Bus?',
    options: { A: 'One large circle containing two smaller separate circles', B: 'Three intersecting circles', C: 'One circle intersecting two separate circles', D: 'Three separate circles' },
    correct: 'C',
    explanation: 'Train and Bus are two entirely different modes of transport (two separate circles). However, Travelers travel by both Train and Bus (one circle intersecting the two separate circles).',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'syllogism',
    topicLabel: 'Venn Diagrams',
    difficulty: 'medium'
  },
  {
    id: 'rs-030',
    question: 'Find the odd one out: 8, 27, 64, 100, 125, 216',
    options: { A: '27', B: '64', C: '100', D: '125' },
    correct: 'C',
    explanation: 'All the numbers in the series except 100 are perfect cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216. 100 is a perfect square (10²), not a cube.',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'easy'
  }
];
