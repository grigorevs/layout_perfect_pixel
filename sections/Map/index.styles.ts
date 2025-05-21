import styled from 'styled-components';
import MapBig from '@/public/images/contact/Map.png';
import MapSmall from '@/public/images/contact/MapSmall.png';

export const MapBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    margin: 14px 0 56px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    margin: 90px 0 85px;
  }
`;

export const MapWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 335px;
    height: 171px;
    background-image: url(${MapSmall.src});
  }

  @media (min-width: 1200px) {
    width: 980px;
    height: 545px;
    background-image: url(${MapBig.src});
  }
`;

export const MapBlock = styled.div`
    display: flex;

  @media (max-width: 1200px) {
    width: 335px;
    flex-direction: column;
    gap: 58px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    gap: 83px;
  }
`;

export const MapsTitle = styled.h1`
  font-family: 'Inter-Bold';
  color: #1d1e25;
  font-weight: 700;

  @media (max-width: 1200px) {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    width: 335px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 100px;
    align-self: start;
    font-size: 72px;
    line-height: 120%;
    letter-spacing: -3px;
    width: 741px;
  }
`;

export const ContactsBlockWrap = styled.div`
  display: flex;
  
  @media (max-width: 1200px) {
    flex-direction: row;
    width: 335px;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 24px;
  }
  
  @media (min-width: 1200px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ContactsItem = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1200px) {
    width: 160px;
  }
  
  @media (min-width: 1200px) {
    width: 176px;
    border-bottom: 1px solid #AFB3BB;
  }
`;

export const ContactsTitle = styled.h4`
  font-family: 'Inter-Bold';
  color: #1d1e25;
  font-weight: 700;
  letter-spacing: 0;
  padding-bottom: 8px;

  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ContactsText = styled.p`
  font-family: 'Inter';
  color: #7E8492;
  font-weight: 400;
  letter-spacing: 0;
  padding-bottom: 12px;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    width: 151px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ContactsMail = styled.p`
  font-family: 'Inter-Medium';
  color: #1D1E25;
  font-weight: 500;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 26px;
    padding-bottom: 32px;
  }
`;
