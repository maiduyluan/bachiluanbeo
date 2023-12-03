import React from "react";
import { TiLocation } from "react-icons/ti";
import { FaPhone, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full p-5 bg-black grid grid-cols-1 ">
      <div className="flex flex-col gap-3 lg:items-center">
        <h1 className="font-bold text-2xl text-orange-300">Ba chỉ Luân Béo</h1>

        <div className="flex gap-2 items-center">
          <TiLocation className="text-orange-300 text-2xl" />
          <p className="text-white text-sm">
            S10.06 VINHOMES GRANPARK, Quận Thủ Đức, TP. Hồ Chí Minh
          </p>
        </div>

        <div className="flex gap-3">
          <FaPhone className="text-orange-300 text-xl" />
          <p className="text-white text-sm">0936 206 103</p>
        </div>

        <div className="flex gap-3">
          <MdEmail className="text-orange-300 text-xl" />
          <p className="text-white text-sm">maiduyluan200@gmail.com</p>
        </div>

        <div className="flex gap-3">
          <FaEarthAfrica className="text-orange-300 text-xl" />
          <p className="text-white text-sm">bachiluanbeo@cx.com</p>
        </div>

        <div className="flex gap-3">
          <FaFacebookSquare className="text-orange-300 text-xl" />
          <a href="https://www.facebook.com/duyluan123/" className="text-white">
            Click here!
          </a>
        </div>

        <div className="flex gap-3">
          <SiZalo className="text-orange-300 text-xl" />
          <a href="https://zalo.me/0936206103" className="text-white">
            Click here!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
