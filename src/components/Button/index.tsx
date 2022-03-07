import React, { ButtonHTMLAttributes } from 'react';
import { Content } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ color, background, ...rest }) => {
  return (
    <Content type="button" color={color} background={background} {...rest} />
  );
};

export default Button;
