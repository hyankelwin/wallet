import React from 'react';

import { CreditCardProvider } from './CreditCardContext';

const AppProvider: React.FC = ({ children }) => (
  <CreditCardProvider>{children}</CreditCardProvider>
);

export default AppProvider;
