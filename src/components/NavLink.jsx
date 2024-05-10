import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname.pathname === href;

  return (
    <Link href={href} className="nav_link">
      {title}
    </Link>
  );
};

export default NavLink;
