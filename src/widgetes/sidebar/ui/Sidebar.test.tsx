import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Widgetes Test Sidebar', () => {
  test('renders text', () => {
    render(<Sidebar />);
    const toggle = screen.getByTestId('toggle-sidebar');
    fireEvent.click(toggle);
  });
});
