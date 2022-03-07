import { render, fireEvent, waitFor } from '@testing-library/react';
import { mockCreditCardResponse } from '../../__mocks__/creditCard.mock';
import { useCreditCard } from '../../context/CreditCardContext';
import { mockInterfaceCreditCard } from '../../__mocks__/interfaceCreditCard.mock';
import { mockSide } from '../../__mocks__/side.mock';
import { mockFlagCard } from '../../__mocks__/flagCard.mock';
import Home from '../../pages/Home';

jest.mock('../../context/CreditCardContext');

describe('Home Page', () => {
  describe('should be able to render Create Card ', () => {
    it('should be able to render Card for create new credit card', async () => {
      (useCreditCard as unknown as jest.Mock).mockReturnValue({
        handleClearCard: jest.fn(),
        interfacefValuesCard: mockInterfaceCreditCard,
        side: mockSide,
        fieldFocused: 'number',
        imageSelected: '10.png',
        flagCard: mockFlagCard,
        isLoading: false,
        creditCard: {},
      });

      const { asFragment } = render(<Home />);

      await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('should be able to render Success Card ', () => {
    it('should be able to render Home page with success', async () => {
      (useCreditCard as unknown as jest.Mock).mockReturnValue({
        handleClearCard: jest.fn(),
        interfacefValuesCard: mockInterfaceCreditCard,
        side: mockSide,
        fieldFocused: 'number',
        imageSelected: '10.png',
        flagCard: mockFlagCard,
        isLoading: false,
        creditCard: mockCreditCardResponse,
      });

      const { asFragment } = render(<Home />);

      await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
      });
    });

    it('should be able simulate click button create outher card and call function handleClearCard', async () => {
      (useCreditCard as unknown as jest.Mock).mockReturnValue({
        handleClearCard: jest.fn(),
        interfacefValuesCard: mockInterfaceCreditCard,
        side: mockSide,
        fieldFocused: 'number',
        imageSelected: '10.png',
        flagCard: mockFlagCard,
        isLoading: false,
        creditCard: mockCreditCardResponse,
      });

      const { getByText, asFragment } = render(<Home />);

      const buttonElement = getByText('Create outher card');

      fireEvent.click(buttonElement);

      await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
  describe('should be able to render Loader', () => {
    it('should be able to render Loader when isLoading is true', async () => {
      (useCreditCard as unknown as jest.Mock).mockReturnValue({
        handleClearCard: jest.fn(),
        interfacefValuesCard: mockInterfaceCreditCard,
        side: mockSide,
        fieldFocused: 'number',
        imageSelected: '10.png',
        flagCard: mockFlagCard,
        isLoading: true,
        creditCard: {},
      });

      const { asFragment } = render(<Home />);

      await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });
});
