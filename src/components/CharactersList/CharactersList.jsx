import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "./Card";
import { ListItemStyled, ListStyled } from "./CharactersList.styled";

const CharactersList = ({ characters, previousLocation }) => {
  return (
    <ListStyled>
      {characters.map(({ id, image, name, species }) => (
        <ListItemStyled key={id}>
          <Link to={`${id}`} state={{ from: `${previousLocation}` }}>
            {<Card image={image} name={name} species={species} />}
          </Link>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array.isRequired,
  previousLocation: PropTypes.string.isRequired,
};

export default CharactersList;
