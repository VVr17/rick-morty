import { Box } from 'components/Box/Box';
import Container from 'components/Container';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled } from './Header.styled';
import { BiLeftArrowAlt, BiUser } from 'react-icons/bi';

const Header = () => {
  const location = useLocation(); // location according to URL
  const isNotHomePage = location.pathname !== '/';
  /* go back to previous page OR default Home page if location null*/
  const previousPage = useRef(location?.state?.from ?? '/');
  // console.log('previousPage', previousPage);

  return (
    <header>
      <Container>
        <Box display="flex">
          {isNotHomePage && (
            <LinkStyled to={previousPage.current}>
              <BiLeftArrowAlt />
              Go back
            </LinkStyled>
          )}

          <LinkStyled to="register" type="register">
            <BiUser />
            Register
          </LinkStyled>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
