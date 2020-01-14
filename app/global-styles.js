import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @-ms-viewport {
    width: device-width;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }

  body * {
    line-height: 1.13;
  }

  body,
  body input,
  body select,
  body button {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded,
  body.fontLoaded input,
  body.fontLoaded select,
  body.fontLoaded button {
    font-family: 'Work Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  input,
  select {
    font-size: 1em;
  }

  #app {
    background-color: #fff;
    height: 100%;
    width: 100%;
  }

  a {
    color: #000;
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    background-color: #f6f9fc;
    font-size: 18px;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  h1 {
    color: #32325d;
    font-weight: 400;
    line-height: 50px;
    font-size: 40px;
    margin: 20px 0;
    padding: 0;
  }

  .Checkout {
    margin: 0 auto;
    max-width: 800px;
    box-sizing: border-box;
    padding: 0 5px;
  }

  label {
    color: #6b7c93;
    font-weight: 300;
    letter-spacing: 0.025em;
  }

  input,
  .StripeElement {
    display: block;
    width: 100%;
    margin: 10px 0 20px 0;
    padding: 10px 14px;
    font-size: 1em;
    font-family: 'Source Code Pro', monospace;
    border: 1px solid #999;
    border-radius: .25rem;
    background: #fff;
    outline: 0;
    background: white;
  }

  input::placeholder {
    color: #000;
  }

  input:focus,
  .StripeElement--focus {
    transition: all 150ms ease;
  }

  .StripeElement.IdealBankElement,
  .StripeElement.PaymentRequestButton {
    padding: 0;
  }
`;

export default GlobalStyle;
