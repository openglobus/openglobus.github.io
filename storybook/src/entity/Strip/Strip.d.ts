import { LonLat, Strip as GlobusStrip, Vec3 } from '@openglobus/og';
import { IStripParams } from '@openglobus/og/lib/js/entity/Strip';
import * as React from "react";
export interface StripParams extends Omit<IStripParams, 'path'> {
    path?: [Vec3, Vec3][] | [LonLat, LonLat][] | [[number, number, number], [number, number, number]][];
    readonly _addStrip?: (billboard: GlobusStrip) => void;
    readonly _removeStrip?: (billboard: GlobusStrip) => void;
}
declare const Strip: React.FC<StripParams>;
export { Strip };
