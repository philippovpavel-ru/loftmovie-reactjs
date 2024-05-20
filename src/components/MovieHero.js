import { getCoverImage } from "src/utils/getCoverImage";
import { BookmarkIcon } from "src/icons/BookmarkIcon";
import { useFavouritesModal } from "src/hooks/useFavouritesModal";
import { favouritesStore } from "src/favouritesStore";

export const MovieHero = ({ title, year, time, genre, coverSrc, id }) => {
  const src = getCoverImage(coverSrc);
  const { Modal, showModal } = useFavouritesModal();

  const handleBokkmarkClick = () => {
    showModal();

    favouritesStore.addMovie({ title, time, year, coverSrc, id });
  };

  return (
    <section className="movie-hero">
      <img src={src} className="movie-hero__img" loading="lazy" alt={title} />
      <div className="movie-info">
        <div className="movie-info__name">
          <h1 className="h1-text text-nowrap">{title}</h1>
          <button onClick={handleBokkmarkClick}>
            <BookmarkIcon />
          </button>
        </div>
        <div className="movie-info__description body-text">
          {year ? (
            <div>
              <span>Год</span>
              <span>{year}</span>
            </div>
          ) : null}

          {genre ? (
            <div>
              <span>Жанр</span>
              <span className="text-nowrap">{genre}</span>
            </div>
          ) : null}

          {time ? (
            <div>
              <span>Время</span>
              <span>{time} мин.</span>
            </div>
          ) : null}
        </div>
      </div>
      <Modal />
    </section>
  );
};
