export interface NavLink {
  label: string;
  href: string;
  sectionId?: string;
  mobileIconColor?: 'iconRose' | 'iconPurple' | 'iconEmerald' | 'iconAmber' | 'iconSky';
}

export const navLinks: NavLink[] = [
  { label: 'Overview', href: '/', mobileIconColor: 'iconRose' },
  { label: 'Contact', href: '/contact', mobileIconColor: 'iconSky' },
];
