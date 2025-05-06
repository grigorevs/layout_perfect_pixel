'use client';

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
  LineImage,
} from './index.styles';
import Line from '@/public/images/home/Line.svg';
import Logo from '@/public/images/Logo.svg';
import Button from '@/components/Button';
import TopBlur from '@/public/images/home/Ellipse125.svg';
import FacebookLogo from '@/public/images/home/Facebook.svg';
import TwitterLogo from '@/public/images/home/Twitter.svg';
import InstagramLogo from '@/public/images/home/Instagram.svg';
import LinkedinLogo from '@/public/images/home/Linkedin.svg';

const Footer = () => {
  return (
    <FooterWrap>
      <BackgroundTopBlur src={TopBlur} alt="Blur" />
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
        <FooterButtonWrap>
          <Button>Try for free</Button>
        </FooterButtonWrap>
      </FooterDescriptionWrap>
      <FooterLinkstWrap>
        <FooterCompanyTextBlock>
          <FooterLogoIcon src={Logo} alt="Logo" />
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
        <FooterMobileLinksWrap>
          <FooterSocialsImagesWrap>
            <Image src={FacebookLogo} alt="FacebookLogo" />
            <Image src={TwitterLogo} alt="TwitterLogo" />
            <Image src={InstagramLogo} alt="InstagramLogo" />
            <Image src={LinkedinLogo} alt="LinkedinLogo" />
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
