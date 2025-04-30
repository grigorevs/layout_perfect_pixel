'use client';

import {
  BackgroundBottomBlur,
  BackgroundTopBlur,
  CustomerGrowth,
  HeaderBlock,
  HeaderDescription,
  HeaderImagesBlock,
  HeaderInput,
  HeaderInputBlock,
  HeaderItem,
  HeaderText,
  HeaderTitle,
  LineImage,
  Sales,
  SalesReport,
} from './index.styles';
import SalesLight from '@/public/images/home/Sales-Light.svg';
import StatisticLight from '@/public/images/home/Statistic-Light.svg';
import Customer from '@/public/images/home/Customer-Growth.svg';
import Line from '@/public/images/home/Line.svg';
import TopBlur from '@/public/images/home/Ellipse125.svg';
import BottomBlur from '@/public/images/home/Ellipse124.svg';
import Button from '@/components/Button';

const HeaderSection = () => {
  return (
    <HeaderBlock>
      <BackgroundTopBlur src={TopBlur} alt="Blur" />
      <BackgroundBottomBlur src={BottomBlur} alt="Blur" />
      <HeaderItem>
        <HeaderTitle>Digitally forward creative</HeaderTitle>
        <HeaderDescription>
          <LineImage src={Line} alt="Line" />
          <HeaderText>
            When it comes to interactive marketing, we&apos;ve got you covered. Be where the world
            is going
          </HeaderText>
        </HeaderDescription>
        <HeaderInputBlock>
          <HeaderInput type="email" placeholder="Enter your email" />
          <Button>Try for free</Button>
        </HeaderInputBlock>
      </HeaderItem>
      <HeaderImagesBlock>
        <SalesReport src={SalesLight} alt="SalesLight" />
        <CustomerGrowth src={Customer} alt="CustomerGrowth" />
        <Sales src={StatisticLight} alt="StatisticLight" />
      </HeaderImagesBlock>
    </HeaderBlock>
  );
};

export default HeaderSection;
