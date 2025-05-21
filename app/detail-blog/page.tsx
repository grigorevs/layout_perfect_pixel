import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import DetailBlog from '@/sections/DetailBlog';
import Footer from '@/sections/Footer';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <DetailBlog />
      <Footer theme={'dark'} />
    </PageWrap>
  );
};

export default Page;
