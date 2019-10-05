import React, { useState, useContext } from "react";

import AuthContext from "../../contexts/auth";
import AuthAPI from "../../api/auth";

import ErrorModal from "./ErrorModal";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

function Signin() {
  const authContext = useContext(AuthContext);

  let [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [loading, setLoading] = useState(false),
    [error, setError] = useState("");

  async function submitLogin(event: React.MouseEvent | void) {
    setLoading(true);
    if (event) event.preventDefault();

    let auth;

    try {
      auth = await AuthAPI.signin(email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }

    if (auth) authContext.signin(auth);
  }

  return (
    <Form>
      <Input
        type="text"
        placeholder="Email"
        onChange={event => setEmail(event.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        onChange={event => setPassword(event.target.value)}
        onKeyDown={event => {
          if (event.key === "Enter") {
            submitLogin();
          }
        }}
      />

      {loading ? (
        <Button disabled>Waiting server...</Button>
      ) : (
        <Button onClick={event => submitLogin(event)}>Sign In</Button>
      )}

      {error ? <ErrorModal error={error} close={() => setError("")} /> : ""}
    </Form>
  );
}

export default Signin;
