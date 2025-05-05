'use client';

import Image from 'next/image';
import FeaturePic from '@/public/images/home/Image.svg';
import Icon from '@/public/images/home/ApplyIcon.svg';
import {
  FeatureWrap,
  FeatureBlock,
  FeatureTitle,
  OverviewText,
  FeatureListBlock,
  FeatureListItem,
  FeatureListItemText,
  FeatureImage,
} from './index.styles';

const Features = () => {
  return (
    <FeatureWrap>
      <FeatureImage src={FeaturePic} alt="FeaturePic" />
      <FeatureBlock>
        <FeatureTitle>Passion to increase company revenue up to 85%</FeatureTitle>
        <OverviewText>
          Automate your sales, marketing and service in one platform. Avoid date leaks and enable
          consistent messaging
        </OverviewText>

        <FeatureListBlock>
          <FeatureListItem>
            <Image src={Icon} alt="Icon" />
            <FeatureListItemText>
              Close more deals with single - page contact managment
            </FeatureListItemText>
          </FeatureListItem>
          <FeatureListItem>
            <Image src={Icon} alt="Icon" />
            <FeatureListItemText>
              Enjoy one-click calling, call scripts and voicemail automation
            </FeatureListItemText>
          </FeatureListItem>
          <FeatureListItem>
            <Image src={Icon} alt="Icon" />
            <FeatureListItemText>
              Take stages and milestones of your deals to keep the sales process an track
            </FeatureListItemText>
          </FeatureListItem>
        </FeatureListBlock>
      </FeatureBlock>
    </FeatureWrap>
  );
};

export default Features;
