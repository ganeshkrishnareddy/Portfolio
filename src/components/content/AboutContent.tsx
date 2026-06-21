'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Shield, Terminal as TerminalIcon } from 'lucide-react';
import { SkillBadge } from '@/components/SkillBadge';

export function AboutContent() {
        const skills = {
            "Security Domains": ["SOC Operations", "Penetration Testing", "Application Security", "Network Security", "Threat Detection"],
            "Security Tools": ["Burp Suite", "Wireshark", "Wazuh (SIEM/EDR)", "Nmap", "Metasploit"],
            "Detection & Defense": ["IDS/IPS", "Phishing Detection", "Log Analysis", "Anomaly Detection"],
            "Programming & Frameworks": ["Python", "FastAPI", "Next.js", "JavaScript", "Bash", "HTML", "CSS"],
            "Concepts": ["OWASP ASVS", "SSL Pinning", "RBAC", "API Security", "CVE Research", "Secure Storage"]
        };

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 space-y-20">
            {/* Header */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:col-span-8 space-y-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary">About Me</h1>
                    <p className="text-xl text-text-muted leading-relaxed">
                        I am a final-year Computer Science student focused on building <b>secure, scalable software systems</b>.
                        My work combines full-stack development (React, Node.js, databases, cloud) with cybersecurity practices
                        such as application security testing, Linux hardening, and secure authentication.
                    </p>
                    <p className="text-lg text-text-muted leading-relaxed">
                        I approach security as part of the software engineering lifecycle — not as a separate role.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-4 flex justify-center"
                >
                    <div className="relative w-[220px] h-[220px] group">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Brackets */}
                        <div className="absolute top-[-6px] left-[-6px] w-4 h-4 border-t-2 border-l-2 border-primary rounded-tl" />
                        <div className="absolute top-[-6px] right-[-6px] w-4 h-4 border-t-2 border-r-2 border-primary rounded-tr" />
                        <div className="absolute bottom-[-6px] left-[-6px] w-4 h-4 border-b-2 border-l-2 border-primary rounded-bl" />
                        <div className="absolute bottom-[-6px] right-[-6px] w-4 h-4 border-b-2 border-r-2 border-primary rounded-br" />

                        {/* Image Frame */}
                        <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-surface relative z-10">
                            <img 
                                src="/profile.jpeg" 
                                alt="P Ganesh Krishna Reddy" 
                                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-[30%] -top-[30%] animate-scan pointer-events-none z-20" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* How I Approach Security - Engineering Maturity */}
            <section className="bg-surface/30 border border-surface rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    How I Approach Security
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <h3 className="font-bold text-text-primary text-lg">Threat Modeling First</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Before scanning, I analyze the architecture to understand critical assets and potential attack vectors.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-text-primary text-lg">Validation & Proof</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            I don&apos;t just report scanner outputs. I validate findings with reproducible steps (PoCs) to eliminate false positives.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold text-text-primary text-lg">Remediation Focused</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Finding bugs is half the job. I provide engineers with clear, actionable context to fix issues at the root.
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Experience</h2>
                </div>

                <div className="relative border-l-2 border-surface ml-3 pl-8 space-y-10">
                    <div className="relative">
                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                        <div className="space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-xl font-bold text-text-primary">Technical Lead (Cyber Security)</h3>
                                <span className="text-sm font-mono text-text-muted">Apr 2026 - Present</span>
                            </div>
                            <div className="text-secondary font-medium">Zentoja Technologies Private Limited <span className="text-text-muted font-normal">• Remote</span></div>
                            <ul className="list-disc list-inside text-text-muted space-y-2 pt-2">
                                <li>Established and implemented cybersecurity policies and security standards to strengthen the organization’s security posture.</li>
                                <li>Led security initiatives including vulnerability assessment, risk identification, remediation tracking, and security compliance.</li>
                                <li>Developed security awareness resources, best-practice documentation, and security guidelines for internal teams.</li>
                                <li>Performed threat analysis, log review, and incident monitoring to proactively detect and respond to security events.</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <SkillBadge name="Kali Linux" level="Applied" className="border-surface" />
                                <SkillBadge name="Burp Suite" level="Applied" className="border-surface" />
                                <SkillBadge name="Wireshark" level="Applied" className="border-surface" />
                                <SkillBadge name="Metasploit" level="Applied" className="border-surface" />
                                <SkillBadge name="Wazuh" level="Applied" className="border-surface" />
                                <SkillBadge name="Linux" level="Applied" className="border-surface" />
                                <SkillBadge name="Cloud Security" level="Applied" className="border-surface" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2 pb-2 border-b border-surface">
                    <TerminalIcon className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Technical Arsenal</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors">
                            <h3 className="text-lg font-bold text-text-primary mb-4">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map(skill => (
                                    <SkillBadge key={skill} name={skill} className="bg-background text-text-muted" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education & Certs */}
            <div className="grid md:grid-cols-2 gap-12">
                <section className="space-y-8">
                    <div className="flex items-center gap-2 pb-2 border-b border-surface">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-text-primary">Education</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">B.Tech in Computer Science and Engineering</h3>
                            <div className="text-text-muted">(Cyber Security)</div>
                            <div className="text-secondary">Lovely Professional University</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2022 - 2026</div>
                            <div className="text-sm text-text-muted mt-2">CGPA: 7.51</div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">Intermediate (MPC)</h3>
                            <div className="text-secondary">Narayana Junior College</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2020 - 2022</div>
                            <div className="text-sm text-text-muted mt-2">Percentage: 79.4%</div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-text-primary">Secondary Education</h3>
                            <div className="text-secondary">Narayana E.M High School</div>
                            <div className="text-sm text-text-muted font-mono mt-1">2019 - 2020</div>
                            <div className="text-sm text-text-muted mt-2">Percentage: 98%</div>
                        </div>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="flex items-center gap-2 pb-2 border-b border-surface">
                        <Award className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-text-primary">Certifications</h2>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">QuickHeal Certified Malware Analyst</h3>
                                <div className="text-sm text-text-muted">QuickHeal</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Dec 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">CompTIA Network+, Security+, CySA+, PenTest+</h3>
                                <div className="text-sm text-text-muted">CompTIA</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Aug 2025</span>
                        </li>
                        <li className="flex items-start justify-between group">
                            <div>
                                <h3 className="font-bold text-text-primary group-hover:text-primary transition-colors">QuickHeal Certified Digital Forensic Investigator</h3>
                                <div className="text-sm text-text-muted">QuickHeal</div>
                            </div>
                            <span className="text-xs font-mono text-text-muted border border-surface px-2 py-1 rounded">Jan 2025</span>
                        </li>
                    </ul>
                </section>
            </div>

            {/* Achievements Section */}
            <section className="space-y-8 pt-8 border-t border-surface">
                <div className="flex items-center gap-2 pb-2">
                    <Award className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl font-bold text-text-primary">Key Achievements</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">Reliance Foundation Scholarship</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Awarded the prestigious scholarship worth <b>Rs. 2,00,000</b> for academic excellence in engineering.
                        </p>
                    </div>
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">Bug Bounty Programs</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Participated in bug bounty programs, identifying and responsibly disclosing vulnerabilities in web applications.
                        </p>
                    </div>
                    <div className="bg-surface/30 p-6 rounded-lg border border-surface hover:border-surface-hover transition-colors space-y-2">
                        <div className="text-lg font-bold text-primary">Best Freelancer of 2024</div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Recognized as <b>Best Freelancer of 2024</b> by IPSE; completed CS50 certification by Harvard University.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
