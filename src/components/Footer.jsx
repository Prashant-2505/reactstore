import { EmailOutlined, Facebook, Instagram, LinkedIn, LocalPhoneOutlined, LocationOnOutlined, Twitter } from "@material-ui/icons";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]"> TailorWood</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          molestiae alias earum ex. Sit ipsa, quis corporis nesciunt,
          perspiciatis, ratione odit necessitatibus earum natus similique porro
          voluptates veniam. Atque, corporis!
        </p>
        <div className="flex items-center justify-center self-start ]">
          <div className="m-3 rounded-full cursor-pointer p-2 text-white bg-blue-700 hover:bg-[white] hover:text-blue-700 ease-in duration-150 ">
            <Facebook />
          </div>
          <div className="m-3 rounded-full cursor-pointer p-2 text-white bg-blue-700 hover:bg-[white] hover:text-blue-700 ease-in duration-150">
            <Instagram />
          </div>
          <div className="m-3 rounded-full cursor-pointer p-2 text-white bg-blue-700 hover:bg-[white] hover:text-blue-700 ease-in duration-150">
            <Twitter />
          </div>
          <div className="m-3 rounded-full cursor-pointer p-2 text-white bg-blue-700 hover:bg-[white] hover:text-blue-700 ease-in duration-150">
            <LinkedIn />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-2">
          <div className="flex m-3" >
            <LocationOnOutlined/>
            <p className="pl-3">State of california</p>
          </div>
          <div className="flex m-3">
            <LocalPhoneOutlined/>
            <p className="pl-3">8447348741</p>
          </div>
          <div className="flex m-3">
            <EmailOutlined/>
            <p className="pl-3">abcd@gmail.com</p>
          </div>
      </div>
    </div>
  );
};

export default Footer;
