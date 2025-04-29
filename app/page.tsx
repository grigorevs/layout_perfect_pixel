import Header from '@/components/Header';
import HeaderSection from '@/sections/HeaderSection';
import PageWrap from '@/components/ui/PageWrap';
import Overview from '@/sections/Overview';
import Features from '@/sections/Features';
import Strength from '@/sections/Strength';
import Partners from '@/sections/Partners';
import Services from '@/sections/Services';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <HeaderSection />
      <Overview />
      <Features />
      <Strength />
      <Partners />
      <Services />
    </PageWrap>
  );
};

export default Page;
