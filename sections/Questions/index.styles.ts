import styled from 'styled-components';

export const QuestionsTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 300px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`;

export const QuestionsText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 300px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
  }
`;

export const QuestionsTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
  }

  @media (min-width: 1200px) {
    margin: 82px 0 24px;
  }
`;

export const AccordionContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})`
  width: 1114px;
  margin: 0 auto;
  padding-bottom: 48px;
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
  font-size: 24px;
  line-height: 150%;
  letter-spacing: 0%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  color: #1d1e25;
  padding: 0;
  text-align: left;
  padding: 56px 0 32px;
`;

export const Answer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['isOpen'].includes(prop),
})<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  overflow: hidden;
  transition:
    max-height 0.5s ease,
    padding 0.5s ease;
  padding: ${({ isOpen }) => (isOpen ? '16px 0 32px' : '0')};
  color: #7e8492;
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0px;
  width: 641px;
`;
