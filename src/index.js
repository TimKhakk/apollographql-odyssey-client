import React from 'react';
import { render } from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { Apollo } from './Apollo';

render(
  <Apollo>
    <GlobalStyles />
    <Pages />
  </Apollo>,
  document.getElementById('root'),
);
