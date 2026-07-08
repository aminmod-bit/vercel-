import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef, type ReactNode, useEffect, useState } from "react";

// Optimized reveal with GPU acceleration
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, willChange: "transform, opacity" }}
      animate={inView ? { opacity: 1, y: 0, willChange: "auto" } : { opacity: 0, y, willChange: "transform, opacity" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transform: "translateZ(0)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container - optimized
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={{ transform: "translateZ(0)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${
        light ? "text-[#c9a96a]" : "text-[#8a6a2f]"
      }`}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
      <span className="h-px w-6 bg-current opacity-60" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mt-6 text-balance ${
          light ? "text-[#f5efe6]" : "text-[#1a1410]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg sm:text-xl leading-relaxed text-pretty ${
            light ? "text-[#a89c84]" : "text-[#5a4f3c]"
          } ${align === "center" ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Parallax({
  children,
  offset = 60,
  className = "",
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: "transform", transform: "translateZ(0)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Optimized custom cursor
export function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let rafId: number;
    let lastHoverCheck = 0;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.current = e.clientX;
      cursorY.current = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Throttle hover check
      const now = Date.now();
      if (now - lastHoverCheck > 100) {
        lastHoverCheck = now;
        const target = e.target as HTMLElement;
        hoveringRef.current = !!(
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("cursor-pointer")
        );
      }

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      // Smooth lerp for the ring (delayed follow)
      const ringEase = 0.2;
      const dotEase = 0.5;

      if (ringRef.current) {
        const rect = ringRef.current.getBoundingClientRect();
        const currentX = rect.left + rect.width / 2;
        const currentY = rect.top + rect.height / 2;
        const newX = currentX + (cursorX.current - currentX) * ringEase;
        const newY = currentY + (cursorY.current - currentY) * ringEase;
        ringRef.current.style.transform = `translate3d(${newX - 16}px, ${newY - 16}px, 0)`;
      }

      if (dotRef.current) {
        dotX.current += (cursorX.current - dotX.current) * dotEase;
        dotY.current += (cursorY.current - dotY.current) * dotEase;
        dotRef.current.style.transform = `translate3d(${dotX.current - 3}px, ${dotY.current - 3}px, 0) scale(${hoveringRef.current ? 2 : 1})`;
        dotRef.current.style.backgroundColor = hoveringRef.current
          ? "rgba(201, 169, 106, 0.3)"
          : "rgba(201, 169, 106, 0.8)";
      }

      if (
        Math.abs(cursorX.current - dotX.current) > 0.5 ||
        Math.abs(cursorY.current - dotY.current) > 0.5
      ) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = 0;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#c9a96a]/60 pointer-events-none z-[9999] hidden lg:block will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s, width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden lg:block will-change-transform"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />
    </>
  );
}

// Animated counter - GPU optimized
export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
