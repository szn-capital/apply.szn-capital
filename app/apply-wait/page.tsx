"use client"
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ContentContainer from '../components/ContentContainer';
import { ScrollFadeIn } from '../components/ScrollAnimations';
import MinimalFooter from '../components/MinimalFooter';
import VideoShowcase from '../components/VideoShowcase';
import { fundedTraders } from '../data/fundedTraders';

// Minimal Footer Component
// Testimonial Data - Use only funded traders
const row1 = fundedTraders.slice(0, 12);
const row2 = fundedTraders.slice(12);

// Full Testimonial Card Component (matching VSL-2)
const TestimonialCard = ({ item }: any) => (
    <div className={`${item.text ? 'w-[500px]' : 'w-[280px]'} shrink-0 bg-[#0e0f12] border border-white/5 rounded-[28px] p-6 hover:border-white/10 hover:bg-[#131418] transition-all duration-300 group/card flex flex-col`}>
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-gray-800 shrink-0 relative">
                <Image src={item.avatar} alt={item.name} fill sizes="48px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-white font-medium text-base truncate">{item.name}</p>
                <p className="text-gray-400 text-sm truncate">{item.handle}</p>
            </div>
        </div>

        {/* Content Layout: Text Left | Image Right (or Center if no text) */}
        <div className={`flex gap-5 ${item.text ? 'items-center' : 'items-center justify-center mt-2'}`}>
            {/* Text Area */}
            {item.text && (
                <div className="flex-1 min-w-0">
                    <p className="text-gray-200 text-[15px] leading-relaxed line-clamp-5">
                        {item.text}
                    </p>
                </div>
            )}

            {/* Certificate Thumbnail */}
            <div className={`relative ${item.text ? 'w-36' : 'w-48'} aspect-4/3 shrink-0 rounded-xl overflow-hidden border border-white/5 bg-black/30 group-hover/card:border-white/20 transition-colors`}>
                <Image
                    src={item.certImage}
                    alt="Certificate"
                    fill
                    sizes="192px"
                    className="object-cover opacity-80 group-hover/card:opacity-100 transition-opacity"
                />
            </div>
        </div>
    </div>
);

const MarqueeRow = ({ items, direction = 'left', speed = 40 }: any) => {
    return (
        <div className="relative flex overflow-hidden w-full select-none mask-gradient marquee-container">
            <div
                className="flex gap-4 py-2 animate-marquee"
                style={{
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    animationDuration: `${speed}s`
                }}
            >
                {items.map((item: any, idx: number) => <TestimonialCard key={`a-${idx}`} item={item} />)}
                {items.map((item: any, idx: number) => <TestimonialCard key={`b-${idx}`} item={item} />)}
                {items.map((item: any, idx: number) => <TestimonialCard key={`c-${idx}`} item={item} />)}
                {items.map((item: any, idx: number) => <TestimonialCard key={`d-${idx}`} item={item} />)}
            </div>
        </div>
    );
};

const academyVideos = [
    {
        title: "What's Inside The Academy",
        subtitle: "The Full Structure Of The Program. Three Pillars: Education, Coaching, And Accountability.",
        videoId: "1200700984"
    },
    {
        title: "What The 12 Months Actually Look Like",
        subtitle: "A month-by-month breakdown of the program. Why it's 12 months, and what actually happens in that time.",
        videoId: "1200701003"
    },
    {
        title: "How This Is Different From The Discord",
        subtitle: "The most common question we get from existing discord members.",
        videoId: "1200700904"
    },
    {
        title: "Why You Can't Fix This Alone",
        subtitle: "For the traders who think they just need more discipline. The two structural reasons that's almost always wrong.",
        videoId: "1200701014"
    },
    {
        title: "Tom's Story",
        subtitle: "The trader I worked with one-on-one before the academy existed. What actually changed for him, in his own words.",
        videoId: "1200350811"
    }
];

// --- MAIN PAGE CONTENT ---

function ShortlistedContent() {
    const searchParams = useSearchParams();
    const [name, setName] = useState("Trader");

    useEffect(() => {
        const urlName = searchParams.get('name');
        if (urlName && urlName.trim()) {
            // Sanitize: take only first name, strip non-alpha characters
            const clean = urlName.trim().split(/\s+/)[0].replace(/[^a-zA-ZÀ-ÿ'-]/g, '');
            if (clean) {
                setName(clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase());
            } else {
                setName("");
            }
        } else {
            setName("");
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col min-h-screen">

            {/* Marquee Styles */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                .animate-marquee {
                    animation: marquee linear infinite;
                    width: max-content;
                    will-change: transform;
                    /* Smooth GPU acceleration */
                    transform: translateZ(0);
                    backface-visibility: hidden;
                }
                .marquee-container:hover .animate-marquee {
                    animation-play-state: paused !important;
                }
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }
                /* Smooth blur transitions */
                .group\\/card {
                    transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
                }
            `}</style>

            <div className="w-full py-5 text-center animate-fade-in">
                <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>SZN CAPITAL</p>
                </Link>
            </div>

            <section className="grow pt-8 pb-24">
                <ContentContainer size="normal" className="px-6">

                    {/* Header */}
                    <div className="text-center mb-10 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-sans font-medium text-white mb-4 -tracking-[0.03em]">
                            Congratulations{name ? <span className="italic font-light text-gray-200" style={{ fontFamily: '"Times New Roman", Times, serif' }}> {name}!</span> : '!'}
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base font-light">
                            Thank you for your interest in the SZN Capital mentorship program. <br className="hidden md:block" />
                            Your application has been submitted successfully.
                        </p>
                    </div>

                    {/* Notification Box - Waitlist Message */}
                    <ScrollFadeIn direction="up" delay={0.2} duration={0.8}>
                        <div className="relative mb-20">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-[#782FFF] opacity-10 blur-2xl rounded-2xl -z-10" />

                            <div className="bg-[#782FFF]/10 border border-[#782FFF]/50 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(120,47,255,0.15)]">
                                <h3 className="text-white font-medium text-lg mb-2">
                                    You've been shortlisted, and you'll hear from us within 24 hours.
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
                                    You will get a call or message from a <span className="text-white font-medium">(+1)</span> or <span className="text-white font-medium">(+44)</span> number from my team.
                                    <br />
                                    It'll be a 5-minute conversation to see if this program can help you achieve your goals
                                </p>
                            </div>
                        </div>
                    </ScrollFadeIn>

                </ContentContainer>

                {/* Marquee Background (Full Width) - 2 Rows */}
                <div className="mb-24 flex flex-col gap-4">
                    <MarqueeRow items={row1} direction="right" speed={80} />
                    <MarqueeRow items={row2} direction="left" speed={70} />
                </div>

                <VideoShowcase items={academyVideos} />
            </section>

            <MinimalFooter />
        </div>
    );
}

// --- PAGE EXPORT ---

export default function ShortlistedPage() {
    return (
        <main className="min-h-screen text-white selection:bg-purple-500/30">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading...</div>}>
                <ShortlistedContent />
            </Suspense>
        </main>
    );
}
