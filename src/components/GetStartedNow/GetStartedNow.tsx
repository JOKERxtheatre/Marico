import { Button } from "../ui/button";

const GetStartedNow = () => {
  return (
    <div className="GetStartedNow-section flex items-center justify-center container md:mt-8">
      <div className="GetStartedNow flex flex-col items-center justify-center gap-7">
        <div className="logo">
          <a href="/">
            <svg
              className="md:w-[84px] md:h-[84px]"
              width="134.438965"
              height="124.780273"
              viewBox="0 0 164.439 154.78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Shape-76"
                d="M0 85.6504L0 154.768L59.863 154.768L59.8511 144.989L0 85.6504Z"
                fill="#326CF9"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Shape-77"
                d="M104.576 154.78L164.439 154.78L164.439 85.6611L104.59 145.003L104.576 154.78Z"
                fill="#326CF9"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <path
                id="Shape-78"
                d="M164.439 0.347656L82.395 81.6914L0 0L0 70.291L82.395 151.982L164.427 70.6504L164.439 0.347656Z"
                fill="#326CF9"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="GetStartedNow-text flex flex-col items-center justify-center">
          <h1 className="text-white font-bold text-7xl md:text-4xl">
            Get Started Now
          </h1>
          <h2 className="text-white font-normal text-3xl tracking-wider md:text-xl text-center">
            Setup is easy and takes under 5 minutes.
          </h2>
          <Button
            variant={"signup"}
            className="get-started-btn  py-5 text-lg h-14 rounded-xl w-[235px] mt-3 md:w-[155px] md:py-0 md:h-12 md:text-base"
          >
            Get Started Now
          </Button>
        </div>
        <p className="flex gap-1 text-zinc-500 items-center justify-center mt-5 text-2xl md:text-sm md:mt-0 ">
          <div className="dot">
            <svg
              className="md:w-[20px] md:h-[20px]"
              width="28"
              height="28"
              viewBox="0 0 28.6 28.5999"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Shape-8"
                d="M13.806 5.25708C18.5276 5.25708 22.3551 9.08447 22.3551 13.8062C22.3551 18.5276 18.5276 22.355 13.806 22.355C9.08459 22.355 5.25708 18.5276 5.25708 13.8062C5.25708 9.08447 9.08459 5.25708 13.806 5.25708Z"
                fill="#0FC65C"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
              <g opacity="0.240000">
                <path
                  id="Shape-9"
                  d="M14.3 0C22.1978 0 28.6 6.40234 28.6 14.3C28.6 22.1978 22.1978 28.5999 14.3 28.5999C6.40234 28.5999 0 22.1978 0 14.3C0 6.40234 6.40234 0 14.3 0Z"
                  fill="#0FC65C"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </g>
            </svg>
          </div>
          <span className="font-bold text-white text-2xl ml-2 mr-1 md:text-lg md:ml-1">
            1000+
          </span>
          creators have already started
        </p>
      </div>
    </div>
  );
};

export default GetStartedNow;
