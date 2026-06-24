"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
    const [mounted, setMounted] = useState(false);

    // Load Typeform embed script
    useEffect(() => {
        setMounted(true);

        const script = document.createElement('script');
        script.src = 'https://embed.typeform.com/next/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
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

            {/* Typeform Embed - Inline Widget */}
            <div className="w-full h-[calc(100vh-52px)]">
                {mounted && (
                    <div
                        data-tf-widget="OYdvigDE"
                        data-tf-inline-on-mobile
                        data-tf-medium="snippet"
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
            </div>
        </main>
    );
}
