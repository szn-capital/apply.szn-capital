import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollFadeIn } from './ScrollAnimations';

export const confirmationFAQs = [
    {
        q: "Why isn't everyone accepted?",
        a: "Because this mentorship only works for traders willing to execute consistently. Every application is reviewed for commitment, coachability, and readiness to follow a structured process. If we don't believe we can genuinely help you, or the timing isn't right, we'll tell you directly. We only work with traders we're confident we can move forward."
    },
    {
        q: "Why do already profitable traders still apply?",
        a: "Because profitability and scalability are different problems. Many traders can make money, but execution breaks down as size, pressure, and expectations increase. What they need isn't more strategy. It's structure, accountability, and refinement. Most apply when they realize they've reached a ceiling they can't break alone."
    },
    {
        q: "How should I think about the investment?",
        a: "Most traders don't fail because they lack information. They fail because they lack structure and consistent feedback. This mentorship isn't another course. It's an execution system designed to shorten the trial-and-error cycle and help you reach consistency faster. The real return isn't just profit, it's eliminating years of repeated mistakes."
    },
    {
        q: "What determines success inside the program?",
        a: "Success comes from execution, not information. The traders who improve fastest treat this as a professional standard: they implement feedback, track their behavior honestly, show up consistently, and take responsibility for results. The structure works, but only when it's actively used."
    },
    {
        q: "What happens during the enrollment call?",
        a: "Your application is reviewed beforehand, so the call is focused on you, not a generic presentation. We'll look at your current trading situation, your goals, and whether the Academy actually makes sense for where you are right now. If we don't believe we can genuinely help you, we'll tell you directly. If we are a good match, you'll leave with complete clarity on onboarding, expectations, and exactly what happens from day one."
    },
];

interface ConfirmationFAQProps {
    openFAQ: number | null;
    toggleFAQ: (index: number) => void;
}

export default function ConfirmationFAQ({ openFAQ, toggleFAQ }: ConfirmationFAQProps) {
    return (
        <ScrollFadeIn direction="up" delay={0.15} duration={0.7}>
            <div className="max-w-3xl mx-auto mb-24">
                <h2 className="text-2xl md:text-3xl font-sans font-medium text-white text-center mb-12 -tracking-[0.02em]">
                    Before Your Call, Read This
                </h2>
                {confirmationFAQs.map((faq, index) => (
                    <div key={index} className="border-b border-white/5 last:border-0">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full py-5 flex items-start justify-between text-left focus:outline-none group"
                        >
                            <span className={`text-sm md:text-base font-medium transition-colors duration-300 pr-4 ${openFAQ === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                                }`}>
                                {faq.q}
                            </span>
                            <div className="ml-4 text-gray-500 shrink-0 mt-0.5">
                                {openFAQ === index ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphens-auto">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ScrollFadeIn>
    );
}
