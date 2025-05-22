'use client';

import { QuoteBlock, QuoteText, QuoteTitle, QuoteWrap } from './index.styles';

const Quote = () => {
  return (
    <QuoteWrap>
      <QuoteBlock>
        <QuoteTitle>Powerful ideas & sales acceleration</QuoteTitle>
        <QuoteText>
          We are a software development firm specializing in digital products. We build beautiful,
          functional and cross-platform solutions that are accessible to all.
        </QuoteText>
      </QuoteBlock>
    </QuoteWrap>
  );
};

export default Quote;
