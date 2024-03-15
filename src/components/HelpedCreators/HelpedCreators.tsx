import img from "@/assets/Image (3).png";

const HelpedCreators = () => {
  return (
    <div className="HelpedCreators-section flex items-center justify-center w-full mt-36">
      <div className="HelpedCreators flex items-center justify-center">
        <h1 className="text-white absolute text-[54px] text-center font-semibold md:text-2xl sm:text-base">
          We've helped over 1,000 creatorsre claim control of their audience.
        </h1>
        <img src={img} alt="img" className="" />
      </div>
    </div>
  );
};

export default HelpedCreators;
