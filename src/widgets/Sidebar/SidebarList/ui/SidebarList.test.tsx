import React from 'react';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib';
import { SidebarList } from './SidebarList';

describe('Widgets Test Sidebar', () => {
  test('renders text', () => {
    componentRender(<SidebarList />);
    expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
  });
});
