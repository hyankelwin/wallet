import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FormCreditCard from '../../../../containers/Form/FormCreditCard/index';
import { mockCreditCard } from '../../../../__mocks__/creditCard.mock';
import { useCreditCard } from '../../../../context/CreditCardContext';

const mockedError = jest.fn();
const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../../../hooks/useForm', () => {
  return {
    useForm: () => ({
      handleTypeFlagCard: jest.fn(),
      handleImageSelected: jest.fn(),
      isFlag: true,
      imgCard: '10.jpeg',
    }),
  };
});

jest.mock('../../../../context/CreditCardContext');

describe('FormCreditCard container', () => {
  it('should be able to add new credit card on FormCreditCard container with success', async () => {
    (useCreditCard as unknown as jest.Mock).mockReturnValue({
      handleSetValuesCreditCard: () => jest.fn(),
      handleTransitionCreditCard: () => jest.fn(),
      handleFocusField: () => jest.fn(),
      handleSaveFlagCard: () => jest.fn(),
      handleCreateCreditCard: () => jest.fn(),
      creditCard: mockCreditCard,
    });

    const { getByTestId, getByText, asFragment } = render(<FormCreditCard />);

    const numberField = getByTestId('input-number');
    const nameField = getByTestId('input-name');
    const monthField = getByTestId('input-month');
    const yearField = getByTestId('input-year');
    const cvvField = getByTestId('input-cvv');
    const buttonElement = getByText('Create new card');

    fireEvent.focus(numberField);
    fireEvent.focus(nameField);
    fireEvent.focus(cvvField);
    fireEvent.blur(cvvField);

    fireEvent.change(numberField, { target: { value: mockCreditCard.number } });
    fireEvent.change(nameField, { target: { value: mockCreditCard.name } });
    fireEvent.change(monthField, {
      target: { value: mockCreditCard.expiration.month },
    });
    fireEvent.change(yearField, {
      target: { value: mockCreditCard.expiration.year },
    });
    fireEvent.change(cvvField, { target: { value: mockCreditCard.cvv } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to add new credit card on FormCreditCard when year equal current', async () => {
    (useCreditCard as unknown as jest.Mock).mockReturnValue({
      handleSetValuesCreditCard: () => jest.fn(),
      handleTransitionCreditCard: () => jest.fn(),
      handleFocusField: () => jest.fn(),
      handleSaveFlagCard: () => jest.fn(),
      handleCreateCreditCard: () => jest.fn(),
      creditCard: mockCreditCard,
    });

    const { getByTestId, getByText, asFragment } = render(<FormCreditCard />);

    const numberField = getByTestId('input-number');
    const nameField = getByTestId('input-name');
    const monthField = getByTestId('input-month');
    const yearField = getByTestId('input-year');
    const cvvField = getByTestId('input-cvv');
    const buttonElement = getByText('Create new card');

    fireEvent.focus(numberField);
    fireEvent.focus(nameField);
    fireEvent.focus(cvvField);
    fireEvent.blur(cvvField);

    fireEvent.change(numberField, { target: { value: mockCreditCard.number } });
    fireEvent.change(nameField, { target: { value: mockCreditCard.name } });
    fireEvent.change(monthField, {
      target: { value: mockCreditCard.expiration.month },
    });
    fireEvent.change(yearField, {
      target: { value: new Date().getFullYear() },
    });
    fireEvent.change(cvvField, { target: { value: mockCreditCard.cvv } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click image card with success', async () => {
    (useCreditCard as unknown as jest.Mock).mockReturnValue({
      handleSetValuesCreditCard: () => jest.fn(),
      handleTransitionCreditCard: () => jest.fn(),
      handleFocusField: () => jest.fn(),
      handleSaveFlagCard: () => jest.fn(),
      handleSaveImageCard: () => jest.fn(),
      handleCreateCreditCard: () => jest.fn(),
      creditCard: mockCreditCard,
      imageSelected: '10.jpeg',
    });

    const { getAllByTestId } = render(<FormCreditCard />);

    const imageCardElement = getAllByTestId('image-card-test')[0];

    fireEvent.click(imageCardElement);

    expect(imageCardElement).toBeTruthy();
  });

  it('should be able to simulate error when field number is empty', async () => {
    mockedError.mockImplementation(() => {
      throw new Error();
    });

    (useCreditCard as unknown as jest.Mock).mockReturnValue({
      handleSetValuesCreditCard: () => jest.fn(),
      handleTransitionCreditCard: () => jest.fn(),
      handleFocusField: () => jest.fn(),
      handleSaveFlagCard: () => jest.fn(),
      handleCreateCreditCard: () => jest.fn(),
      creditCard: mockCreditCard,
    });

    const { getByTestId, getByText } = render(<FormCreditCard />);

    const numberField = getByTestId('input-number');
    const buttonElement = getByText('Create new card');

    fireEvent.change(numberField, { target: { value: null } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect.objectContaining({
        type: 'error',
      });
    });
  });
});
