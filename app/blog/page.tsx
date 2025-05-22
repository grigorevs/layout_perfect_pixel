import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Activity from '@/sections/Activity';
import Articles from '@/sections/Articles';
import Content from '@/sections/Content';
import Footer from '@/sections/Footer';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Activity />
      <Content />
      <Articles />
      <Footer theme={'light'} />
    </PageWrap>
  );
};

export default Page;
