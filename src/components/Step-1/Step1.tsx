import { Button } from "@/components/ui/button";

const Step1 = () => {
  return (
    <div className="Step1-section container flex mt-36 items-center justify-center">
      <div className="Step1 w-[650px]">
        <div className="Step1-header flex flex-col items-center ">
          <div className="flex flex-col items-center ">
            <h4
              className="text-[22px] font-semibold leading-[38px] md:text-lg"
              style={{
                color: "rgb(61, 130, 242)",
              }}
            >
              STEP 1
            </h4>
            <h1 className="text-white text-[56px] font-semibold leading-[90px] text-center md:text-[28px] md:leading-[42px]">
              Connect Your Content
            </h1>
            <p className="text-zinc-500 text-2xl font-normal text-center md:text-xl sm:text-base">
              Bring all of your content together and get a Homepage that
              automatically updates whenever you create anywhere online.
            </p>
          </div>
          <Button
            variant={"blackBtn"}
            className="h-16 mt-8 md:h-12 md:text-base md:w-[200px]"
          >
            View Avaliable Sources
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
