import styled from 'styled-components';
import Image from 'next/image';

export const FooterWrap = styled.div`
  margin-top: 112px;
  position: relative;
`;

export const FooterDescriptionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

export const FooterDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const FooterDescription = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;

export const LineImage = styled(Image)`
  margin-top: 20px;
`;

export const FooterTitle = styled.h1`
  font-family: 'Inter-Medium';
  font-size: 64px;
  line-height: 120%;
  letter-spacing: 0;
  color: #1d1e25;
  width: 720px;
`;

export const FooterText = styled.p`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 0;
  color: #1d1e25;
  width: 543px;
`;

export const FooterCompanyTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FooterCompanyText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #1d1e25;
  width: 292px;
`;

export const FooterLinkstWrap = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  padding: 128px 0 79px;
`;

export const FooterListWrap = styled.div`
  display: flex;
  gap: 93px;
`;

export const FooterListBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterListItem = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: #1d1e25;
  font-weight: 400;
  font-family: 'Inter';
  text-decoration: none;
`;

export const FooterListTitle = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: #1d1e25;
  font-weight: 700;
  font-family: 'Inter-SemiBold';
`;

export const FooterCopyrightText = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  color: #afb3bb;
  font-weight: 400;
  font-family: 'Inter';
`;

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 46px;
  border-top: 1px solid #ced1d8;
  height: 129px;
`;

export const BackgroundTopBlur = styled(Image)`
  position: absolute;
  bottom: 100px;
  z-index: -1;
`;

export const BackgroundBottomBlur = styled(Image)`
  position: absolute;
  z-index: -1;
  top: -50px;
  right: -410px;
`;
