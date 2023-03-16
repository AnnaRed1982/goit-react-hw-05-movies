import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav className={css.navbar}>
          <NavLink to="/" className={css.searchbarLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.searchbarLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
