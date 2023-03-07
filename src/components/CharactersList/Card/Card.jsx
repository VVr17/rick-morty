import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ImageStyled, Text, Title } from './Card.styled';

const Card = ({ image, name, species }) => {
  return (
    <>
      <ImageStyled src={image} alt={name} width="312px" height="232px" />
      <Box px="16px" py="12px">
        <Title>{name}</Title>
        <Text>{species}</Text>
      </Box>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Card;
