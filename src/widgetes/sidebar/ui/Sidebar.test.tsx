import React from 'react';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Widgetes Test Sidebar', () => {
  test('renders text', () => {
    componentRender(<Sidebar />);
    expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
  });
});
