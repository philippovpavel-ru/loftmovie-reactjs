import { Page } from "src/components/Page";
import { FavouritesFilter } from "src/components/FavouritesFilter";
import { useState } from "react";
import { List } from "src/components/List";
import { ActorCard } from "src/components/ActorCard";
import { MovieCard } from "src/components/MovieCard";
import { favouritesStore } from "src/favouritesStore";

export const Favourites = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { actors, movies } = favouritesStore.favourites;

  const handleItemClick = (value) => {
    setActiveFilter(value);
  };

  const showActors = ["actors", "all"].includes(activeFilter);
  const showMovies = ["movies", "all"].includes(activeFilter);

  return (
    <Page>
      <FavouritesFilter
        activeFilter={activeFilter}
        onItemClick={handleItemClick}
      />

      {showActors ? (
        <List title="Актеры" type="column">
          {actors.map((actor, index) => {
            return <ActorCard key={`${actor.id}_${index}`} {...actor} />;
          })}
        </List>
      ) : null}

      {showMovies ? (
        <List title="Фильмы" type="grid">
          {movies.map((movie, index) => {
            return <MovieCard key={`${movie.id}_${index}`} {...movie} />;
          })}
        </List>
      ) : null}
    </Page>
  );
};
