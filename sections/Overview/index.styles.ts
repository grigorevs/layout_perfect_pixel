import styled from 'styled-components';
import Image from 'next/image';

export const OverviewWrap = styled.div`
  background-color: #1d1e25;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const OverviewBlock = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    align-items: center;
  }

  @media (min-width: 1200px) {
    align-items: baseline;
  }
`;

export const OverviewTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #ffffff;

  @media (max-width: 1200px) {
    width: 335px;
    margin: 40px 0 16px;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    width: 816px;
    margin: 100px 0 24px;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2.3px;
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
    width: 336px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0;
    width: 660px;
  }
`;

export const OverviewDetailsWrap = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin: 32px 0;
  }

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    row-gap: 56px;
    column-gap: 259px;
    margin: 80px 0 100px;
  }
`;

export const OverviewDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1200px) {
    width: 335px;
  }

  @media (min-width: 1200px) {
    width: 453px;
  }
`;

export const OverviewDetailsItemTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    width: 335px;
    overflow-wrap: normal;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
    width: 275px;
  }
`;

export const OverviewDetailsItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 336px;
    overflow-wrap: break-word;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
    width: 460px;
  }
`;

export const Icon = styled(Image)`
  @media (max-width: 1200px) {
    height: 24px;
    width: 24px;
  }

  @media (min-width: 1200px) {
    height: 30px;
    width: 30px;
  }
`;
