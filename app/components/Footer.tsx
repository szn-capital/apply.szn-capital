"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ScrollFadeIn } from './ScrollAnimations';

function ContentContainer({ children, size = 'normal', className = '' }: {
    children: React.ReactNode;
    size?: 'narrow' | 'normal' | 'wide';
    className?: string;
}) {
    const sizeClasses = {
        narrow: 'max-w-[700px]',
        normal: 'max-w-[900px]',
        wide: 'max-w-[1200px]',
    };
    return (
        <div className={`w-full ${sizeClasses[size]} mx-auto ${className}`}>
            {children}
        </div>
    );
}

export default function Footer() {
    const router = useRouter();

    const handleApply = () => {
        router.push('/apply');
    };

    return (
        <footer className="relative pt-32 pb-0 overflow-hidden">

            {/* Main CTA Section */}
            <ContentContainer size="normal">
                <ScrollFadeIn direction="up" duration={0.8}>
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-6xl font-sans font-medium text-white mb-6 -tracking-[0.03em] leading-[1.1]">
                            <span className="block mb-2">Ready to Become a</span>
                            <span
                                className="italic font-light text-gray-200"
                                style={{ fontFamily: '"Times New Roman", Times, serif' }}
                            >
                                Funded Trader?
                            </span>
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-10 font-light leading-relaxed">
                            Apply now to see if you qualify for the SZN Academy mentorship program.
                            Limited spots available for the upcoming cohort.
                        </p>
                        <button
                            onClick={handleApply}
                            className="bg-white text-black px-12 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            Apply Now
                        </button>
                    </div>
                </ScrollFadeIn>
            </ContentContainer>


            <div className="w-full bg-black/40 border-t border-white/5 backdrop-blur-md">
                <ContentContainer size="wide">
                    <ScrollFadeIn direction="up" delay={0.2} duration={0.8}>
                        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-8 md:gap-0">

                            {/* Left: Legal Links */}
                            <div className="w-full md:w-1/3 flex justify-center md:justify-start order-2 md:order-1 gap-4">
                                <a href="/legal" className="text-[10px] uppercase tracking-widest text-gray-700 hover:text-gray-500 transition-colors">
                                    Legal Disclosure
                                </a>
                                <span className="text-gray-800">•</span>
                                <a href="/privacy" className="text-[10px] uppercase tracking-widest text-gray-700 hover:text-gray-500 transition-colors">
                                    Privacy Policy
                                </a>
                            </div>

                            {/* Center: Social Proof Stack */}
                            <div className="w-full md:w-1/3 flex flex-col items-center gap-3 order-1 md:order-2">
                                {/* Avatar Stack */}
                                <div className="flex -space-x-3">
                                    {[
                                        '/students/user-tom.jpg',
                                        '/students/user-dragos.jpg',
                                        '/students/user-saim.jpg',
                                        '/students/user-tom.jpg',
                                        '/students/user-dragos.jpg'
                                    ].map((src, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] overflow-hidden bg-gray-800">
                                            <img src={src} alt="Member" className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Right: Scarcity Element */}
                            <div className="w-full md:w-1/3 flex justify-center md:justify-end order-3">
                                <p className="text-[10px] uppercase tracking-widest text-gray-700 cursor-default">
                                    SPOTS ARE LIMITED
                                </p>
                            </div>

                        </div>
                    </ScrollFadeIn>
                </ContentContainer>
            </div>
        </footer>
    );
}