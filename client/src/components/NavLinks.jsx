import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // const { role } = user;
        // if (path === "admin" && role !== "admin") return;
        return (
          <div className="row">
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              // onClick={isBigSidebar ? null : toggleSidebar}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
