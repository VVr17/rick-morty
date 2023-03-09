import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { getUserData } from "api/googleapi";
import { Box } from "components/Box/Box";
import Button from "components/UI-Kit/Button";
import { useUser } from "contexts/auth/authContext";
import { UserData } from "./AuthMenu.styled";

const AuthMenu = () => {
  const { isLoggedIn, user, onLogIn, onLogOut } = useUser();

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const response = await getUserData(codeResponse.access_token);
      const { email, given_name } = response.data;
      onLogIn({ email, name: given_name });
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  return (
    <Box display="flex" gridGap="8px" justifyContent="flex-end" flexGrow="1">
      {!isLoggedIn ? (
        <Button
          onClick={() => {
            googleLogin();
          }}
        >
          <FcGoogle />
          Sign in
        </Button>
      ) : (
        <>
          <UserData>{user.name}</UserData>
          <Button
            onClick={() => {
              onLogOut();
            }}
          >
            Log out
          </Button>
        </>
      )}
    </Box>
  );
};

export default AuthMenu;
