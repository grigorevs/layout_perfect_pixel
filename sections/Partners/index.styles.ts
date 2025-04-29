import styled from 'styled-components';

export const PartnersWrap = styled.div`
  display: flex;
  padding: 100.5px 0;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  justify-content: center;
  gap: 40px;
  width: 1200px;
`;

export const PartnersTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PartnersTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-size: 56px;
  line-height: 120%;
  letter-spacing: -2px;
  color: #1d1e25;
`;

export const PartnersText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0;
  color: #7e8492;
  width: 323px;
`;

export const PartnersImagesBlock = styled.div`
  padding-top: 18px;
  display: flex;
  column-gap: 93px;
  row-gap: 40px;
  flex-wrap: wrap;
  width: 730px;
  justify-content: center;
`;
