import React, {useEffect, useState} from "react";
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
import {education, experience, profile, skills} from "./data/context";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

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
                    <button
                       onClick={() => navigate("/cv?print")}
                       className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                        <FileDown size={16}/> CV
                    </button>
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
