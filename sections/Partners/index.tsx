'use client';

import Image from 'next/image';
import AirbnbLogo from '@/public/images/home/AirbnbLogo.svg';
import AmazonLogo from '@/public/images/home/AmazonLogo.svg';
import FedExLogo from '@/public/images/home/FedExLogo.svg';
import MicrosoftLogo from '@/public/images/home/MicrosoftLogo.svg';
import GoogleLogo from '@/public/images/home/GoogleLogo.svg';
import OLALogo from '@/public/images/home/OLALogo.svg';
import WalmartLogo from '@/public/images/home/WalmartLogo.svg';
import OYOLogo from '@/public/images/home/OYOLogo.svg';
import {
  PartnersWrap,
  PartnersTextBlock,
  PartnersTitle,
  PartnersText,
  PartnersImagesBlock,
} from './index.styles';

const Partners = () => {
  return (
    <PartnersWrap>
      <PartnersTextBlock>
        <PartnersTitle>890+</PartnersTitle>
        <PartnersText>some big companies that we work with, and trust us very much</PartnersText>
      </PartnersTextBlock>
      <PartnersImagesBlock>
        <Image src={AirbnbLogo} alt="AirbnbLogo" />
        <Image src={AmazonLogo} alt="AmazonLogo" />
        <Image src={FedExLogo} alt="FedExLogo" />
        <Image src={MicrosoftLogo} alt="MicrosoftLogo" />
        <Image src={GoogleLogo} alt="GoogleLogo" />
        <Image src={OLALogo} alt="OLALogo" />
        <Image src={WalmartLogo} alt="WalmartLogo" />
        <Image src={OYOLogo} alt="OYOLogo" />
      </PartnersImagesBlock>
    </PartnersWrap>
  );
};

export default Partners;
