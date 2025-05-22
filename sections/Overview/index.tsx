'use client';

import {
  Icon,
  OverviewBlock,
  OverviewDetailsItem,
  OverviewDetailsItemText,
  OverviewDetailsItemTitle,
  OverviewDetailsWrap,
  OverviewText,
  OverviewTitle,
  OverviewWrap,
} from './index.styles';
import IconOne from '@/public/images/home/Icon1.svg';
import IconTwo from '@/public/images/home/Icon2.svg';
import IconThree from '@/public/images/home/Icon3.svg';
import IconFour from '@/public/images/home/Icon4.svg';

const data = [
  {
    title: 'Build your date fundamental',
    text: 'Build access to date, develop valuable business insights and drive revenue while maintaining full control over access and use of date at all times.',
    image: IconOne,
  },
  {
    title: 'Measure more effective',
    text: 'Effectively measure people-based campaigns with the freedom to choose from best-of breed partners to optimize and drive media innovation.',
    image: IconTwo,
  },
  {
    title: 'Activate your date',
    text: 'Accurately address your specific audiences at scale across any channel, platform, publisher or network and safely translate date between identity space to improve results.',
    image: IconThree,
  },
  {
    title: 'Strengthen consumer privacy',
    text: 'Protect your customer date with leading privacy-preserving technologies and advanced techniques to minimize date movement while still enabling insight generation.',
    image: IconFour,
  },
];

const Overview = () => {
  return (
    <OverviewWrap>
      <OverviewBlock>
        <OverviewTitle>
          Coca help our client solve complex customer problems with date that does more.
        </OverviewTitle>
        <OverviewText>
          Our platform offers the modern enterprise full control of how date can be access and used
          with industry leading software solutions for identity, activation, and date collaboration
        </OverviewText>
        <OverviewDetailsWrap>
          {data.map((item, index) => (
            <OverviewDetailsItem key={index}>
              <Icon src={item.image} alt="Icon" />
              <OverviewDetailsItemTitle>{item.title}</OverviewDetailsItemTitle>
              <OverviewDetailsItemText>{item.text}</OverviewDetailsItemText>
            </OverviewDetailsItem>
          ))}
        </OverviewDetailsWrap>
      </OverviewBlock>
    </OverviewWrap>
  );
};

export default Overview;
