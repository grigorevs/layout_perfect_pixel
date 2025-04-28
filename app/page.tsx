import Header from '@/components/Header';
import HeadeSection from '@/sections/HeaderSection';
import PageWrap from '@/components/ui/PageWrap';
import React from 'react';
import Overview from '@/sections/Overview';
import Features from '@/sections/Features';

export default function Page() {
  return (
    <PageWrap>
      <Header />
      <HeadeSection />
      <Overview />
      <Features />
    </PageWrap>
  );
}
