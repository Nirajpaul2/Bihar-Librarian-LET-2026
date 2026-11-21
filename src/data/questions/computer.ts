import type { Question } from '@/types';

export const computerQuestions: Question[] = [
  {
    id: 'cp-001',
    question: 'Which component is considered the "brain" of a computer system?',
    questionHindi: 'कंप्यूटर सिस्टम का "मस्तिष्क" (Brain) किस घटक को कहा जाता है?',
    options: { A: 'RAM', B: 'CPU', C: 'Hard Drive', D: 'Motherboard' },
    optionsHindi: { A: 'रैम (RAM)', B: 'सीपीयू (CPU - Central Processing Unit)', C: 'हार्ड ड्राइव (Hard Drive)', D: 'मदरबोर्ड (Motherboard)' },
    correct: 'B',
    explanation: 'The Central Processing Unit (CPU) is often called the brain of the computer because it handles all instructions it receives from hardware and software.',
    explanationHindi: 'सेंट्रल प्रोसेसिंग यूनिट (CPU) को कंप्यूटर का मस्तिष्क कहा जाता है क्योंकि यह सभी अंकगणितीय, तार्किक और इनपुट/आउटपुट निर्देशों को निष्पादित करता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'easy'
  },
  {
    id: 'cp-002',
    question: 'What does RAM stand for in computer terminology?',
    questionHindi: 'कंप्यूटर शब्दावली में RAM का पूर्ण रूप (Full Form) क्या है?',
    options: { A: 'Read Access Memory', B: 'Random Access Memory', C: 'Rapid Action Memory', D: 'Run Anywhere Memory' },
    optionsHindi: { A: 'रीड एक्सेस मेमोरी', B: 'रैंडम एक्सेस मेमोरी (Random Access Memory)', C: 'रैपिड एक्शन मेमोरी', D: 'रन एनीव्हेयर मेमोरी' },
    correct: 'B',
    explanation: 'RAM stands for Random Access Memory. It is the temporary, volatile memory used by the system to store active applications and data.',
    explanationHindi: 'RAM का अर्थ रैंडम एक्सेस मेमोरी है। यह प्राथमिक और अस्थिर (Volatile) मेमोरी है, जिसमें सिस्टम चालू रहने तक सक्रिय डेटा व प्रोग्राम संग्रहीत रहते हैं।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'easy'
  },
  {
    id: 'cp-003',
    question: 'Which of the following is an example of an input device?',
    questionHindi: 'निम्नलिखित में से कौन सा एक इनपुट डिवाइस (Input Device) का उदाहरण है?',
    options: { A: 'Monitor', B: 'Printer', C: 'Keyboard', D: 'Speaker' },
    optionsHindi: { A: 'मॉनिटर', B: 'प्रिंटर', C: 'कीबोर्ड (Keyboard)', D: 'स्पीकर' },
    correct: 'C',
    explanation: 'A keyboard is an input device used to enter data into a computer. Monitors, printers, and speakers are all output devices.',
    explanationHindi: 'कीबोर्ड एक प्राथमिक इनपुट डिवाइस है जिसके द्वारा उपयोगकर्ता कंप्यूटर में डेटा और निर्देश प्रविष्ट करता है। मॉनिटर, प्रिंटर और स्पीकर आउटपुट डिवाइस हैं।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'easy'
  },
  {
    id: 'cp-004',
    question: 'Which type of software is an Operating System (OS)?',
    questionHindi: 'ऑपरेटिंग सिस्टम (OS) किस प्रकार का सॉफ्टवेयर है?',
    options: { A: 'Application Software', B: 'System Software', C: 'Utility Software', D: 'Malware' },
    optionsHindi: { A: 'एप्लिकेशन सॉफ्टवेयर', B: 'सिस्टम सॉफ्टवेयर (System Software)', C: 'यूटिलिटी सॉफ्टवेयर', D: 'मैलवेयर' },
    correct: 'B',
    explanation: 'An Operating System is system software that manages computer hardware, software resources, and provides common services for computer programs.',
    explanationHindi: 'ऑपरेटिंग सिस्टम एक सिस्टम सॉफ्टवेयर है जो कंप्यूटर हार्डवेयर और उपयोगकर्ता/एप्लिकेशन प्रोग्राम के बीच इंटरफेस का कार्य करता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'operating-systems',
    topicLabel: 'Operating Systems',
    difficulty: 'medium'
  },
  {
    id: 'cp-005',
    question: 'What is the standard keyboard shortcut to undo an action in Microsoft Word?',
    questionHindi: 'माइक्रोसॉफ्ट वर्ड (MS Word) में किसी अंतिम क्रिया को पूर्ववत (Undo) करने का शॉर्टकट क्या है?',
    options: { A: 'Ctrl + C', B: 'Ctrl + Y', C: 'Ctrl + Z', D: 'Ctrl + V' },
    optionsHindi: { A: 'Ctrl + C', B: 'Ctrl + Y', C: 'Ctrl + Z', D: 'Ctrl + V' },
    correct: 'C',
    explanation: 'Ctrl + Z is the universal keyboard shortcut for "Undo" in Windows environments, including Microsoft Word.',
    explanationHindi: 'Ctrl + Z अनडू (Undo) का सार्वभौमिक कीबोर्ड शॉर्टकट है। Ctrl + Y रीडू (Redo), Ctrl + C कॉपी (Copy) तथा Ctrl + V पेस्ट (Paste) के लिए प्रयुक्त होता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'ms-office',
    topicLabel: 'MS Office',
    difficulty: 'easy'
  },
  {
    id: 'cp-006',
    question: 'In Microsoft Excel, all formulas must begin with which character?',
    questionHindi: 'माइक्रोसॉफ्ट एक्सेल (MS Excel) में सभी फॉर्मूले अनिवार्य रूप से किस चिह्न से शुरू होने चाहिए?',
    options: { A: '+', B: '@', C: '=', D: '#' },
    optionsHindi: { A: 'प्लस (+)', B: 'एट (@)', C: 'बराबर (=)', D: 'हैश (#)' },
    correct: 'C',
    explanation: 'Every formula in Microsoft Excel must start with an equals sign (=). This tells the software to calculate the following string as an equation.',
    explanationHindi: 'MS Excel में प्रत्येक फॉर्मूला या फंक्शन हमेशा बराबर के चिह्न (=) से प्रारंभ होता है। इससे एक्सेल समझता है कि आगे की प्रविष्टि एक गणना सूत्र है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'ms-office',
    topicLabel: 'MS Office',
    difficulty: 'easy'
  },
  {
    id: 'cp-007',
    question: 'Which Windows feature allows you to manage files and folders?',
    questionHindi: 'विंडोज का कौन सा फीचर आपको फाइलों और फोल्डरों को प्रबंधित व व्यवस्थित करने की अनुमति देता है?',
    options: { A: 'Task Manager', B: 'Control Panel', C: 'Command Prompt', D: 'File Explorer' },
    optionsHindi: { A: 'टास्क मैनेजर', B: 'कंट्रोल पैनल', C: 'कमांड प्रॉम्प्ट', D: 'फाइल एक्सप्लोरर (File Explorer)' },
    correct: 'D',
    explanation: 'File Explorer (formerly Windows Explorer) is the graphical file management utility for the Microsoft Windows operating system.',
    explanationHindi: 'फाइल एक्सप्लोरर (पूर्व नाम विंडोज एक्सप्लोरर) विंडोज ऑपरेटिंग सिस्टम में डिस्क ड्राइव, फोल्डर्स और फाइल्स को ब्राउज व मैनेज करने की मुख्य उपयोगिता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'operating-systems',
    topicLabel: 'Operating Systems',
    difficulty: 'easy'
  },
  {
    id: 'cp-008',
    question: 'What does HTTP stand for in networking?',
    questionHindi: 'कंप्यूटर नेटवर्किंग में HTTP का पूर्ण रूप क्या है?',
    options: { A: 'HyperText Transfer Protocol', B: 'HyperText Transmission Process', C: 'Hyper Transfer Text Protocol', D: 'HyperText Technology Protocol' },
    optionsHindi: { A: 'हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल (HyperText Transfer Protocol)', B: 'हाइपरटेक्स्ट ट्रांसमिशन प्रोसेस', C: 'हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल', D: 'हाइपरटेक्स्ट टेक्नोलॉजी प्रोटोकॉल' },
    correct: 'A',
    explanation: 'HTTP stands for HyperText Transfer Protocol, the foundational protocol used for transmitting web pages over the internet.',
    explanationHindi: 'HTTP का अर्थ हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल है। यह वर्ल्ड वाइड वेब (WWW) पर वेब पेजों और डेटा के आदान-प्रदान के लिए उपयोग किया जाने वाला मुख्य प्रोटोकॉल है।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'medium'
  },
  {
    id: 'cp-009',
    question: 'In an email, what does the "BCC" field stand for?',
    questionHindi: 'ईमेल में "BCC" फील्ड का पूर्ण रूप क्या होता है?',
    options: { A: 'Basic Carbon Copy', B: 'Blind Carbon Copy', C: 'Bulk Carbon Copy', D: 'Back Carbon Copy' },
    optionsHindi: { A: 'बेसिक कार्बन कॉपी', B: 'ब्लाइंड कार्बन कॉपी (Blind Carbon Copy)', C: 'बल्क कार्बन कॉपी', D: 'बैक कार्बन कॉपी' },
    correct: 'B',
    explanation: 'BCC stands for Blind Carbon Copy. It sends a copy of the email to the recipient without showing their email address to other recipients.',
    explanationHindi: 'BCC का अर्थ ब्लाइंड कार्बन कॉपी है। इसमें दर्ज किए गए प्राप्तकर्ताओं के ईमेल पते अन्य किसी भी प्राप्तकर्ता (To या CC) को दिखाई नहीं देते हैं।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'medium'
  },
  {
    id: 'cp-010',
    question: 'Which of the following refers to a malicious program that disguises itself as legitimate software?',
    questionHindi: 'निम्नलिखित में से कौन सा एक दुर्भावनापूर्ण प्रोग्राम (Malware) है जो खुद को उपयोगी सॉफ्टवेयर के रूप में प्रस्तुत करता है?',
    options: { A: 'Worm', B: 'Ransomware', C: 'Trojan Horse', D: 'Spyware' },
    optionsHindi: { A: 'वर्म (Worm)', B: 'रैनसमवेयर (Ransomware)', C: 'ट्रोजन हॉर्स (Trojan Horse)', D: 'स्पायवेयर (Spyware)' },
    correct: 'C',
    explanation: 'A Trojan Horse is a type of malware that misleads users of its true intent by disguising itself as a standard, legitimate file or program.',
    explanationHindi: 'ट्रोजन हॉर्स एक ऐसा घातक प्रोग्राम है जो ऊपर से सुरक्षित व उपयोगी सॉफ्टवेयर दिखता है, किन्तु सिस्टम में इंस्टॉल होते ही सुरक्षा में सेंध लगा देता है।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'medium'
  },
  {
    id: 'cp-011',
    question: 'What is phishing?',
    questionHindi: 'साइबर सुरक्षा में "फ़िशिंग" (Phishing) क्या है?',
    options: { A: 'A type of computer game', B: 'A cyber attack aimed at stealing sensitive information', C: 'A networking hardware component', D: 'A process of updating software' },
    optionsHindi: { A: 'एक प्रकार का कंप्यूटर गेम', B: 'संवेदनशील जानकारी (पासवर्ड, बैंक डिटेल) चुराने का फर्जी साइबर हमला', C: 'एक नेटवर्किंग हार्डवेयर घटक', D: 'सॉफ्टवेयर अपडेट करने की प्रक्रिया' },
    correct: 'B',
    explanation: 'Phishing is a fraudulent attempt, usually via email, to obtain sensitive information like usernames, passwords, or credit card details by pretending to be a trustworthy entity.',
    explanationHindi: 'फ़िशिंग एक धोखाधड़ीपूर्ण साइबर हमला है जिसमें फर्जी ईमेल या वेबसाइट बनाकर उपयोगकर्ताओं से पासवर्ड, ओटीपी और बैंक विवरण चुराए जाते हैं।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'medium'
  },
  {
    id: 'cp-012',
    question: 'What is a firewall in computer networking?',
    questionHindi: 'कंप्यूटर नेटवर्किंग में "फ़ायरवॉल" (Firewall) क्या होता है?',
    options: { A: 'A cooling system for servers', B: 'A backup power supply', C: 'A security system monitoring and controlling network traffic', D: 'A type of hard drive partition' },
    optionsHindi: { A: 'सर्वर के लिए कूलिंग सिस्टम', B: 'बैकअप पावर सप्लाई (UPS)', C: 'नेटवर्क ट्रैफिक की निगरानी और अनधिकृत प्रवेश रोकने वाली सुरक्षा प्रणाली', D: 'हार्ड ड्राइव का विभाजन' },
    correct: 'C',
    explanation: 'A firewall is a network security device or software that monitors incoming and outgoing network traffic and blocks unauthorized access according to security rules.',
    explanationHindi: 'फ़ायरवॉल हार्डवेयर या सॉफ्टवेयर आधारित एक सुरक्षा प्रणाली है जो पूर्वनिर्धारित नियमों के आधार पर आने-जाने वाले नेटवर्क ट्रैफिक की जांच कर अनधिकृत पहुंच को रोकती है।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'medium'
  },
  {
    id: 'cp-013',
    question: 'Which of the following is considered the most secure practice for passwords?',
    questionHindi: 'पासवर्ड सुरक्षा के लिए निम्नलिखित में से किसे सर्वोत्तम और सबसे सुरक्षित माना जाता है?',
    options: { A: 'Using a single complex password for all sites', B: 'Using personal information like birthdates', C: 'Using a combination of letters, numbers, and symbols, and unique passwords for different sites', D: 'Writing passwords on a sticky note attached to the monitor' },
    optionsHindi: { A: 'सभी साइटों के लिए एक ही पासवर्ड रखना', B: 'जन्मदिन या मोबाइल नंबर का उपयोग करना', C: 'अक्षरों, संख्याओं और विशेष प्रतीकों का मिश्रण तथा प्रत्येक खाते के लिए अलग पासवर्ड रखना', D: 'मॉनिटर पर स्टिकी नोट चिपकाकर लिखना' },
    correct: 'C',
    explanation: 'Strong security practice involves using long, complex passwords (mix of cases, numbers, symbols) and never reusing the same password across multiple services.',
    explanationHindi: 'मजबूत और सुरक्षित पासवर्ड में अपरकेस, लोअरकेस, अंक तथा विशेष चिह्नों (@, #, $) का मिश्रण होना चाहिए और विभिन्न वेबसाइटों पर अलग-अलग पासवर्ड होना चाहिए।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'easy'
  },
  {
    id: 'cp-014',
    question: 'What is the purpose of the Cache Memory in a computer?',
    questionHindi: 'कंप्यूटर में कैश मेमोरी (Cache Memory) का मुख्य उद्देश्य क्या है?',
    options: { A: 'To permanently store user data', B: 'To provide high-speed data access to the CPU', C: 'To cool down the processor', D: 'To display graphics on the monitor' },
    optionsHindi: { A: 'डेटा को स्थायी रूप से संचित करना', B: 'सीपीयू (CPU) को अत्यधिक तीव्र गति से डेटा और निर्देश उपलब्ध कराना', C: 'प्रोसेसर का तापमान कम करना', D: 'मॉनिटर पर ग्राफिक्स प्रदर्शित करना' },
    correct: 'B',
    explanation: 'Cache memory is a small-sized, high-speed volatile memory that provides the CPU with rapid access to frequently used instructions and data.',
    explanationHindi: 'कैश मेमोरी सीपीयू और मुख्य मेमोरी (RAM) के मध्य स्थित एक अति-तीव्र मेमोरी है, जो बार-बार प्रयोग होने वाले डेटा को रखती है ताकि सीपीयू की गति बढ़ सके।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'hard'
  },
  {
    id: 'cp-015',
    question: 'Which protocol is commonly used to securely browse websites (indicated by a padlock in the browser)?',
    questionHindi: 'सुरक्षित वेब ब्राउजिंग के लिए सामान्यतः किस प्रोटोकॉल का उपयोग किया जाता है (ब्राउज़र में पैडलॉक/ताले के चिह्न द्वारा प्रदर्शित)?',
    options: { A: 'FTP', B: 'HTTP', C: 'HTTPS', D: 'SMTP' },
    optionsHindi: { A: 'एफ़टीपी (FTP)', B: 'एचटीटीपी (HTTP)', C: 'एचटीटीपीएस (HTTPS - HyperText Transfer Protocol Secure)', D: 'एसएमटीपी (SMTP)' },
    correct: 'C',
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) uses encryption (like TLS/SSL) for secure communication over a computer network, widely used on the Internet.',
    explanationHindi: 'HTTPS डेटा को एन्क्रिप्ट (SSL/TLS) करके सुरक्षित रूप से प्रेषित करता है, जिससे डेटा को हैकर्स द्वारा बीच में पढ़ा या बदला नहीं जा सकता।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'medium'
  },
  {
    id: 'cp-016',
    question: 'What is the function of a router in a computer network?',
    questionHindi: 'कंप्यूटर नेटवर्क में राउटर (Router) का मुख्य कार्य क्या होता है?',
    options: { A: 'To protect the computer from viruses', B: 'To forward data packets between different computer networks', C: 'To print documents over Wi-Fi', D: 'To store backups of files' },
    optionsHindi: { A: 'कंप्यूटर को वायरस से बचाना', B: 'विभिन्न नेटवर्कों के बीच डेटा पैकेटों को सही पते पर अग्रेषित (Forward/Route) करना', C: 'वाई-फाई द्वारा प्रिंट निकालना', D: 'फाइलों का बैकअप स्टोर करना' },
    correct: 'B',
    explanation: 'A router is a networking device that forwards data packets between computer networks. They direct traffic on the Internet.',
    explanationHindi: 'राउटर एक ओएसआई नेटवर्क लेयर (Layer 3) डिवाइस है जो आईपी पते के आधार पर सर्वोत्तम मार्ग चुनकर विभिन्न नेटवर्कों के बीच डेटा पैकेट भेजता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'hard'
  },
  {
    id: 'cp-017',
    question: 'In Microsoft Excel, what function is used to find the highest number in a range of cells?',
    questionHindi: 'माइक्रोसॉफ्ट एक्सेल (MS Excel) में सेलों की रेंज में से सबसे बड़ी संख्या ज्ञात करने के लिए किस फंक्शन का उपयोग किया जाता है?',
    options: { A: '=TOP()', B: '=HIGHEST()', C: '=MAX()', D: '=SUM()' },
    optionsHindi: { A: '=TOP()', B: '=HIGHEST()', C: '=MAX()', D: '=SUM()' },
    correct: 'C',
    explanation: 'The =MAX() function in Excel evaluates a range of cells and returns the largest (maximum) numeric value found within that range.',
    explanationHindi: '=MAX() फंक्शन दी गई सेल रेंज में से अधिकतम (Maximum) मान लौटाता है। न्यूनतम मान के लिए =MIN() और योग के लिए =SUM() का उपयोग होता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'ms-office',
    topicLabel: 'MS Office',
    difficulty: 'easy'
  },
  {
    id: 'cp-018',
    question: 'Which of the following is an open-source operating system?',
    questionHindi: 'निम्नलिखित में से कौन सा एक ओपन-सोर्स (Open-Source) ऑपरेटिंग सिस्टम है?',
    options: { A: 'Windows 10', B: 'macOS', C: 'Linux', D: 'iOS' },
    optionsHindi: { A: 'विंडोज 10', B: 'मैक ओएस (macOS)', C: 'लिनक्स (Linux)', D: 'आईओएस (iOS)' },
    correct: 'C',
    explanation: 'Linux is a prominent example of free and open-source software, whereas Windows, macOS, and iOS are proprietary operating systems.',
    explanationHindi: 'लिनक्स (Linux) एक स्वतंत्र और ओपन-सोर्स ऑपरेटिंग सिस्टम है, जिसका सोर्स कोड सार्वजनिक रूप से उपलब्ध है। विंडोज और मैक मालिकाना (Proprietary) सॉफ्टवेयर हैं।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'operating-systems',
    topicLabel: 'Operating Systems',
    difficulty: 'medium'
  },
  {
    id: 'cp-019',
    question: 'What type of memory is ROM?',
    questionHindi: 'रोम (ROM - Read-Only Memory) किस प्रकार की मेमोरी है?',
    options: { A: 'Volatile', B: 'Non-volatile', C: 'Temporary', D: 'Virtual' },
    optionsHindi: { A: 'परिवर्तनशील / अस्थिर (Volatile)', B: 'अपरिवर्तनशील / स्थायी (Non-volatile)', C: 'अस्थायी (Temporary)', D: 'वर्चुअल (Virtual)' },
    correct: 'B',
    explanation: 'ROM (Read-Only Memory) is non-volatile memory, meaning it retains its contents even when the computer is powered off. It typically stores firmware.',
    explanationHindi: 'ROM एक गैर-वाष्पशील (Non-volatile) और स्थायी मेमोरी है, जिसमें कंप्यूटर का पावर बंद होने पर भी डेटा (BIOS/Firmware) सुरक्षित रहता है।',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'hard'
  },
  {
    id: 'cp-020',
    question: 'What is a URL?',
    questionHindi: 'इंटरनेट में URL क्या होता है?',
    options: { A: 'A hardware address for a network card', B: 'A web browser developed by Google', C: 'The global address of documents and other resources on the World Wide Web', D: 'A type of computer virus' },
    optionsHindi: { A: 'नेटवर्क कार्ड का हार्डवेयर पता (MAC)', B: 'गूगल द्वारा विकसित ब्राउज़र', C: 'वर्ल्ड वाइड वेब पर किसी वेब पेज या संसाधन का वैश्विक वेब पता', D: 'एक प्रकार का कंप्यूटर वायरस' },
    correct: 'C',
    explanation: 'URL stands for Uniform Resource Locator. It is a reference (an address) to a resource on the Internet, specifying its location and the protocol used to access it.',
    explanationHindi: 'URL का पूर्ण रूप यूनिफ़ॉर्म रिसोर्स लोकेटर (Uniform Resource Locator) है, जो इंटरनेट पर किसी भी विशिष्ट वेब पेज, फाइल या संसाधन का अद्वितीय पता होता है।',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'easy'
  },
  {
    "id": "cp-021",
    "question": "What is the length of a standard Media Access Control (MAC) hardware address?",
    "questionHindi": "नेटवर्क इंटरफेस कार्ड के मानक मीडिया एक्सेस कंट्रोल (MAC) एड्रेस की कुल लंबाई कितनी होती है?",
    "options": {
      "A": "32 bits",
      "B": "48 bits (6 bytes)",
      "C": "64 bits",
      "D": "128 bits"
    },
    "optionsHindi": {
      "A": "32 बिट्स",
      "B": "48 बिट्स (6 बाइट्स - 12 हेक्साडेसिमल अंक)",
      "C": "64 बिट्स",
      "D": "128 बिट्स"
    },
    "correct": "B",
    "explanation": "A MAC address is a permanent physical hardware identifier consisting of 48 bits (6 bytes), typically written as 12 hexadecimal digits separated by colons or hyphens.",
    "explanationHindi": "MAC एड्रेस नेटवर्क कार्ड का अद्वितीय भौतिक हार्डवेयर पता होता है, जो 48 बिट्स (6 बाइट्स) का होता है और हेक्साडेसिमल प्रारूप में लिखा जाता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Internet & Networking",
    "difficulty": "medium"
  },
  {
    "id": "cp-022",
    "question": "Which technology is specifically used by banking institutions to process cheques by reading magnetic ink characters?",
    "questionHindi": "बैंकों में चेक पर चुंबकीय स्याही से मुद्रित अंकों को तेजी से पढ़ने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options": {
      "A": "OMR",
      "B": "OCR",
      "C": "MICR",
      "D": "Barcode Reader"
    },
    "optionsHindi": {
      "A": "ओएमआर (OMR)",
      "B": "ओसीआर (OCR)",
      "C": "एमआईसीआर (MICR)",
      "D": "बारकोड स्कैनर"
    },
    "correct": "C",
    "explanation": "MICR (Magnetic Ink Character Recognition) reads characters printed in specialized magnetic ink at the bottom of bank cheques (9-digit MICR code).",
    "explanationHindi": "MICR (मैग्नेटिक इंक कैरेक्टर रिकॉग्निशन) तकनीक का उपयोग बैंकों में चेक के नीचे मुद्रित 9 अंकों के कोड को चुम्बकीय रूप से पहचानने और प्रोसेस करने हेतु किया जाता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Hardware & Devices",
    "difficulty": "easy"
  },
  {
    "id": "cp-023",
    "question": "In computer networking, which network topology connects every computer to a central device called a Switch or Hub?",
    "questionHindi": "कंप्यूटर नेटवर्किंग में किस टोपोलॉजी में सभी नोड्स (कंप्यूटर्स) एक केंद्रीय उपकरण (Switch/Hub) से जुड़े होते हैं?",
    "options": {
      "A": "Ring Topology",
      "B": "Bus Topology",
      "C": "Star Topology",
      "D": "Mesh Topology"
    },
    "optionsHindi": {
      "A": "रिंग टोपोलॉजी",
      "B": "बस टोपोलॉजी",
      "C": "स्टार टोपोलॉजी (Star Topology)",
      "D": "मेश टोपोलॉजी"
    },
    "correct": "C",
    "explanation": "In a Star topology, all nodes are individually connected to a central connection point like a switch or hub. If one cable fails, only that node is disconnected.",
    "explanationHindi": "स्टार टोपोलॉजी में सभी कंप्यूटर अलग-अलग केबल द्वारा एक केंद्रीय स्विच या हब से जुड़े होते हैं, जिससे एक नोड के खराब होने पर पूरा नेटवर्क बाधित नहीं होता।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Network Topologies",
    "difficulty": "easy"
  },
  {
    "id": "cp-024",
    "question": "Which standard protocol is used for securely transmitting encrypted web pages between a browser and a web server over port 443?",
    "questionHindi": "वेब ब्राउज़र और सर्वर के मध्य एन्क्रिप्टेड और सुरक्षित डेटा संचार हेतु पोर्ट 443 पर किस प्रोटोकॉल का उपयोग होता है?",
    "options": {
      "A": "HTTP",
      "B": "HTTPS",
      "C": "FTP",
      "D": "SMTP"
    },
    "optionsHindi": {
      "A": "HTTP",
      "B": "HTTPS (हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल सिक्योर)",
      "C": "FTP",
      "D": "SMTP"
    },
    "correct": "B",
    "explanation": "HTTPS (Hypertext Transfer Protocol Secure) operates over port 443 and encrypts communications using SSL/TLS protocols.",
    "explanationHindi": "HTTPS पोर्ट 443 पर काम करता है और SSL/TLS एन्क्रिप्शन के माध्यम से यूजर और वेबसाइट के बीच डेटा को सुरक्षित (Secure) बनाता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "cyber-security",
    "topicLabel": "Internet Security & Protocols",
    "difficulty": "easy"
  },
  {
    "id": "cp-025",
    "question": "In Microsoft Excel, what symbol is prefixed before a column letter or row number to make it an absolute cell reference?",
    "questionHindi": "माइक्रोसॉफ्ट एक्सेल (MS Excel) में किसी फॉर्मूले में सेल संदर्भ को 'एब्सोल्यूट' (स्थिर) बनाने के लिए किस चिह्न का प्रयोग किया जाता है?",
    "options": {
      "A": "# (Hash)",
      "B": "@ (At)",
      "C": "$ (Dollar)",
      "D": "& (Ampersand)"
    },
    "optionsHindi": {
      "A": "# (हैश)",
      "B": "@ (एट)",
      "C": "$ (डॉलर चिह्न - जैसे $A$1)",
      "D": "& (एम्परसेंड)"
    },
    "correct": "C",
    "explanation": "The dollar sign ($) is used in Excel to lock rows and columns during formula autofill (e.g. $A$1 is an absolute reference).",
    "explanationHindi": "एक्सेल में सूत्र (Formula) कॉपी करते समय रो या कॉलम को लॉक (स्थिर) रखने हेतु डॉलर ($) चिह्न (उदा. $A$1) का उपयोग किया जाता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "ms-office",
    "topicLabel": "MS Office Applications",
    "difficulty": "medium"
  },
  {
    "id": "cp-026",
    "question": "In relational databases (RDBMS), what is a column or set of columns in one table that references the primary key of another table called?",
    "questionHindi": "रिलेशनल डेटाबेस (RDBMS) में वह फ़ील्ड जो दूसरी तालिका की प्राइमरी की (Primary Key) को संदर्भित करती है, क्या कहलाती है?",
    "options": {
      "A": "Candidate Key",
      "B": "Super Key",
      "C": "Foreign Key",
      "D": "Composite Key"
    },
    "optionsHindi": {
      "A": "कैंडिडेट की",
      "B": "सुपर की",
      "C": "फॉरेन की (Foreign Key)",
      "D": "कंपोजिट की"
    },
    "correct": "C",
    "explanation": "A Foreign Key is a field in a relational table that matches the primary key column of another table, creating a relational link between them.",
    "explanationHindi": "फॉरेन की (Foreign Key) किसी तालिका का वह कॉलम होता है जो दूसरी संबंधित तालिका की प्राइमरी की से लिंक स्थापित करता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Database Systems",
    "difficulty": "medium"
  },
  {
    "id": "cp-027",
    "question": "Which malicious software locks or encrypts a victim's files and demands financial payment to restore access?",
    "questionHindi": "वह कौन सा दुर्भावनापूर्ण सॉफ्टवेयर (Malware) है जो यूजर की फाइलों को एन्क्रिप्ट/लॉक कर देता है और उन्हें खोलने हेतु फिरौती (रकम) मांगता है?",
    "options": {
      "A": "Spyware",
      "B": "Adware",
      "C": "Ransomware",
      "D": "Worm"
    },
    "optionsHindi": {
      "A": "स्पाइवेयर",
      "B": "एडवेयर",
      "C": "रैनसमवेयर (Ransomware)",
      "D": "वॉर्म"
    },
    "correct": "C",
    "explanation": "Ransomware is a type of extortion malware that encrypts files and threatens to publish or permanently delete data unless a ransom is paid.",
    "explanationHindi": "रैनसमवेयर (जैसे WannaCry) कंप्यूटर के डेटा को एन्क्रिप्ट कर बंधक बना लेता है और डिक्रिप्शन की (Key) देने के बदले फिरौती की मांग करता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "cyber-security",
    "topicLabel": "Cyber Security",
    "difficulty": "easy"
  },
  {
    "id": "cp-028",
    "question": "In the OSI 7-Layer Reference Model, which layer is responsible for routing data packets from source to destination across different networks?",
    "questionHindi": "OSI 7-लेयर संदर्भ मॉडल में विभिन्न नेटवर्कों के मध्य डेटा पैकेटों की रूटिंग (Routing) किस परत का मुख्य कार्य है?",
    "options": {
      "A": "Data Link Layer",
      "B": "Network Layer (Layer 3)",
      "C": "Transport Layer",
      "D": "Physical Layer"
    },
    "optionsHindi": {
      "A": "डेटा लिंक लेयर",
      "B": "नेटवर्क लेयर (लेयर 3 - राउटर)",
      "C": "ट्रांसपोर्ट लेयर",
      "D": "फिजिकल लेयर"
    },
    "correct": "B",
    "explanation": "The Network Layer (Layer 3) handles logical IP addressing, packet forwarding, and dynamic routing across intermediate routers.",
    "explanationHindi": "नेटवर्क लेयर (Layer 3) लॉजिकल एड्रेसिंग (IP) और राउटिंग के जरिए पैकेट को स्रोत से गंतव्य तक पहुँचाने का कार्य करती है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "OSI Network Model",
    "difficulty": "medium"
  },
  {
    "id": "cp-029",
    "question": "Which open-source operating system kernel was created by Linus Torvalds in 1991?",
    "questionHindi": "1991 में लाइनस टोरवाल्ड्स (Linus Torvalds) द्वारा किस ओपन-सोर्स ऑपरेटिंग सिस्टम कर्नेल का निर्माण किया गया था?",
    "options": {
      "A": "UNIX",
      "B": "Linux",
      "C": "MS-DOS",
      "D": "FreeBSD"
    },
    "optionsHindi": {
      "A": "यूनिक्स (UNIX)",
      "B": "लिनक्स (Linux)",
      "C": "एमएस-डॉस (MS-DOS)",
      "D": "फ्री-बीएसडी"
    },
    "correct": "B",
    "explanation": "Linus Torvalds released the initial Linux kernel in 1991 as free, open-source software under the GNU General Public License.",
    "explanationHindi": "1991 में लाइनस टोरवाल्ड्स ने लिनक्स (Linux) कर्नेल तैयार किया, जो आज सर्वर और पुस्तकालय ऑटोमेशन में सर्वाधिक प्रयुक्त ओपन-सोर्स ऑपरेटिंग सिस्टम है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "operating-systems",
    "topicLabel": "Operating Systems",
    "difficulty": "easy"
  },
  {
    "id": "cp-030",
    "question": "What is the primary function of a DNS (Domain Name System) server on the Internet?",
    "questionHindi": "इंटरनेट पर DNS (डोमेन नेम सिस्टम) सर्वर का प्राथमिक कार्य क्या होता है?",
    "options": {
      "A": "To assign MAC addresses",
      "B": "To translate human-readable domain names into machine IP addresses",
      "C": "To store email messages",
      "D": "To scan incoming traffic for viruses"
    },
    "optionsHindi": {
      "A": "मैक एड्रेस आवंटित करना",
      "B": "डोमेन नाम (जैसे google.com) को संख्यात्मक IP पते में अनुवादित करना",
      "C": "ईमेल संदेशों को स्टोर करना",
      "D": "वायरस को स्कैन करना"
    },
    "correct": "B",
    "explanation": "DNS acts as the phonebook of the Internet by translating hostnames (like biharlibrarian2026.aiwazir.com) into IP addresses that computers understand.",
    "explanationHindi": "DNS इंटरनेट की टेलीफोन डायरेक्टरी की तरह कार्य करता है, जो मानवीय रूप से पढ़े जाने वाले डोमेन नेम को संख्यात्मक IP एड्रेस में बदलता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Internet & Networking",
    "difficulty": "medium"
  },
  {
    "id": "cp-031",
    "question": "In Microsoft PowerPoint, which special view allows you to make universal design changes (like logo, font, bullets) to all slides simultaneously?",
    "questionHindi": "माइक्रोसॉफ्ट पावरपॉइंट में सभी स्लाइड्स में एक साथ लेआउट, लोगो या फॉन्ट बदलने हेतु किस व्यू का उपयोग किया जाता है?",
    "options": {
      "A": "Slide Sorter View",
      "B": "Slide Master View",
      "C": "Notes Page View",
      "D": "Reading View"
    },
    "optionsHindi": {
      "A": "स्लाइड सॉर्टर व्यू",
      "B": "स्लाइड मास्टर व्यू (Slide Master)",
      "C": "नोट्स पेज व्यू",
      "D": "रीडिंग व्यू"
    },
    "correct": "B",
    "explanation": "The Slide Master view enables editing the top-level master slide to instantly apply unified branding, headers, fonts, and backgrounds across all presentation slides.",
    "explanationHindi": "स्लाइड मास्टर (Slide Master) में किया गया कोई भी बदलाव (लोगो, थीम, हेडर) प्रस्तुति की प्रत्येक स्लाइड पर स्वतः लागू हो जाता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "ms-office",
    "topicLabel": "MS Office Applications",
    "difficulty": "medium"
  },
  {
    "id": "cp-032",
    "question": "Which SQL statement is used to extract data from an existing database table?",
    "questionHindi": "डेटाबेस तालिका से डेटा को पुनः प्राप्त (Read/Fetch) करने के लिए किस SQL कमांड का उपयोग किया जाता है?",
    "options": {
      "A": "GET",
      "B": "EXTRACT",
      "C": "SELECT",
      "D": "FETCH"
    },
    "optionsHindi": {
      "A": "GET",
      "B": "EXTRACT",
      "C": "SELECT (सेलेक्ट)",
      "D": "FETCH"
    },
    "correct": "C",
    "explanation": "The SELECT statement in Structured Query Language (SQL) is used to query and retrieve data from one or more database tables.",
    "explanationHindi": "SQL में डेटाबेस की तालिका से आवश्यक रिकॉर्ड प्राप्त करने के लिए 'SELECT' कमांड (उदा. SELECT * FROM Books;) का उपयोग किया जाता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Database Systems",
    "difficulty": "easy"
  },
  {
    "id": "cp-033",
    "question": "What is the default port number assigned to the Simple Mail Transfer Protocol (SMTP) for sending outgoing emails?",
    "questionHindi": "आउटगोइंग ईमेल भेजने के लिए सिंपल मेल ट्रांसफर प्रोटोकॉल (SMTP) का मानक पोर्ट नंबर क्या है?",
    "options": {
      "A": "Port 21",
      "B": "Port 25",
      "C": "Port 80",
      "D": "Port 110"
    },
    "optionsHindi": {
      "A": "पोर्ट 21 (FTP)",
      "B": "पोर्ट 25 (SMTP)",
      "C": "पोर्ट 80 (HTTP)",
      "D": "पोर्ट 110 (POP3)"
    },
    "correct": "B",
    "explanation": "Port 25 is the standard designated TCP port for unencrypted SMTP mail relay between mail servers (Port 587 for submission with TLS).",
    "explanationHindi": "मेल सर्वर के मध्य ईमेल भेजने के लिए SMTP प्रोटोकॉल मानक पोर्ट 25 का उपयोग करता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Internet & Email",
    "difficulty": "hard"
  },
  {
    "id": "cp-034",
    "question": "Which keyboard shortcut in Windows opens the Task Manager directly without going through intermediate screens?",
    "questionHindi": "विंडोज ऑपरेटिंग सिस्टम में सीधे टास्क मैनेजर (Task Manager) खोलने का शॉर्टकट क्या है?",
    "options": {
      "A": "Ctrl + Shift + Esc",
      "B": "Ctrl + Alt + Delete",
      "C": "Alt + F4",
      "D": "Windows Key + T"
    },
    "optionsHindi": {
      "A": "Ctrl + Shift + Esc",
      "B": "Ctrl + Alt + Delete",
      "C": "Alt + F4",
      "D": "Windows + T"
    },
    "correct": "A",
    "explanation": "Pressing Ctrl + Shift + Esc opens the Windows Task Manager directly in one step.",
    "explanationHindi": "Ctrl + Shift + Esc शॉर्टकट सीधे विंडोज टास्क मैनेजर को खोल देता है, जिससे रनिंग प्रोग्राम और सीपीयू यूसेज देखा जा सकता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "operating-systems",
    "topicLabel": "Operating Systems & Shortcuts",
    "difficulty": "easy"
  },
  {
    "id": "cp-035",
    "question": "Which optical storage medium typically has a storage capacity of approximately 25 GB on a single-layer disc?",
    "questionHindi": "किस ऑप्टिकल स्टोरेज डिस्क की सिंगल-लेयर क्षमता सामान्यतः लगभग 25 GB होती है?",
    "options": {
      "A": "CD-ROM",
      "B": "DVD-R",
      "C": "Blu-ray Disc (BD)",
      "D": "Floppy Disk"
    },
    "optionsHindi": {
      "A": "सीडी (CD - 700 MB)",
      "B": "डीवीडी (DVD - 4.7 GB)",
      "C": "ब्लू-रे डिस्क (Blu-ray - 25 GB)",
      "D": "फ्लॉपी डिस्क (1.44 MB)"
    },
    "correct": "C",
    "explanation": "A standard single-layer Blu-ray Disc has a capacity of 25 GB (50 GB on dual-layer) using a 405nm blue-violet laser.",
    "explanationHindi": "ब्लू-रे डिस्क (Blu-ray Disc) में नीले-बैंगनी लेजर का उपयोग होता है और इसकी सिंगल-लेयर स्टोरेज क्षमता 25 GB होती है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Hardware & Storage",
    "difficulty": "medium"
  },
  {
    "id": "cp-036",
    "question": "In cyber security, a deceptive attempt to steal sensitive personal information (such as passwords and credit card credentials) by masquerading as a trustworthy entity in an email is called:",
    "questionHindi": "साइबर सुरक्षा में ईमेल या फर्जी लिंक द्वारा बैंक जैसी प्रतिष्ठित संस्था बनकर यूजरनेम व पासवर्ड चुराने की धोखाधड़ी को क्या कहते हैं?",
    "options": {
      "A": "Phishing",
      "B": "Denial of Service (DoS)",
      "C": "SQL Injection",
      "D": "Rootkit"
    },
    "optionsHindi": {
      "A": "फ़िशिंग (Phishing)",
      "B": "डिनायल ऑफ सर्विस (DoS)",
      "C": "एसक्यूएल इंजेक्शन",
      "D": "रूटकिट"
    },
    "correct": "A",
    "explanation": "Phishing involves spoofed emails, deceptive websites, and social engineering to trick individuals into disclosing confidential credentials.",
    "explanationHindi": "फ़िशिंग (Phishing) एक प्रकार का सामाजिक इंजीनियरिंग साइबर हमला है जिसमें जाली ईमेल द्वारा गोपनीय वित्तीय जानकारी चुराई जाती है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "cyber-security",
    "topicLabel": "Cyber Security",
    "difficulty": "easy"
  },
  {
    "id": "cp-037",
    "question": "What is the address space size of the next-generation Internet Protocol version 6 (IPv6)?",
    "questionHindi": "इंटरनेट प्रोटोकॉल संस्करण 6 (IPv6) का एड्रेस साइज कितने बिट्स का होता है?",
    "options": {
      "A": "32 bits",
      "B": "64 bits",
      "C": "128 bits",
      "D": "256 bits"
    },
    "optionsHindi": {
      "A": "32 बिट्स (IPv4)",
      "B": "64 बिट्स",
      "C": "128 बिट्स (IPv6)",
      "D": "256 बिट्स"
    },
    "correct": "C",
    "explanation": "IPv6 addresses are 128 bits long (yielding 2^128 unique addresses), compared to IPv4 which uses 32 bits.",
    "explanationHindi": "IPv6 एड्रेस 128 बिट्स का होता है (8 समूहों में 16-बिट हेक्साडेसिमल ब्लॉक), जबकि पुराना IPv4 एड्रेस 32 बिट्स का होता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "IP Addressing",
    "difficulty": "medium"
  },
  {
    "id": "cp-038",
    "question": "Which Unix/Linux command is used to display the current active working directory path?",
    "questionHindi": "यूनिक्स / लिनक्स (Linux) में वर्तमान वर्किंग डायरेक्टरी का पूर्ण पथ देखने के लिए किस कमांड का उपयोग किया जाता है?",
    "options": {
      "A": "dir",
      "B": "pwd",
      "C": "cd",
      "D": "ls"
    },
    "optionsHindi": {
      "A": "dir",
      "B": "pwd (Print Working Directory)",
      "C": "cd",
      "D": "ls"
    },
    "correct": "B",
    "explanation": "The 'pwd' command stands for 'Print Working Directory' and prints the full pathname of the current working directory in Unix/Linux shell.",
    "explanationHindi": "लिनक्स टर्मिनल में 'pwd' कमांड का पूर्ण रूप 'Print Working Directory' है, जो स्क्रीन पर वर्तमान डायरेक्टरी का पूरा पाथ दिखाता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "operating-systems",
    "topicLabel": "Operating Systems & Commands",
    "difficulty": "medium"
  },
  {
    "id": "cp-039",
    "question": "In Microsoft Word, what feature allows automated creation of multiple personalized letters, envelopes, or certificates from a single template and data source?",
    "questionHindi": "माइक्रोसॉफ्ट वर्ड में एक ही दस्तावेज टेम्पलेट से कई व्यक्तियों हेतु व्यक्तिगत पत्र या प्रमाण पत्र तैयार करने वाले फीचर को क्या कहते हैं?",
    "options": {
      "A": "AutoCorrect",
      "B": "Mail Merge",
      "C": "Macro",
      "D": "Track Changes"
    },
    "optionsHindi": {
      "A": "ऑटोकरेक्ट",
      "B": "मेल मर्ज (Mail Merge)",
      "C": "मैक्रो",
      "D": "ट्रैक चेंजेस"
    },
    "correct": "B",
    "explanation": "Mail Merge merges a main Word document template with a data spreadsheet (Excel/Access) to produce customized batch correspondence.",
    "explanationHindi": "मेल मर्ज (Mail Merge) के माध्यम से एक मुख्य पत्र प्रारूप को एक्सेल डेटाबेस से जोड़कर सैकड़ों लोगों के नाम के अलग-अलग पत्र एक क्लिक में बन जाते हैं।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "ms-office",
    "topicLabel": "MS Office Applications",
    "difficulty": "easy"
  },
  {
    "id": "cp-040",
    "question": "What is the primary function of a network Firewall?",
    "questionHindi": "कंप्यूटर नेटवर्क में फ़ायरवॉल (Firewall) का प्राथमिक कार्य क्या होता है?",
    "options": {
      "A": "To accelerate broadband speed",
      "B": "To monitor and filter incoming and outgoing network traffic based on security rules",
      "C": "To create physical backup copies of hard disks",
      "D": "To convert analog signals into digital signals"
    },
    "optionsHindi": {
      "A": "इंटरनेट स्पीड बढ़ाना",
      "B": "सुरक्षा नियमों के आधार पर आने-जाने वाले ट्रैफिक की निगरानी एवं अनाधिकृत प्रवेश रोकना",
      "C": "हार्ड डिस्क का बैकअप बनाना",
      "D": "एनालॉग को डिजिटल सिग्नल में बदलना"
    },
    "correct": "B",
    "explanation": "A firewall acts as a security barrier between a trusted internal network and untrusted external networks (like the Internet), inspecting packets against configured access rules.",
    "explanationHindi": "फ़ायरवॉल एक सुरक्षा कवच है जो पूर्वनिर्धारित सुरक्षा नियमों के आधार पर नेटवर्क ट्रैफिक की जांच करता है और बाहरी अनाधिकृत पहुंच को रोकता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "cyber-security",
    "topicLabel": "Network Security",
    "difficulty": "easy"
  },
  {
    "id": "cp-041",
    "question": "What is the small piece of data stored on the user's computer by a web browser while browsing a website called?",
    "questionHindi": "वेबसाइट ब्राउज़ करते समय यूजर की प्राथमिकताओं और सत्र जानकारी को क्लाइंट कंप्यूटर पर स्टोर करने वाली छोटी फाइल क्या कहलाती है?",
    "options": {
      "A": "Cookie",
      "B": "Plugin",
      "C": "Applet",
      "D": "Cache"
    },
    "optionsHindi": {
      "A": "कुकी (Cookie)",
      "B": "प्लगइन",
      "C": "एप्लेट",
      "D": "कैश"
    },
    "correct": "A",
    "explanation": "Cookies are small text files created by a web server and stored on the user's device to track session states, logins, and preferences.",
    "explanationHindi": "कुकीज़ (Cookies) वेबसाइट द्वारा यूजर के ब्राउज़र में सहेजी गई छोटी टेक्स्ट फाइलें होती हैं जो लॉगिन स्थिति और प्राथमिकताओं को याद रखती हैं।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Web & Browsers",
    "difficulty": "easy"
  },
  {
    "id": "cp-042",
    "question": "Which of the following is considered an open-source relational database management system (RDBMS)?",
    "questionHindi": "निम्नलिखित में से कौन सा एक ओपन-सोर्स रिलेशनल डेटाबेस मैनेजमेंट सिस्टम (RDBMS) है?",
    "options": {
      "A": "Oracle Database",
      "B": "PostgreSQL",
      "C": "Microsoft SQL Server",
      "D": "IBM DB2"
    },
    "optionsHindi": {
      "A": "ओरेकल डेटाबेस",
      "B": "पोस्टग्रे-एसक्यूएल (PostgreSQL) / MySQL",
      "C": "माइक्रोसॉफ्ट एसक्यूएल सर्वर",
      "D": "आईबीएम डीबी2"
    },
    "correct": "B",
    "explanation": "PostgreSQL (along with MySQL) is an enterprise-grade, powerful open-source object-relational database system.",
    "explanationHindi": "PostgreSQL और MySQL प्रसिद्ध ओपन-सोर्स RDBMS हैं, जबकि Oracle, MS SQL Server और DB2 वाणिज्यिक (Proprietary) डेटाबेस हैं।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Database Systems",
    "difficulty": "medium"
  },
  {
    "id": "cp-043",
    "question": "What does RAID stand for in computer storage systems?",
    "questionHindi": "कंप्यूटर डेटा स्टोरेज तकनीक में RAID का पूर्ण रूप क्या होता है?",
    "options": {
      "A": "Redundant Array of Independent Disks",
      "B": "Random Access Information Device",
      "C": "Reliable Array of Integrated Drives",
      "D": "Rapid Access Interface Disc"
    },
    "optionsHindi": {
      "A": "रिडंडेंट एरे ऑफ इंडिपेंडेंट डिस्क (Redundant Array of Independent Disks)",
      "B": "रैंडम एक्सेस इंफॉर्मेशन डिवाइस",
      "C": "रिलायबल एरे ऑफ इंटीग्रेटेड ड्राइव्स",
      "D": "रैपिड एक्सेस इंटरफेस डिस्क"
    },
    "correct": "A",
    "explanation": "RAID (Redundant Array of Independent Disks) combines multiple physical disk drives into a single logical unit for redundancy, fault tolerance, and performance.",
    "explanationHindi": "RAID का पूर्ण रूप 'Redundant Array of Independent Disks' है, जो डेटा सुरक्षा और डिस्क विफलता से बचाव हेतु कई हार्ड डिस्क को एक साथ जोड़ता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Storage Technology",
    "difficulty": "hard"
  },
  {
    "id": "cp-044",
    "question": "Which wireless communication technology operates in the 2.4 GHz or 5 GHz ISM radio bands following the IEEE 802.11 standards?",
    "questionHindi": "IEEE 802.11 मानकों के अंतर्गत 2.4 GHz या 5 GHz रेडियो तरंगों पर काम करने वाली वायरलेस तकनीक कौन सी है?",
    "options": {
      "A": "Bluetooth",
      "B": "Wi-Fi",
      "C": "NFC",
      "D": "Zigbee"
    },
    "optionsHindi": {
      "A": "ब्लूटूथ (Bluetooth - 802.15)",
      "B": "वाई-फ़ाई (Wi-Fi - IEEE 802.11)",
      "C": "एनएफसी (NFC)",
      "D": "जिगबी"
    },
    "correct": "B",
    "explanation": "Wi-Fi wireless local area network technology operates under IEEE 802.11 specifications across 2.4 GHz, 5 GHz, and 6 GHz bands.",
    "explanationHindi": "वाई-फ़ाई (Wireless Fidelity) IEEE 802.11 मानक पर आधारित लोकल एरिया नेटवर्क तकनीक है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Wireless Networking",
    "difficulty": "medium"
  },
  {
    "id": "cp-045",
    "question": "What is the maximum number of rows supported in a single worksheet of modern Microsoft Excel (.xlsx)?",
    "questionHindi": "आधुनिक माइक्रोसॉफ्ट एक्सेल (.xlsx) की एक एकल वर्कशीट में पंक्तियों (Rows) की अधिकतम संख्या कितनी होती है?",
    "options": {
      "A": "65,536",
      "B": "1,048,576",
      "C": "524,288",
      "D": "2,097,152"
    },
    "optionsHindi": {
      "A": "65,536 (पुराना .xls)",
      "B": "1,048,576 (10 लाख 48 हजार 576 पंक्तियाँ)",
      "C": "524,288",
      "D": "2,097,152"
    },
    "correct": "B",
    "explanation": "Modern Excel worksheets have exactly 1,048,576 rows and 16,384 columns (up to XFD). The older .xls format supported 65,536 rows.",
    "explanationHindi": "एक्सेल 2007 और उसके बाद के संस्करणों में कुल 1,048,576 पंक्तियाँ (Rows) और 16,384 कॉलम होते हैं।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "ms-office",
    "topicLabel": "MS Excel Features",
    "difficulty": "hard"
  },
  {
    "id": "cp-046",
    "question": "Which protocol is used by web clients to retrieve and sync emails while leaving the master copies on the mail server?",
    "questionHindi": "ईमेल क्लाइंट्स द्वारा सर्वर से ईमेल पढ़ने और कई उपकरणों पर सिंक रखने हेतु किस आधुनिक प्रोटोकॉल का उपयोग किया जाता है?",
    "options": {
      "A": "POP3",
      "B": "IMAP",
      "C": "SMTP",
      "D": "SNMP"
    },
    "optionsHindi": {
      "A": "POP3 (ईमेल डाउनलोड कर सर्वर से हटाता है)",
      "B": "IMAP (ईमेल को सर्वर पर सिंक रखता है)",
      "C": "SMTP",
      "D": "SNMP"
    },
    "correct": "B",
    "explanation": "IMAP (Internet Message Access Protocol, port 143/993) keeps messages on the server and synchronizes read/unread status across all phones and computers.",
    "explanationHindi": "IMAP (इंटरनेट मैसेज एक्सेस प्रोटोकॉल) ईमेल को सर्वर पर ही रखता है जिससे यूजर मोबाइल व कंप्यूटर दोनों पर एक जैसा इनबॉक्स देख सकते हैं।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Email Protocols",
    "difficulty": "medium"
  },
  {
    "id": "cp-047",
    "question": "What type of software is Adobe Acrobat Reader categorized as?",
    "questionHindi": "एडोब एक्रोबेट रीडर (Adobe Acrobat Reader) किस श्रेणी का सॉफ्टवेयर है?",
    "options": {
      "A": "System Software",
      "B": "Application Software / Freeware",
      "C": "Firmware",
      "D": "Operating System"
    },
    "optionsHindi": {
      "A": "सिस्टम सॉफ्टवेयर",
      "B": "एप्लीकेशन सॉफ्टवेयर (फ्रीवेयर)",
      "C": "फर्मवेयर",
      "D": "ऑपरेटिंग सिस्टम"
    },
    "correct": "B",
    "explanation": "Adobe Acrobat Reader is an application software (distributed as freeware) designed to view, print, and annotate Portable Document Format (PDF) files.",
    "explanationHindi": "एडोब रीडर एक एप्लीकेशन सॉफ्टवेयर है जिसका उपयोग पीडीएफ (PDF) फाइलों को पढ़ने और देखने के लिए किया जाता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Software Classifications",
    "difficulty": "easy"
  },
  {
    "id": "cp-048",
    "question": "Which component inside a CPU performs arithmetic calculations (such as addition and subtraction) and logical comparisons (such as AND, OR)?",
    "questionHindi": "सेंट्रल प्रोसेसिंग यूनिट (CPU) का कौन सा घटक अंकगणितीय गणनाओं और तार्किक तुलनाओं का निष्पादन करता है?",
    "options": {
      "A": "Control Unit (CU)",
      "B": "Arithmetic Logic Unit (ALU)",
      "C": "Registers",
      "D": "Cache Memory"
    },
    "optionsHindi": {
      "A": "कंट्रोल यूनिट (CU)",
      "B": "अरिथमेटिक लॉजिक यूनिट (ALU)",
      "C": "रजिस्टर",
      "D": "कैश मेमोरी"
    },
    "correct": "B",
    "explanation": "The ALU (Arithmetic Logic Unit) executes all mathematical operations (+, -, *, /) and logical comparisons (=, <, >, AND, OR) inside the microprocessor.",
    "explanationHindi": "CPU का ALU (अंकगणित और तर्क इकाई) सभी प्रकार की जोड़-घटाव और सत्य/असत्य जैसे तार्किक निर्णय लेने का कार्य करता है।",
    "subject": "computer",
    "unit": "computer-basics",
    "topic": "hardware-software",
    "topicLabel": "Computer Architecture",
    "difficulty": "easy"
  },
  {
    "id": "cp-049",
    "question": "Which of the following describes an IP address assigned dynamically and temporarily to a computer every time it connects to a network?",
    "questionHindi": "कंप्यूटर के नेटवर्क से जुड़ने पर DHCP सर्वर द्वारा अस्थायी रूप से दिए जाने वाले IP पते को क्या कहते हैं?",
    "options": {
      "A": "Static IP Address",
      "B": "Dynamic IP Address",
      "C": "MAC Address",
      "D": "Broadcast Address"
    },
    "optionsHindi": {
      "A": "स्टैटिक IP पता",
      "B": "डायनामिक IP पता (Dynamic IP)",
      "C": "मैक पता",
      "D": "ब्रॉडकास्ट पता"
    },
    "correct": "B",
    "explanation": "Dynamic IP addresses are temporarily leased to client devices by a DHCP (Dynamic Host Configuration Protocol) server from an available address pool.",
    "explanationHindi": "डायनामिक IP एड्रेस DHCP प्रोटोकॉल द्वारा ऑटोमैटिक रूप से आवंटित किया जाता है, जो डिवाइस के पुनः कनेक्ट होने पर बदल सकता है।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "internet-email",
    "topicLabel": "Networking Concepts",
    "difficulty": "medium"
  },
  {
    "id": "cp-050",
    "question": "What is the primary objective of implementing Two-Factor Authentication (2FA) for online accounts?",
    "questionHindi": "ऑनलाइन खातों में टू-फैक्टर ऑथेंटिकेशन (2FA) लागू करने का प्राथमिक उद्देश्य क्या होता है?",
    "options": {
      "A": "To compress uploaded files",
      "B": "To require two separate forms of identification (e.g. password + OTP) before granting access",
      "C": "To double internet download bandwidth",
      "D": "To auto-generate strong master passwords"
    },
    "optionsHindi": {
      "A": "फाइल का आकार छोटा करना",
      "B": "सुरक्षा बढ़ाने हेतु पासवर्ड के साथ एक अतिरिक्त सत्यापन कोड (जैसे OTP या बायोमेट्रिक) मांगना",
      "C": "इंटरनेट स्पीड दोगुनी करना",
      "D": "पासवर्ड रीसेट करना"
    },
    "correct": "B",
    "explanation": "Two-Factor Authentication (2FA) bolsters defense by requiring two distinct factors: something you know (password) and something you have (OTP on phone or authenticator app).",
    "explanationHindi": "2FA सुरक्षा की एक मजबूत परत है जो पासवर्ड लीक होने पर भी बिना मोबाइल OTP या बायोमेट्रिक सत्यापन के खाते में प्रवेश नहीं होने देती।",
    "subject": "computer",
    "unit": "internet-security",
    "topic": "cyber-security",
    "topicLabel": "Cyber Security & Authentication",
    "difficulty": "easy"
  }
];
