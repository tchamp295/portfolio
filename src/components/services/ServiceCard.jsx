import Image from "next/image";

const ServiceCard = ({ imgUrl, desc }) => {
  return (
    <div className="flex flex-col justify-between gap-4 w-full">
      <div className="flex-none h-36  w-full md:w-full md:h-42 rounded-t-xl bg-gray-100">
        <Image src={imgUrl} height={10} width={20} alt="service " />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
