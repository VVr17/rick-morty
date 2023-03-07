import React from 'react';
import mobileImg from 'assets/images/title-mobile.png';
import desktopImg from 'assets/images/title-desktop.png';
import { useWindowSize } from 'hooks/useWindowSize';
import { Box } from 'components/Box/Box';
import { TitleStyled } from './Title.styled';

const Title = () => {
  const { isMobile } = useWindowSize();

  return (
    <Box maxWidth={['312px', '312px', '600px']} mx="auto" mb="16px">
      <TitleStyled>Rick and Morty</TitleStyled>
      <img
        src={isMobile ? mobileImg : desktopImg}
        alt="rick and morty"
        width={isMobile ? '312px' : '600px'}
        height={isMobile ? '104px' : '200px'}
      />
    </Box>
  );
};

export default Title;
