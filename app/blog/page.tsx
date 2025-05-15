import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Activity from '@/sections/Activity';
import Footer from '@/sections/Footer';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Activity />
      <Footer theme={'light'} />
    </PageWrap>
  );
};

export default Page;
