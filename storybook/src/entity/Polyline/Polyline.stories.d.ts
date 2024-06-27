import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';
import { PolylineParams } from '..';

declare const meta: {
    component: React.FC<PolylineParams>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
