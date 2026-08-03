export interface ContactFormData {
  fullname: string;
  phone: string;
  jobTitle: string;
  email: string;
  companyName?: string;
  serviceInterest?: string;
  message?: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  desc: string;
  icon: 'TrendingUp' | 'Zap' | 'Target' | 'Award' | 'Building2' | 'BarChart3';
  badge: string;
  features?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  growth: string;
  description: string;
  image: string;
  client: string;
  timeline: string;
}

export interface SectorPlaybook {
  id: string;
  sector: string;
  badge: string;
  title: string;
  metric: string;
  impact: string;
  description: string;
  pillars: string[];
  image: string;
  iconName: 'Landmark' | 'Truck' | 'Cpu' | 'Stethoscope' | 'ShoppingBag';
  accentColor: string;
}

export type ChartQuarter = 'Q1' | 'Q2' | 'Q3' | 'Q4' | 'Q5';

export interface ChartPoint {
  val: string;
  trend: string;
  pointX: number;
  pointY: number;
  label: string;
}

export type ChartDataMap = Record<ChartQuarter, ChartPoint>;

export type MethodologyTab = 'execution' | 'risk' | 'automation' | 'csuite';
