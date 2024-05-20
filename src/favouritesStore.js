const FAVOURITES_STORE_KEY = "favourites";

const inittialStoreValue = {
  actors: [],
  movies: [],
};

class FavouritesStore {
  constructor() {
    this.favourites = this.getFavourites();
  }

  addMovie(movie) {
    this.favourites.movies.push(movie);
    this.sync();
  }

  addActor(actor) {
    this.favourites.actors.push(actor);
    this.sync();
  }

  sync() {
    localStorage.setItem(FAVOURITES_STORE_KEY, JSON.stringify(this.favourites));
  }

  getFavourites() {
    const stored = localStorage.getItem(FAVOURITES_STORE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }

    return inittialStoreValue;
  }
}

export const favouritesStore = new FavouritesStore();
