import "@/components/Header/Header.css";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="Header-section w-full pt-20 container">
      <div className="Header flex items-center justify-center flex-col gap-16">
        <div className="Header-headings flex flex-col">
          <h1 className="Header-heading-1">Own your audience.</h1>
          <h1 className="Header-heading-2">So you don't lose them.</h1>
        </div>
        <div className="Header-get-started flex flex-col items-center">
          <div className="flex flex-col  gap-8 items-center">
            <h2 className="text-white">
              Turn your audience into email and text message subscribers.
            </h2>
            <div className="Header-get-started-btn flex w-full justify-between">
              <Button
                variant={"signup"}
                className="get-started-btn  py-5 text-lg h-14 rounded-xl w-[235px]"
              >
                Get Started Now
              </Button>
              <Button className="view-demo-btn text-zinc-500 bg-black border-zinc-500 border py-5 text-lg h-14 rounded-xl w-[235px] hover:text-white hover:border-white hover:bg-inherit ease-linear">
                View A Demo
              </Button>
            </div>
          </div>
          <p className="flex gap-1 text-zinc-500 items-center justify-center mt-5">
            <div className="dot">
              <svg
                width="24"
                height="24"
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
            <span className="font-bold text-white">1000+</span>
            creators have already started
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
