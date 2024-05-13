
import { InlineWidget } from "react-calendly";

const Calendly = ({handleCloseCalendly}) => {
 
 const handleWrapperClick = (e) => {
    // Close the Calendly overlay only if the click is outside the InlineWidget
    if (e.target === e.currentTarget) {
      handleCloseCalendly();
    }
  };
 
  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleWrapperClick}
    >
      {/* Apply custom styles directly to the InlineWidget */}

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          //   overflow: "hidden",
        }}
      >
        <InlineWidget
          url="https://calendly.com/speedsys530/30min"
          styles={{ width: "100%", height: "100%", position: "relative" }}
        />
      </div> <ul className="list-disc pl-6 mt-3 text-sm md:text-base text-gray-600">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Consultation</li>
        </ul>
    </div>
  );
};

export default Calendly;
