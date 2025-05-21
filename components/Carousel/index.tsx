import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import StyledSlider from './index.styles';
import { RefObject } from 'react';

export interface CarouselMethods {
  scrollPrev: () => void;
  scrollNext: () => void;
}

export interface CarouselProps {
  children: React.ReactNode;
  carouselRef?: RefObject<HTMLDivElement>;
  onInitialize?: (methods: CarouselMethods) => void;
}

const Carousel = forwardRef<CarouselMethods, CarouselProps>(function Carousel(
  { children, onInitialize },
  ref,
) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;

    const containerWidth = sliderRef.current.offsetWidth;
    const scrollAmount = direction === 'next' ? containerWidth : -containerWidth;

    sliderRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const methods: CarouselMethods = {
    scrollPrev: () => scrollTo('prev'),
    scrollNext: () => scrollTo('next'),
  };

  useImperativeHandle(ref, () => methods);

  useEffect(() => {
    if (onInitialize) {
      onInitialize(methods);
    }
  }, []);

  return (
    <StyledSlider ref={sliderRef} style={{ cursor: 'default', userSelect: 'none' }}>
      {children}
    </StyledSlider>
  );
});

export default Carousel;
