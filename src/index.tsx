import React from "react";

type State = {
  [key: string]: any;
};

interface SimplyContextProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

interface SimplyProviderProps {
  initialState?: State;
  children: React.ReactNode;
}

const defaultContextProps: SimplyContextProps = {
  state: {},
  setState: () => {},
};

const simplyContext = React.createContext(defaultContextProps);

export const simplyProvider: React.FC<SimplyProviderProps> = ({
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
