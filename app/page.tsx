"use client"
import { PendingScrollHandler } from '@/components/home/PendingScrollHandler';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { MethodologySection } from '@/components/home/MethodologySection';
import { CaseStudiesSlider } from '@/components/home/CaseStudiesSlider';
import { SectorPlaybooksSlider } from '@/components/home/SectorPlaybooksSlider';
import { ExecutiveCapabilitiesSlider } from '@/components/home/ExecutiveCapabilitiesSlider';
import { RoiCalculatorSection } from '@/components/home/RoiCalculatorSection';
import { RoadmapSection } from '@/components/home/RoadmapSection';
import { CtaBannerSection } from '@/components/home/CtaBannerSection';
import { usePublicPageQuery } from '@/hooks/use-get-page';

export default function HomePage() {

  const { data } = usePublicPageQuery("home");

  console.log(data)

  return (
    <div className="w-full overflow-x-hidden bg-[#030712] text-[#f9fafb]">
      <PendingScrollHandler />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <MethodologySection />
      <CaseStudiesSlider />
      <SectorPlaybooksSlider />
      <ExecutiveCapabilitiesSlider />
      <RoiCalculatorSection />
      <RoadmapSection />
      <CtaBannerSection />
    </div>
  );
}

