import { ActorCard } from "src/components/ActorCard";
import { List } from "src/components/List";
import { MovieCard } from "src/components/MovieCard";
import { Page } from "src/components/Page";
import { useSearch } from "src/hooks/useSearch";

export const SearchResults = () => {
  const { isLoading, data } = useSearch();

  const isPageLoading = isLoading || !data;
  return (
    <Page>
      <h2 className="h2-text search-results__title">
        {isPageLoading
          ? "Загружаем результаты поиска"
          : "Вы искали, а мы нашли:"}
      </h2>

      {isPageLoading ? null : (
        <>
          {data.actors.length > 0 ? (
            <List title="Актёры" type="column">
              {data.actors.map((actor, index) => (
                <ActorCard key={`${actor.id}_${index}`} {...actor} />
              ))}
            </List>
          ) : null}

          {data.movies.length > 0 ? (
            <List title="Фильмы и сериалы" type="grid">
              {data.movies.map((movie, index) => (
                <MovieCard key={`${movie.id}_${index}`} {...movie} />
              ))}
            </List>
          ) : null}
        </>
      )}
    </Page>
  );
};
