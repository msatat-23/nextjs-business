import json from '../../data/heroSection.json';

export interface HeroBadge {
  label: string;
  color?: string;
}

export interface HeroCta {
  label: string;
  href?: string;
  scrollTo?: string;
}

export interface HeroSectionData {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  badges: HeroBadge[];
  beforeTitle:string;
  afterTitle:string;
}

export const heroData = json as unknown as HeroSectionData;
