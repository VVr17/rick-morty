import React from "react";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import { ButtonSubmit, FormStyled } from "./Search.styled";

const Search = ({ onSubmit, handleChange, value }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <input
        name="query"
        type="text"
        placeholder="Filter by name..."
        onChange={handleChange}
        value={value}
      />
      <ButtonSubmit type="submit" aria-label="search submit">
        <BsSearch />
      </ButtonSubmit>
    </FormStyled>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Search;
