/* 
  Файл хранит запросы на функции и конфигурацию запросов на backend (Rapid API),
  а также функции, эмулируюзие эти запросы
*/

import { stall } from "src/utils/stall";

// converters
import { convertSearchResults } from "./converters/convertSearchResults";
import {
  convertActorBio,
  convertActorFilmography,
} from "./converters/convertActor";
import {
  convertMovieFind,
  convertMovieCharnameList,
} from "./converters/convertMovie";

// mocks
import { searchResultsMock } from "./dummy-data/searchResultsMock";
import { actorBioMock, actorFilmographyMock } from "./dummy-data/actorMock";
import { movieFindMock, movieCharnameListMock } from "./dummy-data/movieMock";

const isDummyResponse = false;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0057df6171msh82006f1bb572794p1ee999jsn188be9bdf2f4",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

export async function getSearchResults(searchText) {
  if (isDummyResponse) {
    await stall();
    return convertSearchResults(searchResultsMock);
  }

  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${encodeURI(
    searchText
  )}`;

  try {
    const response = await fetch(url, options);
    const searchResults = await response.json();

    return convertSearchResults(searchResults);
  } catch (error) {
    console.error(error);
  }
}

export function getActor(actorId) {
  return Promise.all([getActorBio(actorId), getActorFilmography(actorId)]).then(
    (response) => {
      return {
        bio: response[0],
        movies: response[1],
      };
    }
  );
}

async function getActorBio(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorBio(actorBioMock);
  }

  const url = `https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${actorId}`;

  try {
    const response = await fetch(url, options);
    const actorBio = await response.json();

    return convertActorBio(actorBio);
  } catch (error) {
    console.error(error);
  }
}

async function getActorFilmography(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorFilmography(actorFilmographyMock);
  }

  const url = `https://online-movie-database.p.rapidapi.com/actors/get-all-filmography?nconst=${actorId}`;

  try {
    const response = await fetch(url, options);
    const actorFilmography = await response.json();

    return convertActorFilmography(actorFilmography);
  } catch (error) {
    console.error(error);
  }
}

export async function getMovie(movieId) {
  const movieMeta = await getMovieMeta(movieId);
  const characters = await getMovieCharacters(movieId, movieMeta.actorIds);

  return {
    meta: movieMeta,
    actors: characters,
  };
}

async function getMovieMeta(movieId) {
  if (isDummyResponse) {
    await stall();
    return convertMovieFind(movieFindMock);
  }

  const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${movieId}`;

  try {
    const response = await fetch(url, options);
    const movieMeta = await response.json();

    return convertMovieFind(movieMeta);
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCharacters(movieId, actorIds) {
  if (isDummyResponse) {
    await stall();
    return convertMovieCharnameList(movieCharnameListMock);
  }

  const url = `https://online-movie-database.p.rapidapi.com/title/get-charname-list?tconst=${movieId}&id=${actorIds.join(
    "&id="
  )}`;

  try {
    const response = await fetch(url, options);
    const actors = await response.json();

    return convertMovieCharnameList(actors);
  } catch (error) {
    console.error(error);
  }
}
