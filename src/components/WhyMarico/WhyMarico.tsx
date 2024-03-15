import WhyMaricoRow from "./WhyMaricoItem";

const WhyMarico = () => {
  return (
    <div className="WhyMarico-section w-full container mt-40">
      <div className="WhyMarico flex flex-col items-center justify-center gap-12">
        <h1 className="text-white text-6xl font-semibold md:text-2xl text-center">
          Why Creators Love Marico
        </h1>
        <WhyMaricoRow />
      </div>
    </div>
  );
};

export default WhyMarico;
