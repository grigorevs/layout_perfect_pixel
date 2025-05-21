'use client';

import { StaticImageData } from 'next/image';
import Picture1 from '@/public/images/home/Rectangle1.png';
import Picture2 from '@/public/images/home/Rectangle2.png';
import Picture3 from '@/public/images/home/ImagePeople.png';
import {
  InsightImage,
  InsightSliderDescriptionBlock,
  InsightSliderItem,
  InsightSliderText,
  InsightSliderTextBlock,
  InsightSliderTitle,
  InsightText,
  InsightTextBlock,
  InsightTitle,
  InsightWrap,
} from './index.styles';
import React, { useState } from 'react';
import Slider from '@/components/Slider';

interface Data {
  image: string | StaticImageData;
  title: string;
  date: string;
  author: string;
}

const postData = [
  {
    image: Picture1,
    title: 'What makes an authentic employee profile, and why does it matter ?',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
  },
  {
    image: Picture2,
    title: 'How to build a Kaylen relationship with a good company',
    date: 'Jan 30, 2021',
    author: 'Albert Sans',
  },
  {
    image: Picture3,
    title: 'Our good team can resolve any problem and we can help you too!',
    date: 'Jul 05, 2025',
    author: 'Albert Sans',
  },
];

const Insight = () => {
  const [data] = useState<Data[]>(postData);

  return (
    <InsightWrap>
      <InsightTextBlock>
        <InsightTitle>Trending news from Coca</InsightTitle>
        <InsightText>we have some new Service to pamper you</InsightText>
      </InsightTextBlock>
      <Slider>
        {data?.map((item, index) => (
          <InsightSliderItem key={index}>
            <>
              <InsightImage src={item.image} alt="Pic" />
              <InsightSliderTextBlock>
                <InsightSliderDescriptionBlock>
                  <InsightSliderText>{`Published in Insight ${item.date}`}</InsightSliderText>
                  <InsightSliderText>{`by : ${item.author}`}</InsightSliderText>
                </InsightSliderDescriptionBlock>
                <InsightSliderTitle>{item.title}</InsightSliderTitle>
              </InsightSliderTextBlock>
            </>
          </InsightSliderItem>
        ))}
      </Slider>
    </InsightWrap>
  );
};

export default Insight;
