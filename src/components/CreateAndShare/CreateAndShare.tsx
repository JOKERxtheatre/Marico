import { Button } from "../ui/button";
import homeImg from "@/assets/Image (1).png";

const CreateAndShare = () => {
  return (
    <div className="CreateAndShare-section  w-full flex items-center justify-end mt-40">
      <div className="CreateAndShare flex gap-44 xl:gap-20 md:gap-10 md:flex-col">
        <div className="CreateAndShare-left flex flex-col items-start justify-start gap-16 pt-2  md:container">
          <h4 className="text-white font-medium text-[22px] tracking-wide xl:text-[20px] md:text-base">
            Create & Share
          </h4>
          <div className="CreateAndShare-left-body">
            <h1 className="text-6xl text-white font-semibold tracking-wide xl:text-5xl md:text-[38px] md:leading-[42px] sm:text-3xl">
              <span className="flex -mb-9">Reach Your</span> <br />
              Audience
              <span
                className="ml-4 md:ml-0"
                style={{
                  color: "rgb(60, 130, 244)",
                }}
              >
                Directly.
              </span>
            </h1>
            <div className="CreateAndShare-left-body-p flex flex-col items-start gap-2.5 mt-7 md:mt-3">
              <p className="text-white flex items-center justify-center font-normal gap-2.5  text-lg tracking-wider xl:text-base md:text-xs md:gap-1">
                <div className="number rounded-3xl bg-zinc-700 w-[28px] text-white items-center flex justify-center md:w-[20px] ">
                  1
                </div>
                Embed content or create something new to share.
              </p>
              <p className="text-white flex items-center justify-center font-normal gap-2.5  text-lg tracking-wider xl:text-base md:text-xs md:gap-1">
                <div className="number rounded-3xl bg-zinc-700 w-[28px] text-white items-center flex justify-center md:w-[20px] ">
                  2
                </div>
                Share content over email, text message or your homepage.
              </p>
            </div>
            <div className="CreateAndShare-left-body-btns mt-12  md:mt-8 container">
              <div className=" flex w-[338px] justify-between md:w-[220px]">
                <Button
                  variant={"signup"}
                  className="get-started-btn text-base h-12 p-3 rounded-xl w-[160px] md:w-[100px] md:text-xs md:h-8 md:rounded-md"
                >
                  Get Started Now
                </Button>
                <Button
                  variant={"blackBtn"}
                  className="w-[160px] h-12 text-base bg-zinc-900 md:w-[100px] md:text-xs md:h-8 md:rounded-md"
                >
                  View A Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="CreateAndShare-right w-[620px]  xl:w-[500px] md:w-[375px] md:mr-0 sm:w-[300px]">
          <img
            src={homeImg}
            alt="img"
            className="w-full z-10 flex relative"
            style={{
              boxShadow: "0px 30px 50px 0px rgba(100, 100, 100, 0.5)",
            }}
          />
          <div
            className="triangle absolute w-[209px] h-[146px] translate-x-[345px] -translate-y-[88px] z-0 md:w-[159px] md:h-[126px] md:translate-x-[165px] sm:w-[129px] sm:h-[112px] sm:translate-x-[135px]"
            style={{
              backgroundColor: "#8B8B8B",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CreateAndShare;
