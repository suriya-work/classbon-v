import { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";
import results from '../../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
const meta: Meta<typeof Progress> = {
    component: Progress,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
}

export default meta;

type Story = StoryObj<typeof Progress>;

export const Tests: Story = {
    render: (args) => (
        <Progress {...args}>Click here</Progress>
    )
}

Tests.decorators = [withTests({results})]

export const BrandColors: Story = {
    render: () => (
        <>
            <Progress value={95} variant="neutral" />
            <Progress value={75} variant="primary" />
            <Progress value={75} variant="secondary" />
            <Progress value={55} variant="accent" />
            <Progress value={100} variant="ghost" />
        </>
    ),
};
