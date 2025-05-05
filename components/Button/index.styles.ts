import styled from 'styled-components';

export const StyledButton = styled.button`
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

  @media (max-width: 1200px) {
    width: 108px;
    height: 36px;
    font-size: 12px;
    line-height: 20px;
  }
`;
