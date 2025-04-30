import styled from 'styled-components';
import Image from 'next/image';

export const TestimonialWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 69px 0 160px;
  background-color: #ffffff;
  z-index: 100;
`;

export const TestimonialTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -2px;
  color: #101010;
  width: 530px;
`;

export const TestimonialText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0;
  color: #7e8492;
  width: 376px;
`;

export const TestimonialTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin-bottom: 112px;
`;

export const TestimonialReviewItem = styled.div`
  width: 898px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const TestimonialUser = styled.div`
  display: flex;
  gap: 24px;
`;

export const TestimonialUserPic = styled(Image)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const TestimonialUserTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TestimoniaUserName = styled.h3`
  font-family: 'Inter-Medium';
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1d1e25;
`;

export const TestimoniaUserPost = styled.h3`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #7e8492;
`;

export const TestimonialRateBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TestimoniaRate = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1d1e25;
`;

export const TestimoniaReviewTitle = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 40px;
  line-height: 130%;
  letter-spacing: -1px;
  color: #1d1e25;
  margin-top: 16px;
`;

export const TestimonialReviewBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 40px;
  padding-left: 157px;
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
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: #1d1e25;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
`;

export const TestimonialPrevButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  border: 1px solid #ced1d8;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TestimonialButtonsBlock = styled.div`
  display: flex;
  gap: 16px;
`;

export const TestimonialBracketsIcon = styled(Image)`
  position: absolute;
  top: -65px;
  left: -150px;
`;
