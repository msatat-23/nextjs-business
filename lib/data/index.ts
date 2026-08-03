import siteData from '@/data/site.json';
import {
  CapabilityItem,
  ChartDataMap,
  ChartQuarter,
  MethodologyContent,
  NavLink,
  PortfolioItem,
  RoadmapStep,
  SectorPlaybook,
  ServiceCard,
} from '@/types';

export type { CapabilityItem, MethodologyContent, NavLink, RoadmapStep } from '@/types';

export const site = siteData;

export const navLinks = site.navigation as NavLink[];
export const services = site.services.items as ServiceCard[];
export const portfolioItems = site.portfolio.items as PortfolioItem[];
export const sectorPlaybooks = site.sectorPlaybooks.items as SectorPlaybook[];
export const capabilitiesData = site.capabilities.items as CapabilityItem[];
export const methodologyTabs = site.methodology.tabs as MethodologyContent[];
export const roadmapSteps = site.roadmap.steps as RoadmapStep[];
export const chartDataMap = site.chart.data as ChartDataMap;
export const chartQuarters = site.chart.quarters as ChartQuarter[];
export const stats = site.stats;
