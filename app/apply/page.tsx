"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const ICLOSED_URL = 'https://app.iclosed.io/e/szn-academy/szn-academy';
const ICLOSED_SCRIPT = 'https://app.iclosed.io/assets/widget.js';

export default function ApplyPage() {
    const [ready, setReady] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    // Load the iClosed embed script once the widget container is in the DOM
    useEffect(() => {
        const container = widgetRef.current;
        if (!container) return;

        // Show a loading line until iClosed's iframe has loaded, instead of a black box
        const markReady = () => window.setTimeout(() => setReady(true), 400);
        const fallback = window.setTimeout(() => setReady(true), 10000);
        const observer = new MutationObserver(() => {
            const iframe = container.querySelector('iframe');
            if (iframe) {
                iframe.addEventListener('load', markReady, { once: true });
                observer.disconnect();
            }
        });
        observer.observe(container, { childList: true, subtree: true });

        const script = document.createElement('script');
        script.src = ICLOSED_SCRIPT;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            window.clearTimeout(fallback);
            observer.disconnect();
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <main className="min-h-screen text-white selection:bg-purple-500/30">
            {/* Minimal Header */}
            <div className="w-full py-5 text-center animate-fade-in relative z-10">
                <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                        SZN Capital
                    </p>
                </Link>
            </div>

            {/* iClosed Embed - Inline Widget */}
            <div className="relative w-full h-[calc(100vh-52px)]">
                {!ready && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none bg-[#0b0b0d]">
                        <p className="text-sm text-gray-400 tracking-wide animate-pulse">loading the application…</p>
                    </div>
                )}
                <div
                    ref={widgetRef}
                    className="iclosed-widget"
                    data-url={ICLOSED_URL}
                    title="SZN Academy"
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </main>
    );
}
