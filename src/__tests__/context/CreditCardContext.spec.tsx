import { renderHook, act } from '@testing-library/react-hooks';
import {
  CreditCardProvider,
  useCreditCard,
} from '../../context/CreditCardContext';
import { mockCreditCard } from '../../__mocks__/creditCard.mock';
import { mockInterfaceCreditCard } from '../../__mocks__/interfaceCreditCard.mock';
import { mockFlagCard } from '../../__mocks__/flagCard.mock';
import { getTimeOut } from '../../utils/getTimeOutSimulateApi';
import { mockSide } from '../../__mocks__/side.mock';

describe('CreditCard Context', () => {
  it('should be able create credit card with success', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCreditCard(), {
      wrapper: CreditCardProvider,
    });

    act(() => {
      result.current.handleCreateCreditCard(mockCreditCard);
    });

    await getTimeOut(10);

    await waitForNextUpdate();

    expect(result.current.creditCard).toEqual(mockCreditCard);
  });

  it('should be able reset all data with function handleClearCard', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCreditCard(), {
      wrapper: CreditCardProvider,
    });

    act(() => {
      result.current.handleCreateCreditCard(mockCreditCard);
      result.current.handleSetValuesCreditCard(
        'number',
        mockInterfaceCreditCard.number,
      );
      result.current.handleSaveFlagCard(mockFlagCard);
      result.current.handleSaveImageCard('10.jpeg');
    });

    act(() => {
      result.current.handleClearCard();
    });

    waitForNextUpdate();

    expect(result.current.creditCard).toEqual({});
    expect(result.current.flagCard).toEqual({});
    expect(result.current.interfacefValuesCard).toEqual({});
    expect(result.current.imageSelected).toBe('');
  });

  it('should be able effect transition create credit card in function handleTransitionCreditCard', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCreditCard(), {
      wrapper: CreditCardProvider,
    });

    act(() => {
      result.current.handleTransitionCreditCard(mockSide.name, mockSide.value);
    });

    waitForNextUpdate();

    expect(result.current.side).toEqual(mockSide);
  });

  it('should be able set focus field in function handleFocusField', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCreditCard(), {
      wrapper: CreditCardProvider,
    });

    const field = 'number';

    act(() => {
      result.current.handleFocusField(field);
    });

    waitForNextUpdate();

    expect(result.current.fieldFocused).toEqual(field);
  });
});
