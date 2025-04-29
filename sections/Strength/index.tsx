'use client';

import Image from 'next/image';
import VerticalLine from '@/public/images/home/Line65.svg';
import PeopleImage from '@/public/images/home/ImagePeople.svg';
import {
  StrengthWrap,
  StrengthInfo,
  StrengthInfoItem,
  StrengthInfoItemTitle,
  StrengthInfoItemText,
  StrengthDescription,
  StrengthDescriptionText,
  StrengthDescriptionTitle,
} from './index.styles';

const Strength = () => {
  return (
    <StrengthWrap>
      <StrengthInfo>
        <StrengthInfoItem>
          <StrengthInfoItemTitle>17k</StrengthInfoItemTitle>
          <StrengthInfoItemText>happy customers on worldwide</StrengthInfoItemText>
        </StrengthInfoItem>
        <Image src={VerticalLine} alt="Line" />
        <StrengthInfoItem>
          <StrengthInfoItemTitle>15+</StrengthInfoItemTitle>
          <StrengthInfoItemText>Hours of work experience</StrengthInfoItemText>
        </StrengthInfoItem>
        <Image src={VerticalLine} alt="Line" />
        <StrengthInfoItem>
          <StrengthInfoItemTitle>50+</StrengthInfoItemTitle>
          <StrengthInfoItemText>Creativity & passionate members</StrengthInfoItemText>
        </StrengthInfoItem>
        <Image src={VerticalLine} alt="Line" />
        <StrengthInfoItem>
          <StrengthInfoItemTitle>100+</StrengthInfoItemTitle>
          <StrengthInfoItemText>Integrations lorem ipsum integrations</StrengthInfoItemText>
        </StrengthInfoItem>
      </StrengthInfo>
      <Image src={PeopleImage} alt="PeopleImage" />
      <StrengthDescription>
        <StrengthDescriptionTitle>
          Lift your business to new heights with our digital marketing services
        </StrengthDescriptionTitle>
        <StrengthDescriptionText>
          To build software that gives customer facing teams in small and medium-sized businesses
          the ability to create rewarding and long-lasting relationships with customers
        </StrengthDescriptionText>
      </StrengthDescription>
    </StrengthWrap>
  );
};

export default Strength;
