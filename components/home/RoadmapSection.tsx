'use client';

import { motion } from 'motion/react';
import { roadmapSteps } from '@/lib/data/roadmap';

export function RoadmapSection() {
  return (
    <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-[#111827] border border-[#f43f5e]/30 text-[#fb7185] px-3.5 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase mb-3">4-STEP PROCESS</span>
        <h2 className="font-sans text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">Roadmap to Market Dominance</h2>
        <p className="font-sans text-base text-gray-400 leading-relaxed">
          A structured, repeatable execution process that drives predictable growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmapSteps.map((item, idx) => (
          <motion.div
            key={item.step}
            className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 relative flex flex-col gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#f43f5e]/40 hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#f43f5e] to-[#9333ea] text-white font-black text-sm flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.3)]">{item.step}</div>
            <h3 className="font-sans text-lg font-bold text-white mt-1">{item.title}</h3>
            <p className="font-sans text-[0.88rem] text-gray-400 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

