'use client';

import { motion } from 'motion/react';
import {
  User,
  Phone,
  Briefcase,
  Mail,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { Controller } from 'react-hook-form';

import type { ContactPageContent } from '@/types/contact-page';
import { PhoneInput } from './PhoneInput';
import { useContactForm } from '../../hooks/use-contact-form';

interface ContactFormProps {
  form: ContactPageContent['form'];
}

export function ContactForm({
  form,
}: ContactFormProps) {
  const {
    register,
    control,
    errors,
    isSubmitting,
    submitted,
    submitError,
    handleSubmit,
    onSubmit,
    submitAnother,
  } = useContactForm();

  const fields = form.fields;

  return (
    <section className="relative z-20 mx-auto -mt-[60px] max-w-3xl px-6">
      <motion.div
        className="
          rounded-2xl
          border
          border-white/10
          bg-[#0b0f19]
          p-6
          shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),0_0_30px_rgba(244,63,94,0.15)]
          backdrop-blur-md
          sm:p-12
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <div className="mb-10 text-center">
          <h2
            className="
              mb-2.5
              font-sans
              text-2xl
              font-black
              tracking-tight
              text-white
              sm:text-3xl
            "
          >
            {form.title}
          </h2>

          <p
            className="
              font-sans
              text-[0.98rem]
              leading-relaxed
              text-gray-400
            "
          >
            {form.description}
          </p>
        </div>

        {submitted ? (
          <motion.div
            className="
              flex
              items-start
              gap-5
              rounded-2xl
              border
              border-[#10b981]/30
              bg-[#10b981]/10
              p-8
            "
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
          >
            <CheckCircle2
              size={32}
              className="
                mt-1
                shrink-0
                text-[#34d399]
              "
            />

            <div className="flex flex-col gap-2">
              <h3 className="m-0 text-xl font-extrabold text-white">
                {form.successTitle}
              </h3>

              <p className="m-0 text-[0.95rem] leading-relaxed text-gray-300">
                {form.successMessage}
              </p>

              <button
                type="button"
                onClick={submitAnother}
                className="
                  mt-4
                  self-start
                  cursor-pointer
                  border-0
                  bg-transparent
                  p-0
                  text-[0.88rem]
                  font-bold
                  text-[#fb7185]
                  underline
                  transition-colors
                  hover:text-[#f43f5e]
                "
              >
                {form.submitAnother}
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="
              grid
              grid-cols-1
              gap-6
              sm:grid-cols-2
            "
            noValidate
          >
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="
                  flex
                  items-center
                  gap-1.5
                  font-sans
                  text-[0.88rem]
                  font-bold
                  text-gray-200
                "
              >
                <User
                  size={16}
                  className="text-[#fb7185]"
                />

                <span>
                  {fields.fullName.label}
                </span>

                <span className="font-bold text-[#f43f5e]">
                  *
                </span>
              </label>

              <input
                id="fullName"
                type="text"
                placeholder={fields.fullName.placeholder}
                {...register('fullName', {
                  required: 'Full name is required',
                })}
                className="
                  h-[52px]
                  rounded-xl
                  border
                  border-white/[0.10]
                  bg-[#0f172a]/80
                  px-4
                  font-sans
                  text-[0.95rem]
                  text-white
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-600
                  focus:border-[#f43f5e]
                  focus:bg-[#111827]
                  focus:ring-4
                  focus:ring-[#f43f5e]/10
                "
              />

              {errors.fullName && (
                <p className="text-xs text-red-400">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="
                  flex
                  items-center
                  gap-1.5
                  font-sans
                  text-[0.88rem]
                  font-bold
                  text-gray-200
                "
              >
                <Phone
                  size={16}
                  className="text-[#fb7185]"
                />

                <span>
                  {fields.phone.label}
                </span>

                <span className="font-bold text-[#f43f5e]">
                  *
                </span>
              </label>

              <Controller
                name="phone"
                control={control}
                rules={{
                  required: 'Phone number is required',
                }}
                render={({ field }) => (
                  <PhoneInput
                    id="phone"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={fields.phone.placeholder}
                    required
                    aria-label={fields.phone.label}
                  />
                )}
              />

              {errors.phone && (
                <p className="text-xs text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Job Title */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="jobTitle"
                className="
                  flex
                  items-center
                  gap-1.5
                  font-sans
                  text-[0.88rem]
                  font-bold
                  text-gray-200
                "
              >
                <Briefcase
                  size={16}
                  className="text-[#fb7185]"
                />

                <span>
                  {fields.jobTitle.label}
                </span>

                <span className="font-bold text-[#f43f5e]">
                  *
                </span>
              </label>

              <input
                id="jobTitle"
                type="text"
                placeholder={fields.jobTitle.placeholder}
                {...register('jobTitle', {
                  required: 'Job title is required',
                })}
                className="
                  h-[52px]
                  rounded-xl
                  border
                  border-white/[0.10]
                  bg-[#0f172a]/80
                  px-4
                  font-sans
                  text-[0.95rem]
                  text-white
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-600
                  focus:border-[#f43f5e]
                  focus:bg-[#111827]
                  focus:ring-4
                  focus:ring-[#f43f5e]/10
                "
              />

              {errors.jobTitle && (
                <p className="text-xs text-red-400">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="
                  flex
                  items-center
                  gap-1.5
                  font-sans
                  text-[0.88rem]
                  font-bold
                  text-gray-200
                "
              >
                <Mail
                  size={16}
                  className="text-[#fb7185]"
                />

                <span>
                  {fields.email.label}
                </span>

                <span className="font-bold text-[#f43f5e]">
                  *
                </span>
              </label>

              <input
                id="email"
                type="email"
                placeholder={fields.email.placeholder}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value:
                      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                className="
                  h-[52px]
                  rounded-xl
                  border
                  border-white/[0.10]
                  bg-[#0f172a]/80
                  px-4
                  font-sans
                  text-[0.95rem]
                  text-white
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-gray-600
                  focus:border-[#f43f5e]
                  focus:bg-[#111827]
                  focus:ring-4
                  focus:ring-[#f43f5e]/10
                "
              />

              {errors.email && (
                <p className="text-xs text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {submitError && (
              <div
                role="alert"
                className="col-span-1 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300 sm:col-span-2"
              >
                {submitError}
              </div>
            )}

            {/* Submit */}
            <div className="col-span-1 sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  border
                  border-white/20
                  bg-gradient-to-r
                  from-[#f43f5e]
                  via-[#e11d48]
                  to-[#9333ea]
                  px-6
                  sm:px-8
                  py-3.5
                  sm:py-4
                  font-sans
                  text-[0.95rem]
                  sm:text-[1.05rem]
                  font-extrabold
                  text-white
                  shadow-[0_4px_20px_rgba(244,63,94,0.4)]
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  disabled:hover:translate-y-0
                  active:scale-[0.98]
                "
              >
                {isSubmitting ? (
                  <span>{form.loadingLabel}</span>
                ) : (
                  <>
                    <Send size={16} className="sm:w-[18px] sm:h-[18px] shrink-0" />

                    <span className="truncate">
                      {form.submitLabel}
                    </span>
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