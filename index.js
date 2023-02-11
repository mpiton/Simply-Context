"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplyUseData = exports.simplyProvider = void 0;
const react_1 = __importDefault(require("react"));
const defaultContextProps = {
    state: {},
    setState: () => { },
};
const simplyContext = react_1.default.createContext(defaultContextProps);
const simplyProvider = ({ children, initialState = {}, }) => {
    const [state, setState] = react_1.default.useState(initialState);
    return (react_1.default.createElement(simplyContext.Provider, { value: { state, setState } }, children));
};
exports.simplyProvider = simplyProvider;
const simplyUseData = (key) => {
    const context = react_1.default.useContext(simplyContext);
    if (!context) {
        throw new Error(`useData must be used within a Provider`);
    }
    return [context.state[key], context.setState];
};
exports.simplyUseData = simplyUseData;
exports.default = {
    simplyProvider: exports.simplyProvider,
    simplyUseData: exports.simplyUseData,
};
