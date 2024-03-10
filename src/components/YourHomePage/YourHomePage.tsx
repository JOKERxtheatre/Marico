import { Button } from "../ui/button";
import homeImg from "@/assets/image.png";

const YourHomePage = () => {
  return (
    <div className="YourHomePage-section  w-full flex items-center justify-end mt-40 container">
      <div className="YourHomePage flex gap-44">
        <div className="YourHomePage-left flex flex-col items-start justify-start gap-16 pt-2">
          <h4 className="text-white font-medium text-[22px] tracking-wide">
            Your Homepage
          </h4>
          <div className="YourHomePage-left-body">
            <h1 className="text-6xl text-white font-semibold tracking-wide">
              <span className="flex -mb-9">Your Content.</span> <br />
              All in
              <span
                style={{
                  color: "rgb(60, 130, 244)",
                  marginLeft: "1rem",
                }}
              >
                One Spot
              </span>
            </h1>
            <div className="YourHomePage-left-body-p flex flex-col items-start gap-2.5 mt-7">
              <p className="text-white flex items-center justify-center font-normal gap-2.5  text-lg tracking-wider">
                <div className="number rounded-3xl bg-zinc-700 w-[28px] text-white items-center flex justify-center">
                  1
                </div>
                Bring all of your content together into one homepage.
              </p>
              <p className="text-white flex items-center justify-center font-normal gap-2.5  text-lg tracking-wider">
                <div className="number rounded-3xl bg-zinc-700 w-[28px] text-white items-center flex justify-center">
                  2
                </div>
                Your page automatically updates whenever you create.
              </p>
            </div>
            <div className="YourHomePage-left-body-btns mt-12">
              <div className=" flex w-[338px] justify-between">
                <Button
                  variant={"signup"}
                  className="get-started-btn text-base h-12 p-3 rounded-xl w-[160px]"
                >
                  Get Started Now
                </Button>
                <Button
                  variant={"blackBtn"}
                  className="w-[160px] h-12 text-base bg-zinc-900"
                >
                  View A Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="YourHomePage-right w-[620px] -mr-[95px]">
          <img
            src={homeImg}
            alt="img"
            className="w-full z-10 flex relative"
            style={{
              boxShadow: "0px 30px 50px 0px rgba(0, 0, 0, 0.4)",
            }}
          />
          <div
            className="triangle absolute w-[209px] h-[176px] translate-x-[275px] -translate-y-[88px] z-0"
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
