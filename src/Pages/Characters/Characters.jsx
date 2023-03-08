import React, { useEffect, useState } from "react";
import CharactersList from "components/CharactersList";
import Title from "components/Title";
import Search from "components/UI-Kit/Search";
import Loader from "components/Loader";
import { useLocation, useSearchParams } from "react-router-dom";
import { getCharacters } from "api/getCharacters";
import { toast } from "react-toastify";

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get("name");

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data, error } = await getCharacters(query);
      setCharacters(data);
      setError(error);
      setIsLoading(false);
    };

    getData();
  }, [query]);

  // submit Search to request Api
  const onSubmit = (event) => {
    event.preventDefault();
    const { query } = event.target.elements;
    const queryTrimmed = query.value.trim();

    setSearchParams({ name: queryTrimmed });
    event.target.reset();
  };

  return (
    <>
      <Title />
      <Search onSubmit={onSubmit} />

      {isLoading && <Loader />}
      {error && (
        <p>
          Oops, something went wrong. Please, try again or change your request
        </p>
      )}
      {characters?.length > 0 && (
        <CharactersList
          characters={characters}
          previousLocation={location.pathname + location.search}
        />
      )}
    </>
  );
};

export default Characters;
