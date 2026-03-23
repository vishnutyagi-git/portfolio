'use client';

import { motion } from 'framer-motion';
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiNodedotjs, SiTailwindcss, SiFramer, SiCplusplus,
    SiMongodb, SiGithub, SiFigma
} from 'react-icons/si';

export default function Skills() {
    const skills = [
        { name: "JavaScript", icon: <SiJavascript />, bgLight: "rgba(247, 223, 30, 0.05)", hoverBg: "rgba(247, 223, 30, 0.15)", glow: "rgba(247, 223, 30, 0.4)", border: "rgba(247, 223, 30, 0.3)", text: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, bgLight: "rgba(49, 120, 198, 0.05)", hoverBg: "rgba(49, 120, 198, 0.15)", glow: "rgba(49, 120, 198, 0.4)", border: "rgba(49, 120, 198, 0.3)", text: "#3178C6" },
        { name: "React.js", icon: <SiReact />, bgLight: "rgba(97, 218, 251, 0.05)", hoverBg: "rgba(97, 218, 251, 0.15)", glow: "rgba(97, 218, 251, 0.4)", border: "rgba(97, 218, 251, 0.3)", text: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, bgLight: "rgba(255, 255, 255, 0.03)", hoverBg: "rgba(255, 255, 255, 0.1)", glow: "rgba(255, 255, 255, 0.3)", border: "rgba(255, 255, 255, 0.2)", text: "#FFFFFF" },
        { name: "Node.js", icon: <SiNodedotjs />, bgLight: "rgba(51, 153, 51, 0.05)", hoverBg: "rgba(51, 153, 51, 0.15)", glow: "rgba(51, 153, 51, 0.4)", border: "rgba(51, 153, 51, 0.3)", text: "#339933" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, bgLight: "rgba(6, 182, 212, 0.05)", hoverBg: "rgba(6, 182, 212, 0.15)", glow: "rgba(6, 182, 212, 0.4)", border: "rgba(6, 182, 212, 0.3)", text: "#06B6D4" },
        { name: "Framer Motion", icon: <SiFramer />, bgLight: "rgba(0, 85, 255, 0.05)", hoverBg: "rgba(0, 85, 255, 0.15)", glow: "rgba(0, 85, 255, 0.4)", border: "rgba(0, 85, 255, 0.3)", text: "#0055FF" },
        { name: "C++", icon: <SiCplusplus />, bgLight: "rgba(0, 89, 156, 0.05)", hoverBg: "rgba(0, 89, 156, 0.15)", glow: "rgba(0, 89, 156, 0.4)", border: "rgba(0, 89, 156, 0.3)", text: "#00599C" },
        { name: "MongoDB", icon: <SiMongodb />, bgLight: "rgba(71, 162, 72, 0.05)", hoverBg: "rgba(71, 162, 72, 0.15)", glow: "rgba(71, 162, 72, 0.4)", border: "rgba(71, 162, 72, 0.3)", text: "#47A248" },
        { name: "Git & GitHub", icon: <SiGithub />, bgLight: "rgba(255, 255, 255, 0.03)", hoverBg: "rgba(255, 255, 255, 0.1)", glow: "rgba(255, 255, 255, 0.3)", border: "rgba(255, 255, 255, 0.2)", text: "#FFFFFF" },
        { name: "Figma", icon: <SiFigma />, bgLight: "rgba(242, 78, 30, 0.05)", hoverBg: "rgba(242, 78, 30, 0.15)", glow: "rgba(242, 78, 30, 0.4)", border: "rgba(242, 78, 30, 0.3)", text: "#F24E1E" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    // Headline ke liye separate variant taaki purana entry animation kaam kare
    const headlineVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(10px)" },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { type: 'spring', stiffness: 200, damping: 15 } 
        },
    };

    return (
        <section id="skills" className="relative mx-auto max-w-6xl px-6 py-32 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[150px] pointer-events-none" />
            <div className="absolute left-0 top-10 -z-10 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
            <div className="absolute inset-x-0 bottom-12 -z-10 h-36 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(34,211,238,0.08),transparent_0,transparent_22%),radial-gradient(circle_at_85%_20%,rgba(217,70,239,0.1),transparent_0,transparent_24%)] pointer-events-none" />
            <div className="absolute inset-x-8 top-16 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center justify-center text-center relative z-10"
            >
                <motion.h2
                    variants={headlineVariants}
                    className="text-5xl md:text-6xl font-bold tracking-tight mb-20 text-white"
                >
                    Technical <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">Arsenal</span>
                </motion.h2>

                <motion.div className="flex max-w-4xl flex-wrap justify-center gap-4 md:gap-5">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover="hover"
                            whileTap={{ scale: 0.95 }}
                            className="group flex cursor-pointer items-center gap-3 rounded-full border border-white/5 px-6 py-3.5 text-sm font-bold tracking-wide transition-colors duration-300 md:px-8 md:py-4 md:text-base backdrop-blur-md"
                            // Yahan humne initial appear aur hover effects ko ek hi variants object mein merge kar diya
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(10px)" },
                                visible: { 
                                    opacity: 1, 
                                    y: 0, 
                                    scale: 1, 
                                    filter: "blur(0px)",
                                    backgroundColor: skill.bgLight,
                                    borderColor: skill.bgLight,
                                    boxShadow: `0px 0px 0px 0px transparent`,
                                    color: "rgb(163 163 163)",
                                    transition: { type: 'spring', stiffness: 200, damping: 15 } 
                                },
                                hover: {
                                    backgroundColor: skill.hoverBg,
                                    borderColor: skill.border,
                                    boxShadow: `0px 15px 35px -5px ${skill.glow}`,
                                    color: skill.text,
                                    y: -8,
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }
                            }}
                        >
                            <motion.span
                                variants={{
                                    hidden: { rotate: 0, scale: 1 },
                                    visible: { rotate: 0, scale: 1 },
                                    hover: { 
                                        rotate: [0, -15, 15, 0], 
                                        scale: 1.2,
                                        transition: { duration: 0.4 } 
                                    }
                                }}
                                className="text-2xl"
                                style={{ color: skill.text }}
                            >
                                {skill.icon}
                            </motion.span>
                            
                            <span className="uppercase tracking-widest text-[11px] md:text-xs">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
