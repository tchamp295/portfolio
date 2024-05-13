import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-3 py-7 mb-9">
      <div className="my-7">
        <h2 className="text-lg md:text-3xl font-bold text-gray-600 mb-4">
          Discover What I Offer
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6">
          
          Ready to turn your ideas into reality? Let&apos;s work together to bring
          your projects to life.
        </p>
      </div>

      {/* Add your services section below */}
      <div className="border-t border-gray-300 pt-6">
        
        <p className="text-sm md:text-base text-gray-600 mb-4">
          Here are some of the services I offer:
        </p>
       <ServiceCard/>
      </div>
    </div>
  );
};

export default Service;
