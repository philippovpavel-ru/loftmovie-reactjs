import { FC } from "react";
import { Link } from "react-router-dom";
import { getActorImage } from "src/utils/getActorImage";

type TActorCardProps = {
  avatarSrc: string;
  name: string;
  id: string;
};

export const ActorCard: FC<TActorCardProps> = ({ avatarSrc, name, id }) => {
  const src = getActorImage(avatarSrc);

  return (
    <Link to={`/actor?id=${id}`} className="actor-card">
      <img
        src={src}
        className="actor-card__cover"
        loading="lazy"
        alt="{name}"
      />
      <p className="body-2-text text-nowrap">{name}</p>
    </Link>
  );
};
