import styled from 'styled-components';
import Image from 'next/image';

export const LineBlock = styled.div`
  background-color: #000000;
  height: 1px;

  @media (max-width: 1200px) {
    width: 24px;
    margin-top: 11px;
  }

  @media (min-width: 1200px) {
    width: 76px;
    margin-top: 23px;
  }
`;

export const ActivityWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media (max-width: 1200px) {
    align-items: center;
    margin-bottom: 36px;
  }

  @media (min-width: 1200px) {
    align-items: start;
    margin-bottom: 168px;
  }
`;

export const ActivitTextyWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (min-width: 1200px) {
    left: 200px;
  }
`;

export const ActivitySliderWrap = styled.div`
  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (min-width: 1200px) {
    position: relative;
    height: 769px;
  }
`;

export const ActivityTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-weight: 700;
  color: #1d1e25;
  width: 335px;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    margin-bottom: 48px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
    line-height: 120%;
    letter-spacing: -3px;
    width: 740px;
    margin: 87px 0 13px;
  }
`;

export const ActivityDescription = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 1200px) {
    gap: 27px;
    margin-top: 48px;
  }
`;

export const ActivityText = styled.p`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    width: 303px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    margin-bottom: 56px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 128px;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
    width: 674px;
  }
`;

export const ActivitySliderImage = styled(Image)`
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 247px;
    height: 205px;
  }

  @media (min-width: 1200px) {
    width: 515px;
    height: 428px;
  }
`;

export const ActivitySliderItem = styled.div`
  scroll-snap-align: start;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  transition: transform 0.7s ease;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  @media (max-width: 1200px) {
    width: 247px;
  }

  @media (min-width: 1200px) {
    width: 515px;
  }
`;

export const ActivitySliderTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-top: 8px;
  }

  @media (min-width: 1200px) {
    margin-top: 16px;
  }
`;

export const ActivitySliderDescriptionBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ActivitySliderTabs = styled.div`
  display: flex;
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  p:first-of-type {
    color: #1d1e25;
    text-decoration: underline;
  }

  @media (max-width: 1200px) {
    gap: 8px;
    margin-bottom: 40px;
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    gap: 16px;
    margin-bottom: 90px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ActivitySliderTab = styled.p`
  @media (max-width: 1200px) {
    padding: 8px 12px;
    white-space: nowrap;
  }

  @media (min-width: 1200px) {
    padding: 10px 14px;
  }
`;

export const ActivitySliderTitle = styled.h1`
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-family: 'Inter-SemiBold';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    width: 247px;
    margin-top: 8px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter-Bold';
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 405px;
    margin-top: 24px;
  }
`;

export const ActivitySliderText = styled.p`
  font-family: 'Inter';
  color: #7e8492;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0;
  }
`;

export const ActivitySliderDescription = styled.p`
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-family: 'Inter-Medium';
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    width: 247px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    margin-top: 16px;
    width: 493px;
  }
`;
