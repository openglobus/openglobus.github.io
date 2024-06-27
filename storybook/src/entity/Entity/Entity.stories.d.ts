import { StoryObj } from '@storybook/react';
import { EntityParams } from '..';
import { default as React } from '../../../node_modules/react';

declare const meta: {
    component: React.FC<EntityParams>;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
