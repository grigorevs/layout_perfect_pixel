import { StyledButton } from './index.styles';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
