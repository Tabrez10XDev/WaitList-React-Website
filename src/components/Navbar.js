import { useState } from "react";
import defy from "../assets/Defy_logo.svg";
import yellowDiamond from "../assets/yellow_diamond.svg";
import blueTicket from "../assets/blue_ticket.svg";

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
export default function Navbar({ handleOpenTicket, handleOpenCoin }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="w-9/12 mx-auto mt-8 mb-10 flex justify-between items-center">
      <ul className="flex align-center md:justify-between">
        <img alt="" src={defy} className="" />
        <li>
          <a className="p-4 font-SatoshiBold text-2xl">Defy</a>
        </li>
      </ul>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden md:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 "
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between ">
              <li>
                <a className="font-SatoshiMedium text-xl mb-4">Quest</a>
              </li>
              <li>
                <a className="font-SatoshiMedium text-xl mb-4">Raffle</a>
              </li>
              <li>
                <a className="font-SatoshiMedium text-xl">Leaderboard</a>
              </li>
              <div className="bg-divider h-2/3 mb-4" style={{ width: 2 }}></div>
              <div
                onClick={handleOpenCoin}
                className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointe mr-5"
              >
                <img alt="" className="h-5 w-5 mr-1.5" src={yellowDiamond} />
                <p className="font-SatoshiMedium text-sm text-textGreyDark">
                  90 Coins
                </p>
              </div>
              <div
                onClick={handleOpenTicket}
                className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointer mr-5"
              >
                <img alt="" className="h-5 w-5 mr-1.5" src={blueTicket} />
                <p className="font-SatoshiMedium text-sm text-textGreyDark">
                  3 Tickets
                </p>
              </div>
              <WalletSelector />
            </ul>
          </div>
        </section>

        <ul className="flex items-center justify-center  lg:flex sm:hidden ">
          <li>
            <a className="font-SatoshiMedium text-xl mr-6">Quest</a>
          </li>
          <li>
            <a className="font-SatoshiMedium text-xl mr-6">Raffle</a>
          </li>
          <li>
            <a className="font-SatoshiMedium text-xl mr-6">Leaderboard</a>
          </li>
          <div className="bg-divider h-2/3 " style={{ width: 2 }}></div>
          <div
            onClick={handleOpenCoin}
            className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointe mr-5"
          >
            <img alt="" className="h-5 w-5 mr-1.5" src={yellowDiamond} />
            <p className="font-SatoshiMedium text-sm text-textGreyDark">
              90 Coins
            </p>
          </div>
          <div
            onClick={handleOpenTicket}
            className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointer mr-5"
          >
            <img alt="" className="h-5 w-5 mr-1.5" src={blueTicket} />
            <p className="font-SatoshiMedium text-sm text-textGreyDark">
              3 Tickets
            </p>
          </div>
          {/* <div className="px-6 py-2.5 rounded-full bg-black flex align-center justify-center cursor-pointer"> */}
          <WalletSelector />
          {/* </div> */}
        </ul>
      </nav>
      <style>
        {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}
      </style>
    </div>
  );
}
