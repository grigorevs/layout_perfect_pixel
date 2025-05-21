'use client';

import { useState } from 'react';
import { StaticImageData } from 'next/image';
import Pic1 from '@/public/images/about/Team1.png';
import Pic2 from '@/public/images/about/Team2.png';
import Pic3 from '@/public/images/about/Team3.png';
import Pic4 from '@/public/images/about/Team4.png';
import TwitterLogo from '@/public/images/about/Twitter.svg';
import LinkedinLogo from '@/public/images/about/Linkedin.svg';
import InstagramLogo from '@/public/images/about/Instagram.svg';
import {
  SocialMediaBlock,
  SocialMediaImage,
  TeamImage,
  TeamMainTextBlock,
  TeamPersonBlock,
  TeamPersonText,
  TeamPersonTextBlock,
  TeamPersonTitle,
  TeamPersonWrap,
  TeamPositionLink,
  TeamSliderWrap,
  TeamText,
  TeamTextBlock,
  TeamTextBlockWrap,
  TeamTitle,
  TeamWrap,
} from './index.styles';
import Slider from '@/components/Slider';

interface Data {
  image: string | StaticImageData;
  name: string;
  post: string;
}

const teamData = [
  {
    image: Pic1,
    name: 'Arlyne Stefano',
    post: 'Founder & CEO',
  },
  {
    image: Pic2,
    name: 'Katy Cristy',
    post: 'Chief Technology Officer',
  },
  {
    image: Pic3,
    name: 'Roger Dzawin',
    post: 'Chief Technology Officer',
  },
  {
    image: Pic4,
    name: 'Helen Sans',
    post: 'Top Manager',
  },
];

const Team = () => {
  const [data] = useState<Data[]>(teamData);

  return (
    <TeamWrap>
      <TeamMainTextBlock>
        <TeamTitle widthValue={'703px'}>
          Meet our team of creators, designers, and world-class problem solvers
        </TeamTitle>
        <TeamText widthValue={'534px'}>
          To become the company that customers want, it takes a group of passionate people. Get to
          know the people who lead
        </TeamText>
      </TeamMainTextBlock>
      <TeamSliderWrap>
        <Slider>
          {data?.map((item, index) => (
            <TeamPersonWrap key={index}>
              <TeamImage src={item.image} alt="Pic" />
              <TeamPersonBlock>
                <TeamPersonTextBlock>
                  <TeamPersonTitle>{item.name}</TeamPersonTitle>
                  <TeamPersonText>{item.post}</TeamPersonText>
                </TeamPersonTextBlock>
                <SocialMediaBlock>
                  <SocialMediaImage src={TwitterLogo} alt="TwitterLogo" />
                  <SocialMediaImage src={LinkedinLogo} alt="LinkedinLogo" />
                  <SocialMediaImage src={InstagramLogo} alt="InstagramLogo" />
                </SocialMediaBlock>
              </TeamPersonBlock>
            </TeamPersonWrap>
          ))}
        </Slider>
      </TeamSliderWrap>
      <TeamTextBlock>
        <TeamTitle widthValue={'626px'}>Join our team, The one with the master touch</TeamTitle>
        <TeamTextBlockWrap>
          <TeamText widthValue={'506px'}>
            We believe it takes great people to make a great product. That’s why we hire not only
            the perfect professional fits, but people who embody our company values.
          </TeamText>
          <TeamPositionLink>See Open Position →</TeamPositionLink>
        </TeamTextBlockWrap>
      </TeamTextBlock>
    </TeamWrap>
  );
};

export default Team;
