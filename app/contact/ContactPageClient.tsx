'use client';

import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { usePageQuery } from '@/hooks/use-get-page';
import type { ContactPageContentType } from '@/types/contact-page';

export function ContactPageClient() {


  const { data, isError } = usePageQuery<ContactPageContentType>('contact');

  const content = data?.content;


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
