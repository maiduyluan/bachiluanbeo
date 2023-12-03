import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";

const ContactNav = () => {
  return (
    <div className="fixed z-10 bottom-[30px] right-[20px]">
      <div className="h-[40px] w-[40px] bg-orange-600 flex justify-center items-center rounded-full animate-bounce">
        <a href="tel:0936206103">
          <FaPhoneFlip className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactNav;
