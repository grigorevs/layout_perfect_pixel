'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import UserPic1 from '@/public/images/home/UserPic1.png';
import UserPic2 from '@/public/images/home/UserPic2.png';
import Star from '@/public/images/home/Star.svg';
import Brackets from '@/public/images/home/Brackets.svg';
import ArrowNext from '@/public/images/home/ArrowNext.svg';
import ArrowBack from '@/public/images/home/ArrowPrevDisabled.svg';
import {
  TestimonialButtonsBlock,
  TestimonialNextButton,
  TestimonialPrevButton,
  TestimonialRateBlock,
  TestimonialReviewBlock,
  TestimonialReviewItem,
  TestimonialUser,
  TestimonialUserPic,
  TestimonialUserTextBlock,
  TestimonialWrap,
  TestimoniaRate,
  TestimoniaReviewTitle,
  TestimoniaUserName,
  TestimoniaUserPost,
} from './index.styles';
import StarRating from '@/components/StarsRating';

interface Data {
  image: string | StaticImageData;
  review: string;
  name: string;
  rate: string;
  post: string;
}

const customersData: Data[] = [
  {
    image: UserPic1,
    review:
      '“With Agency the results are very satisfying. wrapped with Hight quality and innovative design that makes a surge of visitors on my website”',
    rate: '5.0',
    name: 'Renee Wells',
    post: 'Product Designer, Quotient',
  },
  {
    image: UserPic2,
    review: '“Everything is bad. I hate Coca!”',
    rate: '1.0',
    name: 'Elena Ivanova',
    post: 'Clean master',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction: 'prev' | 'next') => {
    const nextIndex =
      direction === 'next'
        ? (currentIndex + 1) % customersData.length
        : (currentIndex - 1 + customersData.length) % customersData.length;
    setCurrentIndex(nextIndex);
  };

  const currentCustomer = customersData[currentIndex];

  return (
    <TestimonialWrap>
      <TestimonialReviewItem>
        <TestimonialRateBlock>
          <StarRating rate={currentCustomer.rate} />
          <TestimoniaRate>{currentCustomer.rate}</TestimoniaRate>
        </TestimonialRateBlock>
        <TestimoniaReviewTitle>{currentCustomer.review}</TestimoniaReviewTitle>
      </TestimonialReviewItem>
      <TestimonialReviewBlock>
        <TestimonialUser>
          <TestimonialUserPic src={currentCustomer.image} alt={currentCustomer.name} />
          <TestimonialUserTextBlock>
            <TestimoniaUserName>{currentCustomer.name}</TestimoniaUserName>
            <TestimoniaUserPost>{currentCustomer.post}</TestimoniaUserPost>
          </TestimonialUserTextBlock>
        </TestimonialUser>
        <TestimonialButtonsBlock>
          <TestimonialPrevButton onClick={() => handleClick('prev')}>
            <Image src={ArrowBack} alt="Previous" />
          </TestimonialPrevButton>
          <TestimonialNextButton onClick={() => handleClick('next')}>
            <Image src={ArrowNext} alt="Next" />
          </TestimonialNextButton>
        </TestimonialButtonsBlock>
      </TestimonialReviewBlock>
    </TestimonialWrap>
  );
};

export default Testimonials;
