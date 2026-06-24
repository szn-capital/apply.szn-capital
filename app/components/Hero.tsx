"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ContentContainer from './ContentContainer';
import { ScrollFadeIn } from './ScrollAnimations';
import VimeoPlayer from './VimeoPlayer';

interface HeroProps {
    subtitle?: string;
    vimeoId?: string;
}

export default function Hero({ subtitle, vimeoId }: HeroProps) {
    const router = useRouter();

    const handleApply = () => {
        router.push('/apply');
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center pb-12 overflow-hidden  text-white selection:bg-white selection:text-black">

            {/* SZN Capital Header */}
            <div className="w-full py-5 text-center animate-fade-in relative z-20">
                <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                        SZN Capital
                    </p>
                </Link>
            </div>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gray-800/20 via-[#030303]/0 to-transparent pointer-events-none" />

            <ContentContainer size="wide" className="relative z-10 mt-4 mb-8 text-center px-4">
                <ScrollFadeIn direction="up" duration={0.8}>
                    <h1 className="text-4xl sm:text-5xl md:text-[42px] lg:text-[50px] font-sans font-medium text-white leading-tight lg:leading-[1.15] -tracking-[0.03em] flex flex-col gap-2">
                        <span>Become a <span className="italic font-light text-gray-200 -tracking-[0.05em] antialiased" style={{ fontFamily: '"Times New Roman", Times, serif' }}>6-Figure</span> Funded Trader,</span>
                        <span>or I Will Keep Coaching You Until You Are — <span className="italic font-light text-white -tracking-[0.05em] antialiased" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Guaranteed</span></span>
                    </h1>
                </ScrollFadeIn>
            </ContentContainer>

            {/* Subheadline */}
            <ContentContainer size="wide" className="relative z-10 mb-8 text-center px-6">
                <ScrollFadeIn direction="up" delay={0.2} duration={0.8}>
                    {subtitle ? (
                        <p className="text-sm md:text-base font-sans font-normal text-[#9CA1B2] leading-relaxed mx-auto max-w-5xl" dangerouslySetInnerHTML={{ __html: subtitle }} />
                    ) : (
                        <p className="text-sm md:text-base font-sans font-normal text-[#9CA1B2] leading-relaxed mx-auto max-w-5xl">
                                Join a 12-month mentorship built on years of direct 1-on-1 coaching, backed by <strong className="font-semibold text-white">over $1M in verified student payouts</strong>.<br className="hidden md:block" />
                                Get <strong className="font-semibold text-white">direct access to me, daily accountability, and personalized coaching</strong> designed to turn<br className="hidden md:block" />
                                inconsistent execution into repeatable performance.<br />
                                Limited spots available.
                            </p>
                    )}
                </ScrollFadeIn>
            </ContentContainer>



            {/* Video Container (VSL) */}
            <ContentContainer size="normal" className="relative z-10 mb-10 px-4">
                <ScrollFadeIn direction="up" delay={0.3} duration={0.8}>
                    <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-white/10 to-white/5 shadow-2xl">
                        {vimeoId ? (
                            <VimeoPlayer videoId={vimeoId} autoPlay />
                        ) : (
                            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0e0f12] via-[#131418] to-[#0a0b0e]" />
                            </div>
                        )}
                    </div>
                </ScrollFadeIn>
            </ContentContainer>
            {/* CTA Button */}
            <div className="relative z-10 mb-12 group">
                <button
                    onClick={handleApply}
                    className="relative bg-white text-black px-16 py-4 rounded-full text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>

            </div>

            {/* Scroll Indicator */}
            <div className="mt-auto pt-4 pb-4 animate-bounce">
                <div className="flex flex-row items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                    <ChevronDown className="w-4 h-4 text-white" />
                    <p className="text-[10px] tracking-[0.3em] text-white uppercase font-sans">
                        Scroll to Continue
                    </p>

                </div>
            </div>
        </section>
    );
}