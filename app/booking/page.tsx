"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ContentContainer from '../components/ContentContainer';
import { ScrollFadeIn } from '../components/ScrollAnimations';
import MinimalFooter from '../components/MinimalFooter';

// --- MAIN PAGE ---

export default function BookingPage() {
    const [mounted, setMounted] = useState(false);

    // Calendly Script Injection
    useEffect(() => {
        setMounted(true);

        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        script.setAttribute('async', 'true');
        head?.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    // Redirect URL for Calendly to pass invitee data to confirmation page
    const redirectUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/confirmation`
        : 'https://szn-capital.com/confirmation';

    return (
        <main className="min-h-screen text-white selection:bg-purple-500/30 flex flex-col">

            {/* Top Label */}
            <div className="w-full py-5 text-center animate-fade-in">
                <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                        SZN CAPITAL
                    </p>
                </Link>
            </div>

            {/* HEADER SECTION */}
            <section className="px-6 pt-2 pb-6">
                <ContentContainer size="normal">
                    <ScrollFadeIn direction="up" duration={0.8}>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-sans font-medium text-white leading-tight mb-2">
                                Schedule Your 1:1
                                <br />
                                <span
                                    className="italic font-light text-white"
                                    style={{ fontFamily: '"Times New Roman", Times, serif' }}
                                >
                                    You&#39;re One Step Away From Fixing Your Trading
                                </span>
                            </h1>
                            <p className="text-[#9CA1B2] text-xs md:text-sm font-light mt-4 mb-2">
                                We limit calls each week to keep coaching quality high. <span className="text-gray-300 font-normal">Select a time now</span> before spots are taken.
                            </p>
                            <p className="text-[#9CA1B2] text-[11px] font-light leading-relaxed max-w-lg mx-auto mt-3">
                                This is a strategy call to determine if SZN Academy is the right fit for you. SZN Academy is a 12-month trading mentorship program with direct 1:1 coaching.
                            </p>
                        </div>
                    </ScrollFadeIn>
                </ContentContainer>
            </section>

            {/* CALENDLY WIDGET SECTION */}
            <section className="px-4 grow flex flex-col items-center">
                <ContentContainer size="wide" className="h-full">

                    {/* Widget Wrapper - Styled to blend with dark mode */}
                    <ScrollFadeIn direction="up" delay={0.3} duration={0.8}>
                        <div className="w-full flex justify-center">
                            {/* NOTE ON CALENDLY CUSTOMIZATION:
                            Calendly widgets are iframes, so we cannot inject CSS directly into them due to browser security (CORS).
                            However, we can customize colors via URL parameters:
                            - background_color: Hex for the background (set to match our #050505 page bg)
                            - text_color: Hex for text
                            - primary_color: Hex for buttons/links (set to our brand purple #782fff)
                            - redirect_url: Where to send users after booking (set to /confirmation page)

                            To completely redesign the layout (like a custom calendar), you would need to use the Calendly API
                            and build a custom frontend component, which is a much larger task.
                            The current setup uses the embed for reliability but skins it to match our theme.
                        */}
                            {mounted && (
                                <div
                                    className="calendly-inline-widget w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-transparent"
                                    data-url={`https://calendly.com/saim-shaikh/enrollment?background_color=1a1a1a&text_color=ffffff&primary_color=ffffff&redirect_url=${encodeURIComponent(redirectUrl)}`}
                                    style={{ minWidth: '320px', height: '700px' }}
                                />
                            )}
                        </div>
                    </ScrollFadeIn>

                </ContentContainer>
            </section>

            <MinimalFooter />

        </main >
    );
}
