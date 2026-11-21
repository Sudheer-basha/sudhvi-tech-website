import type { Course, CourseFilterCategory } from '@/types/course.types';

export const courses: Course[] = [
  // ─── 1. AI & Machine Learning ──────────────────────────────────────────
  {
    id: 'ai-ml',
    slug: 'ai-machine-learning',
    title: 'Artificial Intelligence & Machine Learning',
    shortTitle: 'AI & ML',
    category: 'AI & Machine Learning',
    level: 'Intermediate to Advanced',
    description:
      'Master supervised and unsupervised learning algorithms, mathematical intuitions, deep neural networks, and model deployment pipelines.',
    fullDescription:
      'This program bridges the gap between academic linear algebra/statistics and commercial machine learning engineering. Learners build end-to-end data pipelines, evaluate model trade-offs with rigorous validation metrics, and package models into production-ready inference APIs.',
    duration: '12 Weeks (96 Hours)',
    mode: 'Hybrid (Online Sessions + Weekend Lab Mentorship)',
    schedule: 'Weekday Evenings or Weekend Batches',
    badge: 'Flagship Program',
    icon: '🤖',
    color: 'bg-blue-50 border-blue-200',
    whoShouldEnroll: [
      'B.Tech / B.E (CSE, IT, ECE, AI/DS) 3rd and 4th-year students',
      'MCA and M.Sc Computer Science students developing major projects',
      'Fresh engineering graduates aiming for data and ML engineering roles',
      'Programmers looking to transition from rule-based code to statistical learning models',
    ],
    prerequisites: [
      'Foundational programming knowledge in Python (functions, loops, data structures)',
      'High school level linear algebra, basic calculus, and probability concepts',
      'Familiarity with command line and basic Git commands (introductory session provided)',
    ],
    learningObjectives: [
      'Understand statistical modeling principles and supervised vs unsupervised paradigms',
      'Perform exploratory data analysis (EDA) and data wrangling on real dirty datasets',
      'Engineer predictive models with Scikit-learn, XGBoost, and evaluate precision/recall/ROC curves',
      'Build feed-forward and convolutional neural networks with PyTorch and TensorFlow',
      'Containerize and deploy trained models as FastAPI microservices',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Mathematical Foundations & Scientific Python',
        duration: 'Weeks 1–2',
        summary: 'Vectors, matrix multiplications, derivatives, and vectorization using NumPy and Pandas.',
        topics: [
          'Linear Algebra & Calculus fundamentals for Machine Learning',
          'Vectorized computing with NumPy & matrix manipulation',
          'Advanced data manipulation and aggregation with Pandas',
          'Data visualization using Matplotlib & Seaborn',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Supervised Learning & Statistical Modeling',
        duration: 'Weeks 3–5',
        summary: 'Formulating regression and classification tasks with Scikit-learn.',
        topics: [
          'Linear Regression, Cost functions, and Gradient Descent optimization',
          'Logistic Regression and decision boundaries',
          'Decision Trees, Random Forests, and Gradient Boosted Trees (XGBoost)',
          'Feature selection, normalization, and handling missing categorical values',
          'Cross-validation, bias-variance tradeoff, precision, recall, and F1-score',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Unsupervised Learning & Dimensionality Reduction',
        duration: 'Weeks 6–7',
        summary: 'Pattern discovery, clustering, and feature compression.',
        topics: [
          'K-Means clustering and hierarchical clustering algorithms',
          'Principal Component Analysis (PCA) for dimensionality reduction',
          'Anomaly detection and outlier analysis in high dimensions',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Deep Learning & Neural Network Architectures',
        duration: 'Weeks 8–10',
        summary: 'Perceptrons, backpropagation, and Convolutional Neural Networks.',
        topics: [
          'Artificial Neural Networks (ANN), activation functions & backpropagation',
          'Loss functions and optimizers (Adam, RMSProp, SGD)',
          'Convolutional Neural Networks (CNNs) for image classification and feature maps',
          'Transfer Learning with pre-trained models (ResNet, MobileNet)',
        ],
      },
      {
        moduleNumber: 5,
        title: 'Model Packaging & Production Deployment',
        duration: 'Weeks 11–12',
        summary: 'Serializing models, building inference APIs, and project defense prep.',
        topics: [
          'Model serialization with ONNX and Joblib',
          'Building RESTful prediction endpoints using FastAPI',
          'Docker containerization for machine learning microservices',
          'Final capstone review, viva question bank, and portfolio code walk-through',
        ],
      },
    ],
    practicalExercises: [
      'Cleaning and analyzing real estate transaction data with outliers',
      'Predicting customer churn using regularization and decision tree ensembles',
      'Implementing linear regression from mathematical scratch with NumPy',
      'Building a defect detection CNN model on industrial surface images',
      'Benchmarking training vs test loss curves to diagnose overfitting',
    ],
    projects: [
      'End-to-End Credit Risk Prediction Pipeline with Explainable AI',
      'Computer Vision-based Automated Defect Classification System',
      'Deployable REST API Microservice for Real-Time Sentiment & Topic Scoring',
    ],
    toolsAndTech: [
      'Python', 'NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'XGBoost', 'FastAPI', 'Docker', 'Git',
    ],
    trainingMethodology: [
      'Mathematical intuition explained before code implementation',
      'Weekly coding lab assignments evaluated via GitHub pull requests',
      'Live code reviews focusing on modularity, documentation, and performance',
      'Dedicated viva defense simulation for academic submissions',
    ],
    learningOutcomes: [
      'Ability to independently design, train, and validate machine learning models',
      'Capability to explain algorithm selection tradeoffs in technical interviews',
      'Working knowledge of deploying models as REST APIs inside Docker containers',
      'Comprehensive project report, synopsis, and viva presentation deck',
    ],
    careerOpportunities: [
      'Junior Machine Learning Engineer',
      'Data Scientist Associate',
      'AI/ML Systems Developer',
      'Applied Analytics Engineer',
    ],
    faqs: [
      {
        question: 'Do I need a strong advanced mathematics background to enroll?',
        answer:
          'A working knowledge of high-school mathematics (vectors, basic derivatives, and probability) is sufficient. We teach the required applied linear algebra and statistical intuitions step-by-step alongside the programming exercises.',
      },
      {
        question: 'Can this course be used for my final year B.Tech/MCA major project?',
        answer:
          'Yes. The capstone project developed in the latter half of the program meets university academic standards and includes architectural documentation, an IEEE-standard synopsis, and mock viva coaching.',
      },
      {
        question: 'What hardware or GPU setup do I need?',
        answer:
          'A standard laptop with at least 8GB of RAM is adequate. For intensive deep learning training, we guide students on utilizing free cloud acceleration environments such as Google Colab and Kaggle Kernels.',
      },
    ],
  },

  // ─── 2. Generative AI ──────────────────────────────────────────────────
  {
    id: 'gen-ai',
    slug: 'generative-ai',
    title: 'Generative AI Engineering',
    shortTitle: 'Gen AI',
    category: 'AI & Machine Learning',
    level: 'Intermediate to Advanced',
    description:
      'Harness Large Language Models (LLMs), build Retrieval-Augmented Generation (RAG) architectures, and integrate multi-modal AI APIs.',
    fullDescription:
      'Go beyond basic consumer chatbot usage. This program trains software students to build robust enterprise applications powered by Foundation Models, semantic vector search, chunking strategies, embeddings, and LangChain orchestration pipelines.',
    duration: '10 Weeks (80 Hours)',
    mode: 'Hybrid (Online Lectures + Hands-on Lab Sessions)',
    schedule: 'Flexible Batches (Evening / Weekend)',
    badge: 'Trending Tech',
    icon: '✨',
    color: 'bg-purple-50 border-purple-200',
    whoShouldEnroll: [
      'B.Tech / Degree / MCA students seeking specialization in generative technologies',
      'Developers wanting to integrate enterprise search and LLM logic into web apps',
      'Final-year students building cutting-edge AI capstone projects',
    ],
    prerequisites: [
      'Intermediate Python programming (working with dictionaries, classes, and async functions)',
      'Understanding of basic REST APIs and JSON data exchange',
    ],
    learningObjectives: [
      'Master Foundation Model architectures, tokenization, context windows, and sampling parameters',
      'Build production Retrieval-Augmented Generation (RAG) systems over private knowledge bases',
      'Implement semantic search using vector databases (ChromaDB, Pinecone, FAISS)',
      'Orchestrate multi-step LLM chains and evaluators using LangChain and LlamaIndex',
      'Manage hallucination mitigation, prompt caching, and cost governance in AI applications',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Transformer Architecture & Foundation Models',
        duration: 'Weeks 1–2',
        summary: 'Mechanics of self-attention, token embeddings, and foundation model APIs.',
        topics: [
          'Evolution from RNNs to Transformers and the Self-Attention mechanism',
          'Tokenization strategies (BPE, WordPiece) and context window limitations',
          'Temperature, Top-p, Top-k, frequency penalty and sampling mechanics',
          'Working with OpenAI, Anthropic, and open-source models via Hugging Face',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Embeddings & Vector Databases',
        duration: 'Weeks 3–4',
        summary: 'Dense representations, similarity metrics, and vector indexing.',
        topics: [
          'Text embeddings and semantic similarity metrics (Cosine, Dot Product, Euclidean)',
          'Vector database indexing and nearest-neighbor search (HNSW)',
          'Hands-on implementation with ChromaDB and FAISS',
          'Metadata filtering and hybrid search techniques',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Retrieval-Augmented Generation (RAG) Systems',
        duration: 'Weeks 5–7',
        summary: 'Document loaders, chunking strategies, retrievers, and rerankers.',
        topics: [
          'Document parsing (PDFs, Markdown, Web pages, spreadsheets)',
          'Text chunking strategies: recursive character, semantic, and token-based',
          'Dense retrieval, keyword BM25 retrieval, and ensemble cross-encoders',
          'Implementing re-ranking with Cohere / cross-encoder models for relevance boost',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Orchestration with LangChain & LlamaIndex',
        duration: 'Weeks 8–9',
        summary: 'Chains, output parsers, memory, and automated evaluation.',
        topics: [
          'LangChain Expression Language (LCEL) and composable chains',
          'Structured output parsers (Pydantic / JSON schemas)',
          'Managing conversation state and memory buffers',
          'Evaluating RAG quality using Ragas (Faithfulness, Answer Relevance, Context Precision)',
        ],
      },
      {
        moduleNumber: 5,
        title: 'Deployment & Enterprise Production Considerations',
        duration: 'Week 10',
        summary: 'Serving LLM apps, streaming responses, and guarding against prompt injection.',
        topics: [
          'Streaming server-sent events (SSE) in FastAPI',
          'Guardrails and prompt injection defenses (NeMo Guardrails)',
          'Cost and latency optimization through semantic caching',
          'Capstone project delivery and viva review preparation',
        ],
      },
    ],
    practicalExercises: [
      'Comparing token usage and response variation across diverse sampling parameters',
      'Implementing a custom text chunker and benchmarking retrieval precision',
      'Building a semantic code search engine across a GitHub repository',
      'Benchmarking RAG pipeline hallucination rates using automated evaluation tools',
    ],
    projects: [
      'Enterprise Document Q&A Portal with Multi-Modal Parsing and Reranking',
      'AI Research Assistant with Citations and Hallucination Verification',
      'Customer Support Knowledge-Base Bot with Guardrails and Live Streaming UI',
    ],
    toolsAndTech: [
      'Python', 'LangChain', 'LlamaIndex', 'ChromaDB', 'FAISS', 'OpenAI API', 'Hugging Face', 'FastAPI', 'Ragas',
    ],
    trainingMethodology: [
      'Concept demonstration followed immediately by code sandbox exercises',
      'Real enterprise documents used as datasets rather than dummy lorem ipsum text',
      'Emphasis on evaluation metrics (Faithfulness and Relevance) rather than superficial vibes',
      'Full architectural diagrams provided for academic project inclusion',
    ],
    learningOutcomes: [
      'Architect and deploy functional RAG systems over real corporate documentation',
      'Implement multi-stage retrieval and semantic reranking pipelines',
      'Evaluate model outputs quantitatively and defend design decisions during viva reviews',
      'Complete deployable portfolio projects demonstrating modern Generative AI engineering',
    ],
    careerOpportunities: [
      'Generative AI Engineer',
      'AI Applications Developer',
      'LLM Solutions Specialist',
      'Cognitive Search Engineer',
    ],
    faqs: [
      {
        question: 'Do I have to pay for costly OpenAI API keys during the course?',
        answer:
          'No. We teach you how to use free open-source models through Hugging Face, Ollama (local models), and provide structured sandbox environments so you do not incur personal API expenses.',
      },
      {
        question: 'How is this different from basic prompt writing?',
        answer:
          'This is an engineering program focused on software architecture: vector search, embedding math, semantic chunking, multi-stage retrieval, API streaming, and programmatic evaluation—not casual consumer chat.',
      },
    ],
  },

  // ─── 3. Agentic AI ─────────────────────────────────────────────────────
  {
    id: 'agentic-ai',
    slug: 'agentic-ai',
    title: 'Agentic AI & Autonomous Systems',
    shortTitle: 'Agentic AI',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    description:
      'Build autonomous AI agents that reason, plan, invoke external tools, manage stateful memory, and collaborate in multi-agent workflows.',
    fullDescription:
      'Autonomous agents represent the frontier of modern AI software. This advanced program teaches students how to design cognitive loops, structured function calling, cycle-aware state graphs (LangGraph), and resilient multi-agent collaboration systems.',
    duration: '8 Weeks (64 Hours)',
    mode: 'Online Live Mentorship + Lab Review',
    schedule: 'Weekend Immersion or Evening Tracks',
    badge: 'Next-Gen Focus',
    icon: '🤝',
    color: 'bg-indigo-50 border-indigo-200',
    whoShouldEnroll: [
      'Students with prior Python and basic LLM / API experience',
      'Developers aiming to work on workflow automation and autonomous software systems',
      'Final-year students seeking an exceptional, future-proof academic project topic',
    ],
    prerequisites: [
      'Proficiency in Python (Object-Oriented Programming, AsyncIO, Type Annotations)',
      'Prior exposure to LLM APIs or prompt engineering fundamentals',
    ],
    learningObjectives: [
      'Understand the ReAct (Reason + Act), Plan-and-Solve, and Reflection cognitive architectures',
      'Implement function calling and tool execution safely using strict JSON schemas',
      'Build cyclical, stateful agent workflows using LangGraph and state machines',
      'Coordinate hierarchical and collaborative multi-agent swarms (CrewAI, AutoGen)',
      'Incorporate human-in-the-loop validation checkpoints and persistent memory states',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Cognitive Agent Architectures & Function Calling',
        duration: 'Weeks 1–2',
        summary: 'ReAct pattern, tool definition, schema binding, and execution loops.',
        topics: [
          'From passive completions to autonomous action loops',
          'The ReAct pattern: Thought, Action, Observation loops',
          'Tool definitions using Pydantic and JSON schema validation',
          'Handling malformed tool inputs, retries, and schema fallback logic',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Stateful Agent Graphs with LangGraph',
        duration: 'Weeks 3–5',
        summary: 'Nodes, conditional edges, cycle loops, and state reduction.',
        topics: [
          'Limitations of linear chains and why cyclical graphs are necessary',
          'Defining State TypedDicts and state update reducers',
          'Configuring nodes, conditional edges, and dynamic routers',
          'Human-in-the-loop (HITL) approval gates and execution interrupts',
          'Time-travel debugging and inspecting past execution states',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Multi-Agent Collaboration & Coordination',
        duration: 'Weeks 6–7',
        summary: 'Role playing, delegation, supervisor agents, and consensus.',
        topics: [
          'Supervisor-worker agent hierarchies vs peer-to-peer swarms',
          'Implementing multi-agent task delegation with CrewAI & LangGraph',
          'Shared workspace memory vs agent-specific context windows',
          'Loop termination safeguards and max-step execution budgets',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Evaluation, Production Deployment & Defense',
        duration: 'Week 8',
        summary: 'Testing agent reliability, trace monitoring, and viva project review.',
        topics: [
          'Tracing agent runs and tool latency with LangSmith / Phoenix',
          'Benchmarking agent success rates on multi-step tasks',
          'Packaging agents into background task workers with Celery / FastAPI',
          'Final capstone evaluation, architectural documentation, and viva prep',
        ],
      },
    ],
    practicalExercises: [
      'Building a SQL Agent that inspects schemas, generates queries, and fixes syntax errors',
      'Implementing a Web Browsing & Summarization Agent with tool rate-limiting',
      'Creating a cyclical LangGraph code-generation agent that tests and self-corrects its code',
      'Configuring a Human-in-the-Loop review checkpoint for high-stakes tool actions',
    ],
    projects: [
      'Autonomous Financial Market Researcher with Web Search and Report Generator',
      'Automated Software Bug Triaging & Unit Test Synthesis Multi-Agent Swarm',
      'Collaborative Multi-Agent Content Editorial Pipeline with Reviewer and Critic',
    ],
    toolsAndTech: [
      'Python', 'LangGraph', 'CrewAI', 'OpenAI Function Calling', 'LangSmith', 'Pydantic', 'FastAPI', 'Docker',
    ],
    trainingMethodology: [
      'Focus on state machine diagrams and architecture before code synthesis',
      'Debugging failure modes: loop traps, tool hallucination, and state poisoning',
      'Step-by-step code walkthroughs with interactive trace visualizations',
      'Individual project review with academic examiners rubrics',
    ],
    learningOutcomes: [
      'Architect robust, self-correcting single and multi-agent systems',
      'Integrate external databases, APIs, and search engines as agent tools',
      'Design human-in-the-loop approval workflows for critical business tasks',
      'Present an industry-grade, cutting-edge final-year academic project',
    ],
    careerOpportunities: [
      'Agentic AI Systems Engineer',
      'Autonomous Workflow Developer',
      'AI Automation Architect',
      'Advanced AI Research Associate',
    ],
    faqs: [
      {
        question: 'Is Agentic AI suitable for a college final-year project?',
        answer:
          'It is one of the highest-rated and most impressive categories for final year engineering capstones today. It clearly distinguishes students from standard CRUD web app or basic tutorial submissions.',
      },
      {
        question: 'What is the key difference between Generative AI and Agentic AI?',
        answer:
          'Generative AI typically takes a prompt and produces text or imagery in one pass. Agentic AI involves decision loops: the system plans steps, calls tools, inspects results, corrects errors, and iterates autonomously until a goal is achieved.',
      },
    ],
  },

  // ─── 4. Prompt Engineering ─────────────────────────────────────────────
  {
    id: 'prompt-eng',
    slug: 'prompt-engineering',
    title: 'Prompt Engineering & System Prompt Design',
    shortTitle: 'Prompt Eng.',
    category: 'AI & Machine Learning',
    level: 'Beginner to Intermediate',
    description:
      'Learn systematic prompt design patterns, structured output formatting, chain-of-thought reasoning, and evaluation benchmarks.',
    fullDescription:
      'Prompt engineering is not guesswork—it is a rigorous discipline of specification design, cognitive scaffolding, and output constraint verification. This program trains students to build reliable, reproducible prompts for business workflows.',
    duration: '4 Weeks (32 Hours)',
    mode: 'Online Interactive Workshop Track',
    schedule: 'Flexible Weekend / Evening Batches',
    icon: '📝',
    color: 'bg-cyan-50 border-cyan-200',
    whoShouldEnroll: [
      'Students across B.Tech, Degree, and MCA disciplines',
      'Aspiring technical writers, product associates, and software developers',
      'Anyone seeking to dramatically improve their daily engineering productivity with AI',
    ],
    prerequisites: [
      'Basic familiarity with computers and modern web browsers',
      'Logical problem-solving and clear written communication ability',
    ],
    learningObjectives: [
      'Understand how LLMs interpret tokens, instructions, and role demarcations',
      'Apply established prompt patterns (Chain-of-Thought, Few-Shot, ReAct, Role prompting)',
      'Enforce deterministic, parseable outputs using JSON schemas and regex rules',
      'Identify and remediate hallucination triggers and ambiguity vulnerabilities',
      'Build automated prompt regression test suites using benchmark evaluation matrices',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'LLM Mechanics & Foundational Prompt Anatomy',
        duration: 'Week 1',
        summary: 'System prompts, user turns, assistant prefixes, and contextual conditioning.',
        topics: [
          'How token probabilities dictate completion behaviors',
          'Anatomy of an enterprise prompt: Context, Objective, Constraints, Output Format',
          'Role-based prompting and setting precise behavioral personas',
          'Managing few-shot exemplars and avoiding exemplar bias',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Cognitive Reasoning Scaffolding',
        duration: 'Week 2',
        summary: 'Chain-of-Thought, Tree-of-Thoughts, and Step-Back reasoning.',
        topics: [
          'Chain-of-Thought (CoT) and Zero-Shot CoT mechanics',
          'Step-Back abstraction and Least-to-Most decomposition',
          'Directional stimulus prompting and knowledge-generation techniques',
          'Prompt chaining: breaking monolith prompts into pipelines',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Structured Outputs & Safety Defenses',
        duration: 'Week 3',
        summary: 'Extracting clean JSON, markdown tables, and defending against injection.',
        topics: [
          'Constraining model outputs to strict Pydantic and JSON schemas',
          'Defensive prompt engineering against direct and indirect prompt injection',
          'Techniques for factual grounding and citation enforcement',
          'Negative constraints vs positive reinforcement in model guidance',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Benchmarking, Versioning & Production Integration',
        duration: 'Week 4',
        summary: 'Building prompt test suites, version control, and API integration.',
        topics: [
          'Automated evaluation matrices (accuracy, consistency, format adherence)',
          'Prompt versioning and regression testing using Git workflows',
          'Integrating tested prompts into Python software codebases',
          'Final project presentation and practical portfolio compilation',
        ],
      },
    ],
    practicalExercises: [
      'Refactoring a brittle, 500-word prompt into a modular 3-step pipeline',
      'Extracting clean tabular data from unstructured medical records with zero JSON errors',
      'Creating an anti-injection test battery and measuring prompt bypass resistance',
      'Measuring output consistency across 100 benchmark test queries',
    ],
    projects: [
      'Enterprise Resume Parser and Structured Candidate Profile Generator',
      'Automated Technical Code Reviewer and Architecture Feedback Engine',
    ],
    toolsAndTech: [
      'OpenAI Platform', 'Anthropic Claude', 'Google AI Studio', 'Python', 'JSON Schema', 'Pydantic',
    ],
    trainingMethodology: [
      'Hands-on comparative analysis showing why naive prompts fail in production',
      'Live sandbox testing with real business corner cases',
      'Quantitative scoring of prompt reliability across multiple sample runs',
    ],
    learningOutcomes: [
      'Craft robust system prompts that consistently generate valid structured outputs',
      'Deconstruct complex domain problems into dependable prompt chains',
      'Protect applications from common prompt injection and data exfiltration vectors',
      'Provide immediate value to engineering and product teams building with LLMs',
    ],
    careerOpportunities: [
      'Prompt Engineer',
      'AI Operations Analyst',
      'AI Product Specialist',
      'Technical Content Architect',
    ],
    faqs: [
      {
        question: 'Is coding experience required for this course?',
        answer:
          'No advanced programming experience is required. We explain how prompts interact with software applications and provide copy-paste Python templates for any optional coding exercises.',
      },
      {
        question: 'Will this skill become obsolete as models get smarter?',
        answer:
          'No. As models become more capable, the need for precise specification, schema enforcement, cognitive scaffolding, and regression testing becomes even more critical in enterprise software.',
      },
    ],
  },

  // ─── 5. Python Programming ─────────────────────────────────────────────
  {
    id: 'python',
    slug: 'python-programming',
    title: 'Python Programming for Industry',
    shortTitle: 'Python',
    category: 'Programming & Development',
    level: 'Beginner to Intermediate',
    description:
      'From syntax foundations to object-oriented programming, data structures, REST API development, web scraping, and database operations.',
    fullDescription:
      'Designed to transform students into confident programmers. We focus on clean coding conventions (PEP 8), algorithmic problem-solving, modular software design, file handling, SQLite/PostgreSQL database operations, and creating real software utilities.',
    duration: '10 Weeks (80 Hours)',
    mode: 'Hybrid (Interactive Classroom / Virtual Labs)',
    schedule: 'Regular Weekday or Weekend Tracks',
    badge: 'Core Foundation',
    icon: '🐍',
    color: 'bg-green-50 border-green-200',
    whoShouldEnroll: [
      '1st, 2nd, and 3rd-year engineering or degree students building a programming base',
      'Non-CS branch students (Mechanical, Civil, ECE, EEE) transitioning to IT skills',
      'Beginners wanting a strong foundation before venturing into AI, Data, or Web dev',
    ],
    prerequisites: [
      'No prior programming knowledge required—we start from fundamental computing logic',
      'A personal laptop for hands-on daily lab exercises',
    ],
    learningObjectives: [
      'Master core Python syntax, data types, control structures, and memory references',
      'Design modular applications using Object-Oriented Programming (Classes, Inheritance, Polymorphism)',
      'Handle exceptions, file I/O operations, and serializations (CSV, JSON, XML)',
      'Interact with relational databases using SQL and database connector drivers',
      'Build command-line utilities, web scrapers, and RESTful web microservices',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Core Fundamentals & Logical Problem Solving',
        duration: 'Weeks 1–2',
        summary: 'Variables, memory, conditional branching, loops, and custom functions.',
        topics: [
          'Python architecture, bytecode compilation, and virtual environments',
          'Variables, primitive types, type casting, and standard input/output',
          'Control flow: conditional branching, for/while loops, break/continue',
          'Defining reusable functions, parameter scope (*args, **kwargs), and lambda expressions',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Built-in Data Structures & Algorithm Design',
        duration: 'Weeks 3–4',
        summary: 'Lists, Tuples, Sets, Dictionaries, and list comprehensions.',
        topics: [
          'Lists and tuples: indexing, slicing, and built-in operations',
          'Dictionaries and Sets: hash maps, uniqueness, and lookup performance',
          'List, dictionary, and generator comprehensions',
          'Algorithmic problem solving: searching, sorting, and recursion basics',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Object-Oriented Programming (OOP) & Modularity',
        duration: 'Weeks 5–6',
        summary: 'Classes, encapsulation, inheritance, polymorphism, and magic methods.',
        topics: [
          'Classes, objects, constructors (__init__), and instance variables',
          'Encapsulation, public/private conventions, and property decorators',
          'Inheritance, method overriding, and super() mechanics',
          'Polymorphism, abstract base classes, and magic/dunder methods',
          'Organizing code into reusable modules, packages, and __init__.py',
        ],
      },
      {
        moduleNumber: 4,
        title: 'File Handling, Exception Handling & APIs',
        duration: 'Weeks 7–8',
        summary: 'Robust code execution, handling files, and HTTP communication.',
        topics: [
          'Try, except, else, finally blocks and custom exception classes',
          'Working with text files, CSV datasets, and JSON payloads',
          'Interacting with external web APIs using the requests library',
          'Web scraping fundamentals with BeautifulSoup4 and ethical scraping practices',
        ],
      },
      {
        moduleNumber: 5,
        title: 'Database Persistence & Capstone Application',
        duration: 'Weeks 9–10',
        summary: 'SQL databases, ORMs, and building a complete final application.',
        topics: [
          'Relational database concepts, SQL queries, and SQLite integration',
          'Connecting to databases, executing queries, and handling transactions safely',
          'Building a modular command-line or lightweight web API project',
          'Git version control, code formatting (Black, Flake8), and viva presentation',
        ],
      },
    ],
    practicalExercises: [
      'Building an interactive student grading and grade-point average calculation engine',
      'Developing an automated file organizer script that sorts directories by file extensions',
      'Creating a web scraping tool that extracts job listings from public portals into CSV',
      'Implementing a banking ledger system using OOP principles and SQLite persistence',
    ],
    projects: [
      'Student Academic & Fee Management System with SQLite Database',
      'Automated Web Data Scraper & Visual Report Generator',
      'REST API Backend for Task & Inventory Tracking',
    ],
    toolsAndTech: [
      'Python 3', 'VS Code', 'Git & GitHub', 'SQLite', 'Requests', 'BeautifulSoup4', 'Virtualenv',
    ],
    trainingMethodology: [
      'Live syntax demonstrations with immediate code-along practice',
      'Daily logical algorithmic challenges to build computational intuition',
      'Code reviews emphasizing readable, PEP-8 compliant code structure',
      'Regular quiz checkpoints covering technical interview screening questions',
    ],
    learningOutcomes: [
      'Write clean, modular, and maintainable Python code from memory',
      'Confidently solve common programming round challenges in campus placements',
      'Build end-to-end applications that interact with files, APIs, and databases',
      'Establish a strong foundation for future specializations in AI, Data, or Web dev',
    ],
    careerOpportunities: [
      'Python Developer Trainee',
      'Software Engineer - Python',
      'Automation Scripting Associate',
      'Junior Backend Developer',
    ],
    faqs: [
      {
        question: 'I have never coded before. Is this program suitable for me?',
        answer:
          'Yes. We start from the absolute ground up, covering basic logical thinking and variables before advancing into data structures, OOP, and database operations.',
      },
      {
        question: 'Will this help me clear campus recruitment coding tests?',
        answer:
          'Yes. We integrate algorithmic problem-solving, loop tracing, array manipulations, and time-complexity discussions into weekly assignments to mirror placement drive assessments.',
      },
    ],
  },

  // ─── 6. Java Full Stack Development ────────────────────────────────────
  {
    id: 'java-fs',
    slug: 'java-full-stack',
    title: 'Java Full Stack Development',
    shortTitle: 'Java Full Stack',
    category: 'Programming & Development',
    level: 'Intermediate to Advanced',
    description:
      'Build enterprise-scale full-stack applications with Core Java, Spring Boot, Hibernate/JPA, PostgreSQL, and modern React frontend integration.',
    fullDescription:
      'Java remains the dominant enterprise language for banking, telecom, and multinational IT services. This intensive program covers Core Java collections, multithreading, Spring Boot microservices, RESTful architecture, relational database design, and frontend connection.',
    duration: '16 Weeks (128 Hours)',
    mode: 'Hybrid (Classroom Lectures + Practical Coding Labs)',
    schedule: 'Weekend Immersion or Evening Tracks',
    badge: 'Enterprise Demand',
    icon: '☕',
    color: 'bg-orange-50 border-orange-200',
    whoShouldEnroll: [
      'B.Tech / Degree / MCA students aiming for MNC and product engineering placements',
      'Learners who want to master end-to-end full-stack web application development',
      'Students looking to build an enterprise-level major project for academic submission',
    ],
    prerequisites: [
      'Basic familiarity with programming logic (C, C++, or introductory Java)',
      'Basic understanding of HTML and web concepts',
    ],
    learningObjectives: [
      'Master Core Java: OOP, Exception handling, Collections Framework, and Streams API',
      'Design normalized relational database schemas with MySQL / PostgreSQL',
      'Develop robust REST APIs using Spring Boot, Spring Data JPA, and Hibernate ORM',
      'Implement authentication and authorization with Spring Security and JWT tokens',
      'Build responsive, interactive frontends using modern React and connect with backend APIs',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Core Java & Advanced OOP Concepts',
        duration: 'Weeks 1–4',
        summary: 'JVM architecture, memory management, OOP, and Java Collections.',
        topics: [
          'JVM, JRE, JDK architecture, garbage collection, and memory stack vs heap',
          'Object-Oriented Design in Java: Interfaces, Abstract Classes, and Packages',
          'Exception Handling: Checked vs unchecked exceptions, try-with-resources',
          'Java Collections Framework: List, Set, Map, and internal implementations',
          'Java 8+ features: Lambda expressions, Functional Interfaces, and Stream API',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Database Architecture & JDBC Persistence',
        duration: 'Weeks 5–6',
        summary: 'Relational database schema normalization, SQL queries, and JDBC.',
        topics: [
          'Relational database normalization (1NF, 2NF, 3NF) and foreign key constraints',
          'Complex SQL joins, indexing, and transaction management (ACID)',
          'Connecting Java with databases using JDBC and PreparedStatement protection',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Spring Boot & Spring Data JPA',
        duration: 'Weeks 7–10',
        summary: 'Dependency Injection, Spring MVC, REST APIs, and Hibernate.',
        topics: [
          'Spring Framework architecture, Dependency Injection, and Inversion of Control (IoC)',
          'Building RESTful APIs with Spring Boot (@RestController, @RequestMapping)',
          'Object-Relational Mapping (ORM) with Hibernate and Spring Data JPA',
          'Repository interfaces, derived queries, and JPQL queries',
          'Input validation using Hibernate Validator and global exception handlers (@ControllerAdvice)',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Security, JWT & Microservice Fundamentals',
        duration: 'Weeks 11–12',
        summary: 'Securing APIs, stateless tokens, and modern microservices.',
        topics: [
          'Introduction to Spring Security filter chains and security context',
          'Stateless user authentication using JSON Web Tokens (JWT)',
          'Role-Based Access Control (RBAC) across endpoints',
          'Introduction to microservice communication and architecture patterns',
        ],
      },
      {
        moduleNumber: 5,
        title: 'Frontend Integration with React & Full-Stack Deployment',
        duration: 'Weeks 13–16',
        summary: 'React UI components, Axios API consumption, and deployment.',
        topics: [
          'React component hierarchy, props, state, and React Router navigation',
          'Connecting React frontend to Spring Boot backend via Axios',
          'Handling CORS headers, authentication headers, and global loading states',
          'Building full CRUD interfaces with interactive tables and validation forms',
          'End-to-end full stack deployment, project documentation, and viva defense coaching',
        ],
      },
    ],
    practicalExercises: [
      'Implementing a custom data filter pipeline using Java 8 Streams API',
      'Writing secure CRUD operations with JDBC and SQL injection protections',
      'Developing an enterprise employee management REST service with pagination',
      'Configuring JWT token issuance, verification, and role-based route guards',
    ],
    projects: [
      'Enterprise E-Commerce Platform with Cart, Order Processing, and JWT Auth',
      'Hospital Patient Management & Appointment Scheduling Portal',
      'Full-Stack Banking Ledger & Account Transfer Microservice',
    ],
    toolsAndTech: [
      'Java 17/21', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'React', 'Maven', 'Postman', 'Git',
    ],
    trainingMethodology: [
      'Emphasis on enterprise architecture design patterns (DTO, DAO, Service layer)',
      'Regular code reviews assessing security, modularity, and resource cleanup',
      'Interactive debugging sessions tracking stack traces and HTTP status codes',
      'Academic project viva preparation with architecture diagrams and SRS templates',
    ],
    learningOutcomes: [
      'Design, build, and deploy enterprise full-stack web applications',
      'Develop secure RESTful APIs with Spring Boot and relational databases',
      'Connect modern React single-page applications with backend services',
      'Clear technical rounds for full-stack developer roles at IT services and product firms',
    ],
    careerOpportunities: [
      'Java Full Stack Developer',
      'Spring Boot Backend Engineer',
      'Associate Software Engineer (Enterprise)',
      'Web Application Developer',
    ],
    faqs: [
      {
        question: 'Why learn Java Full Stack when MERN stack is also popular?',
        answer:
          'Java Full Stack powers the majority of enterprise backends in finance, healthcare, insurance, and large MNCs. It offers immense hiring stability and teaches disciplined software engineering principles that carry across all languages.',
      },
      {
        question: 'Is frontend React covered adequately in this program?',
        answer:
          'Yes. We cover modern React fundamentals, state management, routing, form validation, and API integration so you can build complete, polished user interfaces for your backend.',
      },
    ],
  },

  // ─── 7. Software Testing ───────────────────────────────────────────────
  {
    id: 'testing',
    slug: 'software-testing',
    title: 'Software Testing & Automation Engineering',
    shortTitle: 'QA Testing',
    category: 'Quality & Testing',
    level: 'Beginner to Intermediate',
    description:
      'Master the complete quality assurance lifecycle: Manual Testing methodologies, Test Case Design, JIRA, Selenium WebDriver automation, and Postman API verification.',
    fullDescription:
      'Every professional software engineering team requires dedicated quality verification. This program trains students in black-box and white-box test design techniques, Agile defect lifecycles, cross-browser test automation using Selenium with Java, and REST API validation using Postman.',
    duration: '10 Weeks (80 Hours)',
    mode: 'Hybrid (Theory Discussions + Live Testing Lab)',
    schedule: 'Weekend or Evening Batches',
    icon: '🧪',
    color: 'bg-red-50 border-red-200',
    whoShouldEnroll: [
      'Students and fresh graduates seeking an accessible and stable entry point into IT',
      'B.Tech / Degree / MCA graduates looking for immediate software quality roles',
      'Developers wishing to enhance their unit and automated integration testing rigor',
    ],
    prerequisites: [
      'Basic familiarity with computers and web browsing',
      'Fundamental logical reasoning and attention to detail',
      'Introductory programming knowledge (covered from basics for automation module)',
    ],
    learningObjectives: [
      'Understand the Software Development Life Cycle (SDLC) and Software Testing Life Cycle (STLC)',
      'Author comprehensive Test Scenarios, Test Cases, and Defect Reports in JIRA',
      'Execute functional, regression, sanity, smoke, and exploratory testing on live applications',
      'Automate browser testing using Selenium WebDriver, TestNG, and Page Object Model (POM)',
      'Validate RESTful web services and API payloads using Postman and Newman',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Manual Testing Fundamentals & SDLC/STLC',
        duration: 'Weeks 1–3',
        summary: 'Quality concepts, verification vs validation, and Agile test processes.',
        topics: [
          'What is Software Quality Assurance and why defect prevention matters',
          'SDLC models: Waterfall vs Agile Scrum frameworks and sprint cycles',
          'STLC stages: Requirement analysis, test planning, design, execution, closure',
          'Test case design techniques: Boundary Value Analysis (BVA), Equivalence Partitioning (EP)',
          'Defect lifecycle, severity vs priority, and bug logging in JIRA',
        ],
      },
      {
        moduleNumber: 2,
        title: 'API Testing with Postman',
        duration: 'Weeks 4–5',
        summary: 'HTTP methods, status codes, request parameters, and response assertions.',
        topics: [
          'Client-server architecture, HTTP request/response headers and body payloads',
          'Testing REST APIs with GET, POST, PUT, DELETE methods in Postman',
          'Environment variables, collection runners, and automated assertions with JavaScript',
          'Validating JSON schemas, response status codes, and latency benchmarks',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Java Fundamentals for Automation',
        duration: 'Week 6',
        summary: 'Essential programming constructs required for Selenium scripting.',
        topics: [
          'Core Java essentials: Variables, conditionals, loops, and methods',
          'Object-oriented concepts applied to testing: Classes, objects, inheritance',
          'Collections in test automation: Lists, Sets, and Maps for test datasets',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Web Automation with Selenium WebDriver & TestNG',
        duration: 'Weeks 7–9',
        summary: 'Browser drivers, locators, waits, and the Page Object Model.',
        topics: [
          'Selenium architecture and browser driver initialization',
          'Element identification: ID, Name, Class, CSS Selector, and dynamic XPath',
          'Handling dynamic dropdowns, alerts, iframes, multiple windows, and web tables',
          'Synchronization strategies: Implicit, Explicit, and Fluent Waits',
          'TestNG framework: Annotations, assertions, parallel execution, and test reporting',
          'Page Object Model (POM) design pattern with PageFactory for maintainable scripts',
        ],
      },
      {
        moduleNumber: 5,
        title: 'CI/CD Integration & Project Defense',
        duration: 'Week 10',
        summary: 'Running test suites via Maven, basic CI pipelines, and viva readiness.',
        topics: [
          'Building test suites with Apache Maven',
          'Generating ExtentReports and HTML test execution summaries',
          'Introduction to running test suites inside GitHub Actions / CI pipelines',
          'Final testing project submission, viva defense walkthrough, and interview drills',
        ],
      },
    ],
    practicalExercises: [
      'Writing 50+ test cases for a live e-commerce checkout and login flow',
      'Logging real defects with reproduction steps and screenshots in JIRA',
      'Creating an automated Postman test collection validating a public weather API',
      'Developing a complete Selenium test suite automating user registration and form validation',
    ],
    projects: [
      'End-to-End Test Automation Framework for E-Commerce Web Application',
      'Comprehensive REST API Testing Suite with Automated Regression Runner',
      'Defect Management & Quality Audit Report for Financial Portal',
    ],
    toolsAndTech: [
      'JIRA', 'Selenium WebDriver', 'Java', 'TestNG', 'Postman', 'Maven', 'Git', 'ExtentReports',
    ],
    trainingMethodology: [
      'Testing performed on live, intentionally buggy web applications to simulate reality',
      'Step-by-step guidance on writing industry-standard, audit-ready test documentation',
      'Code reviews on automation scripts ensuring robust locator strategies',
      'Mock QA technical interviews covering scenario-based defect questions',
    ],
    learningOutcomes: [
      'Write exhaustive test documentation adhering to standard corporate QA practices',
      'Detect, document, and track software bugs across the complete defect lifecycle',
      'Develop robust automated UI test suites using Selenium WebDriver and TestNG',
      'Test RESTful backend endpoints independently using Postman collections',
    ],
    careerOpportunities: [
      'QA Test Engineer',
      'Software Tester - Manual & Automation',
      'Automation Test Associate (SDET Trainee)',
      'Quality Assurance Analyst',
    ],
    faqs: [
      {
        question: 'Is coding difficult in software testing?',
        answer:
          'No. Automation testing requires a focused subset of programming (locating elements, handling assertions, and organizing test methods). We teach all required Java concepts from scratch.',
      },
      {
        question: 'Are manual testing skills still relevant in the market?',
        answer:
          'Absolutely. Understanding test case design, exploratory testing, business logic verification, and boundary analysis is the foundation of quality assurance. Automation is a tool that executes what good manual analysis specifies.',
      },
    ],
  },

  // ─── 8. Data Analytics ─────────────────────────────────────────────────
  {
    id: 'analytics',
    slug: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    shortTitle: 'Data Analytics',
    category: 'Data Analytics',
    level: 'Beginner to Intermediate',
    description:
      'Transform complex raw datasets into actionable executive insights using Python, advanced SQL queries, Power BI interactive dashboards, and statistical models.',
    fullDescription:
      'In modern business, decisions are made with data, not intuition. This program trains students to clean dirty data, perform exploratory data analysis, write advanced analytical SQL queries (window functions, CTEs), and craft executive dashboards in Power BI.',
    duration: '12 Weeks (96 Hours)',
    mode: 'Hybrid (Lectures + Hands-on Data Lab Mentorship)',
    schedule: 'Flexible Weekend / Evening Batches',
    badge: 'High Industry Demand',
    icon: '📊',
    color: 'bg-teal-50 border-teal-200',
    whoShouldEnroll: [
      'B.Tech, B.Sc, B.Com, BBA, and MCA students seeking high-growth analytical careers',
      'Graduates who enjoy working with numbers, visualizations, and business logic',
      'Students looking to build an impactful data-driven final year academic project',
    ],
    prerequisites: [
      'Basic familiarity with numbers and spreadsheet software (Excel)',
      'Curiosity for business problem solving (no prior coding required)',
    ],
    learningObjectives: [
      'Master advanced Excel: Pivot Tables, VLOOKUP/XLOOKUP, and business modeling formulas',
      'Write complex analytical SQL queries: joins, aggregations, window functions, and CTEs',
      'Perform data wrangling, cleaning, and visualization using Python (Pandas, Matplotlib, Seaborn)',
      'Design interactive, publishable business intelligence dashboards in Power BI',
      'Apply statistical techniques (correlation, hypothesis testing, distributions) to real datasets',
    ],
    syllabus: [
      {
        moduleNumber: 1,
        title: 'Advanced Microsoft Excel for Business Analysis',
        duration: 'Weeks 1–2',
        summary: 'Formulas, data modeling, Pivot Tables, and executive summaries.',
        topics: [
          'Advanced lookup functions: XLOOKUP, INDEX/MATCH, and multi-condition logical formulas',
          'Data normalization, text-to-columns, and removing duplicates in spreadsheets',
          'Dynamic Pivot Tables, calculated fields, and timeline slicers',
          'Building executive KPI summary dashboards in Excel',
        ],
      },
      {
        moduleNumber: 2,
        title: 'Relational Database Queries with Advanced SQL',
        duration: 'Weeks 3–6',
        summary: 'Database design, aggregations, subqueries, and window functions.',
        topics: [
          'Relational database architecture and table schemas in PostgreSQL / MySQL',
          'Data filtering, grouping, and aggregation (GROUP BY, HAVING, CASE WHEN)',
          'Multi-table joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS)',
          'Subqueries, Common Table Expressions (WITH CTEs), and temporary tables',
          'Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), LAG(), LEAD(), and running totals',
        ],
      },
      {
        moduleNumber: 3,
        title: 'Python for Data Cleaning & Exploration',
        duration: 'Weeks 7–9',
        summary: 'Pandas dataframes, handling missing values, and visualization.',
        topics: [
          'Python essentials for analysts: Jupyter Notebooks and basic data structures',
          'Pandas DataFrame operations: filtering, grouping, merging, and reshaping',
          'Data cleaning techniques: handling nulls, formatting dates, and string operations',
          'Exploratory Data Analysis (EDA) and storytelling with Matplotlib & Seaborn',
        ],
      },
      {
        moduleNumber: 4,
        title: 'Interactive Dashboards with Power BI',
        duration: 'Weeks 10–11',
        summary: 'Data modeling, Power Query, DAX measures, and interactive visuals.',
        topics: [
          'Extracting, transforming, and loading (ETL) data using Power Query',
          'Star schema data modeling and managing table relationships',
          'Writing Data Analysis Expressions (DAX): CALCULATE, RELATED, time intelligence functions',
          'Creating interactive charts, drill-through reports, and custom KPI cards',
        ],
      },
      {
        moduleNumber: 5,
        title: 'Statistical Intuition, Capstone Project & Viva Defense',
        duration: 'Week 12',
        summary: 'Statistical distributions, executive presentations, and viva coaching.',
        topics: [
          'Descriptive statistics, variance, standard deviation, and correlation analysis',
          'Translating data insights into business recommendations for executives',
          'Final capstone review, portfolio dashboard publication, and viva mock prep',
        ],
      },
    ],
    practicalExercises: [
      'Building an executive sales performance tracker in Excel with dynamic slicers',
      'Analyzing customer retention cohorts and month-over-month growth using SQL window functions',
      'Wrangling and visualizing a multi-gigabyte healthcare transaction dataset in Python',
      'Building an interactive HR attrition dashboard in Power BI with custom DAX measures',
    ],
    projects: [
      'Executive Sales & Revenue Intelligence Dashboard (Power BI + SQL)',
      'Customer Churn & Behavioral Segmentation Analysis (Python + EDA)',
      'Supply Chain Inventory Optimization & KPI Dashboard',
    ],
    toolsAndTech: [
      'SQL', 'PostgreSQL', 'Power BI', 'Python', 'Pandas', 'Excel', 'Jupyter', 'Git',
    ],
    trainingMethodology: [
      'Work with real, anonymized enterprise datasets instead of sanitized textbook samples',
      'Emphasis on business interpretation: explaining what the numbers mean for decisions',
      'Step-by-step guidance on creating visually balanced, executive-ready dashboard layouts',
      'Academic project documentation assistance for final-year project submissions',
    ],
    learningOutcomes: [
      'Extract and transform data from diverse databases using complex SQL queries',
      'Conduct exploratory data analysis and identify statistical trends using Python',
      'Design and deploy interactive, automated business dashboards in Power BI',
      'Articulate quantitative findings confidently in technical interviews and academic vivas',
    ],
    careerOpportunities: [
      'Data Analyst',
      'Business Intelligence (BI) Analyst',
      'Business Operations Analyst',
      'Reporting & Insights Specialist',
    ],
    faqs: [
      {
        question: 'Do I need a mathematics or statistics degree to succeed in data analytics?',
        answer:
          'No. The mathematical concepts required (mean, median, standard deviation, percentages, and correlation) are explained practically using real business examples without abstract academic proofs.',
      },
      {
        question: 'Is Power BI free for students to use during the course?',
        answer:
          'Yes. Power BI Desktop is completely free to download and use on Windows computers, and we guide you on building, saving, and presenting your portfolio dashboards.',
      },
    ],
  },
];

export const courseCategories: CourseFilterCategory[] = [
  'All',
  'AI & Machine Learning',
  'Programming & Development',
  'Quality & Testing',
  'Data Analytics',
];
