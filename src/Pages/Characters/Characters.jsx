import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CharactersList from "components/CharactersList";
import Loader from "components/Loader";
import Search from "components/UI-Kit/Search";
import Title from "components/Title";
import Paginate from "components/Pagination/Pagination";
import { topScroll } from "helpers/topScroll";
import ErrorMessage from "components/ErrorMessage";
import { useSortedCharacters } from "hooks/useSortedCharacters";

const Characters = () => {
  const location = useLocation();

  // to get search query and handle search
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
      {isFetching && <Loader />}
      {error && <ErrorMessage />}

      {data && !error && data.characters?.length > 0 && (
        <CharactersList
          characters={data.characters}
          previousLocation={location.pathname + location.search}
        />
      )}

      {totalPages > 1 &&
        !isFetching &&
        data.characters?.length > 0 &&
        !error && (
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
