import axios from "axios";
// This file follows rails `devise_token_auth` gem endpoints

const TestAPI = () => {
  // serverUrl could be passed as instance param, or hardcoded here, idk.
  const serverUrl = "http://localhost:3000";

  const me = async (uid: string, token: string, client: string) => {
    return axios
      .get(`${serverUrl}/me`, {
        headers: { uid, "access-token": `Bearer ${token}`, client }
      })
      .then(({ data }) => {
        return data;
      })
      .catch(errors => {
        throw new Error(errors);
      });
  };

  return {
    me
  };
};

export default TestAPI();
