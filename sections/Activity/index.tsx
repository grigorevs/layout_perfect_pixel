'use client';

import { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Slider from '@/components/Slider';
import {
  ActivitySliderDescription,
  ActivitySliderItem,
  ActivitySliderTitle,
  ActivitySliderDescriptionBlock,
  ActivitySliderText,
  ActivitySliderTextBlock,
  ActivityDescription,
  ActivityText,
  ActivityTitle,
  ActivitySliderImage,
  LineBlock,
  ActivityWrap,
  ActivitySliderWrap,
  ActivitTextyWrap,
  ActivitySliderTabs,
  ActivitySliderTab,
} from './index.styles';
import { postData } from './data';

interface Data {
  image: string | StaticImageData;
  title: string;
  date: string;
  author: string;
  text: string;
}

const Activity = () => {
  const [data] = useState<Data[]>(postData);

  return (
    <ActivityWrap>
      <ActivitTextyWrap>
        <ActivityTitle>Activity & Updates</ActivityTitle>
        <ActivityDescription>
          <LineBlock />
          <ActivityText>
            Our biggest challenge is making sure we&apos;re always designing and building products
            that will help you run your business better.
          </ActivityText>
        </ActivityDescription>
      </ActivitTextyWrap>
      <ActivitySliderWrap>
        <Slider type="wide">
          <ActivitySliderTabs>
            <ActivitySliderTab>View all</ActivitySliderTab>
            <ActivitySliderTab>Design</ActivitySliderTab>
            <ActivitySliderTab>Articles</ActivitySliderTab>
            <ActivitySliderTab>Product</ActivitySliderTab>
            <ActivitySliderTab>Software Development</ActivitySliderTab>
            <ActivitySliderTab>Customer Success</ActivitySliderTab>
          </ActivitySliderTabs>
        </Slider>
        <Slider type="wide">
          {data?.map((item, index) => (
            <ActivitySliderItem key={index}>
              <>
                <ActivitySliderImage src={item.image} alt="Pic" />
                <ActivitySliderTextBlock>
                  <ActivitySliderDescriptionBlock>
                    <ActivitySliderText>{`Published in Insight ${item.date}`}</ActivitySliderText>
                    <ActivitySliderText>{`by : ${item.author}`}</ActivitySliderText>
                  </ActivitySliderDescriptionBlock>
                  <ActivitySliderTitle>{item.title}</ActivitySliderTitle>
                  <ActivitySliderDescription>{item.text}</ActivitySliderDescription>
                </ActivitySliderTextBlock>
              </>
            </ActivitySliderItem>
          ))}
        </Slider>
      </ActivitySliderWrap>
    </ActivityWrap>
  );
};

export default Activity;
