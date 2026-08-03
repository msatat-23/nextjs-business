import json from '../../data/chartData.json';
import { ChartDataMap } from '@/types';

export const chartDataMap = (json as any).chartDataMap as ChartDataMap;
export const chartQuarters = (json as any).chartQuarters as readonly string[];
