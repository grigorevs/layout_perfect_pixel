'use client';

import React from 'react';
import Image from 'next/image';
import {
  BackgroundTopBlur,
  FooterButtonWrap,
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
  FooterLogoIcon,
  FooterMobileLink,
  FooterMobileLinksList,
  FooterMobileLinksWrap,
  FooterSocialsImagesWrap,
  FooterText,
  FooterTitle,
  FooterWrap,
} from './index.styles';
import Logo from '@/public/images/Logo.svg';
import LogoDarkTheme from '@/public/images/about/LogoDarkTheme.svg';
import Button from '@/components/Button';
import TopBlur from '@/public/images/home/Ellipse125.svg';
import FacebookLogo from '@/public/images/home/Facebook.svg';
import TwitterLogo from '@/public/images/home/Twitter.svg';
import InstagramLogo from '@/public/images/home/Instagram.svg';
import LinkedinLogo from '@/public/images/home/Linkedin.svg';
import FacebookLogoDark from '@/public/images/home/FacebookDark.svg';
import TwitterLogoDark from '@/public/images/home/TwitterDark.svg';
import InstagramLogoDark from '@/public/images/home/InstagramDark.svg';
import LinkedinLogoDark from '@/public/images/home/LinkedinDark.svg';
import { LineBlock } from './index.styles';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <FooterWrap backgroundColor={theme}>
      {theme === 'light' && <BackgroundTopBlur src={TopBlur} alt="Blur" />}

      <FooterDescriptionWrap>
        <FooterDescriptionBlock>
          <FooterTitle color={theme}>Think beyond the wave</FooterTitle>
          <FooterDescription>
            <LineBlock color={theme} />
            <FooterText textColor={theme}>
              Ask about Sans products, pricing, implementation, or anything else. Our highly trained
              reps are standing by, ready to help
            </FooterText>
          </FooterDescription>
        </FooterDescriptionBlock>
        <FooterButtonWrap>
          <Button theme={theme}>Try for free</Button>
        </FooterButtonWrap>
      </FooterDescriptionWrap>
      <FooterLinkstWrap>
        <FooterCompanyTextBlock>
          <FooterLogoIcon src={theme === 'light' ? Logo : LogoDarkTheme} alt="Logo" />
          <FooterCompanyText textColor={theme}>
            We built an elegant solution. Our team created a fully integrated sales and marketing
            solution for SMBs
          </FooterCompanyText>
        </FooterCompanyTextBlock>
        <FooterListWrap>
          <FooterListBlock textColor={theme}>
            <FooterListTitle>Company</FooterListTitle>
            <FooterList textColor={theme}>
              <FooterListItem>About</FooterListItem>
              <FooterListItem>Pricing</FooterListItem>
              <FooterListItem>Jobs</FooterListItem>
              <FooterListItem>Blog</FooterListItem>
            </FooterList>
          </FooterListBlock>
          <FooterListBlock textColor={theme}>
            <FooterListTitle>Product</FooterListTitle>
            <FooterList textColor={theme}>
              <FooterListItem>Sales Software</FooterListItem>
              <FooterListItem>Marketplace</FooterListItem>
              <FooterListItem>Terms & Conditions</FooterListItem>
              <FooterListItem>Privacy Policy</FooterListItem>
            </FooterList>
          </FooterListBlock>
          <FooterListBlock textColor={theme}>
            <FooterListTitle>Discover</FooterListTitle>
            <FooterList textColor={theme}>
              <FooterListItem>CRM Comparision</FooterListItem>
              <FooterListItem>Partner Program</FooterListItem>
              <FooterListItem>What is CRM</FooterListItem>
              <FooterListItem>Resource</FooterListItem>
            </FooterList>
          </FooterListBlock>
          <FooterListBlock textColor={theme}>
            <FooterListTitle>Help Center</FooterListTitle>
            <FooterList textColor={theme}>
              <FooterListItem>Community</FooterListItem>
              <FooterListItem>Knowledge Base</FooterListItem>
              <FooterListItem>Academy</FooterListItem>
              <FooterListItem>Support</FooterListItem>
            </FooterList>
          </FooterListBlock>
        </FooterListWrap>
      </FooterLinkstWrap>
      <FooterCopyright>
        <FooterMobileLinksWrap>
          <FooterSocialsImagesWrap>
            <Image src={theme === 'light' ? FacebookLogo : FacebookLogoDark} alt="FacebookLogo" />
            <Image src={theme === 'light' ? TwitterLogo : TwitterLogoDark} alt="TwitterLogo" />
            <Image
              src={theme === 'light' ? InstagramLogo : InstagramLogoDark}
              alt="InstagramLogo"
            />
            <Image src={theme === 'light' ? LinkedinLogo : LinkedinLogoDark} alt="LinkedinLogo" />
          </FooterSocialsImagesWrap>
          <FooterMobileLinksList>
            <FooterMobileLink>Privacy Policy</FooterMobileLink>
            <FooterMobileLink>Terms & Conditions</FooterMobileLink>
            <FooterMobileLink>Support</FooterMobileLink>
          </FooterMobileLinksList>
        </FooterMobileLinksWrap>
        <FooterCopyrightText>© Copyright 2023 All Rights Reserved</FooterCopyrightText>
      </FooterCopyright>
    </FooterWrap>
  );
};

export default Footer;
