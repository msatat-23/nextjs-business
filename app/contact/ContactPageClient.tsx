'use client';

import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { usePageQuery } from '@/hooks/use-get-page';
import { contactPageContent } from '@/lib/data/contactPage';
import type { ContactPageContent } from '@/types/contact-page';

export function ContactPageClient() {
  const { data, isLoading, isError } = usePageQuery('contact');
  const content: ContactPageContent = (data?.content as ContactPageContent | undefined) ?? contactPageContent;

  if (isLoading) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#030712] text-gray-400">
        Loading…
      </div>
    );
  }

  if (isError && !data?.content) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#030712] text-gray-400">
        Unable to load page content.
      </div>
    );
  }

  return (
    <div className="w-full min-h-[90vh] overflow-x-hidden bg-[#030712] text-[#f9fafb] pb-24">
      <ContactHero hero={content.hero} />
      <ContactForm form={content.form} />
    </div>
  );
}
