import React from "react";

// This is a hack to allow the use of custom elements in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      simplyProvider: any;
    }
  }
}

// This is the type of the state object
type State = {
  [key: string]: any;
};

// Interface for the context
interface SimplyContextProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

// Interface for the provider
interface SimplyProviderProps extends React.PropsWithChildren<{}> {
  initialState?: State;
}

// Default context props
const defaultContextProps: SimplyContextProps = {
  state: {},
  setState: () => {},
};

// Create the context
const simplyContext = React.createContext(defaultContextProps);

// Create the provider
export const SimplyProvider: React.FC<SimplyProviderProps> = ({
  children,
  initialState = {},
}) => {
  const [state, setState] = React.useState<State>(initialState);

  return (
    <simplyContext.Provider value={{ state, setState }}>
      {children}
    </simplyContext.Provider>
  );
};

// Create the hook
export const simplyUseData = (key: string) => {
  const context = React.useContext(simplyContext);

  if (!context) {
    throw new Error(`useData must be used within a Provider`);
  }

  return [context.state[key], context.setState];
};

export default {
  simplyProvider,
  simplyUseData,
};
