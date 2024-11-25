import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

const NAVIGATION = [
  {
    to: "/",
    value: "Home",
    end: true,
  },
  {
    to: "/events",
    value: "Events",
  },
  {
    to: "/newsletter",
    value: "Newsletter"
  }
];

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {NAVIGATION.map((el) => (
            <li key={el.value}>
              <NavLink
                to={el.to}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end={el.end ?? false}
                relative="path"
              >
                {el.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
