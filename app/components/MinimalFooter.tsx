"use client"
import React from 'react';
import Link from 'next/link';
import ContentContainer from './ContentContainer';

export default function MinimalFooter() {
    return (
        <div className="w-full bg-black/40 border-t border-white/5 backdrop-blur-md mt-24">
            <ContentContainer size="wide">
                <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-8 md:gap-0">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start order-2 md:order-1 gap-4">
                        <Link href="/legal" className="text-[10px] uppercase tracking-widest text-gray-700 hover:text-gray-500 transition-colors">
                            Legal Disclosure
                        </Link>
                        <Link href="/privacy" className="text-[10px] uppercase tracking-widest text-gray-700 hover:text-gray-500 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
                        <Link href="/" className="inline-block hover:opacity-70 transition-opacity">
                            <p className="text-[10px] uppercase tracking-widest text-gray-700 hover:text-gray-500 transition-colors cursor-pointer" style={{ fontFamily: "'TT Tsars A Trial', sans-serif" }}>
                                SZN CAPITAL
                            </p>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end order-3">
                        <p className="text-[10px] uppercase tracking-widest text-gray-700 cursor-default">
                            SPOTS ARE LIMITED
                        </p>
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
}
