'use client';

import { motion } from 'motion/react';
import { TrendingUp, Zap, Target, Award, Building2, BarChart3, Check } from 'lucide-react';
import { services } from '@/lib/data/services';
import { ServiceCard } from '@/types';

const iconMap: Record<ServiceCard['icon'], React.ComponentType<{ size?: number }>> = {
  TrendingUp,
  Zap,
  Target,
  Award,
  Building2,
  BarChart3,
};

export function ServicesSection() {
  return (
    <section id="services-section" className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-block bg-[#111827] border border-[#f43f5e]/30 text-[#fb7185] px-3.5 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase mb-3">EXPERT SOLUTIONS</span>
        <h2 className="font-sans text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">
          Core Offerings by <span className="bg-gradient-to-r from-[#fb7185] via-[#f43f5e] to-[#a855f7] bg-clip-text text-transparent">Business Developer</span>
        </h2>
        <p className="font-sans text-base text-gray-400 leading-relaxed">
          End-to-end strategic services engineered to accelerate enterprise growth, optimize capital efficiency, and drive sustainable market dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-[#f43f5e]/40 hover:shadow-[0_20px_45px_rgba(244,63,94,0.15)]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.015 }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#fb7185] flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                    <Icon size={24} />
                  </div>
                  <span className="text-[0.7rem] font-extrabold bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">{item.badge}</span>
                </div>

                <h3 className="font-sans text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="font-sans text-[0.92rem] text-gray-400 leading-relaxed mb-6">{item.desc}</p>
              </div>

              {item.features && (
                <ul className="list-none p-0 m-0 border-t border-white/10 pt-4 flex flex-col gap-2.5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-[0.84rem] text-gray-300 font-medium">
                      <Check size={14} className="text-[#34d399] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

