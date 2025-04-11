const quizData = {
    'english': [
        {
            question: "Which of the following is a synonym for 'happy'?",
            options: ["Joyful", "Angry", "Sad", "Boring"],
            answer: 0
        },
        {
            question: "What is the past tense of 'run'?",
            options: ["Runned", "Ran", "Running", "Runs"],
            answer: 1
        },
        {
            question: "Which word is an adjective in this sentence: 'The quick brown fox jumps over the lazy dog'?",
            options: ["Fox", "Quick", "Jumps", "Dog"],
            answer: 1
        },
        {
            question: "What is the plural form of 'child'?",
            options: ["Childs", "Children", "Childes", "Child"],
            answer: 1
        },
        {
            question: "Which of these is a preposition?",
            options: ["Run", "Beautiful", "Under", "Quickly"],
            answer: 2
        },
        {
            question: "What is the correct spelling?",
            options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
            answer: 2
        },
        {
            question: "Which sentence is grammatically correct?",
            options: [
                "She don't like apples.",
                "She doesn't likes apples.",
                "She doesn't like apples.",
                "She not like apples."
            ],
            answer: 2
        },
        {
            question: "What is the opposite of 'ancient'?",
            options: ["Old", "Modern", "Historic", "Aged"],
            answer: 1
        },
        {
            question: "Which word is misspelled?",
            options: ["Separate", "Definitely", "Occurrence", "Arguement"],
            answer: 3
        },
        {
            question: "What is the literary device used in 'The stars danced in the sky'?",
            options: ["Simile", "Metaphor", "Personification", "Alliteration"],
            answer: 2
        },
        {
            question: "Which of these is a conjunction?",
            options: ["Run", "But", "Happy", "Quickly"],
            answer: 1
        },
        {
            question: "What is the correct comparative form of 'good'?",
            options: ["Gooder", "More good", "Better", "Best"],
            answer: 2
        },
        {
            question: "Which sentence is in passive voice?",
            options: [
                "The cat chased the mouse.",
                "The mouse was chased by the cat.",
                "The cat is chasing the mouse.",
                "The cat will chase the mouse."
            ],
            answer: 1
        },
        {
            question: "What is the meaning of 'benevolent'?",
            options: ["Kind", "Angry", "Strange", "Funny"],
            answer: 0
        },
        {
            question: "Which punctuation mark is used to indicate possession?",
            options: ["Comma (,)", "Period (.)", "Apostrophe (')", "Colon (:) "],
            answer: 2
        },
        {
            question: "What type of word is 'quickly'?",
            options: ["Noun", "Verb", "Adjective", "Adverb"],
            answer: 3
        },
        {
            question: "Which of these is a complex sentence?",
            options: [
                "I like coffee.",
                "I like coffee, and I like tea.",
                "Although I like coffee, I prefer tea.",
                "Coffee, tea, and milk."
            ],
            answer: 2
        },
        {
            question: "What is the correct plural of 'cactus'?",
            options: ["Cactuses", "Cacti", "Both are correct", "Neither is correct"],
            answer: 2
        },
        {
            question: "Which word is not a homophone?",
            options: ["Their/There", "To/Too", "Accept/Except", "Happy/Sad"],
            answer: 3
        },
        {
            question: "What is the literary term for the main character in a story?",
            options: ["Antagonist", "Protagonist", "Narrator", "Author"],
            answer: 1
        },
        // Additional 20 English questions
        {
            question: "What is the term for a word that sounds like what it represents?",
            options: ["Onomatopoeia", "Alliteration", "Simile", "Metaphor"],
            answer: 0
        },
        {
            question: "Which of these is not a type of pronoun?",
            options: ["Personal", "Demonstrative", "Conjunctive", "Possessive"],
            answer: 2
        },
        {
            question: "What is the name for a word formed from the initial letters of other words?",
            options: ["Portmanteau", "Acronym", "Homonym", "Synonym"],
            answer: 1
        },
        {
            question: "Which of these sentences contains a dangling modifier?",
            options: [
                "Running quickly, the finish line approached.",
                "She ate the pizza quickly.",
                "The book that I read was interesting.",
                "After finishing my homework, I went to bed."
            ],
            answer: 0
        },
        {
            question: "What is the term for a word that has the opposite meaning of another word?",
            options: ["Synonym", "Homophone", "Antonym", "Homonym"],
            answer: 2
        },
        {
            question: "Which of these is an example of an oxymoron?",
            options: ["Pretty ugly", "Run fast", "Jump high", "Speak softly"],
            answer: 0
        },
        {
            question: "What is the term for a phrase whose meaning cannot be deduced from its individual words?",
            options: ["Cliché", "Idiom", "Euphemism", "Proverb"],
            answer: 1
        },
        {
            question: "Which of these is not a type of verb?",
            options: ["Action", "Linking", "Helping", "Descriptive"],
            answer: 3
        },
        {
            question: "What is the term for a word that names a person, place, thing, or idea?",
            options: ["Verb", "Adjective", "Noun", "Adverb"],
            answer: 2
        },
        {
            question: "Which of these is an example of alliteration?",
            options: [
                "She sells seashells by the seashore.",
                "The cat sat on the mat.",
                "I came, I saw, I conquered.",
                "Life is like a box of chocolates."
            ],
            answer: 0
        },
        {
            question: "What is the term for a verb that functions as a noun?",
            options: ["Participle", "Gerund", "Infinitive", "Modal"],
            answer: 1
        },
        {
            question: "Which of these is not a type of sentence?",
            options: ["Declarative", "Interrogative", "Exclamatory", "Descriptive"],
            answer: 3
        },
        {
            question: "What is the term for a word that modifies a noun?",
            options: ["Adverb", "Verb", "Adjective", "Preposition"],
            answer: 2
        },
        {
            question: "Which of these is an example of a metaphor?",
            options: [
                "Her smile was like sunshine.",
                "He's a night owl.",
                "The wind howled in the night.",
                "She runs as fast as a cheetah."
            ],
            answer: 1
        },
        {
            question: "What is the term for a word that joins words, phrases, or clauses?",
            options: ["Preposition", "Conjunction", "Interjection", "Article"],
            answer: 1
        },
        {
            question: "Which of these is not a type of conjunction?",
            options: ["Coordinating", "Subordinating", "Correlative", "Descriptive"],
            answer: 3
        },
        {
            question: "What is the term for a verb form that functions as an adjective?",
            options: ["Gerund", "Infinitive", "Participle", "Modal"],
            answer: 2
        },
        {
            question: "Which of these is an example of hyperbole?",
            options: [
                "I'm so hungry I could eat a horse.",
                "The sky is blue.",
                "She walked to the store.",
                "It's raining outside."
            ],
            answer: 0
        },
        {
            question: "What is the term for a word that expresses strong emotion?",
            options: ["Conjunction", "Preposition", "Interjection", "Adverb"],
            answer: 2
        },
        {
            question: "Which of these is not a type of noun?",
            options: ["Proper", "Common", "Abstract", "Descriptive"],
            answer: 3
        }
    ],
    'general-knowledge': [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            answer: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: 1
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: 2
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            answer: 3
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["New Zealand", "South Africa", "Australia", "Brazil"],
            answer: 2
        },
        {
            question: "What is the currency of Japan?",
            options: ["Won", "Yen", "Ringgit", "Baht"],
            answer: 1
        },
        {
            question: "Which animal is known as the 'King of the Jungle'?",
            options: ["Tiger", "Lion", "Elephant", "Gorilla"],
            answer: 1
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
            answer: 1
        },
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Thailand", "South Korea"],
            answer: 1
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            answer: 1
        },
        {
            question: "Which famous scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            answer: 1
        },
        {
            question: "What is the main ingredient in guacamole?",
            options: ["Tomato", "Avocado", "Onion", "Pepper"],
            answer: 1
        },
        {
            question: "Which country gifted the Statue of Liberty to the United States?",
            options: ["England", "France", "Spain", "Italy"],
            answer: 1
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            answer: 2
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Mercury", "Earth", "Mars"],
            answer: 1
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            answer: 3
        },
        {
            question: "Which famous ship sank in 1912?",
            options: ["Lusitania", "Titanic", "Bismarck", "Queen Mary"],
            answer: 1
        },
        {
            question: "What is the national flower of Japan?",
            options: ["Cherry Blossom", "Rose", "Lotus", "Tulip"],
            answer: 0
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
            answer: 1
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: 1
        },
        // Additional 20 General Knowledge questions
        {
            question: "Which country is known as the Land of the Midnight Sun?",
            options: ["Sweden", "Norway", "Finland", "Iceland"],
            answer: 1
        },
        {
            question: "What is the capital of Brazil?",
            options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            answer: 2
        },
        {
            question: "Which famous physicist wrote 'A Brief History of Time'?",
            options: ["Richard Feynman", "Stephen Hawking", "Albert Einstein", "Niels Bohr"],
            answer: 1
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Brain", "Skin", "Heart"],
            answer: 2
        },
        {
            question: "Which country invented tea?",
            options: ["India", "England", "China", "Japan"],
            answer: 2
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            answer: 2
        },
        {
            question: "Which planet has the most moons?",
            options: ["Jupiter", "Saturn", "Neptune", "Mars"],
            answer: 1
        },
        {
            question: "What is the most spoken language in the world?",
            options: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
            answer: 1
        },
        {
            question: "Which country has the most time zones?",
            options: ["United States", "Russia", "China", "France"],
            answer: 3
        },
        {
            question: "What is the world's longest river?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: 1
        },
        {
            question: "Which country is the largest by area?",
            options: ["China", "United States", "Canada", "Russia"],
            answer: 3
        },
        {
            question: "What is the most populous country in the world?",
            options: ["India", "United States", "China", "Indonesia"],
            answer: 2
        },
        {
            question: "Which city is known as the Big Apple?",
            options: ["Chicago", "Los Angeles", "New York City", "Boston"],
            answer: 2
        },
        {
            question: "What is the national animal of Australia?",
            options: ["Kangaroo", "Koala", "Emu", "Tasmanian Devil"],
            answer: 0
        },
        {
            question: "Which country is home to the ancient pyramids of Giza?",
            options: ["Iraq", "Egypt", "Mexico", "Sudan"],
            answer: 1
        },
        {
            question: "What is the currency of the United Kingdom?",
            options: ["Euro", "Dollar", "Pound", "Frank"],
            answer: 2
        },
        {
            question: "Which famous artist cut off his own ear?",
            options: ["Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Claude Monet"],
            answer: 1
        },
        {
            question: "What is the largest continent by area?",
            options: ["Africa", "North America", "Asia", "Europe"],
            answer: 2
        },
        {
            question: "Which country is the origin of the cocktail Mojito?",
            options: ["Mexico", "Spain", "Cuba", "Brazil"],
            answer: 2
        },
        {
            question: "What is the national sport of Canada?",
            options: ["Ice Hockey", "Lacrosse", "Basketball", "Soccer"],
            answer: 1
        }
    ],
    'computer-science': [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },
        {
            question: "Which language is used for styling web pages?",
            options: ["HTML", "JavaScript", "CSS", "Python"],
            answer: 2
        },
        {
            question: "What is the most popular programming language for web development?",
            options: ["Python", "JavaScript", "Java", "C++"],
            answer: 1
        },
        {
            question: "Which of these is not a programming language?",
            options: ["Ruby", "Swift", "HTML", "Kotlin"],
            answer: 2
        },
        {
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Processing Unit",
                "Central Process Unit",
                "Computer Process Unit"
            ],
            answer: 0
        },
        {
            question: "Which company developed JavaScript?",
            options: ["Microsoft", "Netscape", "Google", "Apple"],
            answer: 1
        },
        {
            question: "What does API stand for?",
            options: [
                "Application Programming Interface",
                "Advanced Programming Interface",
                "Application Process Integration",
                "Automated Programming Interface"
            ],
            answer: 0
        },
        {
            question: "Which data structure uses FIFO (First In First Out) principle?",
            options: ["Stack", "Queue", "Array", "Tree"],
            answer: 1
        },
        {
            question: "What is the binary representation of the decimal number 10?",
            options: ["1010", "1100", "1001", "1110"],
            answer: 0
        },
        {
            question: "Which of these is not a JavaScript framework?",
            options: ["React", "Angular", "Django", "Vue"],
            answer: 2
        },
        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Simple Query Language",
                "Standard Query Language",
                "System Query Language"
            ],
            answer: 0
        },
        {
            question: "Which protocol is used for secure communication over the internet?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            answer: 2
        },
        {
            question: "What is the time complexity of binary search?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: 2
        },
        {
            question: "Which of these is not a NoSQL database?",
            options: ["MongoDB", "Cassandra", "PostgreSQL", "Redis"],
            answer: 2
        },
        {
            question: "What does DNS stand for?",
            options: [
                "Domain Name System",
                "Data Name System",
                "Domain Network System",
                "Data Network Service"
            ],
            answer: 0
        },
        {
            question: "Which programming language was created by Guido van Rossum?",
            options: ["Ruby", "Python", "Java", "C#"],
            answer: 1
        },
        {
            question: "What is the main purpose of a CDN?",
            options: [
                "To store user data",
                "To deliver content faster",
                "To process payments",
                "To manage databases"
            ],
            answer: 1
        },
        {
            question: "Which of these is not a version control system?",
            options: ["Git", "SVN", "Mercurial", "Jenkins"],
            answer: 3
        },
        {
            question: "What does IDE stand for?",
            options: [
                "Integrated Development Environment",
                "International Development Environment",
                "Integrated Design Environment",
                "International Design Environment"
            ],
            answer: 0
        },
        {
            question: "Which company developed the React framework?",
            options: ["Google", "Facebook", "Microsoft", "Twitter"],
            answer: 1
        },
        // Additional 20 Computer Science questions
        {
            question: "What is the most common use of the blockchain technology?",
            options: ["Cryptocurrency", "Web Development", "Game Development", "Data Analysis"],
            answer: 0
        },
        {
            question: "Which of these is not a JavaScript data type?",
            options: ["String", "Boolean", "Integer", "Object"],
            answer: 2
        },
        {
            question: "What does MVC stand for in software architecture?",
            options: [
                "Model View Controller",
                "Main View Component",
                "Model View Component",
                "Main View Controller"
            ],
            answer: 0
        },
        {
            question: "Which algorithm is used for pathfinding in graphs?",
            options: ["Bubble Sort", "Dijkstra's", "Binary Search", "Quick Sort"],
            answer: 1
        },
        {
            question: "What is the default port number for HTTP?",
            options: ["80", "443", "8080", "21"],
            answer: 0
        },
        {
            question: "Which of these is not a cloud computing service?",
            options: ["AWS", "Azure", "GCP", "NVIDIA"],
            answer: 3
        },
        {
            question: "What is the main purpose of Docker?",
            options: [
                "Virtualization",
                "Containerization",
                "Cloud Storage",
                "Data Processing"
            ],
            answer: 1
        },
        {
            question: "Which data structure uses LIFO (Last In First Out) principle?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            answer: 1
        },
        {
            question: "What does JSON stand for?",
            options: [
                "JavaScript Object Notation",
                "JavaScript Oriented Notation",
                "Java Object Notation",
                "Java Oriented Notation"
            ],
            answer: 0
        },
        {
            question: "Which of these is not a Python framework?",
            options: ["Django", "Flask", "Spring", "FastAPI"],
            answer: 2
        },
        {
            question: "What does AI stand for?",
            options: [
                "Automated Intelligence",
                "Artificial Intelligence",
                "Advanced Intelligence",
                "Automated Information"
            ],
            answer: 1
        },
        {
            question: "Which sorting algorithm has the worst time complexity?",
            options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
            answer: 2
        },
        {
            question: "What is the main purpose of a firewall?",
            options: [
                "To increase internet speed",
                "To prevent unauthorized access",
                "To store backups",
                "To manage databases"
            ],
            answer: 1
        },
        {
            question: "Which of these is not a relational database?",
            options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
            answer: 2
        },
        {
            question: "What does VPN stand for?",
            options: [
                "Virtual Private Network",
                "Virtual Public Network",
                "Verified Private Network",
                "Verified Public Network"
            ],
            answer: 0
        },
        {
            question: "Which protocol is used for sending emails?",
            options: ["HTTP", "FTP", "SMTP", "SSH"],
            answer: 2
        },
        {
            question: "What is the main purpose of the 'git clone' command?",
            options: [
                "To create a new branch",
                "To download a repository",
                "To commit changes",
                "To merge branches"
            ],
            answer: 1
        },
        {
            question: "Which of these is not a JavaScript runtime environment?",
            options: ["Node.js", "Deno", "Bun", "JVM"],
            answer: 3
        },
        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: 0
        },
        {
            question: "Which company developed the TypeScript language?",
            options: ["Google", "Facebook", "Microsoft", "Apple"],
            answer: 2
        }
    ],
    'logical-reasoning': [
        {
            question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?",
            options: ["True", "False", "Uncertain", "None of the above"],
            answer: 0
        },
        {
            question: "Which number comes next in the series: 2, 6, 12, 20, 30, ...?",
            options: ["40", "42", "44", "46"],
            answer: 1
        },
        {
            question: "If some doctors are scientists and all scientists are researchers, then which statement must be true?",
            options: [
                "All doctors are researchers",
                "Some doctors are researchers",
                "No doctors are researchers",
                "All researchers are doctors"
            ],
            answer: 1
        },
        {
            question: "Which shape is the odd one out?",
            options: ["Square", "Circle", "Triangle", "Cube"],
            answer: 3
        },
        {
            question: "If all Zips are Zaps and some Zaps are Zops, then which statement must be true?",
            options: [
                "All Zips are Zops",
                "Some Zips are Zops",
                "No Zips are Zops",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Which number is the odd one out: 3, 5, 7, 9, 11?",
            options: ["3", "5", "7", "9"],
            answer: 3
        },
        {
            question: "If A is taller than B, and B is taller than C, who is the shortest?",
            options: ["A", "B", "C", "Cannot be determined"],
            answer: 2
        },
        {
            question: "Which word does not belong with the others?",
            options: ["Apple", "Banana", "Orange", "Carrot"],
            answer: 3
        },
        {
            question: "If all birds have wings and a penguin is a bird, then a penguin has wings?",
            options: ["True", "False", "Uncertain", "None of the above"],
            answer: 0
        },
        {
            question: "Complete the analogy: Book is to reading as fork is to...",
            options: ["Eating", "Writing", "Drawing", "Sleeping"],
            answer: 0
        },
        {
            question: "Which number comes next: 1, 1, 2, 3, 5, 8, ...?",
            options: ["11", "12", "13", "14"],
            answer: 2
        },
        {
            question: "If all roses are flowers and some flowers fade quickly, then which statement must be true?",
            options: [
                "All roses fade quickly",
                "Some roses fade quickly",
                "No roses fade quickly",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Which is the next in the sequence: ○, △, □, ○, △, □, ...?",
            options: ["○", "△", "□", "Cannot be determined"],
            answer: 0
        },
        {
            question: "If no cats are dogs and some dogs are pets, then which statement must be true?",
            options: [
                "No cats are pets",
                "Some cats are pets",
                "All pets are dogs",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Which word is the odd one out?",
            options: ["Happy", "Sad", "Angry", "Running"],
            answer: 3
        },
        {
            question: "If some X are Y and all Y are Z, then which statement must be true?",
            options: [
                "All X are Z",
                "Some X are Z",
                "No X are Z",
                "Cannot be determined"
            ],
            answer: 1
        },
        {
            question: "Complete the analogy: Up is to down as left is to...",
            options: ["Right", "Back", "Forward", "Side"],
            answer: 0
        },
        {
            question: "Which number is missing: 3, 7, 15, 31, ?",
            options: ["45", "63", "72", "81"],
            answer: 1
        },
        {
            question: "If all A are B and no B are C, then which statement must be true?",
            options: [
                "All A are C",
                "Some A are C",
                "No A are C",
                "Cannot be determined"
            ],
            answer: 2
        },
        {
            question: "Which shape completes the pattern?",
            options: ["Square", "Circle", "Triangle", "Hexagon"],
            answer: 1
        },
        // Additional 20 Logical Reasoning questions
        {
            question: "If all trees are plants and some plants are green, then which statement must be true?",
            options: [
                "All trees are green",
                "Some trees are green",
                "No trees are green",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Which number comes next: 1, 4, 9, 16, 25, ...?",
            options: ["36", "38", "40", "42"],
            answer: 0
        },
        {
            question: "Complete the analogy: Pen is to write as knife is to...",
            options: ["Cut", "Draw", "Eat", "Throw"],
            answer: 0
        },
        {
            question: "If some X are Y and no Y are Z, then which statement must be true?",
            options: [
                "All X are Z",
                "Some X are Z",
                "No X are Z",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Which is the next in the sequence: ♠, ♥, ♦, ♣, ♠, ♥, ...?",
            options: ["♦", "♣", "♠", "♥"],
            answer: 0
        },
        {
            question: "If all P are Q and all Q are R, then which statement must be true?",
            options: [
                "All P are R",
                "Some P are R",
                "No P are R",
                "Cannot be determined"
            ],
            answer: 0
        },
        {
            question: "Which word does not belong: Apple, Banana, Carrot, Dog?",
            options: ["Apple", "Banana", "Carrot", "Dog"],
            answer: 3
        },
        {
            question: "If no A are B and some B are C, then which statement must be true?",
            options: [
                "All A are C",
                "Some A are C",
                "No A are C",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Which number is the odd one out: 2, 4, 8, 16, 32, 64, 100?",
            options: ["2", "8", "64", "100"],
            answer: 3
        },
        {
            question: "Complete the analogy: Winter is to summer as cold is to...",
            options: ["Hot", "Wet", "Dry", "Warm"],
            answer: 0
        },
        {
            question: "If some X are Y and some Y are Z, then which statement must be true?",
            options: [
                "All X are Z",
                "Some X are Z",
                "No X are Z",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "If all squares are rectangles and all rectangles are quadrilaterals, then all squares are quadrilaterals?",
            options: ["True", "False", "Sometimes true", "Cannot be determined"],
            answer: 0
        },
        {
            question: "Complete the sequence: 2, 5, 10, 17, 26, ?",
            options: ["35", "37", "39", "41"],
            answer: 1
        },
        {
            question: "Which word doesn't belong: Apple, Banana, Carrot, Dog?",
            options: ["Apple", "Banana", "Carrot", "Dog"],
            answer: 3
        },
        {
            question: "If some X are Y and no Y are Z, then:",
            options: [
                "Some X are Z",
                "No X are Z",
                "All X are Z",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "Complete the analogy: Book is to reading as fork is to...",
            options: ["Eating", "Writing", "Drawing", "Sleeping"],
            answer: 0
        },
        {
            question: "Which is the odd one out?",
            options: ["Square", "Circle", "Triangle", "Cube"],
            answer: 3
        },
        {
            question: "If all A are B and some B are C, then:",
            options: [
                "All A are C",
                "Some A are C",
                "No A are C",
                "Cannot be determined"
            ],
            answer: 3
        },
        {
            question: "What comes next: ♠, ♥, ♦, ♣, ?",
            options: ["♠", "♥", "♦", "♣"],
            answer: 0
        },
        {
            question: "If no cats are dogs and some dogs are pets, then:",
            options: [
                "No cats are pets",
                "Some cats are pets",
                "All pets are cats",
                "Cannot be determined"
            ],
            answer: 3
        }]
    };