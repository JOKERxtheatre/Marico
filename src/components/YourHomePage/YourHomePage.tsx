import { Button } from "../ui/button";
import homeImg from "@/assets/image.png";

const YourHomePage = () => {
  return (
    <div className="YourHomePage-section  w-full flex items-center justify-end mt-40 container md:px-0">
      <div className="YourHomePage flex gap-44 xl:gap-20 md:gap-10 md:flex-col">
        <div className="YourHomePage-left flex flex-col items-start justify-start gap-16 pt-2  md:container">
          <h4 className="text-white font-medium text-[22px] tracking-wide xl:text-[20px] md:text-base sm:text-sm">
            Your Homepage
          </h4>
          <div className="YourHomePage-left-body">
            <h1 className="text-6xl text-white font-semibold tracking-wide xl:text-5xl md:text-[38px] md:leading-[42px] sm:text-3xl">
              <span className="flex -mb-9">Your Content.</span> <br />
              All in
              <span
                className="ml-4 md:ml-0"
                style={{
                  color: "rgb(60, 130, 244)",
                }}
              >
                One Spot
              </span>
            </h1>
            <div className="YourHomePage-left-body-p flex flex-col items-start gap-2.5 mt-7 md:mt-3 sm:mt-5">
              <p className="text-white flex items-center justify-center font-normal gap-2.5  text-lg tracking-wider xl:text-base md:text-xs md:gap-1">
                <div className="number rounded-3xl bg-zinc-700 w-[28px] text-white items-center flex justify-center md:w-[20px]">
                  1
                </div>
                Bring all of your content together into one homepage.
              </p>
              <p className="text-white flex items-center justify-center font-normal gap-2.5  text-lg tracking-wider  xl:text-base md:text-xs md:gap-1">
                <div className="number rounded-3xl bg-zinc-700 w-[28px] text-white items-center flex justify-center  md:w-[20px]">
                  2
                </div>
                Your page automatically updates whenever you create.
              </p>
            </div>
            <div className="YourHomePage-left-body-btns mt-12 md:mt-8 ">
              <div className=" flex w-[338px] justify-between md:w-[220px]">
                <Button
                  variant={"signup"}
                  className="get-started-btn text-base h-12 p-3 rounded-xl w-[160px] md:w-[100px] md:text-xs md:h-8 md:rounded-md"
                >
                  Get Started Now
                </Button>
                <Button
                  variant={"blackBtn"}
                  className="w-[160px] h-12 text-base bg-zinc-900  md:w-[100px] md:text-xs md:h-8 md:rounded-md"
                >
                  View A Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="YourHomePage-right w-[620px] -mr-[32px] xl:w-[500px] md:w-[375px] md:mr-0 sm:w-[300px] ">
          <img
            src={homeImg}
            alt="img"
            className="w-full z-10 flex relative"
            style={{
              boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.4)",
            }}
          />
          <div
            className="triangle absolute w-[209px] h-[176px] translate-x-[275px] -translate-y-[88px] z-0 xl:translate-x-[225px] xl:w-[179px] xl:h-[146px] md:w-[189px] md:h-[140px] md:translate-x-[150px] sm:w-[139px] sm:h-[130px] sm:translate-x-[120px]"
            style={{
              backgroundColor: "#8B8B8B",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default YourHomePage;
