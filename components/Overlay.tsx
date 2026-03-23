'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.15, 0.3, 0.45], [100, 0, -100]);
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [100, 0, -100]);

    return (
        <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center overflow-hidden">
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="pointer-events-auto absolute w-full px-6 md:px-10"
            >
                <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 text-left">
                    <span className="rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-300 backdrop-blur">
                        Full-Stack Developer • AI/ML Explorer
                    </span>
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-semibold leading-[0.92] text-white md:text-7xl lg:text-[6.5rem]">
                            Vishnu Tyagi
                        </h1>
                        <p className="mt-4 text-2xl font-medium tracking-[0.18em] text-neutral-400 uppercase md:text-3xl">
                            Creative Developer
                        </p>
                        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                            Portfolio of Vishnu Tyagi. I design and ship web experiences that blend thoughtful interface design, strong frontend engineering, and growing AI product instincts.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-white/15 bg-black/25 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
                        >
                            Let&apos;s Connect
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-0 w-full px-6 md:px-10"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur md:p-12">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-300">What I care about</p>
                        <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
                            Interfaces should feel sharp, not crowded.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                            I like building sites that load quickly, guide attention clearly, and still feel alive through motion, storytelling, and detail.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-0 w-full px-6 text-right md:px-10"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="ml-auto max-w-3xl rounded-[2rem] border border-white/10 bg-black/25 p-8 backdrop-blur md:p-12">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-300">How I work</p>
                        <h2 className="mt-4 text-4xl font-semibold text-white md:text-6xl">
                            Bridging design sense with engineering discipline.
                        </h2>
                        <p className="mt-5 text-base leading-7 text-neutral-300 md:text-lg">
                            From section flow to performance decisions, I aim for portfolios and products that look distinctive, communicate trust, and stay practical to maintain.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
