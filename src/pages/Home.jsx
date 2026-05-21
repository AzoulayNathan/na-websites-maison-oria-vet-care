import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import CarePathSection from '@/components/home/CarePathSection';
import FirstVisitSection from '@/components/home/FirstVisitSection';
import EverydayCareSection from '@/components/home/EverydayCareSection';
import SomethingOffSection from '@/components/home/SomethingOffSection';
import ComfortSection from '@/components/home/ComfortSection';
import SeniorSection from '@/components/home/SeniorSection';
import LocationsSection from '@/components/home/LocationsSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CarePathSection />
      <FirstVisitSection />
      <EverydayCareSection />
      <SomethingOffSection />
      <ComfortSection />
      <SeniorSection />
      <LocationsSection />
      <FinalCtaSection />
    </>
  );
}