import { styled } from 'styled-components';
import Button from '@/components/Button';
import Image from 'next/image';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1200px) {
    gap: 16px;
    padding: 32px 0 56px;
  }

  @media (min-width: 1200px) {
    gap: 56px;
    padding: 92px 0 122px;
  }
`;

export const BackgroundYellowBlur = styled(Image)`
  position: absolute;
  top: -150px;
  left: -400px;
  z-index: -1;
`;

export const BackgroundGreenBlur = styled(Image)`
  position: absolute;
  top: -150px;
  right: -400px;
  z-index: -1;
`;

export const DetailsMark = styled.div`
  text-align: center;
  color: #1463ff;
  background-color: #1463ff1a;
  border-radius: 16px;
  letter-spacing: 0;
  padding-top: 4px;
  cursor: pointer;

  @media (max-width: 1200px) {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    width: 128px;
    height: 28px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter-SemiBold';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    width: 144px;
    height: 32px;
  }
`;

export const DetailsTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-weight: 700;
  color: #1d1e25;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 300px;
  }

  @media (min-width: 1200px) {
    font-size: 72px;
    line-height: 120%;
    letter-spacing: -3px;
    width: 903px;
  }
`;

export const DetailsText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const DetailsToggle = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
  }
`;

export const PlansContainer = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 32px;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1200px) {
    gap: 20px;
    justify-content: center;
    padding: 40px 0 78px;
  }
`;

export const PlanCard = styled.div<{ $isSelected: boolean }>`
  background-color: #ffffff;
  border: 1px solid #ededed;
  border-radius: 16px;
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1d1e25;
  display: flex;
  flex-direction: column;
  z-index: 100;

  @media (max-width: 1200px) {
    width: 335px;
    height: 684px;
    padding: 24px 20px;

    img {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: 1200px) {
    width: 378px;
    height: 801px;
    padding: 40px 24px;
  }

  p {
    color: ${({ $isSelected }) => ($isSelected ? '#FFFFFF' : '#1D1E25')};
  }

  @media (max-width: 1200px) {
    ${({ $isSelected }) =>
      $isSelected &&
      `
    background-color: #161A34;
    color: white;
  `}

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  @media (min-width: 1200px) {
    ${({ $isSelected }) =>
      $isSelected &&
      `
    background-color: #161A34;
    color: white;
    transform: translateY(-64px);
  `}

    &:hover {
      transform: translateY(-45px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Price = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

export const PlansButton = styled(Button)`
  border: 1px solid #ced1d8 !important;
  align-self: center;
  margin-top: 40px;
`;

export const PlanCardTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0;
  padding: 16px 0 8px;
`;

export const PlanCardText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492 !important;
  letter-spacing: 0;
  margin-bottom: 24px;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 302px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    width: 330px;
  }
`;

export const PriceBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: end;
`;

export const PriceText = styled.h3`
  font-family: 'Inter-SemiBold';
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -1px;
  }

  @media (min-width: 1200px) {
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -2px;
  }
`;

export const PriceTextPeriod = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492 !important;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  padding-bottom: 7px;
`;

export const ListTitle = styled.p`
  font-family: 'Inter-Bold';
  font-weight: 700;
  padding: 24px 0 16px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
`;

export const ListBlock = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
`;
