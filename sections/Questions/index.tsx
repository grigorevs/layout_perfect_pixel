'use client';

import React, { useState } from 'react';
import IconMinus from '@/public/images/pricing/IconMinus.svg';
import IconPlus from '@/public/images/pricing/IconPlus.svg';
import { faqItems } from './mockData';
import {
  AccordionContainer,
  AccordionItem,
  Question,
  Answer,
  QuestionsText,
  QuestionsTextBlock,
  QuestionsTitle,
} from './index.styles';
import Image from 'next/image';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <QuestionsTextBlock>
        <QuestionsTitle>Frequently asked questions</QuestionsTitle>
        <QuestionsText>Everything you need to know about the product and billing.</QuestionsText>
      </QuestionsTextBlock>
      <AccordionContainer>
        {faqItems.map((item, index) => (
          <AccordionItem key={index}>
            <Question isOpen={activeIndex === index} onClick={() => toggleItem(index)}>
              {item.question}
              <Image src={activeIndex === index ? IconMinus : IconPlus} alt={''} />
            </Question>
            <Answer isOpen={activeIndex === index}>{item.answer}</Answer>
          </AccordionItem>
        ))}
      </AccordionContainer>
    </>
  );
};

export default Accordion;
