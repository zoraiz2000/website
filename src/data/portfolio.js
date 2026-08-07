export const profile = {
  name: 'Zoraiz',
  fullName: 'Zoraiz Khan',
  title: 'Software & Data Engineer',
  email: 'zoraizkhan2000@gmail.com',
  location: 'Calgary, AB · Open to opportunities',
  resumeUrl: '/resume.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/zoraizkhan2000/',
    github: 'https://github.com/zoraiz2000',
    website: 'https://zoraizkhan.website',
  },
  about: {
    paragraphs: [
      "I'm a Computer Science graduate based in Calgary with experience in software development, data engineering, and AI-focused work. I enjoy building practical, polished products and turning ideas into things people can actually use.",
    ],
  },
  skills: [
    {
      category: 'Programming',
      items: [
        { name: 'SQL', icon: 'sql' },
        { name: 'Java', icon: 'java' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'Python', icon: 'python' },
        { name: 'C', icon: 'c' },
        { name: 'Lua', icon: 'lua' },
        { name: 'PHP', icon: 'php' },
        { name: 'HTML/CSS', icon: 'htmlcss' },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'React.js', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Node.js', icon: 'nodejs' },
        { name: '.NET', icon: 'dotnet' },
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MongoDB', icon: 'mongodb' },
      ],
    },
    {
      category: 'Cloud & Data',
      items: [
        { name: 'AWS (EC2, RDS)', icon: 'aws' },
        { name: 'Microsoft Fabric', icon: 'fabric' },
        { name: 'Azure Data Factory', icon: 'azure' },
        { name: 'Azure Data Lake', icon: 'datalake' },
        { name: 'Docker', icon: 'docker' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Nginx', icon: 'nginx' },
      ],
    },
    {
      category: 'Certifications',
      items: [
        { name: 'AWS Certified Cloud Practitioner', icon: 'aws' },
      ],
    },
  ],
}

export const experience = [
  {
    id: 'exp-1',
    title: 'Data Analyst',
    company: 'TELUS Digital AI Data Solutions',
    logo: '/companies/telus.svg',
    dates: 'June 2026 – Present',
    location: 'Calgary, AB',
    summary:
      'Evaluating search relevance and AI-generated responses against project guidelines for quality, accuracy, and usefulness.',
    bullets: [
      'Evaluated search relevance across assigned TELUS rating tasks by analyzing user intent, result accuracy, page quality, and usefulness against project guidelines.',
      'Reviewed AI-generated text responses across daily evaluation tasks by rating factual accuracy, instruction following, completeness, clarity, and natural language quality.',
      'Classified search and content quality issues such as irrelevant results, misleading information, unsafe content, and poor query matching.',
    ],
    tech: ['Search Relevance', 'AI Evaluation', 'Content Quality'],
  },
  {
    id: 'exp-2',
    title: 'Data Engineer',
    company: 'Ramis Associates',
    logo: '/companies/ramis.svg',
    dates: 'May 2026 – Present',
    location: 'Calgary, AB',
    summary:
      'Building a Microsoft Fabric medallion lakehouse for IBM Db2 data — from ADF ingestion through Bronze, Silver, and Gold analytical layers.',
    bullets: [
      'Engineered a Microsoft Fabric medallion architecture for IBM Db2 data by using Azure Data Factory to ingest source tables into OneLake, enabling structured Bronze, Silver, and Gold lakehouse processing.',
      'Built metadata-driven ADF pipelines using parameterized source queries, dynamic sink paths, table configuration metadata, and watermark-based logic, reducing manual pipeline duplication across source tables.',
      'Landed raw Db2 extracts into the Bronze layer in Parquet format, preserving source-aligned data structures while enabling scalable downstream transformation in Microsoft Fabric.',
      'Transformed Bronze data into Silver Delta tables by applying schema standardization, column normalization, data type enforcement, deduplication, null handling, and incremental merge logic to improve data quality and consistency.',
      'Developed Gold analytical tables from curated Silver datasets using joins, aggregations, business rules, and dimensional modeling patterns, enabling Power BI-ready reporting outputs.',
      'Implemented audit logging and table-level error handling across ingestion and transformation workflows, improving observability into load status, watermark values, execution timestamps, and failure details.',
    ],
    tech: ['Microsoft Fabric', 'Azure Data Factory', 'IBM Db2', 'Delta Lake', 'Power BI', 'Parquet'],
  },
  {
    id: 'exp-3',
    title: 'Software Developer',
    company: 'Dimension Rex (MTA:SA)',
    logo: '/companies/dimension-rex.svg',
    dates: 'Mar 2025 – Jan 2026',
    location: 'Calgary, AB',
    summary:
      'Architected and scaled a real-time multiplayer game server and production infrastructure for a live player base of 17,000+ unique users.',
    bullets: [
      'Architected and maintained a real-time multiplayer game server in Lua, implementing core gameplay systems (clans, duels, combat) using event-driven client–server architecture.',
      'Designed a map streaming system using spatial partitioning and interest management, reducing bandwidth usage and improving client performance through batched network events.',
      'Integrated Discord API via a Node.js service to enable real-time communication and event synchronization between in-game players and Discord channels.',
      'Developed custom real-time rendering and UI systems (radar, HUD, dynamic overlays), optimized for low-latency updates and smooth client performance.',
      'Deployed and managed production infrastructure on a Linux VPS (OVH), configuring Nginx for asset delivery and supporting monetization through in-game purchases.',
      'Scaled and supported a live player base of 17,000+ unique users, ensuring stability, performance, and continuous feature delivery.',
    ],
    tech: ['Lua', 'Node.js', 'Discord API', 'Nginx', 'Linux', 'Networking'],
  },
  {
    id: 'exp-4',
    title: 'Backend Developer and Undergraduate Researcher',
    company: 'University of Calgary',
    logo: '/companies/ucalgary.svg',
    dates: 'Jan 2024 – Apr 2024',
    location: 'Calgary, AB',
    summary:
      'Engineered and optimized a volumetric live-streaming system in Node.js, documenting findings in a research paper.',
    bullets: [
      'Engineered a volumetric live-streaming system in Node.js, increasing frame rate from ~30 FPS to ~38 FPS (~25% improvement) through performance benchmarking and targeted optimizations.',
      'Identified and resolved performance bottlenecks, improving overall system efficiency.',
      'Leveraged Docker containers for platform independence, ensuring seamless deployment across environments.',
      'Designed a modular architecture, enabling scalability and future enhancements.',
      'Authored a research paper documenting findings and improvements.',
    ],
    tech: ['Node.js', 'Docker', 'Performance', 'Research'],
  },
  {
    id: 'exp-5',
    title: 'Undergraduate Researcher (Team Lead)',
    company: 'University of Calgary',
    logo: '/companies/ucalgary.svg',
    dates: 'Jan 2023 – Apr 2023',
    location: 'Calgary, AB',
    summary:
      'Led a machine learning project analyzing student feedback to generate data-driven course recommendations.',
    bullets: [
      'Developed a machine learning model in Python using decision trees and information gain to analyze student feedback.',
      'Generated data-driven course recommendations, improving decision-making for students.',
      'Enhanced student satisfaction by providing personalized insights based on feedback analysis.',
    ],
    tech: ['Python', 'Machine Learning', 'Decision Trees'],
  },
]

export const projects = [
  {
    id: 'proj-0',
    name: 'Bare-Metal SNES Controller',
    description:
      'A bare-metal ARM/Raspberry Pi interface that reads SNES controller input via memory-mapped GPIO — latch, clock, and bit-level sampling with no OS or drivers.',
    tech: ['ARM', 'Raspberry Pi', 'GPIO', 'Bare-Metal', 'C'],
    github: 'https://github.com/zoraiz2000/baremetal-snes-controller-arm',
    demo: null,
    size: 'wide',
    accent: 'slate',
    preview: 'snes',
  },
  {
    id: 'proj-1',
    name: 'Redis-lite',
    description:
      'A Redis-like in-memory key–value store in Java as a multi-threaded TCP server, with SET/GET/DEL/EXPIRE/TTL and low-latency concurrent clients.',
    tech: ['Java', 'TCP Sockets', 'Multithreading'],
    github: 'https://github.com/zoraiz2000/redis-lite-java',
    demo: null,
    size: 'medium',
    accent: 'teal',
    preview: 'api',
  },
  {
    id: 'proj-2',
    name: 'GPTStir',
    description:
      'An AI chatbot platform for OpenAI, Anthropic, xAI, and DeepSeek — with OAuth 2.0 sign-in and seamless per-query model switching.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'OAuth 2.0'],
    github: 'https://github.com/zoraiz2000/gptstir-frontend',
    demo: 'https://gptstir.com',
    size: 'medium',
    accent: 'coral',
    preview: 'dashboard',
  },
  {
    id: 'proj-3',
    name: 'Rycho',
    description:
      'A music-focused social app for sharing Spotify tracks, discovering music, and connecting through comments, reactions, and recommendations.',
    tech: ['React', 'Next.js', 'MongoDB', 'Spotify API'],
    github: 'https://github.com/zoraiz2000/rycho',
    demo: null,
    size: 'medium',
    accent: 'indigo',
    preview: 'marketplace',
  },
  {
    id: 'proj-4',
    name: 'Volumetric Live Streaming',
    description:
      'Optimized a volumetric live-streaming video system with Docker and modular Node.js design; findings captured in a research paper.',
    tech: ['Node.js', 'Docker', 'Express'],
    github: 'https://github.com/zoraiz2000/Volumetric-live-streaming-video',
    demo: null,
    size: 'medium',
    accent: 'amber',
    preview: 'charts',
  },
  {
    id: 'proj-5',
    name: 'Multithreaded Games',
    description:
      'Games built in C that demonstrate thread creation, synchronization, and shared resource management for reliable real-time processes.',
    tech: ['C', 'Multithreading'],
    github: 'https://github.com/zoraiz2000/Multithreaded-Games',
    demo: null,
    size: 'medium',
    accent: 'slate',
    preview: 'planner',
  },
  {
    id: 'proj-6',
    name: 'Course Feedback Analysis',
    description:
      'A machine learning system in Python that analyzes student feedback with decision trees and information gain to recommend courses.',
    tech: ['Python', 'Pandas', 'Machine Learning'],
    github: 'https://github.com/zoraiz2000/Course-Feedback-Analysis',
    demo: null,
    size: 'medium',
    accent: 'teal',
    preview: 'dashboard',
  },
]
