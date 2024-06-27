import { Globe } from '@openglobus/og';

import * as React from "react";
export interface GlobeContextProps {
    globe: Globe | null;
    setGlobe: React.Dispatch<React.SetStateAction<Globe | null>>;
}
export declare const GlobeContextProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useGlobeContext: () => GlobeContextProps;
