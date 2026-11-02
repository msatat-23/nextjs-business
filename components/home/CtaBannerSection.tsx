'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';
import type { CtaBannerContent } from '@/types/home-page';

interface CtaBannerSectionProps {
  content: CtaBannerContent;
}

export function CtaBannerSection({ content }: CtaBannerSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 sm:py-24 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          className="relative bg-[#0b0f19] border border-white/10 rounded-2xl p-8 sm:p-16 text-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center gap-6"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-radial from-[#f43f5e]/20 via-transparent to-transparent pointer-events-none" />
          <h2 className="font-sans text-3xl sm:text-5xl font-black text-white max-w-2xl leading-tight">{content.title}</h2>
          <p className="font-sans text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
            {content.description}
          </p>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white px-8 py-4 rounded-xl text-base font-bold shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)] transition-all cursor-pointer"
            >
              <span>{content.button}</span>
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
