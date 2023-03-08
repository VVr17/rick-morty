import React from "react";
import { useLocation } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Box } from "components/Box/Box";
import Container from "components/Container";
import { getUserData } from "api/googleapi";
import { LinkStyled, RegisterButtonStyled } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname !== "/";

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const response = await getUserData(codeResponse.access_token);
      console.log("response", response);
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

          <RegisterButtonStyled
            onClick={() => {
              googleLogin();
            }}
          >
            <FcGoogle />
            Sign in
          </RegisterButtonStyled>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
