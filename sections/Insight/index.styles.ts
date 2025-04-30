import styled from 'styled-components';

export const InsightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
  margin: 60px 0 91px;
`;

export const InsightTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const InsightTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -2px;
  color: #1d1e25;
`;

export const InsightText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0;
  color: #7e8492;
`;

export const InsightSlider = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1200px;
`;

export const InsightSliderItem = styled.div`
  flex-direction: column;
  width: 582px;
`;

export const InsightSliderButton = styled.button`
  position: absolute;
  width: 80px;
  height: 80px;
  border: none;
  background-color: #ffffff;
  border-radius: 50%;
  top: 130px;
  left: 560px;
`;

export const InsightSliderTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InsightSliderDescriptionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const InsightSliderTitle = styled.h1`
  font-family: 'Inter-Medium';
  font-size: 31px;
  line-height: 150%;
  letter-spacing: -2%;
  color: #1d1e25;
`;

export const InsightSliderText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0;
  color: #7e8492;
`;
