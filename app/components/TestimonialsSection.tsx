"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import { ScrollFadeIn } from './ScrollAnimations';
import { allTraders, oneOnOneStudents, fundedTraders } from '../data/fundedTraders';

// Integrierter ContentContainer
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

// --- TYPES ---
interface Testimonial {
    name: string;
    handle: string;
    avatar: string;
    text: string;
    certImage: string;
    payout: string;
    payoutLabel?: string;
}

// --- DATA ---
// Distribute traders across 3 rows - only use funded traders
// Payout cards first, biggest first; cards without a payout (passed evals, +R weeks) go to the back.
const payoutValue = (p?: string) => Number((p || "").replace(/[^0-9.]/g, "")) || 0;
const sorted: Testimonial[] = [...fundedTraders]
    .map(t => ({ ...t, payout: t.payout || "" }))
    .sort((a, b) => payoutValue(b.payout) - payoutValue(a.payout));
// dealt round-robin so every row mixes big and small payouts
const row1: Testimonial[] = sorted.filter((_, i) => i % 3 === 0);
const row2: Testimonial[] = sorted.filter((_, i) => i % 3 === 1);
const row3: Testimonial[] = sorted.filter((_, i) => i % 3 === 2);


// Profile photo, or the first letter of the name when a student has no photo (new cards added by the daily update)
const Avatar = ({ src, name, sizes }: { src: string; name: string; sizes: string }) =>
    src ? <Image src={src} alt={name} fill sizes={sizes} className="object-cover" />
        : <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-300 bg-[#1c1c1f]">{name.charAt(0).toUpperCase()}</span>;

// --- COMPONENTS ---

// Card Component mit onClick Handler
const TestimonialCard = ({ item, onClick }: { item: Testimonial; onClick: (item: Testimonial) => void }) => (
    <div
        onClick={() => onClick(item)}
        className={`${item.text ? 'w-[280px] sm:w-[500px]' : 'w-[200px] sm:w-[280px]'} shrink-0 bg-[#0e0f12] border border-white/5 rounded-[20px] sm:rounded-[28px] p-4 sm:p-6 hover:border-white/10 hover:bg-[#131418] transition-colors duration-300 cursor-pointer group/card flex flex-col`}
    >
        {/* Header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/10 bg-gray-800 shrink-0 relative">
                <Avatar src={item.avatar} name={item.name} sizes="48px" />
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-white font-medium text-sm sm:text-base truncate">{item.name}</p>
                {item.handle && <p className="text-gray-400 text-xs sm:text-sm truncate">{item.handle}</p>}
            </div>
            {item.payout ? (
                <div className="ml-auto text-right shrink-0">
                    <p className="text-[#86EBC6] font-semibold text-base sm:text-xl leading-none tabular-nums">{item.payout}</p>
                    <p className="text-gray-500 text-[10px] font-semibold tracking-[0.12em] uppercase mt-1">payout</p>
                </div>
            ) : (
                <div className="ml-auto text-gray-600 group-hover/card:text-blue-400 transition-colors shrink-0">
                    <ExternalLink size={16} />
                </div>
            )}
        </div>

        {/* Content Layout: Text Left | Image Right (or Center if no text) */}
        <div className={`flex gap-3 sm:gap-5 ${item.text ? 'items-center' : 'items-center justify-center mt-1 sm:mt-2'}`}>
            {/* Text Area */}
            {item.text && (
                <div className="flex-1 min-w-0">
                    <p className="text-gray-200 text-[13px] sm:text-[15px] leading-snug sm:leading-relaxed line-clamp-4 sm:line-clamp-5">
                        {item.text}
                    </p>
                </div>
            )}

            {/* Certificate Thumbnail */}
            <div className={`relative ${item.text ? 'w-24 sm:w-36' : 'w-40 sm:w-48'} aspect-4/3 shrink-0 rounded-xl overflow-hidden border border-white/5 bg-black/30 group-hover/card:border-white/20 transition-colors`}>
                <Image
                    src={item.certImage}
                    alt="Certificate"
                    fill
                    sizes="192px"
                    className="object-cover opacity-80 group-hover/card:opacity-100 transition-opacity"
                />
                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/40">
                    <ZoomIn size={16} className="text-white" />
                </div>
            </div>
        </div>
    </div>
);

// Marquee Row Component
// Each row glides on its own and can be swiped (phone) or dragged (mouse) back and forth, like links.szn-capital.com.
// The row is a normal horizontal scroll box with the cards listed three times; a frame loop nudges it along inside
// the middle copy and wraps there, out of sight. While a finger, wheel, drag or the phone's own momentum moves the
// row, the loop stays off (no fighting, no stutter); 1.5 s after the row comes to rest it carries on.
const MarqueeRow = ({ items, direction = 'left', speed = 40, onCardClick }: {
    items: Testimonial[];
    direction?: 'left' | 'right';
    speed?: number; // seconds for one full set of cards to pass
    onCardClick: (item: Testimonial) => void;
}) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const dragged = useRef(false);

    useEffect(() => {
        const row = rowRef.current, track = trackRef.current;
        if (!row || !track) return;
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        const dir = direction === 'right' ? -1 : 1;
        const third = () => track.scrollWidth / 3;
        let pos = 0, mine = -1, last = 0, pausedUntil = 0, resting = true, raf = 0;
        let down: { x: number; s: number } | null = null;
        const set = (x: number) => { pos = x; row.scrollLeft = x; mine = row.scrollLeft; };
        const centre = () => {
            const w = third(); if (!w) return;
            let x = row.scrollLeft;
            while (x < w) x += w;
            while (x >= 2 * w) x -= w;
            if (Math.abs(x - row.scrollLeft) > 1) set(x); else pos = x;
        };
        set(third() + (dir < 0 ? third() / 2 : 1));
        const pause = () => { pausedUntil = performance.now() + 1500; };
        const onScroll = () => { if (Math.abs(row.scrollLeft - mine) > 1.5) pause(); };
        const onDown = (e: MouseEvent) => { down = { x: e.clientX, s: row.scrollLeft }; dragged.current = false; pause(); e.preventDefault(); };
        const onMove = (e: MouseEvent) => {
            if (!down) return;
            const dx = e.clientX - down.x;
            if (Math.abs(dx) > 5) dragged.current = true;
            row.scrollLeft = down.s - dx; pause();
        };
        const onUp = () => { if (down) { down = null; pause(); } };
        row.addEventListener('touchstart', pause, { passive: true });
        row.addEventListener('touchmove', pause, { passive: true });
        row.addEventListener('touchend', pause, { passive: true });
        row.addEventListener('wheel', pause, { passive: true });
        row.addEventListener('scroll', onScroll, { passive: true });
        row.addEventListener('mousedown', onDown);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        const step = (t: number) => {
            const dt = last ? Math.min(0.05, (t - last) / 1000) : 0; last = t;
            if (t > pausedUntil && !document.hidden && !reduce) {
                if (!resting) { centre(); resting = true; }
                const w = third();
                pos += dir * (w / speed) * dt;
                if (pos >= 2 * w) pos -= w; else if (pos < w) pos += w;
                row.scrollLeft = pos; mine = row.scrollLeft;
            } else if (t <= pausedUntil) resting = false;
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => {
            cancelAnimationFrame(raf);
            row.removeEventListener('touchstart', pause);
            row.removeEventListener('touchmove', pause);
            row.removeEventListener('touchend', pause);
            row.removeEventListener('wheel', pause);
            row.removeEventListener('scroll', onScroll);
            row.removeEventListener('mousedown', onDown);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, [direction, speed]);

    // a drag never opens a card; a tap does
    const open = (item: Testimonial) => { if (dragged.current) { dragged.current = false; return; } onCardClick(item); };

    return (
        <div className="mask-gradient">
            <div ref={rowRef} className="marquee-row relative flex w-full select-none overflow-x-auto cursor-grab active:cursor-grabbing">
                <div ref={trackRef} className="flex gap-4 py-2 w-max">
                    {[0, 1, 2].map((copy) => items.map((item, idx) => (
                        <TestimonialCard key={`${copy}-${idx}`} item={item} onClick={open} />
                    )))}
                </div>
            </div>
        </div>
    );
};


export default function TestimonialsSection() {
    const [selectedItem, setSelectedItem] = useState<Testimonial | null>(null);
    const [certIndex, setCertIndex] = useState(0);

    // Get certificates for selected testimonial
    const getCertificates = (item: Testimonial | null) => {
        if (!item) return [];
        const fullTrader = allTraders.find(t => t.name === item.name);
        return fullTrader?.certificates || [item.certImage];
    };

    const certificates = getCertificates(selectedItem);
    const totalCerts = certificates.length;

    const nextCert = () => {
        setCertIndex((prev) => (prev + 1) % totalCerts);
    };

    const prevCert = () => {
        setCertIndex((prev) => (prev - 1 + totalCerts) % totalCerts);
    };

    // Reset cert index when modal opens
    const handleItemSelect = (item: Testimonial) => {
        setSelectedItem(item);
        setCertIndex(0);
    };

    return (
        <section className="py-24 bg-transparent overflow-hidden">

            {/* Styles & Animations */}
            <style>{`
                .marquee-row { scrollbar-width: none; -webkit-overflow-scrolling: touch; overscroll-behavior-x: contain; }
                .marquee-row::-webkit-scrollbar { display: none; }
                .marquee-row img { -webkit-user-drag: none; user-select: none; }
                /* Maske für weiche Ränder */
                .mask-gradient {
                    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
                }
            `}</style>

            <ContentContainer size="wide">

                {/* Header */}
                <ScrollFadeIn direction="up" duration={0.8}>
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white -tracking-[0.03em] leading-tight">
                            <span className="accent-serif">
                                Results
                            </span>{" "}
                            Follow Process.
                            <br />
                            Process Is What We{" "}
                            <span className="accent-serif">
                                Build.
                            </span>
                        </h2>
                    </div>
                </ScrollFadeIn>

            </ContentContainer>

            {/* Marquee Container */}
            <ScrollFadeIn direction="up" delay={0.2} duration={1.0}>
                <div className="flex flex-col gap-4">
                    <MarqueeRow items={row1} direction="right" speed={80} onCardClick={handleItemSelect} />
                    <MarqueeRow items={row2} direction="left" speed={70} onCardClick={handleItemSelect} />
                    <MarqueeRow items={row3} direction="right" speed={90} onCardClick={handleItemSelect} />
                </div>
            </ScrollFadeIn>

            {/* MODAL OVERLAY */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedItem(null)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] rounded-[30px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 p-px bg-white/5 group"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Spinning Border */}
                        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#9333ea_100%)] animate-[spin_4s_linear_infinite]" />

                        {/* Close button - outside scrollable area so it's always visible */}
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="relative flex flex-col md:flex-row w-full h-full max-h-[90vh] overflow-y-auto bg-[#0e0f12] rounded-[29px] z-10">

                            {/* Large Image */}
                            <div className={`w-full ${selectedItem.text ? 'md:w-2/3' : 'md:w-full min-h-[50vh]'} bg-black/50 relative aspect-video md:aspect-auto flex items-center justify-center p-4 md:p-8`}>
                                {!selectedItem.text && (
                                    <div className="absolute top-4 left-4 z-20 flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-full pr-4 p-1.5 border border-white/10">
                                        <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20 relative">
                                            <Avatar src={selectedItem.avatar} name={selectedItem.name} sizes="36px" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-sm leading-tight">{selectedItem.name}</p>
                                            <p className="text-gray-400 text-xs leading-tight">{selectedItem.handle}</p>
                                        </div>
                                    </div>
                                )}
                                <img
                                    src={certificates[certIndex]}
                                    alt={`Certificate ${certIndex + 1} of ${totalCerts}`}
                                    className={`max-w-full ${selectedItem.text ? 'max-h-[70vh]' : 'max-h-[85vh]'} object-contain`}
                                />

                                {/* Certificate Navigation - Only show if multiple certificates */}
                                {totalCerts > 1 && (
                                    <>
                                        {/* Left Arrow */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                prevCert();
                                            }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-md group/arrow"
                                            aria-label="Previous certificate"
                                        >
                                            <svg className="w-5 h-5 group-hover/arrow:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>

                                        {/* Right Arrow */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                nextCert();
                                            }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-md group/arrow"
                                            aria-label="Next certificate"
                                        >
                                            <svg className="w-5 h-5 group-hover/arrow:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>

                                        {/* Certificate Counter */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full">
                                            <span className="text-white text-sm font-medium">
                                                {certIndex + 1} / {totalCerts}
                                            </span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Sidebar Info - Only show if there is text */}
                            {selectedItem.text && (
                                <div className="w-full md:w-1/3 p-8 flex flex-col border-l border-white/5 bg-[#131418]">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative">
                                            <Avatar src={selectedItem.avatar} name={selectedItem.name} sizes="48px" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-lg">{selectedItem.name}</p>
                                            <p className="text-gray-500 text-sm">{selectedItem.handle}</p>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-3">Testimonial</h4>
                                        <p className="text-gray-200 leading-relaxed text-sm">
                                            "{selectedItem.text}"
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}