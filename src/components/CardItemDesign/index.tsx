import React from 'react';
import { Container, Content } from './styles';

interface CardItemDesignProps {
  src: string;
}

const CardItemDesign: React.FC<CardItemDesignProps> = ({ src }) => {
  return (
    <Container>
      <Content src={src} />
    </Container>
  );
};

export default CardItemDesign;
