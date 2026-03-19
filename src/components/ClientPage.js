"use client";
import React, { useMemo } from 'react';
import { useProfession, mergeDict } from './ProfessionContext';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import VideoSection from './VideoSection';
import WhyWallBedsSection from './WhyWallBedsSection';
import ProfitCalculatorSection from './ProfitCalculatorSection';
import PartnershipBenefitsSection from './PartnershipBenefitsSection';
import UspsSection from './UspsSection';
import ProductRangesSection from './ProductRangesSection';
import WhoWeWorkWithSection from './WhoWeWorkWithSection';
import LogisticsSection from './LogisticsSection';
import HowItWorksSection from './HowItWorksSection';
import GuaranteeSection from './GuaranteeSection';
import MarketOpportunitySection from './MarketOpportunitySection';
import ComingSoonSection from './ComingSoonSection';
import ApplicationFormSection from './ApplicationFormSection';
import ContactFooter from './ContactFooter';
import ProfessionPopup from './ProfessionPopup';
import StockistSection from './StockistSection';

export default function ClientPage({ baseDict, lang }) {
  const { profession, mounted } = useProfession();

  const dict = useMemo(() => {
    // Only merge after mounting to prevent hydration mismatch
    // If not mounted, use the default dictionary
    if (!mounted) return baseDict;
    return mergeDict(baseDict, profession);
  }, [baseDict, profession, mounted]);

  return (
    <>
      <Navbar dict={dict} lang={lang} />
      <HeroSection dict={dict} />
      <StatsSection dict={dict} />
      <VideoSection dict={dict} />
      <WhyWallBedsSection dict={dict} />
      <ProfitCalculatorSection dict={dict} />
      <PartnershipBenefitsSection dict={dict} />
      <UspsSection dict={dict} />
      <ProductRangesSection dict={dict} />
      <WhoWeWorkWithSection dict={dict} />
      <LogisticsSection dict={dict} />
      <HowItWorksSection dict={dict} />
      <GuaranteeSection dict={dict} />
      <MarketOpportunitySection dict={dict} />
      <StockistSection dict={dict} />
      <ComingSoonSection dict={dict} />
      <ApplicationFormSection dict={dict} />
      <ContactFooter dict={dict} lang={lang} />
      <ProfessionPopup dict={dict} />
    </>
  );
}
