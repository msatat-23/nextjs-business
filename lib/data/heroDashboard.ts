import json from '../../data/heroDashboard.json';
import { ChartDataMap } from '@/types';

export interface HeroDashboardCard {
  id: string;
  label: string;
  usesChart?: boolean;
  value?: string;
  trend?: string;
}

export interface HeroDashboardData {
  aiLabel: string;
  headerTitle: string;
  cards: HeroDashboardCard[];
  chart: {
    label: string;
    target: string;
    footerLabels: string[];
  };
}

export const heroDashboardData = json as unknown as HeroDashboardData;
