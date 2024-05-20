import { Page } from "src/components/Page";
import { MovieCard } from "src/components/MovieCard";
import { List } from "src/components/List";
import { ActorHero } from "src/components/ActorHero";
import { getActor } from "src/api/api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const Actor = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [actor, setActor] = useState(null);

  const getActorData = async () => {
    const actorId = searchParams.get("id");

    if (actorId == null) return;

    setIsLoading(true);

    const actor = await getActor(actorId);
    setActor(actor);

    setIsLoading(false);
  };

  useEffect(() => {
    getActorData();
  }, []);

  return (
    <Page>
      {isLoading || actor == null ? (
        <p>Загружаем информацию об актере</p>
      ) : (
        <>
          <ActorHero {...actor.bio} />
          <List title="Фильмы и сериалы" type="grid">
            {actor.movies.map((movie, index) => {
              return <MovieCard key={`${movie.id}_${index}`} {...movie} />;
            })}
          </List>
        </>
      )}
    </Page>
  );
};
