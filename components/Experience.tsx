'use client';

import { motion } from 'framer-motion';

export default function Experience() {
    const journeyData = [
        {
            id: 1,
            type: "work",
            title: "Freelance Full-Stack Developer",
            organization: "Self-Employed / Remote Clients",
            date: "2024 - Present",
            description: "Architecting and delivering end-to-end web solutions for various clients. Focused on building highly scalable architectures, performant backends, and pixel-perfect modern UIs.",
            tech: ["Next.js", "React", "Node.js", "Tailwind CSS"],
            theme: { border: "group-hover:border-blue-500/30", glow: "group-hover:bg-blue-500/5", dot: "bg-blue-400", line: "from-blue-500/50" }
        },
        {
            id: 2,
            type: "work",
            title: "Open Source Contributor",
            organization: "Google Summer of Code (GSoC)",
            date: "2025",
            description: "Contributed to impactful open-source projects. Collaborated globally with maintainers to write optimized code, resolve critical bugs, and implement core features.",
            tech: ["Open Source", "JavaScript", "C++", "Git / GitHub"],
            theme: { border: "group-hover:border-orange-500/30", glow: "group-hover:bg-orange-500/5", dot: "bg-orange-400", line: "from-orange-500/50" }
        },
        {
            id: 3,
            type: "education",
            title: "B.Tech in Computer Science",
            organization: "IILM University, Greater Noida",
            date: "2024 - Present",
            description: "Deep diving into core computer science fundamentals. Actively bridging theoretical concepts like Data Structures, Algorithms, and System Design with practical web engineering.",
            tech: ["DSA", "System Design", "Web Engineering", "Java"],
            theme: { border: "group-hover:border-violet-500/30", glow: "group-hover:bg-violet-500/5", dot: "bg-violet-400", line: "from-violet-500/50" }
        },
        {
            id: 4,
            type: "education",
            title: "Senior Secondary (12th) & High School (10th)",
            organization: "BLS International School, Hathras",
            date: "2021 & 2023",
            description: "Built a strong mathematical and analytical foundation in the Science stream, which sparked my initial curiosity for logic, algorithms, and programming.",
            tech: ["PCM", "Computer Science", "Analytical Thinking"],
            theme: { border: "group-hover:border-neutral-400/30", glow: "group-hover:bg-neutral-400/5", dot: "bg-neutral-400", line: "from-neutral-500/50" }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 15 } },
    };

    return (
        <section id="experience" className="relative mx-auto max-w-6xl px-6 py-32">
            <div className="absolute right-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none" />
            <div className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-orange-500/5 blur-[140px] pointer-events-none" />
            <div className="absolute left-1/3 top-8 -z-10 h-32 w-64 rounded-full bg-cyan-400/10 blur-[90px] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-8 -z-10 h-40 bg-gradient-to-r from-transparent via-blue-500/[0.05] to-transparent pointer-events-none" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_75%,rgba(249,115,22,0.08),transparent_0,transparent_24%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,0.08),transparent_0,transparent_24%)] pointer-events-none" />
            <div className="absolute inset-x-16 top-14 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-5xl md:text-6xl font-bold tracking-tight mb-20 text-white"
                >
                    Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">& Education</span>
                </motion.h2>

                <div className="relative border-l border-white/5 ml-4 md:ml-6">
                    <div className="space-y-16">
                        {journeyData.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="relative group pl-10 md:pl-14"
                            >
                                <div className="absolute -left-[11px] top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#0a0a0a] ring-2 ring-white/10">
                                    <div className={`h-2 w-2 rounded-full ${item.theme.dot} transition-all duration-500 group-hover:scale-150 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]`} />
                                </div>

                                <div className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 ${item.theme.border} ${item.theme.glow} hover:-translate-y-1`}>
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />
                                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg font-medium text-neutral-400">
                                                {item.organization}
                                            </p>
                                        </div>
                                        <div className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-bold tracking-widest text-neutral-400 uppercase">
                                            {item.date}
                                        </div>
                                    </div>

                                    <p className="text-neutral-500 leading-relaxed text-base mb-8 max-w-3xl">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-semibold text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
