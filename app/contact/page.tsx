import type { Metadata } from 'next';
import { ContactPageClient } from './ContactPageClient';
import { Suspense } from 'react';
import { ContactPageSkeleton } from '@/components/skeletons/contactPageSkeleton';

export const metadata: Metadata = {
  title: 'Contact | Business Developer',
  description:
    'Schedule an executive discovery call with our principal strategists to evaluate scale opportunities and refine your unit economics.',
};

export default function ContactPage() {
  return <Suspense fallback={<ContactPageSkeleton />}>
    <ContactPageClient />
  </Suspense>;
}
