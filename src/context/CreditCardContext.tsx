import React, { createContext, useState, useCallback, useContext } from 'react';
import {
  CreditCard,
  SideProps,
  FlagCard,
} from '../common/interfaces/CreditCard.interface';
import { getTimeOut } from '../utils/getTimeOutSimulateApi';

interface CreateCreditContext {
  interfacefValuesCard: CreditCard;
  side: SideProps;
  fieldFocused: string;
  imageSelected: string;
  flagCard: FlagCard;
  isLoading: boolean;
  error: boolean;
  creditCard: CreditCard;
  handleClearCard(): void;
  handleSetValuesCreditCard(field: string, value: string): void;
  handleTransitionCreditCard(name: string, value: boolean): void;
  handleFocusField(field: string): void;
  handleSaveImageCard(image: string): void;
  handleSaveFlagCard(value: FlagCard): void;
  handleCreateCreditCard(values: CreditCard): Promise<void>;
}

const CreditCardContext = createContext<CreateCreditContext>(
  {} as CreateCreditContext,
);

const CreditCardProvider: React.FC = ({ children }) => {
  const [interfacefValuesCard, setInterfacefValuesCard] = useState<CreditCard>(
    {} as CreditCard,
  );
  const [side, setSide] = useState<SideProps>({} as SideProps);
  const [fieldFocused, setFieldFocused] = useState('');
  const [imageSelected, setImageSelected] = useState('');
  const [flagCard, setFlagCard] = useState<FlagCard>({} as FlagCard);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [creditCard, setCreditCard] = useState<CreditCard>({} as CreditCard);

  const handleSetValuesCreditCard = useCallback(
    (field: string, value: string) => {
      setInterfacefValuesCard({ ...interfacefValuesCard, [field]: value });
    },
    [interfacefValuesCard, setInterfacefValuesCard],
  );

  const handleTransitionCreditCard = useCallback(
    (name: string, value: boolean) => {
      setSide({ name, value });
    },
    [],
  );

  const handleFocusField = useCallback((field: string) => {
    setFieldFocused(field);
  }, []);

  const handleSaveImageCard = useCallback((image: string) => {
    setImageSelected(image);
  }, []);

  const handleSaveFlagCard = useCallback((flag: FlagCard) => {
    setFlagCard(flag);
  }, []);

  const handleCreateCreditCard = useCallback(async (values: CreditCard) => {
    setLoading(true);
    setError(false);

    const response = values;
    await setCreditCard(response);

    await getTimeOut(10);
    setLoading(false);
  }, []);

  const handleClearCard = useCallback(() => {
    setCreditCard({} as CreditCard);
    setInterfacefValuesCard({} as CreditCard);
    setFlagCard({} as FlagCard);
    setImageSelected('');
  }, []);

  return (
    <CreditCardContext.Provider
      value={{
        creditCard,
        interfacefValuesCard,
        side,
        fieldFocused,
        imageSelected,
        flagCard,
        isLoading,
        error,
        handleClearCard,
        handleSaveFlagCard,
        handleFocusField,
        handleSaveImageCard,
        handleSetValuesCreditCard,
        handleTransitionCreditCard,
        handleCreateCreditCard,
      }}
    >
      {children}
    </CreditCardContext.Provider>
  );
};

function useCreditCard(): CreateCreditContext {
  const context = useContext(CreditCardContext);

  return context;
}

export { CreditCardProvider, useCreditCard };
