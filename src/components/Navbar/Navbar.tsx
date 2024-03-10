import logo from "@/assets/logo (6).png";
// import poppins from "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
import "@/components/Navbar/Navbar.css";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="Navbar-section flex items-center justify-center px-12 container">
      <div className="Navbar flex items-center justify-between w-full pt-8">
        <div className="Nav-logo">
          <a href="/" className=" flex items-center justify-center gap-4">
            <img src={logo} alt="logo" width={"45px"} height={"42px"} />
            <h2 className="logo-h2 text-white  font-extrabold">Marico</h2>
          </a>
        </div>
        <div className="Nav-menu">
          <ul className="flex items-center justify-center text-zinc-500 gap-x-10">
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
        <div className="Nav-btn">
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
    </div>
  );
};

export default Navbar;
