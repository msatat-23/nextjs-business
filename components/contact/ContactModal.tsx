'use client';

import {
  useEffect,
  useState,
} from 'react';

import {
  createPortal,
} from 'react-dom';

import {
  motion,
  AnimatePresence,
} from 'motion/react';

import {
  X,
  User,
  Phone,
  Briefcase,
  Mail,
  Send,
  CheckCircle2,
  Layers,
} from 'lucide-react';

import { Controller } from 'react-hook-form';

import { PhoneInput } from './PhoneInput';
import { useContactForm } from '../../hooks/use-contact-form';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) {
    return null;
  }

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            p-4
            sm:p-6
          "
        >
          {/* Backdrop */}
          <motion.div
            className="
              fixed
              inset-0
              bg-black/80
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="
              relative
              z-10
              my-auto
              w-full
              max-w-2xl
              rounded-2xl
              border
              border-white/15
              bg-[#0b0f19]
              p-6
              shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(244,63,94,0.2)]
              sm:p-10
            "
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
              y: 20,
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
            }}
          >
            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                cursor-pointer
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                text-gray-300
                transition-colors
                hover:bg-white/20
                hover:text-white
              "
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/20
                  bg-gradient-to-br
                  from-[#f43f5e]
                  via-[#e11d48]
                  to-[#9333ea]
                  shadow-[0_0_15px_rgba(244,63,94,0.4)]
                "
              >
                <Layers
                  size={20}
                  className="text-white"
                />
              </div>

              <div>
                <span
                  className="
                    text-[0.7rem]
                    font-black
                    uppercase
                    tracking-widest
                    text-[#fb7185]
                  "
                >
                  STRATEGIC ADVISORY
                </span>

                <h3
                  className="
                    m-0
                    font-sans
                    text-xl
                    font-black
                    leading-tight
                    text-white
                    sm:text-2xl
                  "
                >
                  Book Executive Consultation
                </h3>
              </div>
            </div>

            <p
              className="
                mb-6
                font-sans
                text-sm
                leading-relaxed
                text-gray-400
              "
            >
              Connect with Senior Business Developer
              directors to schedule your bespoke growth
              audit and advisory briefing.
            </p>

            {submitted ? (
              <motion.div
                className="
                  flex
                  flex-col
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#10b981]/30
                  bg-[#10b981]/10
                  p-6
                  text-center
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
                  size={40}
                  className="text-[#34d399]"
                />

                <h4 className="m-0 text-xl font-extrabold text-white">
                  Consultation Brief Received
                </h4>

                <p
                  className="
                    m-0
                    max-w-md
                    text-sm
                    leading-relaxed
                    text-gray-300
                  "
                >
                  Thank you! An executive partner will
                  review your inquiry and contact you
                  within 24 business hours to confirm
                  your advisory call.
                </p>

                <div className="mt-2 flex gap-4">
                  <button
                    type="button"
                    onClick={submitAnother}
                    className="
                      cursor-pointer
                      text-xs
                      font-bold
                      text-[#fb7185]
                      underline
                      transition-colors
                      hover:text-[#f43f5e]
                    "
                  >
                    Submit another request
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-[#111827]
                      px-4
                      py-2
                      text-xs
                      font-bold
                      text-white
                      transition-colors
                      hover:bg-white/10
                    "
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
                noValidate
              >
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-fullName"
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-sans
                      text-xs
                      font-bold
                      text-gray-200
                    "
                  >
                    <User
                      size={14}
                      className="text-[#fb7185]"
                    />

                    <span>
                      Full Name
                    </span>

                    <span className="font-bold text-[#f43f5e]">
                      *
                    </span>
                  </label>

                  <input
                    id="modal-fullName"
                    type="text"
                    placeholder="e.g. Jonathan Vance"
                    {...register('fullName', {
                      required: 'Full name is required',
                    })}
                    className="
                      h-[48px]
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#111827]
                      px-3.5
                      font-sans
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      focus:border-[#f43f5e]
                      focus:ring-4
                      focus:ring-[#f43f5e]/10
                      placeholder:text-gray-600
                    "
                  />

                  {errors.fullName && (
                    <p className="text-xs text-red-400">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-phone"
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-sans
                      text-xs
                      font-bold
                      text-gray-200
                    "
                  >
                    <Phone
                      size={14}
                      className="text-[#fb7185]"
                    />

                    <span>
                      Direct Phone
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
                        id="modal-phone"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="+1 (555) 019-2834"
                        required
                        aria-label="Direct Phone"
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
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-jobTitle"
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-sans
                      text-xs
                      font-bold
                      text-gray-200
                    "
                  >
                    <Briefcase
                      size={14}
                      className="text-[#fb7185]"
                    />

                    <span>
                      Job Title
                    </span>

                    <span className="font-bold text-[#f43f5e]">
                      *
                    </span>
                  </label>

                  <input
                    id="modal-jobTitle"
                    type="text"
                    placeholder="e.g. Chief Revenue Officer"
                    {...register('jobTitle', {
                      required: 'Job title is required',
                    })}
                    className="
                      h-[48px]
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#111827]
                      px-3.5
                      font-sans
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      focus:border-[#f43f5e]
                      focus:ring-4
                      focus:ring-[#f43f5e]/10
                      placeholder:text-gray-600
                    "
                  />

                  {errors.jobTitle && (
                    <p className="text-xs text-red-400">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="modal-email"
                    className="
                      flex
                      items-center
                      gap-1.5
                      font-sans
                      text-xs
                      font-bold
                      text-gray-200
                    "
                  >
                    <Mail
                      size={14}
                      className="text-[#fb7185]"
                    />

                    <span>
                      Corporate Email
                    </span>

                    <span className="font-bold text-[#f43f5e]">
                      *
                    </span>
                  </label>

                  <input
                    id="modal-email"
                    type="email"
                    placeholder="j.vance@enterprise.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:
                          'Enter a valid email address',
                      },
                    })}
                    className="
                      h-[48px]
                      rounded-xl
                      border
                      border-white/[0.10]
                      bg-[#111827]
                      px-3.5
                      font-sans
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      focus:border-[#f43f5e]
                      focus:ring-4
                      focus:ring-[#f43f5e]/10
                      placeholder:text-gray-600
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
                <div className="col-span-1 mt-2 sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/20
                      bg-gradient-to-r
                      from-[#f43f5e]
                      via-[#e11d48]
                      to-[#9333ea]
                      px-6
                      py-3.5
                      font-sans
                      text-sm
                      font-extrabold
                      text-white
                      shadow-[0_4px_20px_rgba(244,63,94,0.4)]
                      transition-all
                      hover:-translate-y-0.5
                      hover:shadow-[0_6px_25px_rgba(244,63,94,0.6)]
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    {isSubmitting ? (
                      <span>
                        Scheduling Consultation...
                      </span>
                    ) : (
                      <>
                        <Send size={16} />

                        <span>
                          Confirm Strategic Consultation
                        </span>
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

  return createPortal(
    modalContent,
    document.body,
  );
}

