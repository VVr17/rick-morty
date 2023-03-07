import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

export const useUserGoogleData = (callback) => {
  const [user, setUser] = useState(null);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("codeResponse - includes Google token", codeResponse);
      setUser(codeResponse);
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          callback(null, res.data);
        })
        .catch((err) => callback(err, null));
    }
  }, [callback, user]);

  return { googleLogin };
};
