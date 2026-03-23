'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function Certificates() {
    const certsData = [
        {
            id: 1,
            title: "AWS Academy Graduate - Cloud Foundations",
            issuer: "Amazon Web Services (AWS)",
            date: "Nov 2025",
            details: "20 hours of comprehensive cloud training covering AWS core services, security, architecture, pricing, and support.",
            image: "/aws-badge.png",
            link: "/certificates/aws-cloud-foundation.pdf",
            theme: {
                border: "group-hover:border-[#FF9900]/40",
                glow: "from-[#FF9900]/20 to-orange-500/10",
                text: "group-hover:text-[#FF9900]",
                pill: "bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20"
            }
        },
        {
            id: 2,
            title: "Cloud Computing",
            issuer: "NPTEL (IIT Kharagpur)",
            date: "Jul - Oct 2025",
            details: "12-week intensive course funded by the MoE, Govt. of India. Mastered cloud architectures and distributed computing.",
            image: null,
            link: "/certificates/cloud-computing.pdf",
            theme: {
                border: "group-hover:border-emerald-500/40",
                glow: "from-emerald-500/20 to-teal-500/10",
                text: "group-hover:text-emerald-300",
                pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
            }
        },
        {
            id: 3,
            title: "Introduction to Cloud Computing",
            issuer: "Infosys Springboard",
            date: "Nov 2025",
            details: "Built foundational knowledge in cloud service models (IaaS, PaaS, SaaS) and deployment strategies.",
            image: null,
            link: "/certificates/intro-to-cloud-computing.pdf",
            theme: {
                border: "group-hover:border-blue-500/40",
                glow: "from-blue-500/20 to-cyan-500/10",
                text: "group-hover:text-blue-300",
                pill: "bg-blue-500/10 text-blue-300 border-blue-500/20"
            }
        },
        {
            id: 4,
            title: "5G Principles: The Promise of the 5G Revolution",
            issuer: "Infosys Springboard",
            date: "Nov 2025",
            details: "Explored the architecture, use cases, and transformative potential of 5G networking technologies.",
            image: null,
            link: "/certificates/5g-principles.pdf",
            theme: {
                border: "group-hover:border-indigo-500/40",
                glow: "from-indigo-500/20 to-purple-500/10",
                text: "group-hover:text-indigo-300",
                pill: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
            }
        },
        {
            id: 5,
            title: "Internet of Things (IoT)",
            issuer: "Infosys Springboard",
            date: "Aug 2025",
            details: "Learned the mechanics of interconnected devices, sensor networks, and data processing in IoT ecosystems.",
            image: null,
            link: "/certificates/internet-of-things.pdf",
            theme: {
                border: "group-hover:border-cyan-500/40",
                glow: "from-cyan-500/20 to-blue-500/10",
                text: "group-hover:text-cyan-300",
                pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
            }
        },
        {
            id: 6,
            title: "3D Printing Course",
            issuer: "Infosys Springboard",
            date: "Oct 2025",
            details: "Gained insights into additive manufacturing, 3D modeling fundamentals, and emerging hardware tech.",
            image: null,
            link: "/certificates/3d-printing.pdf",
            theme: {
                border: "group-hover:border-rose-500/40",
                glow: "from-rose-500/20 to-pink-500/10",
                text: "group-hover:text-rose-300",
                pill: "bg-rose-500/10 text-rose-300 border-rose-500/20"
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        },
    };

    return (
        <section id="certificates" className="relative mx-auto max-w-6xl px-6 py-28 md:px-10">
            <div className="absolute left-0 top-20 -z-10 h-[320px] w-[320px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
            <div className="absolute right-0 bottom-10 -z-10 h-[280px] w-[280px] rounded-full bg-blue-500/8 blur-[120px] pointer-events-none" />
            <div className="absolute inset-x-0 top-1/2 -z-10 h-32 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.1),transparent_0,transparent_20%),radial-gradient(circle_at_86%_72%,rgba(59,130,246,0.08),transparent_0,transparent_22%)] pointer-events-none" />
            <div className="absolute inset-x-16 top-14 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-start"
            >
                <div className="mb-16">
                    <motion.p
                        variants={cardVariants}
                        className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300"
                    >
                        Certificates
                    </motion.p>
                    <motion.h2
                        variants={cardVariants}
                        className="mt-4 bg-gradient-to-r from-amber-200 via-white to-neutral-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl"
                    >
                        Earned, Not Given.
                    </motion.h2>
                    <motion.p
                        variants={cardVariants}
                        className="mt-4 text-lg text-neutral-400"
                    >
                        Continuous learning, validated by industry leaders.
                    </motion.p>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certsData.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={cardVariants}
                            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-[#121212] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-[#151515] hover:shadow-2xl ${cert.theme.border}`}
                        >
                            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${cert.theme.glow} blur-[40px] transition-opacity duration-700 opacity-0 group-hover:opacity-100`} />
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                        {cert.image ? (
                                            <Image
                                                src={cert.image}
                                                alt={`${cert.title} badge`}
                                                width={36}
                                                height={36}
                                                className="object-contain"
                                            />
                                        ) : (
                                            <FiAward className={`text-2xl text-neutral-400 transition-colors ${cert.theme.text}`} />
                                        )}
                                    </div>
                                    <span className={`rounded-full border px-3 py-1 text-[10px] font-bold tracking-wider uppercase transition-colors ${cert.theme.pill}`}>
                                        {cert.date}
                                    </span>
                                </div>

                                <div>
                                    <h3 className={`text-lg font-semibold text-neutral-200 leading-snug transition-colors duration-300 ${cert.theme.text}`}>
                                        {cert.title}
                                    </h3>
                                    <p className="mt-1.5 text-xs font-medium text-neutral-500 uppercase tracking-widest">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-neutral-400 flex-grow">
                                    {cert.details}
                                </p>

                                <div className="mt-6 border-t border-white/5 pt-4">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Open certificate for ${cert.title}`}
                                        className="flex w-fit items-center gap-2 text-xs font-semibold text-neutral-500 transition-colors hover:text-white group-hover:underline"
                                    >
                                        View Certificate PDF <FiExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
