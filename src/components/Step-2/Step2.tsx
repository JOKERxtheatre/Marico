const Step2 = () => {
  return (
    <div className="Step2-section container flex mt-36 items-center justify-center">
      <div className="Step2 w-[650px]">
        <div className="Step2-header flex flex-col items-center ">
          <div className="flex flex-col items-center ">
            <h4
              className="text-[22px] font-semibold leading-[38px] md:text-lg"
              style={{
                color: "rgb(61, 130, 242)",
              }}
            >
              STEP 2
            </h4>
            <h1 className="text-white text-[56px] font-semibold leading-[90px] text-center md:text-[28px] md:leading-[42px]">
              Share Your Homepage
            </h1>
            <p className="text-zinc-500 text-2xl font-normal text-center md:text-xl sm:text-base">
              Share your Wavium homepage link with your followers, and we'll
              handle the rest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
