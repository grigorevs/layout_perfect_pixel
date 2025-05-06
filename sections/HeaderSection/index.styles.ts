import styled from 'styled-components';
import Image from 'next/image';

export const HeaderBlock = styled.div`
  display: flex;
  position: relative;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 0 20px;
  }
  @media (min-width: 1400px) {
    width: 1200px;
    gap: 40px;
    flex-direction: row;
    padding: 0 20px 141px;
  }

  @media (min-width: 1440px) {
    padding: 0 0 141px;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-direction: column;

  width: 617px;

  @media (max-width: 1400px) {
    width: 100vw;
    padding: 0 20px;
    align-items: center;
  }

  @media (min-width: 1400px) {
    align-items: start;
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-weight: 700;
  color: #1d1e25;
  width: 335px;

  @media (max-width: 700px) {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -1px;
    margin-top: 0;
  }

  @media (min-width: 1400px) {
    font-size: 80px;
    line-height: 120%;
    letter-spacing: -3px;
    width: 740px;
    margin-top: 87px;
  }
`;

export const HeaderDescription = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 48px;

  @media (min-width: 1400px) {
    margin-top: 114px;
    gap: 27px;
  }
`;

export const LineImage = styled(Image)`
  margin-top: 22px;

  @media (max-width: 1200px) {
    margin-top: 11px;
    width: 24px;
  }
`;

export const HeaderText = styled.p`
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  color: #1d1e25;
  width: 303px;

  @media (max-width: 700px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
  }

  @media (min-width: 1400px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: -0.9px;
    width: 514px;
  }
`;

export const HeaderInputBlock = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
  margin-top: 69px;
`;

export const HeaderInput = styled.input`
  border: none;
  font-family: 'Inter-Light';
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0;
  font-weight: 400;
  color: #7e8492;
  padding: 9px 0 21px;
  width: 280px;
  border-bottom: 1px #ced1d8 solid;
  outline: none;
  background-color: transparent;

  @media (max-width: 1200px) {
    width: 219px;
    font-size: 14px;
    line-height: 20px;
    padding: 9px 0 16px;
  }
`;

export const HeaderImagesBlock = styled.div`
  position: relative;
  height: auto;

  @media (max-width: 1400px) {
    height: 520px;
  }
`;

export const SalesReport = styled(Image)`
  position: absolute;

  @media (min-width: 375px) {
    right: -240px;
    width: 450px;
    margin-bottom: 176px;
  }
  @media (min-width: 1400px) {
    top: 115px;
    left: -3px;
    width: auto;
  }
`;

export const CustomerGrowth = styled(Image)`
  position: absolute;

  @media (min-width: 375px) {
    right: -260px;
    width: 200px;
    top: -21px;
  }
  @media (min-width: 1400px) {
    top: 65px;
    left: 335px;
    width: auto;
  }
`;

export const Sales = styled(Image)`
  position: absolute;

  @media (min-width: 375px) {
    right: -240px;
    width: 450px;
    top: 320px;
  }
  @media (min-width: 1400px) {
    top: 490px;
    left: -4px;
    width: auto;
  }
`;

export const BackgroundTopBlur = styled(Image)`
  position: absolute;
  bottom: 50px;
  z-index: -1;
`;

export const BackgroundBottomBlur = styled(Image)`
  position: absolute;
  z-index: -1;
`;
