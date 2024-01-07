import React from 'react';

import ThemeProvider from './globals/ThemeProviders';

import LandingPage from './container/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
