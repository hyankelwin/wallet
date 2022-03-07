import React, {
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
import { useField } from '@unform/core';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';
import Color from '../../styles/color';

interface Option {
  id: number;
  label: string;
  value: string;
}

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  items: Option[];
  title: string;
  small?: boolean;
}

const Input: React.FC<InputProps> = ({
  items,
  title,
  name,
  small,
  ...rest
}) => {
  const inputRef = useRef<HTMLSelectElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isErrored={!!error}
      isFocused={isFocused}
      data-testid="input-select-container"
    >
      <select
        {...rest}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
      >
        <option hidden value="">
          {title}
        </option>
        {items.map(item => {
          return (
            <option key={item.id} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>

      {error && (
        <Error title={error} small={small}>
          <FiAlertCircle color={Color.error.default} size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
