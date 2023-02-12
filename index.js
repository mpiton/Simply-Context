"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplyUseData = exports.SimplyProvider = void 0;
const react_1 = __importDefault(require("react"));
const defaultContextProps = {
    state: {},
    setState: () => { },
};
const SimplyContext = react_1.default.createContext(defaultContextProps);
const SimplyProvider = ({ children, initialState = {}, }) => {
    if (typeof initialState !== "object") {
        throw new Error("The initial state must be an object");
    }
    const [state, setState] = react_1.default.useState(initialState);
    const memoizedValue = react_1.default.useMemo(() => ({
        state,
        setState: (updatedState) => {
            if (typeof updatedState !== "object") {
                throw new Error("The updated state must be an object");
            }
            setState((prevState) => (Object.assign(Object.assign({}, prevState), updatedState)));
        },
    }), [state]);
    return (react_1.default.createElement(SimplyContext.Provider, { value: memoizedValue }, children));
};
exports.SimplyProvider = SimplyProvider;
const SimplyUseData = (key) => {
    const context = react_1.default.useContext(SimplyContext);
    if (!context) {
        throw new Error(`useData must be used within a Provider`);
    }
    if (typeof context.state !== "object") {
        throw new Error(`The state must be an object, but got ${typeof context.state}`);
    }
    const [value, setValue] = react_1.default.useState(context.state[key]);
    react_1.default.useEffect(() => {
        setValue(context.state[key]);
    }, [context.state, key]);
    return [
        value,
        (updatedValue) => context.setState({ [key]: updatedValue }),
    ];
};
exports.SimplyUseData = SimplyUseData;
exports.default = {
    SimplyProvider: exports.SimplyProvider,
    SimplyUseData: exports.SimplyUseData,
};
