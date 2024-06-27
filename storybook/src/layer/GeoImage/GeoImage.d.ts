import { IGeoImageParams } from '@openglobus/og';

export interface GeoImageProps extends IGeoImageParams {
    name: string;
    children?: never;
}
declare const GeoImage: React.FC<GeoImageProps>;
export { GeoImage };
