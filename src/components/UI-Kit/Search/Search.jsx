import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSubmit, FormStyled } from './Search.styled';
import { BsSearch } from 'react-icons/bs';

const Search = ({ onSubmit }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <input name="query" type="text" placeholder="Filter by name..." />
      <ButtonSubmit type="submit" aria-label="search submit">
        <BsSearch />
      </ButtonSubmit>
    </FormStyled>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
