import type { HeroSectionData } from '@/lib/data/heroSection';
import type { HeroDashboardData } from '@/lib/data/heroDashboard';
import type { CapabilityItem } from '@/lib/data/capabilities';
import type { MethodologyContent } from '@/lib/data/methodology';
import type { PortfolioItem, SectorPlaybook, ServiceCard } from '@/types';
import type { RoadmapStep } from '@/lib/data/roadmap';

export interface StatItem {
  number: string;
  label: string;
  sub: string;
}

export interface SectionHeading {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
}

export interface CaseStudiesContent {
  section: SectionHeading & {
    verifiedLabel: string;
    requestDeckCta: string;
  };
  items: PortfolioItem[];
}

export interface RoadmapContent {
  section: Omit<SectionHeading, 'titleHighlight'>;
  steps: RoadmapStep[];
}

export interface RoiCalculatorContent {
  section: {
    badge: string;
    title: string;
    description: string;
    baselineLabel: string;
    rangeLabels: [string, string, string];
    projectedLabel: string;
    projectedGainLabel?: string;
    efficiencyLabel: string;
    efficiencySub: string;
    multipleLabel: string;
    multipleSub: string;
    cta: string;
  };
  minRevenue: number;
  maxRevenue: number;
  step: number;
  defaultRevenue: number;
  growthMultiple: number;
}

export interface CtaBannerContent {
  title: string;
  description: string;
  button: string;
}

export interface HomePageContentType {
  heroSection: HeroSectionData;
  heroDashboard: HeroDashboardData;
  stats: StatItem[];
  services: ServiceCard[];
  methodology: MethodologyContent[];
  sectorPlaybooks: SectorPlaybook[];
  executiveCapabilities: CapabilityItem[];
  caseStudies: CaseStudiesContent;
  roadmap: RoadmapContent;
  roiCalculator: RoiCalculatorContent;
  ctaBanner: CtaBannerContent;
}
