'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, TrendingUp, ArrowUpRight } from 'lucide-react';
import type { CaseStudiesContent } from '@/types/home-page';

interface CaseStudiesSliderProps {
  content: CaseStudiesContent;
}

export function CaseStudiesSlider({ content }: CaseStudiesSliderProps) {
  const { section, items } = content;
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  if (items.length === 0) {
    return null;
  }

  const goTo = (index: number) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const item = items[activeSlide];

  return (
    <section id="case-studies" className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-[#111827] border border-[#f43f5e]/30 text-[#fb7185] px-3.5 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase mb-3">{section.badge}</span>
        <h2 className="font-sans text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
          {section.title}{' '}
          {section.titleHighlight ? (
            <span className="bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">{section.titleHighlight}</span>
          ) : null}
        </h2>
        <p className="font-sans text-base text-gray-400 leading-relaxed">
          {section.description}
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={item.id}
            className="bg-[#0b0f19] border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="relative min-h-[280px] md:min-h-[380px] overflow-hidden group">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={400}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/20 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[0.7rem] font-bold text-[#fb7185] flex items-center gap-1.5 uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#f43f5e] animate-pulse" />
                <span>{section.verifiedLabel}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-[#030712]/90 backdrop-blur-md border border-white/15 text-white px-4 py-2.5 rounded-xl text-[0.82rem] font-bold flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Client:</span>
                  <span className="text-white font-extrabold">{item.client}</span>
                </div>
                <span className="text-[#fb7185] font-semibold text-[0.78rem] bg-[#f43f5e]/15 px-2.5 py-0.5 rounded-md border border-[#f43f5e]/30">{item.timeline}</span>
              </div>
            </div>

            <div className="p-6 sm:p-10 flex flex-col justify-center gap-3">
              <span className="text-[0.72rem] font-extrabold tracking-wider text-[#fb7185] uppercase">{item.category}</span>
              <h3 className="font-sans text-2xl font-black text-white leading-tight">{item.title}</h3>

              <div className="inline-flex items-center gap-2 bg-[#10b981]/15 border border-[#10b981]/30 text-[#34d399] px-3 py-1 rounded-full text-[0.82rem] font-extrabold w-max">
                <TrendingUp size={16} />
                <span>{item.growth}</span>
              </div>

              <p className="font-sans text-[0.92rem] text-gray-300 leading-relaxed">{item.description}</p>

              <Link href="/contact" className="inline-flex items-center gap-2 text-[#fb7185] font-bold text-[0.88rem] mt-2 hover:text-[#f43f5e] transition-colors">
                <span>{section.requestDeckCta}</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between px-2">
          <motion.button
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#111827] border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-[#f43f5e] hover:border-[#f43f5e] transition-all shadow-lg active:scale-95"
            onClick={handlePrev}
            aria-label="Previous slide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="sm:w-5 sm:h-5" />
          </motion.button>

          <div className="flex items-center gap-2">
            {items.map((slide, i) => (
              <div
                key={slide.id}
                className={`h-2.5 rounded-full cursor-pointer transition-all ${
                  i === activeSlide ? 'w-8 bg-[#f43f5e] shadow-[0_0_10px_#f43f5e]' : 'w-2.5 bg-white/20'
                }`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <motion.button
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#111827] border border-white/20 text-white flex items-center justify-center cursor-pointer hover:bg-[#f43f5e] hover:border-[#f43f5e] transition-all shadow-lg active:scale-95"
            onClick={handleNext}
            aria-label="Next slide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
