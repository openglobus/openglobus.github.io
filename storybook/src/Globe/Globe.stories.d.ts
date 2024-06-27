import { StoryObj } from '@storybook/react';

declare const meta: {
    component: import('../../node_modules/react').FC<import('./Globe').GlobusProps>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const AtmosphereEnabled: Story;
