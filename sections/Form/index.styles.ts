import styled from 'styled-components';
import Image from 'next/image';

export const FormWrap = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    padding: 56px 0 29px;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    width: 1200px;
    justify-content: space-between;
    position: relative;
    padding: 84px 0 138px;
  }
`;

export const FormTitle = styled.h1`
  font-family: 'Inter-SemiBold';
  color: #1d1e25;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0;
    padding-bottom: 12px;
  }

  @media (min-width: 1200px) {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -2%;
    padding-bottom: 20px;
  }
`;

export const FormText = styled.p`
  color: #7e8492;

  span {
    color: #1463ff;
  }

  @media (max-width: 1200px) {
    font-family: 'Inter-Medium';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 24px;
    width: 212px;
  }

  @media (min-width: 1200px) {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    padding-bottom: 48px;
  }
`;

export const FormLabel = styled.p`
  font-family: 'Inter-Medium';
  color: #1d1e25;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  padding-bottom: 6px;
`;

export const FormInput = styled.input`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ededed;
  padding: 10px 14px;
  width: 100%;
  outline: none;
  font-family: 'Inter';
  color: #7e8492;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
`;

export const FormTextArea = styled.textarea`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ededed;
  padding: 10px 14px;
  width: 100%;
  outline: none;
  height: 134px;
  font-family: 'Inter';
  color: #7e8492;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
  resize: none;
`;

export const FormBlock = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #ced1d8;

  @media (max-width: 1200px) {
    width: 335px;
    padding: 24px 24px 32px;
  }

  @media (min-width: 1200px) {
    width: 608px;
    padding: 56px 48px;
  }
`;

export const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    gap: 32px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
  }
`;

export const FormNameInputBlock = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    flex-shrink: 1;
    width: 512px;
  }
`;

export const FormInputBlock = styled.div`
  width: 100%;
`;

export const FormImage = styled(Image)`
  @media (max-width: 1200px) {
    display: none;
  }

  @media (min-width: 1200px) {
    position: absolute;
    right: -155px;
    z-index: -1;
    width: 987px;
    height: 885px;
  }
`;
