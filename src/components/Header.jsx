import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [toogleNav, setToggleNav] = useState(false);
  const [activeLi, setActiveLi] = useState(1);

  return (
    <div className="fixed w-full h-[75px] bg-black text-[20px] z-10">
      <div className="w-[150px] sm:w-[200px] overflow-hidden flex absolute top-0 left-0 z-20">
        <Link to={"/"}>
          <img src="../image/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="relative h-full flex justify-end items-center px-5 sm:hidden">
        <button
          className="text-white text-4xl sm:hidden"
          onClick={() => setToggleNav(!toogleNav)}
        >
          <HiOutlineMenu />
        </button>
      </div>
      <ul
        className={`${
          toogleNav ? "translate-x-0" : "translate-x-[640px] sm:translate-x-0"
        } absolute w-full transtion-all duration-500 flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-5 font-bold bg-black text-white pt-14 pb-4 px-5 sm:px-10 xl:px-20`}
      >
        <li className={`${activeLi === 1 ? "text-orange-300" : ""}`}>
          <Link
            onClick={() => {
              setActiveLi(1);
              setToggleNav(!toogleNav);
            }}
            to={"/"}
          >
            Trang chủ
          </Link>
        </li>
        <li className={`${activeLi === 2 ? "text-orange-300" : ""}`}>
          <Link
            onClick={() => {
              setActiveLi(2);
              setToggleNav(!toogleNav);
            }}
            to={"/contact"}
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
