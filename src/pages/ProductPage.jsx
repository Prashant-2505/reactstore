import React, { useState } from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const ProductPage = () => {
  const [productImg, setProductImg] = useState(
    "https://assets.ajio.com/medias/sys_master/root/20220906/xk0A/6316bec1aeb269dbb371eee1/-473Wx593H-469274019-wine-MODEL.jpg"
  );

  const handelRed = () => {
    setProductImg(
      "https://assets.ajio.com/medias/sys_master/root/20220822/qU9t/6303bd85aeb26917618edd82/-473Wx593H-464853109-red-MODEL.jpg"
    );
  };
  const handelGreen = () => {
    setProductImg(
      "https://assets.ajio.com/medias/sys_master/root/20230109/1bS9/63bc232cf997dd708ef52def/-473Wx593H-469285957-sage-MODEL.jpg"
    );
  };
  const handelOrange = () => {
    setProductImg(
      "https://assets.ajio.com/medias/sys_master/root/20211221/pFAM/61c0f27af997ddf8f158f4fb/-473Wx593H-463523919-orange-MODEL.jpg"
    );
  };

  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src={productImg}
            alt="jackets"
            className="w-[80%] h-[80%] shadow-lg rounded-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className=" flex-[1.3] flex items-start justify-start flex-col mt-10">
          <h1 className="title text-[40px]">Dark jackets 100% warm</h1>
          <p className="pr-[3rem] tetx-justify mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            inventore adipisci quae odio molestiae, eveniet facere sit atque
            neque modi fugit magnam repellat labore quibusdam earum minus
            dolores, qui possimus?
          </p>
          <p className="mt-7 text-3xl">
            Price <b>$50</b>
          </p>
          <div className="flex text-xxl gap-3 mt-4">
            Colors :
            <div
              className="bg-red-600 h-[2rem] w-[2rem] rounded-full cursor-pointer border-2 p-[10px]"
              onClick={handelRed}
            ></div>
            <div
              className="bg-green-600 w-[2rem] rounded-full cursor-pointer border-2 p-[10px]"
              onClick={handelGreen}
            ></div>
            <div
              className="bg-orange-600 w-[2rem] rounded-full cursor-pointer border-2 p-[10px]"
              onClick={handelOrange}
            ></div>
          </div>

          <div className="mt-4   ">
            Size
            <select className="ml-5 border-silver border-2 text-xxl">
              <option selected disabled>
                Select
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-3">Add to Cart</button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
