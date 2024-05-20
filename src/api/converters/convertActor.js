import { getActorId } from "./convertMovie";

export function convertActorBio(apiActorBio) {
  return {
    name: apiActorBio.name,
    description: apiActorBio?.miniBios[0]?.text,
    avatarSrc: apiActorBio?.image?.url ?? "",
    id: getActorId(apiActorBio.id),
  };
}

export function convertActorFilmography(apiActorFilmography) {
  return apiActorFilmography.filmography.map(convertMovie);
}

function convertMovie(apiMovie) {
  return {
    title: apiMovie.title,
    time: undefined,
    year: apiMovie.year,
    coverSrc: apiMovie?.image?.url,
    id: getMovieId(apiMovie.id),
  };
}

export function getMovieId(id) {
  return id.split("/")[2];
}
