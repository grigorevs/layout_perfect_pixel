import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Audience from '@/sections/Audience';
import Quote from '@/sections/Quote';
import Team from '@/sections/Team';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Audience />
      <Quote />
      <Team />
    </PageWrap>
  );
};

export default Page;
