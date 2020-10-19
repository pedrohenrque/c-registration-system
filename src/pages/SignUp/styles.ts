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

export const FormContainer = styled(Form)`
  margin-top: 50px;
  width: 500px;
  padding: 25px 30px;
  border-radius: 8px;
  background: #fff;

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
