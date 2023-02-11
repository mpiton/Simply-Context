import React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            simplyProvider: any;
        }
    }
}
type State = {
    [key: string]: any;
};
interface SimplyProviderProps extends React.PropsWithChildren<{}> {
    initialState?: State;
}
export declare const SimplyProvider: React.FC<SimplyProviderProps>;
export declare const simplyUseData: (key: string) => any[];
declare const _default: {
    SimplyProvider: React.FC<SimplyProviderProps>;
    simplyUseData: (key: string) => any[];
};
export default _default;
