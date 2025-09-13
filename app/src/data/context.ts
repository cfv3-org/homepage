type ExperienceItem = {
    company: string;
    title: string;
    period: string;
    location: string;
    bullets: string[];
};

type EducationItem = {
    place: string;
    org: string;
    year: string;
};

export const profile = {
    name: "Viktor Gievoi",
    role: "Senior Software Developer",
    location: "Leipzig, Germany",
    summary:
        "Backend developer with over 13+ years of professional experience designing, developing, and maintaining complex distributed systems. Specialized in building scalable, highly available, and fault-tolerant services that can handle massive loads without compromising performance or reliability. A strong advocate of Domain-Driven Design (DDD), Event-Driven architectures, and microservices, with a deep focus on system observability — including comprehensive logging, metrics, tracing, and alerting. Passionate about clean code principles, automation, and applying industry best practices to deliver maintainable, future-proof solutions. Known for creating transparent development processes, fostering collaboration, and ensuring that architecture decisions are driven by both business needs and technical excellence.\n",
    avatar:
        "/assets/images/photo.jpeg",
    cvUrl: "/assets/files/cv.pdf",
    links: {
        github: "https://github.com/vasary",
        linkedin: "https://www.linkedin.com/in/viktor-gievoi/",
        email: "mailto:gievoi.v@gmail.com",
        phone: "+49 162 150 74 83"
    },
    languages: [
        {icon: "🇺🇸", name: "English", level: "Work Proficiency"},
        {icon: "🇩🇪", name: "Deutsch", level: "A1"}
    ],
    contact: {
        message: "Open to full-time/contract offers. Prefer product teams, transparent processes, and solid engineering practices."
    },
    mindset: "I specialize in backend engineering, infrastructure, and enhancing developer experience. My focus is on designing transparent, well-instrumented systems where logging, metrics, tracing, and alerting are embedded from the start. I thrive in collaborative environments, establishing robust CI/CD pipelines, and applying proven quality practices such as code reviews, TDD, and automated checks to deliver reliable, maintainable solutions that scale."
};

export const highlights: string[] = [
    "DDD, Event-Driven, reliable integrations",
    "Observability: Prometheus, Grafana, Jaeger",
    "Kubernetes, Helm, Argo CD, GitOps",
    "PostgreSQL, Redis, Queues (RabbitMQ/Kafka)",
    "RAG, LLM integration, knowledge systems",
    "Cloud: AWS, GCP, scalable architectures",
    "CI/CD, automation, developer productivity",
    "High-load systems, distributed architecture",
    "Security, compliance, data protection",
    "Leadership, mentoring, staff-level engineering"
];

export const skills: string[] = [
    "PHP", "Go", "Kotlin", "Node.js", "TypeScript", "DDD", "Event Sourcing", "Event-Driven", "Symfony", "Laravel", "PostgreSQL", "MCP", "n8n", "Ollama API", "RAG",
    "Redis", "Memcached", "RabbitMQ", "Kafka", "gRPC", "REST", "GraphQL", "Kubernetes", "Docker", "Helm", "Argo CD", "MetalLB",
    "ExternalDNS", "Vault", "Prometheus", "Grafana", "Jaeger", "ELK", "AWS", "GCP", "CI/CD", "NAS", "Transactional outbox",
    "Software Architecture", "Hexagonal Architecture", "Team Leadership", "Mentoring", "Agile / Scrum", "Sprint Planning", "Technical Debt Management"
];

export const experience: ExperienceItem[] = [
    {
        company: "Billie",
        title: "Software Developer",
        period: "Oct 2024 — Present",
        location: "Berlin, Germany",
        bullets: [
            "Developed a Python-based RAG knowledge system that provides context-aware answers from project codebase and tickets, improving team efficiency",
            "Co-architected and delivered a core payment processing service from scratch using Kotlin, DDD, and event-driven architecture on Kafka",
            "Designed, implemented, and deployed a system that batches and executes all company payment transactions, ensuring accuracy and reliability in production",
            "Adapted quickly to Kotlin as a new primary language, applying best practices to produce maintainable, high-quality code",
            "Served as the primary engineering contact for infrastructure-related issues, leveraging deep DevOps experience",
            "Participated in on-call rotations, resolving critical incidents in a highly distributed financial platform",
            "Worked on legacy services in PHP, including gradual migration to Kotlin with a hexagonal architecture (ports & adapters pattern)",
            "Contributed to system-wide technical decisions, reviewed pull requests, and drove initiatives to reduce technical debt",
            "Collaborated with product owners on scope definition, task breakdown, and cross-team alignment to ensure timely delivery",
        ],
    },
    {
        company: "Turbine Kreuzberg",
        title: "Associate Lead Software Developer",
        period: "May 2022 — Sep 2024",
        location: "Berlin, Germany",
        bullets: [
            "Developed and maintained large-scale B2B e-commerce solutions on Spryker, delivering stable, high-quality features with minimal defects",
            "Led backend development tasks including asynchronous workflows, system integrations, and internal service enhancements",
            "Acted as a key liaison with the infrastructure team, leveraging prior DevOps expertise to resolve complex deployment and scaling issues",
            "Adapted to a new work environment in the EU, successfully transitioning to English-language professional communication",
            "Maintained strong delivery performance despite rapid relocation and cultural transition, establishing a foundation for long-term career growth in the region",
            "Participated in architectural decision-making, defined coding standards, and reviewed critical parts of the codebase",
            "Took part in task estimation, sprint planning, and backlog prioritization in close collaboration with product management",
            "Mentored new team members and helped establish best practices for cross-team collaboration and CI/CD processes",
            "Acted as a bridge between product, development, and infrastructure teams to align priorities and reduce delivery risks",
        ],
    },
    {
        company: "PimPay",
        title: "Solution Architect / Staff Engineer / Team Lead",
        period: "Jul 2020 — Apr 2022",
        location: "Moscow, Russia",
        bullets: [
            "Redesigned and migrated a monolithic logistics aggregator to a microservices architecture serving clients across Russia, Kazakhstan, and other CIS countries",
            "Implemented asynchronous communication via RabbitMQ, enabling graceful failure recovery and reducing downtime",
            "Introduced distributed tracing, centralized logging, and monitoring, significantly improving system observability and incident response times",
            "Enhanced SLA performance by isolating failures to individual workers without disrupting the overall system",
            "Collaborated with the team on second-generation platform architecture, technical roadmaps, and implementation strategies",
        ],
    },
    {
        company: "PlatBox",
        title: "Solution Architect / Staff Engineer / Lead",
        period: "Apr 2019 — Jul 2020",
        location: "Moscow, Russia",
        bullets: [
            "Led a full engineering team brought in to stabilize and modernize a mission-critical, Erlang-based distributed payment processing platform",
            "Refactored and re-engineered core components, restoring platform stability and reliability for enterprise clients",
            "Gradually migrated critical services from Erlang to PHP and Go, improving maintainability and developer onboarding",
            "Acted as both architect and de-facto CTO, liaising with business stakeholders to align technical priorities with strategic goals",
            "Oversaw DevOps operations including data center work (BST, M9), network equipment configuration, and server provisioning",
            "Implemented Nutanix-based infrastructure improvements to increase resilience and simplify management",
            "Defined system architecture evolution path and introduced practices for better code quality and long-term maintainability",
            "Supervised sprint planning and task prioritization, balancing urgent delivery with strategic improvements",
            "Provided guidance and feedback to engineers, helping them grow professionally and ensuring consistency across teams",
            "Conducted regular 1:1 meetings, provided feedback and development plans for engineers to support their growth",
        ],
    },
    {
        company: "FinMedia",
        title: "Team Leader",
        period: "Oct 2017 — Apr 2019",
        location: "Moscow, Russia",
        bullets: [
            "Led a team of 7 in building a distributed, event-driven microservices platform for real-time user profiling and credit pre-scoring",
            "Developed the 'User Identification System' processing 1TB+ datasets to recognize users across multiple partner websites and aggregate behavioral data",
            "Integrated credit scoring with personalized offer generation, enabling automated loan offers without manual intervention",
            "Introduced Docker and implemented CI/CD pipelines on Argo, reducing deployment time and improving delivery reliability",
            "Architected and delivered a system that significantly increased conversion rates and generated revenue autonomously",
            "Balanced leadership responsibilities with hands-on coding, code reviews, and mentoring",
            "Defined team processes, set coding standards, and helped developers progress through structured feedback",
        ],
    },
    {
        company: "Chestnoe Slovo",
        title: "Team Leader (Part-time)",
        period: "Nov 2016 — Sep 2017",
        location: "Moscow, Russia",
        bullets: [
            "Architected and delivered a new event-driven P2P lending platform operating in Russia, Georgia, and the Czech Republic",
            "Designed and implemented a custom credit scoring engine with real-time integrations to banks and external scoring services",
            "Integrated a neural network for OCR-based bank card number recognition from photos, reducing manual data entry",
            "Migrated the business from an unsupported legacy system to a scalable, maintainable, and extensible architecture",
            "Increased loan application processing speed and reliability, enabling business expansion to new markets",
            "Established system foundations for future feature development, reducing time-to-market for new products",
            "Led the full delivery from initial concept to production launch, then successfully handed over to the internal team for long-term ownership",
            "Introduced lightweight team processes and facilitated cross-functional communication during early growth stage",
        ],
    },
    {
        company: "ECommPay",
        title: "PHP Developer",
        period: "Feb 2016 — Nov 2016",
        location: "Moscow, Russia",
        bullets: [
            "Integrated and optimized payment service providers for a high-load platform processing 70,000+ transactions per day",
            "Ensured PCI DSS compliance including secure data storage and code-level adherence to standards",
            "Developed OLAP cubes for analytics and implemented reconciliation systems for financial accuracy",
            "Resolved critical concurrency issues in status polling, improving system stability under peak loads",
            "Led transition from synchronous to fully asynchronous architecture, significantly increasing throughput and resilience",
        ],
    },
    {
        company: "Freelance",
        title: "PHP Developer",
        period: "Jan 2014 — Feb 2016",
        location: "Remote",
        bullets: [
            "Owned full project lifecycle from requirements gathering and solution design to deployment and long-term maintenance",
            "Architected and implemented complex business systems including ERP, CRM, and high-traffic e-commerce platforms",
            "Directly collaborated with clients to define scope, align solutions with business goals, and ensure successful delivery",
            "Led and mentored a remote team of 3 developers, setting standards for code quality, workflows, and delivery practices",
            "Handled infrastructure setup, deployment automation, performance optimization, and system scalability",
        ],
    },
    {
        company: "Molbulak Finance",
        title: "SQL Developer (Part-time)",
        period: "Feb 2013 — Dec 2013",
        location: "Bishkek, Kyrgyzstan",
        bullets: [
            "Developed and maintained a credit debt calculation system for a large financial company operating in Kyrgyzstan, Russia, and Kazakhstan",
            "Implemented complex triggers in Firebird to recalculate annuity payments with floating interest rates",
            "Created reporting tools for the accounting department, improving accuracy and reducing processing time",
            "Worked with Delphi and Firebird to ensure high performance and reliability under heavy load",
        ],
    },
    {
        company: "AeroTeam Ltd",
        title: "PHP Developer",
        period: "Feb 2012 — Mar 2013",
        location: "Kyrgyzstan",
        bullets: [
            "Developed a ticket sales system from scratch handling 1,000+ tickets per day",
            "Worked on backend in PHP and custom Delphi modules, using an in-house framework",
            "Configured and maintained production servers, ensuring 24/7 system availability",
            "Presented the system to potential clients and supported integration into their business processes",
            "Grew from junior to independent developer, taking ownership of critical tasks",
        ],
    },
];

export const education: EducationItem[] = [
    {
        place: "Automated Systems Engineering",
        org: "Kyrgyz State Technical University, Kyrgyzstan",
        year: "2014",
    },
    {
        place: "System Architect",
        org: "OTUS, Russia",
        year: "2021",
    },
    {
        place: "Highload Systems Architect",
        org: "OTUS, Russia",
        year: "2021",
    }
];