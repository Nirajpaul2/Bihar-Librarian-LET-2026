import type { Question } from '@/types';

export const generalKnowledgeQuestions: Question[] = [
  {
    id: 'gk-001',
    question: 'The Indus Valley Civilization is known for:',
    questionHindi: 'सिंधु घाटी सभ्यता मुख्य रूप से किसके लिए जानी जाती है?',
    options: { A: 'Town planning', B: 'Agriculture', C: 'Trade', D: 'All of the above' },
    optionsHindi: { A: 'उत्कृष्ट नगर नियोजन (Town Planning)', B: 'कृषि व्यवस्था', C: 'उन्नत व्यापार तंत्र', D: 'उपर्युक्त सभी (All of the above)' },
    correct: 'D',
    explanation: 'The Indus Valley Civilization was famous for its advanced town planning, agriculture, and extensive trade networks.',
    explanationHindi: 'सिंधु घाटी (हड़प्पा) सभ्यता ग्रिड प्रणाली पर आधारित उत्कृष्ट नगर नियोजन, पक्की ईंटों के नालियों, कृषि और सुदूर व्यापार तंत्र के लिए विश्व विख्यात थी।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'ancient-history',
    topicLabel: 'Ancient History',
    difficulty: 'easy',
    tags: ['indus valley']
  },
  {
    id: 'gk-002',
    question: 'Who was the founder of the Maurya Empire?',
    questionHindi: 'मौर्य साम्राज्य का संस्थापक कौन था?',
    options: { A: 'Ashoka', B: 'Chandragupta Maurya', C: 'Bindusara', D: 'Bimbisara' },
    optionsHindi: { A: 'सम्राट अशोक', B: 'चन्द्रगुप्त मौर्य', C: 'बिन्दुसार', D: 'बिम्बिसार' },
    correct: 'B',
    explanation: 'Chandragupta Maurya founded the Maurya Empire in 322 BCE with the help of Chanakya.',
    explanationHindi: 'चन्द्रगुप्त मौर्य ने अपने गुरु चाणक्य (कौटिल्य) की सहायता से नंद वंश के अंतिम शासक घनानंद को पराजित कर 322 ईसा पूर्व में मौर्य साम्राज्य की स्थापना की थी।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'ancient-history',
    topicLabel: 'Ancient History',
    difficulty: 'medium'
  },
  {
    id: 'gk-003',
    question: 'Which Mughal Emperor built the Taj Mahal?',
    questionHindi: 'किस मुगल सम्राट ने ताजमहल का निर्माण करवाया था?',
    options: { A: 'Akbar', B: 'Jahangir', C: 'Shah Jahan', D: 'Aurangzeb' },
    optionsHindi: { A: 'अकबर', B: 'जहाँगीर', C: 'शाहजहाँ', D: 'औरंगज़ेब' },
    correct: 'C',
    explanation: 'Shah Jahan commissioned the Taj Mahal in 1632 in memory of his wife Mumtaz Mahal.',
    explanationHindi: 'मुगल बादशाह शाहजहाँ ने अपनी बेगम मुमताज महल की स्मृति में आगरा में यमुना नदी के तट पर श्वेत संगमरमर से निर्मित विश्व प्रसिद्ध ताजमहल बनवाया था।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'medieval-history',
    topicLabel: 'Medieval History',
    difficulty: 'easy'
  },
  {
    id: 'gk-004',
    question: 'The First Battle of Panipat was fought in the year:',
    questionHindi: 'पानीपत का प्रथम युद्ध किस वर्ष लड़ा गया था?',
    options: { A: '1526', B: '1556', C: '1761', D: '1857' },
    optionsHindi: { A: '1526', B: '1556', C: '1761', D: '1857' },
    correct: 'A',
    explanation: 'The First Battle of Panipat took place in 1526 between Babur and Ibrahim Lodi.',
    explanationHindi: '21 अप्रैल 1526 को पानीपत के पहले युद्ध में बाबर ने दिल्ली सल्तनत के सुल्तान इब्राहिम लोदी को हराकर भारत में मुगल साम्राज्य की नींव रखी थी।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'medieval-history',
    topicLabel: 'Medieval History',
    difficulty: 'medium'
  },
  {
    id: 'gk-005',
    question: 'Who was the first Governor-General of independent India?',
    questionHindi: 'स्वतंत्र भारत के प्रथम गवर्नर-जनरल कौन थे?',
    options: { A: 'C. Rajagopalachari', B: 'Lord Mountbatten', C: 'Jawaharlal Nehru', D: 'Dr. Rajendra Prasad' },
    optionsHindi: { A: 'सी. राजगोपालाचारी', B: 'लॉर्ड माउंटबेटन', C: 'जवाहरलाल नेहरू', D: 'डॉ. राजेन्द्र प्रसाद' },
    correct: 'B',
    explanation: 'Lord Mountbatten served as the first Governor-General of independent India until 1948.',
    explanationHindi: 'स्वतंत्र भारत के पहले गवर्नर-जनरल लॉर्ड माउंटबेटन थे (1947-1948)। यदि "प्रथम स्वतंत्र भारतीय गवर्नर-जनरल" पूछा जाए तो चक्रवर्ती राजगोपालाचारी थे।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'modern-history',
    topicLabel: 'Modern History',
    difficulty: 'medium'
  },
  {
    id: 'gk-006',
    question: 'The Indian National Congress was founded in which year?',
    questionHindi: 'भारतीय राष्ट्रीय कांग्रेस (INC) की स्थापना किस वर्ष हुई थी?',
    options: { A: '1857', B: '1885', C: '1905', D: '1947' },
    optionsHindi: { A: '1857', B: '1885', C: '1905', D: '1947' },
    correct: 'B',
    explanation: 'The Indian National Congress was founded in 1885 by A.O. Hume.',
    explanationHindi: 'भारतीय राष्ट्रीय कांग्रेस की स्थापना 28 दिसंबर 1885 को बॉम्बे में ए.ओ. ह्यूम द्वारा की गई थी और इसके प्रथम अध्यक्ष व्योमेश चंद्र बनर्जी थे।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'modern-history',
    topicLabel: 'Modern History',
    difficulty: 'easy'
  },
  {
    id: 'gk-007',
    question: 'Who gave the slogan "Inquilab Zindabad"?',
    questionHindi: '"इंकलाब जिंदाबाद" का नारा सर्वप्रथम किसने गढ़ा था?',
    options: { A: 'Bhagat Singh', B: 'Subhas Chandra Bose', C: 'Mahatma Gandhi', D: 'Hasrat Mohani' },
    optionsHindi: { A: 'भगत सिंह', B: 'सुभाष चन्द्र बोस', C: 'महात्मा गांधी', D: 'हसरत मोहानी' },
    correct: 'D',
    explanation: 'The slogan was coined by Maulana Hasrat Mohani in 1921, though Bhagat Singh popularized it.',
    explanationHindi: 'इस प्रसिद्ध नारे की रचना 1921 में मौलाना हसरत मोहानी ने की थी, जबकि अमर शहीद भगत सिंह और उनके साथियों ने इसे पूरे देश में लोकप्रिय बनाया था।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'modern-history',
    topicLabel: 'Modern History',
    difficulty: 'hard'
  },
  {
    id: 'gk-008',
    question: 'The Quit India Movement was launched in:',
    questionHindi: '"भारत छोड़ो आंदोलन" (Quit India Movement) किस वर्ष प्रारंभ किया गया था?',
    options: { A: '1920', B: '1930', C: '1942', D: '1945' },
    optionsHindi: { A: '1920', B: '1930', C: '1942', D: '1945' },
    correct: 'C',
    explanation: 'The Quit India Movement was launched by Mahatma Gandhi on August 8, 1942.',
    explanationHindi: '8 अगस्त 1942 को बॉम्बे के ग्वालिया टैंक मैदान से महात्मा गांधी ने "करो या मरो" के आह्वान के साथ भारत छोड़ो आंदोलन शुरू किया था।',
    subject: 'general-knowledge',
    unit: 'indian-history',
    topic: 'modern-history',
    topicLabel: 'Modern History',
    difficulty: 'easy'
  },
  {
    id: 'gk-009',
    question: 'Who is known as the Father of the Indian Constitution?',
    questionHindi: 'भारतीय संविधान का जनक / पिता किसे कहा जाता है?',
    options: { A: 'B. R. Ambedkar', B: 'Jawaharlal Nehru', C: 'Mahatma Gandhi', D: 'Sardar Vallabhbhai Patel' },
    optionsHindi: { A: 'डॉ. बी. आर. अम्बेडकर', B: 'जवाहरलाल नेहरू', C: 'महात्मा गांधी', D: 'सरदार वल्लभभाई पटेल' },
    correct: 'A',
    explanation: 'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Constitution.',
    explanationHindi: 'डॉ. भीमराव अम्बेडकर संविधान निर्माण हेतु गठित प्रारूप समिति (Drafting Committee) के अध्यक्ष थे, इसलिए उन्हें भारतीय संविधान का मुख्य शिल्पकार/जनक कहा जाता है।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'constitution',
    topicLabel: 'Constitution',
    difficulty: 'easy'
  },
  {
    id: 'gk-010',
    question: 'Which Article of the Constitution deals with the Right to Equality?',
    questionHindi: 'भारतीय संविधान का कौन सा अनुच्छेद "विधि के समक्ष समानता" (समानता का अधिकार) से संबंधित है?',
    options: { A: 'Article 14', B: 'Article 19', C: 'Article 21', D: 'Article 32' },
    optionsHindi: { A: 'अनुच्छेद 14', B: 'अनुच्छेद 19', C: 'अनुच्छेद 21', D: 'अनुच्छेद 32' },
    correct: 'A',
    explanation: 'Article 14 ensures equality before the law and equal protection of the laws within India.',
    explanationHindi: 'अनुच्छेद 14 भारत के सभी नागरिकों को कानून के समक्ष समानता तथा विधियों के समान संरक्षण की गारंटी प्रदान करता है।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'fundamental-rights',
    topicLabel: 'Fundamental Rights',
    difficulty: 'medium'
  },
  {
    id: 'gk-011',
    question: 'The maximum strength of the Lok Sabha is:',
    questionHindi: 'वर्तमान नियमों के अनुसार लोक सभा की अधिकतम निर्धारित सदस्य संख्या कितनी हो सकती है?',
    options: { A: '545', B: '550', C: '552', D: '500' },
    optionsHindi: { A: '545', B: '550', C: '552', D: '500' },
    correct: 'B',
    explanation: 'After the removal of Anglo-Indian reserved seats, the maximum strength of Lok Sabha is 550.',
    explanationHindi: '104वें संविधान संशोधन द्वारा आंग्ल-भारतीय (Anglo-Indian) समुदाय के 2 मनोनीत सदस्यों का प्रावधान समाप्त होने के बाद लोक सभा की अधिकतम संख्या 550 निर्धारित है।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'parliament',
    topicLabel: 'Parliament',
    difficulty: 'medium'
  },
  {
    id: 'gk-012',
    question: 'Who appoints the Chief Justice of India?',
    questionHindi: 'भारत के मुख्य न्यायाधीश (CJI) की नियुक्ति किसके द्वारा की जाती है?',
    options: { A: 'Prime Minister', B: 'President', C: 'Law Minister', D: 'Parliament' },
    optionsHindi: { A: 'प्रधानमंत्री', B: 'राष्ट्रपति (President of India)', C: 'विधि मंत्री', D: 'संसद' },
    correct: 'B',
    explanation: 'The Chief Justice of India is appointed by the President under Article 124 of the Constitution.',
    explanationHindi: 'संविधान के अनुच्छेद 124(2) के तहत भारत के मुख्य न्यायाधीश तथा उच्चतम न्यायालय के अन्य न्यायाधीशों की नियुक्ति राष्ट्रपति द्वारा की जाती है।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'judiciary',
    topicLabel: 'Judiciary',
    difficulty: 'easy'
  },
  {
    id: 'gk-013',
    question: 'What is the retirement age for a Supreme Court judge in India?',
    questionHindi: 'भारत में सर्वोच्च न्यायालय (Supreme Court) के न्यायाधीश की सेवानिवृत्ति की आयु क्या है?',
    options: { A: '60 years', B: '62 years', C: '65 years', D: '70 years' },
    optionsHindi: { A: '60 वर्ष', B: '62 वर्ष', C: '65 वर्ष', D: '70 वर्ष' },
    correct: 'C',
    explanation: 'Judges of the Supreme Court of India retire at the age of 65 years.',
    explanationHindi: 'सर्वोच्च न्यायालय के न्यायाधीश 65 वर्ष की आयु में सेवानिवृत्त होते हैं, जबकि उच्च न्यायालय (High Court) के न्यायाधीशों की सेवानिवृत्ति आयु 62 वर्ष होती है।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'judiciary',
    topicLabel: 'Judiciary',
    difficulty: 'easy'
  },
  {
    id: 'gk-014',
    question: 'The Directive Principles of State Policy are borrowed from the constitution of:',
    questionHindi: 'भारतीय संविधान में राज्य के नीति निर्देशक तत्व (DPSP) किस देश के संविधान से लिए गए हैं?',
    options: { A: 'USA', B: 'UK', C: 'Ireland', D: 'Canada' },
    optionsHindi: { A: 'संयुक्त राज्य अमेरिका (USA)', B: 'ब्रिटेन (UK)', C: 'आयरलैंड (Ireland)', D: 'कनाडा' },
    correct: 'C',
    explanation: 'The DPSP concepts in the Indian Constitution were inspired by the Irish Constitution.',
    explanationHindi: 'संविधान के भाग IV (अनुच्छेद 36 से 51) में वर्णित राज्य के नीति निर्देशक सिद्धांत आयरलैंड के संविधान से प्रेरित होकर सम्मिलित किए गए हैं।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'constitution',
    topicLabel: 'Constitution',
    difficulty: 'medium'
  },
  {
    id: 'gk-015',
    question: 'Which constitutional amendment lowered the voting age from 21 to 18?',
    questionHindi: 'किस संविधान संशोधन अधिनियम द्वारा मतदान की न्यूनतम आयु 21 वर्ष से घटाकर 18 वर्ष की गई थी?',
    options: { A: '42nd', B: '44th', C: '61st', D: '73rd' },
    optionsHindi: { A: '42वाँ संशोधन', B: '44वाँ संशोधन', C: '61वाँ संशोधन (1988)', D: '73वाँ संशोधन' },
    correct: 'C',
    explanation: 'The 61st Amendment Act of 1988 lowered the voting age for Lok Sabha and Assembly elections.',
    explanationHindi: '61वें संविधान संशोधन अधिनियम, 1988 द्वारा अनुच्छेद 326 में संशोधन कर मताधिकार की आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई थी।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'constitution',
    topicLabel: 'Constitution',
    difficulty: 'hard'
  },
  {
    id: 'gk-016',
    question: 'Fundamental Duties were added to the Constitution by which amendment?',
    questionHindi: 'भारतीय संविधान में मौलिक कर्तव्यों (Fundamental Duties) को किस संशोधन द्वारा जोड़ा गया था?',
    options: { A: '24th', B: '42nd', C: '44th', D: '86th' },
    optionsHindi: { A: '24वाँ संशोधन', B: '42वाँ संशोधन (1976)', C: '44वाँ संशोधन', D: '86वाँ संशोधन' },
    correct: 'B',
    explanation: 'The 42nd Amendment in 1976 added the Fundamental Duties upon the recommendation of the Swaran Singh Committee.',
    explanationHindi: 'सरदार स्वर्ण सिंह समिति की सिफारिश पर 42वें संविधान संशोधन (1976) द्वारा भाग IV-A और अनुच्छेद 51A जोड़कर 10 मूल कर्तव्य शामिल किए गए थे (86वें संशोधन में 11वाँ जोड़ा गया)।',
    subject: 'general-knowledge',
    unit: 'indian-polity',
    topic: 'constitution',
    topicLabel: 'Constitution',
    difficulty: 'medium'
  },
  {
    id: 'gk-017',
    question: 'Which is the longest river in India?',
    questionHindi: 'भारत की सबसे लंबी नदी कौन सी है?',
    options: { A: 'Brahmaputra', B: 'Indus', C: 'Ganga', D: 'Godavari' },
    optionsHindi: { A: 'ब्रह्मपुत्र', B: 'सिंधु', C: 'गंगा (Ganga - 2,525 किमी)', D: 'गोदावरी' },
    correct: 'C',
    explanation: 'The Ganga is the longest river flowing entirely within India, covering a distance of 2,525 km.',
    explanationHindi: 'गंगा नदी भारत की सबसे पवित्र और सबसे लंबी नदी है, जिसकी भारत में कुल लंबाई 2,525 किलोमीटर है। दक्षिण भारत की सबसे लंबी नदी गोदावरी (1,465 किमी) है।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-geography',
    topicLabel: 'Indian Geography',
    difficulty: 'easy'
  },
  {
    id: 'gk-018',
    question: 'The highest peak in India (undisputed territory) is:',
    questionHindi: 'भारत में स्थित सबसे ऊँची पर्वत चोटी (निर्विरोध भारतीय भूभाग में) कौन सी है?',
    options: { A: 'K2 (Godwin Austen)', B: 'Kangchenjunga', C: 'Nanda Devi', D: 'Kamet' },
    optionsHindi: { A: 'के2 (गॉडविन ऑस्टिन)', B: 'कंचनजंघा (Kangchenjunga - 8,586 मी)', C: 'नंदा देवी', D: 'कामेत' },
    correct: 'B',
    explanation: 'Kangchenjunga is the highest peak in India and the third highest in the world.',
    explanationHindi: 'कंचनजंघा (सिक्किम) भारत की सबसे ऊँची चोटी (8,586 मीटर) तथा विश्व की तीसरी सबसे ऊँची चोटी है। (K2 पाक अधिकृत कश्मीर PoK में स्थित है)।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-geography',
    topicLabel: 'Indian Geography',
    difficulty: 'medium'
  },
  {
    id: 'gk-019',
    question: 'Which state in India has the longest coastline?',
    questionHindi: 'भारत के किस राज्य की तटरेखा (समुद्री सीमा) सबसे लंबी है?',
    options: { A: 'Maharashtra', B: 'Tamil Nadu', C: 'Gujarat', D: 'Andhra Pradesh' },
    optionsHindi: { A: 'महाराष्ट्र', B: 'तमिलनाडु', C: 'गुजरात (लगभग 1,600 किमी)', D: 'आन्ध्र प्रदेश' },
    correct: 'C',
    explanation: 'Gujarat has the longest mainland coastline in India, extending over 1,600 km.',
    explanationHindi: 'गुजरात राज्य की मुख्य भूमि तटरेखा लगभग 1,600 किमी लंबी है, जो भारत में सर्वाधिक है। दूसरे स्थान पर आन्ध्र प्रदेश की तटरेखा आती है।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-geography',
    topicLabel: 'Indian Geography',
    difficulty: 'easy'
  },
  {
    id: 'gk-020',
    question: 'The headquarter of RBI is located in:',
    questionHindi: 'भारतीय रिज़र्व बैंक (RBI) का केंद्रीय मुख्यालय कहाँ स्थित है?',
    options: { A: 'Delhi', B: 'Mumbai', C: 'Kolkata', D: 'Chennai' },
    optionsHindi: { A: 'नई दिल्ली', B: 'मुंबई', C: 'कोलकाता', D: 'चेन्नई' },
    correct: 'B',
    explanation: 'The Reserve Bank of India (RBI) is headquartered in Mumbai.',
    explanationHindi: 'भारतीय रिज़र्व बैंक की स्थापना 1 अप्रैल 1935 को कोलकाता में हुई थी, किन्तु 1937 में इसका मुख्यालय स्थायी रूप से मुंबई स्थानांतरित कर दिया गया था।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-economy',
    topicLabel: 'Indian Economy',
    difficulty: 'easy'
  },
  {
    id: 'gk-021',
    question: 'GST (Goods and Services Tax) was introduced in India in which year?',
    questionHindi: 'भारत में वस्तु एवं सेवा कर (GST) किस वर्ष लागू किया गया था?',
    options: { A: '2015', B: '2016', C: '2017', D: '2018' },
    optionsHindi: { A: '2015', B: '2016', C: '1 जुलाई 2017', D: '2018' },
    correct: 'C',
    explanation: 'GST was implemented in India on July 1, 2017.',
    explanationHindi: '101वें संविधान संशोधन के तहत भारत में 1 जुलाई 2017 से "एक राष्ट्र, एक कर" के संकल्प के साथ जीएसटी (GST) लागू किया गया था।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-economy',
    topicLabel: 'Indian Economy',
    difficulty: 'medium'
  },
  {
    id: 'gk-022',
    question: 'Which Indian state is the largest producer of wheat?',
    questionHindi: 'भारत का कौन सा राज्य गेहूँ का सबसे बड़ा उत्पादक राज्य है?',
    options: { A: 'Punjab', B: 'Haryana', C: 'Madhya Pradesh', D: 'Uttar Pradesh' },
    optionsHindi: { A: 'पंजाब', B: 'हरियाणा', C: 'मध्य प्रदेश', D: 'उत्तर प्रदेश' },
    correct: 'D',
    explanation: 'Uttar Pradesh is the highest wheat-producing state in India.',
    explanationHindi: 'उत्तर प्रदेश भारत में कुल गेहूँ उत्पादन में प्रथम स्थान पर है, जबकि प्रति हेक्टेयर उत्पादकता में पंजाब अग्रणी है।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-economy',
    topicLabel: 'Indian Economy',
    difficulty: 'medium'
  },
  {
    id: 'gk-023',
    question: 'NITI Aayog replaced which of the following institutions?',
    questionHindi: 'नीति आयोग (NITI Aayog) ने निम्नलिखित में से किस संस्था का स्थान लिया?',
    options: { A: 'Finance Commission', B: 'Planning Commission', C: 'National Development Council', D: 'UPSC' },
    optionsHindi: { A: 'वित्त आयोग', B: 'योजना आयोग (Planning Commission)', C: 'राष्ट्रीय विकास परिषद', D: 'संघ लोक सेवा आयोग' },
    correct: 'B',
    explanation: 'The Planning Commission was replaced by the NITI Aayog on January 1, 2015.',
    explanationHindi: '1 जनवरी 2015 को योजना आयोग के स्थान पर "नीति आयोग" (National Institution for Transforming India) की स्थापना थिंक टैंक के रूप में की गई।',
    subject: 'general-knowledge',
    unit: 'geography-economy',
    topic: 'indian-economy',
    topicLabel: 'Indian Economy',
    difficulty: 'easy'
  },
  {
    id: 'gk-024',
    question: 'What is the chemical name of Vitamin C?',
    questionHindi: 'विटामिन सी (Vitamin C) का रासायनिक नाम क्या है?',
    options: { A: 'Ascorbic acid', B: 'Citric acid', C: 'Retinol', D: 'Calciferol' },
    optionsHindi: { A: 'एस्कॉर्बिक एसिड (Ascorbic Acid)', B: 'साइट्रिक एसिड', C: 'रेटिनॉल', D: 'कैल्सिफेरॉल' },
    correct: 'A',
    explanation: 'Vitamin C is scientifically known as Ascorbic acid, essential for tissue repair and immune function.',
    explanationHindi: 'विटामिन सी का रासायनिक नाम एस्कॉर्बिक एसिड है। इसकी कमी से स्कर्वी (Scurvy) रोग होता है तथा यह खट्टे फलों में प्रचुर मात्रा में पाया जाता है।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'science-technology',
    topicLabel: 'Science & Technology',
    difficulty: 'medium'
  },
  {
    id: 'gk-025',
    question: 'ISRO was founded in which year?',
    questionHindi: 'भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) की स्थापना किस वर्ष हुई थी?',
    options: { A: '1962', B: '1969', C: '1972', D: '1958' },
    optionsHindi: { A: '1962', B: '15 अगस्त 1969', C: '1972', D: '1958' },
    correct: 'B',
    explanation: 'The Indian Space Research Organisation (ISRO) was formed on August 15, 1969.',
    explanationHindi: 'इसरो (ISRO) की स्थापना 15 अगस्त 1969 को डॉ. विक्रम साराभाई के प्रयासों से हुई थी। इसका मुख्यालय बेंगलुरु में स्थित है।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'science-technology',
    topicLabel: 'Science & Technology',
    difficulty: 'medium'
  },
  {
    id: 'gk-026',
    question: 'Which gas is most abundant in the Earth\'s atmosphere?',
    questionHindi: 'पृथ्वी के वायुमंडल में कौन सी गैस सर्वाधिक मात्रा में पाई जाती है?',
    options: { A: 'Oxygen', B: 'Carbon Dioxide', C: 'Nitrogen', D: 'Argon' },
    optionsHindi: { A: 'ऑक्सीजन (लगभग 21%)', B: 'कार्बन डाइऑक्साइड', C: 'नाइट्रोजन (लगभग 78%)', D: 'आर्गन' },
    correct: 'C',
    explanation: 'Nitrogen makes up about 78% of the Earth\'s atmosphere.',
    explanationHindi: 'पृथ्वी के वायुमंडल में नाइट्रोजन गैस लगभग 78.08% तथा ऑक्सीजन लगभग 20.95% पाई जाती है।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'science-technology',
    topicLabel: 'Science & Technology',
    difficulty: 'easy'
  },
  {
    id: 'gk-027',
    question: 'Who won the Nobel Prize in Literature from India first?',
    questionHindi: 'भारत से साहित्य का नोबेल पुरस्कार जीतने वाले प्रथम व्यक्ति कौन थे?',
    options: { A: 'Rabindranath Tagore', B: 'C.V. Raman', C: 'Mother Teresa', D: 'Amartya Sen' },
    optionsHindi: { A: 'रवीन्द्रनाथ टैगोर (1913)', B: 'सी.वी. रमन', C: 'मदर टेरेसा', D: 'अमर्त्य सेन' },
    correct: 'A',
    explanation: 'Rabindranath Tagore won the Nobel Prize in Literature in 1913 for Gitanjali.',
    explanationHindi: 'गुरुदेव रवीन्द्रनाथ टैगोर को 1913 में उनकी अमर कृति "गीतांजलि" के लिए साहित्य का नोबेल पुरस्कार मिला। वे नोबेल पुरस्कार पाने वाले पहले गैर-यूरोपीय एवं भारतीय थे।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'culture-awards',
    topicLabel: 'Culture & Awards',
    difficulty: 'easy'
  },
  {
    id: 'gk-028',
    question: 'Sattriya is a classical dance form of which state?',
    questionHindi: 'शास्त्रीय नृत्य "सत्रिया" (Sattriya) किस राज्य से संबंधित है?',
    options: { A: 'Manipur', B: 'Assam', C: 'Odisha', D: 'Kerala' },
    optionsHindi: { A: 'मणिपुर', B: 'असम (Assam)', C: 'ओडिशा', D: 'केरल' },
    correct: 'B',
    explanation: 'Sattriya is a traditional classical dance form originating from the state of Assam.',
    explanationHindi: 'सत्रिया असम का प्रसिद्ध शास्त्रीय नृत्य है, जिसकी शुरुआत 15वीं शताब्दी में महान वैष्णव संत श्रीमंत शंकरदेव द्वारा की गई थी।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'culture-awards',
    topicLabel: 'Culture & Awards',
    difficulty: 'hard'
  },
  {
    id: 'gk-029',
    question: 'Which is the highest civilian award in India?',
    questionHindi: 'भारत का सर्वोच्च नागरिक सम्मान (Highest Civilian Award) कौन सा है?',
    options: { A: 'Padma Vibhushan', B: 'Bharat Ratna', C: 'Param Vir Chakra', D: 'Padma Bhushan' },
    optionsHindi: { A: 'पद्म विभूषण', B: 'भारत रत्न (Bharat Ratna)', C: 'परमवीर चक्र (सर्वोच्च सैन्य सम्मान)', D: 'पद्म भूषण' },
    correct: 'B',
    explanation: 'The Bharat Ratna is the highest civilian award of the Republic of India.',
    explanationHindi: 'भारत रत्न देश का सर्वोच्च नागरिक सम्मान है, जिसकी शुरुआत 1954 में हुई थी। परमवीर चक्र भारत का सर्वोच्च वीरता/सैन्य सम्मान है।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'culture-awards',
    topicLabel: 'Culture & Awards',
    difficulty: 'easy'
  },
  {
    id: 'gk-030',
    question: 'The Book "Discovery of India" was written by:',
    questionHindi: '"डिस्कवरी ऑफ इंडिया" (भारत की खोज) पुस्तक के लेखक कौन हैं?',
    options: { A: 'Mahatma Gandhi', B: 'Subhas Chandra Bose', C: 'Jawaharlal Nehru', D: 'Dr. S. Radhakrishnan' },
    optionsHindi: { A: 'महात्मा गांधी', B: 'सुभाष चन्द्र बोस', C: 'पं. जवाहरलाल नेहरू', D: 'डॉ. सर्वपल्ली राधाकृष्णन' },
    correct: 'C',
    explanation: 'Jawaharlal Nehru wrote "The Discovery of India" during his imprisonment at Ahmednagar fort.',
    explanationHindi: 'पंडित जवाहरलाल नेहरू ने 1942-1946 के दौरान अहमदनगर फोर्ट जेल में बंदी जीवन व्यतीत करते हुए "डिस्कवरी ऑफ इंडिया" पुस्तक लिखी थी।',
    subject: 'general-knowledge',
    unit: 'science-culture',
    topic: 'culture-awards',
    topicLabel: 'Culture & Awards',
    difficulty: 'medium'
  },
  {
    "id": "gk-031",
    "question": "Which Constitutional Amendment Act in 1976 added the terms 'Socialist', 'Secular', and 'Integrity' to the Preamble of the Constitution of India?",
    "questionHindi": "1976 में किस संविधान संशोधन अधिनियम द्वारा भारतीय संविधान की प्रस्तावना में 'समाजवादी', 'पंथनिरपेक्ष' और 'अखंडता' शब्द जोड़े गए थे?",
    "options": {
      "A": "42nd Amendment Act",
      "B": "44th Amendment Act",
      "C": "73rd Amendment Act",
      "D": "86th Amendment Act"
    },
    "optionsHindi": {
      "A": "42वां संविधान संशोधन अधिनियम (1976)",
      "B": "44वां संविधान संशोधन (1978)",
      "C": "73वां संविधान संशोधन (1992)",
      "D": "86वां संविधान संशोधन (2002)"
    },
    "correct": "A",
    "explanation": "The 42nd Constitutional Amendment Act of 1976 (known as the 'Mini-Constitution') amended the Preamble to insert 'Socialist', 'Secular', and 'Integrity'.",
    "explanationHindi": "42वें संविधान संशोधन 1976 (लघु संविधान) द्वारा संविधान की उद्देशिका में 'समाजवादी', 'पंथनिरपेक्ष' और 'अखंडता' शब्द सम्मिलित किए गए थे।",
    "subject": "general-knowledge",
    "unit": "indian-polity",
    "topic": "constitution",
    "topicLabel": "Indian Constitution",
    "difficulty": "easy"
  },
  {
    "id": "gk-032",
    "question": "Which Article of the Constitution of India guarantees the Right to Elementary Education (free and compulsory education for children aged 6 to 14) as a Fundamental Right?",
    "questionHindi": "भारतीय संविधान का कौन सा अनुच्छेद 6 से 14 वर्ष के बच्चों हेतु 'निःशुल्क एवं अनिवार्य प्रारंभिक शिक्षा' को मौलिक अधिकार घोषित करता है?",
    "options": {
      "A": "Article 19",
      "B": "Article 21A",
      "C": "Article 24",
      "D": "Article 45"
    },
    "optionsHindi": {
      "A": "अनुच्छेद 19",
      "B": "अनुच्छेद 21A (अनुच्छेद 21क)",
      "C": "अनुच्छेद 24",
      "D": "अनुच्छेद 45"
    },
    "correct": "B",
    "explanation": "Article 21A was inserted by the 86th Constitutional Amendment Act in 2002, making elementary education a fundamental right.",
    "explanationHindi": "86वें संविधान संशोधन 2002 द्वारा अनुच्छेद 21A जोड़ा गया, जिसके तहत 6 से 14 वर्ष तक के सभी बच्चों के लिए प्रारंभिक शिक्षा एक मौलिक अधिकार है।",
    "subject": "general-knowledge",
    "unit": "indian-polity",
    "topic": "fundamental-rights",
    "topicLabel": "Fundamental Rights",
    "difficulty": "easy"
  },
  {
    "id": "gk-033",
    "question": "Why did Dr. B.R. Ambedkar describe Article 32 (Right to Constitutional Remedies) as the 'Heart and Soul' of the Indian Constitution?",
    "questionHindi": "डॉ. बी.आर. अंबेडकर ने किस अनुच्छेद को भारतीय संविधान की 'हृदय और आत्मा' (Heart and Soul) कहा था?",
    "options": {
      "A": "Article 14 (Equality)",
      "B": "Article 19 (Freedom of Speech)",
      "C": "Article 32 (Constitutional Remedies)",
      "D": "Article 368 (Amendment)"
    },
    "optionsHindi": {
      "A": "अनुच्छेद 14 (समानता का अधिकार)",
      "B": "अनुच्छेद 19 (स्वतंत्रता का अधिकार)",
      "C": "अनुच्छेद 32 (संवैधानिक उपचारों का अधिकार)",
      "D": "अनुच्छेद 368 (संशोधन प्रक्रिया)"
    },
    "correct": "C",
    "explanation": "Dr. Ambedkar called Article 32 the heart and soul of the Constitution because it empowers citizens to move the Supreme Court directly via writs to enforce Fundamental Rights.",
    "explanationHindi": "अनुच्छेद 32 नागरिकों को अपने मौलिक अधिकारों के उल्लंघन पर सीधे सर्वोच्च न्यायालय (रिट याचिकाओं के माध्यम से) जाने का अधिकार प्रदान करता है।",
    "subject": "general-knowledge",
    "unit": "indian-polity",
    "topic": "fundamental-rights",
    "topicLabel": "Indian Constitution & Writs",
    "difficulty": "medium"
  },
  {
    "id": "gk-034",
    "question": "The famous ancient dockyard of the Indus Valley Civilization was discovered at which archaeological site?",
    "questionHindi": "सिंधु घाटी सभ्यता का सुप्रसिद्ध प्राचीन जहाजी गोदी (बंदरगाह / Dockyard) किस पुरातात्विक स्थल पर खोजा गया था?",
    "options": {
      "A": "Harappa",
      "B": "Mohenjo-daro",
      "C": "Lothal (Gujarat)",
      "D": "Kalibangan"
    },
    "optionsHindi": {
      "A": "हड़प्पा",
      "B": "मोहनजोदड़ो",
      "C": "लोथल (गुजरात)",
      "D": "कालीबंगन"
    },
    "correct": "C",
    "explanation": "Lothal, located along the Bhogava river in Gujarat, was a major maritime port and commercial dockyard of the Harappan civilization.",
    "explanationHindi": "गुजरात में भोगवा नदी के तट पर स्थित लोथल हड़प्पा सभ्यता का प्रमुख बंदरगाह था, जहाँ पकी ईंटों से बना विशाल जहाजी डॉकयार्ड मिला है।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "ancient-history",
    "topicLabel": "Ancient Indian History",
    "difficulty": "easy"
  },
  {
    "id": "gk-035",
    "question": "Which historic session of the Indian National Congress passed the historic resolution for 'Purna Swaraj' (Complete Independence) in 1929?",
    "questionHindi": "1929 में भारतीय राष्ट्रीय कांग्रेस के किस ऐतिहासिक अधिवेशन में 'पूर्ण स्वराज' (Complete Independence) का प्रस्ताव पारित किया गया था?",
    "options": {
      "A": "Calcutta Session",
      "B": "Lahore Session (under Jawaharlal Nehru)",
      "C": "Karachi Session",
      "D": "Nagpur Session"
    },
    "optionsHindi": {
      "A": "कलकत्ता अधिवेशन",
      "B": "लाहौर अधिवेशन (अध्यक्ष: पं. जवाहरलाल नेहरू)",
      "C": "कराची अधिवेशन",
      "D": "नागपुर अधिवेशन"
    },
    "correct": "B",
    "explanation": "The Lahore Congress Session in December 1929 presided over by Jawaharlal Nehru declared 'Purna Swaraj' as Congress's ultimate objective and unfurled the tricolor on the Ravi river.",
    "explanationHindi": "दिसंबर 1929 में रावी नदी के तट पर जवाहरलाल नेहरू की अध्यक्षता में लाहौर अधिवेशन में पूर्ण स्वराज का ऐतिहासिक संकल्प लिया गया था।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "modern-history",
    "topicLabel": "Freedom Movement",
    "difficulty": "medium"
  },
  {
    "id": "gk-036",
    "question": "Which is the highest mountain peak situated entirely within the territory of India?",
    "questionHindi": "वर्तमान में भारत की भौगोलिक सीमा में स्थित सर्वोच्च पर्वत शिखर कौन सा है?",
    "options": {
      "A": "K2 (Godwin-Austen)",
      "B": "Kangchenjunga",
      "C": "Nanda Devi",
      "D": "Kamet"
    },
    "optionsHindi": {
      "A": "के2 / गॉडविन ऑस्टिन (PoK में)",
      "B": "कंचनजंगा (सिक्किम - 8,586 मी.)",
      "C": "नंदा देवी (उत्तराखंड)",
      "D": "कामेत"
    },
    "correct": "B",
    "explanation": "Kangchenjunga (8,586 m) in Sikkim is the highest peak in India. (K2 is the highest in the Indian subcontinent but lies in Pakistan-administered Kashmir).",
    "explanationHindi": "सिक्किम में स्थित कंचनजंगा (8,586 मीटर) भारत में स्थित सबसे ऊँचा पर्वत शिखर है। पूर्णतः भारत के भीतर स्थित दूसरी सर्वोच्च चोटी नंदा देवी है।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-geography",
    "topicLabel": "Indian Geography",
    "difficulty": "medium"
  },
  {
    "id": "gk-037",
    "question": "The Tropic of Cancer (23.5° N latitude) passes through how many states of India?",
    "questionHindi": "कर्क रेखा (23.5° उत्तरी अक्षांश) भारत के कुल कितने राज्यों से होकर गुजरती है?",
    "options": {
      "A": "6 states",
      "B": "7 states",
      "C": "8 states",
      "D": "9 states"
    },
    "optionsHindi": {
      "A": "6 राज्य",
      "B": "7 राज्य",
      "C": "8 राज्य (गुजरात, राजस्थान, मप्र, छत्तीसगढ़, झारखंड, प. बंगाल, त्रिपुरा, मिजोरम)",
      "D": "9 राज्य"
    },
    "correct": "C",
    "explanation": "The Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.",
    "explanationHindi": "कर्क रेखा भारत के 8 राज्यों से गुजरती है: गुजरात, राजस्थान, मध्य प्रदेश, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम। (यह बिहार से होकर नहीं गुजरती)।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-geography",
    "topicLabel": "Indian Geography",
    "difficulty": "easy"
  },
  {
    "id": "gk-038",
    "question": "What is the SI unit of measurement for electrical resistance?",
    "questionHindi": "विद्युत प्रतिरोध (Electrical Resistance) की SI मात्रक इकाई क्या है?",
    "options": {
      "A": "Volt",
      "B": "Ampere",
      "C": "Ohm (Ω)",
      "D": "Watt"
    },
    "optionsHindi": {
      "A": "वोल्ट (Volt)",
      "B": "एम्पीयर (Ampere)",
      "C": "ओम (Ohm - Ω)",
      "D": "वाट (Watt)"
    },
    "correct": "C",
    "explanation": "Ohm (symbol: Ω), named after Georg Simon Ohm, is the SI unit of electrical resistance (R = V / I).",
    "explanationHindi": "विद्युत प्रतिरोध का SI मात्रक 'ओम' (Ohm - Ω) होता है। विद्युत धारा का मात्रक एम्पीयर और विभवांतर का मात्रक वोल्ट है।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "General Science",
    "difficulty": "easy"
  },
  {
    "id": "gk-039",
    "question": "Deficiency of Vitamin C in the human diet causes which disease characterized by bleeding gums and delayed wound healing?",
    "questionHindi": "मानव आहार में विटामिन सी (एस्कॉर्बिक एसिड) की कमी से मसूड़ों से खून आना और घाव न भरना किस रोग का लक्षण है?",
    "options": {
      "A": "Rickets",
      "B": "Scurvy",
      "C": "Beri-Beri",
      "D": "Goitre"
    },
    "optionsHindi": {
      "A": "रिकेट्स (विटामिन D)",
      "B": "स्कर्वी (Scurvy - विटामिन C)",
      "C": "बेरी-बेरी (विटामिन B1)",
      "D": "घेंघा (आयोडीन)"
    },
    "correct": "B",
    "explanation": "Vitamin C (ascorbic acid) deficiency leads to Scurvy, causing fatigue, swollen bleeding gums, joint pain, and poor wound healing.",
    "explanationHindi": "विटामिन C की कमी से स्कर्वी (Scurvy) रोग होता है। आंवला, नींबू, संतरा आदि खट्टे फल विटामिन C के समृद्ध स्रोत हैं।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "General Science & Biology",
    "difficulty": "easy"
  },
  {
    "id": "gk-040",
    "question": "In which year was the wildlife conservation initiative 'Project Tiger' launched in India?",
    "questionHindi": "भारत में बाघों के संरक्षण हेतु ऐतिहासिक 'प्रोजेक्ट टाइगर' (Project Tiger) किस वर्ष शुरू किया गया था?",
    "options": {
      "A": "1971",
      "B": "1973",
      "C": "1980",
      "D": "1992"
    },
    "optionsHindi": {
      "A": "1971",
      "B": "1973 (जिम कॉर्बेट राष्ट्रीय उद्यान से)",
      "C": "1980",
      "D": "1992"
    },
    "correct": "B",
    "explanation": "Project Tiger was launched on 1st April 1973 from Jim Corbett National Park by the Indira Gandhi government to protect endangered Bengal tigers.",
    "explanationHindi": "प्रोजेक्ट टाइगर 1 अप्रैल 1973 को जिम कॉर्बेट नेशनल पार्क (उत्तराखंड) से शुरू किया गया था, जिसका उद्देश्य बाघों की घटती आबादी को बचाना था।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-geography",
    "topicLabel": "Environment & Ecology",
    "difficulty": "medium"
  },
  {
    "id": "gk-041",
    "question": "Who was the Viceroy of India when the Partition of Bengal took place in 1905?",
    "questionHindi": "1905 में बंगाल विभाजन (Partition of Bengal) के समय भारत का वायसराय कौन था?",
    "options": {
      "A": "Lord Ripon",
      "B": "Lord Curzon",
      "C": "Lord Minto",
      "D": "Lord Hardinge"
    },
    "optionsHindi": {
      "A": "लॉर्ड रिपन",
      "B": "लॉर्ड कर्जन (Lord Curzon)",
      "C": "लॉर्ड मिंटो",
      "D": "लॉर्ड हार्डिंग"
    },
    "correct": "B",
    "explanation": "Lord Curzon ordered the Partition of Bengal in July 1905, triggering the nationwide Swadeshi and Boycott movements.",
    "explanationHindi": "लॉर्ड कर्जन ने 1905 में 'फूट डालो और राज करो' की नीति के तहत बंगाल का विभाजन किया था, जिसके विरोध में स्वदेशी आंदोलन शुरू हुआ।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "modern-history",
    "topicLabel": "Modern History",
    "difficulty": "easy"
  },
  {
    "id": "gk-042",
    "question": "Under which Article of the Constitution of India can the President declare a National Emergency on the grounds of war, external aggression, or armed rebellion?",
    "questionHindi": "युद्ध, बाह्य आक्रमण या सशस्त्र विद्रोह की स्थिति में राष्ट्रपति किस अनुच्छेद के तहत राष्ट्रीय आपातकाल की घोषणा कर सकते हैं?",
    "options": {
      "A": "Article 352",
      "B": "Article 356",
      "C": "Article 360",
      "D": "Article 365"
    },
    "optionsHindi": {
      "A": "अनुच्छेद 352 (राष्ट्रीय आपातकाल)",
      "B": "अनुच्छेद 356 (राष्ट्रपति शासन)",
      "C": "अनुच्छेद 360 (वित्तीय आपातकाल)",
      "D": "अनुच्छेद 365"
    },
    "correct": "A",
    "explanation": "Article 352 deals with National Emergency, Article 356 with President's Rule in states, and Article 360 with Financial Emergency.",
    "explanationHindi": "अनुच्छेद 352 के तहत राष्ट्रीय आपातकाल, अनुच्छेद 356 के तहत राज्यों में राष्ट्रपति शासन तथा अनुच्छेद 360 के तहत वित्तीय आपातकाल घोषित किया जाता है।",
    "subject": "general-knowledge",
    "unit": "indian-polity",
    "topic": "parliament",
    "topicLabel": "Emergency Provisions",
    "difficulty": "medium"
  },
  {
    "id": "gk-043",
    "question": "What is the primary function of the Reserve Bank of India's 'Repo Rate'?",
    "questionHindi": "भारतीय रिजर्व बैंक (RBI) की 'रेपो दर' (Repo Rate) का क्या अर्थ है?",
    "options": {
      "A": "Rate at which commercial banks deposit excess money with RBI",
      "B": "Interest rate at which RBI lends short-term funds to commercial banks against government securities",
      "C": "Tax levied on corporate profits",
      "D": "Exchange rate between Indian Rupee and US Dollar"
    },
    "optionsHindi": {
      "A": "जिस दर पर बैंक अपना अतिरिक्त पैसा आरबीआई के पास जमा करते हैं (रिवर्स रेपो)",
      "B": "वह ब्याज दर जिस पर आरबीआई वाणिज्यिक बैंकों को अल्पकालिक ऋण प्रदान करता है",
      "C": "कॉर्पोरेट लाभ पर लगने वाला कर",
      "D": "रुपये की विनिमय दर"
    },
    "correct": "B",
    "explanation": "Repo Rate (Repurchase Option) is the key benchmark interest rate at which the central bank lends money to commercial banks against government securities.",
    "explanationHindi": "रेपो रेट वह ब्याज दर होती है जिस पर रिजर्व बैंक वाणिज्यिक बैंकों को उनकी अल्पकालिक जरूरतों के लिए सरकारी प्रतिभूतियों के बदले ऋण देता है।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-economy",
    "topicLabel": "Indian Economy & Banking",
    "difficulty": "medium"
  },
  {
    "id": "gk-044",
    "question": "Which gas is primarily responsible for the greenhouse effect and global warming in the Earth's lower atmosphere?",
    "questionHindi": "पृथ्वी के वायुमंडल में ग्रीनहाउस प्रभाव और ग्लोबल वार्मिंग के लिए मुख्य रूप से उत्तरदायी गैस कौन सी है?",
    "options": {
      "A": "Oxygen",
      "B": "Carbon Dioxide (CO2)",
      "C": "Nitrogen",
      "D": "Argon"
    },
    "optionsHindi": {
      "A": "ऑक्सीजन",
      "B": "कार्बन डाइऑक्साइड (CO2) एवं मीथेन",
      "C": "नाइट्रोजन",
      "D": "आर्गन"
    },
    "correct": "B",
    "explanation": "Carbon dioxide (along with methane, nitrous oxide, and water vapor) traps outgoing infrared thermal radiation, causing global climate warming.",
    "explanationHindi": "कार्बन डाइऑक्साइड (CO2) मुख्य ग्रीनहाउस गैस है जो पृथ्वी से उत्सर्जित अवरक्त (Infrared) किरणों को सोखकर वायुमंडल का तापमान बढ़ाती है।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "Ecology & Climate Science",
    "difficulty": "easy"
  },
  {
    "id": "gk-045",
    "question": "Who was the distinguished scientist who discovered the double-helix molecular structure of DNA in 1953 along with Francis Crick?",
    "questionHindi": "1953 में फ्रांसिस क्रिक के साथ डीएनए (DNA) की द्विकुंडलिनी (Double Helix) संरचना की खोज किसने की थी?",
    "options": {
      "A": "Gregor Mendel",
      "B": "James Watson",
      "C": "Charles Darwin",
      "D": "Robert Hooke"
    },
    "optionsHindi": {
      "A": "ग्रेगर मेंडल",
      "B": "जेम्स वॉटसन (James Watson)",
      "C": "चार्ल्स डार्विन",
      "D": "रॉबर्ट हुक"
    },
    "correct": "B",
    "explanation": "James Watson and Francis Crick proposed the double helix structure of Deoxyribonucleic Acid (DNA) in 1953, receiving the Nobel Prize in 1962.",
    "explanationHindi": "जेम्स वॉटसन और फ्रांसिस क्रिक ने 1953 में डीएनए के डबल हेलिक्स मॉडल की खोज की थी, जिसके लिए उन्हें 1962 में नोबेल पुरस्कार प्रदान किया गया।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "Science & Discoveries",
    "difficulty": "medium"
  },
  {
    "id": "gk-046",
    "question": "Which plateau is known as the 'Roof of the World' due to its immense altitude?",
    "questionHindi": "अत्यधिक ऊँचाई और विस्तार के कारण किस पठार को 'संसार की छत' (Roof of the World) कहा जाता है?",
    "options": {
      "A": "Deccan Plateau",
      "B": "Pamir Plateau",
      "C": "Colorado Plateau",
      "D": "Anatolian Plateau"
    },
    "optionsHindi": {
      "A": "दक्कन का पठार",
      "B": "पामीर का पठार (तिब्बत क्षेत्र)",
      "C": "कोलोराडो पठार",
      "D": "अनातोलिया पठार"
    },
    "correct": "B",
    "explanation": "The Pamir Mountains/Plateau in Central Asia has long been known as the 'Roof of the World' (Yad-i-Dunya) because of its soaring elevated junction.",
    "explanationHindi": "मध्य एशिया में स्थित पामीर के पठार (और तिब्बत के पठार) को अत्यधिक ऊँचाई (औसत 4500 मीटर से अधिक) के कारण 'विश्व की छत' कहा जाता है।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-geography",
    "topicLabel": "World & Physical Geography",
    "difficulty": "easy"
  },
  {
    "id": "gk-047",
    "question": "Who was the first woman President of the Indian National Congress?",
    "questionHindi": "भारतीय राष्ट्रीय कांग्रेस की प्रथम महिला अध्यक्ष कौन थीं?",
    "options": {
      "A": "Sarojini Naidu",
      "B": "Annie Besant",
      "C": "Nellie Sengupta",
      "D": "Kamla Nehru"
    },
    "optionsHindi": {
      "A": "सरोजिनी नायडू (प्रथम 'भारतीय' महिला अध्यक्ष - 1925)",
      "B": "एनी बेसेंट (प्रथम महिला अध्यक्ष - 1917 कलकत्ता)",
      "C": "नेली सेनगुप्ता",
      "D": "कमला नेहरू"
    },
    "correct": "B",
    "explanation": "Annie Besant presided over the 1917 Calcutta session of INC as its first female president. Sarojini Naidu was the first *Indian* woman president in 1925 (Kanpur).",
    "explanationHindi": "डॉ. एनी बेसेंट 1917 के कलकत्ता अधिवेशन में कांग्रेस की पहली महिला अध्यक्ष बनी थीं। सरोजिनी नायडू 1925 के कानपुर अधिवेशन में पहली 'भारतीय महिला' अध्यक्ष बनीं।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "modern-history",
    "topicLabel": "Modern Indian History",
    "difficulty": "medium"
  },
  {
    "id": "gk-048",
    "question": "Which international environmental treaty was signed in 1987 to phase out substances that deplete the protective Ozone Layer?",
    "questionHindi": "ओजोन परत को नष्ट करने वाले पदार्थों (CFCs) के उपयोग को समाप्त करने हेतु 1987 में कौन सा ऐतिहासिक अंतर्राष्ट्रीय समझौता हुआ था?",
    "options": {
      "A": "Kyoto Protocol",
      "B": "Montreal Protocol",
      "C": "Basel Convention",
      "D": "Ramsar Convention"
    },
    "optionsHindi": {
      "A": "क्योटो प्रोटोकॉल (ग्रीनहाउस गैस)",
      "B": "मॉन्ट्रियल प्रोटोकॉल (Montreal Protocol - 1987)",
      "C": "बासेल कन्वेंशन",
      "D": "रामसर समझौता"
    },
    "correct": "B",
    "explanation": "The Montreal Protocol on Substances that Deplete the Ozone Layer was adopted in 1987 and is widely hailed as the most successful global environmental treaty.",
    "explanationHindi": "1987 में हस्ताक्षरित 'मॉन्ट्रियल प्रोटोकॉल' सीएफसी (Chlorofluorocarbons) जैसी ओजोन-क्षयकारी गैसों के उत्पादन को रोकने वाला ऐतिहासिक वैश्विक समझौता है।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "culture-awards",
    "topicLabel": "Environmental Treaties",
    "difficulty": "medium"
  },
  {
    "id": "gk-049",
    "question": "How many fundamental duties are prescribed for Indian citizens in Article 51A of the Constitution of India?",
    "questionHindi": "भारतीय संविधान के अनुच्छेद 51A में नागरिकों के लिए कुल कितने मौलिक कर्तव्य (Fundamental Duties) निर्धारित हैं?",
    "options": {
      "A": "9",
      "B": "10",
      "C": "11",
      "D": "12"
    },
    "optionsHindi": {
      "A": "9",
      "B": "10 (मूल रूप से 1976 में)",
      "C": "11 (वर्तमान में)",
      "D": "12"
    },
    "correct": "C",
    "explanation": "Originally 10 Fundamental Duties were added by the 42nd Amendment in 1976 (Swaran Singh Committee). The 11th duty (education for children 6-14) was added by the 86th Amendment in 2002.",
    "explanationHindi": "वर्तमान में संविधान के भाग IV-A और अनुच्छेद 51A के तहत 11 मौलिक कर्तव्य हैं। 11वां कर्तव्य 86वें संविधान संशोधन 2002 द्वारा जोड़ा गया था।",
    "subject": "general-knowledge",
    "unit": "indian-polity",
    "topic": "fundamental-rights",
    "topicLabel": "Fundamental Duties",
    "difficulty": "easy"
  },
  {
    "id": "gk-050",
    "question": "Which Indian state has the longest coastline on the mainland?",
    "questionHindi": "भारत की मुख्य भूमि पर किस राज्य की तटरेखा (Coastline) सबसे लंबी है?",
    "options": {
      "A": "Maharashtra",
      "B": "Andhra Pradesh",
      "C": "Tamil Nadu",
      "D": "Gujarat"
    },
    "optionsHindi": {
      "A": "महाराष्ट्र",
      "B": "आंध्र प्रदेश (दूसरी सबसे लंबी)",
      "C": "तमिलनाडु",
      "D": "गुजरात (सर्वाधिक लंबी तटरेखा - लगभग 1,600 किमी)"
    },
    "correct": "D",
    "explanation": "Gujarat has the longest coastline in mainland India extending approximately 1,600 km, followed by Andhra Pradesh (about 974 km).",
    "explanationHindi": "गुजरात राज्य की तटरेखा लगभग 1,600 किमी लंबी है, जो भारत के सभी तटीय राज्यों में सबसे अधिक है।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-geography",
    "topicLabel": "Indian Geography",
    "difficulty": "easy"
  },
  {
    "id": "gk-051",
    "question": "What is the official currency of Japan?",
    "questionHindi": "जापान की राष्ट्रीय मुद्रा (Currency) क्या है?",
    "options": {
      "A": "Yuan",
      "B": "Yen (¥)",
      "C": "Won",
      "D": "Ringgit"
    },
    "optionsHindi": {
      "A": "युआन (चीन)",
      "B": "येन (Yen - ¥, जापान)",
      "C": "वॉन (कोरिया)",
      "D": "रिंगिट (मलेशिया)"
    },
    "correct": "B",
    "explanation": "The Japanese Yen (¥ / JPY) is the official currency of Japan.",
    "explanationHindi": "जापान की राष्ट्रीय मुद्रा येन (Yen) है, जबकि चीन की युआन / रेनमिनबी और दक्षिण कोरिया की वॉन है।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-economy",
    "topicLabel": "World Currencies",
    "difficulty": "easy"
  },
  {
    "id": "gk-052",
    "question": "Who was the author of the famous Sanskrit treatise on statecraft, political strategy, and economics titled 'Arthashastra'?",
    "questionHindi": "प्राचीन राजनीति, शासनकला और कूटनीति के सुप्रसिद्ध संस्कृत ग्रंथ 'अर्थशास्त्र' के रचयिता कौन थे?",
    "options": {
      "A": "Megasthenes",
      "B": "Chanakya (Kautilya)",
      "C": "Banabhatta",
      "D": "Kalidasa"
    },
    "optionsHindi": {
      "A": "मेगास्थनीज (इंडिका के लेखक)",
      "B": "चाणक्य / कौटिल्य / विष्णुगुप्त",
      "C": "बाणभट्ट (हर्षचरित)",
      "D": "कालिदास"
    },
    "correct": "B",
    "explanation": "Chanakya (also known as Kautilya or Vishnugupta), Prime Minister to Emperor Chandragupta Maurya, authored the comprehensive treatise Arthashastra.",
    "explanationHindi": "मौर्य साम्राज्य के महामंत्री चाणक्य (कौटिल्य) ने राजव्यवस्था, सैन्य रणनीति और अर्थनीति पर 'अर्थशास्त्र' की रचना की थी।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "ancient-history",
    "topicLabel": "Ancient Literature & History",
    "difficulty": "easy"
  },
  {
    "id": "gk-053",
    "question": "The famous Sanchi Stupa, built by Emperor Ashoka in the 3rd century BCE, is located in which state of India?",
    "questionHindi": "सम्राट अशोक द्वारा तीसरी शताब्दी ईसा पूर्व में निर्मित प्रसिद्ध 'सांची का स्तूप' किस राज्य में स्थित है?",
    "options": {
      "A": "Uttar Pradesh",
      "B": "Madhya Pradesh",
      "C": "Bihar",
      "D": "Odisha"
    },
    "optionsHindi": {
      "A": "उत्तर प्रदेश",
      "B": "मध्य प्रदेश (रायसेन जिला)",
      "C": "बिहार",
      "D": "ओडिशा"
    },
    "correct": "B",
    "explanation": "The Great Stupa at Sanchi is located in Raisen district of Madhya Pradesh and is a renowned UNESCO World Heritage Buddhist monument.",
    "explanationHindi": "सांची का महान बौद्ध स्तूप मध्य प्रदेश के रायसेन जिले में स्थित है, जिसे मौर्य सम्राट अशोक ने बनवाया था।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "ancient-history",
    "topicLabel": "Monuments & Art",
    "difficulty": "easy"
  },
  {
    "id": "gk-054",
    "question": "What is the normal human body temperature on the Celsius scale?",
    "questionHindi": "सेल्सियस पैमाने पर सामान्य मानव शरीर का तापमान कितना होता है?",
    "options": {
      "A": "35.0 °C",
      "B": "37.0 °C (98.6 °F)",
      "C": "39.5 °C",
      "D": "40.0 °C"
    },
    "optionsHindi": {
      "A": "35.0 °C",
      "B": "37.0 °C (या 98.6 °F)",
      "C": "39.5 °C",
      "D": "40.0 °C"
    },
    "correct": "B",
    "explanation": "The average normal human core body temperature is universally accepted as approximately 37 °C (98.6 °F).",
    "explanationHindi": "स्वस्थ मनुष्य के शरीर का सामान्य तापमान लगभग 37 डिग्री सेल्सियस (98.6 डिग्री फारेनहाइट अथवा 310 केल्विन) होता है।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "Human Physiology",
    "difficulty": "easy"
  },
  {
    "id": "gk-055",
    "question": "Which planet in the Solar System is known as the 'Red Planet' due to the widespread presence of iron oxide on its surface?",
    "questionHindi": "सतह पर आयरन ऑक्साइड (लौह यौगिकों) की अधिकता के कारण सौरमंडल के किस ग्रह को 'लाल ग्रह' (Red Planet) कहा जाता है?",
    "options": {
      "A": "Venus",
      "B": "Mars",
      "C": "Jupiter",
      "D": "Mercury"
    },
    "optionsHindi": {
      "A": "शुक्र (भोर का तारा)",
      "B": "मंगल (Mars - लाल ग्रह)",
      "C": "बृहस्पति",
      "D": "बुध"
    },
    "correct": "B",
    "explanation": "Mars appears distinctly reddish from Earth because rust and iron oxide mineral dust coat its Martian regolith soil.",
    "explanationHindi": "मंगल ग्रह (Mars) को उसकी लाल रंग की लौहमय मिट्टी के कारण 'लाल ग्रह' कहा जाता है। इसके दो उपग्रह फोबोस और डीमॉस हैं।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "Astronomy & Solar System",
    "difficulty": "easy"
  },
  {
    "id": "gk-056",
    "question": "The famous Jallianwala Bagh massacre took place in Amritsar on which tragic date?",
    "questionHindi": "अमृतसर में कुख्यात जलियांवाला बाग नरसंहार किस दुखद तारीख को हुआ था?",
    "options": {
      "A": "13th April 1919 (Baisakhi Day)",
      "B": "15th August 1918",
      "C": "26th January 1920",
      "D": "10th May 1919"
    },
    "optionsHindi": {
      "A": "13 अप्रैल 1919 (बैसाखी का दिन)",
      "B": "15 अगस्त 1918",
      "C": "26 जनवरी 1920",
      "D": "10 मई 1919"
    },
    "correct": "A",
    "explanation": "On 13th April 1919 (Baisakhi), General Reginald Dyer ordered troops to fire upon peaceful unarmed protesters gathered at Jallianwala Bagh against the Rowlatt Act.",
    "explanationHindi": "13 अप्रैल 1919 को बैसाखी के दिन जनरल डायर ने अमृतसर के जलियांवाला बाग में रोलेट एक्ट का विरोध कर रही निहत्थी सभा पर गोलियां चलवा दी थीं।",
    "subject": "general-knowledge",
    "unit": "indian-history",
    "topic": "modern-history",
    "topicLabel": "Modern Indian History",
    "difficulty": "easy"
  },
  {
    "id": "gk-057",
    "question": "Which organ in the human body is primarily responsible for filtering waste products and excess urea from the blood to produce urine?",
    "questionHindi": "मानव शरीर में रक्त से यूरिया और अपशिष्ट पदार्थों को छानकर मूत्र निर्माण करने वाला मुख्य अंग कौन सा है?",
    "options": {
      "A": "Liver",
      "B": "Kidneys (गुर्दा)",
      "C": "Pancreas",
      "D": "Spleen"
    },
    "optionsHindi": {
      "A": "यकृत (Liver)",
      "B": "वृक्क / गुर्दे (Kidneys - नेफ्रॉन द्वारा)",
      "C": "अग्न्याशय (Pancreas)",
      "D": "प्लीहा"
    },
    "correct": "B",
    "explanation": "The paired kidneys filter roughly 180 liters of blood filtrate daily through functional micro-units called nephrons to excrete toxic metabolic waste.",
    "explanationHindi": "गुर्दे (Kidneys) रक्त का निस्यंदन (छानने) कर हानिकारक यूरिया और अतिरिक्त लवण को मूत्र के रूप में शरीर से बाहर निकालते हैं। इसकी कार्यात्मक इकाई 'नेफ्रॉन' है।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "science-technology",
    "topicLabel": "Human Biology",
    "difficulty": "easy"
  },
  {
    "id": "gk-058",
    "question": "Who was the first Indian to be awarded the prestigious Nobel Prize in 1913?",
    "questionHindi": "1913 में नोबेल पुरस्कार प्राप्त करने वाले प्रथम भारतीय (एवं प्रथम एशियाई) व्यक्ति कौन थे?",
    "options": {
      "A": "C.V. Raman",
      "B": "Rabindranath Tagore",
      "C": "Mother Teresa",
      "D": "Hargobind Khorana"
    },
    "optionsHindi": {
      "A": "सी.वी. रमन (1930 भौतिकी)",
      "B": "रवीन्द्रनाथ टैगोर (1913 - 'गीतांजलि' साहित्य)",
      "C": "मदर टेरेसा",
      "D": "हरगोविंद खुराना"
    },
    "correct": "B",
    "explanation": "Rabindranath Tagore was awarded the Nobel Prize in Literature in 1913 for his song offering collection 'Gitanjali', becoming the first Asian laureate.",
    "explanationHindi": "गुरुदेव रवीन्द्रनाथ टैगोर को 1913 में उनकी काव्यकृति 'गीतांजलि' के लिए साहित्य का नोबेल पुरस्कार दिया गया था।",
    "subject": "general-knowledge",
    "unit": "science-culture",
    "topic": "culture-awards",
    "topicLabel": "Nobel Laureates & Literature",
    "difficulty": "easy"
  },
  {
    "id": "gk-059",
    "question": "What is the minimum voting age for Indian citizens as established by the 61st Constitutional Amendment Act 1988?",
    "questionHindi": "61वें संविधान संशोधन 1988 द्वारा भारतीय नागरिकों हेतु मतदान की न्यूनतम आयु घटाकर कितनी निर्धारित की गई?",
    "options": {
      "A": "16 years",
      "B": "18 years",
      "C": "21 years",
      "D": "25 years"
    },
    "optionsHindi": {
      "A": "16 वर्ष",
      "B": "18 वर्ष (21 वर्ष से घटाकर)",
      "C": "21 वर्ष",
      "D": "25 वर्ष"
    },
    "correct": "B",
    "explanation": "The 61st Amendment Act of 1988 lowered the voting age for elections to the Lok Sabha and Vidhan Sabhas from 21 to 18 years under Article 326.",
    "explanationHindi": "61वें संविधान संशोधन अधिनियम 1988 द्वारा मतदान की न्यूनतम आयु 21 वर्ष से घटाकर 18 वर्ष कर दी गई।",
    "subject": "general-knowledge",
    "unit": "indian-polity",
    "topic": "constitution",
    "topicLabel": "Elections & Constitution",
    "difficulty": "easy"
  },
  {
    "id": "gk-060",
    "question": "Which Indian city is famously known as the 'Silicon Valley of India' for its preeminent role as the nation's leading information technology exporter?",
    "questionHindi": "भारत के अग्रणी सूचना प्रौद्योगिकी एवं सॉफ्टवेयर केंद्र के रूप में किस शहर को 'भारत की सिलिकॉन वैली' कहा जाता है?",
    "options": {
      "A": "Hyderabad",
      "B": "Bengaluru (Bangalore)",
      "C": "Pune",
      "D": "Chennai"
    },
    "optionsHindi": {
      "A": "हैदराबाद",
      "B": "बेंगलुरु (Bengaluru)",
      "C": "पुणे",
      "D": "चेन्नई"
    },
    "correct": "B",
    "explanation": "Bengaluru, capital of Karnataka, is universally dubbed the Silicon Valley of India because it hosts hundreds of tech companies, software exporters, and startups.",
    "explanationHindi": "बेंगलुरु को भारत की आईटी राजधानी और 'सिलिकॉन वैली' कहा जाता है, जहाँ देश के प्रमुख सॉफ्टवेयर और तकनीकी संस्थान स्थित हैं।",
    "subject": "general-knowledge",
    "unit": "geography-economy",
    "topic": "indian-geography",
    "topicLabel": "Indian Cities & Nicknames",
    "difficulty": "easy"
  }
];
