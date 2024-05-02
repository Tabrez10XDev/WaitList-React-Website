import defy from "../assets/Defy_logo.svg";
import yellowDiamond from "../assets/yellow_diamond.svg";
import blueTicket from "../assets/blue_ticket.svg";

import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useState } from "react";
import menu from "../assets/menu.svg"
import { Link } from "react-router-dom";

export default function Navbar({ handleOpenTicket, handleOpenCoin }) {


  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }


  return (
    <nav className="w-9/12 mx-auto mt-8 mb-10 max-[600px]:w-11/12">
      <ul className="flex justify-between align-center">
        <ul className="flex align-center">
          <img alt="" src={defy} />
          <li>
            <a className="p-4 font-SatoshiBold text-2xl">Defy</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={menu} style={{ width: 30, height: 30, objectFit: 'contain' }} />
        </div>
        <ul className={`flex items-center justify-center nav-elements ${showNavbar && 'active'}`}>
          <li>
          <Link to={{pathname: '/'}} className="font-SatoshiMedium text-xl mr-6">Quest</Link>
          </li>
          <li>
            <Link to={{pathname: '/raffle'}} className="font-SatoshiMedium text-xl mr-6">Raffle</Link>
          </li>
          <li>
            <a className="font-SatoshiMedium text-xl mr-6">Leaderboard</a>
          </li>
          <div className="bg-divider h-2/3 mr-6" style={{ width: 2, display: showNavbar ? "none" : "flex" }}></div>
          <li>
            <div
              onClick={handleOpenCoin}
              className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointe mr-5"
            >
              <img alt="" className="h-5 w-5 mr-1.5" src={yellowDiamond} />
              <p className="font-SatoshiMedium text-sm text-textGreyDark">
                90 Coins
              </p>
            </div>
          </li>
          <li>
            <div
              onClick={handleOpenTicket}
              className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointer mr-5"
            >
              <img alt="" className="h-5 w-5 mr-1.5" src={blueTicket} />
              <p className="font-SatoshiMedium text-sm text-textGreyDark">
                3 Tickets
              </p>
            </div>
          </li>
          {/* <div className="px-6 py-2.5 rounded-full bg-black flex align-center justify-center cursor-pointer"> */}
          <li>
            <WalletSelector />
          </li>
          {/* </div> */}
        </ul>
      </ul>
    </nav>
  );
}
