import { EventCallback } from '@openglobus/og/lib/js/Events';
import { IGlobeParams } from '@openglobus/og/lib/js/Globe';
import { Layer, Vector } from '../layer';
import * as React from "react";
type LayerChildren = React.ReactElement<{
    type: typeof Layer | typeof Vector;
}>;
export interface GlobusProps extends IGlobeParams {
    children?: LayerChildren | LayerChildren[];
    atmosphereEnabled?: boolean;
    sunActive?: boolean;
    onDraw?: EventCallback;
}
declare const Globe: React.FC<GlobusProps>;
export { Globe };
