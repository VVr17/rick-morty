import React from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "components/CharacterInfo";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";
import { useGetCharacterByIdQuery } from "redux/api/characterApi";
import {
  ImageStyled,
  InformationStyled,
  Title,
  WrapperStyled,
} from "./Details.styled";

const Details = () => {
  const { characterId } = useParams(); // to get Id from URL params
  const {
    data: character,
    isFetching,
    error,
  } = useGetCharacterByIdQuery(characterId);

  if (isFetching) {
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
