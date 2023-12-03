import React from "react";
import { Product } from "../components/Product";
import { productList } from "../constant/productList";
import CmsoonProduct from "../components/CmsoonProduct";
import FootBanner from "../components/FootBanner";
import Footer from "../components/Footer";
import { useForm, ValidationError } from "@formspree/react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveModal } from "../redux/activeSlice";
import { MdClose } from "react-icons/md";

const HomePage = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector((state) => state.activeModal.activeModal);

  const [state, handleSubmit] = useForm("xnqkkzdy");

  if (state.succeeded) {
    alert(
      "Cảm ơn bạn đã đặt món, chúng tôi sẽ liên hệ bạn sau vài phút để xác nhận."
    );
    window.location.reload();
  }

  return (
    <div className="relative">
      <div className="flex flex-col gap-5">
        <div className="w-full">
          <img
            src="../image/banner.png"
            alt="banner"
            className="w-full h-full"
          />
        </div>

        <div className="font-bold text-2xl md:text-2xl lg:text-4xl text-orange-500 text-center">
          <h1>Hôm nay ăn gì ?</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productList.map((item) => (
            <Product
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}

          <CmsoonProduct />
        </div>

        <FootBanner />
      </div>

      <Footer />

      {activeModal && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-500/50">
          <div className="w-full h-full flex items-center">
            <div className="mx-5 md:mx-20 lg:mx-[200px] xl:mx-[400px] p-5 bg-white w-full rounded-xl">
              <form
                onSubmit={handleSubmit}
                className=" flex flex-col jutify-center gap-3"
              >
                <div className="flex justify-between">
                  <h1 className="font-bold">
                    Nhập đầy đủ thông tin cần thiết nhé
                  </h1>
                  <MdClose
                    className="text-2xl cursor-pointer"
                    onClick={() => dispatch(setActiveModal(!activeModal))}
                  />
                </div>

                <label htmlFor="name">Tên người nhận:</label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  className="p-2 bg-gray-200"
                  placeholder="Nhập tên người nhận"
                  required
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />

                <label htmlFor="number">Số điện thoại người nhận:</label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  className="p-2 bg-gray-200"
                  placeholder="Nhập số điện thoại người nhận"
                  required
                />
                <ValidationError
                  prefix="number"
                  field="number"
                  errors={state.errors}
                />

                <label htmlFor="address">Địa chỉ người nhận:</label>
                <input
                  id="address"
                  name="address"
                  type="address"
                  className="p-2 bg-gray-200"
                  placeholder="Nhập địa chỉ người nhận"
                  required
                />
                <ValidationError
                  prefix="address"
                  field="address"
                  errors={state.errors}
                />

                <label htmlFor="checkbox">Chọn món:</label>
                <div className="flex gap-3">
                  <input
                    id="order"
                    type="checkbox"
                    name="order"
                    value="Ba chỉ chiên giòn sốt thái"
                  />
                  <p>Ba chỉ chiên giòn sốt Thái</p>
                </div>

                <div className="flex gap-3">
                  <input
                    id="order"
                    type="checkbox"
                    name="order"
                    value="Ba chỉ chiên giòn muối ớt"
                  />
                  <p>Ba chỉ chiên giòn muối ớt</p>
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <label htmlFor="quantity">Số lượng mỗi món:</label>
                <select
                  name="quantity"
                  required
                  className="border border-black"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>

                <label htmlFor="note">Ghi chú:</label>
                <textarea
                  id="note"
                  name="note"
                  className="p-2 bg-gray-200"
                  placeholder="Nhắc nhở món ăn ( vd: cay, ít cay, ... )"
                />
                <ValidationError
                  prefix="note"
                  field="note"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  className="rounded-xl bg-orange-500 p-3 font-bold text-white"
                  disabled={state.submitting}
                >
                  Gửi đơn
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
