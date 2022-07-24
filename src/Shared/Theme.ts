import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#685374',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
  },
});
