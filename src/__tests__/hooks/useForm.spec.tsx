import { renderHook, act } from '@testing-library/react-hooks';
import { mockCreditCard } from '../../__mocks__/creditCard.mock';
import { useForm } from '../../hooks/useForm';

jest.mock('../../context/CreditCardContext');

describe('useForm Hook', () => {
  it('should be able save flag type card credit on function handleTypeFlagCard', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useForm());

    act(() => {
      result.current.handleTypeFlagCard(mockCreditCard.number);
    });

    waitForNextUpdate();

    expect(result.current.isFlag).toBe(false);
  });
});
