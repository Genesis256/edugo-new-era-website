// src/__tests__/Button.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from '../components/common/Button'; // Adjust path if needed
import { describe, it, expect, vi } from 'vitest';

describe('Button Component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies the primary variant style by default', () => {
    render(<Button>Primary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /primary button/i });
    // This checks if a part of the expected class string for primary variant is present.
    // For more robust class checking, consider snapshot testing or more specific class assertions.
    expect(buttonElement).toHaveClass('bg-[var(--color-brand-primary)]');
  });

  it('applies a different variant style when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /secondary button/i });
    expect(buttonElement).toHaveClass('bg-[var(--color-brand-secondary)]');
    expect(buttonElement).not.toHaveClass('bg-[var(--color-brand-primary)]');
  });

  it('calls onClick handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn(); // Vitest's mocking function
    render(<Button onClick={handleClick}>Clickable</Button>);

    const buttonElement = screen.getByRole('button', { name: /clickable/i });
    await user.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
  });

  it('renders as a different element when asChild is true and a child is provided', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    // It should render an anchor tag, not a button tag, but with button styling
    const linkElement = screen.getByRole('link', { name: /link button/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveClass('bg-[var(--color-brand-primary)]'); // Check if button styles are applied
  });
});
