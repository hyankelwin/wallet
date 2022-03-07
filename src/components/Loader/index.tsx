import React from 'react';
import { Container, Spinner } from './styles';

interface LoaderProps {
  text?: string;
  size?: string;
}

const Loader: React.FC<LoaderProps> = ({ text, size }) => (
  <Container>
    <Spinner size={size} />
    {!!text && <p>{text}</p>}
  </Container>
);

export default Loader;
