import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: '-60px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const offsets: Record<string, { transform: string }> = {
    up: { transform: `translateY(${distance}px)` },
    down: { transform: `translateY(-${distance}px)` },
    left: { transform: `translateX(${distance}px)` },
    right: { transform: `translateX(-${distance}px)` },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0,0)' : offsets[direction].transform,
        transition: `opacity ${duration}s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform ${duration}s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
