'use client';

import { useEffect, useState, useRef } from "react";
import {motion} from "framer-motion"

const stats = [
  {
    value: "50,000+",
    desc: "Youths Empowered Through Programs",
  },
  {
    value: "1,200+",
    desc: "Entrepreneurship Grants Awarded",
  },
  {
    value: "300+",
    desc: "Youth-Led Projects Supported",
  },
  {
    value: "27",
    desc: "Local Government Areas Reached",
  },
  {
    value: "100+",
    desc: "Skill Acquisition Workshops Conducted",
  },
];

function parseStatValue(val: string) {
  // Remove non-numeric except +, %
  const num = parseInt(val.replace(/[^0-9]/g, ""), 10);
  const hasPlus = val.includes("+");
  const hasPercent = val.includes("%");
  return { num, hasPlus, hasPercent };
}

function formatStatValue(val: number, hasPlus: boolean, hasPercent: boolean) {
  let str = val.toLocaleString();
  if (hasPlus) str += "+";
  if (hasPercent) str += "%";
  return str;
}

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    // let observer: IntersectionObserver;
    let didAnimate = false;

    function startAnimation() {
      if (didAnimate) return;
      didAnimate = true;
      setHasAnimated(true);
      const durations = [1500, 1200, 1200, 1000]; // ms for each stat
      const intervals = stats.map((stat, i) => {
        const { num } = parseStatValue(stat.value);
        const steps = 30;
        const increment = num / steps;
        let current = 0;
        return setInterval(() => {
          current += increment;
          setCounts((prev) => {
            const next = [...prev];
            next[i] = current >= num ? num : Math.floor(current);
            return next;
          });
          if (current >= num) {
            clearInterval(intervals[i]);
          }
        }, durations[i] / steps);
      });
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(section);
    return () => {
      if (observer && section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#232323] p-4 md:p-8 py-10 md:py-20">
      <motion.div 
        initial = {{opacity: 0, y:80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ease:"easeInOut", duration:0.8}} 
        className="w-full mx-auto flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-gray-500"
      >
        {stats.map((stat, idx) => {
          const { num, hasPlus, hasPercent } = parseStatValue(stat.value);
          const display =
            hasAnimated && counts[idx] >= num
              ? stat.value
              : hasAnimated
                ? formatStatValue(counts[idx], hasPlus, hasPercent)
                : formatStatValue(0, hasPlus, hasPercent);
          return (
            <div key={idx} className="flex-1 flex flex-col items-center justify-center py-6 md:py-0">
              <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-2">{display}</span>
              <span className="text-gray-200 text-base text-center leading-tight">{stat.desc}</span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
} 