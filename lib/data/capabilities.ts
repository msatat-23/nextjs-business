import data from '../../data/capabilities.json';

export interface CapabilityItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  keyHighlights: string[];
  image: string;
}

export const capabilitiesData = data as CapabilityItem[];
