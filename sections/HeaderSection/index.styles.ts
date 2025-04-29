import styled from 'styled-components';
import Image from 'next/image';

export const HeaderBlock = styled.div`
  display: flex;
  width: 1200px;
  gap: 40px;
  padding-bottom: 141px;
  position: relative;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 617px;
`;

export const HeaderTitle = styled.h1`
  font-family: 'Inter-Bold';
  font-size: 80px;
  line-height: 120%;
  letter-spacing: -3px;
  color: #1d1e25;
  width: 740px;
  margin-top: 87px;
`;

export const HeaderDescription = styled.div`
  display: flex;
  gap: 27px;
  margin-top: 114px;
`;

export const LineImage = styled(Image)`
  margin-top: 22px;
`;

export const HeaderText = styled.p`
  font-family: 'Inter-Medium';
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.9px;
  color: #1d1e25;
  width: 514px;
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
`;

export const HeaderButton = styled.button`
  background-color: #1d1e25;
  border-radius: 100px;
  border: none;
  width: 175px;
  height: 56px;
  color: #ffffff;
  font-family: 'Inter-Bold';
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0;
  cursor: pointer;
`;

export const HeaderImagesBlock = styled.div`
  position: relative;
`;

export const SalesReport = styled(Image)`
  position: absolute;
  top: 115px;
  left: -3px;
`;

export const CustomerGrowth = styled(Image)`
  position: absolute;
  top: 65px;
  left: 335px;
`;

export const Sales = styled(Image)`
  position: absolute;
  top: 490px;
  left: -4px;
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
