import React from 'react';
import PropTypes from 'prop-types';
import { getCharacterInfo } from 'helpers/getCharacterInfo';
import {
  CharacterInfoStyled,
  KeyStyled,
  ValueStyled,
} from './CharacterInfo.styled';

const CharacterInfo = ({ info }) => {
  const characterInfo = getCharacterInfo({ ...info });

  return (
    <CharacterInfoStyled>
      {characterInfo &&
        characterInfo.map(({ key, value }) => (
          <li key={key}>
            <KeyStyled>{key}</KeyStyled>
            <ValueStyled>{value}</ValueStyled>
          </li>
        ))}
    </CharacterInfoStyled>
  );
};

CharacterInfo.propTypes = {
  info: PropTypes.shape({
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterInfo;
