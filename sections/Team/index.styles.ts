import styled from 'styled-components';
import Image from 'next/image';

export const TeamWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    align-items: center;
    padding-bottom: 80px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    padding-bottom: 160px;
  }
`;

export const TeamTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== 'widthValue',
})<{ widthValue: string }>`
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
    width: ${(props) => props.widthValue};
  }
`;

export const TeamText = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== 'widthValue',
})<{ widthValue: string }>`
  font-family: 'Inter-Medium';
  color: #7e8492;
  font-weight: 500;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 335px;
  }

  @media (min-width: 1200px) {
    font-size: 18px;
    line-height: 32px;
    width: ${(props) => props.widthValue};
  }
`;

export const TeamMainTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const TeamTextBlock = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 16px;
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TeamSliderWrap = styled.div`
  @media (min-width: 375px) {
    padding: 32px 0 56px;
  }

  @media (min-width: 1200px) {
    padding: 80px 0 100px;
  }
`;

export const SliderButton = styled.button`
  position: absolute;
  border: none;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 40px;
    height: 40px;
    top: 132px;
    left: 15px;
  }

  @media (min-width: 1200px) {
    width: 80px;
    height: 80px;
    top: 180px;
    left: 355px;
  }
`;

export const SliderIcon = styled(Image)`
  @media (max-width: 1200px) {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1200px) {
    width: 40px;
    height: 40px;
  }
`;

export const TeamImage = styled(Image)`
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 247px;
    height: 244px;
  }

  @media (min-width: 1200px) {
    width: 379px;
    height: 434px;
  }
`;

export const SocialMediaImage = styled(Image)`
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 1200px) {
    width: 32px;
    height: 32px;
  }
`;

export const SocialMediaBlock = styled.div`
  display: flex;
  gap: 8px;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }
`;

export const TeamPersonTextBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 4px;
  }

  @media (min-width: 1200px) {
    gap: 8px;
  }
`;

export const TeamPersonBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeamPersonWrap = styled.div`
  display: flex;
  flex-direction: column;

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 16px;
  }
`;

export const TeamPersonTitle = styled.h3`
  font-family: 'Inter';
  font-weight: 600;
  color: #1d1e25;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0;
  }
`;

export const TeamPersonText = styled.p`
  font-family: 'Inter';
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
  }
`;

export const TeamPositionLink = styled.p`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 600;
  letter-spacing: 0;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const TeamTextBlockWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 16px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;
