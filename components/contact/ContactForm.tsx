'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Phone, Briefcase, Mail, Send, CheckCircle2 } from 'lucide-react';
import { ContactFormData } from '@/types';
import type { ContactPageContent } from '@/types/contact-page';

const INITIAL_FORM_DATA: ContactFormData = {
  fullname: '',
  phone: '',
  jobTitle: '',
  email: '',
};

interface ContactFormProps {
  form: ContactPageContent['form'];
}

export function ContactForm({ form }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    }, 800);
  };

  const fields = form.fields;

  return (
    <section className="max-w-3xl mx-auto -mt-[60px] relative z-20 px-6">
      <motion.div
        className="bg-[#0b0f19] rounded-2xl p-6 sm:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_30px_rgba(244,63,94,0.15)] border border-white/10 backdrop-blur-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-center mb-10">
          <h2 className="font-sans text-2xl sm:text-3xl font-black text-white mb-2.5 tracking-tight">{form.title}</h2>
          <p className="font-sans text-[0.98rem] text-gray-400 leading-relaxed">
            {form.description}
          </p>
        </div>

        {submitted ? (
          <motion.div
            className="bg-[#10b981]/10 border border-[#10b981]/30 rounded-2xl p-8 flex items-start gap-5"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <CheckCircle2 size={32} className="text-[#34d399] shrink-0 mt-1" />
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold text-white m-0">{form.successTitle}</h3>
              <p className="text-[0.95rem] text-gray-300 leading-relaxed m-0">
                {form.successMessage}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData(INITIAL_FORM_DATA);
                }}
                className="mt-4 bg-transparent border-none text-[#fb7185] text-[0.88rem] font-bold underline cursor-pointer hover:text-[#f43f5e] p-0 self-start"
              >
                {form.submitAnother}
              </button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.88rem] font-bold text-gray-200 flex items-center gap-1.5" htmlFor="fullname">
                <User size={16} className="text-[#fb7185]" />
                <span>{fields.fullname.label}</span>
                <span className="text-[#f43f5e] font-bold">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                name="fullname"
                required
                value={formData.fullname}
                onChange={handleChange}
                placeholder={fields.fullname.placeholder}
                className="font-sans text-[0.95rem] px-4 py-3 rounded-xl border border-white/12 bg-[#111827]/80 text-white outline-none transition-all duration-200 focus:border-[#f43f5e] focus:bg-[#111827] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.88rem] font-bold text-gray-200 flex items-center gap-1.5" htmlFor="phone">
                <Phone size={16} className="text-[#fb7185]" />
                <span>{fields.phone.label}</span>
                <span className="text-[#f43f5e] font-bold">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={fields.phone.placeholder}
                className="font-sans text-[0.95rem] px-4 py-3 rounded-xl border border-white/12 bg-[#111827]/80 text-white outline-none transition-all duration-200 focus:border-[#f43f5e] focus:bg-[#111827] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.88rem] font-bold text-gray-200 flex items-center gap-1.5" htmlFor="jobTitle">
                <Briefcase size={16} className="text-[#fb7185]" />
                <span>{fields.jobTitle.label}</span>
                <span className="text-[#f43f5e] font-bold">*</span>
              </label>
              <input
                id="jobTitle"
                type="text"
                name="jobTitle"
                required
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder={fields.jobTitle.placeholder}
                className="font-sans text-[0.95rem] px-4 py-3 rounded-xl border border-white/12 bg-[#111827]/80 text-white outline-none transition-all duration-200 focus:border-[#f43f5e] focus:bg-[#111827] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.88rem] font-bold text-gray-200 flex items-center gap-1.5" htmlFor="email">
                <Mail size={16} className="text-[#fb7185]" />
                <span>{fields.email.label}</span>
                <span className="text-[#f43f5e] font-bold">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={fields.email.placeholder}
                className="font-sans text-[0.95rem] px-4 py-3 rounded-xl border border-white/12 bg-[#111827]/80 text-white outline-none transition-all duration-200 focus:border-[#f43f5e] focus:bg-[#111827] focus:ring-2 focus:ring-[#f43f5e]/25 placeholder:text-gray-500"
              />
            </div>

            <div className="col-span-1 sm:col-span-2">
              <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white border border-white/20 px-8 py-4 rounded-xl font-sans text-[1.05rem] font-extrabold cursor-pointer shadow-[0_4px_20px_rgba(244,63,94,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)] transition-all duration-200 flex items-center justify-center gap-2.5 mt-4 disabled:opacity-50">
                {loading ? (
                  <span>{form.loadingLabel}</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{form.submitLabel}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
}
