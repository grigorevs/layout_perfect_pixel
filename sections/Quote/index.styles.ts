import styled from 'styled-components';

export const QuoteWrap = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    padding: 50px 0;
  }

  @media (min-width: 1200px) {
    padding-bottom: 160px;
    position: relative;
    top: 1px;
    left: 4px;
  }
`;

export const QuoteBlock = styled.div`
  display: flex;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 16px;
    width: 335px;
    padding: 24px 0;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    padding: 80px 0;
  }
`;

export const QuoteTitle = styled.h1`
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
    width: 480px;
    position: relative;
    top: 3px;
    left: -3px;
  }
`;

export const QuoteText = styled.p`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 335px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 150%;
    width: 475px;
  }
`;
