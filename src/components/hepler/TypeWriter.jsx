import { TypeAnimation } from "react-type-animation";

const TypeEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web Developer",
        1000,
        "Mobile Developer",
        1000,
        "UI/UX Designer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className=" text-[18px] text-center text-slate-400 font-bold  "
    />
  );
};

export default TypeEffect;
