import { StyledButton } from './index.styles';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

const Button = ({ children, theme = 'light', ...props }: ButtonProps) => {
  return (
    <StyledButton buttonTheme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
