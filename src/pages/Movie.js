import { Page } from "src/components/Page";
import { ActorCard } from "src/components/ActorCard";
import { List } from "src/components/List";
import { MovieHero } from "src/components/MovieHero";
import { getMovie } from "src/api/api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Movie = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const getMovieData = async () => {
    const movieId = searchParams.get("id");

    if (movieId == null) return;

    setIsLoading(true);

    const movie = await getMovie(movieId);
    setMovie(movie);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <Page>
      {isLoading || movie == null ? (
        <p>Загружаем информацию об фильме</p>
      ) : (
        <>
          <MovieHero {...movie.meta} />
          <List title="Актеры" type="column">
            {movie.actors.map((actor, index) => {
              return <ActorCard key={`${actor.id}_${index}`} {...actor} />;
            })}
          </List>
        </>
      )}
    </Page>
  );
};
