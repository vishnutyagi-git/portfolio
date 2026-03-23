import type { Metadata } from 'next';
import SmoothScroll from '../components/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
    title: 'Vishnu Tyagi',
    description: 'Portfolio of Vishnu Tyagi, a full-stack developer exploring AI, performant interfaces, and modern web experiences.',
    keywords: ['Vishnu Tyagi', 'portfolio', 'Next.js developer', 'full-stack developer', 'AI', 'web developer'],
    authors: [{ name: 'Vishnu Tyagi' }],
    openGraph: {
        title: 'Vishnu Tyagi',
        description: 'Full-stack developer portfolio focused on thoughtful UI, modern web engineering, and AI-driven products.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vishnu Tyagi',
        description: 'Full-stack developer portfolio focused on thoughtful UI, modern web engineering, and AI-driven products.',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-[#0b0d10] font-sans text-white antialiased">
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
