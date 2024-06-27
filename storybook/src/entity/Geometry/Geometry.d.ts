import { Geometry as GlobusGeometry } from '@openglobus/og';
import { GeometryTypeEnum, GeometryTypeToCoordinates, IGeometryParams } from '@openglobus/og/lib/js/entity/Geometry';

export interface GeometryParamsExtended<T extends keyof typeof GeometryTypeEnum = keyof typeof GeometryTypeEnum> extends Omit<IGeometryParams, 'style'> {
    readonly type: T;
    readonly coordinates: GeometryTypeToCoordinates[T];
    readonly _addGeometry?: (geometry: GlobusGeometry) => void;
    readonly _removeGeometry?: (geometry: GlobusGeometry) => void;
}
export type GeometryParams<T extends keyof typeof GeometryTypeEnum = keyof typeof GeometryTypeEnum> = Omit<GeometryParamsExtended<T>, 'style'> & Partial<IGeometryParams['style']>;
declare const Geometry: <T extends keyof typeof GeometryTypeEnum>(params: GeometryParams<T>) => null;
export { Geometry };
