import { StoryObj } from '@storybook/react';
import { VectorProps } from './Vector';
import { default as React } from '../../../node_modules/react';

declare const meta: {
    title: string;
    component: React.FC<VectorProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
