import { fireEvent, render, waitFor } from '@testing-library/react';
import InputSelect from '../../components/InputSelect';
import Color from '../../styles/color';
import { months } from '../../utils/mountExpirationsDate';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'name',
        defaultValue: '',
        error: true,
        registerField: jest.fn(),
      };
    },
  };
});

describe('InputSelect component', () => {
  describe('should be able to passed in validation on all fields', () => {
    it('should be able to render InputSelect component with success', () => {
      const { getByPlaceholderText } = render(
        <InputSelect
          items={months()}
          title="Month"
          small
          name="month"
          placeholder="Card months"
        />,
      );
      expect(getByPlaceholderText('Card months')).toBeTruthy();
    });

    it('Should render highlight on inputSelect focus', async () => {
      const { getByPlaceholderText, getByTestId } = render(
        <InputSelect
          items={months()}
          title="Month"
          small
          name="month"
          placeholder="Card months"
        />,
      );

      const inputElement = getByPlaceholderText('Card months');
      const containerElement = getByTestId('input-select-container');

      fireEvent.focus(inputElement);

      await waitFor(() => {
        expect(containerElement).toHaveStyle(
          `border-color: ${Color.primary.default}`,
        );
        expect(containerElement).toHaveStyle(`color: ${Color.primary.default}`);
      });

      fireEvent.blur(inputElement);

      await waitFor(() => {
        expect(containerElement).not.toHaveStyle(
          `border-color: ${Color.primary.default}`,
        );
        expect(containerElement).not.toHaveStyle(
          `color: ${Color.primary.default}`,
        );
      });
    });
  });
});
