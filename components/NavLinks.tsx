import { navMenus } from "contants/navMenu";
import { Link } from "react-router";

export function Navbar() {
  return navMenus.map(({ title, href }, index) => (
    <Link key={index} to={href}>
      <span className="text-gray-300 font-Sansation text-lg tracking-wide hover:text-gray-200 transition-colors duration-200">
        {title}
      </span>
    </Link>
  ));
}
