import React, { useEffect, useContext } from "react";
import TestAPI from "../../api/test";
import AuthContext from "../../contexts/auth";

const Index = () => {
  let authContext = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      let {
        auth: { uid, token, client }
      } = authContext;

      try {
        let user = await TestAPI.me(uid, token, client);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [authContext]);

  return (
    <div>Open the console to verify the user data (authenticated endpoint)</div>
  );
};

export default Index;
