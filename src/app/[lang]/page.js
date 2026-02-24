import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import StatsSection from '../../components/StatsSection';
import VideoSection from '../../components/VideoSection';
import WhyWallBedsSection from '../../components/WhyWallBedsSection';
import ProfitCalculatorSection from '../../components/ProfitCalculatorSection';
import PartnershipBenefitsSection from '../../components/PartnershipBenefitsSection';
import UspsSection from '../../components/UspsSection';
import ProductRangesSection from '../../components/ProductRangesSection';
import CompetitiveComparisonSection from '../../components/CompetitiveComparisonSection';
import WhoWeWorkWithSection from '../../components/WhoWeWorkWithSection';
import LogisticsSection from '../../components/LogisticsSection';
import HowItWorksSection from '../../components/HowItWorksSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import GuaranteeSection from '../../components/GuaranteeSection';
import MarketOpportunitySection from '../../components/MarketOpportunitySection';
import ComingSoonSection from '../../components/ComingSoonSection';
import FaqSection from '../../components/FaqSection';
import ApplicationFormSection from '../../components/ApplicationFormSection';
import ContactFooter from '../../components/ContactFooter';

import { getDictionary } from '../../dictionaries';

export default async function Home(props) {
  const params = await props.params;
  const lang = params.lang;
  const dict = await getDictionary(lang);
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
      {/* <CompetitiveComparisonSection dict={dict} /> */}
      <WhoWeWorkWithSection dict={dict} />
      <LogisticsSection dict={dict} />
      <HowItWorksSection dict={dict} />
      {/* <TestimonialsSection dict={dict} /> */}
      <GuaranteeSection dict={dict} />
      <MarketOpportunitySection dict={dict} />
      <ComingSoonSection dict={dict} />
      {/* <FaqSection dict={dict} /> */}
      <ApplicationFormSection dict={dict} />
      <ContactFooter dict={dict} lang={lang} />
    </>
  );
}
