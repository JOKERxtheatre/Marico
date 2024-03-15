import logo from "@/assets/logo (6).png";
// import poppins from "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
import "@/components/Navbar/Navbar.css";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [mobileNav, setmobileNav] = useState(false);

  const closeNav = () => {
    setmobileNav(false);
  };
  const openNav = () => {
    setmobileNav(true);
  };
  return (
    <div className="Navbar-section flex  justify-center px-12 container ">
      <div className="Navbar flex items-center justify-between w-full pt-8">
        <div className="Nav-logo">
          <a
            href="/"
            className=" flex items-center justify-center gap-4 sm:gap-1"
          >
            <img
              src={logo}
              alt="logo"
              width={"45px"}
              height={"42px"}
              className="sm:w-[37px] sm:h-[34px]"
            />
            <h2 className="logo-h2 text-white  font-extrabold sm:text-3xl">
              Marico
            </h2>
          </a>
        </div>
        <Button
          className="text-lg flex items-center justify-center px-3 md:flex 2xl:hidden sm:px-2 sm:h-8"
          style={{
            backgroundColor: "rgb(50, 108, 249)",
          }}
          onClick={() => openNav()}
        >
          <RxHamburgerMenu />
        </Button>
        <div className="Nav-menu md:hidden">
          <ul className="flex items-center text-zinc-500 justify-evenly min-w-[500px]">
            <a href="/">
              <li className="flex items-center justify-center gap-2.5 -mr-5">
                Use Cases{" "}
                <IoIosArrowDown
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  className="mt-1"
                />
              </li>
            </a>
            <a href="/">
              <li>About</li>
            </a>

            <a href="/">
              <li>Pricing</li>
            </a>

            <a href="/">
              <li>Blog</li>
            </a>
          </ul>
        </div>
        <div className="Nav-btn md:hidden">
          <Button
            className="login-btn"
            variant={"login"}
            style={{
              fontSize: "17px",
            }}
          >
            Login
          </Button>
          <Button
            className="singup-btn"
            variant={"signup"}
            style={{
              fontSize: "17px",
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      {mobileNav && (
        <div
          className="Nav-mobile fixed rounded-lg w-3/5 rounded-tr-[0] rounded-br-[0] h-screen 2xl:hidden md:block right-0"
          style={{
            backgroundColor: "rgb(50, 108, 249)",
          }}
        >
          <Button
            id="closeBtn"
            className="bg-rose-700 mt-2 ml-3 items-center justify-center flex px-3 sm:px-2 sm:h-8"
            type="submit"
            onClick={() => closeNav()}
          >
            <IoClose className="text-lg" />
          </Button>
          <div className="Nav-menu pb-52">
            <ul className="flex items-start text-white justify-evenly flex-col min-h-[300px] md:text-xl pl-4 sm:text-base sm:min-h-[200px]">
              <a href="/">
                <li className="flex items-center justify-center gap-2.5 -mr-5">
                  Use Cases{" "}
                  <IoIosArrowDown
                    style={{
                      width: "12px",
                      height: "12px",
                    }}
                    className="mt-1"
                  />
                </li>
              </a>
              <a href="/">
                <li>About</li>
              </a>

              <a href="/">
                <li>Pricing</li>
              </a>

              <a href="/">
                <li>Blog</li>
              </a>
            </ul>
          </div>
          <div className="Nav-btn w-full items-center justify-around flex sm:flex-col sm:justify-around sm:min-h-[188px] sm:items-start">
            <Button
              className="login-btn text-white bg-zinc-500 px-6"
              variant={"login"}
              style={{
                fontSize: "17px",
              }}
            >
              Login
            </Button>
            <Button
              className="singup-btn"
              variant={"signup"}
              style={{
                fontSize: "17px",
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
