import React from "react";

const SkillCard = ({ name, icon, iconColor }) => {
  return (
    <div className="flex flex-col h-28  w-full md:h-42 rounded-t-xl bg-gray-100 justify-center items-center  transition duration-300 ease-in-out transform hover:scale-105">
      <span className="text-4xl" style={{ color: iconColor }}>
        {icon}
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mt-2">{name}</h2>
    </div>
  );
};

export default SkillCard;
