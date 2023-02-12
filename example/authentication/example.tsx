import React from "react";
import { SimplyProvider, SimplyUseData } from "simply-context";

// * Login Component * //
const Login = () => {
  const [username, setUsername] = SimplyUseData("username");

  const usernameRef = React.useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usernameRef.current) {
      let name = usernameRef.current.value;
      setUsername(name);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input ref={usernameRef} name="username" type="text" />
      <button type="submit">Connection</button>
    </form>
  );
};

export default Login;

//*  Welcome Component *//
const Welcome = () => {
  const [username] = SimplyUseData("username");
  return <h1>Welcome, {username}</h1>;
};

export default Welcome;

// * App Component * //
const App = () => {
  return (
    <SimplyProvider initialState={{ username: "" }}>
      <Login />
      <Welcome />
    </SimplyProvider>
  );
};

export default App;
