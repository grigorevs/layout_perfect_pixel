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
  }

  @media (min-width: 1200px) {
    width: 1200px;
    gap: 60px;
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
    height: 162px;
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
    gap: 0;
  }

  @media (min-width: 1200px) {
    gap: 8px;
  }
`;

export const StrengthInfoItemTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 32px;
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
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2.35px;
    width: 650px;
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
