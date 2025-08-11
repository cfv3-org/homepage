import React, {useEffect, useMemo} from "react";
import {education, experience, profile, skills} from "./data/context";
import {
    MapPin,
    Phone,
    Mail,
    Linkedin as InIcon,
    Github as GhIcon,
    GraduationCap
} from "lucide-react";

const MAX_BULLETS = 10;
const SKILL_LIMIT = 100;

const Row = ({children, className = ""}: { children: React.ReactNode; className?: string }) => (
    <div className={`flex flex-row flex-wrap items-baseline gap-x-2 ${className}`}>{children}</div>
);

const SectionTitle = ({children}: { children: React.ReactNode }) => (
    <h2 className="text-[12pt] font-semibold tracking-tight border-b border-black/5 pb-1">{children}</h2>
);

export default function CVPage() {
    useEffect(() => {
        const shouldPrint = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("print") !== null;
        if (shouldPrint) setTimeout(() => window.print(), 100);
    }, []);

    const topSkills = useMemo(() => skills.slice(0, SKILL_LIMIT), []);

    return (
        <div className="bg-white text-zinc-900 print:bg-white print:text-black">
            <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white; }
          a { color: inherit; text-decoration: none; }
        }
        .avoid { break-inside: avoid; page-break-inside: avoid; }
      `}</style>
            <div className="mx-auto max-w-[1060px] print:w-[210mm] px-8 py-8 md:px-10 md:py-10 print:px-0 print:py-0">
                <header className="avoid">
                    <h1 className="text-[20pt] font-bold leading-tight">{profile.name}</h1>
                    <Row className="mt-1 text-[10.5pt] text-zinc-700">
                        <span className="font-medium">{profile.role}</span>
                        <span>·</span>
                        <span>{profile.location}</span>
                    </Row>
                </header>
                <div className="mt-4 grid grid-cols-[1.25fr_0.45fr] gap-10">
                    <main>
                        <section className="avoid">
                            <SectionTitle>Career Summary</SectionTitle>
                            <p className="mt-2 text-[10.5pt] leading-[1.35]">
                                {profile.summary}
                            </p>
                        </section>
                        <section className="mt-4">
                            <SectionTitle>Experience</SectionTitle>
                            <div className="mt-2 space-y-3">
                                {experience.map((e, idx) => (
                                    <div key={idx} className="avoid">
                                        <Row className="justify-between text-[11pt]">
                                            <span className="font-semibold">{e.company}</span>
                                            <span className="text-zinc-600">{e.period}</span>
                                        </Row>
                                        <Row className="text-[10.5pt] text-zinc-700 mt-0.5">
                                            <span>{e.title}</span>
                                            <span>·</span>
                                            <span>{e.location}</span>
                                        </Row>
                                        <ul className="list-disc ml-5 mt-1 space-y-1 text-[10.5pt] leading-[1.35]">
                                            {e.bullets.slice(0, MAX_BULLETS).map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                    <aside className="space-y-4">
                        <section className="avoid">
                            <SectionTitle>Contacts</SectionTitle>
                            <ul className="mt-2 space-y-1.5 text-[10.5pt]">
                                <li className="flex items-start gap-2">
                                    <MapPin className="h-[12pt] w-[12pt] mt-[1px]"/>
                                    <span>{profile.location}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="h-[12pt] w-[12pt] mt-[1px]"/>
                                    <span>{profile.links.phone}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Mail className="h-[12pt] w-[12pt] mt-[1px]"/>
                                    <a href={profile.links.email}
                                       className="underline decoration-black/30 underline-offset-2">
                                        {profile.links.email.replace("mailto:", "")}
                                    </a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <InIcon className="h-[12pt] w-[12pt]"/>
                                    <a href={profile.links.linkedin}>linkedin.com/in/viktor-gievoi</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <GhIcon className="h-[12pt] w-[12pt]"/>
                                    <a href={profile.links.github}>github.com/vasary</a>
                                </li>
                            </ul>
                        </section>
                        <section className="avoid">
                            <SectionTitle>Core Skills</SectionTitle>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                {topSkills.map((s) => (
                                    <span key={s}
                                          className="px-2 py-0.5 rounded border border-black/10 text-[9.5pt]">{s}</span>
                                ))}
                            </div>
                        </section>
                        <section className="avoid">
                            <SectionTitle>Languages</SectionTitle>
                            <ul className="mt-2 space-y-1 text-[10.5pt]">
                                {profile.languages.map((l, i) => (
                                    <li key={i}>
                                        {l.name} — {l.level}
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="avoid">
                            <SectionTitle>Education</SectionTitle>
                            <ul className="mt-2 space-y-2 text-[10.5pt]">
                                {education.map((ed, i) => (
                                    <li key={i} className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap className="h-[12pt] w-[12pt]"/>
                                            <span className="font-medium">{ed.place}</span>
                                        </div>
                                        <span className="text-zinc-600">{ed.org} · {ed.year}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    );
}
