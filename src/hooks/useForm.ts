import { useState, useCallback } from 'react';
import { getCardType } from '../utils/getCardType';
import { FlagCard } from '../common/interfaces/CreditCard.interface';

interface useFormReturn {
  handleTypeFlagCard(value: string): Promise<FlagCard>;
  isFlag: boolean;
  flag: FlagCard;
}

export const useForm = (): useFormReturn => {
  const [isFlag, setIsFlag] = useState(false);
  const [flag, setFlag] = useState<FlagCard>({} as FlagCard);

  const handleTypeFlagCard = useCallback(async (flagValue: string) => {
    const type = await getCardType(flagValue);
    setIsFlag(!!type.value);
    setFlag(type);

    return type;
  }, []);

  return {
    handleTypeFlagCard,
    isFlag,
    flag,
  };
};
