import { shade } from 'polished';
import styled from 'styled-components';

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
  max-width: 1280px;
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

export const Title = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 18px;
    font-weight: 400;
    color: #3784f6;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  margin: 20px 20px 0 0;
  h1 {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    margin-top: 5px;
    font-size: 12px;
    text-align: justify;
  }

  button {
    margin-top: 20px;
    background: #3784f6;
    color: #fff;
    padding: 10px 25px;
    border: none;
    border-radius: 20px;
    transition: 0.3s;

    &:hover {
      background: ${shade(0.2, '#3784f6')};
    }
  }
`;

export const Table = styled.div`
  flex: 1;
  margin-top: 20px;
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
