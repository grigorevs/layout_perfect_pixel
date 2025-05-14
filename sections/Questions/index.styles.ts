import styled from 'styled-components';

export const QuestionsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionsTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -1px;
    width: 295px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`;

export const QuestionsText = styled.p`
  color: #7e8492;
  text-align: center;

  @media (max-width: 1200px) {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    width: 295px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
    font-family: 'Inter-Medium';
    font-weight: 500;
  }
`;

export const QuestionsTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    margin: 56px 0 12px;
  }

  @media (min-width: 1200px) {
    margin: 82px 0 24px;
  }
`;

export const AccordionContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})`
  margin: 0 auto;
  padding-bottom: 48px;

  @media (max-width: 1200px) {
    width: 335px;
  }

  @media (min-width: 1200px) {
    width: 1114px;
  }
`;

export const AccordionItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})`
  border-bottom: 1px solid #e0e0e0;
`;

export const Question = styled.button.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  letter-spacing: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: #1d1e25;
  padding: 0;
  text-align: left;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 24px 0 12px;
    font-size: 16px;
    line-height: 24px;

    p {
      width: 267px;
    }

    img {
      width: 11px;
      height: 11px;
    }
  }

  @media (min-width: 1200px) {
    padding: 56px 0 32px;
    font-size: 24px;
    line-height: 150%;
  }
`;

export const Answer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  transition:
    max-height 0.5s ease,
    padding 0.5s ease;
  font-family: 'Inter-Medium';
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    width: 310px;
    padding: ${({ isOpen }) => (isOpen ? '4px 0 12px' : '0')};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    width: 641px;
    padding: ${({ isOpen }) => (isOpen ? '16px 0 32px' : '0')};
  }
`;
