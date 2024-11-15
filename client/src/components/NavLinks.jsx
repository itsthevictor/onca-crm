import { useDashboardContext } from "../layouts/Dashboard";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link, i) => {
        const { text, path, icon, children } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <div className="row" key={i}>
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
            <div className="submenu">
              {children &&
                children.map((item, i) => (
                  <NavLink
                    to={item.path}
                    text={item.text}
                    key={i}
                    className="submenu-link"
                  >
                    <span className="icon">{item.icon}</span>
                    {item.text}
                  </NavLink>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NavLinks;
