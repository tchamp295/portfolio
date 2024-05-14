import {
  FaCode,
  FaComments,
  FaFileAlt,
  FaLaptopCode,
  FaMoneyCheckAlt,
  FaPalette,
  FaPencilAlt,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc:
      "Create and develop responsive and scalable websites with modern technologies.",
    iconColor: "#61DAFB", // Blue color for Web Development
  },
  {
    icon: <FaPencilAlt />,
    title: "UI/UX Design",
    desc:
      "Design intuitive and user-friendly interfaces to enhance user experience.",
    iconColor: "#FFA500", // Orange color for UI/UX Design
  },
  {
    icon: <FaCode />,
    title: "API Development",
    desc:
      "Build robust and secure APIs to enable data exchange between applications.",
    iconColor: "#00FF00", // Green color for API Development
  },
 
  {
    icon: <FaMoneyCheckAlt />,
    title: "Payment Integration",
    desc: "Integrate secure payment gateways to enable online transactions.",
    iconColor: "#FF0000", // Red color for Payment Integration
  },
  {
    icon: <FaFileAlt />,
    title: "CMS Development",
    desc:
      "Develop custom Content Management Systems (CMS) for efficient content management.",
    iconColor: "#0000FF", // Blue color for CMS Development
  }, {
    icon: <FaComments />,
    title: "Consultation",
    desc:
      "Provide expert advice and guidance on technology and development strategies.",
    iconColor: "#FF00FF", // Purple color for Consultation
  },
];


const Service = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-3 py-7 mb-9">
      <div className="my-7">
        <h2 className="text-lg md:text-3xl font-bold text-gray-600 mb-4">
          Discover What I Offer
        </h2>
        <p className="text-sm md:text-base text-gray-600 ">
          Ready to turn your ideas into reality? Let&apos;s work together to
          bring your projects to life.
        </p>
      </div>

      {/* Add your services section below */}
      <div className="border-t border-gray-300 pt-6">
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Here are some of the services I offer:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              imgUrl={service.icon}
              title={service.title}
                  desc={service.desc}
                  iconColor={service.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
