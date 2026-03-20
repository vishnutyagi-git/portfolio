'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 120; // 0 to 119

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

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

    const drawImage = (index: number) => {
        if (!canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // 🚨 FINAL FIX 1: Strict Window Dimensions (Kills the bottom black gap)
        const width = window.innerWidth;
        const height = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;

        // Set high-res internal drawing area
        canvas.width = width * dpr;
        canvas.height = height * dpr;

        // Force exact pixel sizes via inline style, ignoring external CSS layout bugs
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);

        // Standard Full Screen Ratio calculation
        const hRatio = width / img.width;
        const vRatio = height / img.height;
        let ratio = Math.max(hRatio, vRatio);

        // 🚨 FINAL FIX 2: Zoom in to hide the baked-in white corners
        const isMobile = width < 768;
        const ZOOM_FACTOR = isMobile ? 1.5 : 1.1; // Keeps white edges outside the screen
        ratio *= ZOOM_FACTOR;

        const newWidth = img.width * ratio;
        const newHeight = img.height * ratio;
        
        // Center the zoomed image
        const centerShift_x = (width - newWidth) / 2;
        const centerShift_y = (height - newHeight) / 2;

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, newWidth, newHeight);
    };

    useEffect(() => {
        if (isLoaded) drawImage(0);

        const handleResize = () => { if (isLoaded) drawImage(Math.floor(currentIndex.get())); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        if (isLoaded) {
            drawImage(Math.floor(latest));
        }
    });

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
            {/* Sticky container stays standard, but Canvas handles its own full-screen size now */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">

                {!isLoaded && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#121212]">
                        <p className="text-sm tracking-widest text-neutral-500 uppercase">Loading Sequence...</p>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 block"
                />

                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}