import React from "react";

const FootBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-full h-[500px] bg-orange-700">
      <img src="../image/logo.png" alt="logo" className="w-[30%] lg:w-[20%]" />
      <h1 className="font-bold text-2xl text-orange-200 text-center">
        BA CHỈ CHIÊN GIÒN CHUẨN TƯƠI 100%
      </h1>
      <h2 className="font-bold text-lg text-white text-center px-5">
        Thưởng thức thịt ba chỉ giòn tan, sử dụng ba chỉ tươi 100%, kèm các loại
        nước chấm nhà làm đảm bảo vệ sinh và chất lượng
      </h2>
    </div>
  );
};

export default FootBanner;
