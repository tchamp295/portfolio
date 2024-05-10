

const SkillCard = ({ name, icon,iconColor }) => {
  return (
    <div className="flex flex-col gap-2 items-center ">
    <span className="text-4xl "style={{ color: iconColor }}>  {icon}</span>
      <h1 className="text-sm">{name}</h1>
    </div>
  );
};

export default SkillCard;
