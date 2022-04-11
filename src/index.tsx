import React from 'react';
import { createRoot } from 'react-dom/client';

import { Layout } from './layout';

const container = document.getElementById('budgeteer_app');

if (!container) {
  throw new Error('container not found');
}

const root = createRoot(container);

root.render(<Layout/>);
