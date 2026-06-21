'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { ParticleBackground } from '@/components/3d/ParticleBackground';
import { ArrowRight, Shield, Terminal as TerminalIcon, ShieldCheck, Lock, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ProjectCard } from '@/components/ProjectCard';
import { TiltCard } from '@/components/3d/TiltCard';

export default function Home() {
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditProgress, setAuditProgress] = useState(0);
  const [showAuditResults, setShowAuditResults] = useState(false);

  const runAudit = () => {
    setIsAuditing(true);
    setAuditProgress(0);
    setShowAuditResults(false);
  };

  useEffect(() => {
    if (isAuditing) {
      const interval = setInterval(() => {
        setAuditProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsAuditing(false);
              setShowAuditResults(true);
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAuditing]);

  return (
    <div className="flex flex-col gap-12 md:gap-20 pb-12 md:pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50" />
          <ParticleBackground />

          {/* Scanning Animation */}
          <AnimatePresence>
            {isAuditing && (
              <motion.div
                initial={{ top: '0%' }}
                animate={{ top: '100%' }}
                transition={{ duration: 2.5, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        <div className="container max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure Software Engineer | Cybersecurity & Full-Stack</span>
              </div>

              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight text-text-primary">
                Building & Defending Systems <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  with Engineering Precision.
                </span>
              </h1>
              <p className="text-sm text-text-muted font-mono tracking-wide">
                Secure Software Engineer • Full-Stack Development • Application Security
              </p>

              <p className="text-xl text-text-muted max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Architecting resilient systems by combining deep full-stack engineering with a security-first defensive mindset.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="gap-2">
                    Explore Projects
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/journey">
                  <Button variant="outline" size="lg" className="gap-2">
                    Engineering Journey
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  onClick={runAudit}
                  variant="ghost"
                  size="lg"
                  className={clsx(
                    "gap-2 border border-white/5 bg-white/5 hover:bg-white/10 transition-all group",
                    isAuditing && "opacity-50 pointer-events-none"
                  )}
                >
                  <TerminalIcon className={clsx("w-4 h-4", isAuditing ? "animate-pulse" : "group-hover:text-primary transition-colors")} />
                  {isAuditing ? `Auditing System... ${auditProgress}%` : "Run Technical Audit"}
                </Button>
              </div>

              {/* Audit Results Overlay */}
              <AnimatePresence>
                {showAuditResults && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20 backdrop-blur-md max-w-2xl mx-auto md:mx-0"
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                        <span className="text-sm font-bold text-text-primary tracking-tight">Technical Audit Complete</span>
                      </div>
                      <div className="flex gap-4">
                        {[
                          { label: 'Latency', value: '18ms', color: 'text-primary' },
                          { label: 'Security', value: 'Grade A', color: 'text-secondary' },
                          { label: 'Accessibility', value: '100', color: 'text-blue-400' }
                        ].map((stat, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold">{stat.label}</span>
                            <span className={clsx("text-sm font-mono font-bold", stat.color)}>{stat.value}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setShowAuditResults(false)}
                        className="text-[10px] uppercase font-bold text-text-muted hover:text-text-primary transition-colors"
                      >
                        Dismiss
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Glowing Cyberpunk Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 flex justify-center items-center relative py-8 md:py-0"
            >
              <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] group">
                {/* Outer Holographic Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Outer Rotating Dotted Ring */}
                <div className="absolute inset-[-12px] rounded-3xl border border-primary/20 border-dashed animate-[spin_30s_linear_infinite] pointer-events-none" />
                
                {/* Inner Counter-Rotating Double Ring */}
                <div className="absolute inset-[-24px] rounded-3xl border border-secondary/15 border-double animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
                
                {/* Tech brackets / corners */}
                <div className="absolute top-[-6px] left-[-6px] w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg pointer-events-none" />
                <div className="absolute top-[-6px] right-[-6px] w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-[-6px] left-[-6px] w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg pointer-events-none" />
                <div className="absolute bottom-[-6px] right-[-6px] w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg pointer-events-none" />
                
                {/* Image Mask/Container */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-surface relative z-10">
                  {/* Profile Image */}
                  <img 
                    src="/profile.jpeg" 
                    alt="P Ganesh Krishna Reddy" 
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Cyber Scanning Scanline overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-full h-[30%] -top-[30%] animate-scan pointer-events-none z-20" />
                  
                  {/* Cyber grid pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-15" />
                  
                  {/* Holographic tint overlay */}
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Floating Status Badge */}
                <div className="absolute -bottom-3 -right-3 z-20 px-3 py-1 rounded-md bg-background border border-primary/40 text-[10px] font-mono text-primary shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                  SYS_SEC: ACTIVE
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </section>



      {/* Top Expertise & Certifications */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Industry-Recognized Certifications */}
          <div className="p-8 rounded-2xl bg-surface/30 border border-surface backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Industry-Recognized Certifications</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "CompTIA CySA+", issuer: "Cybersecurity Analyst", color: "from-primary/20", icon: "🛡️" },
                { name: "CompTIA PenTest+", issuer: "Penetration Tester", color: "from-secondary/20", icon: "⚔️" }
              ].map((cert, i) => (
                <div key={i} className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} to-transparent border border-white/5 space-y-1 group hover:border-primary/50 transition-colors`}>
                  <div className="text-lg mb-1">{cert.icon}</div>
                  <div className="font-bold text-text-primary">{cert.name}</div>
                  <div className="text-xs text-text-muted">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Expertise Slots */}
          <div className="p-8 rounded-2xl bg-surface/30 border border-surface backdrop-blur-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Lock className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Core Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Application Security', 'Secure System Design', 'Full-Stack Engineering', 'Cloud Security', 'DevSecOps', 'Threat Modeling'].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-text-muted hover:text-primary hover:border-primary/50 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brief Skills / Stats */}
      <section className="border-y border-surface bg-surface/30">
        <div className="container max-w-7xl mx-auto px-4 py-10 md:py-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-text-primary">Engineering Impact</h2>
            <p className="text-text-muted">Quantifiable achievements from engineering security-first architectures and conducting in-depth vulnerability research.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: "Critical Vulnerabilities Remediated", value: "50+", context: "Identified and fixed across labs, academic projects, and production-style environments", icon: Shield },
              { label: "Secure Websites Deployed", value: "10+", context: "Architected and delivered via ProgVision for global clients", icon: Globe },
            ].map((stat, i) => (
              <TiltCard key={i} className="p-8 rounded-2xl bg-surface/50 border border-surface shadow-xl shadow-primary/5">
                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <div className="p-4 bg-primary/10 rounded-full border border-primary/20">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl font-extrabold text-text-primary tracking-tight">{stat.value}</div>
                  <div className="text-lg font-bold text-text-primary">{stat.label}</div>
                  <div className="text-sm text-text-muted leading-relaxed opacity-80">{stat.context}</div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between border-b border-surface pb-4">
            <div>
              <h2 className="text-3xl font-bold text-text-primary">Featured Secure Engineering Projects</h2>
              <p className="text-text-muted mt-2">Selected work combining engineering and security. Each project addresses specific security challenges while delivering robust functionality.</p>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="SentinelMind – Autonomous Threat Guardian for Agentic AI Systems"
              description="Zero-trust security layer and real-time monitoring gateway built for multi-agent AI ecosystems. Developed for the Microsoft Build AI Hackathon."
              whyItMatters="Protects autonomous agent networks against adversarial prompt injections and privilege escalations with sub-12ms interception latency."
              problem="As AI agents transition to taking autonomous, real-world actions, they become vulnerable to adversarial command hijacking, privilege escalation, and data exfiltration from compromised internal components."
              methodology="Designed a zero-trust scoring engine with keyword analyzers and payload inspection. Built a highly responsive Next.js dashboard with Recharts telemetry visualizing threat vectors in real-time."
              outcome="Achieved sub-12ms mitigation gateway latency with customizable threshold blocking (ALLOW / QUARANTINE / BLOCK) and immutable action audit logging."
              tags={["AI/ML Security", "Next.js", "TypeScript", "Zero-Trust", "Threat Defense"]}
              githubUrl="https://github.com/ganeshkrishnareddy/Sentinel-Mind"
            />
            <ProjectCard
              title="CRAG – Cognitive Resilience and Automated Governance"
              description="Built an AI-powered third-party vendor risk monitoring prototype with real-time risk scoring (0–100) and automated alerts."
              whyItMatters="Provides continuous risk visibility and automated compliance auditing for third-party vendor ecosystems."
              problem="Organizations struggle to monitor vendor risks in real-time, often relying on manual periodic surveys that fail to capture immediate threat posture changes."
              methodology="Implemented RBAC for Admin/Vendor views, APScheduler-driven dynamic scoring engine, and compliance audit log. Designed a live glassmorphism dashboard with Chart.js visualizations."
              outcome="Delivered a dynamic risk score monitoring dashboard with continuous vendor risk visibility, backed by FastAPI, SQLAlchemy, and Firebase."
              tags={["Full-Stack", "AI Governance", "FastAPI", "SQLAlchemy", "Firebase"]}
              githubUrl="https://github.com/ganeshkrishnareddy/CRAG"
            />
          </div>

          <Link href="/projects" className="sm:hidden flex items-center justify-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-4">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
