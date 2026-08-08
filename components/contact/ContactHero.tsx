import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import type { ContactPageContent } from '@/types/contact-page';

interface ContactHeroProps {
  hero: ContactPageContent['hero'];
}

export function ContactHero({ hero }: ContactHeroProps) {
  return (
    <section className="relative w-full h-[380px] bg-[#030712] overflow-hidden flex items-center justify-center text-white text-center border-b border-white/10">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-20 contrast-125 brightness-75"
      />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(244,63,94,0.2)_0%,rgba(168,85,247,0.1)_50%,rgba(3,7,18,0)_70%)] pointer-events-none" />
      <div className="relative z-10 max-w-3xl px-6">
        <div className="inline-flex items-center gap-2 bg-[#111827]/80 border border-white/12 text-[#fb7185] px-4 py-1.5 rounded-full font-sans text-[0.78rem] font-bold mb-5 backdrop-blur-md">
          <Sparkles size={14} />
          <span>{hero.badge}</span>
        </div>
        <h1 className="font-sans text-3xl sm:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
          {hero.title}{' '}
          <span className="bg-gradient-to-r from-[#fb7185] to-[#a855f7] bg-clip-text text-transparent">{hero.titleHighlight}</span>
        </h1>
        <p className="font-sans text-base sm:text-lg text-gray-400 leading-relaxed">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
