import Button from '@/components/Button';
import styled from 'styled-components';

export const ArticlesWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  @media (max-width: 1200px) {
    align-items: center;
    padding: 56px 0 80px;
    gap: 32px;
  }

  @media (min-width: 1200px) {
    padding: 160px 0 178px;
    gap: 80px;
  }
`;

export const ArticleTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const CarouselWrap = styled.div`
  @media (max-width: 1200px) {
    > div > div:nth-child(2) > div > h4 {
      width: 200px;
    }

    > div > div:nth-child(2) > div > p {
      width: 240px;
    }
  }

  @media (min-width: 1200px) {
    :nth-child(3) h4 {
      width: 500px;
    }
  }
`;

export const ArticleNavBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 24px;
    flex-direction: column;
    position: relative;
    right: 10px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    align-self: center;
  }
`;

export const ArticleTitle = styled.h3`
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

export const ArticleText = styled.p`
  color: #7e8492;

  @media (max-width: 1200px) {
    font-weight: 400;
    font-family: 'Inter';
    font-size: 16px;
    line-height: 24px;
    width: 311px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    width: 435px;
  }
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    width: 263px;
    gap: 16px;

    img {
      width: 263px;
      height: auto;
      object-fit: cover;
    }
  }

  @media (min-width: 1200px) {
    gap: 24px;

    & > *:nth-child(3) div {
      width: 476px;
    }

    img {
      max-height: 695px;
    }
  }
`;

export const CarouselTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 16px;
  }
`;

export const CarouselItemTitle = styled.h4`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    width: 263px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
    width: 407px;
  }
`;

export const CarouselItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 263px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    width: 407px;
  }
`;

export const CarouselButton = styled(Button)`
  border: 1px solid #ced1d8 !important;
  background-color: #ffffff;
  color: #1d1e25;

  @media (max-width: 1200px) {
    width: 124px;
    height: 44px;
    font-size: 14px;
  }
`;

export const ArticlesNextButton = styled.button`
  border-radius: 100px;
  background-color: #1d1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const ArticlesPrevButton = styled.button`
  border-radius: 100px;
  border: 1px solid #ced1d8;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const ArticlesButtonsBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 16px;
    position: relative;
    top: 3px;
  }
`;
