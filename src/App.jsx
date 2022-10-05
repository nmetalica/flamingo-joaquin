import React from 'react';
import Router from './containers/Router';
import { AppProvider } from './contexts/AppProvider';
import { QueryProvider } from './contexts/QueryProvider';
import './styles/base.css';

const App = () => (
  <AppProvider>
    <QueryProvider>
      <div className="h-screen w-screen xl:overflow-hidden px-6">
        <Router />
      </div>
    </QueryProvider>
  </AppProvider>
);

export default App;
