import styled, { css } from 'styled-components';

// import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Content = styled.div`
  width: 350px;

  & + div {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 13px;
  color: #707070;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Container = styled.div<ContainerProps>`
  background: #f8f9fc;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  border: 2px solid #f8f9fc;
  color: #666360;
  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #ff466b;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #3784f6;
      border-color: #3784f6;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #3784f6;
    `}

  input {
    flex: 1;
    width: 100%;
    border: 0;
    background: transparent;
    color: #3784f6;

    &::placeholder {
      color: #d9d9d9;
    }
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;

//   svg {
//     margin: 0;
//   }

//   span {
//     background: #ff466b;
//     color: #fff;

//     &::before {
//       border-color: #ff466b transparent;
//     }
//   }
// `;
