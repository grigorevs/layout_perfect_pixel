'use client';

import { StaticImageData } from 'next/image';
import Picture1 from '@/public/images/home/Rectangle1.png';
import Picture2 from '@/public/images/home/Rectangle2.png';
import ButtonIcon from '@/public/images/home/ButtonIcon.svg';
import {
  InsightImage,
  InsightSlider,
  InsightSliderButton,
  InsightSliderDescriptionBlock,
  InsightSliderIcon,
  InsightSliderItem,
  InsightSliderText,
  InsightSliderTextBlock,
  InsightSliderTitle,
  InsightText,
  InsightTextBlock,
  InsightTitle,
  InsightWrap,
} from './index.styles';
import { useState } from 'react';

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
];

const Insight = () => {
  const [data, setData] = useState<Data[]>(postData);

  const handleClick = () => {
    if (!data || data.length === 0) return;

    const newData = [...data];
    const firstItem = newData.shift();
    if (firstItem) {
      newData.push(firstItem);
      setData(newData);
    }
  };

  return (
    <InsightWrap>
      <InsightTextBlock>
        <InsightTitle>Trending news from Coca</InsightTitle>
        <InsightText>we have some new Service to pamper you</InsightText>
      </InsightTextBlock>
      <InsightSlider>
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
        <InsightSliderButton onClick={handleClick}>
          {' '}
          <InsightSliderIcon src={ButtonIcon} alt="ButtonIcon" />
        </InsightSliderButton>
      </InsightSlider>
    </InsightWrap>
  );
};

export default Insight;
