const ServiceCard = ({ imgUrl, title, desc, iconColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 ">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
          <span className="text-3xl" style={{ color: iconColor }}>
            {imgUrl}
          </span>
        </div>
        <h1 className=" text-lg md:text-xl font-bold text-gray-600 mb-2">{title}</h1>
        <p className="text-base md:text-lg text-gray-600 ">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
