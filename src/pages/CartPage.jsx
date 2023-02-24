import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const CartPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-[#8a4af3] hover:text-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg cursor-pointer gap-3">
            <p>Items in your cart :3</p>
            <p>Whishlist items :0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>

        <div className="flex mt-7 ">
          <div className="flex flex-col flex-1 ">
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start gap-2 p-2">
                <img
                  className="w-[20%] h-[20%] shadow-lg rounded-lg hover:scale-[1.1] ease-in duration-300 "
                  src="https://assets.ajio.com/medias/sys_master/root/20220819/dsEj/62ffb035f997dd394c084ea0/-473Wx593H-461118860-blue-MODEL.jpg"
                  alt="shirts"
                />
                <div className="description flex flex-col ml-5 mt-3">
                  <p>
                    ID : <b>235678</b>
                  </p>
                  <p>
                    Product : <b>Dazzing shirts</b>
                  </p>
                  <p className="flex gap-3">
                    Color :
                    <div className="rounded-full bottom-2 p-[10px] h-[20px] w-[10px] cursor-pointer"></div>
                  </p>
                  <p>
                    Size : <b>XXL</b>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-2xl mt-3">
                  <b>$ 90</b>
                </p>
              </div>
            </div>

            {/* second product */}
            <div className="bg-white">
            <hr className=" mb-9"/>
            </div>
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start gap-2 p-2">
                <img
                  className="w-[20%] h-[20%] shadow-lg rounded-lg hover:scale-[1.1] ease-in duration-300 "
                  src="https://assets.ajio.com/medias/sys_master/root/20220623/IqYT/62b3856daeb26921af429ee7/-473Wx593H-464531601-black-MODEL.jpg"
                  alt="shirts"
                />
                <div className="description flex flex-col ml-5 mt-3">
                  <p>
                    ID : <b>235678</b>
                  </p>
                  <p>
                    Product : <b>Dazzing shirts</b>
                  </p>
                  <p className="flex gap-3">
                    Color :
                    <div className="rounded-full bottom-2 p-[10px] h-[20px] w-[10px] cursor-pointer bg-slate-500"></div>
                  </p>
                  <p>
                    Size : <b>XXL</b>
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center flex-auto">
                <Counter />
                <p className="flex items-center justify-center text-2xl mt-3">
                  <b>$ 90</b>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-col flex flex-1 w-[30vh] h-[45vh] border-2 border-[#8a4af3] rounded-md shadow-lg items-center ml-5 p-3">
            <h1 className="text-[2rem]"> summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Subtotal</p>
                <p>$ 140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping</p>
                <p>$ 40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping discount</p>
                <p>-$ 40</p>
            </div>
            <div className="flex justify-between mt-5 w-[100%] text-3xl font-bold">
                <p>Total</p>
                <p>$ 140</p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CartPage;
