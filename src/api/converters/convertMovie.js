import { getMovieId } from "./convertActor";

export function convertMovieFind(apiMovieFind) {
  const movie = apiMovieFind.results[0];

  return {
    title: movie.title,
    year: movie.year,
    time: movie.runningTimeInMinutes,
    genre: undefined,
    coverSrc: movie?.image?.url ?? "",
    actorIds: movie.principals.map((actor) => getActorId(actor.id)),
    id: getMovieId(movie.id),
  };
}

export function convertMovieCharnameList(apiCharnameList) {
  return Object.values(apiCharnameList).map(convertActor);
}

function convertActor(apiActor) {
  return {
    name: apiActor.name.name,
    avatarSrc: apiActor.name?.image?.url,
    id: getActorId(apiActor.name.id),
  };
}

export function getActorId(id) {
  return id.split("/")[2];
}
