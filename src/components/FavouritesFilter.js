const filters = [
  { value: "all", label: "Все" },
  { value: "actors", label: "Актеры" },
  { value: "movies", label: "Фильмы" },
];

export const FavouritesFilter = ({ activeFilter, onItemClick }) => {
  const activeItemClassName = "filter-list__item--active";

  return (
    <section className="favourites-filter">
      <h1 className="h1-text">Избранное</h1>
      <ul className="filter-list">
        {filters.map(({ value, label }) => {
          return (
            <li key={value}>
              <button
                className={`filter-list__item body-3-text ${
                  activeFilter === value ? activeItemClassName : ""
                }`}
                onClick={() => onItemClick(value)}
              >
                {label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
