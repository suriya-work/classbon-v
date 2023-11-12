import { Meta, StoryObj } from "@storybook/react";
import { Loading } from "./loading";

const meta: Meta<typeof Loading> = {
    component: Loading,
    tags: ["autodocs"],
    decorators: [
        (Story) => {
            document.documentElement.classList.add('dark');
            return <Story />;
        },
    ],
}

export default meta;
type Story = StoryObj<typeof Loading>;
export const LoadingSpinner: Story = {
    render: () => (
        <>
            <Loading size="tiny" />
            <Loading size="small" />
            <Loading size="normal" />
            <Loading size="large" />
        </>
    ),
};

export const LoadingSpinnerWithColors: Story = {
    render: () => (
        <>
            <Loading size="normal" variant="neutral"></Loading>
            <Loading size="normal" variant="primary"></Loading>
            <Loading size="normal" variant="secondary"></Loading>
            <Loading size="normal" variant="accent"></Loading>
            <Loading size="normal" variant="success"></Loading>
            <Loading size="normal" variant="error"></Loading>
            <Loading size="normal" variant="info"></Loading>
            <Loading size="normal" variant="warning"></Loading>
        </>
    ),
};

export const LoadingRing: Story = {
    render: () => (
        <>
            <Loading size="tiny" type="ring"></Loading>
            <Loading size="small" type="ring"></Loading>
            <Loading size="normal" type="ring"></Loading>
            <Loading size="large" type="ring"></Loading>
        </>
    ),
};

export const LoadingRingWithColors: Story = {
    render: () => (
        <>
            <Loading size="normal" type="ring" variant="neutral"></Loading>
            <Loading size="normal" type="ring" variant="primary"></Loading>
            <Loading size="normal" type="ring" variant="secondary"></Loading>
            <Loading size="normal" type="ring" variant="accent"></Loading>
            <Loading size="normal" type="ring" variant="success"></Loading>
            <Loading size="normal" type="ring" variant="error"></Loading>
            <Loading size="normal" type="ring" variant="info"></Loading>
            <Loading size="normal" type="ring" variant="warning"></Loading>
        </>
    ),
};
