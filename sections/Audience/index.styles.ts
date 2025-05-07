import styled from 'styled-components';
import Image from 'next/image';

export const AudienceWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1200px) {
    align-items: center;
    padding-top: 10px;
  }

  @media (min-width: 1200px) {
    align-items: start;
    padding: 105px 20px 160px;
  }

  @media (min-width: 1440px) {
    width: 1200px;
    padding: 105px 0 160px;
  }
`;

export const AudienceBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 1200px) {
    gap: 48px;
    padding-bottom: 61px;
  }

  @media (min-width: 1200px) {
    gap: 118px;
  }
`;

export const AudienceTextBlock = styled.div`
  display: flex;
  justify-content: start;

  @media (max-width: 1200px) {
    width: 335px;
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const AudienceTitle = styled.h1`
  font-family: 'Inter-Bold';
  color: #1d1e25;
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 335px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
    line-height: 120%;
    letter-spacing: -3px;
    width: 959px;
  }
`;

export const AudienceText = styled.p`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    width: 303px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
    width: 738px;
  }
`;

export const LineBlock = styled.div`
  background-color: #000000;
  height: 1px;

  @media (max-width: 1200px) {
    width: 24px;
    margin-top: 12px;
  }

  @media (min-width: 1200px) {
    width: 76px;
    margin-top: 10px;
  }
`;

export const AudienceLogo = styled(Image)`
  position: absolute;

  @media (max-width: 1200px) {
    width: 54px;
    height: 54px;
    right: 0px;
    bottom: 20px;
  }

  @media (min-width: 1200px) {
    width: 127px;
    height: 127px;
    right: -190px;
    bottom: 27px;
  }
`;

export const AudiencePicBlock = styled.div`
  display: flex;

  @media (max-width: 1440px) {
    align-self: center;
    margin-top: 8px;
  }

  @media (min-width: 1440px) {
    display: flex;
    gap: 32px;
    margin-top: 135px;
    align-items: start;
  }
`;

export const AudiencePic = styled(Image)`
  @media (max-width: 1440px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const AudiencePicTitle = styled.h3`
  font-family: 'Inter-Bold';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    padding: 16px 0 8px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 150%;
    letter-spacing: -1px;
    padding: 24px 0 8px;
  }
`;

export const AudiencePicText = styled.p`
  font-family: 'Inter-Medium';
  color: #7e8492;
  font-weight: 500;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 335px;
    padding-bottom: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    width: 494px;
    padding-bottom: 32px;
  }
`;

export const AudienceDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const AudienceDetailsPic = styled(Image)`
  @media (max-width: 1200px) {
    width: 335px;
    height: 245px;
  }

  @media (min-width: 1200px) {
    width: 502px;
    height: 370px;
  }
`;

export const BackgroundTopBlur = styled(Image)`
  position: absolute;
  z-index: -100;

  @media (max-width: 1200px) {
    bottom: -350px;
    left: -500px;
  }

  @media (min-width: 1200px) {
    bottom: -300px;
    left: -400px;
  }
`;
