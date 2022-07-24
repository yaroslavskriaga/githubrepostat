import { Theme } from '@mui/material';

export const useStylesLayout = (theme: Theme) => ({
  width: '100%',
  placeSelf: 'center',
  maxWidth: theme.breakpoints.values.lg,
});
