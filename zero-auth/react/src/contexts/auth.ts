import { createContext } from "react";

export default createContext({
  auth: {
    uid: "",
    token: "",
    client: ""
  },

  signin(auth: { uid: string; token: string; client: string }) {
    this.auth = auth;
  },

  signout() {
    // @ts-ignore
    this.auth = {};
  }
});
