import React from 'react';
import componentRender from 'shared/lib/halpers/componentRender/componentRender';
import MainPage from './MainPage';

describe('Example component', () => {
  test('renders text', () => {
    componentRender(<MainPage />);
  });
});
