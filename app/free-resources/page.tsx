"use client"
import React from 'react';
import Link from 'next/link';
import { ScrollFadeIn } from '../components/ScrollAnimations';
import MinimalFooter from '../components/MinimalFooter';

import ContentContainer from '../components/ContentContainer';

export default function FreeResourcesPage() {

    return (
        <main className="min-h-screen flex flex-col text-white selection:bg-purple-500/30">
            {/* Logo */}
            <div className="w-full py-5 text-center animate-fade-in">
                <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                        SZN Capital
                    </p>
                </Link>
            </div>

            <section className="pt-4 pb-12 px-6 grow">
                <ContentContainer size="wide">
                    {/* Headline */}
                    <ScrollFadeIn direction="up" duration={0.8}>
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl md:text-[42px] lg:text-[50px] font-sans font-medium text-white leading-tight lg:leading-[1.15] mb-6 -tracking-[0.03em]">
                                Build Your{' '}
                                <span className="italic font-light text-gray-200" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                                    Foundation First
                                </span>
                            </h1>
                            <p className="text-[#9CA1B2] text-sm md:text-base font-normal leading-relaxed">
                                You're not quite ready for the mentorship yet. SZN Academy is built around direct coaching, personalised feedback, and structured accountability — the kind of attention that actually changes how you trade. That level of guidance requires a real commitment, both from you and from us. If you're not in a position to make that investment right now, start with our free 5-hour course and build your foundation first.
                            </p>
                        </div>
                    </ScrollFadeIn>

                    {/* Video Embed */}
                    <div className="flex justify-center mb-16">
                        <div className="w-full max-w-3xl">
                            <ScrollFadeIn direction="up" duration={0.7}>
                                <div className="rounded-2xl border border-white/10 bg-linear-to-b from-[#272a2f]/40 to-[#14161C]/40 p-2 sm:p-3">
                                    <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: '56.25%' }}>
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src="https://www.youtube.com/embed/vR4S0fj5qsA?start=2&rel=0"
                                            title="SZN Capital — Free Training"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </ScrollFadeIn>
                        </div>
                    </div>

                    {/* CTA to come back */}
                    <ScrollFadeIn direction="up" delay={0.4} duration={0.8}>
                        <div className="text-center mt-8 max-w-2xl mx-auto">
                            <h3 className="text-white text-lg font-medium mb-4">
                                Come back when you're ready
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                When you've built up your capital and you're serious about structured mentorship come back and apply. We'll be here.
                            </p>
                        </div>
                    </ScrollFadeIn>
                </ContentContainer>
            </section>

            <MinimalFooter />
        </main>
    );
}
