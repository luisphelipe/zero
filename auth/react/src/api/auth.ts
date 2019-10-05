import axios from "axios";
// This file follows rails `devise_token_auth` gem endpoints

const AuthAPI = () => {
  // serverUrl could be passed as instance param, or hardcoded here, idk.
  const serverUrl = "http://localhost:3000/auth";

  const signup = async (
    email: string,
    password: string,
    passwordConfirmation: string
  ) => {
    return axios
      .post(`${serverUrl}/`, {
        email,
        password,
        passwordConfirmation
      })
      .then(res => {
        const uid = res.headers["uid"],
          token = res.headers["access-token"],
          client = res.headers["client"];
        return { uid, token, client };
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  const signin = async (email: string, password: string) => {
    return axios
      .post(`${serverUrl}/sign_in`, {
        email,
        password
      })
      .then(res => {
        const uid = res.headers["uid"],
          token = res.headers["access-token"],
          client = res.headers["client"];
        return { uid, token, client };
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };
  return {
    signup,
    signin
  };
};

export default AuthAPI();
