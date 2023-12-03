import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal } from "../redux/activeSlice";

export const Product = ({ image, name, price, description }) => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.activeModal.activeModal);

  return (
    <div>
      <div className="px-5 mb-5">
        <div className="p-3 bg-white rounded-2xl flex flex-col gap-5 shadow-2xl">
          <div className="w-full h-[250px] overflow-hidden rounded-xl">
            <img src={`${image}`} alt="product" className="rounded-xl" />
          </div>

          <h1 className="text-xl font-bold">{name}</h1>

          <div className="flex flex-col gap-2">
            {description.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <div className="flex gap-3 items-end">
            <h1>Giá:</h1>
            <h1 className="text-2xl font-bold text-orange-600">{price}</h1>
          </div>

          <button
            className="font-bold text-xl text-white bg-orange-400 p-2 rounded-lg"
            onClick={() => dispatch(setActiveModal(!activeModal))}
          >
            Đặt món
          </button>
        </div>
      </div>
    </div>
  );
};
