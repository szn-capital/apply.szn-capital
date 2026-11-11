"use client"
import { useEffect, useRef, useState } from 'react';
import { preconnect, preload } from 'react-dom';

const ICLOSED_URL = 'https://app.iclosed.io/e/szn-academy/szn-academy';
const ICLOSED_SCRIPT = 'https://app.iclosed.io/assets/widget.js';

interface IClosedEmbedProps {
    className?: string;
    height?: string;
}

// iClosed inline widget. Several can sit on one page: the loader script is added once
// (after every widget on the page has mounted) and scans for all .iclosed-widget divs.
export default function IClosedEmbed({ className = '', height = '620px' }: IClosedEmbedProps) {
    const [ready, setReady] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    // Put these hints in the server HTML so the browser fetches widget.js while React is
    // still booting, instead of only after hydration when the effect below runs
    preconnect('https://app.iclosed.io');
    preload(ICLOSED_SCRIPT, { as: 'script' });

    useEffect(() => {
        const container = widgetRef.current;
        if (!container) return;

        // Show a loading line until iClosed's iframe has loaded, instead of an empty box
        const markReady = () => setReady(true);
        const fallback = window.setTimeout(() => setReady(true), 10000);
        const observer = new MutationObserver(() => {
            const iframe = container.querySelector('iframe');
            if (iframe) {
                iframe.addEventListener('load', markReady, { once: true });
                observer.disconnect();
            }
        });
        observer.observe(container, { childList: true, subtree: true });

        let script = document.querySelector<HTMLScriptElement>('script[data-iclosed-loader]');
        let ownsScript = false;
        if (!script) {
            script = document.createElement('script');
            script.src = ICLOSED_SCRIPT;
            script.async = true;
            script.dataset.iclosedLoader = 'true';
            document.body.appendChild(script);
            ownsScript = true;
        }

        return () => {
            window.clearTimeout(fallback);
            observer.disconnect();
            // Remove the loader on leave so it re-scans fresh widgets on the next page
            if (ownsScript && script?.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <div className={`relative w-full ${className}`} style={{ height }}>
            {!ready && (
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <p className="text-sm text-gray-400 tracking-wide animate-pulse">loading the application…</p>
                </div>
            )}
            <div
                ref={widgetRef}
                className="iclosed-widget"
                data-url={ICLOSED_URL}
                title="SZN Academy"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
