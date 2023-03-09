import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { Box } from "components/Box/Box";
import Button from "components/UI-Kit/Button";
import { getUserData } from "api/googleapi";
import { login, logout } from "redux/user/userSlice";
import { selectUserState } from "redux/user/userSelectors";
import { UserData } from "./AuthMenu.styled";

const AuthMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(selectUserState);

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const response = await getUserData(codeResponse.access_token);
      const { email, given_name } = response.data;
      dispatch(login({ email, name: given_name }));
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
              dispatch(logout());
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
