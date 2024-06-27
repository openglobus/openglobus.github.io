import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';
import { GeoObjectParams } from '..';

declare const meta: {
    component: React.FC<GeoObjectParams>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Untextured: Story;
export declare const Barrel: Story;
