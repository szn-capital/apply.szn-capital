"use client"
import { useState, useCallback } from 'react';
import { Play, VolumeX } from 'lucide-react';

interface VimeoPlayerProps {
    videoId: string;
    /** Optional accent color for the glow effect. Defaults to white. */
    accentColor?: string;
    /** Autoplay muted when the page loads. User clicks to unmute. */
    autoPlay?: boolean;
}

export default function VimeoPlayer({ videoId, accentColor, autoPlay = false }: VimeoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [showUnmuteHint, setShowUnmuteHint] = useState(autoPlay);

    const glowColor = accentColor || 'rgba(255,255,255,0.06)';

    const handlePlay = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const dismissHint = useCallback(() => {
        setShowUnmuteHint(false);
    }, []);

    const iframeSrc = autoPlay && isPlaying && showUnmuteHint
        ? `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&muted=1&controls=1`
        : `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0&autoplay=1&controls=1`;

    return (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
            {/* Vimeo iframe */}
            {isPlaying && (
                <iframe
                    src={iframeSrc}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    title="Video"
                />
            )}

            {/* Unmute hint for autoplay — small pill overlay, top-right */}
            {autoPlay && showUnmuteHint && (
                <button
                    onClick={dismissHint}
                    className="absolute top-2 right-2 md:top-4 md:right-4 z-20 flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs font-medium animate-pulse hover:bg-white/10 hover:animate-none transition-colors cursor-pointer"
                    style={{ animationDuration: '2s' }}
                >
                    <VolumeX className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    Tap to unmute
                </button>
            )}

            {/* Custom overlay — only shown when not autoplay */}
            {!autoPlay && (
                <div
                    className={`absolute inset-0 z-10 flex items-center justify-center cursor-pointer transition-all duration-500 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    onClick={handlePlay}
                >
                    {/* Dark gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0e0f12] via-[#131418] to-[#0a0b0e]" />

                    {/* Subtle grain texture */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
                    }} />

                    {/* Radial light accent behind play button */}
                    <div
                        className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)` }}
                    />

                    {/* Play button */}
                    <div className="relative">
                        {/* Pulse ring */}
                        <div className="absolute inset-0 w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 animate-ping opacity-20" style={{ animationDuration: '2.5s' }} />

                        <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.15] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/[0.12] hover:border-white/25 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
                            <Play className="w-5 h-5 md:w-7 md:h-7 text-white fill-white ml-0.5 md:ml-1 opacity-90" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
