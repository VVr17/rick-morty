import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CharactersList from "components/CharactersList";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";
import Search from "components/UI-Kit/Search";
import Title from "components/Title";
import Paginate from "components/Pagination/Pagination";
import ScrollUpButton from "components/UI-Kit/ScrollUpButton";
import { topScroll } from "helpers/topScroll";
import { useSortedCharacters } from "hooks/useSortedCharacters";

const Characters = () => {
  const location = useLocation();

  // to get Url search params
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("name");
  const pageUrl = searchParams.get("page");

  const [page, setPage] = useState(+pageUrl || 1);
  const [inputValue, setInputValue] = useState(query || "");

  const { data, error, isFetching } = useSortedCharacters({ query, page }); // get sorted char
  const totalPages = data?.pages || 1;

  // submit Search to request Api
  const onSubmit = (event) => {
    event.preventDefault();
    const { query } = event.target.elements;
    const queryTrimmed = query.value.trim();

    // to drop pages for new Api request
    if (page > 1) setPage(1);

    if (searchParams.has("name") && !queryTrimmed) {
      setSearchParams();
      return;
    }

    setSearchParams({ name: queryTrimmed });
  };

  // handle query search
  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  // handle pagination
  const handlePageClick = (event) => {
    const pageToTurn = event.selected + 1;
    setPage(pageToTurn);

    if (query) {
      setSearchParams({ page: pageToTurn, name: query });
      topScroll();
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
      {isFetching && <Loader />}
      {error && <ErrorMessage />}

      {data?.characters && !error && (
        <CharactersList
          characters={data.characters}
          previousLocation={location.pathname + location.search}
        />
      )}

      {totalPages > 1 && !error && (
        <Paginate
          total={totalPages}
          handlePageClick={handlePageClick}
          page={page}
        />
      )}
      <ScrollUpButton />
    </>
  );
};

export default Characters;
