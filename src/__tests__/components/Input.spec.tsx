import { fireEvent, render, waitFor } from '@testing-library/react';
import { mount } from 'enzyme';
import { FiKey } from 'react-icons/fi';
import Input from '../../components/Input';
import Color from '../../styles/color';

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

describe('Input component', () => {
  describe('should be able to passed in validation on all fields', () => {
    it('should be able to render Input component with success', () => {
      const { getByPlaceholderText } = render(
        <Input name="name" placeholder="Card holder" />,
      );
      expect(getByPlaceholderText('Card holder')).toBeTruthy();
    });

    it('Should render highlight on input focus', async () => {
      const { getByPlaceholderText, getByTestId } = render(
        <Input name="name" placeholder="Card holder" />,
      );

      const inputElement = getByPlaceholderText('Card holder');
      const containerElement = getByTestId('input-container');

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

    it('should be able to render Input when insert value ', async () => {
      const changeHandler = jest.fn();
      const { getByPlaceholderText, getByTestId } = render(
        <Input
          name="name"
          placeholder="Card holder"
          onChange={changeHandler}
          small
        />,
      );

      const inputElement = getByPlaceholderText('Card holder');
      const containerElement = getByTestId('input-container');

      fireEvent.focus(inputElement);

      fireEvent.change(inputElement, { target: { value: '123' } });

      await waitFor(() => {
        expect(containerElement).toHaveStyle(
          `border-color: ${Color.primary.default}`,
        );
        expect(containerElement).toHaveStyle(`color: ${Color.primary.default}`);
      });

      fireEvent.blur(inputElement);

      await waitFor(() => {
        expect(containerElement).toHaveStyle(
          `border-color: ${Color.error.default}`,
        );
        expect(containerElement).not.toHaveStyle(
          `color: ${Color.error.default}`,
        );
      });
    });
  });

  describe('should be able to validate masks on input', () => {
    it('should be able to render Input when mask is credit-card', () => {
      const wrapper = mount(<Input name="test-toggle" mask="credit-card" />);

      const values = {
        altKey: false,
        charCode: 13,
        ctrlKey: false,
        code: 'A',
      };

      wrapper.find('input').simulate('keyUp', {
        altKey: false,
        charCode: 13,
        ctrlKey: false,
        code: 'A',
      });

      wrapper.find('input').props().value = values.code;

      expect(wrapper.find('input').props().value).toBe(values.code);
    });

    it('should be able to render Input when mask is only-string', () => {
      const wrapper = mount(<Input name="test-toggle" mask="only-string" />);

      const values = {
        altKey: false,
        charCode: 14,
        ctrlKey: false,
        code: 'B',
      };

      wrapper.find('input').simulate('keyUp', {
        altKey: false,
        charCode: 13,
        ctrlKey: false,
        code: 'A',
      });

      wrapper.find('input').props().value = values.code;

      expect(wrapper.find('input').props().value).toBe(values.code);
    });
  });

  describe('should be able to validate Icon on input', () => {
    it('should be able to render Icon when icon is exist', () => {
      const wrapper = mount(<Input name="test" icon={FiKey} />);

      expect(wrapper.find('input').props()).toBeTruthy();
    });
  });
});
