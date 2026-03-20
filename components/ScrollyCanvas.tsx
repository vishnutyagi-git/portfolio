'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const sizeRef = useRef({ width: 0, height: 0 });

    const getSize = () => {
        const el = stickyRef.current;
        if (el && el.clientWidth > 0 && el.clientHeight > 0) {
            return { width: el.clientWidth, height: el.clientHeight };
        }
        return { width: window.innerWidth, height: window.innerHeight };
    };

    // ResizeObserver — size change hone pe redraw
    useEffect(() => {
        const el = stickyRef.current;
        if (!el) return;

        const observer = new ResizeObserver(() => {
            const size = getSize();
            sizeRef.current = size;
            if (isLoaded) {
                drawImage(Math.floor(currentIndex.get()));
            }
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, [isLoaded]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const paddedIndex = String(i).padStart(3, '0');
            img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // ✏️ Face left/right: 0.3 = left, 0.5 = center, 0.7 = right
    const FACE_HORIZONTAL = 0.5;

    const drawImage = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // ✅ Har baar fresh size lo — cached value pe depend mat karo
        const { width, height } = getSize();
        if (width === 0 || height === 0) return;

        sizeRef.current = { width, height };

        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        const isMobile = width < 768;

        if (isMobile) {
            const targetAspect = width / height;
            const srcH = img.height;
            const srcW = Math.round(img.height * targetAspect);
            const srcX = Math.round((img.width - srcW) * FACE_HORIZONTAL);

            ctx.drawImage(
                img,
                srcX, 0, srcW, srcH,
                0, 0, width, height
            );
        } else {
            const hRatio = width / img.width;
            const vRatio = height / img.height;
            const ratio = Math.max(hRatio, vRatio) * 1.1;

            const newWidth = img.width * ratio;
            const newHeight = img.height * ratio;
            const centerShift_x = (width - newWidth) / 2;
            const centerShift_y = (height - newHeight) / 2;

            ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, newWidth, newHeight);
        }
    };

    useEffect(() => {
        if (!isLoaded) return;

        // ✅ Thoda wait karo taaki DOM settle ho jaye
        const timeout = setTimeout(() => drawImage(0), 50);

        const handleResize = () => drawImage(Math.floor(currentIndex.get()));
        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', handleResize);
        };
    }, [isLoaded]);

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        if (isLoaded) drawImage(Math.floor(latest));
    });

    return (
        <div ref={containerRef} className="relative w-full bg-[#121212]" style={{ height: '500dvh' }}>
            <div
                ref={stickyRef}
                className="sticky top-0 w-full overflow-hidden bg-[#121212]"
                style={{ height: '100dvh' }}
            >
                {!isLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
                        <p className="text-sm tracking-widest text-neutral-500 uppercase">Loading Sequence...</p>
                    </div>
                )}

                {/* ✅ Canvas CSS se bhi full fill karo as backup */}
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0"
                    style={{ width: '100%', height: '100%', display: 'block' }}
                />

                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
