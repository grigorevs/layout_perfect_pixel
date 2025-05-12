import { StyledButton } from './index.styles';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  [key: string]: unknown;
}

const Button: React.FC<ButtonProps> = ({ children, theme = 'dark', ...props }) => {
  return (
    <StyledButton buttonTheme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
