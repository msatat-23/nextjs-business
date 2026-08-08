import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact | Business Developer',
  description:
    'Schedule an executive discovery call with our principal strategists to evaluate scale opportunities and refine your unit economics.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
