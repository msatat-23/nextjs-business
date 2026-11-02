import data from '../../data/roadmap.json';

export interface RoadmapStep {
  step: string;
  title: string;
  desc: string;
}

export const roadmapSteps = data as RoadmapStep[];
