import { GeoObject as GlobusGeoObject } from '@openglobus/og';
import { IGeoObjectParams } from '@openglobus/og/lib/js/entity/GeoObject';
import * as React from "react";
export interface GeoObjectParams extends IGeoObjectParams {
    readonly _addGeoObject?: (geoObject: GlobusGeoObject) => void;
    readonly _removeGeoObject?: (geoObject: GlobusGeoObject) => void;
}
declare const GeoObject: React.FC<GeoObjectParams>;
export { GeoObject };
