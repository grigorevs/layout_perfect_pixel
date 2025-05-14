import styled from 'styled-components';
import Image from 'next/image';

export const ServicesWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 56px 0;
    align-items: center;
    gap: 32px;
  }

  @media (min-width: 1200px) {
    padding: 160px 0 100px;
    justify-content: center;
    gap: 80px;
  }

  @media (min-width: 1440px) {
    width: 1200px;
  }
`;

export const ServicesTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1200px) {
    align-items: center;
  }

  @media (min-width: 1440px) {
    align-items: start;
  }
`;

export const ServicesTitle = styled.h1`
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
    letter-spacing: -2px;
    width: 610px;
  }
`;

export const ServicesText = styled.p`
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
    width: 462px;
  }
`;

export const ServicesContentBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 335px;
    align-items: center;
    gap: 24px;
  }

  @media (min-width: 1200px) {
    gap: 0;
    column-gap: 64px;
    row-gap: 56px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const ServicesContentBlockItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (min-width: 1200px) {
    gap: 60px;
  }
`;

export const ServicesContentTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const ServicesContentTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    width: 159px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
    width: 259px;
  }
`;

export const ServicesContentText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 400;
  color: #7e8492;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    width: 159px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
    width: 268px;
  }
`;

export const ServicesImage = styled(Image)`
  @media (max-width: 1200px) {
    width: 160px;
    height: 216px;
    object-fit: cover;
  }

  @media (min-width: 1200px) {
    width: 240px;
    height: 273px;
  }
`;
