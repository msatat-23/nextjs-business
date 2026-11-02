'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, PieChart, ShieldCheck, Zap, Compass } from 'lucide-react';
import type { MethodologyContent } from '@/lib/data/methodology';
import { MethodologyTab } from '@/types';

interface MethodologySectionProps {
  tabs: MethodologyContent[];
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PieChart,
  ShieldCheck,
  Zap,
  Compass,
};

const iconColorClasses: Record<string, string> = {
  iconPurpleLarge: 'text-[#c084fc]',
  iconEmeraldLarge: 'text-[#34d399]',
  iconAmberLarge: 'text-[#f59e0b]',
  iconRoseLarge: 'text-[#fb7185]',
};

export function MethodologySection({ tabs }: MethodologySectionProps) {
  const [activeTab, setActiveTab] = useState<MethodologyTab>(tabs[0]?.id ?? 'execution');
  const activeContent = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  if (!activeContent) {
    return null;
  }

  const ActiveIcon = iconMap[activeContent.iconName];

  return (
    <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="bg-[#0b0f19] border border-white/10 rounded-2xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-[#111827] border border-[#f43f5e]/30 text-[#fb7185] px-3.5 py-1 rounded-full text-[0.72rem] font-extrabold tracking-wider uppercase mb-3">OUR APPROACH</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight">The Business Developer Methodology</h2>
          <p className="font-sans text-base text-gray-400 leading-relaxed mb-8">
            We replace static, slow advisory with dynamic execution systems engineered for measurable enterprise value.
          </p>

          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#111827]/80 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`relative px-4 py-2.5 rounded-xl text-[0.86rem] font-bold cursor-pointer transition-all duration-200 z-10 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-[#f43f5e] to-[#9333ea] rounded-xl -z-10 shadow-[0_4px_15px_rgba(244,63,94,0.35)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#111827]/60 border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent.id}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-center"
            >
              <div>
                <h3 className="font-sans text-2xl font-black text-white mb-3">{activeContent.title}</h3>
                <p className="font-sans text-gray-300 text-[0.98rem] leading-relaxed mb-6">{activeContent.desc}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-3">
                  {activeContent.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[0.9rem] text-gray-200 font-semibold">
                      <CheckCircle2 size={18} className="text-[#34d399] shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                className="bg-[#030712] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[200px]"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <ActiveIcon size={64} className={iconColorClasses[activeContent.iconColorClass]} />
                <div className="font-sans text-sm font-extrabold text-gray-200">{activeContent.visualLabel}</div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

