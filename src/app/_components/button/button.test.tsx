import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe('Button Component', () => {

    test('renders a default button', () => {
        const { getByText } = render(<Button>Click here</Button>)
        expect(getByText('Click here')).toBeInTheDocument();
    });

    // test isDisables
    test('disables the button when isDisabled prop is true', () => {
        render(<Button isDisable={true}>Click here</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    // test loading
    test('loading the button when isLoading prop is true', () => {
        render(<Button isLoading={true}>Click here</Button>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    // test variant
    test('applies the correct css class for different button variant', () => {
        const { rerender } = render(<Button variant="primary">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-primary');

        rerender(<Button variant="info">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-info');

        rerender(<Button variant="neutral">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-neutral');

        rerender(<Button variant="secondary">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-secondary');

        rerender(<Button variant="accent">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-accent');

        rerender(<Button variant="ghost">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-ghost');

        rerender(<Button variant="success">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-success');

        rerender(<Button variant="warning">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-warning');

        rerender(<Button variant="error">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-error');
    });

    // test size
    test('applies the correct css class for different button size', () => {
        const { rerender } = render(<Button size="large">Click Here</Button>)
        expect(screen.getByRole("button")).toHaveClass('btn-lg');

        rerender(<Button size="small">Click here</Button>);
        expect(screen.getByRole("button")).toHaveClass('btn-sm');
    });

    test('sho render button', () => {
        render(<Button variant="primary" isOutline={true} size="large" isDisable={true}>Click here</Button>)
        screen.debug()
    })
})