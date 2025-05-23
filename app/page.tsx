import Header from '@/components/Header';
import HeaderSection from '@/sections/HeaderSection';
import PageWrap from '@/components/ui/PageWrap';
import Overview from '@/sections/Overview';
import Features from '@/sections/Features';
import Strength from '@/sections/Strength';
import Partners from '@/components/Partners';
import Services from '@/sections/Services';
import Insight from '@/sections/Insight';
import Testimonials from '@/sections/Testimonials';
import Footer from '@/sections/Footer';

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
      <Insight />
      <Testimonials />
      <Footer theme={'light'} />
    </PageWrap>
  );
};

export default Page;
