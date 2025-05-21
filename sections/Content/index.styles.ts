import { styled } from 'styled-components';

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: #1d1e25;

  @media (max-width: 1200px) {
    padding: 40px 0;
  }

  @media (min-width: 1200px) {
    padding: 120px 0;
  }
`;

export const ContentPicBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 335px;

    h3 {
      padding: 16px 0 8px;
    }
    img {
      width: 335px;
      height: auto;
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    width: 584px;
    gap: 24px;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 40px;
    & > *:nth-child(2) h3 {
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
    }
  }

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    width: 1200px;
    column-gap: 32px;
    row-gap: 159px;

    & > div:last-child {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    & > *:nth-child(2) h3 {
      width: 442px;
      text-decoration: underline;
      text-underline-offset: 8px;
      text-decoration-thickness: 3px;
    }

    & > *:nth-child(4) h3 {
      width: 440px;
    }
  }
`;

export const ContentTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 120%;
  }
`;

export const ContentText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    width: 515px;
  }
`;
