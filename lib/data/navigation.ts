import navigation from '../../data/navigation.json';

export type NavLink = {
  label: string;
  href: string;
  sectionId?: string;
  mobileIconColor?: 'iconRose' | 'iconPurple' | 'iconEmerald' | 'iconAmber' | 'iconSky';
};

export const navLinks = navigation as NavLink[];
