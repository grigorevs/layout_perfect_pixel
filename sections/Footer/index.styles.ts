import styled from 'styled-components';
import Image from 'next/image';

export const FooterWrap = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<{ backgroundColor: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor === 'dark' && '#1D1E25'};

  @media (min-width: 1200px) {
    width: 100vw;
  }
`;

export const FooterDescriptionWrap = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    width: 335px;
    flex-direction: column;
    align-items: start;
    gap: 24px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    gap: 24px;
    position: relative;
    top: 4px;
  }

  @media (min-width: 1200px) {
    gap: 32px;
  }
`;

export const FooterDescription = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    gap: 8px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const LineImage = styled(Image)`
  @media (max-width: 1200px) {
    width: 35px;
    height: 1px;
    margin-top: 12px;
  }

  @media (min-width: 1200px) {
    width: 76px;
    height: 1px;
    margin-top: 23px;
  }
`;

export const FooterTitle = styled.h1.withConfig({
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>`
  color: ${({ color }) => (color === 'dark' ? '#FFFFFF' : '#1d1e25')};
  font-family: 'Inter-Medium';
  font-weight: 600;
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 34px;
    padding-top: 51px;
  }

  @media (min-width: 1200px) {
    font-size: 64px;
    line-height: 120%;
    width: 760px;
    padding-top: 112px;
    letter-spacing: 0.4px;
  }
`;

export const FooterText = styled.p.withConfig({
  shouldForwardProp: (prop) => !['theme'].includes(prop),
})<{ theme: 'light' | 'dark' }>`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : '#1D1E25')};
  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    width: 292px;
  }

  @media (min-width: 1200px) {
    font-size: ${({ theme }) => (theme === 'dark' ? '18px' : '24px')};
    position: relative;
    top: ${({ theme }) => (theme === 'dark' ? '-8px' : '0')};
    line-height: 35px;
    color: ${({ theme }) => (theme === 'dark' ? '#AFB3BB' : '#1D1E25')};
    width: 543px;
  }
`;

export const LineBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'theme',
})<{ theme: string }>`
  background-color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : '#000000')};
  height: 1px;

  @media (max-width: 1200px) {
    width: 35px;
    margin-top: 12px;
  }

  @media (min-width: 1200px) {
    width: 76px;
    margin-top: 20px;
    display: ${({ theme }) => (theme === 'dark' ? 'none' : 'block')};
  }
`;

export const FooterCompanyTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 1200px) {
    padding: 56px 0;
    align-items: start;
    width: 335px;
    position: relative;
    left: 4px;
  }
`;

export const FooterLogoIcon = styled(Image)`
  @media (max-width: 1200px) {
    width: 95px;
    height: 44px;
  }

  @media (min-width: 1200px) {
    width: 140px;
    height: 66px;
  }
`;

export const FooterCompanyText = styled.p.withConfig({
  shouldForwardProp: (prop) => !['textColor'].includes(prop),
})<{ textColor: 'light' | 'dark' }>`
  font-family: 'Inter-Medium';
  font-weight: 500;

  @media (max-width: 1200px) {
    color: #7e8492;
    width: 248px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0;
    position: relative;
    top: 5px;
  }

  @media (min-width: 1200px) {
    color: ${({ textColor }) => (textColor === 'dark' ? '#7E8492' : '#1D1E25')};
    width: 292px;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0;
  }
`;

export const FooterButtonWrap = styled.div`
  @media (max-width: 1200px) {
    padding: 3px 0 0 43px;
    button {
      width: 142px;
      height: 44px;
      font-size: 14px;
    }
  }

  @media (min-width: 1200px) {
    padding: 110px 0 0 30px;
  }
`;

export const FooterLinkstWrap = styled.div`
  display: flex;

  @media (min-width: 1200px) {
    width: 1200px;
    justify-content: space-between;
    padding: 128px 0 79px;
  }
`;

export const FooterListWrap = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: flex;
    gap: 93px;
    position: relative;
    top: -4px;
    right: 2px;
  }
`;

export const FooterListBlock = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'textColor',
})<{ textColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h3 {
    color: ${({ textColor }) => (textColor === 'dark' ? '#FFFFFF' : '#1D1E25')};
  }
`;

export const FooterList = styled.ul.withConfig({
  shouldForwardProp: (prop) => prop !== 'textColor',
})<{ textColor: string }>`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    color: ${({ textColor }) => (textColor === 'dark' ? '#7E8492' : '#1D1E25')};
  }
`;

export const FooterListItem = styled.p`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  font-weight: 400;
  font-family: 'Inter';
  text-decoration: none;
`;

export const FooterListTitle = styled.h3`
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  font-weight: 700;
  font-family: 'Inter-SemiBold';
`;

export const FooterCopyrightText = styled.p`
  letter-spacing: 0;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 20px;
    color: #7e8492;
    font-weight: 500;
    font-family: 'Inter-Medium';
    position: relative;
    left: -3px;
    top: -4px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    line-height: 24px;
    color: #afb3bb;
    font-weight: 400;
    font-family: 'Inter';
  }
`;

export const FooterCopyright = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'theme',
})<{ theme: string }>`
  display: flex;
  justify-content: center;
  padding-top: 46px;
  border-top: 1px solid #ced1d8;

  @media (max-width: 1200px) {
    width: 335px;
    padding-bottom: 30px;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    position: relative;
    top: 2px;
  }

  @media (min-width: 1200px) {
    display: ${({ theme }) => (theme === 'dark' ? 'none' : 'flex')};
    width: 1200px;
    height: 129px;
    position: relative;
    top: -3px;
  }
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

export const FooterMobileLinksWrap = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const FooterSocialsImagesWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 168px;
  align-items: center;
  position: relative;
  left: -3px;
  top: -4px;
`;

export const FooterMobileLinksList = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  width: 335px;
  position: relative;
  top: -3px;
`;

export const FooterMobileLink = styled.a`
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  color: #7e8492;
  font-weight: 500;
  font-family: 'Inter-Medium';
`;

export const FooterCopyrightMobile = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'theme',
})<{ theme: string }>`
  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: ${({ theme }) => (theme === 'dark' ? 'flex' : 'none')};
    gap: 93px;
    position: relative;
    top: -28px;
    right: 5px;
    width: 1200px;
    padding: 40px 5px 58px;
    justify-content: space-between;
    border-top: 1px solid #606060;
  }
`;

export const FooterMobileSocialsWrap = styled.div`
  display: flex;
  gap: 62px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const FooterMobileLinksBlock = styled.div`
  display: flex;
  gap: 40px;
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Inter-Medium';
  font-weight: 500;
`;

export const FooterMobileLinkText = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Inter-Medium';
  font-weight: 500;
  position: relative;
  top: -2px;
`;
