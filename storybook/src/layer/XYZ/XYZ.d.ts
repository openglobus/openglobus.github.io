import { IXYZParams } from '@openglobus/og';

export interface XYZProps extends IXYZParams {
    name: string;
    children?: never;
}
declare const XYZ: React.FC<XYZProps>;
export { XYZ };
