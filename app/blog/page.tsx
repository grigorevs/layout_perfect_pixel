import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Footer from '@/sections/Footer';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Footer theme={'light'} />
    </PageWrap>
  );
};

export default Page;
