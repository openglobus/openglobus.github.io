import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';
import { BillboardParams } from '..';

/**
 * This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera.
 */
declare const meta: {
    component: React.FC<BillboardParams>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const DifferentSrc: Story;
