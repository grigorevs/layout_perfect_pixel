import styled from 'styled-components';

export const OverviewWrap = styled.div`
  background-color: #1d1e25;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const OverviewBlock = styled.div`
  width: 1200px;
`;

export const OverviewTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -2.3px;
  color: #ffffff;
  width: 816px;
  margin: 100px 0 24px;
`;

export const OverviewText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0;
  color: #7e8492;
  width: 660px;
`;

export const OverviewDetailsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 56px;
  column-gap: 259px;
  margin: 80px 0 100px;
`;

export const OverviewDetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 453px;
`;

export const OverviewDetailsItemTitle = styled.h3`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -1px;
  color: #ffffff;
  width: 275px;
  color: #ededed;
`;

export const OverviewDetailsItemText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #7e8492;
  width: 460px;
  color: #7e8492;
`;
