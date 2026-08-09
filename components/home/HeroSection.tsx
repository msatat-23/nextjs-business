'use client';

import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import Link from 'next/link';
import { scrollToSection } from '@/lib/scroll';
import { HeroDashboard } from './HeroDashboard';
import type { HeroSectionData } from '@/lib/data/heroSection';
import type { HeroDashboardData } from '@/lib/data/heroDashboard';

interface HeroSectionProps {
  data: HeroSectionData;
  dashboard: HeroDashboardData;
}

function renderHeroTitle(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#c084fc] bg-clip-text text-transparent">
        {highlight}
      </span>
      {after}
    </>
  );
}

export function HeroSection({ data, dashboard }: HeroSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-6 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 items-center relative overflow-hidden box-border">
      <motion.div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-[radial-gradient(circle,rgba(244,63,94,0.18)_0%,rgba(168,85,247,0.08)_50%,rgba(3,7,18,0)_70%)] rounded-full blur-3xl opacity-40 -z-10"
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="flex flex-col gap-5 relative z-10 min-w-0 w-full box-border">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 bg-[#111827]/85 border border-white/12 text-[#fca5a5] px-4 py-2 rounded-full text-[0.76rem] font-bold tracking-wider backdrop-blur-md max-w-[680px] mb-5"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#f43f5e] shadow-[0_0_10px_#f43f5e] shrink-0" />
            <span>{data.eyebrow}</span>
          </motion.div>

          <h1 className="font-sans text-[2.25rem] sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] tracking-tight break-words max-w-full mb-4">
            {renderHeroTitle(data.title, data.highlight)}
          </h1>

          <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed max-w-[580px] mb-6">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 max-w-full">
            <Link href={data.primaryCta.href || ''} className="bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white px-7 py-3.5 min-h-[46px] rounded-xl font-sans text-[0.95rem] font-bold border border-transparent inline-flex items-center gap-3">
              <span>{data.primaryCta.label}</span>
              <ArrowRight size={18} />
            </Link>
            <motion.button
              className="bg-[#1f2937]/60 text-gray-100 border border-white/12 px-6 py-3.5 min-h-[46px] rounded-xl font-sans text-[0.95rem] font-semibold cursor-pointer transition-all duration-200 inline-flex items-center gap-2"
              onClick={() => scrollToSection(data.secondaryCta.scrollTo ?? '')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{data.secondaryCta.label}</span>
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-6 pt-5 border-t border-white/10 w-full">
            <motion.div className="flex items-center gap-2 text-[0.82rem] text-gray-400 font-medium cursor-default hover:text-white transition-colors" whileHover={{ color: '#ffffff' }}>
              <ShieldCheck size={16} className="text-[#fb7185]" />
              <span>{data.badges[0]?.label}</span>
            </motion.div>
            <motion.div className="flex items-center gap-2 text-[0.82rem] text-gray-400 font-medium cursor-default hover:text-white transition-colors" whileHover={{ color: '#ffffff' }}>
              <CheckCircle2 size={16} className="text-[#34d399]" />
              <span>{data.badges[1]?.label}</span>
            </motion.div>
            <motion.div className="flex items-center gap-2 text-[0.82rem] text-gray-400 font-medium cursor-default hover:text-white transition-colors" whileHover={{ color: '#ffffff' }}>
              <Award size={16} className="text-[#a855f7]" />
              <span>{data.badges[2]?.label}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <HeroDashboard data={dashboard} />
    </section>
  );
}
