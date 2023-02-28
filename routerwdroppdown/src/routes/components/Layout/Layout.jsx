import { Link, Outlet, NavLink } from "react-router-dom";
//<NavLink />
//https://reactrouter.com/en/main/components/nav-link

import styles from "./styles.module.css";

import CustomDropdown from "react-dropdown-select";

function Layout() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>My projects</h1>
          <CustomDropdown />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <h4>Footer</h4>
      </footer>
    </div>
  );
}

export default Layout;
