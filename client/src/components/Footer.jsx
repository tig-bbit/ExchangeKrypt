import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="flex flex-col justify-between items-center p-4 w-full md:justify-center gradient-bg-footer">
    {/* ROW 1 */}
    <div className="flex flex-col justify-between items-center my-4 w-full sm:flex-row">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-wrap flex-1 justify-evenly items-center mt-5 w-full sm:mt-0">
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Market
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Exchange
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Tutorials
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Wallets
        </p>
      </div>
    </div>

    {/* ROW 2 */}
    <div className="flex flex-col justify-center items-center mt-5">
      <p className="text-sm text-center text-white">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="mt-2 text-sm font-medium text-center text-white">
        krisato93@gmail.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    {/* ROW 3 */}
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-xs text-left text-white">@krypt2023</p>
      <p className="text-xs text-right text-white">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
