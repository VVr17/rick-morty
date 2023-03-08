import { getCharacterById } from "api/getCharacterById";
import { Box } from "components/Box/Box";
import CharacterInfo from "components/CharacterInfo";
import Loader from "components/Loader";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  ImageStyled,
  InformationStyled,
  Title,
  WrapperStyled,
} from "./Details.styled";

const Details = () => {
  const params = useParams(); // from <Route path="movies/:movieId" element={<MovieDetails />}>
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCharacterDetails = async () => {
      setIsLoading(true);
      const { data, error } = await getCharacterById(params.characterId);
      const {
        image,
        name,
        gender,
        status,
        origin: { name: origin },
        type,
        species,
      } = data;

      setCharacter({
        image,
        name,
        gender,
        status,
        origin,
        type,
        species,
      });

      setError(error);
      setIsLoading(false);
    };

    getCharacterDetails();
  }, [params.characterId]);

  if (isLoading) {
    return <Loader />;
  }

  const { image, name, gender, status, origin, type, species } = character;

  return (
    <>
      {error && <p>Oops, something went wrong. Please, try again</p>}
      {character && (
        <WrapperStyled>
          <ImageStyled src={image} alt={name} width="150px" height="148px" />
          <Title>{name}</Title>

          <InformationStyled>Information</InformationStyled>
          <CharacterInfo info={{ gender, status, species, origin, type }} />
        </WrapperStyled>
      )}
    </>
  );
};

export default Details;
