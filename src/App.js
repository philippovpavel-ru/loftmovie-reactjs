import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Actor } from "./pages/Actor";
import { Favourites } from "./pages/Favourites";
import { Movie } from "./pages/Movie";
import { MovieClass } from "./pages/MovieClass";
import { SearchResults } from "./pages/SearchResults";
import { ThemeContextProvider } from "./ThemeContext";
import "./styles.css";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actor" element={<Actor />} />
        <Route path="/favoutites" element={<Favourites />} />
        <Route path="/movie" element={<MovieClass />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeContextProvider>
  );
}
