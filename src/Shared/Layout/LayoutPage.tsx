import {
  Box, Container, useMediaQuery, useTheme,
} from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useStylesLayout } from './Styles/LayoutPageStyles';

type LayoutInterface = PropsWithChildren<{
  centred: boolean;
}>;

export function LayoutPage({ children, centred }: LayoutInterface) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Box display="flex" minHeight="100vh" flexDirection="column">
      <Box
        display="flex"
        alignItems={centred ? 'center' : 'initial'}
        flexGrow={1}
        mx={isMobile ? 2 : 4}
        sx={useStylesLayout(theme)}
      >
        <Container component="main" maxWidth="lg">
          <Box>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
}
