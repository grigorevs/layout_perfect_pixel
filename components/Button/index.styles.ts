import styled from 'styled-components';

export const StyledButton = styled.button<{ buttonTheme: 'light' | 'dark' }>`
  background-color: ${({ buttonTheme }) => (buttonTheme === 'dark' ? '#FFFFFF' : '#1d1e25')};
  font-family: 'Inter-SemiBold';
  font-weight: 600;
  border-radius: 100px;
  border: none;
  width: 175px;
  height: 56px;
  color: ${({ buttonTheme }) => (buttonTheme === 'dark' ? '#1D1E25' : '#ffffff')};
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
