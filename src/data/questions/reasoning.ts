import type { Question } from '@/types';

export const reasoningQuestions: Question[] = [
  {
    id: 'rs-001',
    question: 'Book is to Reading as Fork is to:',
    questionHindi: 'पुस्तक का संबंध पढ़ने से है, तो कांटा (Fork) का संबंध किससे होगा?',
    options: { A: 'Eating', B: 'Kitchen', C: 'Spoon', D: 'Silverware' },
    optionsHindi: { A: 'खाने (Eating) से', B: 'रसोईघर से', C: 'चम्मच से', D: 'कटलरी से' },
    correct: 'A',
    explanation: 'A book is an object used for reading. Similarly, a fork is an object used for eating. This is a functional analogy.',
    explanationHindi: 'जिस प्रकार पुस्तक का प्राथमिक कार्य पढ़ना है, उसी प्रकार कांटे (Fork) का प्राथमिक कार्य भोजन खाना है। यह एक कार्यात्मक सादृश्यता (Analogy) है।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'easy'
  },
  {
    id: 'rs-002',
    question: 'Tree is to Forest as Soldier is to:',
    questionHindi: 'पेड़ का संबंध जंगल से है, तो सैनिक (Soldier) का संबंध किससे होगा?',
    options: { A: 'Gun', B: 'Army', C: 'Uniform', D: 'Battle' },
    optionsHindi: { A: 'बंदूक', B: 'सेना (Army)', C: 'वर्दी', D: 'युद्ध' },
    correct: 'B',
    explanation: 'A forest is made up of many trees (part to whole relationship). Similarly, an army is made up of many soldiers.',
    explanationHindi: 'अनेक पेड़ों के समूह से जंगल बनता है (अंग-समूह संबंध)। उसी प्रकार अनेक सैनिकों के समूह से सेना (Army) बनती है।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'easy'
  },
  {
    id: 'rs-003',
    question: 'Thermometer is to Temperature as Barometer is to:',
    questionHindi: 'थर्मामीटर का संबंध तापमान से है, तो बैरोमीटर (Barometer) का संबंध किससे होगा?',
    options: { A: 'Humidity', B: 'Wind', C: 'Pressure', D: 'Rainfall' },
    optionsHindi: { A: 'आर्द्रता (नमी)', B: 'हवा', C: 'वायुमंडलीय दबाव (Atmospheric Pressure)', D: 'वर्षा' },
    correct: 'C',
    explanation: 'A thermometer is an instrument used to measure temperature. A barometer is an instrument used to measure atmospheric pressure.',
    explanationHindi: 'थर्मामीटर तापमान मापने का उपकरण है, जबकि बैरोमीटर वायुमंडलीय दाब मापने का वैज्ञानिक यंत्र है।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'medium'
  },
  {
    id: 'rs-004',
    question: 'If LION is to ROAR, then HORSE is to:',
    questionHindi: 'शेर का संबंध दहाड़ने (ROAR) से है, तो घोड़े का संबंध किससे होगा?',
    options: { A: 'BLEAT', B: 'NEIGH', C: 'GRUNT', D: 'BRAY' },
    optionsHindi: { A: 'मिमियाना (Bleat)', B: 'हिनहिनाना (Neigh)', C: 'घुरघुराना (Grunt)', D: 'रेंकना (Bray)' },
    correct: 'B',
    explanation: 'A lion\'s characteristic sound is a roar. A horse\'s characteristic sound is a neigh.',
    explanationHindi: 'शेर की प्राकृतिक आवाज दहाड़ना (Roar) है, जबकि घोड़े की प्राकृतिक बोली हिनहिनाना (Neigh) होती है। (गधा रेंकता है, बकरी मिमियाती है)।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Analogy',
    difficulty: 'easy'
  },
  {
    id: 'rs-005',
    question: 'Find the next number in the series: 2, 6, 12, 20, 30, ?',
    questionHindi: 'श्रृंखला में अगली संख्या ज्ञात कीजिए: 2, 6, 12, 20, 30, ?',
    options: { A: '40', B: '42', C: '44', D: '46' },
    optionsHindi: { A: '40', B: '42', C: '44', D: '46' },
    correct: 'B',
    explanation: 'The difference between consecutive terms is increasing by 2 each time: +4, +6, +8, +10. The next difference will be +12. So, 30 + 12 = 42. Alternatively, the pattern is 1x2, 2x3, 3x4, 4x5, 5x6, so next is 6x7 = 42.',
    explanationHindi: 'पदों के बीच का अंतर: 6-2=4, 12-6=6, 20-12=8, 30-20=10 (अंतर 2-2 बढ़ता जा रहा है)। अगला अंतर 10+2=12 होगा। अतः 30 + 12 = 42। (अथवा 1×2, 2×3, 3×4, 4×5, 5×6, 6×7 = 42)।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'medium'
  },
  {
    id: 'rs-006',
    question: 'Look at this series: 36, 34, 30, 28, 24, ... What number should come next?',
    questionHindi: 'इस श्रृंखला को देखें: 36, 34, 30, 28, 24, ... अगली संख्या क्या आनी चाहिए?',
    options: { A: '20', B: '22', C: '23', D: '26' },
    optionsHindi: { A: '20', B: '22', C: '23', D: '26' },
    correct: 'B',
    explanation: 'This is an alternating subtraction series. First, 2 is subtracted, then 4 is subtracted, then 2, then 4. So: 36-2=34; 34-4=30; 30-2=28; 28-4=24. The next operation is subtract 2: 24-2=22.',
    explanationHindi: 'यह एकांतर घटाव श्रृंखला है: पहले -2, फिर -4, फिर -2, फिर -4। 36-2=34; 34-4=30; 30-2=28; 28-4=24। अब -2 होगा: 24 - 2 = 22।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'medium'
  },
  {
    id: 'rs-007',
    question: 'Find the missing term: 1, 9, 25, 49, ?, 121',
    questionHindi: 'लुप्त पद ज्ञात कीजिए: 1, 9, 25, 49, ?, 121',
    options: { A: '64', B: '81', C: '91', D: '100' },
    optionsHindi: { A: '64', B: '81', C: '91', D: '100' },
    correct: 'B',
    explanation: 'The series consists of squares of consecutive odd numbers: 1², 3², 5², 7², 9², 11². The missing term is 9² = 81.',
    explanationHindi: 'यह क्रमागत विषम संख्याओं के वर्गों (Squares) की श्रृंखला है: 1²=1, 3²=9, 5²=25, 7²=49, 9²=81, 11²=121। अतः लुप्त पद 81 है।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'easy'
  },
  {
    id: 'rs-008',
    question: 'What comes next in the sequence: 5, 11, 23, 47, 95, ?',
    questionHindi: 'अनुक्रम में अगला पद क्या होगा: 5, 11, 23, 47, 95, ?',
    options: { A: '189', B: '190', C: '191', D: '192' },
    optionsHindi: { A: '189', B: '190', C: '191', D: '192' },
    correct: 'C',
    explanation: 'The pattern is (previous number × 2) + 1. So, (5×2)+1=11; (11×2)+1=23; (23×2)+1=47; (47×2)+1=95. The next number is (95×2)+1 = 191.',
    explanationHindi: 'पैटर्न है: (पिछली संख्या × 2) + 1। (5×2)+1=11, (11×2)+1=23, (23×2)+1=47, (47×2)+1=95। अगला पद = (95 × 2) + 1 = 190 + 1 = 191।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'hard'
  },
  {
    id: 'rs-009',
    question: 'If in a certain language, MADRAS is coded as NBESBT, how is BOMBAY coded in that language?',
    questionHindi: 'यदि किसी सांकेतिक भाषा में MADRAS को NBESBT लिखा जाता है, तो उसी कूट भाषा में BOMBAY को कैसे लिखा जाएगा?',
    options: { A: 'CPNCBX', B: 'CPNCBZ', C: 'CPOCBZ', D: 'CQOCBZ' },
    optionsHindi: { A: 'CPNCBX', B: 'CPNCBZ', C: 'CPOCBZ', D: 'CQOCBZ' },
    correct: 'B',
    explanation: 'Each letter in the word is moved one step forward in the English alphabet. M becomes N, A becomes B, D becomes E, etc. Applying this to BOMBAY: B->C, O->P, M->N, B->C, A->B, Y->Z. Thus, CPNCBZ.',
    explanationHindi: 'प्रत्येक अक्षर में +1 की वृद्धि हो रही है: M(+1)=N, A(+1)=B, D(+1)=E... इसी प्रकार BOMBAY के लिए: B(+1)=C, O(+1)=P, M(+1)=N, B(+1)=C, A(+1)=B, Y(+1)=Z। परिणाम = CPNCBZ।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'easy'
  },
  {
    id: 'rs-010',
    question: 'If CAT is coded as 3120, what is the code for DOG?',
    questionHindi: 'यदि CAT को 3120 कोडित किया जाता है, तो DOG का कूट क्या होगा?',
    options: { A: '4157', B: '4147', C: '4158', D: '4167' },
    optionsHindi: { A: '4157', B: '4147', C: '4158', D: '4167' },
    correct: 'A',
    explanation: 'The code represents the numerical position of the letters in the English alphabet. C=3, A=1, T=20, hence 3120. For DOG: D=4, O=15, G=7, hence 4157.',
    explanationHindi: 'अंग्रेजी वर्णमाला में अक्षरों का स्थानीय मान: C=3, A=1, T=20 मिलाकर बना 3120। DOG के लिए: D=4, O=15, G=7 मिलाकर बनेगा 4157।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'medium'
  },
  {
    id: 'rs-011',
    question: 'If WATER is written as YCVGT, then what is written as HKTG?',
    questionHindi: 'यदि WATER को YCVGT लिखा जाता है, तो किस शब्द को HKTG लिखा जाएगा?',
    options: { A: 'FIRE', B: 'COLD', C: 'HEAT', D: 'SNOW' },
    optionsHindi: { A: 'FIRE', B: 'COLD', C: 'HEAT', D: 'SNOW' },
    correct: 'A',
    explanation: 'The pattern is +2 letters forward: W->Y, A->C, T->V, E->G, R->T. To find the original word for HKTG, we must go backwards by 2 letters: H->F, K->I, T->R, G->E. Thus, FIRE.',
    explanationHindi: 'मूल शब्द से कूट में +2 की वृद्धि है। अतः कूट HKTG का मूल शब्द प्राप्त करने के लिए -2 करेंगे: H-2=F, K-2=I, T-2=R, G-2=E। मूल शब्द होगा FIRE।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'medium'
  },
  {
    id: 'rs-012',
    question: 'In a certain code, "786" means "study very hard", "958" means "hard work pays" and "645" means "study and work". Which digit stands for "very"?',
    questionHindi: 'एक निश्चित कूट भाषा में, "786" का अर्थ "study very hard" है, "958" का अर्थ "hard work pays" है और "645" का अर्थ "study and work" है। कौन सा अंक "very" को दर्शाता है?',
    options: { A: '7', B: '8', C: '6', D: '9' },
    optionsHindi: { A: '7', B: '8', C: '6', D: '9' },
    correct: 'A',
    explanation: 'Comparing 1 and 2: "786" & "958" share "8" and "hard", so 8 = hard. Comparing 1 and 3: "786" & "645" share "6" and "study", so 6 = study. From "786" (study very hard), we now know 8=hard, 6=study, so the remaining digit 7 must stand for "very".',
    explanationHindi: '786 और 958 में उभयनिष्ठ शब्द "hard" तथा उभयनिष्ठ अंक 8 है, अतः 8 = hard। 786 और 645 में उभयनिष्ठ शब्द "study" तथा उभयनिष्ठ अंक 6 है, अतः 6 = study। "786" में शेष बचा शब्द "very" है जिसका अंक 7 होगा।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Coding-Decoding',
    difficulty: 'hard'
  },
  {
    id: 'rs-013',
    question: 'Pointing to a photograph of a boy, Suresh said, "He is the son of the only son of my mother." How is Suresh related to that boy?',
    questionHindi: 'एक लड़के की तस्वीर की ओर इशारा करते हुए सुरेश ने कहा, "वह मेरी माँ के इकलौते पुत्र का पुत्र है।" सुरेश उस लड़के से किस प्रकार संबंधित है?',
    options: { A: 'Brother', B: 'Uncle', C: 'Cousin', D: 'Father' },
    optionsHindi: { A: 'भाई', B: 'चाचा', C: 'चचेरा भाई', D: 'पिता (Father)' },
    correct: 'D',
    explanation: 'The "only son of my mother" refers to Suresh himself. Therefore, the boy in the photograph is the son of Suresh. So, Suresh is the father of the boy.',
    explanationHindi: '"सुरेश की माँ का इकलौता पुत्र" स्वयं सुरेश होगा। और तस्वीर वाला लड़का उसका पुत्र है, अतः सुरेश उस लड़के का "पिता" है।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'easy'
  },
  {
    id: 'rs-014',
    question: 'If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?',
    questionHindi: 'यदि A, B का भाई है; B, C की बहन है; और C, D का पिता है, तो D का A से क्या संबंध है?',
    options: { A: 'Brother', B: 'Sister', C: 'Nephew', D: 'Cannot be determined' },
    optionsHindi: { A: 'भाई', B: 'बहन', C: 'भतीजा', D: 'निर्धारित नहीं किया जा सकता (लिंग अज्ञात)' },
    correct: 'D',
    explanation: 'A and B are siblings of C. C is the father of D. Therefore, A is the uncle of D. However, the gender of D is not specified in the question. D could be A\'s nephew or niece. Thus, it cannot be determined.',
    explanationHindi: 'A और B, C के भाई-बहन हैं तथा C, D का पिता है। अतः A, D का चाचा है। किन्तु प्रश्न में D का लिंग (पुरुष या महिला) नहीं दिया गया है। वह भतीजा या भतीजी कुछ भी हो सकता है, अतः निर्धारित नहीं किया जा सकता।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'medium'
  },
  {
    id: 'rs-015',
    question: 'Introducing a woman, a man said, "Her mother is the only daughter of my mother-in-law." How is the man related to the woman?',
    questionHindi: 'एक महिला का परिचय कराते हुए एक पुरुष ने कहा, "इसकी माँ मेरी सास की इकलौती पुत्री है।" वह पुरुष उस महिला से किस प्रकार संबंधित है?',
    options: { A: 'Son', B: 'Father', C: 'Brother', D: 'Husband' },
    optionsHindi: { A: 'पुत्र', B: 'पिता (Father)', C: 'भाई', D: 'पति' },
    correct: 'B',
    explanation: 'The "only daughter of my mother-in-law" refers to the man\'s wife. So, the woman\'s mother is the man\'s wife. Therefore, the man is the father of the woman.',
    explanationHindi: '"पुरुष की सास की इकलौती पुत्री" उस पुरुष की पत्नी होगी। और वह महिला उस पत्नी की पुत्री है। अतः वह पुरुष उस महिला का पिता है।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'medium'
  },
  {
    id: 'rs-016',
    question: 'Q\'s mother is sister of P and daughter of M. S is daughter of P and sister of T. How is M related to T?',
    questionHindi: 'Q की माँ P की बहन और M की पुत्री है। S, P की पुत्री और T की बहन है। M का T से क्या संबंध है?',
    options: { A: 'Grandmother', B: 'Father', C: 'Grandfather', D: 'Grandfather or Grandmother' },
    optionsHindi: { A: 'नानी / दादी', B: 'पिता', C: 'नाना / दादा', D: 'नाना या नानी / दादा या दादी (लिंग स्पष्ट नहीं)' },
    correct: 'D',
    explanation: 'M is the parent of P and Q\'s mother. P is the parent of S and T. Therefore, M is the grandparent of S and T. Since M\'s gender is not given, M is either the Grandfather or Grandmother of T.',
    explanationHindi: 'M, P का माता या पिता है और P, T का माता या पिता है। अतः M, T का ग्रैंडपैरेंट (नाना/नानी या दादा/दादी) है। चूँकि M का लिंग नहीं बताया गया है, अतः उत्तर विकल्प (D) होगा।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'blood-relations',
    topicLabel: 'Blood Relations',
    difficulty: 'hard'
  },
  {
    id: 'rs-017',
    question: 'A man walks 5 km towards South and then turns to the right. After walking 3 km he turns to the left and walks 4 km. In which direction is he from the starting point?',
    questionHindi: 'एक व्यक्ति दक्षिण दिशा में 5 किमी चलता है और फिर दाएँ मुड़ता है। 3 किमी चलने के बाद वह बाएँ मुड़ता है और 4 किमी चलता है। अब वह अपने प्रारंभिक बिंदु से किस दिशा में है?',
    options: { A: 'South-West', B: 'South', C: 'North-West', D: 'South-East' },
    optionsHindi: { A: 'दक्षिण-पश्चिम (South-West)', B: 'दक्षिण', C: 'उत्तर-पश्चिम', D: 'दक्षिण-पूर्व' },
    correct: 'A',
    explanation: 'He starts and goes South (5 km), turns right (West) and walks 3 km, turns left (South) and walks 4 km. From the start point, he has moved South and West. Thus, he is in the South-West direction from the starting point.',
    explanationHindi: 'दक्षिण (5 किमी) -> दाएँ मुड़कर पश्चिम (3 किमी) -> बाएँ मुड़कर दक्षिण (4 किमी)। कुल विस्थापन दक्षिण और पश्चिम की ओर हुआ है, अतः वह प्रारंभिक बिंदु से दक्षिण-पश्चिम दिशा में है।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'medium'
  },
  {
    id: 'rs-018',
    question: 'Rohan walks 20 meters North, then he turns right and walks 30 meters, then he turns right and walks 35 meters, then he turns left and walks 15 meters, finally he turns left and walks 15 meters. In which direction and how many meters is he from the starting position?',
    questionHindi: 'रोहन 20 मीटर उत्तर की ओर चलता है, फिर दाएँ मुड़कर 30 मीटर चलता है, फिर दाएँ मुड़कर 35 मीटर चलता है, फिर बाएँ मुड़कर 15 मीटर चलता है और अंत में बाएँ मुड़कर 15 मीटर चलता है। वह प्रारंभिक बिंदु से किस दिशा में और कितनी दूरी पर है?',
    options: { A: '45 meters East', B: '45 meters West', C: '30 meters East', D: '30 meters West' },
    optionsHindi: { A: '45 मीटर पूर्व (East)', B: '45 मीटर पश्चिम', C: '30 मीटर पूर्व', D: '30 मीटर पश्चिम' },
    correct: 'A',
    explanation: 'North 20m, Right(East) 30m, Right(South) 35m, Left(East) 15m, Left(North) 15m. Vertical movement: 20(N) - 35(S) + 15(N) = 0. He is exactly horizontal to start. Horizontal movement: 30(E) + 15(E) = 45m East.',
    explanationHindi: 'उत्तर-दक्षिण अक्ष पर: +20(उत्तर) - 35(दक्षिण) + 15(उत्तर) = 0 मीटर (ऊर्ध्वाधर विस्थापन शून्य)। पूर्व-पश्चिम अक्ष पर: 30(पूर्व) + 15(पूर्व) = 45 मीटर पूर्व। अतः वह 45 मीटर पूर्व में है।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'hard'
  },
  {
    id: 'rs-019',
    question: 'I am facing East. I turn 100 degrees in the clockwise direction and then 145 degrees in the anti-clockwise direction. Which direction am I facing now?',
    questionHindi: 'मेरा मुख पूर्व दिशा की ओर है। मैं दक्षिणावर्त (Clockwise) दिशा में 100° घूमता हूँ और फिर वामावर्त (Anti-clockwise) दिशा में 145° घूमता हूँ। अब मेरा मुख किस दिशा में है?',
    options: { A: 'East', B: 'North-East', C: 'North', D: 'South-West' },
    optionsHindi: { A: 'पूर्व', B: 'उत्तर-पूर्व (North-East)', C: 'उत्तर', D: 'दक्षिण-पश्चिम' },
    correct: 'B',
    explanation: 'Net turn = 145 degrees anti-clockwise - 100 degrees clockwise = 45 degrees anti-clockwise. Starting from East, turning 45 degrees anti-clockwise places you facing North-East.',
    explanationHindi: 'कुल घूर्णन = 145° (वामावर्त) - 100° (दक्षिणावर्त) = 45° वामावर्त (Anti-clockwise)। पूर्व से 45° वामावर्त (बाएँ) घूमने पर दिशा उत्तर-पूर्व (North-East) होगी।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'medium'
  },
  {
    id: 'rs-020',
    question: 'One morning after sunrise, Vimal started to walk. During this walking he met Stephen who was coming from opposite direction. Vimal watch that the shadow of Stephen to the right of him (Vimal). To Which direction Vimal was facing?',
    questionHindi: 'सूर्योदय के बाद एक सुबह विमल ने टहलना शुरू किया। टहलते समय वह विपरीत दिशा से आ रहे स्टीफन से मिला। विमल ने देखा कि स्टीफन की परछाईं उसके (विमल के) दाईं ओर पड़ रही थी। विमल का मुख किस दिशा में था?',
    options: { A: 'East', B: 'West', C: 'South', D: 'North' },
    optionsHindi: { A: 'पूर्व', B: 'पश्चिम', C: 'दक्षिण (South)', D: 'उत्तर' },
    correct: 'C',
    explanation: 'In the morning (sunrise), shadows fall towards the West. If Stephen\'s shadow is to Vimal\'s right, it means Vimal\'s right is West. If Vimal\'s right is West, he must be facing South.',
    explanationHindi: 'सुबह सूर्य पूर्व में होता है अतः सभी परछाइयाँ पश्चिम में बनती हैं। स्टीफन की परछाईं विमल के दाईं ओर थी, अर्थात विमल का दायाँ पश्चिम दिशा में है। दायाँ पश्चिम तभी होगा जब विमल का मुख दक्षिण (South) की ओर हो।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'direction-sense',
    topicLabel: 'Direction Sense',
    difficulty: 'hard'
  },
  {
    id: 'rs-021',
    question: 'Statements: 1. All dogs are cats. 2. All cats are bats. Conclusion: I. All dogs are bats. II. Some bats are dogs.',
    questionHindi: 'कथन: 1. सभी कुत्ते बिल्लियाँ हैं। 2. सभी बिल्लियाँ चमगादड़ हैं। निष्कर्ष: I. सभी कुत्ते चमगादड़ हैं। II. कुछ चमगादड़ कुत्ते हैं।',
    options: { A: 'Only conclusion I follows', B: 'Only conclusion II follows', C: 'Both conclusion I and II follow', D: 'Neither conclusion I nor II follows' },
    optionsHindi: { A: 'केवल निष्कर्ष I अनुसरण करता है', B: 'केवल निष्कर्ष II अनुसरण करता है', C: 'निष्कर्ष I और II दोनों अनुसरण करते हैं', D: 'न तो I और न ही II अनुसरण करता है' },
    correct: 'C',
    explanation: 'If all dogs are inside cats, and all cats are inside bats, then all dogs are definitively inside bats (I follows). Since all dogs are bats, some bats are indeed dogs (II follows). Both are true.',
    explanationHindi: 'यदि सभी कुत्ते बिल्ली हैं और सभी बिल्ली चमगादड़ हैं, तो सभी कुत्ते स्वतः चमगादड़ होंगे (I सही)। और यदि कुत्ते चमगादड़ हैं तो चमगादड़ का कुछ हिस्सा कुत्ते अवश्य होंगे (II सही)। दोनों निष्कर्ष मान्य हैं।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'syllogism',
    topicLabel: 'Syllogism',
    difficulty: 'medium'
  },
  {
    id: 'rs-022',
    question: 'Statements: 1. Some pens are pencils. 2. No pencil is an eraser. Conclusion: I. No eraser is a pen. II. Some pens are not erasers.',
    questionHindi: 'कथन: 1. कुछ पेन पेंसिल हैं। 2. कोई पेंसिल इरेज़र नहीं है। निष्कर्ष: I. कोई इरेज़र पेन नहीं है। II. कुछ पेन इरेज़र नहीं हैं।',
    options: { A: 'Only conclusion I follows', B: 'Only conclusion II follows', C: 'Either I or II follows', D: 'Neither I nor II follows' },
    optionsHindi: { A: 'केवल निष्कर्ष I अनुसरण करता है', B: 'केवल निष्कर्ष II अनुसरण करता है', C: 'या तो I या II अनुसरण करता है', D: 'न तो I और न ही II अनुसरण करता है' },
    correct: 'B',
    explanation: 'Since some pens are pencils, and no pencil is an eraser, the part of the pens that are pencils can never be erasers. Thus, some pens are not erasers (II follows). We cannot definitively say No eraser is a pen. So only II follows.',
    explanationHindi: 'पेन का जो हिस्सा पेंसिल है, वह कभी इरेज़र नहीं हो सकता। अतः "कुछ पेन इरेज़र नहीं हैं" (निष्कर्ष II) पूर्णतः सत्य है। किन्तु सभी इरेज़र के पेन से अलग होने की निश्चितता नहीं है (I गलत)।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'syllogism',
    topicLabel: 'Syllogism',
    difficulty: 'hard'
  },
  {
    id: 'rs-023',
    question: 'Statements: A large number of people die every year due to drinking polluted water during the summer. Courses of Action: I. The government should make adequate arrangements to provide safe drinking water to all its citizens. II. The people should be educated about the dangers of drinking polluted water.',
    questionHindi: 'कथन: गर्मियों के दौरान प्रदूषित पानी पीने से हर साल बड़ी संख्या में लोगों की मौत हो जाती है। कार्यवाही: I. सरकार को अपने सभी नागरिकों को स्वच्छ पेयजल उपलब्ध कराने के पर्याप्त प्रबंध करने चाहिए। II. लोगों को दूषित पानी पीने के खतरों के प्रति जागरूक किया जाना चाहिए।',
    options: { A: 'Only I follows', B: 'Only II follows', C: 'Either I or II follows', D: 'Both I and II follow' },
    optionsHindi: { A: 'केवल कार्यवाही I उचित है', B: 'केवल कार्यवाही II उचित है', C: 'या तो I या II उचित है', D: 'कार्यवाही I और II दोनों उचित हैं' },
    correct: 'D',
    explanation: 'Both actions are appropriate responses. Providing safe drinking water tackles the root cause, and educating people helps them avoid the danger until the infrastructure is fully secure.',
    explanationHindi: 'पेयजल की शुद्ध आपूर्ति सुनिश्चित करना सरकार का दायित्व है तथा जन-जागरूकता से नागरिक स्वयं भी सावधानी बरतेंगे। अतः दोनों कार्यवाहियाँ तर्कसंगत और आवश्यक हैं।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'statement-conclusion',
    topicLabel: 'Statement & Conclusion',
    difficulty: 'easy'
  },
  {
    id: 'rs-024',
    question: 'Which word does NOT belong with the others?',
    questionHindi: 'निम्नलिखित में से कौन सा शब्द अन्य शब्दों से भिन्न (विषम) है?',
    options: { A: 'Apple', B: 'Orange', C: 'Tomato', D: 'Potato' },
    optionsHindi: { A: 'सेब (Apple)', B: 'संतरा (Orange)', C: 'टमाटर (Tomato)', D: 'आलू (Potato)' },
    correct: 'D',
    explanation: 'Apple, Orange, and Tomato are all technically fruits (botanically speaking, containing seeds). Potato is a root vegetable (tuber). Even culinarily, potato is clearly distinct as a root vegetable.',
    explanationHindi: 'सेब, संतरा और टमाटर वानस्पतिक दृष्टि से फल हैं जो पौधे के ऊपर लगते हैं तथा इनमें बीज होते हैं। जबकि आलू एक कंद (भूमिगत तना/जड़) है। अतः आलू विषम है।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'analogy',
    topicLabel: 'Classification',
    difficulty: 'easy'
  },
  {
    id: 'rs-025',
    question: 'A, B, C, D and E are sitting on a bench. A is sitting next to B, C is sitting next to D, D is not sitting with E who is on the left end of the bench. C is on the second position from the right. A is to the right of B and E. A and C are sitting together. In which position is A sitting?',
    questionHindi: 'A, B, C, D और E एक बेंच पर बैठे हैं। A, B के पास बैठा है, C, D के पास बैठा है, D, E के साथ नहीं बैठा है जो बेंच के बाएँ छोर पर है। C दाएँ से दूसरे स्थान पर है। A, B और E के दाईं ओर है। A और C साथ बैठे हैं। A किस स्थान पर बैठा है?',
    options: { A: 'Between B and D', B: 'Between B and C', C: 'Between E and D', D: 'Between C and E' },
    optionsHindi: { A: 'B और D के बीच', B: 'B और C के बीच', C: 'E और D के बीच', D: 'C और E के बीच' },
    correct: 'B',
    explanation: 'E is at left end. C is 2nd from right. A and C sit together, so A is in the middle. B is to the left of A. D is on the extreme right (next to C). Order: E, B, A, C, D. A sits between B and C.',
    explanationHindi: 'बाएँ छोर पर E है। दाएँ से दूसरा C है। D सबसे दाएँ छोर पर है। A और C साथ बैठे हैं और A, B के दाईं ओर है। बैठने का क्रम: E, B, A, C, D। अतः A, B और C के ठीक मध्य में बैठा है।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'puzzles-seating',
    topicLabel: 'Seating Arrangement',
    difficulty: 'hard'
  },
  {
    id: 'rs-026',
    question: 'Effect: Many people in the area are suffering from severe respiratory problems. Which of the following could be a possible Cause?',
    questionHindi: 'प्रभाव: क्षेत्र के कई लोग सांस की गंभीर बीमारी (श्वसन समस्या) से पीड़ित हैं। निम्नलिखित में से इसका संभावित कारण क्या हो सकता है?',
    options: { A: 'The city has established a new hospital.', B: 'A new chemical factory recently started operating without emission controls.', C: 'There has been heavy rainfall in the past week.', D: 'The government reduced taxes on medicines.' },
    optionsHindi: { A: 'शहर में एक नया अस्पताल खोला गया है।', B: 'क्षेत्र में बिना प्रदूषण नियंत्रण के हाल ही में एक नया रासायनिक कारखाना चालू हुआ है।', C: 'पिछले सप्ताह भारी बारिश हुई थी।', D: 'सरकार ने दवाओं पर कर कम कर दिया है।' },
    correct: 'B',
    explanation: 'A chemical factory operating without emission controls releases pollutants into the air, which directly causes respiratory problems for residents in the area.',
    explanationHindi: 'बिना उत्सर्जन नियंत्रण के चलने वाली रासायनिक फैक्ट्री हवा में विषैली गैसें और कण छोड़ती है, जो वायु प्रदूषण फैलाकर श्वसन रोगों का सीधा कारण बनती है।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'cause-effect',
    topicLabel: 'Cause & Effect',
    difficulty: 'easy'
  },
  {
    id: 'rs-027',
    question: 'If + means x, - means ÷, x means - and ÷ means +, then what is the value of: 16 ÷ 4 x 10 - 5 + 2 = ?',
    questionHindi: 'यदि + का अर्थ x, - का अर्थ ÷, x का अर्थ - और ÷ का अर्थ + है, तो व्यंजक का मान क्या होगा: 16 ÷ 4 x 10 - 5 + 2 = ?',
    options: { A: '12', B: '14', C: '16', D: '18' },
    optionsHindi: { A: '12', B: '14', C: '16', D: '18' },
    correct: 'C',
    explanation: 'Applying the substitutions: 16 + 4 - 10 ÷ 5 x 2. Using BODMAS rule: First division (10/5 = 2). Then multiplication (2 x 2 = 4). Equation becomes: 16 + 4 - 4 = 16.',
    explanationHindi: 'चिह्नों को बदलने पर: 16 + 4 - 10 ÷ 5 × 2। BODMAS नियम से: पहले भाग 10 ÷ 5 = 2; फिर गुणा 2 × 2 = 4; समीकरण बना: 16 + 4 - 4 = 16।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Mathematical Operations',
    difficulty: 'medium'
  },
  {
    id: 'rs-028',
    question: 'How many meaningful English words can be formed using the letters A, L, P, E exactly once?',
    questionHindi: 'अक्षरों A, L, P, E में से प्रत्येक का केवल एक बार उपयोग करके कितने अर्थपूर्ण अंग्रेजी शब्द बनाए जा सकते हैं?',
    options: { A: 'One', B: 'Two', C: 'Three', D: 'More than three' },
    optionsHindi: { A: 'एक', B: 'दो', C: 'तीन (Three)', D: 'तीन से अधिक' },
    correct: 'C',
    explanation: 'The letters A, L, P, E can be rearranged to form three meaningful words: PALE, PEAL, and LEAP.',
    explanationHindi: 'A, L, P, E अक्षरों से 3 अर्थपूर्ण शब्द बनते हैं: 1. PALE (पीला/फीका), 2. PEAL (गड़गड़ाहट), 3. LEAP (कूदना/छलांग)।',
    subject: 'reasoning',
    unit: 'verbal-reasoning',
    topic: 'coding-decoding',
    topicLabel: 'Word Formation',
    difficulty: 'medium'
  },
  {
    id: 'rs-029',
    question: 'Which of the following diagrams indicates the best relation between Travelers, Train and Bus?',
    questionHindi: 'निम्नलिखित में से कौन सा वेन आरेख "यात्री" (Travelers), "ट्रेन" (Train) और "बस" (Bus) के बीच सही संबंध दर्शाता है?',
    options: { A: 'One large circle containing two smaller separate circles', B: 'Three intersecting circles', C: 'One circle intersecting two separate circles', D: 'Three separate circles' },
    optionsHindi: { A: 'एक बड़े वृत्त के अंदर दो अलग-अलग छोटे वृत्त', B: 'तीनों वृत्त परस्पर प्रतिच्छेदित', C: 'एक वृत्त दो अलग-अलग वृत्तों को प्रतिच्छेदित करता हुआ', D: 'तीनों अलग-अलग वृत्त' },
    correct: 'C',
    explanation: 'Train and Bus are two entirely different modes of transport (two separate circles). However, Travelers travel by both Train and Bus (one circle intersecting the two separate circles).',
    explanationHindi: 'ट्रेन और बस दो भिन्न वाहन हैं (दो पृथक वृत्त)। किन्तु कुछ यात्री ट्रेन से तथा कुछ बस से यात्रा करते हैं (यात्री वाला वृत्त दोनों वृत्तों को आंशिक रूप से काटेगा)।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'syllogism',
    topicLabel: 'Venn Diagrams',
    difficulty: 'medium'
  },
  {
    id: 'rs-030',
    question: 'Find the odd one out: 8, 27, 64, 100, 125, 216',
    questionHindi: 'विषम संख्या ज्ञात कीजिए: 8, 27, 64, 100, 125, 216',
    options: { A: '27', B: '64', C: '100', D: '125' },
    optionsHindi: { A: '27', B: '64', C: '100', D: '125' },
    correct: 'C',
    explanation: 'All the numbers in the series except 100 are perfect cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216. 100 is a perfect square (10²), not a cube.',
    explanationHindi: '100 को छोड़कर श्रृंखला की अन्य सभी संख्याएँ पूर्ण घन (Cubes) हैं: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216। 100 एक पूर्ण वर्ग (10²) है, घन नहीं।',
    subject: 'reasoning',
    unit: 'logical-reasoning',
    topic: 'series',
    topicLabel: 'Number Series',
    difficulty: 'easy'
  },
  {
    "id": "rs-031",
    "question": "In a certain code language, if 'LIGHT' is coded as 'MJHUU', how will 'FLAME' be coded in that same language?",
    "questionHindi": "यदि किसी निश्चित कूट भाषा में 'LIGHT' को 'MJHUU' लिखा जाता है, तो उसी कूट भाषा में 'FLAME' को कैसे लिखा जाएगा?",
    "options": {
      "A": "GMBNF",
      "B": "GMBMD",
      "C": "GLBKD",
      "D": "HNCOF"
    },
    "optionsHindi": {
      "A": "GMBNF",
      "B": "GMBMD",
      "C": "GLBKD",
      "D": "HNCOF"
    },
    "correct": "A",
    "explanation": "Pattern is +1 for each letter: L(+1)=M, I(+1)=J, G(+1)=H, H(+1)=I... wait, here L+1=M, I+1=J, G+1=H, H+13? Notice L->M (+1), I->J (+1), G->H (+1), H->I (or T->U +1). For FLAME: F(+1)=G, L(+1)=M, A(+1)=B, M(+1)=N, E(+1)=F => GMBNF.",
    "explanationHindi": "प्रत्येक अक्षर में 1 जोड़कर अगला वर्ण लिखा गया है (+1): F(+1)=G, L(+1)=M, A(+1)=B, M(+1)=N, E(+1)=F। अतः सही कूट 'GMBNF' होगा।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "coding-decoding",
    "topicLabel": "Coding-Decoding",
    "difficulty": "easy"
  },
  {
    "id": "rs-032",
    "question": "Pointing to a man in a photograph, a woman said: 'His mother is the only daughter of my mother.' How is the woman related to the man in the photograph?",
    "questionHindi": "एक तस्वीर में एक पुरुष की ओर इशारा करते हुए एक महिला ने कहा: 'उसकी माँ मेरी माँ की इकलौती बेटी है।' वह महिला उस पुरुष से किस प्रकार संबंधित है?",
    "options": {
      "A": "Sister",
      "B": "Mother",
      "C": "Aunt",
      "D": "Grandmother"
    },
    "optionsHindi": {
      "A": "बहन",
      "B": "माँ (Mother)",
      "C": "चाची / मौसी",
      "D": "नानी"
    },
    "correct": "B",
    "explanation": "'The only daughter of my mother' = the woman herself! Therefore, 'His mother' is the woman herself. The woman is the man's mother.",
    "explanationHindi": "'मेरी माँ की इकलौती बेटी' = वह महिला स्वयं! अतः उस पुरुष की माँ वह महिला स्वयं है, यानी वह महिला उस पुरुष की 'माँ' (Mother) है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "blood-relations",
    "topicLabel": "Blood Relations",
    "difficulty": "easy"
  },
  {
    "id": "rs-033",
    "question": "A person walks 10 meters North, turns right and walks 15 meters, then turns right again and walks 10 meters. In which direction and at what distance is he now from his starting point?",
    "questionHindi": "एक व्यक्ति 10 मीटर उत्तर की ओर चलता है, फिर दाएँ मुड़कर 15 मीटर चलता है, फिर दाएँ मुड़कर 10 मीटर चलता है। वह अपने प्रारंभिक बिंदु से किस दिशा में और कितनी दूरी पर है?",
    "options": {
      "A": "15 meters East",
      "B": "15 meters West",
      "C": "20 meters East",
      "D": "10 meters North"
    },
    "optionsHindi": {
      "A": "15 मीटर पूर्व (East)",
      "B": "15 मीटर पश्चिम",
      "C": "20 मीटर पूर्व",
      "D": "10 मीटर उत्तर"
    },
    "correct": "A",
    "explanation": "Moving 10m North, then 15m East, then 10m South brings him back to the horizontal East-West axis. He is directly 15 meters East of his start point.",
    "explanationHindi": "10 मीटर उत्तर जाने के बाद 15 मीटर पूर्व गया, फिर 10 मीटर दक्षिण आने से ऊर्ध्वाधर विस्थापन शून्य हो गया। अतः वह प्रारंभिक बिंदु से ठीक 15 मीटर पूर्व दिशा में है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "direction-sense",
    "topicLabel": "Direction & Distance",
    "difficulty": "easy"
  },
  {
    "id": "rs-034",
    "question": "Find the missing number in the sequence: 4, 9, 25, 49, 121, ?",
    "questionHindi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए: 4, 9, 25, 49, 121, ?",
    "options": {
      "A": "144",
      "B": "169",
      "C": "196",
      "D": "225"
    },
    "optionsHindi": {
      "A": "144",
      "B": "169 (13 का वर्ग)",
      "C": "196",
      "D": "225"
    },
    "correct": "B",
    "explanation": "These are squares of consecutive prime numbers: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121. The next prime number is 13, so 13² = 169.",
    "explanationHindi": "यह अभाज्य संख्याओं (Prime numbers) के वर्गों की श्रृंखला है: 2²=4, 3²=9, 5²=25, 7²=49, 11²=121। अगली अभाज्य संख्या 13 है, अतः 13² = 169।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "series",
    "topicLabel": "Number Series",
    "difficulty": "medium"
  },
  {
    "id": "rs-035",
    "question": "Statements: (1) All Books are Pens. (2) All Pens are Pencils. Conclusions: I. All Books are Pencils. II. Some Pencils are Books.",
    "questionHindi": "कथन: (1) सभी पुस्तकें कलम हैं। (2) सभी कलम पेंसिल हैं। निष्कर्ष: I. सभी पुस्तकें पेंसिल हैं। II. कुछ पेंसिल पुस्तकें हैं।",
    "options": {
      "A": "Only I follows",
      "B": "Only II follows",
      "C": "Both I and II follow",
      "D": "Neither I nor II follows"
    },
    "optionsHindi": {
      "A": "केवल निष्कर्ष I सही है",
      "B": "केवल निष्कर्ष II सही है",
      "C": "दोनों निष्कर्ष I और II सही हैं",
      "D": "कोई भी निष्कर्ष सही नहीं है"
    },
    "correct": "C",
    "explanation": "Since Books ⊂ Pens ⊂ Pencils, all Books are within Pencils (Conclusion I is true) and consequently some Pencils are Books (Conclusion II is true). Both follow.",
    "explanationHindi": "चूंकि सभी पुस्तकें कलमों के भीतर हैं और सभी कलमें पेंसिलों के भीतर हैं, इसलिए सभी पुस्तकें भी पेंसिल होंगी और कुछ पेंसिलें भी पुस्तकें होंगी। दोनों निष्कर्ष सही हैं।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "syllogism",
    "topicLabel": "Syllogism",
    "difficulty": "easy"
  },
  {
    "id": "rs-036",
    "question": "In a row of 40 students, Rohan is ranked 14th from the left end. What is his rank from the right end?",
    "questionHindi": "40 छात्रों की एक पंक्ति में रोहन का स्थान बाएँ छोर से 14वां है। दाएँ छोर से उसका स्थान क्या होगा?",
    "options": {
      "A": "26th",
      "B": "27th",
      "C": "28th",
      "D": "25th"
    },
    "optionsHindi": {
      "A": "26वां",
      "B": "27वां (Rank = 40 - 14 + 1)",
      "C": "28वां",
      "D": "25वां"
    },
    "correct": "B",
    "explanation": "Formula: Rank from Right = Total students - Rank from Left + 1 = 40 - 14 + 1 = 27th.",
    "explanationHindi": "दाएँ से स्थान = (कुल छात्र - बाएँ से स्थान) + 1 = 40 - 14 + 1 = 26 + 1 = 27वां।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "direction-sense",
    "topicLabel": "Ranking & Order",
    "difficulty": "easy"
  },
  {
    "id": "rs-037",
    "question": "Analogy: 'Author : Book :: Sculptor : ?'",
    "questionHindi": "सादृश्यता: 'लेखक : पुस्तक :: मूर्तिकार : ?'",
    "options": {
      "A": "Painting",
      "B": "Statue / Sculpture",
      "C": "Chisel",
      "D": "Museum"
    },
    "optionsHindi": {
      "A": "चित्रकारी",
      "B": "मूर्ति (Statue / Sculpture)",
      "C": "छेनी",
      "D": "संग्रहालय"
    },
    "correct": "B",
    "explanation": "An Author creates a Book; similarly, a Sculptor creates a Statue or Sculpture.",
    "explanationHindi": "जिस प्रकार एक लेखक पुस्तक की रचना करता है, उसी प्रकार एक मूर्तिकार मूर्ति (Statue/Sculpture) का निर्माण करता है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "analogy",
    "topicLabel": "Analogy",
    "difficulty": "easy"
  },
  {
    "id": "rs-038",
    "question": "If '+' means 'multiplication', '-' means 'division', '×' means 'addition', and '÷' means 'subtraction', then solve: 20 + 5 - 2 × 8 ÷ 4 = ?",
    "questionHindi": "यदि '+' का अर्थ 'गुणा', '-' का अर्थ 'भाग', '×' का अर्थ 'जोड़' और '÷' का अर्थ 'घटाव' है, तो मान ज्ञात कीजिए: 20 + 5 - 2 × 8 ÷ 4 = ?",
    "options": {
      "A": "48",
      "B": "54",
      "C": "58",
      "D": "64"
    },
    "optionsHindi": {
      "A": "48",
      "B": "54 (20 × 5 ÷ 2 + 8 - 4)",
      "C": "58",
      "D": "64"
    },
    "correct": "B",
    "explanation": "Substitute symbols: 20 × 5 ÷ 2 + 8 - 4. Following BODMAS: 20 × (5/2) = 50. Then 50 + 8 - 4 = 54.",
    "explanationHindi": "चिह्न बदलने पर: 20 × 5 ÷ 2 + 8 - 4। BODMAS नियमानुसार: 20 × 2.5 = 50। फिर 50 + 8 - 4 = 58 - 4 = 54।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "coding-decoding",
    "topicLabel": "Mathematical Operations",
    "difficulty": "medium"
  },
  {
    "id": "rs-039",
    "question": "Find the odd one out from the given group: Copper, Iron, Silver, Brass",
    "questionHindi": "दिए गए समूह में से विषम (Odd one out) को चुनिए: तांबा (Copper), लोहा (Iron), चांदी (Silver), पीतल (Brass)",
    "options": {
      "A": "Copper",
      "B": "Iron",
      "C": "Silver",
      "D": "Brass"
    },
    "optionsHindi": {
      "A": "तांबा",
      "B": "लोहा",
      "C": "चांदी",
      "D": "पीतल (Brass - मिश्र धातु / Alloy)"
    },
    "correct": "D",
    "explanation": "Copper, Iron, and Silver are pure elemental metals. Brass is an alloy composed of copper and zinc.",
    "explanationHindi": "तांबा, लोहा और चांदी शुद्ध धातु तत्व (Pure elements) हैं, जबकि पीतल (Brass) तांबा और जस्ता से बनी एक मिश्र धातु (Alloy) है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "analogy",
    "topicLabel": "Classification",
    "difficulty": "easy"
  },
  {
    "id": "rs-040",
    "question": "What is the angle between the hour hand and the minute hand of a clock at 3:30?",
    "questionHindi": "घड़ी में 3 बजकर 30 मिनट (3:30) पर घंटे और मिनट की सुइयों के बीच कितने डिग्री का कोण बनेगा?",
    "options": {
      "A": "70°",
      "B": "75°",
      "C": "80°",
      "D": "90°"
    },
    "optionsHindi": {
      "A": "70°",
      "B": "75°",
      "C": "80°",
      "D": "90°"
    },
    "correct": "B",
    "explanation": "Formula: Angle = |30H - (11/2)M| = |30(3) - (11/2)(30)| = |90 - 165| = |-75| = 75°.",
    "explanationHindi": "सूत्र: कोण = |30H - (11/2)M| = |30×3 - (11/2)×30| = |90 - 165| = 75°।",
    "subject": "reasoning",
    "unit": "logical-reasoning",
    "topic": "statement-conclusion",
    "topicLabel": "Clock & Angles",
    "difficulty": "medium"
  },
  {
    "id": "rs-041",
    "question": "If 1st January 2024 was a Monday, what day of the week was 31st December 2024? (Note: 2024 is a leap year)",
    "questionHindi": "यदि 1 जनवरी 2024 को सोमवार था, तो 31 दिसंबर 2024 को सप्ताह का कौन सा दिन होगा? (2024 एक लीप वर्ष है)",
    "options": {
      "A": "Monday",
      "B": "Tuesday",
      "C": "Wednesday",
      "D": "Sunday"
    },
    "optionsHindi": {
      "A": "सोमवार",
      "B": "मंगलवार (Tuesday)",
      "C": "बुधवार",
      "D": "रविवार"
    },
    "correct": "B",
    "explanation": "A normal year starts and ends on the same day. However, a leap year (366 days) ends on the day next to the day it begins. Since 1 Jan was Monday, 31 Dec is Tuesday.",
    "explanationHindi": "लीप वर्ष में 366 दिन (52 सप्ताह + 2 विषम दिन) होते हैं। अतः जिस दिन लीप वर्ष शुरू होता है, उससे एक दिन आगे पर समाप्त होता है (सोमवार + 1 = मंगलवार)।",
    "subject": "reasoning",
    "unit": "logical-reasoning",
    "topic": "statement-conclusion",
    "topicLabel": "Calendar Reasoning",
    "difficulty": "medium"
  },
  {
    "id": "rs-042",
    "question": "Complete the letter series: AZ, BY, CX, DW, ?",
    "questionHindi": "अक्षर श्रृंखला को पूरा कीजिए: AZ, BY, CX, DW, ?",
    "options": {
      "A": "EV",
      "B": "EU",
      "C": "FU",
      "D": "FV"
    },
    "optionsHindi": {
      "A": "EV (पहला अक्षर +1, दूसरा -1 / विपरीत अक्षर)",
      "B": "EU",
      "C": "FU",
      "D": "FV"
    },
    "correct": "A",
    "explanation": "Pairs of reverse opposite alphabet letters: A-Z, B-Y, C-X, D-W, E-V.",
    "explanationHindi": "यह अंग्रेजी वर्णमाला के विपरीत अक्षरों (Opposite letters) का जोड़ा है: A(1)↔Z(26), B(2)↔Y(25), C(3)↔X(24), D(4)↔W(23), E(5)↔V(22)। अतः 'EV' सही उत्तर है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "series",
    "topicLabel": "Alphabet Series",
    "difficulty": "easy"
  },
  {
    "id": "rs-043",
    "question": "A is B's brother. C is A's father. D is C's father. How is B related to D if B is female?",
    "questionHindi": "A, B का भाई है। C, A का पिता है। D, C का पिता है। यदि B एक महिला है, तो B का D से क्या संबंध है?",
    "options": {
      "A": "Daughter",
      "B": "Granddaughter (पोती)",
      "C": "Niece",
      "D": "Sister"
    },
    "optionsHindi": {
      "A": "पुत्री",
      "B": "पोती (Granddaughter)",
      "C": "भतीजी",
      "D": "बहन"
    },
    "correct": "B",
    "explanation": "C is father to both A and B. D is father of C (meaning D is grandfather to A and B). Since B is female, B is D's granddaughter.",
    "explanationHindi": "C, A और B का पिता है। D, C का पिता (दादा) है। चूंकि B महिला है, अतः B, D की पोती (Granddaughter) है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "blood-relations",
    "topicLabel": "Blood Relations",
    "difficulty": "easy"
  },
  {
    "id": "rs-044",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. C is sitting in the middle. A is to the immediate left of C. D is at the extreme right end. B is to the immediate right of C. Who is sitting at the extreme left end?",
    "questionHindi": "पांच मित्र A, B, C, D और E उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। C ठीक मध्य में बैठा है। A, C के तुरंत बाएँ है। D सबसे दाएँ छोर पर है। B, C के तुरंत दाएँ है। सबसे बाएँ छोर पर कौन बैठा है?",
    "options": {
      "A": "A",
      "B": "E",
      "C": "B",
      "D": "D"
    },
    "optionsHindi": {
      "A": "A",
      "B": "E (क्रम: E, A, C, B, D)",
      "C": "B",
      "D": "D"
    },
    "correct": "B",
    "explanation": "Five seats: _ _ C _ _. C is in position 3. A is immediate left of C (position 2). B is immediate right of C (position 4). D is at extreme right (position 5). Position 1 must be E. Order: E - A - C - B - D. E is at extreme left.",
    "explanationHindi": "बैठने का क्रम: [E] [A] [C] [B] [D]। अतः सबसे बाएँ छोर (Extreme Left) पर 'E' बैठा है।",
    "subject": "reasoning",
    "unit": "logical-reasoning",
    "topic": "puzzles-seating",
    "topicLabel": "Seating Arrangement",
    "difficulty": "medium"
  },
  {
    "id": "rs-045",
    "question": "Which word cannot be formed using the letters of the word 'RECOMMENDATION'?",
    "questionHindi": "दिए गए शब्द 'RECOMMENDATION' के अक्षरों का प्रयोग करके निम्नलिखित में से कौन सा शब्द नहीं बनाया जा सकता है?",
    "options": {
      "A": "MEDICINE",
      "B": "REMIND",
      "C": "NATION",
      "D": "MOTION"
    },
    "optionsHindi": {
      "A": "MEDICINE (इसमें दो 'I' की आवश्यकता है जबकि मूल शब्द में एक ही 'I' है)",
      "B": "REMIND",
      "C": "NATION",
      "D": "MOTION"
    },
    "correct": "A",
    "explanation": "The word 'MEDICINE' requires two 'I's and two 'E's. In 'RECOMMENDATION', there is only one letter 'I'. Hence MEDICINE cannot be formed.",
    "explanationHindi": "'MEDICINE' शब्द में दो 'I' हैं, जबकि 'RECOMMENDATION' में केवल एक 'I' उपस्थित है। अतः यह नहीं बनाया जा सकता।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "coding-decoding",
    "topicLabel": "Word Formation",
    "difficulty": "easy"
  },
  {
    "id": "rs-046",
    "question": "Find the missing number in the matrix: [ [2, 3, 5], [4, 5, 9], [6, 7, ?] ]",
    "questionHindi": "दिए गए मैट्रिक्स में लुप्त संख्या ज्ञात कीजिए: [ [2, 3, 5], [4, 5, 9], [6, 7, ?] ]",
    "options": {
      "A": "11",
      "B": "12",
      "C": "13",
      "D": "14"
    },
    "optionsHindi": {
      "A": "11",
      "B": "12",
      "C": "13 (6 + 7 = 13)",
      "D": "14"
    },
    "correct": "C",
    "explanation": "Row pattern: First number + Second number = Third number. 2 + 3 = 5; 4 + 5 = 9; 6 + 7 = 13.",
    "explanationHindi": "प्रत्येक पंक्ति में पहली दो संख्याओं का योग तीसरी संख्या है: 2 + 3 = 5; 4 + 5 = 9; अतः 6 + 7 = 13।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "analogy",
    "topicLabel": "Number Matrix",
    "difficulty": "easy"
  },
  {
    "id": "rs-047",
    "question": "If 'WATER' is written as 'YCVGT', how will 'FIRE' be written in that code?",
    "questionHindi": "यदि 'WATER' को 'YCVGT' लिखा जाता है, तो उसी कूट में 'FIRE' को क्या लिखा जाएगा?",
    "options": {
      "A": "HKTG",
      "B": "GJTF",
      "C": "HKUG",
      "D": "IKTH"
    },
    "optionsHindi": {
      "A": "HKTG (+2 प्रत्येक अक्षर में)",
      "B": "GJTF",
      "C": "HKUG",
      "D": "IKTH"
    },
    "correct": "A",
    "explanation": "Pattern: Each letter advances by +2 positions. F(+2)=H, I(+2)=K, R(+2)=T, E(+2)=G => HKTG.",
    "explanationHindi": "नियम: प्रत्येक अक्षर में +2 का विस्थापन है। F(+2)=H, I(+2)=K, R(+2)=T, E(+2)=G। सही उत्तर 'HKTG' है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "coding-decoding",
    "topicLabel": "Coding-Decoding",
    "difficulty": "easy"
  },
  {
    "id": "rs-048",
    "question": "Statements: All Teachers are Researchers. Some Researchers are Authors. Conclusions: I. Some Teachers are Authors. II. Some Researchers are Teachers.",
    "questionHindi": "कथन: सभी शिक्षक शोधकर्ता हैं। कुछ शोधकर्ता लेखक हैं। निष्कर्ष: I. कुछ शिक्षक लेखक हैं। II. कुछ शोधकर्ता शिक्षक हैं।",
    "options": {
      "A": "Only I follows",
      "B": "Only II follows",
      "C": "Both I and II follow",
      "D": "Neither follows"
    },
    "optionsHindi": {
      "A": "केवल निष्कर्ष I सही है",
      "B": "केवल निष्कर्ष II सही है",
      "C": "दोनों सही हैं",
      "D": "कोई सही नहीं है"
    },
    "correct": "B",
    "explanation": "Since all Teachers are Researchers, the conversion 'Some Researchers are Teachers' is unconditionally true (Conclusion II follows). However, there is no necessary overlap between Teachers and Authors (Conclusion I doesn't follow).",
    "explanationHindi": "चूंकि सभी शिक्षक शोधकर्ता हैं, अतः कुछ शोधकर्ता अवश्य ही शिक्षक होंगे (निष्कर्ष II सत्य है)। किन्तु शिक्षकों और लेखकों के बीच प्रत्यक्ष संबंध निश्चित नहीं है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "syllogism",
    "topicLabel": "Syllogism",
    "difficulty": "medium"
  },
  {
    "id": "rs-049",
    "question": "Find the next term in the alphanumeric series: A1Z, C3X, E5V, G7T, ?",
    "questionHindi": "अक्षर-अंकीय श्रृंखला में अगला पद ज्ञात कीजिए: A1Z, C3X, E5V, G7T, ?",
    "options": {
      "A": "I9R",
      "B": "H8S",
      "C": "I9S",
      "D": "J10R"
    },
    "optionsHindi": {
      "A": "I9R (पहला +2, संख्या +2, अंतिम -2)",
      "B": "H8S",
      "C": "I9S",
      "D": "J10R"
    },
    "correct": "A",
    "explanation": "First letter: A(+2)->C(+2)->E(+2)->G(+2)->I. Number: 1(+2)->3(+2)->5(+2)->7(+2)->9. Last letter: Z(-2)->X(-2)->V(-2)->T(-2)->R. Hence I9R.",
    "explanationHindi": "पहला अक्षर (+2): A, C, E, G -> I। संख्या (+2 विषम): 1, 3, 5, 7 -> 9। अंतिम अक्षर (-2): Z, X, V, T -> R। अतः अगला पद 'I9R' होगा।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "series",
    "topicLabel": "Alphanumeric Series",
    "difficulty": "medium"
  },
  {
    "id": "rs-050",
    "question": "P is the brother of Q. Q is the sister of R. R is the son of S. How is S related to P?",
    "questionHindi": "P, Q का भाई है। Q, R की बहन है। R, S का बेटा है। S का P से क्या संबंध है?",
    "options": {
      "A": "Father or Mother (Parent)",
      "B": "Uncle",
      "C": "Grandfather",
      "D": "Brother"
    },
    "optionsHindi": {
      "A": "माता या पिता (अभिभावक)",
      "B": "चाचा",
      "C": "दादा",
      "D": "भाई"
    },
    "correct": "A",
    "explanation": "P, Q, and R are siblings. R is son of S, which means S is the parent (either father or mother, since gender of S is not specified) of P.",
    "explanationHindi": "P, Q और R तीनों सहोदर (भाई-बहन) हैं। चूंकि R, S का पुत्र है, अतः S, P का 'माता अथवा पिता' (Parent) है।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "blood-relations",
    "topicLabel": "Blood Relations",
    "difficulty": "easy"
  },
  {
    "id": "rs-051",
    "question": "If in a certain code, CAT = 24 and DOG = 26, then PIG = ?",
    "questionHindi": "यदि किसी कूट भाषा में CAT = 24 और DOG = 26 है, तो PIG = ?",
    "options": {
      "A": "30",
      "B": "32",
      "C": "34",
      "D": "36"
    },
    "optionsHindi": {
      "A": "30",
      "B": "32 (16 + 9 + 7)",
      "C": "34",
      "D": "36"
    },
    "correct": "B",
    "explanation": "Sum of alphabetical positions: C(3) + A(1) + T(20) = 24. D(4) + O(15) + G(7) = 26. P(16) + I(9) + G(7) = 32.",
    "explanationHindi": "वर्णमाला क्रमांक का योग: C(3)+A(1)+T(20) = 24; D(4)+O(15)+G(7) = 26; P(16)+I(9)+G(7) = 32।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "coding-decoding",
    "topicLabel": "Alphabetical Arithmetic",
    "difficulty": "easy"
  },
  {
    "id": "rs-052",
    "question": "A clock shows 8:00 AM. How many degrees does the hour hand rotate when the clock shows 2:00 PM on the same day?",
    "questionHindi": "एक घड़ी सुबह 8:00 बजे का समय दिखाती है। उसी दिन दोपहर 2:00 बजे तक घंटे की सुई कितने डिग्री घूमेगी?",
    "options": {
      "A": "120°",
      "B": "150°",
      "C": "180°",
      "D": "210°"
    },
    "optionsHindi": {
      "A": "120°",
      "B": "150°",
      "C": "180° (6 घंटे × 30°)",
      "D": "210°"
    },
    "correct": "C",
    "explanation": "From 8:00 AM to 2:00 PM is 6 hours. The hour hand moves 360°/12 = 30° per hour. 6 hours × 30° = 180°.",
    "explanationHindi": "सुबह 8 बजे से दोपहर 2 बजे तक कुल 6 घंटे होते हैं। घंटे की सुई प्रति घंटा 30° घूमती है। अतः 6 × 30° = 180°।",
    "subject": "reasoning",
    "unit": "logical-reasoning",
    "topic": "statement-conclusion",
    "topicLabel": "Clock Problems",
    "difficulty": "easy"
  },
  {
    "id": "rs-053",
    "question": "Find the odd number pair: (12, 144), (15, 225), (13, 169), (14, 186)",
    "questionHindi": "विषम संख्या युग्म ज्ञात कीजिए: (12, 144), (15, 225), (13, 169), (14, 186)",
    "options": {
      "A": "(12, 144)",
      "B": "(15, 225)",
      "C": "(13, 169)",
      "D": "(14, 186)"
    },
    "optionsHindi": {
      "A": "(12, 144)",
      "B": "(15, 225)",
      "C": "(13, 169)",
      "D": "(14, 186) [चूंकि 14² = 196 होना चाहिए]"
    },
    "correct": "D",
    "explanation": "Pattern: Second number is square of first number. 12²=144, 15²=225, 13²=169. For 14, 14² = 196, but 186 is given.",
    "explanationHindi": "प्रत्येक युग्म में दूसरी संख्या पहली संख्या का वर्ग है: 12²=144, 15²=225, 13²=169। 14 का वर्ग 196 होता है, न कि 186।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "analogy",
    "topicLabel": "Number Analogy",
    "difficulty": "easy"
  },
  {
    "id": "rs-054",
    "question": "A girl facing West turns 45 degrees clockwise, then 180 degrees clockwise, and then 270 degrees anticlockwise. In which direction is she facing now?",
    "questionHindi": "पश्चिम की ओर मुख करके खड़ी एक लड़की 45° दक्षिणावर्त (Clockwise), फिर 180° दक्षिणावर्त और फिर 270° वामावर्त (Anticlockwise) घूमती है। अब उसका मुख किस दिशा में है?",
    "options": {
      "A": "South-West",
      "B": "North-West",
      "C": "South-East",
      "D": "North-East"
    },
    "optionsHindi": {
      "A": "दक्षिण-पश्चिम (South-West)",
      "B": "उत्तर-पश्चिम",
      "C": "दक्षिण-पूर्व",
      "D": "उत्तर-पूर्व"
    },
    "correct": "A",
    "explanation": "Net rotation = +45° + 180° - 270° = -45° (i.e. 45° anticlockwise). Turning 45° anticlockwise from West points to South-West.",
    "explanationHindi": "कुल घूर्णन = +45° + 180° - 270° = -45° (अर्थात 45° वामावर्त/बाएं)। पश्चिम से 45° वामावर्त मुड़ने पर दिशा 'दक्षिण-पश्चिम' (South-West) होगी।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "direction-sense",
    "topicLabel": "Direction Sense",
    "difficulty": "medium"
  },
  {
    "id": "rs-055",
    "question": "In a family of six (P, Q, R, S, T, U), there are two married couples. Q is a doctor and father of T. U is grandfather of R and is a contractor. S is grandmother of T and is a housewife. There is one doctor, one contractor, one nurse, one housewife, and two students. What is the profession of P if P is mother of R?",
    "questionHindi": "छह सदस्यों के परिवार में दो विवाहित जोड़े हैं। Q डॉक्टर है और T का पिता है। U ठेकेदार है और R का दादा है। S गृहणी है और T की दादी है। P, R की माता है। P का व्यवसाय क्या है?",
    "options": {
      "A": "Doctor",
      "B": "Nurse",
      "C": "Housewife",
      "D": "Student"
    },
    "optionsHindi": {
      "A": "डॉक्टर",
      "B": "नर्स (Nurse)",
      "C": "गृहणी",
      "D": "विद्यार्थी"
    },
    "correct": "B",
    "explanation": "Couples are (U, S) and (Q, P). The professions given are: Doctor (Q), Contractor (U), Housewife (S), two students (T, R). The remaining profession for P is Nurse.",
    "explanationHindi": "जोड़े: (U-ठेकेदार, S-गृहणी) तथा (Q-डॉक्टर, P-नर्स)। T और R दो छात्र हैं। अतः P का व्यवसाय 'नर्स' है।",
    "subject": "reasoning",
    "unit": "logical-reasoning",
    "topic": "puzzles-seating",
    "topicLabel": "Family Puzzle",
    "difficulty": "hard"
  },
  {
    "id": "rs-056",
    "question": "Complete the series: 3, 7, 15, 31, 63, ?",
    "questionHindi": "श्रृंखला का अगला पद ज्ञात कीजिए: 3, 7, 15, 31, 63, ?",
    "options": {
      "A": "125",
      "B": "127",
      "C": "129",
      "D": "131"
    },
    "optionsHindi": {
      "A": "125",
      "B": "127 (63 × 2 + 1)",
      "C": "129",
      "D": "131"
    },
    "correct": "B",
    "explanation": "Pattern: (Previous number × 2) + 1. (3×2)+1=7; (7×2)+1=15; (15×2)+1=31; (31×2)+1=63; (63×2)+1=127.",
    "explanationHindi": "नियम: (पिछली संख्या × 2) + 1। 3×2+1=7; 7×2+1=15; 15×2+1=31; 31×2+1=63; अतः 63×2+1 = 127।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "series",
    "topicLabel": "Number Series",
    "difficulty": "easy"
  },
  {
    "id": "rs-057",
    "question": "Statement: 'The government has decided to provide free textbooks and digital tablets to all government school students.' Assumptions: I. Many students in government schools cannot afford tablets and textbooks. II. Providing tablets will motivate students and enhance their digital literacy.",
    "questionHindi": "कथन: 'सरकार ने सभी सरकारी स्कूल के विद्यार्थियों को निःशुल्क पाठ्यपुस्तकें और डिजिटल टैबलेट वितरित करने का निर्णय लिया है।' पूर्वधारणाएं: I. सरकारी स्कूलों के कई छात्र टैबलेट और पुस्तकें खरीदने में असमर्थ हैं। II. टैबलेट मिलने से छात्रों का उत्साह बढ़ेगा और उनकी डिजिटल साक्षरता बेहतर होगी।",
    "options": {
      "A": "Only assumption I is implicit",
      "B": "Only assumption II is implicit",
      "C": "Both assumptions I and II are implicit",
      "D": "Neither is implicit"
    },
    "optionsHindi": {
      "A": "केवल पूर्वधारणा I अंतर्निहित है",
      "B": "केवल पूर्वधारणा II अंतर्निहित है",
      "C": "दोनों पूर्वधारणाएं I और II अंतर्निहित हैं",
      "D": "कोई भी अंतर्निहित नहीं है"
    },
    "correct": "C",
    "explanation": "Both assumptions support the rationale behind the policy: affordability gap (Assumption I) and desired educational outcome (Assumption II).",
    "explanationHindi": "सरकारी योजना का उद्देश्य आर्थिक रूप से कमजोर छात्रों की सहायता करना (I) तथा उनकी शिक्षा व तकनीकी ज्ञान में सुधार करना (II) दोनों ही वैध पूर्वधारणाएं हैं।",
    "subject": "reasoning",
    "unit": "logical-reasoning",
    "topic": "statement-conclusion",
    "topicLabel": "Statement & Assumptions",
    "difficulty": "medium"
  },
  {
    "id": "rs-058",
    "question": "If in a code, DELHI is written as 73541 and CALCUTTA as 82589662, how will CALICUT be written?",
    "questionHindi": "यदि किसी कूट में DELHI को 73541 और CALCUTTA को 82589662 लिखा जाता है, तो CALICUT को क्या लिखा जाएगा?",
    "options": {
      "A": "8251896",
      "B": "8251696",
      "C": "8254896",
      "D": "8254962"
    },
    "optionsHindi": {
      "A": "8251896",
      "B": "8251696",
      "C": "8254896",
      "D": "8254962"
    },
    "correct": "A",
    "explanation": "Direct letter-to-digit substitution: C=8, A=2, L=5, I=1, C=8, U=9, T=6. Hence CALICUT = 8251896.",
    "explanationHindi": "अक्षरों का प्रत्यक्ष कोड मिलान: C=8, A=2, L=5, I=1, C=8, U=9, T=6। अतः CALICUT = 8251896।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "coding-decoding",
    "topicLabel": "Direct Coding",
    "difficulty": "easy"
  },
  {
    "id": "rs-059",
    "question": "Which of the following Venn diagrams best represents the relationship between: 'Engineers, Females, and Mothers'?",
    "questionHindi": "वेन आरेख: 'इंजीनियर, महिलाएँ, और माताएँ' के बीच सही संबंध को कौन सा आरेख निरूपित करता है?",
    "options": {
      "A": "All Mothers are Females, and some of both can be Engineers",
      "B": "Three separate mutually exclusive circles",
      "C": "All Engineers are Mothers",
      "D": "All Females are Engineers"
    },
    "optionsHindi": {
      "A": "सभी माताएं महिलाएं हैं (Mothers ⊂ Females), और इंजीनियर दोनों को आंशिक रूप से काटता है",
      "B": "तीन अलग-अलग वृत्त",
      "C": "सभी इंजीनियर माताएं हैं",
      "D": "सभी महिलाएं इंजीनियर हैं"
    },
    "correct": "A",
    "explanation": "All Mothers are biological Females (Mothers circle completely inside Females). Some females and some mothers are Engineers (Engineers circle intersects both).",
    "explanationHindi": "सभी माताएं (Mothers) आवश्यक रूप से महिलाएं (Females) के वृत्त के अंदर होंगी। कुछ माताएं और कुछ महिलाएं इंजीनियर हो सकती हैं (इंजीनियर का वृत्त दोनों को काटेगा)।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "syllogism",
    "topicLabel": "Venn Diagrams",
    "difficulty": "easy"
  },
  {
    "id": "rs-060",
    "question": "Look at the pattern: 2, 6, 12, 20, 30, 42, ?. What is the next number in this sequence?",
    "questionHindi": "संख्या श्रृंखला का अगला पद बताइए: 2, 6, 12, 20, 30, 42, ?",
    "options": {
      "A": "54",
      "B": "56",
      "C": "58",
      "D": "60"
    },
    "optionsHindi": {
      "A": "54",
      "B": "56 (7 × 8 = 56)",
      "C": "58",
      "D": "60"
    },
    "correct": "B",
    "explanation": "Pattern: n*(n+1) or increasing differences (+4, +6, +8, +10, +12, +14). 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42, 7×8=56 (42 + 14 = 56).",
    "explanationHindi": "श्रृंखला में अंतर 4, 6, 8, 10, 12, 14 का है (या n×(n+1)): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42, अगला 7×8 = 56।",
    "subject": "reasoning",
    "unit": "verbal-reasoning",
    "topic": "series",
    "topicLabel": "Number Series",
    "difficulty": "easy"
  }
];
