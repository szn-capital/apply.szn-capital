"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import ContentContainer from './ContentContainer';
import { ScrollFadeIn } from './ScrollAnimations';



interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "How is this different from just watching your YouTube or being in your Discord?",
        answer: "YouTube teaches concepts. Discord provides live insights and community. This mentorship is different. It's a structured execution system built around your trading. You receive direct feedback, personal accountability, and journal audits focused on improving real performance. Instead of consuming more content, you work side by side with a performance coach, dedicated mentors, and me to systematically improve your execution."
    },
    {
        question: "I've failed at trading before. Why would this be different?",
        answer: "Because this time you're not trying to figure it out alone. Instead of chasing setups or guessing what to fix, we identify the specific patterns holding you back and build a system tailored to how you actually trade. You receive structured accountability, ongoing feedback, and a process designed to remove the mistakes that previously caused inconsistency."
    },
    {
        question: "What's included in the program?",
        answer: `This is a 12-month mentorship designed to take you from inconsistent execution to structured, professional trading. Inside the program, you receive:<ul class="mt-3 space-y-1.5 list-none"><li>• Daily private journaling with coach feedback</li><li>• Weekly small-group calls with me</li><li>• Weekly group sessions with Saim and Dragos</li><li>• Bi-weekly performance psychology coaching with Sanj</li><li>• A fully customized trading system and personal playbook built with me</li><li>• Monthly journal audits conducted personally by me</li><li>• Ongoing 1-on-1 support based on your progress</li><li>• Lifetime access to the SZN Capital Discord community and daily streams</li><li>• Quarterly 1-on-1 progress calls (or every 6 weeks when qualified)</li></ul><span class="block mt-3">Coaching doesn't end after 12 months. Support continues until you achieve results.</span>`
    },
    {
        question: "How much time do I actually need to commit to this?",
        answer: "Around one hour per day is enough to journal properly, attend key calls, and implement feedback. This isn't passive content, it's hands-on execution work focused on improving how you actually trade. Consistent progress comes from applying the process regularly, not just consuming information."
    },
    {
        question: "I'm already profitable. Is this still for me?",
        answer: "Yes. Many traders join when they are already profitable but struggle to scale consistently. As position size increases, small execution or risk management mistakes become amplified. This mentorship focuses on refining your edge, strengthening decision-making under pressure, and building routines that allow your psychology, risk management, and execution to support larger size."
    },
    {
        question: "What markets/strategies do you teach?",
        answer: "The framework focuses on high-probability execution built around price action, liquidity, narrative, and higher-timeframe context, aligned with ICT/SMC principles. Primary markets include FX (EURUSD, GBPUSD, etc.) and indices (ES, NQ), with adaptability for crypto when relevant. Rather than forcing one rigid strategy, the system is tailored to your strengths, preferred market, and execution style."
    },
    {
        question: "Do I need prior knowledge?",
        answer: "Yes. A basic understanding of trading is required. You should already know how to read charts, understand liquidity concepts, and be familiar with multiple timeframes. If you've completed the free 12-hour course or followed my YouTube content, you'll have the foundation needed. This mentorship is designed for traders who already understand the basics but are struggling to achieve consistent execution."
    },
    {
        question: "How quickly can I see results?",
        answer: "Many traders notice measurable improvements in execution and decision-making within the first 8\u201312 weeks, especially in consistency and discipline rather than just PnL. Progress varies depending on your starting point and how consistently you apply the process, but the mentorship is designed to create steady, compounding improvement over time with ongoing support throughout the journey."
    },
    {
        question: "I've already tried other trading programs. What makes this different?",
        answer: "Many programs focus on teaching concepts or placing traders into large communities without structured guidance. This mentorship is built differently, around direct feedback, accountability, and personalized execution work. You receive ongoing support, access to mentors and a performance coach, detailed trade audits, and a system tailored to your edge and psychology. Rather than completing a short program and moving on, we work with you until consistent execution is achieved."
    },
    {
        question: "Who is this not for?",
        answer: "This mentorship isn't designed for traders looking for quick shortcuts or passive learning. If you're not willing to journal, apply feedback, or actively work on improving your execution, this won't be the right fit. The program is built for traders who are ready to take responsibility for their process and commit to building long-term consistency through structured work."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-6 relative bg-transparent">
            <ContentContainer size="normal">

                {/* Header */}
                <ScrollFadeIn direction="up" duration={0.8}>
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-sans font-medium text-white -tracking-[0.03em]">
                            <span
                                className="italic font-light text-gray-200 pr-3 antialiased"
                                style={{ fontFamily: '"Times New Roman", Times, serif' }}
                            >
                                Frequently
                            </span>
                            Asked Questions
                        </h2>
                    </div>
                </ScrollFadeIn>

                {/* FAQ List */}
                <ScrollFadeIn direction="up" delay={0.2} duration={0.8}>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group border-b border-white/5 last:border-0"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-6 flex items-start md:items-center justify-between text-left focus:outline-none"
                                >
                                    <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                        }`}>
                                        {faq.question}
                                    </span>

                                    {/* Animated Icon Wrapper */}
                                    <div className="ml-6 flex-shrink-0 relative w-6 h-6 flex items-center justify-center">
                                        <div className={`absolute transition-all duration-300 ease-out ${openIndex === index ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                                            }`}>
                                            <Plus className="w-5 h-5 text-gray-500 group-hover:text-white" />
                                        </div>
                                        <div className={`absolute transition-all duration-300 ease-out ${openIndex === index ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                                            }`}>
                                            <Minus className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </button>

                                {/* Smooth Collapse Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[800px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div
                                        className="text-gray-400 text-sm md:text-base leading-relaxed pr-12 font-light"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollFadeIn>

                {/* CTA Button */}
                <div className="flex justify-center mt-20">
                    <Link href="/apply">
                        <button className="bg-white text-black px-12 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Apply Now
                        </button>
                    </Link>
                </div>

            </ContentContainer>
        </section>
    );
}
