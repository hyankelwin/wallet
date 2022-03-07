import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;
