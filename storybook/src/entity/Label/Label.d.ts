import { Label as GlobusLabel } from '@openglobus/og';
import { ILabelParams } from '@openglobus/og/lib/js/entity/Label';
import * as React from "react";
export interface LabelParams extends ILabelParams {
    name?: string;
    opacity?: number;
    readonly _addLabel?: (billboard: GlobusLabel) => void;
    readonly _removeLabel?: (billboard: GlobusLabel) => void;
}
declare const Label: React.FC<LabelParams>;
export { Label };
