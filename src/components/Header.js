import { BrandIcon } from "src/icons/BrandIcon";
import { SearchIcon } from "src/icons/SearchIcon";
import { SunIcon } from "src/icons/SunIcon";
import { MoonIcon } from "src/icons/MoonIcon";
import { BookmarkIcon } from "src/icons/BookmarkIcon";
import { useTheme } from "src/ThemeContext";
import { Link } from "react-router-dom";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container header">
        <Link to="/" className="header__logo">
          <BrandIcon />
        </Link>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <Link to="/">
              <SearchIcon />
            </Link>
          </li>
          <li className="header__navigation-item">
            <button onClick={toggleTheme}>
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
          <li className="header__navigation-item">
            <Link to="/favoutites">
              <BookmarkIcon />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
