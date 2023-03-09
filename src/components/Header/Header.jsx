import React from "react";
import { useLocation } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import AuthMenu from "./AuthMenu";
import { Box } from "components/Box/Box";
import Container from "components/Container";
import { LinkStyled } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const isDetailsPage = location.pathname !== "/";

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
          <AuthMenu />
        </Box>
      </Container>
    </header>
  );
};

export default Header;
