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
import { usePageQuery } from '@/hooks/use-get-page';


export default function HomePage() {
  const { data, isLoading, isError } = usePageQuery("home");
  const content = data?.content;

  console.log(data)

  if (isLoading) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#030712] text-gray-400">
        Loading…
      </div>
    );
  }

  if (isError || !content) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center bg-[#030712] text-gray-400">
        Unable to load page content.
      </div>
    );
  }



  return (
    <div className="w-full overflow-x-hidden bg-[#030712] text-[#f9fafb]">
      <PendingScrollHandler />
      <HeroSection data={content.heroSection} dashboard={content.heroDashboard} />
      <StatsSection stats={content.stats} />
      <ServicesSection services={content.services} />
      <MethodologySection tabs={content.methodology} />
      <CaseStudiesSlider content={content.caseStudies} />
      <SectorPlaybooksSlider items={content.sectorPlaybooks} />
      <ExecutiveCapabilitiesSlider items={content.executiveCapabilities} />
      <RoiCalculatorSection content={content.roiCalculator} />
      <RoadmapSection content={content.roadmap} />
      <CtaBannerSection content={content.ctaBanner} />
    </div>
  );
}
