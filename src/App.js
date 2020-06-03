import React from 'react';
import { Layout } from './components';
import { BurgerBuilder } from './containers';

export const App = () => (
  <div>
    <Layout>
      <BurgerBuilder />
    </Layout>
  </div>
);
