import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './styles';
import Color from '../../styles/color';
import { creditCard, onlyString } from './mask';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: string;
  small?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  mask,
  name,
  icon: Icon,
  small,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleKeyUp = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (mask === 'credit-card') {
        creditCard(e);
      }

      if (mask === 'only-string') {
        onlyString(e);
      }
    },
    [mask],
  );

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
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        onKeyUp={handleKeyUp}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error} small={small}>
          <FiAlertCircle color={Color.error.default} size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
