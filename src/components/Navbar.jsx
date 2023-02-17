import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import React from "react";

const Navbar = () => {
  return (
    <div className="navbar h-[60px] shadow-md rel z-10 p-[10px]">
      <div className="wrapper pl-[10px] pr-[10px] flex justify-between items-center">
        {/* left div */}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px]">En</div>
          <div className="searchInput flex border-[2px] border-solid  rounded-md items-center p-[5px] focus-within:border-[#8a4af3]">
            <input className="input outline-none" type="text" />
            <Search className="" style={{ fontSize: "16px" }} />
          </div>
        </div>

        {/* center div */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg">Tarli Woods</div>
        </div>

        {/* Right div */}
        <div className=" right flex flex-1 items-center justify-end gap-[15px]">
          <div className="cursor-pointer ">Register</div>
          <div className="cursor-pointer ">Sign-in</div>
          <div className="cursor-pointer">
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
