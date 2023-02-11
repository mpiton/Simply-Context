import React from "react";
import { simplyProvider, simplyUseData } from "simply-context";

const Login = () => {
  const [setUsername] = simplyUseData("username");

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

const Welcome = () => {
  const [username] = simplyUseData("username");

  return <h1>Welcome, {username}</h1>;
};

const App = () => (
  <simplyProvider>
    <Login />
    <Welcome />
  </simplyProvider>
);
