import Link from 'next/link';
import IClosedEmbed from '../components/IClosedEmbed';

export default function ApplyPage() {
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
            <IClosedEmbed height="calc(100vh - 52px)" className="bg-[#0b0b0d]" />
        </main>
    );
}
