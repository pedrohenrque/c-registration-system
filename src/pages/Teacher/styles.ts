import { shade } from 'polished';
import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
  padding: 40px 0;
  min-width: 1280px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  flex: 1;
  max-width: 900px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    a {
      display: flex;
      padding: 0;
      margin: 0;

      button {
        background: none;
        border: none;
      }
    }
    h1 {
      margin-left: 20px;
      font-size: 30px;
      font-weight: 700;
      color: #000;
    }
  }
`;

export const ButtonInclude = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5267f4;
  border: none;
  padding: 12px 25px;
  color: #fff;
  border-radius: 8px;
  transition: 0.4s;

  &:hover {
    background: ${shade(0.2, '#5267f4')};
  }

  svg {
    margin-right: 10px;
  }
`;

export const HeaderTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 18px;
    font-weight: 400;
    color: #959595;
  }
`;
export const UpdateButton = styled.button`
  border: none;
  background: #9aaaba;
  border-radius: 4px;
  padding: 5px 15px;
  font-size: 13px;
  color: #fff;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#9aaaba')};
  }
`;
export const DeleteButton = styled.button`
  margin-left: 15px;
  border: none;
  background: #fe5366;
  color: #fff;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px 15px;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#fe5366')};
  }
`;

export const Table = styled.div`
  flex: 1;
  margin-top: 60px;
`;

export const TableContent = styled.div`
  flex: 1;
  width: 100%;
  /* height: 500px; */
  background: #fff;
  border-radius: 8px;
  margin-top: 10px;
  padding-top: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    li {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      padding: 15px 20px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  background: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  transition: 0.2s;

  &:hover {
    background: #3784f6;
    color: #fff;
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      padding: 15px 20px;
    }
  }
`;

export const FormContainer = styled(Form)`
  padding: 20px 10px;

  button {
    flex: 1;
    width: 100%;
    margin-top: 20px;
    padding: 15px 20px;
    border: none;
    background: #3784f6;
    color: #fff;
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#3784f6')};
    }
  }
`;

export const InputContainer = styled.div`
  margin-top: 30px;

  p {
    text-align: left;
    font-size: 13px;
    color: #707070;
    font-weight: 500;
    margin-bottom: 5px;
  }

  input {
    background: #f8f9fc;
    border-radius: 8px;
    padding: 16px;
    width: 420px;
    border: 2px solid #f8f9fc;
    color: #3784f6;
    display: flex;
    align-items: center;
  }

  button {
    flex: 1;
    width: 100%;
    margin-top: 20px;
    padding: 15px 20px;
    border: none;
    background: #3784f6;
    color: #fff;
    border-radius: 4px;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#3784f6')};
    }
  }
`;
