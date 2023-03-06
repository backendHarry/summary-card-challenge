import { extendTheme } from '@chakra-ui/react';
import { fonts, fontWeights } from './fonts';
import { colors } from './colors';

const theme = extendTheme({
  fonts,
  fontWeights,
  colors,
});

export default theme;
