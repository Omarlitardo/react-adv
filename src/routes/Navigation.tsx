import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from "./routes";
import { Suspense } from "react";

// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}

            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

// instalar en terminal,o no funcionara los Router..
// npm add  react-router-dom@6

{
  /* <li>
                <NavLink
                  to="/lazy2"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy 2
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lazy3"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy 3
                </NavLink>
              </li> */
}
{
  /* <Route path="lazy2" element={<LazyPage2 />} />
            <Route path="lazy3" element={<LazyPage3 />} /> */
}

// para subir a github
// 1-git branch
// 2-git add .
// 3-git commit -m 'LazyLoad Basico listo'
// 4-
