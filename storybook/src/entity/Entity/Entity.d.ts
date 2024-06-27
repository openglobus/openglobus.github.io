import { IEntityParams } from '@openglobus/og/lib/js/entity/Entity';
import { EventCallback } from '@openglobus/og/lib/js/Events';
import { Billboard, Geometry, GeoObject, Label, Polyline, Strip } from '..';
import * as React from "react";
type EntityChildElement = React.ReactElement<typeof Billboard | typeof GeoObject | typeof Label | typeof Polyline | typeof Strip | typeof Geometry>;
export interface EntityParams extends IEntityParams {
    children?: EntityChildElement | EntityChildElement[];
    visibility?: boolean;
    lon: number;
    lat: number;
    alt: number;
    onDraw?: EventCallback;
}
declare const Entity: React.FC<EntityParams>;
export { Entity };
