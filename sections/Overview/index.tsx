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
          <OverviewDetailsItem>
            <Icon src={IconOne} alt="Icon" />
            <OverviewDetailsItemTitle>Build your date fundamental</OverviewDetailsItemTitle>
            <OverviewDetailsItemText>
              Build access to date, develop valuable business insights and drive revenue while
              maintaining full control over <br /> access and use of date at all times.
            </OverviewDetailsItemText>
          </OverviewDetailsItem>
          <OverviewDetailsItem>
            <Icon src={IconTwo} alt="Icon" />
            <OverviewDetailsItemTitle>Measure more effective</OverviewDetailsItemTitle>
            <OverviewDetailsItemText>
              Effectively measure people-based campaigns with <br /> the freedom to choose from
              best-of breed partners <br /> to optimize and drive media innovation.
            </OverviewDetailsItemText>
          </OverviewDetailsItem>
          <OverviewDetailsItem>
            <Icon src={IconThree} alt="Icon" />
            <OverviewDetailsItemTitle>Activate your date</OverviewDetailsItemTitle>
            <OverviewDetailsItemText>
              Accurately address your specific audiences at scale across any channel, platform,
              publisher or network and safely translate date between identity space to improve
              results.
            </OverviewDetailsItemText>
          </OverviewDetailsItem>
          <OverviewDetailsItem>
            <Icon src={IconFour} alt="Icon" />
            <OverviewDetailsItemTitle>Strengthen consumer privacy</OverviewDetailsItemTitle>
            <OverviewDetailsItemText>
              Protect your customer date with leading privacy-preserving technologies and advanced
              techniques to minimize date movement while still enabling insight generation.
            </OverviewDetailsItemText>
          </OverviewDetailsItem>
        </OverviewDetailsWrap>
      </OverviewBlock>
    </OverviewWrap>
  );
};

export default Overview;
