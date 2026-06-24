"use client"
import { useEffect, useState, useRef, ReactNode } from 'react';

interface ScrollFadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    duration?: number;
    className?: string;
}

export function ScrollFadeIn({
    children,
    delay = 0,
    direction = 'up',
    duration = 0.6,
    className = ''
}: ScrollFadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optionally unobserve after animation
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(30px)';
                case 'down': return 'translateY(-30px)';
                case 'left': return 'translateX(30px)';
                case 'right': return 'translateX(-30px)';
                default: return 'none';
            }
        }
        return 'none';
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

interface StaggerContainerProps {
    children: ReactNode[];
    staggerDelay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    className?: string;
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    direction = 'up',
    className = ''
}: StaggerContainerProps) {
    return (
        <div className={className}>
            {children.map((child, index) => (
                <ScrollFadeIn
                    key={index}
                    delay={index * staggerDelay}
                    direction={direction}
                >
                    {child}
                </ScrollFadeIn>
            ))}
        </div>
    );
}
