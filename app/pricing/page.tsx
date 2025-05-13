import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Footer from '@/sections/Footer';
import Plans from '@/sections/Plan';
import Questions from '@/sections/Questions';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Plans />
      <Questions />
      <Footer theme={'dark'} />
    </PageWrap>
  );
};

export default Page;
