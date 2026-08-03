'use client';

import { useEffect } from 'react';
import { consumePendingScroll, scrollToSection } from '@/lib/scroll';

export function PendingScrollHandler() {
  useEffect(() => {
    const target = consumePendingScroll();
    if (target) {
      setTimeout(() => scrollToSection(target), 100);
    }
  }, []);

  return null;
}
