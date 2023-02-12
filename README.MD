# Simply Context

[![npm version](https://badge.fury.io/js/simply-context.svg)](https://badge.fury.io/js/simply-context)
[![Build Status](https://travis-ci.org/justin-cotarla/simply-context.svg?branch=master)](https://travis-ci.org/justin-cotarla/simply-context)
[![Coverage Status](https://coveralls.io/repos/github/justin-cotarla/simply-context/badge.svg?branch=master)](https://coveralls.io/github/justin-cotarla/simply-context?branch=master)

A simple and easy-to-use context manager for React applications.

## Installation

To install Simply Context in your project, run the following command:

```bash
npm install simply-context
```

## Usage

First, import the `SimplyProvider` component and the `SimplyUseData` hook from the `simply-context` package:

```javascript
import { SimplyProvider, SimplyUseData } from "simply-context";
```

Then, wrap your root component with the simplyProvider component and pass in any initial state you would like to use:

```javascript
const App = () => {
  return (
    <SimplyProvider initialState={{ username: "" }}>
      {/* your app components here */}
    </SimplyProvider>
  );
};
```

Next, you can use the SimplyUseData hook anywhere in your app to access and modify the context data:

```javascript
const LoginForm = () => {
  const [username, setUsername] = SimplyUseData("username");

  const usernameRef = React.useRef <HTMLInputElement>(null);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // do something with the username
    if (usernameRef.current) {
      let name = usernameRef.current.value;
      setUsername(name);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="username" type="text" value={username} ref={usernameRef} />
      <button type="submit">Login</button>
    </form>
  );
};
```

## API

### SimplyProvider

The `SimplyProvider` component is a higher-order component that provides the context data and setter functions to its children components.

#### Props

- `initialState` (optional): an object that represents the initial state of the context data.

### SimplyUseData

The SimplyUseData hook is a hook that allows you to access and modify the context data from anywhere in your app.

#### Arguments

- `key`: a string that represents the key of the context data you would like to access.

#### Returns

An array containing the value of the context data at the given key and a function that allows you to modify the context data.

## Examples

For more examples and use cases of Simply Context, check out the example folder in this repository.

## License

Simply Context is released under the MIT license. See LICENSE for details.

## Contributing

Contributions are welcome! Please see CONTRIBUTING for details.

## Credits

Simply Context is maintained by Mathieu Piton.
