import Image from 'next/image';
import Link from 'next/link';
import ContentContainer from './ContentContainer';
import { ScrollFadeIn } from './ScrollAnimations';

interface TeamMember {
    name: string;
    description: string;
    imageSrc: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Personalized Playbook",
        description: "A complete trading system built on my proven <span class=\"text-white font-medium\">4-Step Protocol</span>, responsible for multiple verified 6-figure student payouts, designed around your schedule, risk tolerance, and execution style, and continuously refined using real performance data.",
        imageSrc: "/team/member-1.webp"
    },
    {
        name: "Performance Psychology Coaching",
        description: "Work with a dedicated <span class=\"text-white font-medium\">performance coach with 10+ years of experience</span> helping traders identify and eliminate the behavioral patterns that limit consistency and performance.",
        imageSrc: "/team/member-2.webp"
    },
    {
        name: "1:1 Access with David",
        description: "Direct access to me, including <span class=\"text-white font-medium\">trade audits, system refinement, accountability, and execution feedback</span>. This is real mentorship, not just another course.",
        imageSrc: "/team/member-3.svg"
    }
];

export default function TeamSection() {
    return (
        <section className="pt-4 pb-24 px-6">
            <ContentContainer size="wide">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {teamMembers.map((member, index) => (
                        <ScrollFadeIn key={index} direction="up" delay={index * 0.15} duration={0.8} className="h-full">
                            <div className="group flex flex-col h-full p-4 rounded-[40px] border border-white/5 bg-[#0c0d10] hover:bg-[#111215] transition-colors duration-300">
                                {/* Image Container - Floating inside padding with rounded corners */}
                                <div className="relative w-full aspect-4/5 rounded-[32px] overflow-hidden mb-8 bg-gray-900 shrink-0">
                                    <Image
                                        src={member.imageSrc}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority={index === 0}
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    />
                                    {/* Subtle inner gradient for depth */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-50" />
                                </div>

                                {/* Text Content - Aligned below image */}
                                <div className="px-2 pb-4 grow flex flex-col">
                                    <h3 className="text-xl md:text-2xl font-sans font-medium text-white mb-3">
                                        {member.name}
                                    </h3>
                                    <p
                                        className="text-sm text-gray-400 leading-relaxed font-light tracking-wide"
                                        dangerouslySetInnerHTML={{ __html: member.description }}
                                    />
                                </div>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-20">
                    <Link href="/apply">
                        <button className="bg-white text-black px-12 py-4 rounded-full text-sm font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300">
                            Get Access Now
                        </button>
                    </Link>
                </div>
            </ContentContainer>
        </section>
    );
}