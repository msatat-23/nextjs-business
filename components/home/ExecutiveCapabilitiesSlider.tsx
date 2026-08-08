'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowUpRight, Shield, Zap } from 'lucide-react';
import type { CapabilityItem } from '@/lib/data/capabilities';
import { ContactModal } from '@/components/contact/ContactModal';

interface ExecutiveCapabilitiesSliderProps {
  items: CapabilityItem[];
}

export function ExecutiveCapabilitiesSlider({ items }: ExecutiveCapabilitiesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, items.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const current = items[currentIndex];

  if (!current) {
    return null;
  }

  return (
    <>
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div
          className="relative bg-gradient-to-br from-[#1c060c] via-[#2d0a14] to-[#120308] border border-[#f43f5e]/30 rounded-3xl p-6 sm:p-12 lg:p-16 shadow-[0_25px_70px_rgba(244,63,94,0.18),0_0_40px_rgba(0,0,0,0.8)] overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f43f5e]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#9333ea]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#f43f5e]/20 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f43f5e]/15 border border-[#f43f5e]/35 text-[#fb7185] px-3.5 py-1.5 rounded-full text-[0.75rem] font-black uppercase tracking-widest mb-3">
                <Sparkles size={14} className="animate-pulse" />
                <span>EXECUTIVE ADVANTAGE</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl font-black text-white m-0 leading-tight">
                Enterprise Growth <span className="bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#c084fc] bg-clip-text text-transparent">Capabilities</span>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#030712]/80 border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-[#f43f5e] hover:border-[#f43f5e] transition-all duration-200 shadow-lg active:scale-95"
                aria-label="Previous capability"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#030712]/80 border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-[#f43f5e] hover:border-[#f43f5e] transition-all duration-200 shadow-lg active:scale-95"
                aria-label="Next capability"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[420px] flex items-center z-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                  <div>
                    <span className="text-xs font-black text-[#fb7185] uppercase tracking-widest bg-[#f43f5e]/20 border border-[#f43f5e]/40 px-3 py-1 rounded-md">
                      {current.badge}
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-black text-white m-0 mt-3 leading-tight">
                      {current.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-gray-300 m-0 mt-3 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
                    {current.keyHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="bg-[#030712]/70 border border-white/10 rounded-xl p-3 flex items-start gap-2 text-xs text-gray-200 font-semibold"
                      >
                        <CheckCircle2 size={15} className="text-[#fb7185] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white border border-white/20 px-6 py-3.5 rounded-xl font-sans text-sm font-extrabold cursor-pointer shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Schedule Strategic Consultation</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 relative group">
                  <div className="relative rounded-2xl overflow-hidden border border-white/20 h-[280px] sm:h-[340px] shadow-2xl">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover w-full h-full brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-4 left-4 right-4 bg-[#030712]/92 backdrop-blur-md border border-[#f43f5e]/40 rounded-xl p-4 flex flex-col gap-1 shadow-2xl">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#fb7185] uppercase tracking-wider">
                        <Zap size={14} />
                        <span>Core Benchmark</span>
                      </div>
                      <div className="text-2xl font-black bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#c084fc] bg-clip-text text-transparent">
                        {current.metric}
                      </div>
                      <div className="text-xs font-semibold text-gray-300">{current.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 relative z-10">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'w-8 bg-[#f43f5e]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
