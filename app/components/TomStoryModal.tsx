"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TomStoryModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCertIndex, setCurrentCertIndex] = useState(0);

    const certificates = [
        "/1o1Students/1. Name_ Tom/certficate 1.jpeg",
        "/1o1Students/1. Name_ Tom/certificate 2.jpeg",
        "/1o1Students/1. Name_ Tom/certificate 3.jpeg",
        "/1o1Students/1. Name_ Tom/certificate 4.jpeg",
    ];

    const nextCert = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentCertIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    };

    const prevCert = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentCertIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    };

    return (
        <>
            <div className="flex justify-center mb-32">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center bg-[#0e0f12] border border-white/10 rounded-full p-2 pr-6 gap-4 hover:border-white/30 transition-all cursor-pointer group"
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10">
                        <Image
                            src="/1o1Students/1. Name_ Tom/pfp.jpg"
                            alt="Tom"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="text-white text-sm font-medium">Tom's Story</span>
                    <div className="ml-auto bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-full group-hover:scale-105 transition-transform">
                        View
                    </div>
                </button>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-linear-to-b from-[#272A2F] to-[#14171C] rounded-[32px] shadow-2xl border border-white/5 animate-in zoom-in-95 duration-300 custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 z-10 bg-[#272A2F]/90 backdrop-blur-md flex items-center justify-between p-5 px-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <span className="text-white text-[15px] font-medium">Tom's Story</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-500 hover:text-white transition-colors p-1"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body - Tom's Discord Screenshot blended in */}
                        <div className="w-full px-4 pb-4 pt-4">
                            <Image
                                src="/students/tom.png"
                                alt="Tom's Discord message about SZN Capital"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-2xl object-contain mb-8"
                                style={{ mixBlendMode: 'lighten' }}
                            />

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10 mb-8" />

                            {/* Certificates Section */}
                            <div className="px-2">
                                <h3 className="text-white font-medium text-lg mb-4 text-center">Funded Certificates</h3>

                                <div className="relative group/carousel bg-black/20 rounded-2xl p-4 border border-white/5">
                                    <div className="w-full aspect-4/3 relative rounded-xl overflow-hidden shadow-inner">
                                        <Image
                                            src={certificates[currentCertIndex]}
                                            alt={`Tom's Certificate ${currentCertIndex + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 90vw, 600px"
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevCert}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-black/90 md:opacity-0 group-hover/carousel:opacity-100 transition-all focus:opacity-100 backdrop-blur-sm"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextCert}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-black/90 md:opacity-0 group-hover/carousel:opacity-100 transition-all focus:opacity-100 backdrop-blur-sm"
                                    >
                                        <ChevronRight size={20} />
                                    </button>

                                    {/* Indicators */}
                                    <div className="flex justify-center gap-2 mt-4">
                                        {certificates.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCurrentCertIndex(idx);
                                                }}
                                                className={`w-2 h-2 rounded-full transition-all ${currentCertIndex === idx ? 'bg-[#782FFF] w-4' : 'bg-gray-600 hover:bg-gray-400'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
