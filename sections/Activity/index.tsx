'use client';

import { StaticImageData } from 'next/image';
import Picture1 from '@/public/images/blog/Image1.png';
import Picture2 from '@/public/images/blog/Image2.png';
import Picture3 from '@/public/images/blog/Image3.png';

import React, { useState } from 'react';
import Slider from '@/components/WideSlider';
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

interface Data {
  image: string | StaticImageData;
  title: string;
  date: string;
  author: string;
  text: string;
}

const postData = [
  {
    image: Picture1,
    title: 'Practice making User Flow',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
    text: 'In this article, well cover how to create user flows',
  },
  {
    image: Picture2,
    title: 'Overview of the Design Principles',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
    text: 'What are Design Principles?… To understand design principles, we first discuss the principles.',
  },
  {
    image: Picture3,
    title: 'Using Grid in website design',
    date: 'Jul 05, 2025',
    author: 'Albert Sans',
    text: 'Andi: "Whats the grid like?" Toni: “Like below…”',
  },
  {
    image: Picture1,
    title: 'Practice making User Flow',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
    text: 'In this article, well cover how to create user flows',
  },
];

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
        <Slider>
          <ActivitySliderTabs>
            <ActivitySliderTab>View all</ActivitySliderTab>
            <ActivitySliderTab>Design</ActivitySliderTab>
            <ActivitySliderTab>Articles</ActivitySliderTab>
            <ActivitySliderTab>Product</ActivitySliderTab>
            <ActivitySliderTab>Software Development</ActivitySliderTab>
            <ActivitySliderTab>Customer Success</ActivitySliderTab>
          </ActivitySliderTabs>
        </Slider>
        <Slider>
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
