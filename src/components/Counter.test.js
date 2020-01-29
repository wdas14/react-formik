import React from 'react';
import { render, getByText } from '@testing-library/react';
import Counter from './Counter';

it("App loads with initial state of 0", () => {
    const { container } = render(<Counter />);
    const countValue = getByText(container, "You clicked 0 times");
    expect(countValue.textContent).toBe("You clicked 0 times");
}); 