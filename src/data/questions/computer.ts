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

export const computerQuestions: Question[] = [
  {
    id: 'cp-001',
    question: 'Which component is considered the "brain" of a computer system?',
    options: { A: 'RAM', B: 'CPU', C: 'Hard Drive', D: 'Motherboard' },
    correct: 'B',
    explanation: 'The Central Processing Unit (CPU) is often called the brain of the computer because it handles all instructions it receives from hardware and software.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'easy'
  },
  {
    id: 'cp-002',
    question: 'What does RAM stand for in computer terminology?',
    options: { A: 'Read Access Memory', B: 'Random Access Memory', C: 'Rapid Action Memory', D: 'Run Anywhere Memory' },
    correct: 'B',
    explanation: 'RAM stands for Random Access Memory. It is the temporary, volatile memory used by the system to store active applications and data.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'easy'
  },
  {
    id: 'cp-003',
    question: 'Which of the following is an example of an input device?',
    options: { A: 'Monitor', B: 'Printer', C: 'Keyboard', D: 'Speaker' },
    correct: 'C',
    explanation: 'A keyboard is an input device used to enter data into a computer. Monitors, printers, and speakers are all output devices.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'easy'
  },
  {
    id: 'cp-004',
    question: 'Which type of software is an Operating System (OS)?',
    options: { A: 'Application Software', B: 'System Software', C: 'Utility Software', D: 'Malware' },
    correct: 'B',
    explanation: 'An Operating System is system software that manages computer hardware, software resources, and provides common services for computer programs.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'operating-systems',
    topicLabel: 'Operating Systems',
    difficulty: 'medium'
  },
  {
    id: 'cp-005',
    question: 'What is the standard keyboard shortcut to undo an action in Microsoft Word?',
    options: { A: 'Ctrl + C', B: 'Ctrl + Y', C: 'Ctrl + Z', D: 'Ctrl + V' },
    correct: 'C',
    explanation: 'Ctrl + Z is the universal keyboard shortcut for "Undo" in Windows environments, including Microsoft Word.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'ms-office',
    topicLabel: 'MS Office',
    difficulty: 'easy'
  },
  {
    id: 'cp-006',
    question: 'In Microsoft Excel, all formulas must begin with which character?',
    options: { A: '+', B: '@', C: '=', D: '#' },
    correct: 'C',
    explanation: 'Every formula in Microsoft Excel must start with an equals sign (=). This tells the software to calculate the following string as an equation.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'ms-office',
    topicLabel: 'MS Office',
    difficulty: 'easy'
  },
  {
    id: 'cp-007',
    question: 'Which Windows feature allows you to manage files and folders?',
    options: { A: 'Task Manager', B: 'Control Panel', C: 'Command Prompt', D: 'File Explorer' },
    correct: 'D',
    explanation: 'File Explorer (formerly Windows Explorer) is the graphical file management utility for the Microsoft Windows operating system.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'operating-systems',
    topicLabel: 'Operating Systems',
    difficulty: 'easy'
  },
  {
    id: 'cp-008',
    question: 'What does HTTP stand for in networking?',
    options: { A: 'HyperText Transfer Protocol', B: 'HyperText Transmission Process', C: 'Hyper Transfer Text Protocol', D: 'HyperText Technology Protocol' },
    correct: 'A',
    explanation: 'HTTP stands for HyperText Transfer Protocol, the foundational protocol used for transmitting web pages over the internet.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'medium'
  },
  {
    id: 'cp-009',
    question: 'In an email, what does the "BCC" field stand for?',
    options: { A: 'Basic Carbon Copy', B: 'Blind Carbon Copy', C: 'Bulk Carbon Copy', D: 'Back Carbon Copy' },
    correct: 'B',
    explanation: 'BCC stands for Blind Carbon Copy. It sends a copy of the email to the recipient without showing their email address to other recipients.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'medium'
  },
  {
    id: 'cp-010',
    question: 'Which of the following refers to a malicious program that disguises itself as legitimate software?',
    options: { A: 'Worm', B: 'Ransomware', C: 'Trojan Horse', D: 'Spyware' },
    correct: 'C',
    explanation: 'A Trojan Horse is a type of malware that misleads users of its true intent by disguising itself as a standard, legitimate file or program.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'medium'
  },
  {
    id: 'cp-011',
    question: 'What is phishing?',
    options: { A: 'A type of computer game', B: 'A cyber attack aimed at stealing sensitive information', C: 'A networking hardware component', D: 'A process of updating software' },
    correct: 'B',
    explanation: 'Phishing is a fraudulent attempt, usually via email, to obtain sensitive information like usernames, passwords, or credit card details by pretending to be a trustworthy entity.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'medium'
  },
  {
    id: 'cp-012',
    question: 'What is a firewall in computer networking?',
    options: { A: 'A cooling system for servers', B: 'A backup power supply', C: 'A security system monitoring and controlling network traffic', D: 'A type of hard drive partition' },
    correct: 'C',
    explanation: 'A firewall is a network security device or software that monitors incoming and outgoing network traffic and blocks unauthorized access according to security rules.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'medium'
  },
  {
    id: 'cp-013',
    question: 'Which of the following is considered the most secure practice for passwords?',
    options: { A: 'Using a single complex password for all sites', B: 'Using personal information like birthdates', C: 'Using a combination of letters, numbers, and symbols, and unique passwords for different sites', D: 'Writing passwords on a sticky note attached to the monitor' },
    correct: 'C',
    explanation: 'Strong security practice involves using long, complex passwords (mix of cases, numbers, symbols) and never reusing the same password across multiple services.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'cyber-security',
    topicLabel: 'Cyber Security',
    difficulty: 'easy'
  },
  {
    id: 'cp-014',
    question: 'What is the purpose of the Cache Memory in a computer?',
    options: { A: 'To permanently store user data', B: 'To provide high-speed data access to the CPU', C: 'To cool down the processor', D: 'To display graphics on the monitor' },
    correct: 'B',
    explanation: 'Cache memory is a small-sized, high-speed volatile memory that provides the CPU with rapid access to frequently used instructions and data.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'hard'
  },
  {
    id: 'cp-015',
    question: 'Which protocol is commonly used to securely browse websites (indicated by a padlock in the browser)?',
    options: { A: 'FTP', B: 'HTTP', C: 'HTTPS', D: 'SMTP' },
    correct: 'C',
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) uses encryption (like TLS/SSL) for secure communication over a computer network, widely used on the Internet.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'medium'
  },
  {
    id: 'cp-016',
    question: 'What is the function of a router in a computer network?',
    options: { A: 'To protect the computer from viruses', B: 'To forward data packets between different computer networks', C: 'To print documents over Wi-Fi', D: 'To store backups of files' },
    correct: 'B',
    explanation: 'A router is a networking device that forwards data packets between computer networks. They direct traffic on the Internet.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'hard'
  },
  {
    id: 'cp-017',
    question: 'In Microsoft Excel, what function is used to find the highest number in a range of cells?',
    options: { A: '=TOP()', B: '=HIGHEST()', C: '=MAX()', D: '=SUM()' },
    correct: 'C',
    explanation: 'The =MAX() function in Excel evaluates a range of cells and returns the largest (maximum) numeric value found within that range.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'ms-office',
    topicLabel: 'MS Office',
    difficulty: 'easy'
  },
  {
    id: 'cp-018',
    question: 'Which of the following is an open-source operating system?',
    options: { A: 'Windows 10', B: 'macOS', C: 'Linux', D: 'iOS' },
    correct: 'C',
    explanation: 'Linux is a prominent example of free and open-source software, whereas Windows, macOS, and iOS are proprietary operating systems.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'operating-systems',
    topicLabel: 'Operating Systems',
    difficulty: 'medium'
  },
  {
    id: 'cp-019',
    question: 'What type of memory is ROM?',
    options: { A: 'Volatile', B: 'Non-volatile', C: 'Temporary', D: 'Virtual' },
    correct: 'B',
    explanation: 'ROM (Read-Only Memory) is non-volatile memory, meaning it retains its contents even when the computer is powered off. It typically stores firmware.',
    subject: 'computer',
    unit: 'computer-basics',
    topic: 'hardware-software',
    topicLabel: 'Hardware & Software',
    difficulty: 'hard'
  },
  {
    id: 'cp-020',
    question: 'What is a URL?',
    options: { A: 'A hardware address for a network card', B: 'A web browser developed by Google', C: 'The global address of documents and other resources on the World Wide Web', D: 'A type of computer virus' },
    correct: 'C',
    explanation: 'URL stands for Uniform Resource Locator. It is a reference (an address) to a resource on the Internet, specifying its location and the protocol used to access it.',
    subject: 'computer',
    unit: 'internet-security',
    topic: 'internet-email',
    topicLabel: 'Internet & Email',
    difficulty: 'easy'
  }
];
