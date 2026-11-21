import type { Project, ProjectCategory, ProjectService, MethodologyStage } from '@/types/project.types';

export const projects: Project[] = [
  // ─── 1. B.Tech Academic Projects ──────────────────────────────────────
  {
    id: 'bt-1',
    title: 'Autonomous Real-Time Attendance System via Face Embeddings',
    domain: 'Computer Vision & Embedded ML',
    category: 'B.Tech Projects',
    difficulty: 'Intermediate',
    description:
      'A multi-camera attendance logging system utilizing face detection (MTCNN) and vector embedding cosine matching.',
    problemStatement:
      'Manual roll calls waste 10–15% of instructional lecture time and are vulnerable to proxy attendance in large lecture halls.',
    keyFeatures: [
      'Real-time multi-face detection from video stream feeds',
      '512-dimensional vector embedding generation and Euclidean distance matching',
      'Automated timestamped logging into SQLite with exportable CSV reports',
      'Liveness verification to prevent spoofing using 2D screen photos',
    ],
    skillsLearned: [
      'OpenCV video processing & frame sampling',
      'Facial landmark extraction & vector embeddings',
      'Relational schema design for automated audit trails',
    ],
    techStack: ['Python', 'OpenCV', 'DeepFace', 'Flask', 'SQLite', 'NumPy'],
    isSampleConcept: true,
  },
  {
    id: 'bt-2',
    title: 'Crop Foliage Disease Diagnosis using Transfer Learning (MobileNetV3)',
    domain: 'Edge AI & Agricultural Tech',
    category: 'B.Tech Projects',
    difficulty: 'Intermediate',
    description:
      'Lightweight convolutional neural network optimized for mobile deployment to identify 14 agricultural plant leaf pathogens.',
    problemStatement:
      'Rural farmers face catastrophic crop loss due to delayed detection of leaf blights and fungal pathogens without agronomist access.',
    keyFeatures: [
      'Quantized MobileNetV3 model trained on 38,000 public PlantVillage images',
      'Offline inference on edge smartphones without requiring constant internet',
      'Remediation advisory text generated based on identified disease classes',
    ],
    skillsLearned: [
      'PyTorch / TensorFlow transfer learning fine-tuning',
      'Model quantization & latency profiling for mobile devices',
      'Handling dataset class imbalances through data augmentation',
    ],
    techStack: ['Python', 'PyTorch', 'TorchVision', 'FastAPI', 'Android/React Native'],
    isSampleConcept: true,
  },

  // ─── 2. Degree and BCA/B.Sc. Projects ──────────────────────────────────
  {
    id: 'deg-1',
    title: 'Transparent Student Electoral Voting Portal with Cryptographic Signatures',
    domain: 'Web Architecture & Cryptography',
    category: 'Degree & BCA',
    difficulty: 'Beginner to Intermediate',
    description:
      'A tamper-evident collegiate balloting portal utilizing asymmetric SHA-256 digital signatures and ballot audit logs.',
    problemStatement:
      'Paper-based campus student union elections suffer from high tallying overhead, disputes, and delayed election announcements.',
    keyFeatures: [
      'Secure single-use student voter authorization tokens',
      'Cryptographically signed vote tally ledgers preventing post-vote alteration',
      'Role-based administrative dashboards for Returning Officers and faculty supervisors',
      'Real-time automated voter turnout analytics and instant result compilation',
    ],
    skillsLearned: [
      'Cryptographic hashing (SHA-256) & asymmetric key generation',
      'Role-Based Access Control (RBAC) in web applications',
      'Secure session management and CSRF / XSS vulnerability defenses',
    ],
    techStack: ['Python', 'Django', 'PostgreSQL', 'HTML5/Tailwind', 'Bootstrap'],
    isSampleConcept: true,
  },
  {
    id: 'deg-2',
    title: 'Multi-Branch Inventory & Billing ERP with Reorder Threshold Alerts',
    domain: 'Enterprise Information Systems',
    category: 'Degree & BCA',
    difficulty: 'Beginner to Intermediate',
    description:
      'A centralized retail inventory platform featuring barcode lookup, point-of-sale invoice generation, and automated replenishment alerts.',
    problemStatement:
      'Small and medium enterprises struggle with stockouts, overstocking, and disconnected manual ledgers across multiple retail outlets.',
    keyFeatures: [
      'Real-time multi-warehouse stock level synchronization',
      'Point-of-sale thermal invoice generation with PDF receipt exports',
      'Automated email and SMS alerts when stock levels drop below reorder buffers',
      'Monthly sales revenue, gross margin, and dead-stock analytical reports',
    ],
    skillsLearned: [
      'Normalized relational schema design (3NF) across inventory transactions',
      'Transaction isolation levels (ACID) for concurrent billing operations',
      'Exporting formatted PDF documents and data reports programmatically',
    ],
    techStack: ['PHP / Python', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    isSampleConcept: true,
  },

  // ─── 3. MCA Projects ───────────────────────────────────────────────────
  {
    id: 'mca-1',
    title: 'Distributed Hospital Information & Electronic Health Records (EHR) System',
    domain: 'Enterprise Web & Distributed DB',
    category: 'MCA Projects',
    difficulty: 'Advanced',
    description:
      'Enterprise-grade medical administration platform supporting patient intake, diagnostic lab integration, pharmacy inventory, and HIPAA-inspired role security.',
    problemStatement:
      'Fragmented clinic records cause medical history discrepancies, duplicated lab tests, and delayed patient emergency response times.',
    keyFeatures: [
      'Multi-tenant architecture separating departmental access (OPD, IPD, Lab, Billing)',
      'Stateless JWT authentication with granular doctor-patient privilege enforcement',
      'Prescription module with automatic drug-interaction alert validation',
      'Complete audit trail logging every medical record access event',
    ],
    skillsLearned: [
      'Spring Boot microservice architectural patterns (Controller, Service, Repository, DTO)',
      'Hibernate ORM persistence optimization and N+1 query avoidance',
      'Enterprise role-based security filters and token refresh cycles',
    ],
    techStack: ['Java 17', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'React', 'Docker'],
    isSampleConcept: true,
  },
  {
    id: 'mca-2',
    title: 'Smart Academic Resource Allocation & Automated Timetable Scheduler',
    domain: 'Operations Research & Web Microservices',
    category: 'MCA Projects',
    difficulty: 'Advanced',
    description:
      'Constraint satisfaction scheduling engine that generates conflict-free college master timetables balancing faculty workloads, laboratory availability, and classroom capacity.',
    problemStatement:
      'Academic departments spend weeks manually building semester schedules, frequently encountering classroom clash errors and unbalanced faculty hour allocations.',
    keyFeatures: [
      'Genetic algorithm / backtracking constraint satisfaction solver',
      'Hard constraint enforcement (no faculty double-booking, no classroom conflicts)',
      'Soft constraint optimization (balanced working hours, minimized idle gaps)',
      'Interactive drag-and-drop calendar UI with instant conflict detection warnings',
    ],
    skillsLearned: [
      'Algorithmic constraint satisfaction problem (CSP) modeling',
      'Complex JSON state management on frontend interfaces',
      'REST API design for computationally intensive background tasks',
    ],
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL'],
    isSampleConcept: true,
  },

  // ─── 4. IEEE-Paper-Based Research Implementations ─────────────────────
  {
    id: 'ieee-1',
    title: 'Privacy-Preserving Federated Learning for Decentralized Medical Imaging',
    domain: 'Federated Machine Learning',
    category: 'IEEE Research',
    difficulty: 'Advanced',
    description:
      'Implementation of a federated aggregation algorithm (FedAvg) allowing decentralized clinical institutions to train a shared diagnostic model without exchanging patient imaging data.',
    problemStatement:
      'Data governance regulations (GDPR, HIPAA) strictly prevent hospitals from pooling sensitive patient scans in centralized cloud servers, starving deep learning models of training diversity.',
    keyFeatures: [
      'Simulation of multiple hospital client nodes with heterogeneous local datasets',
      'Local model training on client nodes with parameter gradient extraction',
      'Secure Federated Averaging (FedAvg) server aggregation without raw data access',
      'Differential privacy noise addition to prevent gradient reconstruction attacks',
    ],
    skillsLearned: [
      'Distributed machine learning architectures and client-server weight aggregation',
      'Differential privacy math and gradient clipping techniques',
      'Rigorous quantitative benchmarking against centralized baseline training',
    ],
    techStack: ['Python', 'PyTorch', 'PySyft', 'Flask', 'NumPy', 'Matplotlib'],
    isSampleConcept: true,
  },
  {
    id: 'ieee-2',
    title: 'Graph Convolutional Networks (GCN) for Financial Transaction Fraud Rings',
    domain: 'Graph Machine Learning & FinTech',
    category: 'IEEE Research',
    difficulty: 'Advanced',
    description:
      'Topological graph neural network modeling money flows as directed bipartite graphs to detect multi-hop smurfing and money laundering cycles that bypass standard tabular rules.',
    problemStatement:
      'Sophisticated fraud syndicates split transactions across hundreds of intermediary accounts (smurfing), evading traditional rule-based threshold detectors.',
    keyFeatures: [
      'Graph construction representing account entities as nodes and wire transfers as edges',
      '2-layer Graph Convolutional Network (GCN) learning structural neighbor embeddings',
      'Cycle detection subroutines flagging closed-loop financial routing patterns',
      'Benchmark comparisons demonstrating higher Recall over standard XGBoost classifiers',
    ],
    skillsLearned: [
      'Graph data structures, adjacency matrices, and message passing algorithms',
      'PyTorch Geometric (PyG) and NetworkX graph analytics',
      'Defending research methodology in academic project viva reviews',
    ],
    techStack: ['Python', 'PyTorch Geometric', 'NetworkX', 'Scikit-learn', 'Pandas'],
    isSampleConcept: true,
  },

  // ─── 5. Live Industry-Oriented Projects ────────────────────────────────
  {
    id: 'ind-1',
    title: 'Production ML Pipeline with Continuous Experiment Tracking (MLOps)',
    domain: 'Applied MLOps & Data Engineering',
    category: 'Live Industry',
    difficulty: 'Advanced',
    description:
      'End-to-end industrial machine learning operational pipeline automating data ingestion, model retraining, MLflow experiment tracking, and zero-downtime model serving.',
    problemStatement:
      '80% of data science models developed in universities fail in real production due to manual notebook scripts, lack of versioning, and zero automated drift detection.',
    keyFeatures: [
      'Automated data validation pipeline using Great Expectations',
      'Experiment metric and artifact tracking with MLflow model registry',
      'FastAPI inference server containerized with Docker and health check probes',
      'Data drift monitoring calculating Kolmogorov-Smirnov statistical shift scores',
    ],
    skillsLearned: [
      'Industrial MLOps tooling and separation of training from serving',
      'Containerization and microservice health monitoring with Docker',
      'Writing automated unit tests for data transformation pipelines',
    ],
    techStack: ['Python', 'MLflow', 'Docker', 'FastAPI', 'Scikit-learn', 'GitHub Actions'],
    isSampleConcept: true,
  },
  {
    id: 'ind-2',
    title: 'Microservices-Based High-Throughput URL Shortener & Analytics Gateway',
    domain: 'System Design & Distributed Services',
    category: 'Live Industry',
    difficulty: 'Intermediate to Advanced',
    description:
      'Low-latency distributed URL redirection service handling high concurrent read throughput using Redis caching, rate-limiting tokens, and asynchronous clickstream analytics.',
    problemStatement:
      'Redirect systems face massive read/write traffic asymmetry where redirect lookups outnumber new links by 100:1, quickly overloading relational databases.',
    keyFeatures: [
      'Base62 short link encoding with collision resolution logic',
      'Sub-5ms redirection response times achieved via Redis in-memory caching',
      'Leaky-bucket rate limiting protecting public endpoints against denial of service',
      'Asynchronous event logging recording visitor geography and device analytics',
    ],
    skillsLearned: [
      'System design principles: caching strategies, read-write separation, throughput',
      'In-memory key-value stores (Redis) and cache-invalidation policies',
      'Benchmarking API load concurrency using Apache Bench / Locust',
    ],
    techStack: ['Node.js / Python', 'Redis', 'PostgreSQL', 'Docker', 'Nginx'],
    isSampleConcept: true,
  },

  // ─── 6. AI, Machine Learning & Generative AI Projects ──────────────────
  {
    id: 'ai-gen-1',
    title: 'Enterprise Technical Documentation RAG Assistant with Citation Grounding',
    domain: 'Generative AI & Semantic Search',
    category: 'AI & Generative AI',
    difficulty: 'Intermediate to Advanced',
    description:
      'Retrieval-Augmented Generation (RAG) system enabling software engineers to query complex internal engineering manuals with exact page and section citations.',
    problemStatement:
      'Engineers lose hours searching through 300+ page software architecture manuals, while generic public AI models hallucinate non-existent internal APIs.',
    keyFeatures: [
      'Document parsing and recursive character chunking preserving code blocks',
      'Semantic embedding indexing using ChromaDB and cosine similarity retrieval',
      'Cross-encoder reranking to prioritize the top 3 most relevant context windows',
      'Strict answer grounding displaying source file names and verified page excerpts',
    ],
    skillsLearned: [
      'LangChain orchestration and prompt templating with system constraints',
      'Vector database configuration, dense retrieval, and semantic reranking',
      'Evaluating hallucination metrics using Ragas automated frameworks',
    ],
    techStack: ['Python', 'LangChain', 'ChromaDB', 'OpenAI/Ollama', 'FastAPI', 'React'],
    isSampleConcept: true,
  },
  {
    id: 'ai-gen-2',
    title: 'Autonomous Code Review & Security Vulnerability Audit Agent',
    domain: 'Agentic AI & Static Code Analysis',
    category: 'AI & Generative AI',
    difficulty: 'Advanced',
    description:
      'Autonomous multi-stage AI agent that inspects GitHub pull request diffs, checks for OWASP Top 10 vulnerabilities, executes static linters, and posts constructive review comments.',
    problemStatement:
      'Senior software engineers spend 20% of their sprints reviewing routine syntax, formatting, and common security oversights in pull requests.',
    keyFeatures: [
      'Git diff parsing extracting modified functions and dependency configurations',
      'ReAct agent loop executing static analyzers (Bandit, Flake8) as agent tools',
      'Vulnerability classification mapped to CWE / OWASP security references',
      'Automated generation of unit test cases designed to expose identified edge-case bugs',
    ],
    skillsLearned: [
      'Agentic loops, function calling schemas, and tool execution boundaries',
      'AST (Abstract Syntax Tree) code inspection in Python',
      'Software security fundamentals: SQL injection, hardcoded secrets, ReDoS',
    ],
    techStack: ['Python', 'LangGraph', 'Pydantic', 'Git API', 'FastAPI'],
    isSampleConcept: true,
  },

  // ─── 7. Java Full Stack and Python Projects ────────────────────────────
  {
    id: 'fs-1',
    title: 'Corporate Employee Appraisal & Objective Key Results (OKR) Platform',
    domain: 'Enterprise Full Stack Engineering',
    category: 'Java & Python Full Stack',
    difficulty: 'Intermediate',
    description:
      'Enterprise workflow application for quarterly performance goal setting, manager 360 review workflows, department analytics, and PDF appraisal exports.',
    problemStatement:
      'Mid-sized organizations struggle with chaotic email-based annual appraisals, leading to lost review feedback and opaque compensation decisions.',
    keyFeatures: [
      'Multi-tier organizational hierarchy with manager-employee approval workflows',
      'Spring Boot REST backend with Spring Data JPA and relational constraints',
      'Stateless JWT security filter chain with role-based dashboard rendering',
      'Responsive React frontend with interactive progress bars and evaluation forms',
    ],
    skillsLearned: [
      'Enterprise application layers (Controller, Service, Repository, DTO, Entity)',
      'Relational database transactions and cascading foreign-key integrity',
      'Connecting React single-page apps with Spring Boot backends via Axios',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'React', 'Tailwind CSS'],
    isSampleConcept: true,
  },
  {
    id: 'fs-2',
    title: 'Smart Civic Complaint Redressal & Geo-Tagged Infrastructure Tracker',
    domain: 'Full Stack Web & GIS Mapping',
    category: 'Java & Python Full Stack',
    difficulty: 'Beginner to Intermediate',
    description:
      'Public civic reporting platform where citizens post infrastructure defects (potholes, streetlights) with GPS coordinates, auto-routing tickets to municipal engineers.',
    problemStatement:
      'Municipal maintenance complaints are lost in physical registers without status tracking, location verification, or citizen feedback loops.',
    keyFeatures: [
      'Citizen complaint submission with image upload and browser geolocation capture',
      'Interactive GIS map view displaying active municipal ticket clusters',
      'Municipal engineer assignment workflow with SMS/Email progress status notifications',
      'Administrative dashboard showing average resolution turnaround times by ward',
    ],
    skillsLearned: [
      'Django ORM models, file upload handling, and relational query sets',
      'Leaflet.js interactive OpenStreetMap integration on the frontend',
      'REST API design for mobile-responsive public citizen portals',
    ],
    techStack: ['Python', 'Django', 'PostgreSQL', 'Leaflet.js', 'HTML5', 'Bootstrap'],
    isSampleConcept: true,
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'B.Tech Projects',
  'Degree & BCA',
  'MCA Projects',
  'IEEE Research',
  'Live Industry',
  'AI & Generative AI',
  'Java & Python Full Stack',
];

export const projectServices: ProjectService[] = [
  {
    id: 'doc-support',
    title: 'University-Standard Documentation Support',
    subtitle: 'From Abstract & Synopsis to Final Bound Thesis Reports',
    description:
      'Technical documentation is 40% of academic project grading. We mentor students on authoring comprehensive, university-compliant technical documentation following official department templates.',
    deliverables: [
      'Project Synopsis & Feasibility Proposal',
      'Software Requirement Specification (SRS) with IEEE 830 standards',
      'System Architecture Diagrams & Data Flow Diagrams (DFD Level 0, 1, 2)',
      'Database Schema Normalization & Entity-Relationship (ER) Diagrams',
      'UML Diagrams: Use Case, Class, Sequence, and Activity Diagrams',
      'Complete Final Project Report (Abstract, Methodology, Testing, Conclusion)',
    ],
    icon: '📄',
  },
  {
    id: 'ppt-viva',
    title: 'Professional Presentation & Viva Defense Coaching',
    subtitle: 'Defend Your Architecture and Code with Confidence',
    description:
      'Examiners evaluate whether the student genuinely understands and authored the project. We provide slide engineering and one-on-one mock viva defense sessions with simulated panel questions.',
    deliverables: [
      'Clean, professional PPT slide decks tailored for academic review panels',
      'System architecture walkthrough coaching (explaining components & data flows)',
      'Live code execution walkthrough: demonstrating core algorithms & corner cases',
      'Mock viva simulation sessions with anticipated examiner question banks',
      'Handling tricky examiner queries: scalability, trade-offs, and alternative approaches',
      'Project demonstration backup strategies and local offline execution setups',
    ],
    icon: '🎤',
  },
];

export const methodologyStages: MethodologyStage[] = [
  {
    step: '01',
    title: 'Topic Selection & Academic Feasibility Check',
    summary: 'Aligning student interests with university guidelines and realistic timelines.',
    activities: [
      'Evaluating department guidelines (B.Tech, Degree, MCA, or IEEE criteria)',
      'Selecting a non-trivial problem statement with clear engineering depth',
      'Feasibility analysis: confirming data availability, libraries, and hardware resources',
      'Drafting the official Abstract and Synopsis for guide approval',
    ],
  },
  {
    step: '02',
    title: 'System Architecture & Schema Engineering',
    summary: 'Laying down modular structural blueprints before writing source code.',
    activities: [
      'Defining high-level system architecture and component boundaries',
      'Designing database entities, primary/foreign key relationships, and schemas',
      'Drafting UML use case, sequence, and component interaction flows',
      'Setting up Git version control repositories and modular directory structures',
    ],
  },
  {
    step: '03',
    title: 'Iterative Core Implementation Mentorship',
    summary: 'Guiding students through hands-on coding rather than handing over black-box code.',
    activities: [
      'Module-by-module implementation with continuous mentor code reviews',
      'Debugging runtime errors, exception handling, and edge case vulnerabilities',
      'Ensuring students write, understand, and explain their own core algorithms',
      'Integrating frontend interfaces with backend REST APIs and databases',
    ],
  },
  {
    step: '04',
    title: 'System Verification, Testing & Bug Fixing',
    summary: 'Validating functionality against expected test cases and boundary values.',
    activities: [
      'Conducting unit testing on business logic modules',
      'End-to-end integration testing and database transaction validation',
      'Eliminating security vulnerabilities and input sanitization flaws',
      'Ensuring consistent execution across development and demonstration machines',
    ],
  },
  {
    step: '05',
    title: 'Formal Documentation Compilation',
    summary: 'Authoring rigorous, university-compliant academic project reports.',
    activities: [
      'Compiling complete Software Requirement Specification (SRS) documents',
      'Generating high-resolution architecture diagrams and schema snapshots',
      'Authoring test case logs, screenshot appendices, and code listings',
      'Final review ensuring zero plagiarism and strict adherence to college format',
    ],
  },
  {
    step: '06',
    title: 'Presentation Engineering & Mock Viva Defense',
    summary: 'Preparing students to impress internal and external university examiners.',
    activities: [
      'Designing structured, concise, and visually compelling PowerPoint slide decks',
      'Conducting realistic mock viva interviews with senior technical mentors',
      'Drilling students on deep technical questions regarding algorithmic tradeoffs',
      'Finalizing live project demo configurations with zero runtime surprise risks',
    ],
  },
];
