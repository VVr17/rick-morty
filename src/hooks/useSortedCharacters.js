import { useGetCharactersQuery } from "redux/api/characterApi";

export const useSortedCharacters = ({ query, page }) => {
  const { data, error, isFetching } = useGetCharactersQuery({ query, page });

  if (!data) {
    return {
      data: null,
      error,
      isFetching,
    };
  }

  const { characters, pages } = data;

  const sortedCharacters = [...characters].sort((firstChar, nextChar) => {
    if (firstChar.name < nextChar.name) {
      return -1;
    }
    if (firstChar.name > nextChar.name) {
      return 1;
    }
    return 0;
  });

  return { data: { characters: sortedCharacters, pages }, error, isFetching };
};
