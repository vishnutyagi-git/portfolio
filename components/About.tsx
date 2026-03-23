'use client';

import { motion } from 'framer-motion';

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const focusItems = [
        { icon: '01', text: 'B.Tech in Computer Science with AI & ML specialization', glow: 'rgba(249, 115, 22, 0.14)', border: 'rgba(249, 115, 22, 0.28)' },
        { icon: '02', text: 'Full-stack web apps built with React, Next.js, and Node.js', glow: 'rgba(56, 189, 248, 0.14)', border: 'rgba(56, 189, 248, 0.28)' },
        { icon: '03', text: 'AI features integrated into practical product experiences', glow: 'rgba(20, 184, 166, 0.14)', border: 'rgba(20, 184, 166, 0.28)' },
        { icon: '04', text: 'Deep interest in performance, usability, and clean systems', glow: 'rgba(99, 102, 241, 0.14)', border: 'rgba(99, 102, 241, 0.28)' },
    ];

    return (
        <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="absolute left-0 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-orange-500/5 blur-[120px]" />
            <div className="absolute right-[-8%] top-10 -z-10 h-[260px] w-[260px] rounded-full bg-sky-500/10 blur-[120px]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent via-orange-500/[0.04] to-transparent" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_0,transparent_28%),radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.12),transparent_0,transparent_24%)]" />
            <div className="absolute inset-x-12 top-12 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="mb-14 flex max-w-3xl flex-col gap-5">
                    <motion.p variants={itemVariants} className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-300">
                        About Me
                    </motion.p>
                    <motion.h2
                        variants={itemVariants}
                        className="bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-4xl font-semibold text-transparent md:text-6xl"
                    >
                        Building digital work that feels precise, useful, and human.
                    </motion.h2>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
                    <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-lg leading-relaxed text-neutral-300 backdrop-blur md:p-10">
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent" />
                        <p>
                            I am a developer and computer science student focused on the space where strong engineering meets thoughtful product design. My work usually starts with a simple question: how can this feel clearer, faster, and more useful for the person using it?
                        </p>
                        <p className="mt-5">
                            Right now, I am sharpening my skills across <span className="font-medium text-white">Next.js</span>, <span className="font-medium text-white">React</span>, backend workflows, and applied <span className="font-medium text-white">AI/ML</span>. I enjoy turning technical ideas into polished experiences that feel reliable on every screen.
                        </p>
                        <p className="mt-5">
                            Whether I am exploring model-driven features, refining motion and layout, or solving product-level details, I care about building things that communicate confidence and leave a lasting impression.
                        </p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {[
                                ['Approach', 'Thoughtful UI, practical architecture, steady iteration'],
                                ['Goal', 'Create modern products that are both expressive and dependable'],
                            ].map(([label, value]) => (
                                <div key={label} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">{label}</p>
                                    <p className="mt-2 text-sm text-neutral-200">{value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-md md:p-10"
                    >
                        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-orange-400/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-500">Current Focus</p>
                        <h3 className="mb-8 mt-3 text-2xl font-semibold text-white">What I am building toward</h3>

                        <ul className="space-y-6 text-neutral-300">
                            {focusItems.map((item, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div
                                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-xs font-semibold tracking-[0.2em] text-white transition-colors duration-300"
                                        style={{ backgroundColor: item.glow, borderColor: item.border }}
                                    >
                                        <span>{item.icon}</span>
                                    </div>
                                    <span className="text-base font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
