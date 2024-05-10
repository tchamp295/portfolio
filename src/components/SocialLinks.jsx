import Link from "next/link";

const SocialLink = ({ href, icon, className }) => {
  return (
    <Link
      href={href}
      className={` text-xl  hover:translate-y-1 transition-all duration-500 ${className}`}
    >
      {icon}
    </Link>
  );
};

export default SocialLink;
