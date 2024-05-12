import React from "react";

const SkillCard = ({ name, icon, iconColor }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md py-3 px-5 w-28 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
      <span className="text-4xl" style={{ color: iconColor }}>
        {icon}
      </span>
      <h2 className="text-lg font-semibold text-gray-800 mt-2">{name}</h2>
    </div>
  );
};

export default SkillCard;
