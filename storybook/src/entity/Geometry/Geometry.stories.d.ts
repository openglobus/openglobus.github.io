import { StoryObj } from '@storybook/react';
import { GeometryParams } from '..';

declare const meta: {
    component: <T extends keyof typeof import('@openglobus/og').GeometryTypeEnum>(params: GeometryParams<T>) => null;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Polygon: Story;
export declare const Point: Story;
export declare const Line: Story;
