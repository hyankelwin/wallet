import React from 'react';
import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  small?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  className = '',
  small,
}) => {
  return (
    <Container className={className} small={small}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
