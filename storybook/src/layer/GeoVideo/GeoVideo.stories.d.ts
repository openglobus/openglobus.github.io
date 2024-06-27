import { StoryObj } from '@storybook/react';
import { default as React } from '../../../node_modules/react';
import { GeoVideoProps } from '.';

declare const meta: {
    title: string;
    component: React.FC<GeoVideoProps>;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const USAWeather: Story;
export declare const Vegas: Story;
