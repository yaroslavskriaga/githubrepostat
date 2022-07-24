import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './Shared/Theme';
import { LayoutPage } from './Shared/Layout/LayoutPage';
import { DashboardPage } from './Modules/Dashboard/DashboardPage';
import { GITHUB_AUTH_TOKEN } from './Shared/config';

function App() {
  if (!GITHUB_AUTH_TOKEN.length) return <div>You must setup GITHUB_AUTH_TOKEN at src/shared/config.ts in order to proceed!</div>;

  return (
    <ThemeProvider theme={theme}>
      <LayoutPage centred>
        <DashboardPage />
      </LayoutPage>
    </ThemeProvider>
  );
}

export default App;
