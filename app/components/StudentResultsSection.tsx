
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ExternalLink, ZoomIn } from 'lucide-react';
import ContentContainer from './ContentContainer';
import { ScrollFadeIn } from './ScrollAnimations';
import { oneOnOneStudents } from '../data/fundedTraders';

interface StudentResult {
    name: string;
    handle: string;
    avatar: string;
    testimonial: string;
    payoutImage: string;    // shown on the card (highest cert)
    payoutAmount?: string;
    certCount: number;
}

// Map 1o1 students → StudentResult, using highestCertImage for the card preview
const students: StudentResult[] = oneOnOneStudents.map(student => ({
    name: student.name,
    handle: student.handle,
    avatar: student.avatar,
    testimonial: student.text,
    payoutImage: student.highestCertImage ?? student.certImage,
    payoutAmount: student.payout,
    certCount: student.certificates?.length ?? 1,
}));

export default function StudentResultsSection() {
    const [selectedStudent, setSelectedStudent] = useState<StudentResult | null>(null);
    const [certIndex, setCertIndex] = useState(0);

    // Get all certificates for selected student (for modal navigation)
    const getCertificates = (student: StudentResult | null) => {
        if (!student) return [];
        const fullStudent = oneOnOneStudents.find(s => s.name === student.name);
        return fullStudent?.certificates || [student.payoutImage];
    };

    const certificates = getCertificates(selectedStudent);
    const totalCerts = certificates.length;

    const nextCert = () => setCertIndex(prev => (prev + 1) % totalCerts);
    const prevCert = () => setCertIndex(prev => (prev - 1 + totalCerts) % totalCerts);

    const handleStudentSelect = (student: StudentResult) => {
        setSelectedStudent(student);
        setCertIndex(0);
    };

    return (
        <section className="py-24 px-6 relative">
            <ContentContainer size="wide">

                {/* Section Header */}
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-sans font-medium text-white -tracking-[0.03em]">
                        <span
                            className="italic font-light text-gray-200 -tracking-[0.05em] antialiased pr-3"
                            style={{ fontFamily: '"Times New Roman", Times, serif' }}
                        >
                            1-on-1
                        </span>
                        Student Results Driven by Process
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {students.map((student, index) => (
                        <ScrollFadeIn key={index} direction="up" delay={index * 0.15} duration={0.8}>
                            <div
                                onClick={() => handleStudentSelect(student)}
                                className="group relative rounded-[32px] overflow-hidden bg-white/5 cursor-pointer p-[1px] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/20"
                            >
                                {/* Spinning border on hover */}
                                <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#9333ea_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative h-full w-full bg-[#0e0f12] rounded-[31px] p-8 flex flex-col z-10">

                                    {/* Header: Avatar & Name */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative shrink-0">
                                            <Image
                                                src={student.avatar}
                                                alt={student.name}
                                                fill
                                                sizes="48px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium text-base">{student.name}</p>
                                            <p className="text-gray-500 text-xs">{student.handle}</p>
                                        </div>
                                        <div className="ml-auto text-gray-600 group-hover:text-blue-400 transition-colors">
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-8 line-clamp-4 group-hover:text-white transition-colors">
                                        {student.testimonial}
                                    </p>

                                    {/* Highest Certificate Image */}
                                    <div className="mt-auto relative w-full aspect-square rounded-2xl overflow-hidden border border-white/5 bg-black/20">
                                        <Image
                                            src={student.payoutImage}
                                            alt={`${student.name} highest payout certificate`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-md">
                                                <ZoomIn size={14} className="text-white" />
                                                <span className="text-xs text-white font-medium">View Results</span>
                                            </div>
                                        </div>
                                        {/* Certificate count dots */}
                                        {student.certCount > 1 && (
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                                                {Array.from({ length: student.certCount }).map((_, i) => (
                                                    <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`} />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex justify-center mt-20">
                    <Link href="/apply">
                        <button className="bg-white text-black px-10 py-4 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Become a 1:1 Student
                        </button>
                    </Link>
                </div>
            </ContentContainer>

            {/* MODAL */}
            {selectedStudent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedStudent(null)}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] rounded-[30px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 p-[1px] bg-white/5 group"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Spinning border */}
                        <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#0000_50%,#9333ea_100%)] animate-[spin_4s_linear_infinite]" />

                        {/* Close button - outside scrollable area so it's always visible */}
                        <button
                            onClick={() => setSelectedStudent(null)}
                            className="absolute top-4 right-4 z-30 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="relative flex flex-col md:flex-row w-full h-full max-h-[90vh] overflow-y-auto bg-[#0e0f12] rounded-[29px] z-10">

                            {/* Certificate image with navigation */}
                            <div className="w-full md:w-2/3 relative flex items-center justify-center bg-[#0e0f12]">
                                <div className="relative w-full flex items-center justify-center py-6 px-4">
                                    <Image
                                        src={certificates[certIndex]}
                                        alt={`Certificate ${certIndex + 1} of ${totalCerts}`}
                                        width={700}
                                        height={500}
                                        className="w-full h-auto max-h-[65vh] object-contain"
                                    />
                                </div>

                                {/* Navigation arrows when multiple certs */}
                                {totalCerts > 1 && (
                                    <>
                                        <button
                                            onClick={e => { e.stopPropagation(); prevCert(); }}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-md group/arrow"
                                            aria-label="Previous certificate"
                                        >
                                            <svg className="w-5 h-5 group-hover/arrow:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={e => { e.stopPropagation(); nextCert(); }}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-md group/arrow"
                                            aria-label="Next certificate"
                                        >
                                            <svg className="w-5 h-5 group-hover/arrow:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-black/70 backdrop-blur-md rounded-full">
                                            <span className="text-white text-sm font-medium">{certIndex + 1} / {totalCerts}</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="w-full md:w-1/3 p-8 flex flex-col border-l border-white/5 bg-[#131418]">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative shrink-0">
                                        <Image
                                            src={selectedStudent.avatar}
                                            alt={selectedStudent.name}
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-lg">{selectedStudent.name}</p>
                                        <p className="text-gray-500 text-sm">{selectedStudent.handle}</p>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <h4 className="text-gray-500 text-xs uppercase tracking-widest mb-3">Testimonial</h4>
                                    <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                                        "{selectedStudent.testimonial}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}