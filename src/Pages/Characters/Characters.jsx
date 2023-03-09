import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getCharacters } from "api/getCharacters";
import CharactersList from "components/CharactersList";
import Loader from "components/Loader";
import Search from "components/UI-Kit/Search";
import Title from "components/Title";
import Paginate from "components/Pagination/Pagination";
import { topScroll } from "helpers/topScroll";

const Characters = () => {
  const location = useLocation();
  // to get search query and handle search
  const [searchParams, setSearchParams] = useSearchParams();

  // to define Url search params
  const query = searchParams.get("name");
  const pageUrl = searchParams.get("page");
  const [inputValue, setInputValue] = useState(query || "");

  // state for characters
  const [characters, setCharacters] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //state for pagination
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(+pageUrl || 1);

  // to fetch characters due to page or query "name"
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const { data, error, pages } = await getCharacters(query, page);
      setCharacters(data);
      setError(error);
      setTotalPages(pages);
      setIsLoading(false);
    };

    getData();
  }, [query, page]);

  // submit Search to request Api
  const onSubmit = (event) => {
    event.preventDefault();
    const { query } = event.target.elements;
    const queryTrimmed = query.value.trim();

    // to drop pages for new Api request
    if (page > 1) setPage(1);

    if (searchParams.has("name") && !queryTrimmed) {
      setSearchParams({ page: 1 });
      return;
    }

    setSearchParams({ page: 1, name: queryTrimmed });
  };

  // handle query search
  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  // handle pagination
  const handlePageClick = (e) => {
    const pageToTurn = e.selected + 1;
    setPage(pageToTurn);

    if (query) {
      setSearchParams({ page: pageToTurn, name: query });
      return;
    }

    setSearchParams({ page: pageToTurn });
    topScroll();
  };

  return (
    <>
      <Title />
      <Search
        onSubmit={onSubmit}
        handleChange={handleSearchChange}
        value={inputValue}
      />

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

      {totalPages > 1 && !isLoading && characters?.length > 0 && (
        <Paginate
          total={totalPages}
          handlePageClick={handlePageClick}
          page={page}
        />
      )}
    </>
  );
};

export default Characters;
