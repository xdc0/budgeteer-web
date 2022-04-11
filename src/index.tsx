import { Provider } from 'react-redux';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Layout } from './layout';
import { store } from './store';

const container = document.getElementById('budgeteer_app');

if (!container) {
  throw new Error('container not found');
}

const root = createRoot(container);

function App (): JSX.Element {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
}


root.render(<App />);
