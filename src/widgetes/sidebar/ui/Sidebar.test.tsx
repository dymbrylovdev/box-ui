import React from 'react';
import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib';
import { Sidebar } from './Sidebar';

describe('Widgetes Test Sidebar', () => {
  test('renders text', () => {
    ComponentRender(<Sidebar />);
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument();
  });
});
