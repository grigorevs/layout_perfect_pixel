'use client';

import Image from 'next/image';
import Carousel, { CarouselMethods } from '@/components/Carousel';
import { useRef, useState } from 'react';
import ArrowNext from '@/public/images/home/ArrowNext.svg';
import ArrowBack from '@/public/images/home/ArrowPrevDisabled.svg';
import {
  TestimonialButtonsBlock,
  TestimonialPrevButton,
  TestimonialNextButton,
} from '../Testimonials/index.styles';
import {
  ArticleNavBlock,
  ArticlesWrap,
  ArticleText,
  ArticleTextBlock,
  ArticleTitle,
  CarouselButton,
  CarouselItem,
  CarouselItemText,
  CarouselItemTitle,
  CarouselTextBlock,
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
        <TestimonialButtonsBlock>
          <TestimonialPrevButton onClick={handlePrev}>
            <Image src={ArrowBack} alt="Previous" />
          </TestimonialPrevButton>
          <TestimonialNextButton onClick={handleNext}>
            <Image src={ArrowNext} alt="Next" />
          </TestimonialNextButton>
        </TestimonialButtonsBlock>
      </ArticleNavBlock>
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
    </ArticlesWrap>
  );
};

export default Articles;
