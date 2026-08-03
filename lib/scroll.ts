const HEADER_OFFSET = 75;
const PENDING_SCROLL_KEY = 'bd-pending-scroll-target';

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(0, offsetPosition),
    behavior: 'smooth',
  });
}

export function requestSectionScroll(id: string): void {
  sessionStorage.setItem(PENDING_SCROLL_KEY, id);
}

export function consumePendingScroll(): string | null {
  const id = sessionStorage.getItem(PENDING_SCROLL_KEY);
  if (id) {
    sessionStorage.removeItem(PENDING_SCROLL_KEY);
  }
  return id;
}
