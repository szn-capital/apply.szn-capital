
"use client"

import Link from 'next/link';

import ContentContainer from './components/ContentContainer';
import MinimalFooter from './components/MinimalFooter';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col bg-linear-to-b from-[#151618] to-[#01040B] text-white selection:bg-purple-500/30">

            {/* Header / Logo */}
            <div className="w-full py-5 text-center animate-fade-in z-20">
                <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                        SZN Capital
                    </p>
                </Link>
            </div>

            {/* Main Content */}
            <div className="grow flex items-center justify-center relative overflow-hidden">

                {/* Background Gradient */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-900/20 via-[#030303]/0 to-transparent pointer-events-none" />

                <ContentContainer size="normal" className="relative z-10 text-center px-6">
                    <h1 className="text-[120px] md:text-[200px] font-sans font-bold leading-none text-white/5 select-none pointer-events-none">
                        404
                    </h1>

                    <div className="-mt-12 md:-mt-20 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-medium text-white">
                            Page Not Found
                        </h2>
                        <p className="text-gray-400 text-lg max-w-lg mx-auto">
                            The page you are looking for doesn't exist or has been moved.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300"
                        >

                            Back to Home
                        </Link>
                    </div>
                </ContentContainer>
            </div>

            <MinimalFooter />
        </main>
    );
}
