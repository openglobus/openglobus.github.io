import { Billboard, Entity, Geometry, GeoObject, Label, Polyline, Strip } from '@openglobus/og';
import { IVectorParams } from '@openglobus/og/lib/js/layer/Vector';
import { EventCallback } from '@openglobus/og/lib/js/Events';
import * as React from "react";
declare const VectorContext: React.Context<{
    addEntity: (entity: Entity) => void;
    removeEntity: (entity: Entity) => void;
    addBillboard: (entity: Entity, billboard: Billboard) => void;
    removeBillboard: (entity: Entity) => void;
    addGeoObject: (entity: Entity, geoObject: GeoObject) => void;
    removeGeoObject: (entity: Entity) => void;
    addLabel: (entity: Entity, geoObject: Label) => void;
    removeLabel: (entity: Entity) => void;
    addGeometry: (entity: Entity, geometry: Geometry) => void;
    removeGeometry: (entity: Entity) => void;
    addPolyline: (entity: Entity, polyline: Polyline) => void;
    removePolyline: (entity: Entity) => void;
    addStrip: (entity: Entity, strip: Strip) => void;
    removeStrip: (entity: Entity) => void;
}>;
type EntityElement = React.ReactElement<{
    type: typeof Entity;
}>;
export interface VectorProps extends IVectorParams {
    children?: EntityElement | EntityElement[];
    name: string;
    onMouseEnter?: EventCallback;
    onDraw?: EventCallback;
}
declare const Vector: React.FC<VectorProps>;
export { Vector, VectorContext };
