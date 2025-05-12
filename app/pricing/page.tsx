import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Footer from '@/sections/Footer';
import Plans from '@/sections/Plan';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Plans />
      <Footer theme={'dark'} />
    </PageWrap>
  );
};

export default Page;
