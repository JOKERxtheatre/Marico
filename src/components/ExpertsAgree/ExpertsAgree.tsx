import img from "@/assets/Image (2).png";

const ExpertsAgree = () => {
  return (
    <div className="ExpertsAgree-section flex  items-center justify-center mt-36 container">
      <div className="ExpertsAgree flex flex-col items-center justify-center gap-10">
        <h1 className="text-white text-[64px] font-semibold">Experts Agree</h1>
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default ExpertsAgree;
