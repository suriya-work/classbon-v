import { Meta, StoryObj } from "@storybook/react";
// import { Button } from "./button";
import { Badge } from ".";
import results from '../../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
const meta: Meta<typeof Badge> = {
    component: Badge,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
}

export default meta;

type Story = StoryObj<typeof Badge>;

export const Tests: Story = {
    render: (args) => (
        <Badge {...args}>Click here</Badge>
    )
}

Tests.decorators = [withTests({results})]

export const BrandColors: Story = {
    render: () => (
        <>
          
        </>
    ),
};
