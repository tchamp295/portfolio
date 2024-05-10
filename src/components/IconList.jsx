import { FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
const icons = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <TbBrandNextjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const IconList = () => {
  return (
    <div className="flex space-x-8">
      {icons.map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          {item.icon}
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconList;
