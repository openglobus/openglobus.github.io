import { StoryObj } from '@storybook/react';
import { default as React } from '../../../node_modules/react';
import { GeoImageProps } from '.';

declare const meta: {
    title: string;
    component: React.FC<GeoImageProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Kilimanjaro: Story;
export declare const Italy: Story;
