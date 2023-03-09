import React from "react";
import { useLocation } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Box } from "components/Box/Box";
import Container from "components/Container";
import { getUserData } from "api/googleapi";
import { useUser } from "contexts/auth/authContext";
import { LinkStyled, RegisterButtonStyled, UserData } from "./Header.styled";

const Header = () => {
  const { isLoggedIn, user, onLogIn, onLogOut } = useUser();
  const location = useLocation();
  const isDetailsPage = location.pathname !== "/";

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const response = await getUserData(codeResponse.access_token);
      // console.log("response", response.data);
      const { email, name } = response.data;
      onLogIn({ email, name });
    },
    onError: (error) => {
      console.log("Login Failed:", error);
    },
  });

  return (
    <header>
      <Container>
        <Box display="flex">
          {isDetailsPage && (
            <LinkStyled to={location?.state?.from ?? "/"}>
              <BiLeftArrowAlt />
              Go back
            </LinkStyled>
          )}

          {!isLoggedIn ? (
            <RegisterButtonStyled
              onClick={() => {
                googleLogin();
              }}
            >
              <FcGoogle />
              Sign in
            </RegisterButtonStyled>
          ) : (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              gridGap="8px"
              justifyContent="flex-end"
              flexGrow="1"
            >
              <UserData>{user.email}</UserData>
              <button
                onClick={() => {
                  onLogOut();
                }}
              >
                Log out
              </button>
            </Box>
          )}
        </Box>
      </Container>
    </header>
  );
};

export default Header;
