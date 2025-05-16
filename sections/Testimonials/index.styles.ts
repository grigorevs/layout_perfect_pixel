import styled from 'styled-components';
import Image from 'next/image';

export const TestimonialWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 100;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0 0 80px;
  }

  @media (min-width: 1200px) {
    padding: 69px 0 160px;
  }
`;

export const TestimonialTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #101010;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
    width: 247px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
    width: 530px;
  }
`;

export const TestimonialText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 229px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    width: 376px;
  }
`;

export const TestimonialTextBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: auto;
    width: 335px;
    gap: 16px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    margin-bottom: 112px;
  }
`;

export const TestimonialReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 1200px) {
    margin-top: 80px;
    width: 335px;
    padding-left: 32px;
  }

  @media (min-width: 1200px) {
    width: 898px;
  }
`;

export const TestimonialUser = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 12px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const TestimonialUserPic = styled(Image)`
  border-radius: 50%;

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1200px) {
    width: 56px;
    height: 56px;
  }
`;

export const TestimonialUserTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 0;
  }

  @media (min-width: 1200px) {
    gap: 4px;
  }
`;

export const TestimoniaUserName = styled.h3`
  font-family: 'Inter-Medium';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
  }
`;

export const TestimoniaUserPost = styled.h3`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 26px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const TestimonialRateBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TestimoniaRate = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }
`;

export const TestimoniaReviewTitle = styled.p`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -1px;
    margin-top: 0;
    width: 303px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 130%;
    letter-spacing: -1px;
    margin-top: 16px;
  }
`;

export const TestimonialReviewBlock = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin-top: 8px;
    width: 335px;
    padding-left: 32px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    padding-right: 157px;
    margin-top: 40px;
  }
`;

export const TestimonialInfoItemTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-weight: 600;
  font-size: 64px;
  line-height: 120%;
  letter-spacing: 0;
  color: #1d1e25;
`;

export const TestimonialInfoItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0;
  color: #7e8492;
`;

export const TestimonialNextButton = styled.button`
  border-radius: 100px;
  background-color: #1d1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  @media (max-width: 1200px) {
    width: 28px;
    height: 28px;

    img {
      width: 12.8px;
      height: 11.2px;
    }
  }

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const TestimonialPrevButton = styled.button`
  border-radius: 100px;
  border: 1px solid #ced1d8;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 28px;
    height: 28px;

    img {
      width: 12.8px;
      height: 11.2px;
    }
  }

  @media (min-width: 1200px) {
    width: 50px;
    height: 50px;
  }
`;

export const TestimonialButtonsBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 16px;
  }
`;

export const TestimonialBracketsIcon = styled(Image)`
  position: absolute;

  @media (max-width: 1200px) {
    width: 32px;
    height: 21px;
    top: -18px;
    left: 0;
  }

  @media (min-width: 1200px) {
    top: -65px;
    left: -150px;
    width: 115px;
    height: 77px;
  }
`;
