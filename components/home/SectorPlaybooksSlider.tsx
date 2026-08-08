'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Truck,
  Cpu,
  Stethoscope,
  ShoppingBag,
  Play,
  Pause,
} from 'lucide-react';
import { SectorPlaybook } from '@/types';

const iconMap: Record<SectorPlaybook['iconName'], React.ComponentType<{ size?: number }>> = {
  Landmark,
  Truck,
  Cpu,
  Stethoscope,
  ShoppingBag,
};

const AUTOPLAY_INTERVAL_MS = 6000;

interface SectorPlaybooksSliderProps {
  items: SectorPlaybook[];
}

export function SectorPlaybooksSlider({ items }: SectorPlaybooksSliderProps) {
  const [activeSector, setActiveSector] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setActiveSector((prev) => (prev + 1) % items.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isAutoPlay, items.length]);

  const goTo = (index: number) => {
    setDirection(index > activeSector ? 1 : -1);
    setActiveSector(index);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveSector((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSector((prev) => (prev - 1 + items.length) % items.length);
  };

  const item = items[activeSector];

  if (!item) {
    return null;
  }

  const Icon = iconMap[item.iconName];

  return (
    <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-[#111827] border border-[#f43f5e]/30 text-[#fb7185] px-3.5 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase mb-3">SECTOR FOCUS BLUEPRINTS</span>
        <h2 className="font-sans text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
          Industry Sector <span className="bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">Growth Playbooks</span>
        </h2>
        <p className="font-sans text-base text-gray-400 leading-relaxed">
          Interactive slider showcasing specialized market entry, capital scaling, and operational playbooks tailored to core enterprise sectors.
        </p>
      </div>

      <div
        className="max-w-6xl mx-auto bg-[#0b0f19] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col gap-6"
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
      >
        {isAutoPlay && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
            <motion.div
              key={activeSector}
              className="h-full bg-gradient-to-r from-[#f43f5e] to-[#9333ea]"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTOPLAY_INTERVAL_MS / 1000, ease: 'linear' }}
            />
          </div>
        )}

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#111827] border border-white/10 text-[#fb7185] px-3 py-1 rounded-full text-[0.72rem] font-bold">
              Sector {activeSector + 1} of {items.length}
            </span>
            <span className="text-sm font-bold text-gray-300">{item.sector}</span>
          </div>

          <button
            className="flex items-center gap-2 bg-[#111827] border border-white/10 text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsAutoPlay((prev) => !prev)}
            title={isAutoPlay ? 'Pause Auto-Play' : 'Resume Auto-Play'}
          >
            {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
            <span>{isAutoPlay ? 'Auto-Advancing' : 'Paused'}</span>
          </button>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center"
                  style={{
                    backgroundColor: `${item.accentColor}22`,
                    borderColor: `${item.accentColor}55`,
                    color: item.accentColor,
                  }}
                >
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.badge}</span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-black text-white leading-tight">{item.title}</h3>
              <p className="font-sans text-[0.92rem] text-gray-300 leading-relaxed">{item.description}</p>

              <div className="bg-[#111827]/60 border border-white/10 rounded-xl p-4 mt-2">
                <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Core Playbook Pillars:</div>
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                  {item.pillars.map((pillar) => (
                    <li key={pillar} className="flex items-center gap-2.5 text-xs text-gray-200 font-semibold">
                      <CheckCircle2 size={16} style={{ color: item.accentColor }} className="shrink-0" />
                      <span>{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-2">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-[0_4px_15px_rgba(244,63,94,0.35)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.5)] transition-all">
                  <span>Request {item.sector} Blueprint</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: item.accentColor }}
              />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 h-[300px] sm:h-[350px] shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={380}
                  className="object-cover w-full h-full brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 bg-[#030712]/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-[0.7rem] font-bold text-white flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.accentColor }} />
                  <span className="uppercase tracking-wider">{item.badge}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#030712]/90 backdrop-blur-md border border-white/15 rounded-xl p-4 flex flex-col gap-1 shadow-2xl">
                  <div className="text-[0.7rem] font-bold text-gray-400 uppercase tracking-widest">Key Benchmark Output</div>
                  <div className="text-xl sm:text-2xl font-black" style={{ color: item.accentColor }}>
                    {item.metric}
                  </div>
                  <div className="text-xs font-bold text-gray-200 mt-0.5">{item.impact}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between px-2 pt-2 border-t border-white/10">
          <motion.button
            className="w-10 h-10 rounded-xl bg-[#111827] border border-white/10 text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            onClick={handlePrev}
            aria-label="Previous sector"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="flex items-center gap-2">
            {items.map((sector, i) => (
              <div
                key={sector.id}
                className={`h-2.5 rounded-full cursor-pointer transition-all ${
                  i === activeSector ? 'w-8 bg-[#f43f5e] shadow-[0_0_10px_#f43f5e]' : 'w-2.5 bg-white/20'
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <motion.button
            className="w-10 h-10 rounded-xl bg-[#111827] border border-white/10 text-white flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            onClick={handleNext}
            aria-label="Next sector"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}

