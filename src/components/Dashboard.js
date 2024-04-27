import chest1 from "../assets/chest1.png"
import chest2 from "../assets/chest2.png"
import chest3 from "../assets/chest3.png"
import chest4 from "../assets/chest4.png"
import ChestCard from "./ChestCard"
import { useState } from "react"
import Task from "./Task"
import yellowDiamond from "../assets/yellow_diamond.svg"
import bgRay from "../assets/bgRay.png"
import chestAnim from "../assets/chestAnim.gif"
import info from "../assets/info.svg"
import star from "../assets/star.svg"
import raffleImage from "../assets/raffleImage.png"
import Navbar from "./Navbar"
import "../App.css"
import TicketModal from "./TicketModal"
import CoinModal from "./CoinModal"

export default function Dashboard() {

    const [category, setCategory] = useState(0)

    const [openTicket, setOpenTicket] = useState(false);
 
    const handleCloseTicket = () => {
        setOpenTicket(false);
    };
 
    const handleOpenTicket = () => {
        setOpenTicket(true);
    };

    const [openCoin, setOpenCoin] = useState(false);
 
    const handleCloseCoin = () => {
        setOpenCoin(false);
    };
 
    const handleOpenCoin = () => {
        setOpenCoin(true);
    };

    return (
        <div className="">

        <Navbar handleOpenTicket={handleOpenTicket} handleOpenCoin={handleOpenCoin}/>

        <div className="w-10/12 mx-auto flex">
            <div className="w-4/6">
                <p className="font-SatoshiBold text-2xl text-left">
                    Get Defy Insiders <span className="bg-gradient-to-r from-purple to-blue text-transparent bg-clip-text">NFT</span>
                </p>
                <p className="font-SatoshiMedium text-base text-grey text-left">
                    Earn coins to buy chest and get Defy Insiders NFT collection and early access to app.
                </p>
                <div className="flex">
                    <ChestCard startColour={'DA55F9'} endColour={'9225FA'} image={chest1} />
                    <ChestCard startColour={'01D1F7'} endColour={'077BB3'} image={chest2} />
                    <ChestCard startColour={'64C5B2'} endColour={'2F9B86'} image={chest3} />
                    <ChestCard startColour={'FFDF7A'} endColour={'E5A11B'} image={chest4} />

                </div>

                <p className="font-SatoshiBold text-2xl text-left">
                    Recommended Task
                </p>

                <div className="flex justify-start align-items">
                    <div onClick={() => setCategory(0)}
                        className={category == 0 ? "selected-div" : "unselected-div"}>
                        <p className={category == 0 ? "selected" : "unselected"}>All(32)</p>
                    </div>
                    <div onClick={() => setCategory(1)}
                        className={category == 1 ? "selected-div" : "unselected-div"}>
                        <p className={category == 1 ? "selected" : "unselected"}>Social(12)</p>
                    </div>

                    <div onClick={() => setCategory(2)}
                        className={category == 2 ? "selected-div" : "unselected-div"}>
                        <p className={category == 2 ? "selected" : "unselected"}>De-Fi(6)</p>
                    </div>

                    <div onClick={() => setCategory(3)}
                        className={category == 3 ? "selected-div" : "unselected-div"}>
                        <p className={category == 3 ? "selected" : "unselected"}>Games(20)</p>
                    </div>

                    <div onClick={() => setCategory(4)}
                        className={category == 4 ? "selected-div" : "unselected-div"}>
                        <p className={category == 4 ? "selected" : "unselected"}>Featured(12)</p>
                    </div>

                    <div onClick={() => setCategory(5)}
                        className={category == 5 ? "selected-div" : "unselected-div"}>
                        <p className={category == 5 ? "selected" : "unselected !text-green"}>Completed(10)</p>
                    </div>




                </div>
                <div className="h-[1px] w-full bg-textGreyLight" />
                <Task />



            </div>

            <div className="w-2/6 flex flex-col items-end justify-center">
                <div className="size-80 rounded-2xl bg-greyVeryLight stroke-borderGrey border-l relative px-6 py-4"
                    style={{
                        backgroundImage: `url(${bgRay})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div>
                        <div className="flex justify-between">
                            <p className="font-SatoshiBold text-xl">Free Chest</p>
                            <p className="font-SatoshiMedium text-sm text-grey">Remaining</p>

                        </div>
                        <div className="flex justify-between">
                            <p className="font-SatoshiMedium text-xs text-grey">Collect Coins to Open Free Chest</p>
                            <div className="flex">
                                <p className="font-SatoshiMedium text-base">2287</p>
                                <img className="ml-2" src={yellowDiamond} />
                            </div>

                        </div>
                        <img className="w-10/12 m-auto" src={chestAnim} />
                    </div>
                </div>

                <div className="w-80 bg-bgBlue rounded-2xl p-4">
                    <div className="flex items-align justify-between">
                        <div className="flex items-align">
                            <p className="font-SatoshiBold text-lg text-white text-left">
                                Get 2500
                            </p>
                            <img className="ml-2" src={yellowDiamond} />
                        </div>
                        <img src={info} />
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-Satoshi text-base text-white text-left">
                            for every successful<br />referral.
                        </p>

                        <div className="px-2.5 py-1.5 rounded-xl bg-black flex  items-center justify-center">
                            <p className="font-SatoshiMedium text-base text-white">Refer now</p>
                        </div>
                    </div>
                </div>


                <div className="w-80  rounded-2xl px-5 py-6 purple-gradient">
                        <div className="flex items-align">
                        <img className="ml-2" src={star} />

                            <p className="font-SatoshiBold text-2xl text-white text-left ml-3">
                            NFT Raffle
                            </p>
                        </div>

                    <div className="flex items-center justify-between mt-2">
                        <p className="font-Satoshi text-sm text-white text-left">
                        Raffle your favorite NFT and<br/>make great potential.
                        </p>
                        <img className="object-contain flex-1 w-1/3 ml-2"  src={raffleImage} />

                        
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div></div>

                        <div className="px-6  py-2.5 rounded-lg bg-white flex  items-center justify-center">
                            <p className="font-SatoshiMedium text-base text-black">Participate Now</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <TicketModal open={openTicket} handleClose={handleCloseTicket}/>
        <CoinModal open={openCoin} handleClose={handleCloseCoin}/>

        </div>
    )
}