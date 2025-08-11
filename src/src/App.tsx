import {useEffect, useState} from "react";
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    FileDown,
    MapPin,
    ChevronRight,
    Terminal,
    Briefcase,
    GraduationCap
} from "lucide-react";
import {motion} from "framer-motion";

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

const profile = {
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
    ]
};

const skills: string[] = [
    "PHP", "GoLang", "Kotlin", "Node.js", "TypeScript", "DDD", "Event Sourcing", "Event-Driven", "Symfony", "Laravel", "PostgreSQL",
    "Redis", "Memcached", "RabbitMQ", "Kafka", "gRPC", "REST", "GraphQL", "Kubernetes", "Docker", "Helm", "Argo CD", "MetalLB",
    "ExternalDNS", "Vault", "Prometheus", "Grafana", "Jaeger", "ELK", "AWS", "GCP", "CI/CD", "NAS"
];

const experience: ExperienceItem[] = [
    {
        company: "Billie",
        title: "Software Developer",
        period: "Oct 2024 — Present",
        location: "Germany · Hybrid",
        bullets: [
            "Co-architected and delivered a core payment processing service from scratch using Kotlin, DDD, and event-driven architecture on Kafka",
            "Designed, implemented, and deployed a system that batches and executes all company payment transactions, ensuring accuracy and reliability in production",
            "Adapted quickly to Kotlin as a new primary language, applying best practices to produce maintainable, high-quality code",
            "Served as the primary engineering contact for infrastructure-related issues, leveraging deep DevOps experience",
            "Participated in on-call rotations, resolving critical incidents in a highly distributed financial platform",
        ],
    },
    {
        company: "Turbine Kreuzberg",
        title: "Senior Software Developer",
        period: "May 2022 — Sep 2024",
        location: "Berlin, Germany",
        bullets: [
            "Developed and maintained large-scale B2B e-commerce solutions on Spryker, delivering stable, high-quality features with minimal defects",
            "Led backend development tasks including asynchronous workflows, system integrations, and internal service enhancements",
            "Acted as a key liaison with the infrastructure team, leveraging prior DevOps expertise to resolve complex deployment and scaling issues",
            "Adapted to a new work environment in the EU, successfully transitioning to English-language professional communication",
            "Maintained strong delivery performance despite rapid relocation and cultural transition, establishing a foundation for long-term career growth in the region",
        ],
    },
    {
        company: "PimPay",
        title: "Solution Architect",
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
        title: "Solution Architect",
        period: "Apr 2019 — Jul 2020",
        location: "Moscow, Russia",
        bullets: [
            "Led a full engineering team brought in to stabilize and modernize a mission-critical, Erlang-based distributed payment processing platform",
            "Refactored and re-engineered core components, restoring platform stability and reliability for enterprise clients",
            "Gradually migrated critical services from Erlang to PHP and Go, improving maintainability and developer onboarding",
            "Acted as both architect and de-facto CTO, liaising with business stakeholders to align technical priorities with strategic goals",
            "Oversaw DevOps operations including data center work (BST, M9), network equipment configuration, and server provisioning",
            "Implemented Nutanix-based infrastructure improvements to increase resilience and simplify management",
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
        location: "Kyrgyzstan",
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

const education: EducationItem[] = [
    {
        place: "Automated Systems Engineering",
        org: "Kyrgyz State Technical University, Kyrgyzstan",
        year: "2014",
    },
    {
        place: "System Architect",
        org: "OTUS",
        year: "2021",
    },
    {
        place: "Highload Systems Architect",
        org: "OTUS",
        year: "2021",
    }
];

const Section = ({id, title, children}: { id: string; title: string; children: React.ReactNode }) => (
    <section id={id} className="scroll-mt-24 md:py-6">
        <div className="max-w-5xl mx-auto px-4">
            <motion.h2
                initial={{opacity: 0, y: 8}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="text-2xl md:text-3xl font-semibold tracking-tight"
            >
                {title}
            </motion.h2>
            <div className="mt-8">{children}</div>
        </div>
    </section>
);

const Pill = ({children}: { children: React.ReactNode }) => (
    <span
        className="inline-flex items-center px-3 py-1 rounded-full ring-1 ring-black/10 dark:ring-white/10 bg-white/60 dark:bg-white/5 backdrop-blur text-sm leading-5">
    {children}
  </span>
);

const Card = ({children, className = ""}: { children: React.ReactNode; className?: string }) => (
    <div
        className={`rounded-2xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-sm ${className}`}>
        {children}
    </div>
);

export default function Portfolio() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-50">
            <header
                className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-zinc-900/60 border-b border-black/5 dark:border-white/10">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <a href="#top" className="font-semibold tracking-tight">{profile.name}</a>
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a href="#about" className="hover:opacity-70">About</a>
                        <a href="#skills" className="hover:opacity-70">Skills</a>
                        <a href="#experience" className="hover:opacity-70">Experience</a>
                        <a href="#contact" className="hover:opacity-70">Contact</a>
                    </nav>
                    <a href={profile.cvUrl}
                       target="_blank"
                       className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                        <FileDown size={16}/> CV
                    </a>
                </div>
            </header>

            <main id="top" className="max-w-5xl mx-auto px-4">
                <section className="py-16 md:py-24">
                    <div className="grid md:grid-cols-[auto,1fr] items-center gap-8">
                        <motion.img
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6}}
                            src={profile.avatar}
                            alt={profile.name}
                            className="h-28 w-28 md:h-32 md:w-32 rounded-full ring-4 ring-white dark:ring-zinc-900 shadow"
                        />
                        <div>
                            <motion.h1
                                initial={{opacity: 0, y: 8}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                                className="text-3xl md:text-5xl font-bold tracking-tight"
                            >
                                {profile.role}
                            </motion.h1>
                            <p className="mt-3 text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                                {profile.summary}
                            </p>
                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <Pill><MapPin className="mr-2 h-4 w-4"/>{profile.location}</Pill>
                                <a href={profile.links.linkedin}
                                   target="_blank"
                                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ring-1 ring-black/10 dark:ring-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                                    <Linkedin size={16}/> LinkedIn
                                </a>
                                <a href={profile.links.github}
                                   target="_blank"
                                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ring-1 ring-black/10 dark:ring-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">
                                    <Github size={16}/> GitHub
                                </a>
                                <a href={profile.links.email}
                                   target="_blank"
                                   className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ring-1 ring-black/10 dark:ring-white/10">
                                    <Mail size={16}/> Email
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Section id="about" title="About Me">
                <Card>
                    <div className="p-6 md:p-8">
                        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            I specialize in backend engineering, infrastructure, and enhancing developer experience.
                            My focus is on designing transparent, well-instrumented systems where logging, metrics,
                            tracing, and alerting are embedded from the start. I thrive in collaborative environments,
                            establishing robust CI/CD pipelines, and applying proven quality practices such as code
                            reviews, TDD, and automated checks to deliver reliable, maintainable solutions that scale.
                        </p>
                        <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                            <li className="flex items-start gap-2">
                                <Terminal className="mt-0.5 h-4 w-4"/>DDD, Event-Driven, reliable integrations
                            </li>
                            <li className="flex items-start gap-2">
                                <Terminal className="mt-0.5 h-4 w-4"/>Observability: Prometheus, Grafana, Jaeger
                            </li>
                            <li className="flex items-start gap-2">
                                <Terminal className="mt-0.5 h-4 w-4"/>Kubernetes, Helm, Argo CD, GitOps
                            </li>
                            <li className="flex items-start gap-2">
                                <Terminal className="mt-0.5 h-4 w-4"/>PostgreSQL, Redis, Queues (RabbitMQ/Kafka)
                            </li>
                        </ul>
                        <h4 className="mt-8 font-semibold text-zinc-800 dark:text-zinc-200">Languages</h4>
                        <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                            {profile.languages.map((lang, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-lg">{lang.icon}</span>
                                    <span>{lang.name} — {lang.level}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </Section>

            <Section id="skills" title="Skills">
                <Card>
                    <div className="p-6 md:p-8">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {skills.map((s) => (
                                <div key={s}
                                     className="flex items-center justify-center px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 ring-1 ring-black/5 dark:ring-white/10 text-sm">
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </Section>

            <Section id="experience" title="Experience">
                <div className="grid gap-6">
                    {experience.map((e, idx) => (
                        <Card key={idx}>
                            <div className="p-6 md:p-8">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Pill><Briefcase className="mr-2 h-4 w-4"/>{e.title}</Pill>
                                    <Pill>{e.company}</Pill>
                                    <Pill>{e.period}</Pill>
                                </div>
                                <p className="mt-2 text-sm text-zinc-500">{e.location}</p>
                                <ul className="mt-4 space-y-2 text-zinc-700 dark:text-zinc-300">
                                    {e.bullets.map((b, i) => (
                                        <li key={i} className="flex gap-2"><ChevronRight
                                            className="h-5 w-5 shrink-0 mt-0.5"/>{b}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section id="education" title="Education">
                <Card>
                    <div className="p-6 md:p-8">
                        <ul className="grid gap-3">
                            {education.map((ed, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                                    <GraduationCap className="h-5 w-5" />
                                    <span className="font-medium">{ed.place}</span>
                                    <span className="opacity-70">· {ed.org}</span>
                                    <span className="ml-auto text-sm opacity-70">{ed.year}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </Section>

            <Section id="contact" title="Contact">
                <Card>
                    <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
                        <img src={profile.avatar} alt=""
                             className="h-16 w-16 rounded-full ring-4 ring-white dark:ring-zinc-900"/>
                        <div className="grow">
                            <h3 className="text-xl font-semibold">Let's work together</h3>
                            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                                Open to full-time/contract offers. Prefer product teams, transparent processes, and
                                solid engineering practices.
                            </p>
                            <p className="mt-2 text-sm text-zinc-500 flex items-center gap-2">
                                <Phone size={16}/>
                                {profile.links.phone}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <a href={profile.links.linkedin}
                               className="inline-flex items-center gap-2 px-4 py-2 rounded-xl ring-1 ring-black/10 dark:ring-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"><Linkedin
                                size={18}/> LinkedIn</a>
                            <a href={profile.links.github}
                               className="inline-flex items-center gap-2 px-4 py-2 rounded-xl ring-1 ring-black/10 dark:ring-white/10"><Github
                                size={18}/> GitHub</a>
                            <a href={profile.links.email}
                               className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black"><Mail
                                size={18}/> Email</a>
                        </div>
                    </div>
                </Card>
            </Section>

            <footer className="py-10 text-center text-sm text-zinc-500">
                © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
            </footer>
        </div>
    );
}
