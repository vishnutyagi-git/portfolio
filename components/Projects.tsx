'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "Ethereal",
            category: "WebGL Experience",
            year: "2025",
            description: "An immersive 3D web experience built to push the boundaries of browser rendering. Features custom shaders and dynamic lighting.",
            tech: ["Three.js", "React Three Fiber", "GLSL", "Next.js"],
            status: "Concept build",
            links: { github: "", live: "" },
            theme: {
                border: "group-hover:border-cyan-500/40",
                shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.2)]",
                glow: "from-cyan-500/20 to-blue-500/20",
                title: "group-hover:text-cyan-300",
                pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
            }
        },
        {
            id: 2,
            title: "Lumina",
            category: "Fintech Platform",
            year: "2025",
            description: "A high-performance financial dashboard handling real-time data streams. Engineered for sub-second latency and maximum security.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
            status: "Private case study",
            links: { github: "", live: "" },
            theme: {
                border: "group-hover:border-emerald-500/40",
                shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]",
                glow: "from-emerald-500/20 to-teal-500/20",
                title: "group-hover:text-emerald-300",
                pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
            }
        },
        {
            id: 3,
            title: "Aura",
            category: "Immersive E-Commerce",
            year: "2024",
            description: "Redefining online shopping with an interactive, headless e-commerce architecture. Seamlessly integrated with Stripe and Sanity CMS.",
            tech: ["React", "Node.js", "Stripe", "Sanity"],
            status: "In refinement",
            links: { github: "", live: "" },
            theme: {
                border: "group-hover:border-purple-500/40",
                shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]",
                glow: "from-purple-500/20 to-fuchsia-500/20",
                title: "group-hover:text-purple-300",
                pill: "bg-purple-500/10 text-purple-300 border-purple-500/20"
            }
        },
        {
            id: 4,
            title: "Nexus",
            category: "Brand Identity",
            year: "2024",
            description: "A digital identity system built for a modern tech startup. Focused on typography, motion design, and a pixel-perfect responsive layout.",
            tech: ["Framer Motion", "Tailwind CSS", "Figma"],
            status: "Design-led build",
            links: { github: "", live: "" },
            theme: {
                border: "group-hover:border-orange-500/40",
                shadow: "group-hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.2)]",
                glow: "from-orange-500/20 to-rose-500/20",
                title: "group-hover:text-orange-300",
                pill: "bg-orange-500/10 text-orange-300 border-orange-500/20"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        },
    };

    return (
        <section id="projects" className="relative mx-auto max-w-6xl px-6 py-32">
            <div className="absolute left-0 top-1/2 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[140px] pointer-events-none" />
            <div className="absolute right-[-5%] top-16 -z-10 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[130px] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-10 -z-10 h-40 bg-gradient-to-r from-transparent via-emerald-500/[0.05] to-transparent pointer-events-none" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_30%,rgba(16,185,129,0.1),transparent_0,transparent_24%),radial-gradient(circle_at_88%_12%,rgba(249,115,22,0.1),transparent_0,transparent_18%)] pointer-events-none" />
            <div className="absolute inset-x-16 top-14 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-start"
            >
                <div className="mb-20">
                    <motion.p
                        variants={cardVariants}
                        className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300"
                    >
                        Selected Work
                    </motion.p>
                    <motion.h2
                        variants={cardVariants}
                        className="mt-4 text-5xl font-bold tracking-tight text-white md:text-6xl"
                    >
                        The <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Build Log</span>
                    </motion.h2>
                    <motion.p
                        variants={cardVariants}
                        className="mt-6 max-w-2xl text-lg font-light text-neutral-400 md:text-xl"
                    >
                        Projects, concepts, and interface systems that reflect how I think about product quality, visual tone, and frontend execution.
                    </motion.p>
                </div>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] ${project.theme.border} ${project.theme.shadow}`}
                        >
                            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.theme.glow} blur-[80px] transition-opacity duration-700 opacity-10 group-hover:opacity-100`} />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold mb-2 block">{project.category}</span>
                                        <h3 className={`text-3xl font-bold text-white transition-colors duration-300 ${project.theme.title}`}>
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                                            {project.year}
                                        </div>
                                        <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
                                            {project.status}
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-10 text-base font-light leading-relaxed text-neutral-400">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-col gap-6 border-t border-white/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors ${project.theme.pill}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.links.github || project.links.live ? (
                                        <div className="shrink-0 flex gap-5">
                                            {project.links.github ? (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${project.title} GitHub repository`}
                                                    className="text-neutral-500 transition-all hover:scale-125 hover:text-white"
                                                >
                                                    <FiGithub size={22} />
                                                </a>
                                            ) : null}
                                            {project.links.live ? (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${project.title} live demo`}
                                                    className="text-neutral-500 transition-all hover:scale-125 hover:text-white"
                                                >
                                                    <FiExternalLink size={22} />
                                                </a>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-neutral-500">
                                            Detailed links available on request
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
