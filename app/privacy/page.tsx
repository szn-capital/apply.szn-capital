"use client"
import React from 'react';
import Link from 'next/link';
import ContentContainer from '../components/ContentContainer';
import MinimalFooter from '../components/MinimalFooter';

export default function PrivacyPolicyPage() {
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
                            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                            <p className="text-gray-400">Effective Date: March 3, 2026</p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                In accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data,
                                the EU General Data Protection Regulation (GDPR) where applicable,
                                and applicable U.S. privacy regulations.
                            </p>
                        </div>

                        {/* ========================================== */}
                        {/* 1. INTRODUCTION                            */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">1. Introduction</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Welcome to SZN Capital. We are committed to protecting your privacy and handling your personal data in compliance with applicable laws. By using this website, you agree to the terms of this Privacy Policy. SZN Capital acts as the Data Controller in respect of personal data collected through this website.
                            </p>
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
                        {/* 2. INFORMATION WE COLLECT                  */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">2. Information We Collect</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may collect different categories of personal data depending on how you interact with our website and services.
                            </p>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <div>
                                    <p className="text-white font-medium mb-1">Information you provide directly</p>
                                    <p>Full name, email address, phone number, billing and payment details (processed via third-party processors), survey or application responses, and communications you send to us.</p>
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Automatically collected information</p>
                                    <p>Device type, browser type, operating system, referring URLs, and pages visited.</p>
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Information from third parties</p>
                                    <p>Payment processors, advertising platforms (e.g. Meta, Google), analytics providers, and CRM systems.</p>
                                </div>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 3. HOW WE USE YOUR INFORMATION             */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">3. How We Use Your Information</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use collected information to provide access to products and services, process payments, deliver educational content, send transactional and marketing emails (with consent), improve our website and offers, monitor advertising campaign performance, prevent fraud and unauthorized access, and comply with legal obligations. <span className="text-white font-medium">We do not sell personal data.</span>
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 4. LEGAL BASIS FOR PROCESSING              */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">4. Legal Basis for Processing</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you are located in the European Economic Area (EEA), we process your personal data based on: your consent (Art. 6(1)(a) GDPR), performance of a contract (Art. 6(1)(b) GDPR), compliance with legal obligations (Art. 6(1)(c) GDPR), and legitimate business interests (Art. 6(1)(f) GDPR). You may withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 5. COOKIES & TRACKING                      */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">5. Cookies & Tracking Technologies</h2>
                            <p className="text-gray-300 leading-relaxed">
                                This website uses cookies and similar tracking technologies to provide, maintain, and improve our services. By using this website, you consent to the use of cookies as described in this policy.
                            </p>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <div>
                                    <p className="text-white font-medium mb-1">Essential Cookies</p>
                                    <p>Required for basic website functionality, including session management and security features. These cookies cannot be disabled as they are necessary for the website to function properly.</p>
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Analytics Cookies</p>
                                    <p>Used to understand how visitors interact with our website through services such as Google Analytics. This helps us improve website performance and user experience.</p>
                                </div>
                                <div>
                                    <p className="text-white font-medium mb-1">Advertising Cookies</p>
                                    <p>Used to deliver relevant advertisements and measure campaign effectiveness through services such as Meta Pixel and Google Ads conversion tracking. These cookies may track your activity across different websites.</p>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Third-party service providers (Calendly, Typeform, Kit, Meta, Google) may set their own cookies when you interact with embedded content or features on our website. These cookies are governed by the respective third-party privacy policies linked in Section 6.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                You can control and manage cookies through your browser settings. Most browsers allow you to view and delete cookies, block third-party cookies, or block all cookies from specific websites. Please note that disabling cookies may affect the functionality of this website. You may also opt out of interest-based advertising through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Google Ad Settings</a>, <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Facebook Ad Preferences</a>, or the <a href="http://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Network Advertising Initiative</a>.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 6. THIRD-PARTY SERVICES                    */}
                        {/* ========================================== */}
                        <section className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-semibold">6. Third-Party Services</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We use trusted third-party service providers to operate our website and deliver our services. Each provider processes data in accordance with their own privacy policies.
                            </p>

                            <div className="space-y-6 text-gray-300 leading-relaxed">
                                <div>
                                    <p className="text-white font-medium">Calendly — Scheduling (Embedded)</p>
                                    <p className="text-gray-400 text-sm">Provider: Calendly LLC, 3423 Piedmont Road NE, Atlanta, GA 30305, USA</p>
                                    <p className="text-sm mt-1">
                                        We embed Calendly on our website to enable you to schedule consultation calls. When you interact with the Calendly widget, Calendly may collect your name, email address, and any additional information you voluntarily provide. Processing is based on our legitimate interest in providing an efficient scheduling process (Art. 6(1)(f) GDPR) and, where consent has been requested, on Art. 6(1)(a) GDPR. Data may be transferred to the USA based on the EU-U.S. Data Privacy Framework or standard contractual clauses.
                                    </p>
                                    <p className="text-sm mt-1"><a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Calendly Privacy Policy →</a></p>
                                </div>

                                <div>
                                    <p className="text-white font-medium">Typeform — Application Forms (Embedded)</p>
                                    <p className="text-gray-400 text-sm">Provider: TYPEFORM SL, Carrer Bac de Roda 163, 08018 Barcelona, Spain</p>
                                    <p className="text-sm mt-1">
                                        We embed Typeform for our application and intake forms. When you submit an application, Typeform processes the personal data you enter, such as your name, email address, trading experience, and other information relevant to your application. Processing is based on pre-contractual measures at your request (Art. 6(1)(b) GDPR) and our legitimate interest in an efficient application process (Art. 6(1)(f) GDPR). Typeform stores data on servers within the EU.
                                    </p>
                                    <p className="text-sm mt-1"><a href="https://www.typeform.com/help/a/privacy-policy-360029581691/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Typeform Privacy Policy →</a></p>
                                </div>

                                <div>
                                    <p className="text-white font-medium">Kit (formerly ConvertKit) — Email Marketing</p>
                                    <p className="text-gray-400 text-sm">Provider: Kit, 113 Cherry St #92768, Seattle, WA 98104, USA</p>
                                    <p className="text-sm mt-1">
                                        We use Kit for email communication and marketing. If you sign up for our email list or provide your email address through our application process, your data (email address, name, and any additional information you provide) will be stored on Kit's servers. Kit enables us to send newsletters and analyse email campaigns. Processing is based on your consent (Art. 6(1)(a) GDPR). You may revoke your consent at any time by clicking the unsubscribe link in every email. Data may be transferred to the USA based on the EU-U.S. Data Privacy Framework or standard contractual clauses.
                                    </p>
                                    <p className="text-sm mt-1"><a href="https://kit.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Kit Privacy Policy →</a></p>
                                </div>

                                <div>
                                    <p className="text-white font-medium">Meta (Facebook/Instagram) Ads & Google Ads — Advertising & Analytics</p>
                                    <p className="text-sm mt-1">
                                        We use advertising services from Meta Platforms (Meta Pixel) and Google (Google Ads conversion tracking). These platforms may collect data through cookies and tracking pixels to deliver personalised advertisements and measure campaign performance. You can control ad personalisation through <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Google Ad Settings</a> and <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Facebook Ad Preferences</a>. We do not control how these third parties use collected data once transmitted to them.
                                    </p>
                                </div>

                                <div>
                                    <p className="text-white font-medium">Payment Processors</p>
                                    <p className="text-sm mt-1">
                                        Payments are processed through trusted third-party payment processors (e.g. Stripe, PayPal). We do not store your full payment card details on our servers. These processors handle your payment data in accordance with PCI DSS standards and their own privacy policies.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* ========================================== */}
                        {/* 7. DATA RETENTION                          */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">7. Data Retention</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We retain personal information only as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. When no longer required, data is securely deleted or anonymised.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 8. INTERNATIONAL DATA TRANSFERS            */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">8. International Data Transfers</h2>
                            <p className="text-gray-300 leading-relaxed">
                                As a business operating in Dubai, United Arab Emirates, data may be transferred and processed outside your country of residence — including in the USA and the EU. Where required, we implement appropriate safeguards to protect transferred data, including the EU-U.S. Data Privacy Framework and standard contractual clauses (SCCs) as applicable.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 9. YOUR RIGHTS                             */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">9. Your Rights</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Depending on your jurisdiction, you have the following rights with respect to your personal data:
                            </p>
                            <div className="space-y-3 text-gray-300 leading-relaxed">
                                <p><span className="text-white font-medium">Right of access:</span> You may request confirmation as to whether personal data concerning you is being processed and, if so, access that data.</p>
                                <p><span className="text-white font-medium">Right to rectification:</span> You may request the correction of inaccurate personal data concerning you.</p>
                                <p><span className="text-white font-medium">Right to erasure:</span> You may request the deletion of your personal data, subject to legal retention obligations.</p>
                                <p><span className="text-white font-medium">Right to restriction of processing:</span> You may request restriction of the processing of your personal data under certain conditions.</p>
                                <p><span className="text-white font-medium">Right to data portability:</span> You may receive your data in a structured, commonly used, and machine-readable format.</p>
                                <p><span className="text-white font-medium">Right to object:</span> You may object to the processing of your personal data, including for direct marketing purposes.</p>
                                <p><span className="text-white font-medium">Right to withdraw consent:</span> You may withdraw any consent given at any time. The withdrawal does not affect the lawfulness of processing before the withdrawal.</p>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                To exercise any of these rights, please contact us at <a href="mailto:support@szn-capital.com" className="text-blue-400 hover:text-blue-300 underline">support@szn-capital.com</a>. You also have the right to lodge a complaint with a supervisory authority in your jurisdiction.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 10. EMAIL & MARKETING                      */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">10. Email & Marketing Communications</h2>
                            <p className="text-gray-300 leading-relaxed">
                                By submitting your information, you may receive educational content, updates, and promotional materials. You may unsubscribe at any time using the link provided in each email. We comply with CAN-SPAM requirements, GDPR consent requirements, and Meta and Google advertising transparency policies.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 11. DATA SECURITY                          */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">11. Data Security</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We implement reasonable technical and organisational measures to protect personal data from unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure. We cannot guarantee absolute security but are committed to protecting your data to the highest standard.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 12. CHILDREN'S PRIVACY                     */}
                        {/* ========================================== */}
                        <section className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-semibold">12. Children's Privacy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                This website and our services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors. If you believe that a minor has submitted personal data through our website, please contact us immediately at <a href="mailto:support@szn-capital.com" className="text-blue-400 hover:text-blue-300 underline">support@szn-capital.com</a> and we will take steps to delete the data.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 13. CHANGES TO THIS POLICY                 */}
                        {/* ========================================== */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">13. Changes to This Privacy Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        {/* ========================================== */}
                        {/* 14. CONTACT                                */}
                        {/* ========================================== */}
                        <section className="space-y-4 pt-8 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-semibold">Contact Us</h2>
                            <p className="text-gray-300 leading-relaxed">
                                If you have any questions about this Privacy Policy or our data processing practices, please contact us at <a href="mailto:support@szn-capital.com" className="text-blue-400 hover:text-blue-300 underline">support@szn-capital.com</a>.
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
