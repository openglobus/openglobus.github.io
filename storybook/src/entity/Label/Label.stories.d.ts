import { default as React } from '../../../node_modules/react';
import { StoryObj } from '@storybook/react';
import { LabelParams } from '..';

declare const meta: {
    component: React.FC<LabelParams>;
    title: string;
    argTypes: {
        face: {
            options: string[];
            control: {
                type: "select";
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Arabic: Story;
