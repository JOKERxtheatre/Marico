const Step3 = () => {
  return (
    <div className="Step3-section container flex mt-36 items-center justify-center">
      <div className="Step3 w-full">
        <div className="Step3-header flex flex-col items-center ">
          <div className="flex flex-col items-center ">
            <h4
              className="text-[22px] font-semibold leading-[38px] md:text-lg"
              style={{
                color: "rgb(61, 130, 242)",
              }}
            >
              STEP 3
            </h4>
            <h1 className="text-white text-[56px] font-semibold leading-[90px] text-center md:text-[28px] md:leading-[42px]">
              Send Emails & Text Messages
            </h1>
            <p className="text-zinc-500 text-2xl font-normal text-center w-[680px] md:w-full  md:text-xl sm:text-base">
              No more going through a social platform. Reach and engage your
              audience directly over email and text massage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
