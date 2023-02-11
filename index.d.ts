import React from "react";
type State = {
    [key: string]: any;
};
interface SimplyProviderProps {
    initialState?: State;
    children: React.ReactNode;
}
export declare const simplyProvider: React.FC<SimplyProviderProps>;
export declare const simplyUseData: (key: string) => any[];
export {};
