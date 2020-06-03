import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Layout } from './Layout';

describe('Layout', () => {
  it('should render a toolbar', () => {
    render(<Layout />);

    expect(screen.getByText(/Toolbar/)).toBeVisible();
  });

  it('should render a drawer', () => {
    render(<Layout />);

    expect(screen.getByText(/SideDrawer/)).toBeVisible();
  });

  it('should render a backdrop', () => {
    render(<Layout />);

    expect(screen.getByText(/Backdrop/)).toBeVisible();
  });

  it('should render children as the main landmark role', () => {
    render(<Layout>children</Layout>);

    const main = screen.getByRole('main');
    expect(main).toBeVisible();
    expect(within(main).getByText('children'));
  });
});
