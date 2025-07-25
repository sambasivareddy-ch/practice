import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe("Counter", () => {
    it("Count initial value", () => {
        render(<Counter initialState={0} />);
        const initialValue = screen.getByTestId('count').innerHTML;
        expect(parseInt(initialValue)).toBe(0);
    })
})

describe("Increment Button", () => {
    it("Increment button testng", async () => {
        render(<Counter initialState={2} />);
        const button = await screen.findByRole('button', { name: 'Increment' });
        fireEvent.click(button);

        const value = screen.getByTestId('count').innerHTML;
        expect(parseInt(value)).toBe(3);
    })
})