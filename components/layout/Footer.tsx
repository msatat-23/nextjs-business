'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Layers, Mail, Phone, MapPin, Check, Send } from 'lucide-react';
import { ContactModal } from '@/components/contact/ContactModal';

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <>
      <footer className="bg-[#030712] text-gray-400 border-t border-white/10 pt-16 pb-8 px-6 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xl font-extrabold text-white flex items-center gap-3 tracking-tight no-underline">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f43f5e] via-[#e11d48] to-[#9333ea] flex items-center justify-center text-white border border-white/20 shadow-[0_0_15px_rgba(244,63,94,0.4)] shrink-0">
                <Layers size={18} />
              </div>
              <span className="font-sans font-black text-white">
                BUSINESS <span className="bg-gradient-to-r from-[#fb7185] to-[#c084fc] bg-clip-text text-transparent">DEVELOPER</span>
              </span>
            </Link>
            <p className="text-[0.88rem] text-gray-400 leading-relaxed">
              Enterprise growth platform delivering data-backed strategies, executive expansion frameworks, and modern market intelligence for high-scale organizations.
            </p>
          </div>

          <div>
            <div className="text-[0.88rem] font-black text-white mb-4 tracking-wider uppercase">Navigation</div>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link href="/" className="text-gray-400 text-[0.88rem] font-medium transition-colors duration-200 hover:text-[#fb7185] cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-[0.88rem] font-medium transition-colors duration-200 hover:text-[#fb7185] cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[0.88rem] font-black text-white mb-4 tracking-wider uppercase">Get in Touch</div>
            <div className="flex flex-col gap-3 text-[0.85rem] text-gray-400">
              <p className="m-0 flex items-center gap-2">
                <Mail size={15} className="text-[#fb7185] shrink-0" />
                <span>advisory@business-dev.com</span>
              </p>
              <p className="m-0 flex items-center gap-2">
                <Phone size={15} className="text-[#fb7185] shrink-0" />
                <span>+1 (800) 555-DEV-EXEC</span>
              </p>
              <p className="m-0 flex items-start gap-2">
                <MapPin size={15} className="text-[#fb7185] shrink-0 mt-0.5" />
                <span>Global HQ: 500 Enterprise Way, Suite 800, New York, NY 10001</span>
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="mt-4 inline-flex items-center gap-2 bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#fb7185] px-4 py-2 rounded-lg text-[0.82rem] font-bold cursor-pointer hover:bg-[#f43f5e]/25 hover:text-white transition-all duration-200"
            >
              <span>Schedule Advisory Call</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div>
            <div className="text-[0.88rem] font-black text-white mb-2 tracking-wider uppercase">Enterprise Newsletter</div>
            <p className="text-[0.82rem] text-gray-400 mb-3 leading-relaxed">
              Join 15,000+ C-Suite leaders receiving our bi-weekly market playbooks and growth benchmarks.
            </p>

            {subscribed ? (
              <div className="bg-[#10b981]/15 border border-[#10b981]/30 rounded-xl p-3 flex items-center gap-2 text-[#34d399] text-xs font-bold">
                <Check size={16} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter corporate email"
                  className="font-sans text-xs px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#111827] text-white outline-none focus:border-[#f43f5e] focus:ring-1 focus:ring-[#f43f5e]/30 placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#f43f5e] to-[#9333ea] text-white border border-white/20 px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer hover:shadow-[0_4px_15px_rgba(244,63,94,0.3)] transition-all flex items-center justify-center gap-1.5"
                >
                  <Send size={13} />
                  <span>Subscribe to Playbooks</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[0.82rem] text-gray-500 gap-3 text-center sm:text-left">
          <div>&copy; {new Date().getFullYear()} Business Developer Inc. All rights reserved.</div>
          <div>Built with Next.js App Router &amp; Tailwind CSS</div>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
