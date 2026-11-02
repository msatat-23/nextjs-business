'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Sliders, ArrowRight } from 'lucide-react';
import type { RoiCalculatorContent } from '@/types/home-page';

interface RoiCalculatorSectionProps {
  content: RoiCalculatorContent;
}

export function RoiCalculatorSection({ content }: RoiCalculatorSectionProps) {
  const { section } = content;
  const [revenue, setRevenue] = useState(content.defaultRevenue);

  const projectedRevenue = Math.round(revenue * content.growthMultiple);
  const efficiencyIncrease = Math.min(88, Math.round((revenue / 1_000_000) * 12 + 48));
  const additionalValue = projectedRevenue - revenue;

  return (
    <section id="roi-calculator" className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-[#111827] border border-[#f43f5e]/30 text-[#fb7185] px-3.5 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase mb-3">{section.badge}</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">{section.title}</h2>
          <p className="font-sans text-base text-gray-400 leading-relaxed">
            {section.description}
          </p>
        </div>

        <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-8">
          <div className="bg-[#111827]/80 border border-white/10 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 font-bold text-gray-200 text-sm sm:text-base">
                <Sliders size={18} className="text-[#fb7185]" />
                <span>{section.baselineLabel}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#fb7185] to-[#c084fc] bg-clip-text text-transparent">${revenue.toLocaleString()}</span>
            </div>

            <input
              type="range"
              min={content.minRevenue}
              max={content.maxRevenue}
              step={content.step}
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-2 bg-[#1f2937] rounded-lg appearance-none cursor-pointer accent-[#f43f5e]"
              aria-label="Baseline annual revenue"
            />
            <div className="flex justify-between text-xs text-gray-400 font-semibold">
              <span>{section.rangeLabels[0]}</span>
              <span>{section.rangeLabels[1]}</span>
              <span>{section.rangeLabels[2]}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div className="bg-[#111827]/60 border border-white/10 rounded-xl p-5 flex flex-col gap-1 items-center text-center" whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className="text-2xl sm:text-3xl font-black text-white">${projectedRevenue.toLocaleString()}</div>
              <div className="text-xs font-bold text-gray-300 mt-0.5">{section.projectedLabel}</div>
              <div className="text-xs font-bold text-[#fb7185] mt-1">+${additionalValue.toLocaleString()} Net Gain</div>
            </motion.div>

            <motion.div className="bg-[#111827]/60 border border-white/10 rounded-xl p-5 flex flex-col gap-1 items-center text-center" whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className="text-2xl sm:text-3xl font-black text-white">+{efficiencyIncrease}%</div>
              <div className="text-xs font-bold text-gray-300 mt-0.5">{section.efficiencyLabel}</div>
              <div className="text-xs font-bold text-[#c084fc] mt-1">{section.efficiencySub}</div>
            </motion.div>

            <motion.div className="bg-[#111827]/60 border border-white/10 rounded-xl p-5 flex flex-col gap-1 items-center text-center" whileHover={{ y: -4, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
              <div className="text-2xl sm:text-3xl font-black text-white">{content.growthMultiple}x</div>
              <div className="text-xs font-bold text-gray-300 mt-0.5">{section.multipleLabel}</div>
              <div className="text-xs font-bold text-[#f43f5e] mt-1">{section.multipleSub}</div>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)] transition-all">
              <span>{section.cta}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
