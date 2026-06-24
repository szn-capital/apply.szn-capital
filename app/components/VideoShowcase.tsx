"use client"
import React from 'react';
import { Play } from 'lucide-react';
import VimeoPlayer from './VimeoPlayer';
import { ScrollFadeIn } from './ScrollAnimations';

export interface VideoItem {
    title: string;
    subtitle: string;
    videoId?: string;
}

interface VideoShowcaseProps {
    items: VideoItem[];
}

export default function VideoShowcase({ items }: VideoShowcaseProps) {
    return (
        <div className="flex flex-col gap-24 py-16">
            {items.map((item, idx) => (
                <ScrollFadeIn key={idx} direction="up" delay={0.1} duration={0.8}>
                    <div className="flex flex-col items-center">
                        {/* Title & Subtitle */}
                        <div className="text-center mb-8 max-w-3xl px-6">
                            <h2 className="text-2xl md:text-[34px] font-sans font-bold text-white mb-3 -tracking-[0.02em] leading-none">
                                {item.title}
                            </h2>
                            <p className="text-[#9CA1B2] text-sm md:text-[15px] font-sans font-semibold -tracking-[0.02em] leading-none">
                                {item.subtitle}
                            </p>
                        </div>

                        {/* Video Player / Placeholder Container */}
                        <div className="w-full max-w-4xl px-6">
                            {item.videoId ? (
                                <div className="relative rounded-2xl p-[2px] bg-gradient-to-b from-[#782FFF]/30 to-[#782FFF]/5 shadow-[0_0_40px_rgba(120,47,255,0.15)]">
                                    <VimeoPlayer videoId={item.videoId} accentColor="rgba(120,47,255,0.4)" />
                                </div>
                            ) : (
                                /* Placeholder Player */
                                <div className="group relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#0e0f12] shadow-2xl transition-all duration-300 hover:border-white/10 flex flex-col items-center justify-center cursor-pointer">
                                    {/* Subtle radial glow inside */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0e0f12] via-[#131418] to-[#0a0b0e]" />
                                    
                                    {/* SVG Grain overlay */}
                                    <div className="absolute inset-0 opacity-[0.02]" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                                    }} />

                                    {/* Play Button Icon wrapper */}
                                    <div className="relative flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/[0.1] group-hover:border-white/20 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                            <Play className="w-5 h-5 md:w-7 md:h-7 text-white fill-white ml-0.5 md:ml-1 opacity-60 group-hover:opacity-95 transition-opacity" />
                                        </div>
                                        {/* Label text */}
                                        <span className="text-gray-500 text-[11px] tracking-wider group-hover:text-gray-300 transition-colors uppercase font-medium mt-1">
                                            video 1
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollFadeIn>
            ))}
        </div>
    );
}
