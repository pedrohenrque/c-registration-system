import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
// import { FiAlertCircle } from 'react-icons/fi';

import { useField } from '@unform/core';

import { Container, Title, Content } from './styles';

interface InputTitleProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title?: string;
  containerStyle?: object;
}

const InputTitle: React.FC<InputTitleProps> = ({
  name,
  title,
  containerStyle,
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

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Content style={containerStyle}>
      <Title>{title}</Title>
      <Container
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        data-testid="input-container"
      >
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {/* {error && (
          <Error title={error}>
            <FiAlertCircle color="#FF466B" size={20} />
          </Error>
        )} */}
      </Container>
    </Content>
  );
};

export default InputTitle;
