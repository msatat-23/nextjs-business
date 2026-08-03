'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import {
  Home,
  Briefcase,
  Award,
  Calculator,
  Mail,
  ArrowUpRight,
} from 'lucide-react';
import { NavLink, navLinks } from '@/lib/data/navigation';

const mobileIcons: Record<NonNullable<NavLink['mobileIconColor']>, React.ComponentType<{ size?: number; className?: string }>> = {
  iconRose: Home,
  iconPurple: Briefcase,
  iconEmerald: Award,
  iconAmber: Calculator,
  iconSky: Mail,
};

const iconColorClasses: Record<NonNullable<NavLink['mobileIconColor']>, string> = {
  iconRose: 'text-[#fb7185]',
  iconPurple: 'text-[#c084fc]',
  iconEmerald: 'text-[#34d399]',
  iconAmber: 'text-[#f59e0b]',
  iconSky: 'text-[#38bdf8]',
};

interface MobileMenuProps {
  isOpen: boolean;
  activeHref: string;
  onNavigate: (link: NavLink) => void;
  onBookConsultation?: () => void;
}

export function MobileMenu({ isOpen, activeHref, onNavigate, onBookConsultation }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 w-full flex flex-col p-4 sm:p-5 bg-[#0b0f19]/98 backdrop-blur-xl border-b border-white/12 shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden z-50 lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.mobileIconColor ? mobileIcons[link.mobileIconColor] : Home;
              const isActive = link.href === activeHref;
              const colorClass = link.mobileIconColor ? iconColorClasses[link.mobileIconColor] : '';
              return (
                <button
                  key={link.label}
                  className={`text-left text-[0.95rem] font-semibold border px-4 py-3 min-h-[46px] rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-3.5 ${
                    isActive
                      ? 'bg-[#f43f5e]/15 text-[#fb7185] border-[#f43f5e]/30 font-bold'
                      : 'text-gray-300 border-transparent hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => onNavigate(link)}
                >
                  <Icon size={18} className={colorClass} />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <button
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white border border-white/20 px-5 py-3.5 min-h-[46px] rounded-xl font-sans text-[0.92rem] font-bold cursor-pointer shadow-[0_4px_18px_rgba(244,63,94,0.4)]"
              onClick={() => {
                if (onBookConsultation) {
                  onBookConsultation();
                } else {
                  onNavigate({ label: 'Contact', href: '/contact' });
                }
              }}
            >
              <span>Book Strategic Consultation</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

