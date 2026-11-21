"use client"
import { useEffect, useState } from 'react';

// Phone-only "Apply Now" bar. The page is ~11 screens long on a phone and the button only
// sits in the hero and the two booking blocks, so this keeps it one tap away.
// Hidden while the hero button or a booking block is on screen, so it never doubles up.
export default function StickyApply() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const targets = [
            document.getElementById('hero-apply'),
            ...Array.from(document.querySelectorAll<HTMLElement>('[data-booking]')),
        ].filter(Boolean) as HTMLElement[];
        if (!targets.length) return;

        const visible = new Set<Element>();
        let pastHero = false;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
                if (e.target.id === 'hero-apply' && !e.isIntersecting) pastHero = e.boundingClientRect.top < 0;
            });
            setShow(pastHero && visible.size === 0);
        }, { threshold: 0 });
        targets.forEach((t) => io.observe(t));
        return () => io.disconnect();
    }, []);

    const apply = () => {
        document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div
            aria-hidden={!show}
            className={`md:hidden fixed inset-x-0 bottom-0 z-50 px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/90 to-transparent transition-[opacity,transform] duration-300 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
        >
            <button
                onClick={apply}
                tabIndex={show ? 0 : -1}
                className="w-full bg-white text-black py-3.5 rounded-full text-sm font-semibold tracking-wide active:scale-[0.98] transition-transform"
            >
                Apply Now
            </button>
        </div>
    );
}
