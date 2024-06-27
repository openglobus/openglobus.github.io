import { IGeoVideoParams } from '@openglobus/og';

export interface GeoVideoProps extends IGeoVideoParams {
    name: string;
    children?: never;
}
declare const GeoVideo: React.FC<GeoVideoProps>;
export { GeoVideo };
