import Navbar from "./Navbar"
import { useState } from "react"
import ActivityLogItem from "./ActivityLogItem";
import winnerPlaceHolder from "../assets/winnerPlaceHolder.png"
import raffleBg from "../assets/raffleBg.png"
import groupProfile from "../assets/groupProfile.svg"
import TopupModal from "./TopupModal";

export default function Raffle() {

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

    const [openTopup, setOpenTopup] = useState(false);
 
    const handleCloseTopup = () => {
        setOpenTopup(false);
    };
 
    const handleOpenTopup = () => {
        setOpenTopup(true);
    };

    const [winnersTabIndex, setWinnersTabIndex] = useState(0)


    return (
        <div>
            <Navbar handleOpenTicket={handleOpenTicket} handleOpenCoin={handleOpenCoin} />
            <div className="flex items-start px-20 mt-[80px]">
                <div style={{ flex: 1 }}>

                    <p className="font-SatoshiMedium text-base text-textGreyDark text-left">#31</p>
                    <p className="font-SatoshiMedium text-3xl text-left mt-4">
                        Giveaway<span className="bg-gradient-to-r from-purple to-blue text-transparent bg-clip-text">Raffle</span>
                    </p>
                    <p className="font-SatoshiMedium text-sm text-textGreyDark text-left mt-6">Get ready for a thrilling chance to jump the line! Our raffle feature offers an exciting opportunity for lucky participants to secure their spot on the Defy app waitlist. Simply enter the raffle, and if fortune smiles upon you, you'll be granted early access to the innovative Defy platform. Enter the raffle now and defy expectations!</p>

                    <div className="flex items-center justify-between mt-14">
                        <p className="text-left text-black text-base font-SatoshiBold">Activity Log</p>
                        <div className="px-3.5 py-2 bg-bgBlue rounded-full">
                            <p className="text-left text-white text-xs font-SatoshiMedium m-auto">Participating</p>
                        </div>
                    </div>

                    <div className="rounded-xl w-full bg-greyVeryLight py-2.5 px-2 h-[180px] mt-4">
                        <ActivityLogItem />
                    </div>

                </div>

                <div className="px-10 " style={{ flex: 2 }}>

                    <div className="flex justify-between items-start pt-5">
                        <div>
                            <p className="font-SatoshiBold text-2xl text-left text-black">
                                ☀️ Summer Warmer 1.2
                            </p>
                            <p className="font-SatoshiMedium text-[10px] text-left text-textGreyDark mt-4">
                                POOL OF<br /> <span className="text-green text-xl">5000 USD</span>
                            </p>
                        </div>

                        <div>
                            <p className="font-SatoshiMedium text-base text-right text-textGreyDark">
                                Draw Starts in
                            </p>
                            <div className="flex items-center">
                                <div className="mr-5">
                                    <p className="text-xl font-SatoshiBold text-center text-black">
                                        7
                                    </p>
                                    <p className="text-xs font-SatoshiMedium text-center text-textGreyDark">
                                        Days
                                    </p>
                                </div>
                                <div className="mr-5">
                                    <p className="text-xl font-SatoshiBold text-center text-black">
                                        12
                                    </p>
                                    <p className="text-xs font-SatoshiMedium text-center text-textGreyDark">
                                        Hours
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-SatoshiBold text-center text-black">
                                        32
                                    </p>
                                    <p className="text-xs font-SatoshiMedium text-center text-textGreyDark">
                                        Minutes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[320px] rounded-[20px] flex flex-col items-center justify-center mt-8"
                        style={{
                            backgroundImage: `url(${raffleBg})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }}
                    >
                        {/* <p className="text-center text-white font-SatoshiMedium text-[18px]">
                            Pool of
                        </p>
                        <p className="text-center text-white font-SatoshiBold text-[55px] mt-2">
                            $250
                        </p>
                        <p className="text-center text-white font-SatoshiMedium text-[32px] mt-4">
                            Summer Warmer
                        </p> */}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                        <p className="font-SatoshiMedium text-sm text-left text-textGreyDark">Winning Chance: <span className="text-green">70%</span></p>
                        <div className="flex items-center">
                            <img className="w-5 h-5 object-contain mr-2" src={groupProfile} />
                            <p className="font-SatoshiMedium text-sm text-right text-textGreyDark">200+ Raffle Tickets Entered</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <div className="flex-1 py-3 stroke-borderGrey border rounded-lg cursor-pointer mx-2">
                            <p className="text-center text-textGreyDark text-base font-SatoshiBold m-auto">Buy Tickets</p>
                        </div>
                        <div onClick={handleOpenTopup} className="flex-1 py-3 bg-bgBlue rounded-lg cursor-pointer mx-2">
                            <p className="text-center text-white text-base font-SatoshiBold m-auto">Top Up</p>
                        </div>
                    </div>

                </div>

                <div style={{ flex: 1 }}>
                    <p className="font-SatoshiBold text-xl text-black text-left">Winners</p>
                    <div className="w-full rounded-xl bg-greyVeryLight py-4 px-5 mt-4 h-[500px]">
                        <div style={{ backgroundColor: "#E1E4EA" }} className="rounded-full w-full p-1.5 flex justify-between items-center">
                            <div
                                onClick={() => setWinnersTabIndex(0)}
                                className={winnersTabIndex == 0 ? "RaffleWinnersSelectedDiv py-2" : "RaffleWinnersUnselectedDiv py-2"}>
                                <p className={winnersTabIndex == 0 ? "RaffleWinnersSelected m-auto text-center" : "RaffleWinnersUnselected text-center"}>Upcoming</p>
                            </div>
                            <div
                                onClick={() => setWinnersTabIndex(1)}
                                className={winnersTabIndex == 1 ? "RaffleWinnersSelectedDiv py-2" : "RaffleWinnersUnselectedDiv py-2"}>
                                <p className={winnersTabIndex == 1 ? "RaffleWinnersUnselected text-center" : "RaffleWinnersUnselected text-center"}>Previous</p>
                            </div>

                        </div>

                        <div className="mt-3">
                            <div className="w-full flex items-end justify-between mt-6">
                                <div className="flex items-center">
                                    <img className="w-10 h-10 object-cover rounded" src={winnerPlaceHolder} />
                                    <div className="ml-2">
                                        <p className="font-SatoshiMedium text-sm text-left">Summer Warmer☀️ 1.3</p>
                                        <p className="font-SatoshiMedium text-[10px] text-left text-textGreyDark mt-1">from April 22, 2024</p>

                                    </div>
                                </div>
                                <p className="font-SatoshiMedium text-xs">$450</p>
                            </div>

                            <div className="w-full flex items-end justify-between mt-6">
                                <div className="flex items-center">
                                    <img className="w-10 h-10 object-cover rounded" src={winnerPlaceHolder} />
                                    <div className="ml-2">
                                        <p className="font-SatoshiMedium text-sm text-left">Summer Warmer☀️ 1.3</p>
                                        <p className="font-SatoshiMedium text-[10px] text-left text-textGreyDark mt-1">from April 22, 2024</p>

                                    </div>
                                </div>
                                <p className="font-SatoshiMedium text-xs">$450</p>
                            </div>
                        </div>





                    </div>
                </div>

            </div>

            <TopupModal open={openTopup} handleClose={handleCloseTopup}/>

        </div>
    )
}