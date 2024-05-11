import Link from "next/link";

const SocialLink = ({ href, icon, className }) => {
  return (
    <Link
      href={href}
   className={`text-xl text-gray-600 hover:text-gray-900 transition-colors duration-300 ${className}`}
    >
      {icon}
    </Link>
  );
};

export default SocialLink;
