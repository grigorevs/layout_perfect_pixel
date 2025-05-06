import styled from 'styled-components';
import Image from 'next/image';

export const InsightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1200px) {
    gap: 32px;
    margin: 0 0 39px;
    align-items: center;
  }

  @media (min-width: 1200px) {
    gap: 80px;
    margin: 60px 0 91px;
    align-items: center;
  }
`;

export const InsightTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    align-items: start;
    gap: 16px;
  }

  @media (min-width: 1200px) {
    align-items: center;
    gap: 24px;
  }
`;

export const InsightTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`;

export const InsightText = styled.p`
  font-family: 'Inter-Medium';
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
  }
`;

export const InsightImage = styled(Image)`
  @media (max-width: 1200px) {
    width: 299px;
    height: 191px;
  }

  @media (min-width: 1200px) {
    width: 582px;
    height: 332px;
  }
`;

export const InsightSlider = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1200px) {
    justify-content: center;
    right: -140px;
    gap: 16px;
    width: 335px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    width: 1200px;
    gap: 0;
  }
`;

export const InsightSliderItem = styled.div`
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 299px;
  }

  @media (min-width: 1200px) {
    width: 582px;
  }
`;

export const InsightSliderButton = styled.button`
  position: absolute;

  border: none;
  background-color: #ffffff;
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
    top: 75px;
  }

  @media (min-width: 1200px) {
    width: 80px;
    height: 80px;
    top: 130px;
    left: 560px;
  }
`;

export const InsightSliderIcon = styled(Image)`
  @media (max-width: 1200px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
  }
`;

export const InsightSliderTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-top: 8px;
  }

  @media (min-width: 1200px) {
    margin-top: 16px;
  }
`;

export const InsightSliderDescriptionBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-top: 0;
  }

  @media (min-width: 1200px) {
    margin-top: 16px;
  }
`;

export const InsightSliderTitle = styled.h1`
  font-family: 'Inter-Medium';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    width: 299px;
  }

  @media (min-width: 1200px) {
    font-size: 31px;
    line-height: 150%;
    letter-spacing: -2%;
    width: 582px;
  }
`;

export const InsightSliderText = styled.p`
  font-family: 'Inter-Medium';
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0;
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 500;
  }
`;
