import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "components/CharacterInfo";
import { getCharacterById } from "api/getCharacterById";
import Loader from "components/Loader";
import {
  ImageStyled,
  InformationStyled,
  Title,
  WrapperStyled,
} from "./Details.styled";
import ErrorMessage from "components/ErrorMessage";

const Details = () => {
  const { characterId } = useParams(); // to get Id from URL params
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCharacterDetails = async () => {
      setIsLoading(true);
      const { data, error } = await getCharacterById(characterId);
      setCharacter(data);

      setError(error);
      setIsLoading(false);
    };

    getCharacterDetails();
  }, [characterId]);

  if (isLoading) {
    return <Loader />;
  }

  const { image, name, gender, status, origin, type, species } = character;

  return (
    <>
      {error && <ErrorMessage />}
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
