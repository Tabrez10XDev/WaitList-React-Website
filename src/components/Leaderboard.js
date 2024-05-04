import React, { useState } from "react";
import Navbar from "./Navbar";
import yellowDiamond from "../assets/yellow_diamond.svg";
import blueTicket from "../assets/blue_ticket.svg";
import search from "../assets/search.svg";
import profilePic from "../assets/profilePic.png";
import dotMenu from "../assets/dotmenu.svg";
import groupProfile from "../assets/groupProfile.svg";
import teleLogo from "../assets/telegramLogo.svg";
import disLogo from "../assets/discordLogo.svg";
import lock from "../assets/lock.svg";
import { Modal } from "@material-ui/core";
import Button from "@mui/material/Button";

const data = [
  {
    rank: "#1",
    address: "0x645353453364...32",
    coins: 11234,
    tickets: 212,
    socials: [disLogo, teleLogo],
    private: false,
  },
  {
    rank: "#1",
    address: "0x645353453364...32",
    coins: 11234,
    tickets: 212,
    socials: [disLogo, teleLogo],
    private: false,
  },
  {
    rank: "#1",
    address: "0x645353453364...32",
    coins: 11234,
    tickets: 212,
    socials: [lock],
    private: false,
  },
];

export default function Leaderboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [activeTab, setActiveTab] = useState("coins");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div class="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-violet-200 to-90% ...">
        <Navbar></Navbar>
        <div class="flex">
          <div class="w-3/4 mr-4 pl-7">
            <div className="flex justify-between">
              <div className="flex">
                <div className="relative h-14 w-72 bg-white">
                  <div className="font-SatoshiMedium text-2xl p-3 text-center">
                    Leaderboard
                  </div>
                </div>
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "56px solid transparent",
                    borderLeft: "50px solid white",
                  }}
                ></div>
              </div>
              <div className="font-SatoshiMedium flex text-black p-2 mr-7  gap-2">
                <div>
                  <img src={profilePic} className="size-8" alt="" />
                </div>
                <div className="font-semibold">0x47245645..321</div>
              </div>
            </div>
            <div className="font-SatoshiMedium w-full h-full bg-white rounded-r-2xl rounded-b-2xl">
              <div className="flex h-2 text-xs p-5 content-center text-textGreyLight">
                <div className="w-1/5 text-center">YOUR RANK</div>
                <div className="w-1/5 text-center">SORT BY</div>
              </div>
              <div className="flex p-2 gap-5">
                <div className="text-2xl w-1/5 text-center">#532</div>
                <div className="flex w-1/5 gap-4">
                  <div className="pl-2">
                    <button
                      onClick={() => handleTabChange("coins")}
                      className={`p-2 rounded-full ${
                        activeTab === "coins" ? "bg-blue-500" : "bg-white"
                      } flex max-h-10 cursor-pointer`}
                    >
                      <img alt="" className="h-5 mr-1.5" src={yellowDiamond} />
                      <p className="font-SatoshiMedium text-sm text-textGreyDark">
                        Coins
                      </p>
                    </button>
                  </div>
                  <button
                    onClick={() => handleTabChange("tickets")}
                    className={`p-2 rounded-full ${
                      activeTab === "tickets" ? "bg-blue-500" : "bg-gray-200"
                    } flex max-h-10 cursor-pointer`}
                  >
                    <img alt="" className="h-5 w-5 mr-1.5" src={blueTicket} />
                    <p className="font-SatoshiMedium text-sm text-textGreyDark">
                      Tickets
                    </p>
                  </button>
                </div>
                <div className="w-fit">
                  <div className="relative">
                    <input
                      style={{
                        fontFamily: "Satoshi",
                      }}
                      type="text"
                      placeholder="Enter Address or ID"
                      className="bg-greyVeryLight text-textGreyLight px-2 py-2 rounded-md focus:outline-none stroke-none border-none min-h-9 min-w-96"
                    />
                    <img
                      className="size-5 object-contain absolute right-2 top-1/2 transform -translate-y-1/2"
                      src={search}
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-5 text-textGreyLight">
                <div className="w-1/5 text-center">Rank</div>
                <div className="w-1/5 text-center">Address</div>
                <div className="w-1/5 text-center">Coin</div>
                <div className="w-1/5 text-center">Raffle Tickets earned</div>
                <div className="w-1/5 text-center">Socials</div>
              </div>
              {data.map((item, index) => (
                <div key={index} className="flex mt-5">
                  <div className="w-1/5 text-center">{item.rank}</div>
                  <div className="w-1/5 text-center">{item.address}</div>
                  <div className="w-1/5 flex items-center justify-center gap-2">
                    <div>{item.coins}</div>
                    <div>
                      <img alt="" className="" src={yellowDiamond} />
                    </div>
                  </div>
                  <div className="w-1/5 flex items-center justify-center gap-2">
                    <div>{item.tickets}</div>
                    <div>
                      <img alt="" className="" src={blueTicket} />
                    </div>
                  </div>
                  <div className="w-1/5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {item.socials.map((logo, index) => (
                        <img key={index} src={logo} className="size-6" alt="" />
                      ))}
                    </div>
                    {item.private && (
                      <div className="flex items-center justify-center gap-2">
                        <img src={lock} className="size-5" alt="" />
                        <p className="text-xs text-textGreyLight">Private</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-1/4 flex flex-col mr-5">
            <div class="mt-14 p-4 font-SatoshiMedium rounded-xl bg-white">
              <div className="flex justify-between">
                <div className="font-semibold text-2xl">Enable socials</div>
                <div className="pr-5">
                  <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                  </label>
                </div>
              </div>
              <div className="font-SatoshiMedium pt-5 text-textGreyLight">
                This lets other users to see your socials link, Disabling it
                will show your socials as private
              </div>
            </div>
            <div className="mt-5 rounded-lg font-SatoshiMedium p-4 bg-white">
              <div className="flex justify-between ">
                <div className="">
                  <p className="text-sm text-textGreyLight">Current Raffle</p>
                  <p className="text-2xl font-semibold font-SatoshiMedium">
                    Summer Warmer 1.2
                  </p>
                </div>
                <div className="p-4">
                  <img src={dotMenu} className="size-5" alt="" />
                </div>
              </div>
              <div className="flex mt-8">
                <div className="w-1/2">
                  <img className="h-5 w-5 object-contain" src={groupProfile} />
                  <p className="ml-2 font-SatoshiMedium text-textGreyLight text-sm">
                    200+ Raffle Tickets Entered
                  </p>
                </div>
                <div className="w-1/2">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
                    onClick={handleOpen}
                  >
                    Participate Now
                  </button>
                </div>
              </div>
              <div className="w-full h-[1px] rounded-xl bg-textGreyLight mt-5"></div>
              <div className="flex justify-between mt-4">
                <div className="">Raffle Leaderboard</div>
                <div className="">
                  <div
                    style={{ backgroundColor: "#D80202" }}
                    className="px-3.5 py-1 rounded-[20px] flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    <p className="text-left text-white text-sm font-SatoshiMedium ml-2">
                      Live
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="font-SatoshiMedium">
                  <div className="text-blue">#01</div>
                  <div className="text-textGreyLight">FHEF..FSFSDDFS</div>
                </div>
                <div>
                  <div className="text-textGreyLight text-xs">Amount</div>
                  <div>$ 68.05</div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="font-SatoshiMedium">
                  <div className="text-blue">#01</div>
                  <div className="text-textGreyLight">FHEF..FSFSDDFS</div>
                </div>
                <div>
                  <div className="text-textGreyLight text-xs">Amount</div>
                  <div>$ 68.05</div>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <div className="font-SatoshiMedium">
                  <div className="text-blue">#01</div>
                  <div className="text-textGreyLight">FHEF..FSFSDDFS</div>
                </div>
                <div>
                  <div className="text-textGreyLight text-xs">Amount</div>
                  <div>$ 68.05</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
