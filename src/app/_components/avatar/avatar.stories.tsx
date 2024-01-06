import { Meta, StoryObj } from "@storybook/react";
import { Avatar} from ".";
import results from '../../../../.jest-test-results.json';
import { withTests } from '@storybook/addon-jest';
const meta: Meta<typeof Avatar> = {
    component: Avatar,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
}

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Tests: Story = {
    render: (args) => (
        <Avatar {...args}>Click here</Avatar>
    )
}

Tests.decorators = [withTests({results})]

export const BrandColors: Story = {
    render: () => (
        <>
          
        </>
    ),
};
