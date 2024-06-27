import { StoryObj } from '@storybook/react';
import { default as React } from '../../../node_modules/react';
import { XYZProps } from './XYZ';

declare const meta: {
    title: string;
    component: React.FC<XYZProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const OpenStreetMap: Story;
export declare const Satellites: Story;
