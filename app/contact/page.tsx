import Header from '@/components/Header';
import PageWrap from '@/components/ui/PageWrap';
import Footer from '@/sections/Footer';
import Map from '@/sections/Map';
import Partners from '@/sections/Partners';
import Form from '@/sections/Form';

const Page = () => {
  return (
    <PageWrap>
      <Header />
      <Map />
      <Partners/>
      <Form />
      <Footer theme={'dark'} />
    </PageWrap>
  );
};

export default Page;
