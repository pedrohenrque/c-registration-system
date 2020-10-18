import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }

  body{
    background: #f5f6f8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, a {
    font: 16px 'Inter', sans-serif;
    color: #000;
  }
  #root {
    /* max-width: 900px; */
    /* padding: 40px 20px; */
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }

  button{
    cursor: pointer
  }
`;
