import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
      padding: 0px;
      margin: 0px;
      outline: 0px;
      overflow-x: hidden;
      overflow-y: visible;
      box-sizing: border-box;
       font-family:'Barlow',sans-serif;

  }

  html,body, #root{
      height: 100vh;
      width: 100vw;
      background-color: #ddd;
  }

  button,a {
      cursor: pointer;
  }


  *,button,input{
       border: none;


  }
`
