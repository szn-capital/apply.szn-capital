"use client"
import React from 'react';
import Link from 'next/link';
import ContentContainer from '../components/ContentContainer';
import MinimalFooter from '../components/MinimalFooter';

export default function LegalDisclosurePage() {
    return (
        <div className="min-h-screen bg-linear-to-b from-bg-dark-start to-bg-dark-end text-white">
            {/* Header */}
            <header className="py-8 border-b border-white/5">
                <ContentContainer>
                    <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                        SZN CAPITAL
                    </Link>
                </ContentContainer>
            </header>

            {/* Main Content */}
            <main className="py-16 md:py-24">
                <ContentContainer>
                    <div className="max-w-3xl mx-auto space-y-16">

                        {/* ========== PAGE TITLE ========== */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold">Legal Disclosure</h1>
                            <p className="text-gray-400">Effective Date: March 3, 2026</p>
                        </div>

                        {/* ========================================== */}
                        {/* 1. LEGAL ENTITY / CONTACT                  */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">Legal Entity</h2>

                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-4 text-gray-300 leading-relaxed">
                                <div>
                                    <p className="text-white font-medium">SZN Capital</p>
                                    <p>Meydan Grandstand, 6th Floor</p>
                                    <p>Meydan Road, Nad Al Sheba</p>
                                    <p>Dubai, United Arab Emirates</p>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Contact</p>
                                    <p>Email: support@szn-capital.com</p>
                                </div>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 2. RISK & EARNINGS DISCLAIMER              */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">Risk & Earnings Disclaimer</h2>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    <span className="font-medium text-white">No financial advice.</span> SZN Capital does not provide investment advice, financial advice, trading advice, or any other form of regulated financial guidance. All content, mentorship, educational materials, and communication provided through this website and our programs are for educational and informational purposes only.
                                </p>
                                <p>
                                    <span className="font-medium text-white">No guarantees of profit.</span> Trading in financial markets involves substantial risk of loss and is not suitable for every person. Past performance — whether our own or that of any participant — is not indicative of future results. There is no guarantee that you will earn any money using the techniques, ideas, or strategies presented. Your results will depend entirely on your own decisions, discipline, and market conditions.
                                </p>
                                <p>
                                    <span className="font-medium text-white">Your responsibility.</span> You are solely responsible for your own trading decisions and any financial losses or gains that result. By using this website or participating in any SZN Capital program, you acknowledge that you understand and accept these risks.
                                </p>
                                <p>
                                    <span className="font-medium text-white">No regulated activity.</span> SZN Capital is not a registered broker-dealer, investment advisor, or financial institution. We do not manage client funds, execute trades on behalf of others, or hold any regulatory licenses related to the provision of financial services.
                                </p>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 3. NO REFUND POLICY                        */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">No Refund Policy</h2>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    All purchases made through our website, including but not limited to digital programs, coaching services, memberships, downloadable materials, and live sessions, are final. We maintain a <span className="font-medium text-white">strict no-refund policy</span>. By completing your purchase, you acknowledge and agree that you will not be entitled to a refund, chargeback, or reversal of payment under any circumstances.
                                </p>
                                <p>
                                    Due to the immediate access to proprietary content, intellectual property, digital materials, and live resources provided upon enrollment, refunds cannot be issued once payment has been processed.
                                </p>
                                <p>
                                    If you select a payment plan option, you remain legally obligated to complete all remaining installment payments according to the agreed schedule. Failure to complete installment payments may result in suspension of access and/or collection action.
                                </p>
                                <p>
                                    <span className="font-medium text-white">By purchasing our services, you expressly agree to this No Refund Policy.</span>
                                </p>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 4. ABOUT THE PROGRAM                       */}
                        {/* ========================================== */}
                        <section className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-semibold">About the Program</h2>

                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white">Application Review Process</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Because this mentorship only works if you're ready to use it, we review every application for commitment, coachability, and alignment with our principles. If we don't believe we can genuinely help you, or the timing isn't right, we'll tell you directly. We'd rather protect your time and ours than enroll someone we can't serve at the highest level.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white">Who This Is For</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Knowing how to trade and executing consistently under pressure are two different skills. Many applicants have had winning months, some even funded. What they lack is structure, accountability, and someone who sees their blind spots. Profitable traders apply because they've hit a ceiling they can't break alone. These final steps help them exceed what they thought was possible.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white">Investment & ROI</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Most traders who apply have already spent more than this on courses, prop challenges, and blown accounts with nothing to show for it. The difference here is you're not paying for information, but for structure, accountability, and a team that pushes until you achieve your goals. The ROI isn't only financial. It's the time you stop wasting, the habits you finally fix, and the version of yourself that stops starting over every few months.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white">What Makes It Work</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The traders who get the most out of it treat the Academy as a professional commitment, not a product they bought. They apply feedback precisely, journal consistently, attend calls, and take responsibility for their patterns instead of avoiding them. This isn't something you consume passively; it's a structure you actively engage with. When that level of commitment is there, progress compounds far faster than most expect.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-medium text-white">Next Steps</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Your application is reviewed manually. If there's a potential fit, you'll be invited to a call where we assess your current situation, goals, and whether the Academy makes sense for where you are right now. There's no pressure — it's a conversation, not a pitch. If we're not the right fit, we'll tell you directly. If we are, you'll leave with full clarity on onboarding and exactly what to expect from day one.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 5. COACHING ACCESS & SESSION AVAILABILITY  */}
                        {/* ========================================== */}
                        <section className="space-y-6 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Coaching Access & Session Availability</h2>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Access to coaching sessions, live calls, mentorship calls, group calls, psychology sessions, or any other live training components provided as part of the program (collectively, the <span className="font-medium text-white">"Coaching Sessions"</span>) are delivered by a team of coaches and mentors. This team may include, but is not limited to, David and other appointed coaches, facilitators, or instructors.
                                </p>
                                <p>
                                    While SZN Capital intends to provide Coaching Sessions on a consistent basis throughout the duration of the program, participants understand and agree that the exact number, frequency, timing, format, and hosting coach of such sessions are not guaranteed and may change at the sole discretion of the Company.
                                </p>
                                <p>
                                    From time to time, Coaching Sessions may be rescheduled, substituted, replaced, canceled, consolidated, or delivered by different coaches due to circumstances including but not limited to scheduling conflicts, operational decisions, program improvements, illness, travel, personal circumstances, force majeure events, or the unavailability or departure of a specific coach or instructor.
                                </p>
                                <p>
                                    SZN Capital reserves the right to modify the structure of Coaching Sessions at its discretion, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 pl-2">
                                    <li>Substituting one coach for another</li>
                                    <li>Adjusting the number of sessions</li>
                                    <li>Modifying the duration or format of sessions</li>
                                    <li>Transitioning certain sessions to alternative formats such as workshops, Q&A calls, written guidance, community support, or other educational resources</li>
                                </ul>
                                <p>
                                    Excluding David, the participation of any specific coach is not guaranteed for any particular session or time period. The Company's obligation is limited to providing reasonable educational support and access to the program curriculum and community during the participant's program term.
                                </p>
                                <p>
                                    Participants acknowledge and agree that such adjustments do not constitute a breach of the agreement and do not entitle the participant to refunds, credits, or any form of compensation. SZN Capital retains full discretion to manage coaching personnel, scheduling, and session delivery in a manner it deems appropriate for the continued operation and improvement of the program.
                                </p>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 6. CONFIDENTIALITY & NON-DISCLOSURE        */}
                        {/* ========================================== */}
                        <section className="space-y-6 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Confidentiality & Non-Disclosure</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By accessing or participating in any SZN Capital program, service, or community, you agree to the following confidentiality obligations.
                            </p>

                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <div>
                                    <p className="text-white font-medium mb-2">Confidential Content</p>
                                    <p>
                                        The following materials are proprietary and confidential to SZN Capital and may not be shared, distributed, reproduced, or disclosed without prior written consent: 1-on-1 coaching calls and group session recordings, pre-recorded content, lessons and curriculum materials, journal reviews, risk metrics and performance breakdowns, screen recordings and trade analysis shared within the program, private Discord channel messages and community communications, uploaded trade screenshots and journal data, behavioural feedback and coaching notes, and trading performance data and HTO methodology materials.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-2">Member Data Protection</p>
                                    <p>
                                        Student and member information shared within the program — including personal trading performance, journal entries, behavioural feedback, and coaching interactions — is strictly confidential. Members agree not to share, screenshot, or distribute the personal data, trading results, or private communications of other members without their explicit consent.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-2">Non-Disclosure Obligation</p>
                                    <p>
                                        You agree not to disclose, reproduce, or distribute any confidential content to third parties, whether publicly or privately, including but not limited to social media, forums, messaging platforms, or competing educational programs. This obligation survives the termination of your participation in any SZN Capital program.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-2">Breach & Remedies</p>
                                    <p>
                                        Unauthorised disclosure of confidential content may result in immediate removal from the program without refund. SZN Capital reserves the right to pursue all available legal remedies, including injunctive relief and damages, under the laws of the United Arab Emirates.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 6. TECHNOLOGIES & TOOLS                    */}
                        {/* ========================================== */}
                        <section className="space-y-6 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Technologies & Tools We Use</h2>

                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <div>
                                    <p className="text-white font-medium mb-1">Website Infrastructure</p>
                                    <p>Next.js, React, TypeScript</p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-1">Styling & UI</p>
                                    <p>TailwindCSS, Lucide React</p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-1">Embedded Third-Party Services</p>
                                    <p>Calendly (scheduling, Calendly LLC, USA), Typeform (application forms, TYPEFORM SL, Spain / EU)</p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-1">Email & Communication</p>
                                    <p>Kit, formerly ConvertKit (email marketing, Kit, USA)</p>
                                </div>

                                <div>
                                    <p className="text-white font-medium mb-1">Advertising & Analytics</p>
                                    <p>Meta Pixel (campaign tracking, Meta Platforms Inc., USA), Google Ads Conversion Tracking (Google LLC, USA)</p>
                                </div>

                                <p className="text-sm text-gray-400 pt-2">
                                    We commit to keeping this list updated as we add or change technologies.
                                </p>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 7. GOVERNING LAW                           */}
                        {/* ========================================== */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Governing Law</h2>
                            <p className="text-gray-300 leading-relaxed">
                                This Legal Disclosure and any disputes arising in connection with it shall be governed by and construed in accordance with the laws of the United Arab Emirates, specifically the Emirate of Dubai.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 8. CHANGES                                 */}
                        {/* ========================================== */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Changes to This Disclosure</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Legal Disclosure at any time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 9. CONTACT                                 */}
                        {/* ========================================== */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Questions?</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have any questions about this disclosure, our data processing practices, or our program, please contact us at <a href="mailto:support@szn-capital.com" className="text-blue-400 hover:text-blue-300 underline">support@szn-capital.com</a>.
                            </p>
                            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-gray-300 text-sm leading-relaxed">
                                <p className="text-white font-medium mb-2">SZN Capital</p>
                                <p>Meydan Grandstand, 6th Floor</p>
                                <p>Meydan Road, Nad Al Sheba</p>
                                <p>Dubai, United Arab Emirates</p>
                                <p className="mt-2">Email: support@szn-capital.com</p>
                            </div>
                        </section>

                    </div>
                </ContentContainer>
            </main>

            {/* Footer */}
            <MinimalFooter />
        </div>
    );
}
