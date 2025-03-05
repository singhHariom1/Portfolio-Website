
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export const AnimateInView = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  once = true,
}: AnimateInViewProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
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
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={cn(
        animation && isVisible ? `animate-${animation}` : 'opacity-0',
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      {children}
    </div>
  );
};

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => {
  return <div className="animate-fade-in">{children}</div>;
};

export const AnimateHover = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('hover-lift', className)}>{children}</div>;
};
