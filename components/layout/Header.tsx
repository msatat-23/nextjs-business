"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Layers, Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink, navLinks } from "@/lib/data/navigation";
import { requestSectionScroll, scrollToSection } from "@/lib/scroll";
import { MobileMenu } from "./MobileMenu";
import { ContactModal } from "@/components/contact/ContactModal";
import { useContentQuery } from "@/hooks/use-get-content";
import type { HeaderContent } from "@/types/header";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { data, isError } = useContentQuery<HeaderContent>("header");
  const content = data?.content;

  const isHome = pathname === "/";

  const handleNavigate = (link: NavLink) => {
    setMobileMenuOpen(false);

    if (link.sectionId) {
      if (isHome) {
        setTimeout(() => scrollToSection(link.sectionId!), 50);
      } else {
        requestSectionScroll(link.sectionId);
        router.push("/");
      }
      return;
    }

    router.push(link.href);
  };

  if (isError || !content) {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/92 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <Link
            href={`${content.homeHref}`}
            className="flex items-center gap-3.5 no-underline cursor-pointer select-none"
          >
            <Image
              src={content.logoIcon}
              alt="Business Strategy"
              width={4096}
              height={1204}
              className="h-16 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5 bg-[#111827]/80 px-2 py-1.5 rounded-full border border-white/10">
            {navLinks
              .filter((link) => link.label !== content.contactLabel)
              .map((link) => {
                const isActive = link.sectionId
                  ? false
                  : link.href === pathname;
                return (
                  <button
                    key={link.label}
                    className={`font-sans text-[0.86rem] font-semibold transition-all duration-200 px-3.5 py-1.5 min-h-[38px] rounded-full cursor-pointer inline-flex items-center justify-center ${
                      isActive
                        ? "bg-[#f43f5e]/20 text-[#fb7185] font-bold border border-[#f43f5e]/30"
                        : "text-gray-400 hover:text-white hover:bg-white/10 border border-transparent"
                    }`}
                    onClick={() => handleNavigate(link)}
                  >
                    {link.label}
                  </button>
                );
              })}
            <button
              className={`font-sans text-[0.86rem] font-semibold transition-all duration-200 px-3.5 py-1.5 min-h-[38px] rounded-full cursor-pointer inline-flex items-center justify-center ${
                pathname === content.contactHref
                  ? "bg-[#f43f5e]/20 text-[#fb7185] font-bold border border-[#f43f5e]/30"
                  : "text-gray-400 hover:text-white hover:bg-white/10 border border-transparent"
              }`}
              onClick={() =>
                handleNavigate({
                  label: content.contactLabel,
                  href: content.contactHref,
                })
              }
            >
              {content.contactLabel}
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-[#f43f5e] via-[#e11d48] to-[#9333ea] text-white border border-white/25 px-4 py-2 min-h-[40px] rounded-lg font-sans text-[0.85rem] font-bold cursor-pointer shadow-[0_4px_15px_rgba(244,63,94,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(244,63,94,0.5)] transition-all duration-200"
            >
              <span>{content.consultationLabel}</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              className="flex lg:hidden text-gray-200 p-2 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg hover:bg-white/10 cursor-pointer transition-colors"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={mobileMenuOpen}
          activeHref={pathname}
          onNavigate={handleNavigate}
          onBookConsultation={() => {
            setMobileMenuOpen(false);
            setModalOpen(true);
          }}
        />
      </header>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
