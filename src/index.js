import React, { StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import GlobalCssComponent from './config/globalCssComponent';
import theme from './config/theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalCssComponent />
      <App />
    </ChakraProvider>
  </StrictMode>
);
