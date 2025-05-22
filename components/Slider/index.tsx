import React, { useRef, useState } from 'react';
import { StyledWideSlider, StyledSlider } from './index.styles';

interface SliderProps {
  children: React.ReactNode;
  type: 'regular' | 'wide';
}

const Slider: React.FC<SliderProps> = ({ children, type }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const commonProps = {
    ref: sliderRef,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
  };

  return type === 'wide' ? (
    <StyledWideSlider {...commonProps}>{children}</StyledWideSlider>
  ) : (
    <StyledSlider {...commonProps}>{children}</StyledSlider>
  );
};

export default Slider;
