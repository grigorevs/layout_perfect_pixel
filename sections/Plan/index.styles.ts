import { styled } from 'styled-components';
import Button from '@/components/Button';

export const PlansContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 40px 0 0;
`;

export const PlanCard = styled.div<{ $isSelected: boolean }>`
  background-color: transparent;
  width: 378px;
  height: 801px;
  border: 1px solid #ededed;
  border-radius: 16px;
  padding: 40px 24px;
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1d1e25;
  display: flex;
  flex-direction: column;

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

  p {
    color: ${({ $isSelected }) => ($isSelected ? '#FFFFFF' : '#1D1E25')};
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

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (min-width: 1400px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0;
    padding: 16px 0 8px;
  }
`;

export const PlanCardText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  color: #7e8492 !important;
  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
    width: 330px;
    margin-bottom: 24px;
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
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
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

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
    padding-bottom: 7px;
  }
`;

export const ListTitle = styled.p`
  font-family: 'Inter-Bold';
  font-weight: 700;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    padding: 24px 0 16px;
  }
`;

export const ListBlock = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
`;
