import Modal from "@material-ui/core/Modal";
import close from "../assets/close.svg";
import "../App.css";
import sound from "../assets/sound.svg";
import { useEffect, useState } from "react";
import yellowDiamond from "../assets/yellow_diamond.svg";
import nft1 from "../assets/nft1.png";
import ethLogo from "../assets/ethLogo.svg";
import tetherLogo from "../assets/tetherLogo.svg";
import dogeLogo from "../assets/dogeLogo.svg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import horse from "../assets/horse.png";
import blueTicket from "../assets/blueTicket.png";
import groupProfile from "../assets/groupProfile.svg";
import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import { motion } from "framer-motion";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk"

const aptosConfig = new AptosConfig({
  network: Network.MAINNET,
})
const aptos = new Aptos(aptosConfig);


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFTBetModal({ open, handleClose }) {
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

    const {
      connect,
      account,
      network,
      connected,
      disconnect,
      wallet,
      wallets,
      signAndSubmitTransaction,
      signTransaction,
      signMessage,
  } = useWallet();

// const account = {
//   address: "0xd9acf245caa2f8b3df92b296708676ec4bcde4a948913f9a61e28b398d7dd762"}

  const [rewards, setRewards] = useState({});
  const [rewardNft, setRewardNft] = useState([]);
  const [rewardNftV2, setRewardNftV2] = useState([]);

  const [betX, setBetX] = useState(0);

  let marq = 0;

  const [marqueeValue, setMarqueeValue] = useState(0);



  async function handleClick() {
    setMarqueeValue(50);
    await timeout(250);
    marq = 50;

    // adjustMarquee(5, 100, true)
    while (marq < 1000) {
      setMarqueeValue((curr) => curr + 5);
      marq += 5;
      await timeout(30);
    }
    await timeout(1500);

    marq = 100;
    while (marq > 0) {
      setMarqueeValue((curr) => curr - 2);
      marq -= 2;
      await timeout(100);
    }

    setMarqueeValue(0);
  }


  const getRewards = async () => {
    try {
      const rewards = await aptos.getAccountResource({
        accountAddress: process.env.REACT_APP_RESOURCE_ADDR,
        resourceType: `${process.env.REACT_APP_MODULE_ADDR}::nft_lottery::Rewards`
      })
      if (!rewards) return
      const handle = rewards.rewards.handle;
      const data = {
        key_type: "address",
        key: account?.address,
        value_type: `${process.env.REACT_APP_MODULE_ADDR}::nft_lottery::Reward`,
      }

      let reward = await aptos.getTableItem({ handle, data })

      setRewards({
        apt: reward.apt.value,
        free_spin: reward.free_spin,
        raffle_ticket: reward.raffle_ticket,
        web2_stars: reward.web2_stars
      })

      const nftv1 = reward.nft.map((nft) => nft.inner)
      setRewardNft(nftv1)
      const nftv2 = reward.nft_v2.map((nft) => nft.inner)
      setRewardNftV2(nftv2)
    }
    catch (e) {
      console.log('error', e)
    }
  }

  useEffect(()=>{
    if(open)
      getRewards()
  },[open])

  return (
    <Modal
      onClose={handleClose}
      open={open}
      style={{
        position: "absolute",
        backgroundColor: "#FFF",
        // boxShadow: "2px solid black",
        height: "90vh",
        width: "80vw",
        margin: "auto",
        borderRadius: 8,
        backdropFilter: "none",
        outlineWidth: 0,
        outline: "none",
        color: "white",
      }}
      outline="none"
      className="NFTModal"
    >
      <div className="w-full h-full bg-white px-6 py-6 rounded-lg NFTModal">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="rounded h-10 w-10 object-cover" src={nft1} />
            <div className="ml-2">
              <p className="text-left font-SatoshiBold text-base text-black">
                Aptos Monkeys Exclusive #1067{" "}
              </p>
              <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">
                FLOOR - 5.576 APT{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <img className="object-contain w-6 h-6 mr-6" src={sound} />
            <img
              onClick={handleClose}
              className="object-contain w-4 h-4 mr-6 cursor-pointer"
              src={close}
            />
          </div>
        </div>

        <div className="flex justify-between items-start w-full">
          <div style={{ flex: 3, maxWidth: "66%" }}>
            <div className="w-full h-[400px] bg-greyVeryLight py-5 mt-4">
              <p className="text-center font-SatoshiBold text-base text-black">
                Your Favorite NFT at 1% price
              </p>
              <div className="flex nowrap mt-5 max-w-full max-h-[150px] relative">
                <Marquee className="" speed={marqueeValue}>
                  <MarqueeItem />
                  <MarqueeItem />
                  <MarqueeItem />
                  <MarqueeItem />
                  <MarqueeItem />
                  <MarqueeItem />
                  <MarqueeItem />
                </Marquee>
                <div class="arrow-up absolute bottom-0 left-1/2 transform -translate-x-1/2 z-[100]"></div>
                <div class="arrow-down absolute top-0 left-1/2 transform -translate-x-1/2 z-[100]"></div>
                <div className="bg-black w-[2px] h-full absolute top-0 left-1/2 transform -translate-x-1/2 z-[100]"></div>
              </div>

              <div className="flex items-center justify-between mt-14 text-black">
                <div className="pl-6  absolute">
                  <b>Set Your Odds</b>
                </div>
                <div style={{ flex: 1 }}></div>
                <div
                  style={{ flex: 2 }}
                  className="relative items-start justify-center "
                >
                  <motion.div
                    animate={{
                      left: `${(betX * 25).toString()}%`,
                    }}
                    style={{
                      top: -40,
                    }}
                    className="absolute bg-textBlue py-1.5 px-2.5 rounded-full transform -translate-x-[45%]"
                  >
                    <p className="m-auto font-SatoshiMedium text-[10px] text-white w-16 text-center">
                      {(betX + 1) * 100}x Upside
                    </p>
                    <div className="arrow-down-marquee absolute bottom-0 left-1/2 transform translate-y-3/4 -translate-x-1/2"></div>
                  </motion.div>
                  <div className="h-1 bg-borderGrey">
                    <motion.div
                      animate={{ width: `${(betX * 25).toString()}%` }}
                      className="h-1 bg-textBlue"
                    ></motion.div>
                    <div
                      onClick={() => setBetX(0)}
                      style={{
                        backgroundColor: betX >= 0 ? "#2071EE" : "#D9D9D9",
                      }}
                      className="h-3 w-3 rounded-full absolute left-0 top-0 transform -translate-y-1/3 cursor-pointer"
                    ></div>
                    <div
                      onClick={() => setBetX(1)}
                      style={{
                        backgroundColor: betX >= 1 ? "#2071EE" : "#D9D9D9",
                      }}
                      className="h-3 w-3 bg-textBlue rounded-full absolute left-1/4 top-0 transform -translate-y-1/3 cursor-pointer"
                    ></div>
                    <div
                      onClick={() => setBetX(2)}
                      style={{
                        backgroundColor: betX >= 2 ? "#2071EE" : "#D9D9D9",
                      }}
                      className="h-3 w-3 bg-textBlue rounded-full absolute left-2/4 top-0 transform -translate-y-1/3 cursor-pointer"
                    ></div>
                    <div
                      onClick={() => setBetX(3)}
                      style={{
                        backgroundColor: betX >= 3 ? "#2071EE" : "#D9D9D9",
                      }}
                      className="h-3 w-3 bg-textBlue rounded-full absolute left-3/4 top-0 transform -translate-y-1/3 cursor-pointer"
                    ></div>
                    <div
                      onClick={() => setBetX(4)}
                      style={{
                        backgroundColor: betX >= 4 ? "#2071EE" : "#D9D9D9",
                      }}
                      className="h-3 w-3 bg-textBlue rounded-full absolute left-full top-0 transform -translate-y-1/3 cursor-pointer"
                    ></div>
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="flex p-2 rounded-3xl w-28 h-10 ml-7 bg-white">
                    <input
                      type="text"
                      className="w-1/2 p-1 h-6 focus:outline-none"
                    />
                    <div className="h-[26px] w-[2px] bg-black"></div>
                    <div>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-12 pl-1 ml-1 mb-2 h-6 justify-center rounded-2xl bg-gray-100 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <img src={ethLogo} className="h-6 w-6" alt="" />
                            <ChevronDownIcon
                              className="-mr-1 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <img
                                      src={dogeLogo}
                                      alt=""
                                      className="h-8 w-8"
                                    />
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    <img
                                      src={tetherLogo}
                                      alt=""
                                      className="h-8 w-8"
                                    />
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-5 mt-4">
                <div className="w-2/3 py-3 bg-bgBlue rounded-lg cursor-pointer mx-2">
                  <p className="text-center text-white text-base font-SatoshiBold m-auto">
                    Place Bet
                  </p>
                </div>
                <div
                  onClick={handleClick}
                  className="w-1/3 py-3 stroke-borderGrey border rounded-lg cursor-pointer mx-2 bg-white"
                >
                  <p className="text-center text-textGreyDark text-base font-SatoshiBold m-auto">
                    Try it
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row text-black ">
              <div className="px-5 py-2 w-1/2 m-2">
                <b>Detail</b>
                <table class="table-auto text-sm">
                  <tbody>
                    <tr>
                      <td class="">Potential Upside</td>
                      <td className="pl-4">100x</td>
                    </tr>
                    <tr class="">
                      <td class=" ">Odds of Winning</td>
                      <td className="pl-4">1%</td>
                    </tr>
                    <tr>
                      <td>NFT Price</td>
                      <td className="pl-4">120.5</td>
                    </tr>
                    <tr>
                      <td>Use Free Spin?</td>
                      <td className="pl-4">1.267</td>
                    </tr>
                    <tr>
                      <td>You Pay</td>
                      <td className="pl-4">1.267</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-5 py-2 w-1/2 m-2">
                <b>Reward Collection</b>
                <table class="table-auto text-sm">
                  <tbody>
                    <tr>
                      <td class="">NFT</td>
                      <td className="pl-4">1%</td>
                    </tr>
                    <tr class="">
                      <td class=" ">Coins</td>
                      <td className="pl-4">5%</td>
                    </tr>
                    <tr>
                      <td>Free Spin</td>
                      <td className="pl-4">10%</td>
                    </tr>
                    <tr>
                      <td>Cashback</td>
                      <td className="pl-4">30%</td>
                    </tr>
                    <tr>
                      <td>Raffles</td>
                      <td className="pl-4">5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div style={{ flex: 2, maxWidth: "33%" }}>
            <div className="flex items-center justify-between">
              <p className="text-left font-SatoshiBold text-base text-black">
                Your Rewards
              </p>
              <p
                style={{ color: "#F09205" }}
                className="text-right font-SatoshiBold text-base"
              >
                Hurray! Congratulations 👏🏻
              </p>
            </div>

            <div className="w-full p-5 bg-greyVeryLight mt-5">
              <div className="flex">
                <div className="w-16 mx-2">
                  <img className="w-full h-16 rounded" src={horse} />
                  <p className="font-SatoshiMedium text-[10px] text-black">
                    Jhonny Horse
                  </p>
                  <p className="font-SatoshiMedium text-[10px] text-textGreyDark">
                    #7623
                  </p>
                </div>

                <div className="w-16 mx-2">
                  <img className="w-full h-16 rounded" src={horse} />
                  <p className="font-SatoshiMedium text-[10px] text-black">
                    Jhonny Horse
                  </p>
                  <p className="font-SatoshiMedium text-[10px] text-textGreyDark">
                    #7623
                  </p>
                </div>

                <div className="w-16 mx-2">
                  <img className="w-full h-16 rounded" src={horse} />
                  <p className="font-SatoshiMedium text-[10px] text-black">
                    Jhonny Horse
                  </p>
                  <p className="font-SatoshiMedium text-[10px] text-textGreyDark">
                    #7623
                  </p>
                </div>
              </div>

              <div className="flex mt-2.5">
                <div className="w-16 mx-2">
                  <div className="w-full h-16 rounded custom-shadow flex items-center">
                    <img
                      className="w-8 h-8 object-contain m-auto"
                      src={blueTicket}
                    />
                  </div>
                  <p className="font-SatoshiMedium text-[10px] text-black">
                    Raffle Ticket
                  </p>
                  <p className="font-SatoshiMedium text-[10px] text-textGreyDark">
                    x{rewards.raffle_ticket}
                  </p>
                </div>

                <div className="w-16 mx-2">
                  <div className="w-full h-16 rounded custom-shadow flex items-center">
                    <img
                      className="w-8 h-8 object-contain m-auto"
                      src={yellowDiamond}
                    />
                  </div>
                  <p className="font-SatoshiMedium text-[10px] text-black">
                    Coins
                  </p>
                  <p className="font-SatoshiMedium text-[10px] text-textGreyDark">
                    x{rewards.web2_stars}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-left font-SatoshiBold text-base text-black">
                  Total Rewards
                </p>
                <p className="text-left font-SatoshiMedium text-sm text-textGreyDark mt-1">
                  5 Rewards
                </p>
              </div>
              <div className="px-6  py-2.5 rounded-lg bg-black flex  items-center justify-center cursor-pointer">
                <p className="font-SatoshiMedium text-base text-white">
                  Claim Rewards
                </p>
              </div>
            </div>

            <div className="w-full rounded-tl-lg rounded-tr-lg bg-greyVeryLight flex items-center justify-between px-2 py-3 mt-6">
              <div
                style={{ backgroundColor: "#D80202" }}
                className="px-3.5 py-1 rounded-[20px] flex items-center justify-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <p className="text-left text-white text-sm font-SatoshiMedium ml-2">
                  Live feed
                </p>
              </div>

              <div className="flex items-center">
                <img className="h-5 w-5 object-contain" src={groupProfile} />
                <p className="ml-2 font-SatoshiMedium text-textGreyLight text-sm">
                  234 Participants
                </p>
              </div>
            </div>
            <div className="w-full px-2 py-3 border-b border-l border-r stroke-borderGrey">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">
                    0x9928..2893
                  </p>
                  <p className="text-left font-SatoshiMedium text-xs text-textGreyLight">
                    0x9928..2893
                  </p>
                </div>

                <p className="text-right font-SatoshiMedium text-sm text-textGreyDark">
                  Collected 500 <span className="text-black">Coins</span>
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div>
                  <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">
                    0x9928..2893
                  </p>
                  <p className="text-left font-SatoshiMedium text-xs text-textGreyLight">
                    0x9928..2893
                  </p>
                </div>

                <p className="text-right font-SatoshiMedium text-sm text-textGreyDark">
                  Collected 500 <span className="text-black">Coins</span>
                </p>
              </div>
              {/* <div className="flex items-center justify-between mt-5">
                <div>
                  <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">
                    0x9928..2893
                  </p>
                  <p className="text-left font-SatoshiMedium text-xs text-textGreyLight">
                    0x9928..2893
                  </p>
                </div>

                <p className="text-right font-SatoshiMedium text-sm text-textGreyDark">
                  Collected 500 <span className="text-black">Coins</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
