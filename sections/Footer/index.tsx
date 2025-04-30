'use client';

import {
  BackgroundBottomBlur,
  BackgroundTopBlur,
  FooterCompanyText,
  FooterCompanyTextBlock,
  FooterCopyright,
  FooterCopyrightText,
  FooterDescription,
  FooterDescriptionBlock,
  FooterDescriptionWrap,
  FooterLinkstWrap,
  FooterList,
  FooterListBlock,
  FooterListItem,
  FooterListTitle,
  FooterListWrap,
  FooterText,
  FooterTitle,
  FooterWrap,
  LineImage,
} from './index.styles';
import Line from '@/public/images/home/Line.svg';
import Logo from '@/public/images/Logo.svg';
import Button from '@/components/Button';
import Image from 'next/image';
import TopBlur from '@/public/images/home/Ellipse125.svg';
import BottomBlur from '@/public/images/home/Ellipse124.svg';

const Footer = () => {
  return (
    <FooterWrap>
      <BackgroundTopBlur src={TopBlur} alt="Blur" />
      <BackgroundBottomBlur src={BottomBlur} alt="Blur" />
      <FooterDescriptionWrap>
        <FooterDescriptionBlock>
          <FooterTitle>Think beyond the wave</FooterTitle>
          <FooterDescription>
            <LineImage src={Line} alt="Line" />
            <FooterText>
              Ask about Sans products, pricing, implementation, or anything else. Our highly trained
              reps are standing by, ready to help
            </FooterText>
          </FooterDescription>
        </FooterDescriptionBlock>
        <Button>Try for free</Button>
      </FooterDescriptionWrap>
      <FooterLinkstWrap>
        <FooterCompanyTextBlock>
          <Image src={Logo} alt="Logo" />
          <FooterCompanyText>
            We built an elegant solution. Our team created a fully integrated sales and marketing
            solution for SMBs
          </FooterCompanyText>
        </FooterCompanyTextBlock>
        <FooterListWrap>
          <FooterListBlock>
            <FooterListTitle>Company</FooterListTitle>
            <FooterList>
              <FooterListItem>About</FooterListItem>
              <FooterListItem>Pricing</FooterListItem>
              <FooterListItem>Jobs</FooterListItem>
              <FooterListItem>Blog</FooterListItem>
            </FooterList>
          </FooterListBlock>
          <FooterListBlock>
            <FooterListTitle>Product</FooterListTitle>
            <FooterList>
              <FooterListItem>Sales Software</FooterListItem>
              <FooterListItem>Marketplace</FooterListItem>
              <FooterListItem>Terms & Conditions</FooterListItem>
              <FooterListItem>Privacy Policy</FooterListItem>
            </FooterList>
          </FooterListBlock>
          <FooterListBlock>
            <FooterListTitle>Discover</FooterListTitle>
            <FooterList>
              <FooterListItem>CRM Comparision</FooterListItem>
              <FooterListItem>Partner Program</FooterListItem>
              <FooterListItem>What is CRM</FooterListItem>
              <FooterListItem>Resource</FooterListItem>
            </FooterList>
          </FooterListBlock>
          <FooterListBlock>
            <FooterListTitle>Help Center</FooterListTitle>
            <FooterList>
              <FooterListItem>Community</FooterListItem>
              <FooterListItem>Knowledge Base</FooterListItem>
              <FooterListItem>Academy</FooterListItem>
              <FooterListItem>Support</FooterListItem>
            </FooterList>
          </FooterListBlock>
        </FooterListWrap>
      </FooterLinkstWrap>
      <FooterCopyright>
        <FooterCopyrightText>© Copyright 2023 All Rights Reserved</FooterCopyrightText>
      </FooterCopyright>
    </FooterWrap>
  );
};

export default Footer;
