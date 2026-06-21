'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Link from 'next/link';

export function ContactContent() {
    return (
        <div className="container max-w-7xl mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Let&apos;s Build & Secure Something.</h1>
                        <p className="text-xl text-text-muted leading-relaxed">
                            Open to opportunities in Secure Software Engineering, Backend Development, and Application Security.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-surface/30 border border-surface hover:border-primary/50 transition-colors">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-sm text-text-muted">Email</div>
                                <a href="mailto:pganeshkrishnareddy@gmail.com" className="text-lg font-bold text-text-primary hover:text-primary transition-colors">pganeshkrishnareddy@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Link href="https://linkedin.com/in/pganeshkrishnareddy" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-surface/30 border border-surface hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all group">
                                <Linkedin className="w-5 h-5 text-text-muted group-hover:text-[#0077b5] transition-colors" />
                                <span className="font-bold text-text-primary group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com/ganeshkrishnareddy" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-surface/30 border border-surface hover:border-[#333]/50 hover:bg-[#333]/10 transition-all group">
                                <Github className="w-5 h-5 text-text-muted group-hover:text-white transition-colors" />
                                <span className="font-bold text-text-primary group-hover:text-white transition-colors">GitHub</span>
                            </Link>
                        </div>

                        {/* Security & Hacker Profiles */}
                        <div className="space-y-4 pt-2">
                            <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">Hacker & Security Profiles</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {[
                                    { name: "HackerOne", url: "https://hackerone.com/pganeshkrishnareddy", borderHover: "hover:border-[#ff6600]/50 hover:bg-[#ff6600]/5", textHover: "hover:text-[#ff6600]" },
                                    { name: "YesWeHack", url: "https://yeswehack.com/hunters/pganeshkrishnareddy", borderHover: "hover:border-[#e91e63]/50 hover:bg-[#e91e63]/5", textHover: "hover:text-[#e91e63]" },
                                    { name: "Hack The Box", url: "https://profile.hackthebox.com/profile/019ec51d-f016-710d-88bb-8a98ebb8cc9b", borderHover: "hover:border-[#9fe522]/50 hover:bg-[#9fe522]/5", textHover: "hover:text-[#9fe522]" },
                                    { name: "TryHackMe", url: "https://tryhackme.com/p/pganeshkrishnareddy", borderHover: "hover:border-[#de112b]/50 hover:bg-[#de112b]/5", textHover: "hover:text-[#de112b]" },
                                    { name: "Comolho", url: "https://cyber.comolho.com/researcher/profile/pganeshkrishnareddy_7104d6dc/", borderHover: "hover:border-[#00bcd4]/50 hover:bg-[#00bcd4]/5", textHover: "hover:text-[#00bcd4]" },
                                    { name: "HackerEarth", url: "https://www.hackerearth.com/@pganeshkrishnareddy/", borderHover: "hover:border-[#20d48a]/50 hover:bg-[#20d48a]/5", textHover: "hover:text-[#20d48a]" },
                                ].map((profile) => (
                                    <Link 
                                        key={profile.name}
                                        href={profile.url} 
                                        target="_blank" 
                                        className={`flex items-center justify-center p-3 rounded-lg bg-surface/30 border border-surface text-xs font-bold text-text-muted hover:text-text-primary transition-all ${profile.borderHover} ${profile.textHover}`}
                                    >
                                        {profile.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Social Profiles */}
                        <div className="space-y-4 pt-2">
                            <h3 className="text-sm font-mono text-text-muted uppercase tracking-wider">Social Channels</h3>
                            <div className="flex gap-4">
                                <Link href="https://x.com/_this_is_ganesh" target="_blank" className="flex-1 flex items-center justify-center gap-2 p-4 rounded-lg bg-surface/30 border border-surface hover:border-primary/50 hover:bg-primary/5 transition-all group">
                                    <span className="font-bold text-text-primary group-hover:text-primary transition-colors flex items-center gap-2">
                                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                        </svg>
                                        X (formerly Twitter)
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-surface/30 p-8 rounded-2xl border border-surface relative overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-text-primary">Send a Message</h2>
                            <p className="text-sm text-text-muted mt-1">Typically responds within 24–48 hours</p>
                        </div>
                        <Link
                            href="https://linkedin.com/in/pganeshkrishnareddy"
                            target="_blank"
                            className="p-3 bg-surface rounded-full border border-surface-hover hover:border-[#0077b5]/50 text-text-muted hover:text-[#0077b5] transition-all"
                            title="Connect on LinkedIn"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>

                    <form
                        className="space-y-6"
                        action="https://formspree.io/f/xojvdgbl"
                        method="POST"
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-text-primary">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-background rounded-lg border border-surface-hover focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted/50 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-text-primary">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@example.com"
                                className="w-full px-4 py-3 bg-background rounded-lg border border-surface-hover focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted/50 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-text-primary">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Hello, I'd like to discuss a secure engineering role..."
                                className="w-full px-4 py-3 bg-background rounded-lg border border-surface-hover focus:border-primary focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted/50 outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="space-y-4">
                            <Button type="submit" size="lg" className="w-full gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </Button>

                            <p className="text-center text-xs text-text-muted">
                                Prefer direct email? <a href="mailto:pganeshkrishnareddy@gmail.com" className="text-primary hover:underline">pganeshkrishnareddy@gmail.com</a>
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
