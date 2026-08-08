'use client';

import { motion } from 'motion/react';
import type { StatItem } from '@/types/home-page';

interface StatsSectionProps {
  stats: StatItem[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  const tickerItems = [...stats, ...stats, ...stats];

  return (
    <section className="py-8 border-y border-white/10 bg-[#070b14]/90 overflow-hidden w-full relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 sm:gap-6 w-max"
        animate={{ x: ['-50%', '0%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
      >
        {tickerItems.map((stat, idx) => (
          <div
            key={`${stat.label}-${idx}`}
            className="bg-[#0b0f19] border border-white/10 rounded-xl px-5 py-3 shadow-md flex items-center gap-4 shrink-0 hover:border-[#f43f5e]/40 transition-colors"
          >
            <div className="font-sans text-xl sm:text-2xl font-black bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent shrink-0">
              {stat.number}
            </div>
            <div className="flex flex-col">
              <div className="font-sans text-[0.82rem] font-extrabold text-white leading-tight">{stat.label}</div>
              <p className="font-sans text-[0.72rem] text-gray-400 leading-none mt-0.5">{stat.sub}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
