import Modal from "@material-ui/core/Modal";
import close from "../assets/close.svg"
import "../App.css"
import sound from "../assets/sound.svg"
import { useState } from "react";
import yellowDiamond from "../assets/yellow_diamond.svg"
import nft1 from "../assets/nft1.png"

import horse from "../assets/horse.png"
import blueTicket from "../assets/blueTicket.png"
import groupProfile from "../assets/groupProfile.svg"
import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import { motion } from "framer-motion";


export default function NFTBetModal({ open, handleClose }) {

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const [betX, setBetX] = useState(0)

  
    let marq = 0

    const [marqueeValue, setMarqueeValue] = useState(0)

   

    async function handleClick(){
        
        setMarqueeValue(50)
        await timeout(250)
        marq = 50

        // adjustMarquee(5, 100, true)
        while(marq < 1000){
            setMarqueeValue(curr => curr + 5)      
            marq += 5         
            await timeout(30)
        }
        await timeout(1500)
        
        marq = 100
        while(marq > 0){
            setMarqueeValue(curr => curr - 2)      
            marq -= 2
            await timeout(100)
        }

        setMarqueeValue(0)

        
      

    }

 
    

    return (
        <Modal
            onClose={handleClose}
            open={open}
            style={{
                position: "absolute",
                backgroundColor: "#FFF",
                // boxShadow: "2px solid black",
                height: '80vh',
                width: '80vw',
                margin: "auto",
                borderRadius: 8,
                backdropFilter: "none",
                outlineWidth: 0,
                outline: 'none',
                color: "white",
            }}

            outline='none'
            className="NFTModal"
        >
            <div className="w-full h-full bg-white px-6 py-6 rounded-lg NFTModal">

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img className="rounded h-10 w-10 object-cover" src={nft1} />
                        <div className="ml-2">
                            <p className="text-left font-SatoshiBold text-base text-black">Aptos Monkeys Exclusive #1067 </p>
                            <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">FLOOR - 5.576 APT </p>

                        </div>
                    </div>

                    <div className="flex items-center">
                        <img className="object-contain w-6 h-6 mr-6" src={sound} />
                        <img onClick={handleClose} className="object-contain w-4 h-4 mr-6 cursor-pointer" src={close} />

                    </div>
                </div>

                <div className="flex justify-between items-start w-full">

                    <div style={{ flex: 3, maxWidth: '66%' }}>

                        <div className="w-full h-[400px] bg-greyVeryLight py-5 mt-4">
                            <p className="text-center font-SatoshiBold text-base text-black">Your Favorite NFT at 1% price</p>
                            <div className="flex nowrap mt-5 max-w-full max-h-[150px] relative">

                                <Marquee className="" speed={marqueeValue} >
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
                                <div className="bg-black w-[2px] h-full absolute top-0 left-1/2 transform -translate-x-1/2 z-[100]">

                                </div>

                            </div>

            <div className="flex items-center justify-between mt-14">
                <div style={{flex:1}}>
                    
                </div>
                <div style={{flex:2}} className="relative items-center justify-center">
                    <motion.div 
                    animate={{
                        left:`${(betX * 25).toString()}%`
                    }}
                    style={{
                        top:-40,
                    }} className="absolute bg-textBlue py-1.5 px-2.5 rounded-full transform -translate-x-[45%]">
                            <p className="m-auto font-SatoshiMedium text-[10px] text-white w-16 text-center">{(betX+1)*100}x Upside</p>
                            <div className="arrow-down-marquee absolute bottom-0 left-1/2 transform translate-y-3/4 -translate-x-1/2"></div>
                    </motion.div>
                    <div className="h-1 bg-borderGrey">
                    <motion.div animate={{width: `${(betX * 25).toString()}%`}}  className="h-1 bg-textBlue"></motion.div>
                    <div onClick={()=>setBetX(0)} style={{ backgroundColor: betX >= 0 ? "#2071EE" : "#D9D9D9" }} className="h-3 w-3 rounded-full absolute left-0 top-0 transform -translate-y-1/3 cursor-pointer"></div>
                    <div onClick={()=>setBetX(1)} style={{ backgroundColor: betX >= 1 ? "#2071EE" : "#D9D9D9" }} className="h-3 w-3 bg-textBlue rounded-full absolute left-1/4 top-0 transform -translate-y-1/3 cursor-pointer"></div>
                    <div onClick={()=>setBetX(2)} style={{ backgroundColor: betX >= 2 ? "#2071EE" : "#D9D9D9" }} className="h-3 w-3 bg-textBlue rounded-full absolute left-2/4 top-0 transform -translate-y-1/3 cursor-pointer"></div>
                    <div onClick={()=>setBetX(3)} style={{ backgroundColor: betX >= 3 ? "#2071EE" : "#D9D9D9" }} className="h-3 w-3 bg-textBlue rounded-full absolute left-3/4 top-0 transform -translate-y-1/3 cursor-pointer"></div>
                    <div onClick={()=>setBetX(4)} style={{ backgroundColor: betX >= 4 ? "#2071EE" : "#D9D9D9" }} className="h-3 w-3 bg-textBlue rounded-full absolute left-full top-0 transform -translate-y-1/3 cursor-pointer"></div>


                    </div>

                </div>
                <div style={{flex:1}}>
                    
                </div>

            </div>

                            <div className="flex items-center justify-between px-5 mt-4">
                                <div className="w-2/3 py-3 bg-bgBlue rounded-lg cursor-pointer mx-2">
                                    <p className="text-center text-white text-base font-SatoshiBold m-auto">Place Bet</p>
                                </div>
                                <div onClick={handleClick} className="w-1/3 py-3 stroke-borderGrey border rounded-lg cursor-pointer mx-2 bg-white">
                                    <p className="text-center text-textGreyDark text-base font-SatoshiBold m-auto">Try it</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div style={{ flex: 2, maxWidth: '33%' }}>
                        <div className="flex items-center justify-between">
                            <p className="text-left font-SatoshiBold text-base text-black">Your Rewards</p>
                            <p style={{ color: "#F09205" }} className="text-right font-SatoshiBold text-base">Hurray! Congratulations 👏🏻</p>

                        </div>

                        <div className="w-full p-5 bg-greyVeryLight mt-5">
                            <div className="flex">
                                <div className="w-16 mx-2">
                                    <img className="w-full h-16 rounded" src={horse} />
                                    <p className="font-SatoshiMedium text-[10px] text-black">Jhonny Horse</p>
                                    <p className="font-SatoshiMedium text-[10px] text-textGreyDark">#7623</p>

                                </div>

                                <div className="w-16 mx-2">
                                    <img className="w-full h-16 rounded" src={horse} />
                                    <p className="font-SatoshiMedium text-[10px] text-black">Jhonny Horse</p>
                                    <p className="font-SatoshiMedium text-[10px] text-textGreyDark">#7623</p>

                                </div>

                                <div className="w-16 mx-2">
                                    <img className="w-full h-16 rounded" src={horse} />
                                    <p className="font-SatoshiMedium text-[10px] text-black">Jhonny Horse</p>
                                    <p className="font-SatoshiMedium text-[10px] text-textGreyDark">#7623</p>

                                </div>
                            </div>

                            <div className="flex mt-2.5">
                                <div className="w-16 mx-2">
                                    <div
                                        className="w-full h-16 rounded custom-shadow flex items-center">
                                        <img className="w-8 h-8 object-contain m-auto" src={blueTicket} />
                                    </div>
                                    <p className="font-SatoshiMedium text-[10px] text-black">Raffle Ticket</p>
                                    <p className="font-SatoshiMedium text-[10px] text-textGreyDark">x3</p>

                                </div>

                                <div className="w-16 mx-2">
                                    <div
                                        className="w-full h-16 rounded custom-shadow flex items-center">
                                        <img className="w-8 h-8 object-contain m-auto" src={yellowDiamond} />
                                    </div>
                                    <p className="font-SatoshiMedium text-[10px] text-black">Coins</p>
                                    <p className="font-SatoshiMedium text-[10px] text-textGreyDark">x500</p>

                                </div>


                            </div>

                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <div>
                                <p className="text-left font-SatoshiBold text-base text-black">Total Rewards</p>
                                <p className="text-left font-SatoshiMedium text-sm text-textGreyDark mt-1">5 Rewards</p>

                            </div>
                            <div className="px-6  py-2.5 rounded-lg bg-black flex  items-center justify-center cursor-pointer">
                                <p className="font-SatoshiMedium text-base text-white">Claim Rewards</p>
                            </div>
                        </div>

                        <div className="w-full rounded-tl-lg rounded-tr-lg bg-greyVeryLight flex items-center justify-between px-2 py-3 mt-6">
                            <div style={{ backgroundColor: "#D80202" }} className="px-3.5 py-1 rounded-[20px] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                <p className="text-left text-white text-sm font-SatoshiMedium ml-2">Live feed</p>
                            </div>

                            <div className="flex items-center">
                                <img className="h-5 w-5 object-contain" src={groupProfile} />
                                <p className="ml-2 font-SatoshiMedium text-textGreyLight text-sm">234 Participants</p>
                            </div>
                        </div>
                        <div className="w-full px-2 py-3 border-b border-l border-r stroke-borderGrey">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">0x9928..2893</p>
                                    <p className="text-left font-SatoshiMedium text-xs text-textGreyLight">0x9928..2893</p>

                                </div>

                                <p className="text-right font-SatoshiMedium text-sm text-textGreyDark">Collected 500 <span className="text-black">Coins</span></p>


                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <div>
                                    <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">0x9928..2893</p>
                                    <p className="text-left font-SatoshiMedium text-xs text-textGreyLight">0x9928..2893</p>

                                </div>

                                <p className="text-right font-SatoshiMedium text-sm text-textGreyDark">Collected 500 <span className="text-black">Coins</span></p>


                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <div>
                                    <p className="text-left font-SatoshiMedium text-sm text-textGreyDark">0x9928..2893</p>
                                    <p className="text-left font-SatoshiMedium text-xs text-textGreyLight">0x9928..2893</p>

                                </div>

                                <p className="text-right font-SatoshiMedium text-sm text-textGreyDark">Collected 500 <span className="text-black">Coins</span></p>


                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </Modal>
    )
}




