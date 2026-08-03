import type { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Business Developer',
  description:
    'Schedule an executive discovery call with our principal strategists to evaluate scale opportunities and refine your unit economics.',
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-[90vh] overflow-x-hidden bg-[#030712] text-[#f9fafb] pb-24">
      <ContactHero />
      <ContactForm />
    </div>
  );
}

