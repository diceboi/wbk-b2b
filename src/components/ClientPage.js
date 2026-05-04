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
import ProductShowcaseSection from './ProductShowcaseSection';
import { InfluencerOpportunity, InfluencerBenefits, InfluencerMarket, InfluencerRequirements, InfluencerDarkWrapper } from './InfluencerSections';
import { 
  FitterOpportunity, 
  BusinessSense, 
  MakerOpportunity, 
  MakerFraming, 
  RetailerOpportunity, 
  RetailerValue, 
  RetailerOptions, 
  RetailerExtra 
} from './ProfessionSpecificSections';

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
      {profession !== 'influencer' && <StatsSection dict={dict} />}
      {profession !== 'influencer' && <VideoSection dict={dict} />}
      {profession === 'interior_designer' && <WhyWallBedsSection dict={dict} />}

      {/* Profession Specific Opportunity Sections */}
      {profession === 'fitter_installer' && <FitterOpportunity dict={dict} />}
      {profession === 'furniture_maker' && <MakerOpportunity dict={dict} />}
      {profession === 'retailer' && <RetailerOpportunity dict={dict} />}
      {profession === 'influencer' && <InfluencerOpportunity dict={dict} />}
      
      {/* Business Sense / Value Sections */}
      {profession === 'fitter_installer' && <BusinessSense dict={dict} profession="fitter_installer" />}
      {profession === 'furniture_maker' && <BusinessSense dict={dict} profession="furniture_maker" />}
      {profession === 'retailer' && <RetailerValue dict={dict} />}
      
      {profession !== 'influencer' && <ProfitCalculatorSection dict={dict} />}
      
      {profession === 'influencer' ? (
        <InfluencerDarkWrapper>
          <InfluencerBenefits dict={dict} />
          <InfluencerMarket dict={dict} />
        </InfluencerDarkWrapper>
      ) : (
        <PartnershipBenefitsSection dict={dict} />
      )}

      {/* Additional Profession Sections */}
      {profession === 'furniture_maker' && <MakerFraming dict={dict} />}
      {profession === 'retailer' && (
        <>
          <RetailerOptions dict={dict} />
          <RetailerExtra dict={dict} />
        </>
      )}
      
      <ProductShowcaseSection dict={dict} />
      <UspsSection dict={dict} />
      <ProductRangesSection dict={dict} />
      
      {profession === 'influencer' ? (
        <InfluencerRequirements dict={dict} />
      ) : (
        <WhoWeWorkWithSection dict={dict} />
      )}

      {profession !== 'influencer' && (
        <>
          <LogisticsSection dict={dict} />
          <HowItWorksSection dict={dict} />
          <GuaranteeSection dict={dict} />
          <MarketOpportunitySection dict={dict} />
          <StockistSection dict={dict} />
          <ComingSoonSection dict={dict} />
        </>
      )}
      <ApplicationFormSection dict={dict} lang={lang} />
      <ContactFooter dict={dict} lang={lang} />
      <ProfessionPopup dict={dict} />
    </>
  );
}
