import { createGlobalStyle } from 'styled-components';
import breakPoints from './Breakpoints';
export const GlobalStyle = createGlobalStyle`
 
   *::before,
   *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
   }
   
   :root {
      --color-primary: #eb2f64;
      --color-primary-light: #ff3366;
      --color-primary-dark: #ba265d;

      --color-secondary: #faf9f9;
      --color-secondary-light: #fff;

      --color-dark: #000000;
      --color-dark-light: #000313;

      // FONT VARIABLES
      --font-primary: 'Nunito', sans-serif;
      --font-display: 'Josefin Sans', sans-serif;
   }

  html,body{
      margin: 0;
      padding: 0;
  }
  html {
      box-sizing: border-box;
      @media only screen and (min-width: ${breakPoints.bp4k}) {
         font-size: 87.5% !important; // 14px
      }
      // 1200px - 1800px font size : 10px
      @media only screen and (max-width: ${breakPoints.bp4k}) {
         font-size: 68.5% !important; // 11px
      }
      // 800px - 1200px font size : 10px
      @media only screen and (max-width: ${breakPoints.bpLargest}) {
         font-size: 62.5% !important; // 10px
      }

      @media only screen and (max-width: ${breakPoints.bpMedium}) {
         font-size: 56.5% !important; // 9px
      }
      @media only screen and (max-width: ${breakPoints.bpSmall}) {
         font-size: 50% !important; // 8px
      }
      @media only screen and (max-width: 390px) {
         font-size: 43.75% !important; // 8px
      }
   }
   body{
      font-family: var(--font-primary);
      font-weight: 400;
      line-height: 1.6;

   }

   // NOTE: we can change the style of selected text. using the selection pseudo class
   ::selection {
      background-color: var(--color-primary);
      color: var(--color-secondary);
   }
`;
