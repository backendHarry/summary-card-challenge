import { Global } from '@emotion/react';

const GlobalCssComponent = () => (
  <Global
    styles={`
        /* Custom Font */
        @font-face {
            font-family: 'defaultFont';
            src: url('./fonts/HankenGrotesk-Medium.ttf');
          }

        body {
            font-size: 18px;
            background: #fff;
        }
    `}
  />
);

export default GlobalCssComponent;
