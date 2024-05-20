import { Link } from "react-router-dom";
import { getCoverImage } from "src/utils/getCoverImage";

export const MovieCard = ({ title, time, year, coverSrc, id }) => {
  const src = getCoverImage(coverSrc);

  return (
    <Link to={`/movie?id=${id}`} className="movie-card">
      <div className="movie-card-cover">
        <img
          src={src}
          className="movie-card-cover__img"
          loading="lazy"
          alt={title}
        />
        <div className="movie-card-cover__tags">
          {time ? <div className="tag tag-text">{time}</div> : null}
          {year ? <div className="tag tag-text">{year}</div> : null}
        </div>
      </div>
      <div className="body-3-text text-nowrap">{title}</div>
    </Link>
  );
};
