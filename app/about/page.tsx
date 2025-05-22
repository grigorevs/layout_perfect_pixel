import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Audience from '@/sections/Audience';
import Footer from '@/sections/Footer';
import Quote from '@/sections/Quote';
import Team from '@/sections/Team';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Audience />
      <Quote />
      <Team />
      <Footer theme={'dark'} />
    </PageWrap>
  );
};

export default Page;
