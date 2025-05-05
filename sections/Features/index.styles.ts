import styled from 'styled-components';
import Image from 'next/image';

export const FeatureWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 56px 0;
    gap: 32px;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    margin: 165px 0 94px;
    gap: 58px;
  }
`;

export const FeatureImage = styled(Image)`
  @media (max-width: 1200px) {
    width: 335px;
    height: 375px;
  }

  @media (min-width: 1200px) {
    width: 585px;
    height: 651px;
  }
`;

export const FeatureBlock = styled.div`
  @media (max-width: 1200px) {
    width: 335px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1200px) {
    width: 557px;
  }
`;

export const FeatureTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
    width: 335px;
    margin-bottom: 16px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -1.28px;
    width: 557px;
    margin-bottom: 24px;
  }
`;

export const OverviewText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 335px;
    margin-bottom: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
    width: 360px;
    margin-bottom: 40px;
  }
`;

export const FeatureListBlock = styled.div`
  width: 393px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 16px;
    align-items: center;
  }

  @media (min-width: 1200px) {
    gap: 32px;
  }
`;

export const FeatureListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FeatureListItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 296px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0;
    width: 353px;
  }
`;
