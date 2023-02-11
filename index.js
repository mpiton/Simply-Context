"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplyUseData = exports.SimplyProvider = void 0;
const react_1 = __importDefault(require("react"));
// Default context props
const defaultContextProps = {
    state: {},
    setState: () => { },
};
// Create the context
const simplyContext = react_1.default.createContext(defaultContextProps);
// Create the provider
const SimplyProvider = ({ children, initialState = {}, }) => {
    const [state, setState] = react_1.default.useState(initialState);
    return (react_1.default.createElement(simplyContext.Provider, { value: { state, setState } }, children));
};
exports.SimplyProvider = SimplyProvider;
// Create the hook
const simplyUseData = (key) => {
    const context = react_1.default.useContext(simplyContext);
    if (!context) {
        throw new Error(`useData must be used within a Provider`);
    }
    return [context.state[key], context.setState];
};
exports.simplyUseData = simplyUseData;
exports.default = {
    SimplyProvider: exports.SimplyProvider,
    simplyUseData: exports.simplyUseData,
};
