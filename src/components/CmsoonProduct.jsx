import React from "react";

const CmsoonProduct = () => {
  return (
    <div>
      <div className="px-5 mb-5">
        <div className="p-3 bg-white rounded-2xl flex flex-col gap-5 shadow-2xl">
          <div className="w-full h-[250px] overflow-hidden rounded-xl">
            <img
              src="../image/product/cmsoon.jpg"
              alt="product"
              className="rounded-xl"
            />
          </div>

          <h1 className="text-xl font-bold">Comming soon</h1>

          <div className="flex flex-col gap-2">
            <p>Món ăn sẽ được cập nhật sắp tới</p>
          </div>

          <div className="flex gap-3 items-end">
            <h1>Giá:</h1>
            <h1 className="text-2xl font-bold text-orange-600">Comming soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsoonProduct;
