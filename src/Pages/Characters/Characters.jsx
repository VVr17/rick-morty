import React, { useEffect, useState } from 'react';
import CharactersList from 'components/CharactersList';
import Title from 'components/Title';
import Search from 'components/UI-Kit/Search';
import Loader from 'components/Loader';
import { getAllCharacters, getCharacterByName } from 'api';
import { useLocation, useSearchParams } from 'react-router-dom';

const Characters = () => {
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: search params
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  // get all characters at the page startup
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data, error } = await getAllCharacters();
  //     setCharacters(data);
  //     setError(error);
  //   };
  //   fetchData();
  // }, []);

  // get characters by Name
  useEffect(() => {
    const getAll = async () => {
      setIsLoading(true);
      const { data, error } = await getAllCharacters();
      setCharacters(data);
      setError(error);
      setIsLoading(false);
    };

    if (!query) getAll();

    const getCharactersByName = async query => {
      setIsLoading(true);
      const { data, error } = await getCharacterByName(query);

      // if (results.length === 0) {
      //   toast.warn(`There are no movies found. Please, try again`);
      // }
      setCharacters(data);
      setIsLoading(false);
    };
    getCharactersByName(query);
  }, [query]);

  // submit Search to request Api
  const onSubmit = event => {
    event.preventDefault();
    // const { query } = event.target.elements;
    // const queryTrimmed = query.value.trim();

    // if (!queryTrimmed) {
    //   toast.warn(`Query field cannot be empty`);
    //   return;
    // }

    // setSearchParams({ query: queryTrimmed });
    // event.target.reset();
  };

  return (
    <>
      <Title />
      <Search onSubmit={onSubmit} />

      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong. Please, try again</p>}
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
