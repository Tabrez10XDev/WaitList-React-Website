import chest1 from "../assets/chest1.png"
import chest2 from "../assets/chest2.png"
import chest3 from "../assets/chest3.png"
import chest4 from "../assets/chest4.png"
import ChestCard from "./ChestCard"
import { useEffect, useState } from "react"
import { TaskVolt, TaskX } from "./Task"
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
import TaskModal from "./TaskModal"
import ChestModal from "./ChestModal"
import ReferralModal from "./ReferralModal"
import ChooseNFTModal from "./ChooseNFTModal"
import NFTBetModal from "./NFTBetModal"
import axios from "axios"
import CONST from "../Constants"
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export default function Dashboard() {

    const [category, setCategory] = useState(0)

    const [openTicket, setOpenTicket] = useState(false);

    const [state, setState] = useState({
        task: {}
    })

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

    // useEffect(()=>{
    //     if(connected){
    //         axios.get(`${CONST.baseUrl}/users/nonce`,{
    //             "address":account?.address,
    //             "publicKey": account?.publicKey
    //         })
    //     }
    // },[connected])
 
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

    const [openTask, setOpenTask] = useState(false);

    const handleCloseTask = () => {
        setOpenTask(false);
    };

    const handleOpenTask = (id) => {
        axios.get(`${CONST.baseUrl}/tasks/${id}`).then((response) => {
            setState(curr => ({ ...curr, task: response.data.data }))
            setOpenTask(true);

        })
    };

    const [openChest, setOpenChest] = useState(false);

    const handleCloseChest = () => {
        setOpenChest(false);
    };

    const handleOpenChest = () => {
        setOpenChest(true);
    };

    const [openReferral, setOpenReferral] = useState(false);

    const handleCloseReferral = () => {
        setOpenReferral(false);
    };

    const handleOpenReferral = (id) => {
        setOpenReferral(true);
    };

    const [openChooseNFT, setOpenChooseNFT] = useState(false);

    const handleCloseChooseNFT = () => {
        setOpenChooseNFT(false);
    };

    const handleOpenChooseNFT = () => {
        setOpenChooseNFT(true);
    };

    const [openNFT, setOpenNFT] = useState(false);

    const handleCloseNFT = () => {
        setOpenNFT(false);
    };

    const handleOpenNFT = () => {
        setOpenNFT(true);
    };

    function fetchTasks() {
        axios.get(`${CONST.baseUrl}/tasks`).then((response) => {
            setTasks(response.data.data)
        })
    }


    useEffect(() => {
        fetchTasks()
    }, [])


    const [tasks, setTasks] = useState([])

    return (
        <div className="">

            <Navbar handleOpenTicket={handleOpenTicket} handleOpenCoin={handleOpenCoin} />

            <div className="w-11/12 mx-auto flex items-start max-[600px]:flex-col-reverse">
                <div className="w-4/6 max-[600px]:w-full">
                    <p className="font-SatoshiBold text-2xl text-left max-[600px]:mt-6">
                        Get Defy Insiders <span className="bg-gradient-to-r from-purple to-blue text-transparent bg-clip-text">NFT</span>
                    </p>
                    <p className="font-SatoshiMedium text-base text-grey text-left mt-3">
                        Earn coins to buy chest and get Defy Insiders NFT collection and early access to app.
                    </p>
                    <div className="flex mt-8 max-w-[100vw] overflow-x-scroll py-2">
                        <ChestCard onclick={handleOpenChest} startColour={'64C5B2'} endColour={'2F9B86'} image={chest3} />
                        <ChestCard onclick={handleOpenChest} startColour={'64C5B2'} endColour={'2F9B86'} image={chest4} />

                        <ChestCard onclick={handleOpenChest} startColour={'DA55F9'} endColour={'9225FA'} image={chest1} />
                        <ChestCard onclick={handleOpenChest} startColour={'01D1F7'} endColour={'077BB3'} image={chest2} />
                        {/*  <ChestCard onclick={handleOpenChest} startColour={'64C5B2'} endColour={'2F9B86'} image={chest3} />
                    <ChestCard onclick={handleOpenChest} startColour={'FFDF7A'} endColour={'E5A11B'} image={chest4} /> */}

                    </div>

                    <p className="font-SatoshiBold text-2xl text-left my-8">
                        Recommended Task
                    </p>

                    <div className="flex justify-start align-items overflow-x-scroll">
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
                    {tasks.map((ele, inx) => {
                        return (<TaskX ele={ele} onclick={handleOpenTask} />
                        )
                    })
                    }


                </div>

                <div className="w-2/6 flex flex-col items-end justify-center px-8 max-[600px]:w-full max-[600px]:flex-col-reverse max-[600px]:px-0">
                    <div className="w-full h-auto rounded-2xl bg-greyVeryLight stroke-borderGrey border-l relative px-6 py-4"
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
                            <div className="flex justify-between items-end mt-[-4px]">
                                <p className="font-SatoshiMedium text-xs text-grey">Collect Coins to Open Free Chest</p>
                                <div className="flex">
                                    <p className="font-SatoshiMedium text-base">2287</p>
                                    <img className="ml-2" src={yellowDiamond} />
                                </div>

                            </div>
                            <img className="w-10/12 m-auto" src={chestAnim} />
                        </div>
                    </div>

                    <div className="w-full bg-bgBlue rounded-2xl p-4 my-5">
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

                            <div onClick={handleOpenReferral} className="px-2.5 py-1.5 rounded-xl bg-black flex  items-center justify-center cursor-pointer">
                                <p className="font-SatoshiMedium text-base text-white">Refer now</p>
                            </div>
                        </div>
                    </div>


                    <div className="w-full  rounded-2xl px-5 py-6 purple-gradient">
                        <div className="flex items-align">
                            <img className="ml-2" src={star} />

                            <p className="font-SatoshiBold text-2xl text-white text-left ml-3">
                                NFT Raffle
                            </p>
                        </div>

                        <div className="flex items-center justify-between ">
                            <p className="font-Satoshi text-sm text-white text-left">
                                Raffle your favorite NFT and<br />make great potential.
                            </p>
                            <img className="object-contain w-1/3 ml-2" src={raffleImage} />


                        </div>

                        <div className="flex items-center justify-between mt-2">
                            <div></div>

                            <div onClick={handleOpenChooseNFT} className="px-6  py-2.5 rounded-lg bg-white flex  items-center justify-center cursor-pointer">
                                <p className="font-SatoshiMedium text-base text-black">Participate Now</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <TicketModal open={openTicket} handleClose={handleCloseTicket} />
            <CoinModal open={openCoin} handleClose={handleCloseCoin} />
            <TaskModal state={state} open={openTask} handleClose={handleCloseTask} />
            <ChestModal open={openChest} handleClose={handleCloseChest} />
            <ReferralModal open={openReferral} handleClose={handleCloseReferral} />
            <ChooseNFTModal open={openChooseNFT} handleClose={handleCloseChooseNFT} handleOpenNFT={handleOpenNFT} />
            <NFTBetModal open={openNFT} handleClose={handleCloseNFT} />

        </div>
    )
}