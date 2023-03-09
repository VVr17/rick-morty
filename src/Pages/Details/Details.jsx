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

const Details = () => {
  const { characterId } = useParams(); // to get Id from URL params
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCharacterDetails = async () => {
      setIsLoading(true);
      const { data, error } = await getCharacterById(characterId);
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
  }, [characterId]);

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
