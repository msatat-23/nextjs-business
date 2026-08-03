'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Phone, Briefcase, Mail, Send, CheckCircle2, Layers } from 'lucide-react';
import { ContactFormData } from '@/types';

const INITIAL_FORM_DATA: ContactFormData = {
  fullname: '',
  phone: '',
  jobTitle: '',
  email: '',
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl bg-[#0b0f19] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(244,63,94,0.2)] z-10 my-auto"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f43f5e] via-[#e11d48] to-[#9333ea] flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                <Layers size={20} className="text-white" />
              </div>
              <div>
                <span className="text-[0.7rem] font-black tracking-widest text-[#fb7185] uppercase">STRATEGIC ADVISORY</span>
                <h3 className="font-sans text-xl sm:text-2xl font-black text-white m-0 leading-tight">Book Executive Consultation</h3>
              </div>
            </div>

            <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
              Connect with Senior Business Developer directors to schedule your bespoke growth audit and advisory briefing.
            </p>

            {submitted ? (
              <motion.div
                className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-2xl p-6 flex flex-col items-center text-center gap-3"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <CheckCircle2 size={40} className="text-[#34d399]" />
                <h4 className="text-xl font-extrabold text-white m-0">Consultation Brief Received</h4>
                <p className="text-sm text-gray-300 leading-relaxed m-0 max-w-md">
                  Thank you! An executive partner will review your inquiry and contact you within 24 business hours to confirm your advisory call.
                </p>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(INITIAL_FORM_DATA);
                    }}
                    className="text-[#fb7185] text-xs font-bold underline cursor-pointer hover:text-[#f43f5e]"
                  >
                    Submit another request
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-[#111827] border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/10"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-gray-200 flex items-center gap-1.5" htmlFor="modal-fullname">
                    <User size={14} className="text-[#fb7185]" />
                    <span>Full Name</span>
                    <span className="text-[#f43f5e] font-bold">*</span>
                  </label>
                  <input
                    id="modal-fullname"
                    type="text"
                    name="fullname"
                    required
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="e.g. Jonathan Vance"
                    className="font-sans text-sm px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#111827] text-white outline-none focus:border-[#f43f5e] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-gray-200 flex items-center gap-1.5" htmlFor="modal-phone">
                    <Phone size={14} className="text-[#fb7185]" />
                    <span>Direct Phone</span>
                    <span className="text-[#f43f5e] font-bold">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 019-2834"
                    className="font-sans text-sm px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#111827] text-white outline-none focus:border-[#f43f5e] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-gray-200 flex items-center gap-1.5" htmlFor="modal-jobTitle">
                    <Briefcase size={14} className="text-[#fb7185]" />
                    <span>Job Title</span>
                    <span className="text-[#f43f5e] font-bold">*</span>
                  </label>
                  <input
                    id="modal-jobTitle"
                    type="text"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    placeholder="e.g. Chief Revenue Officer"
                    className="font-sans text-sm px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#111827] text-white outline-none focus:border-[#f43f5e] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-sans text-xs font-bold text-gray-200 flex items-center gap-1.5" htmlFor="modal-email">
                    <Mail size={14} className="text-[#fb7185]" />
                    <span>Corporate Email</span>
                    <span className="text-[#f43f5e] font-bold">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="j.vance@enterprise.com"
                    className="font-sans text-sm px-3.5 py-2.5 rounded-xl border border-white/12 bg-[#111827] text-white outline-none focus:border-[#f43f5e] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
                  />
                </div>

                <div className="col-span-1 sm:col-span-2 mt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white border border-white/20 px-6 py-3.5 rounded-xl font-sans text-sm font-extrabold cursor-pointer shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Scheduling Consultation...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Confirm Strategic Consultation</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
