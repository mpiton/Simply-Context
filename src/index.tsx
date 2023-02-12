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

interface SimplyContextProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

interface SimplyProviderProps extends React.PropsWithChildren<{}> {
  initialState?: State;
}

const defaultContextProps: SimplyContextProps = {
  state: {},
  setState: () => {},
};

const SimplyContext = React.createContext(defaultContextProps);

export const SimplyProvider: React.FC<SimplyProviderProps> = ({
  children,
  initialState = {},
}) => {
  if (typeof initialState !== "object") {
    throw new Error("The initial state must be an object");
  }

  const [state, setState] = React.useState<State>(initialState);

  const memoizedValue = React.useMemo(
    () => ({
      state,
      setState: (updatedState: State) => {
        if (typeof updatedState !== "object") {
          throw new Error("The updated state must be an object");
        }
        setState((prevState) => ({ ...prevState, ...updatedState }));
      },
    }),
    [state]
  );

  return (
    <SimplyContext.Provider value={memoizedValue}>
      {children}
    </SimplyContext.Provider>
  );
};

export const SimplyUseData = (key: string) => {
  const context = React.useContext(SimplyContext);

  if (!context) {
    throw new Error(`useData must be used within a Provider`);
  }
  if (typeof context.state !== "object") {
    throw new Error(
      `The state must be an object, but got ${typeof context.state}`
    );
  }

  const [value, setValue] = React.useState(context.state[key]);

  React.useEffect(() => {
    setValue(context.state[key]);
  }, [context.state, key]);

  return [
    value,
    (updatedValue: any) => context.setState({ [key]: updatedValue }),
  ];
};

export default {
  SimplyProvider,
  SimplyUseData,
};
