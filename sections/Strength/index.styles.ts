import styled from 'styled-components';
import Image from 'next/image';

export const StrengthWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 0 56px;
    width: 100vw;
    gap: 32px;
  }

  @media (min-width: 1200px) {
    padding: 66px 0 160px;
    gap: 80px;
  }
`;

export const StrengthInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    width: 347px;
    gap: 13px;

    img {
      height: 65px;
      position: relative;
      left: 6px;
    }

    div:nth-child(1) p {
      position: relative;
      right: 0px;
      top: 8px;
    }

    div:nth-child(3) p {
      position: relative;
      right: -8px;
      top: 8px;
    }

    div:nth-child(3) h1 {
      position: relative;
      right: -8px;
      top: -1px;
    }

    div:nth-child(5) {
      position: relative;
      right: 0px;
      top: 10px;
    }

    div:nth-child(5) p {
      position: relative;
      right: 0px;
      top: 10px;
    }

    div:nth-child(7) p {
      position: relative;
      right: -5px;
      top: 18px;
    }

    div:nth-child(7) h1 {
      position: relative;
      right: -8px;
      top: 11px;
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    gap: 60px;

    div:nth-child(1) {
      position: relative;
      right: -2px;
      top: -2px;
      width: 240px;
    }

    div:nth-of-type(2) h1 {
      position: relative;
      right: -12px;
      bottom: 2px;
    }

    div:nth-of-type(2) p {
      position: relative;
      right: -12px;
      bottom: 2px;
    }

    div:nth-of-type(3) h1 {
      position: relative;
      right: -13px;
      bottom: 2px;
    }

    div:nth-of-type(3) p {
      position: relative;
      right: -12px;
      bottom: 2px;
    }

    div:nth-of-type(4) h1 {
      position: relative;
      right: -13px;
      bottom: 2px;
      width: 252px;
    }

    div:nth-of-type(4) p {
      position: relative;
      width: 170px;
      right: -12px;
      bottom: 2px;
    }
  }
`;

export const VerticalLineIcon = styled(Image)`
  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: block;
  }
`;

export const StrengthPic = styled(Image)`
  @media (max-width: 1200px) {
    width: 335px;
    height: 181px;
    padding-top: 18px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    height: 536px;
  }
`;

export const StrengthInfoItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 160px;
    position: relative;
    left: 5px;
  }

  @media (min-width: 1200px) {
    gap: 8px;
  }
`;

export const StrengthInfoItemTitle = styled.h1`
  font-family: 'Inter';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 33px;
    line-height: 42px;
    letter-spacing: -1px;
  }

  @media (min-width: 1200px) {
    font-size: 64px;
    line-height: 120%;
    letter-spacing: 0;
  }
`;

export const StrengthInfoItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    width: 160px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const StrengthDescription = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 7px;
  }

  @media (min-width: 1200px) {
    gap: 166px;
    width: 1200px;
    flex-direction: row;
  }
`;

export const StrengthDescriptionTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
    width: 335px;
    display: none;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
    width: 654px;
    display: block;
  }
`;

export const StrengthDescriptionTitleMobile = styled(StrengthDescriptionTitle)`
  @media (max-width: 1200px) {
    display: block;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const StrengthDescriptionText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 335px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
    width: 421px;
  }
`;
