import { ReactNode } from 'react';

interface ContentContainerProps {
    children: ReactNode;
    size?: 'narrow' | 'normal' | 'wide';
    className?: string;
}

/**
 * Consistent content container based on Figma design specs
 * - narrow: ~700px (headlines)
 * - normal: ~900px (video, main content)
 * - wide: ~1200px (full sections)
 */
export default function ContentContainer({
    children,
    size = 'normal',
    className = ''
}: ContentContainerProps) {
    const sizeClasses = {
        narrow: 'max-w-[700px]',   // Headlines, centered text
        normal: 'max-w-[900px]',   // Video container, main content
        wide: 'max-w-[1200px]',    // Full width sections
    };

    return (
        <div className={`w-full ${sizeClasses[size]} mx-auto ${className}`}>
            {children}
        </div>
    );
}
