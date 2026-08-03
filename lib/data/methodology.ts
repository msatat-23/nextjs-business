import json from '../../data/methodology.json';
import { MethodologyTab } from '@/types';

export interface MethodologyContent {
  id: MethodologyTab;
  label: string;
  title: string;
  desc: string;
  checklist: string[];
  iconName: 'PieChart' | 'ShieldCheck' | 'Zap' | 'Compass';
  iconColorClass: 'iconPurpleLarge' | 'iconEmeraldLarge' | 'iconAmberLarge' | 'iconRoseLarge';
  visualLabel: string;
}

export const methodologyTabs = json as MethodologyContent[];
