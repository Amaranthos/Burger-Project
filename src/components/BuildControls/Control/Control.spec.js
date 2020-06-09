import React from 'react';
import { render, screen } from '@testing-library/react';
import { Control } from './Control';

describe('Control', () => {
  it('should display the label', () => {
    render(<Control label="Text" />);

    expect(screen.getByText(/Text/)).toBeVisible();
  });
  it("should display the 'less' button", () => {
    render(<Control label="Text" />);

    expect(screen.getByText(/Less/)).toBeVisible();
  });
  it("should display the 'more' button", () => {
    render(<Control label="Text" />);

    expect(screen.getByText(/More/)).toBeVisible();
  });
});
