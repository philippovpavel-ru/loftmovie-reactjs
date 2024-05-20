import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchResults } from "src/api/api";

const isMovie = (entity) => "year" in entity;

const getActorsFromResults = (results) => {
  if (!results) return [];

  return results.filter((result) => !isMovie(result));
};

const getMoviesFromResults = (results) => {
  if (!results) return [];

  return results.filter((result) => isMovie(result));
};

export function useSearch() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("searchText");
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getResults = async () => {
    setIsLoading(true);

    if (searchText !== "") {
      const results = await getSearchResults(searchText);

      const actors = getActorsFromResults(results);
      const movies = getMoviesFromResults(results);

      setData({
        all: results,
        actors,
        movies,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getResults();
  }, [searchText]);

  return {
    isLoading,
    data,
  };
}
