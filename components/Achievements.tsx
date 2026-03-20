"use client";
import { motion } from "framer-motion";
import { FiZap, FiAward, FiStar } from "react-icons/fi";

export default function Achievements() {
    const wins = [
        {
            title: "Hackathon Finalist",
            event: "Internal University Hack",
            tag: "Finalist",
            icon: <FiZap />,
            glow: "group-hover:shadow-[0_0_30px_-10px_rgba(253,224,71,0.3)]"
        },
        {
            title: "Academic Excellence",
            event: "B.Tech Journey",
            tag: "Top 10%",
            icon: <FiStar />,
            glow: "group-hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.3)]"
        },
        {
            title: "Technical Lead",
            event: "College Tech Fest",
            tag: "Leadership",
            icon: <FiAward />,
            glow: "group-hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)]"
        }
    ];

    return (
        <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-32">
            {/* Ambient Gold Glow */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Yellow to Gold Gradient Heading */}
                <h2 className="mb-20 text-5xl md:text-6xl font-bold tracking-tight text-white">
                    Wins & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-500 italic">Milestones</span>
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {wins.map((win, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-10 backdrop-blur-md transition-all duration-500 hover:border-yellow-500/20 hover:bg-white/[0.05] hover:-translate-y-2 ${win.glow}`}
                        >
                            {/* Subtle Icon Background */}
                            <div className="mb-8 text-3xl text-neutral-600 transition-colors duration-500 group-hover:text-yellow-400">
                                {win.icon}
                            </div>

                            <div className="relative z-10">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500 group-hover:text-yellow-500/80 transition-colors">
                                    {win.tag}
                                </span>
                                <h3 className="mt-4 text-2xl font-bold text-neutral-200 group-hover:text-white transition-colors">
                                    {win.title}
                                </h3>
                                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-600">
                                    {win.event}
                                </p>
                            </div>

                            {/* Corner Glow Effect */}
                            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-yellow-500/5 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

