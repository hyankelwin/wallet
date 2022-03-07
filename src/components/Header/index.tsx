import React from 'react';
import { Content } from './styles';
import HeaderImage from '../HeaderImage';

const Header: React.FC = () => {
  return (
    <Content>
      <div>
        <HeaderImage />
      </div>
      <div>
        <p>Your wallet</p>

        <p>digital</p>
      </div>
    </Content>
  );
};

export default Header;
