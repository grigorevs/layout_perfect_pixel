'use client';

import Image from 'next/image';
import Carousel, { CarouselMethods } from '@/components/Carousel';
import { useRef, useState } from 'react';
import ArrowNext from '@/public/images/home/ArrowNext.svg';
import ArrowBack from '@/public/images/home/ArrowPrevDisabled.svg';
import {
  ArticleNavBlock,
  ArticlesButtonsBlock,
  ArticlesNextButton,
  ArticlesPrevButton,
  ArticlesWrap,
  ArticleText,
  ArticleTextBlock,
  ArticleTitle,
  CarouselButton,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselTextBlock,
  CarouselWrap,
} from './index.styles';
import { articleData } from './data';

const Articles = () => {
  const [data] = useState(articleData);

  const carouselRef = useRef<CarouselMethods>(null);

  const handlePrev = () => {
    carouselRef.current?.scrollPrev();
  };

  const handleNext = () => {
    carouselRef.current?.scrollNext();
  };

  return (
    <ArticlesWrap>
      <ArticleNavBlock>
        <ArticleTextBlock>
          <ArticleTitle>Articles</ArticleTitle>
          <ArticleText>
            Complex tech decoded by engineers, business trends analyzed by experts.
          </ArticleText>
        </ArticleTextBlock>
        <ArticlesButtonsBlock>
          <ArticlesPrevButton onClick={handlePrev}>
            <Image src={ArrowBack} alt="Previous" />
          </ArticlesPrevButton>
          <ArticlesNextButton onClick={handleNext}>
            <Image src={ArrowNext} alt="Next" />
          </ArticlesNextButton>
        </ArticlesButtonsBlock>
      </ArticleNavBlock>
      <CarouselWrap>
        <Carousel ref={carouselRef}>
          {data.map((item, index) => (
            <CarouselItem key={index}>
              <Image src={item.image} alt={'Img'} />
              <CarouselTextBlock>
                <CarouselItemTitle>{item.title}</CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselTextBlock>
              <CarouselButton theme="dark">Read More</CarouselButton>
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselWrap>
    </ArticlesWrap>
  );
};

export default Articles;
