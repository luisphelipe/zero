import React, { useState, useContext } from "react";
import ErrorModal from "./ErrorModal";

import AuthContext from "../../contexts/auth";
import AuthAPI from "../../api/auth";

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

function Signup() {
  let [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [passwordConfirmation, setPasswordConfirmation] = useState(""),
    [loading, setLoading] = useState(false),
    [error, setError] = useState("");
  const authContext = useContext(AuthContext);

  async function submitSignup(event: React.MouseEvent | void) {
    setLoading(true);
    if (event) event.preventDefault();

    let auth;

    try {
      auth = await AuthAPI.signup(email, password, passwordConfirmation);
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
      />

      <Input
        type="password"
        placeholder="Password Confirmation"
        onChange={event => setPasswordConfirmation(event.target.value)}
      />

      {loading ? (
        <Button disabled>Waiting server...</Button>
      ) : (
        <Button onClick={event => submitSignup(event)}>Sign up</Button>
      )}

      {error ? <ErrorModal error={error} close={() => setError("")} /> : ""}
    </Form>
  );
}

export default Signup;
