'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Contact() {
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
    ];

    const contactData = [
        {
            label: 'Email',
            value: 'tyagii.vishnu@gmail.com',
            href: 'mailto:tyagii.vishnu@gmail.com',
            icon: <SiGmail />,
            color: 'group-hover:text-[#EA4335]',
        },
        {
            label: 'LinkedIn',
            value: '@vishnutyagii',
            href: 'https://linkedin.com/in/vishnutyagii/',
            icon: <FaLinkedin />,
            color: 'group-hover:text-[#0A66C2]',
        },
        {
            label: 'GitHub',
            value: '@vishnutyagii',
            href: 'https://github.com/vishnutyagii',
            icon: <FaGithub />,
            color: 'group-hover:text-white',
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="relative w-full overflow-hidden pb-12 pt-24">

            <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
                <div className="mb-16 grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-300">Get In Touch</p>
                        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-white md:text-7xl">
                            Let&apos;s build something clear, useful, and memorable.
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
                            I&apos;m open to internships, freelance opportunities, collaborations, and conversations around modern web development, UI engineering, and AI-powered product ideas.
                        </p>
                    </motion.div>

                    <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-md">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent" />
                        <p className="text-sm font-semibold text-white">Quick Navigation</p>
                        <nav className="mt-6 grid grid-cols-2 gap-3 text-sm text-neutral-400">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 transition-colors duration-300 hover:border-white/15 hover:text-orange-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="mb-16 grid gap-4 md:grid-cols-3">
                    {contactData.map((card, i) => (
                        <motion.a
                            key={card.label}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-70" />
                            <div className={`mb-12 text-4xl text-neutral-600 transition-colors duration-500 ${card.color}`}>
                                {card.icon}
                            </div>
                            <div>
                                <p className="mb-1 text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">{card.label}</p>
                                <p className="text-lg font-medium text-neutral-200">{card.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-600">
                        © {new Date().getFullYear()} Vishnu Tyagi • Crafted with Next.js and motion
                    </p>
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="rounded-full bg-white/5 p-4 text-white transition-all duration-300 hover:bg-orange-500 hover:text-black"
                    >
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
}
