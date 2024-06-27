import { Billboard as GlobusBillboard } from '@openglobus/og';
import { IBillboardParams } from '@openglobus/og/lib/js/entity/Billboard';
import * as React from "react";
export interface BillboardParams extends IBillboardParams {
    name?: string;
    readonly _addBillboard?: (billboard: GlobusBillboard) => void;
    readonly _removeBillboard?: (billboard: GlobusBillboard) => void;
}
declare const Billboard: React.FC<BillboardParams>;
export { Billboard };
