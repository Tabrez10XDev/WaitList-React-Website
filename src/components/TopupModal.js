import Modal from "@material-ui/core/Modal";
import blueTicket from "../assets/blueTicket.png"
import chest1 from "../assets/chest2.png"
import twitterConnectPoster from "../assets/twitterConnectPoster.png"
import profilePic from "../assets/profilePic.png"
import coinAnim from "../assets/coinAnim.gif"
import yellowDiamond from "../assets/yellow_diamond.svg"
import raffleBg from "../assets/raffleBg.png"

export default function TopupModal({ open, handleClose }) {
    return (
        <Modal
            onClose={handleClose}
            open={open}
            style={{
                position: "absolute",
                backgroundColor: "#FFF",
                // boxShadow: "2px solid black",
                height: 550,
                width: 800,
                margin: "auto",
                color: "white",
                className: "NFTModal"
            }}
        >
            <div className="w-full h-full bg-white p-5 rounded-lg NFTModal">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <p className="text-xl font-SatoshiBold ml-2 text-black text-center">☀️ Summer Warmer 1.2</p>

                    </div>
                    <div className="px-3.5 py-2 bg-textGreyLight rounded-[20px]">
                        <p className="text-left text-white text-xs font-SatoshiMedium m-auto">Not Participating</p>
                    </div>
                </div>

                <div className="flex p-2">
                    <div style={{ flex: 2 }} className="p-4">
                        <img className="w-full object-contain" src={raffleBg} />
                        <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
                            Description:<br />Claim 1000 coins by making a meme on the topic “Move On”.
                        </p>
                        <p className="font-SatoshiMedium text-base text-textGreyDark text-left mt-2">
                            Follow the instructions below:<br />- Make a meme on the topic “Move On”. You can take some examples here:<br />
                            Link 1, Link 2.<br />- Post the meme on X and tag @defy.<br />- Enter the link to your post here.
                        </p>
                    </div>

                    <div className="flex-1 p-2">
                        <div className="w-full items-center justify-between flex">
                            <p className="font-SatoshiBold text-xl text-black">Participate</p>
                            <div style={{ backgroundColor: "#D80202" }} className="px-3.5 py-1 rounded-[20px] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                <p className="text-left text-white text-sm font-SatoshiMedium ml-2">Live</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-5">
                            <p className="text-left text-black text-sm font-SatoshiMedium">Chance of Winning</p>
                            <p className="text-right text-green text-sm font-SatoshiBold">70%</p>
                        </div>

                        <div
                            style={{
                                background: 'linear-gradient(90deg, #FF440A, #FF9900, #FFD600, #84EC00, #39CE05)'
                            }}
                            className="relative rounded-md  h-5 w-full mt-4">
                            <div
                                style={{
                                    width: '30%',
                                    right: 0
                                }}
                                className="absolute top-0 h-5 bg-greyVeryLight rounded-br-md rounded-tr-md">

                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap">


                            <div className="py-1 px-[18px] stroke-borderGrey border rounded-[10px] cursor-pointer mx-0.5">
                                <p className="text-center text-textGreyDark text-sm font-SatoshiMedium m-auto">5</p>
                            </div>
                            <div className="py-1 px-[18px] stroke-borderGrey border rounded-[10px] cursor-pointer mx-0.5">
                                <p className="text-center text-textGreyDark text-sm font-SatoshiMedium m-auto">10</p>
                            </div>
                            <div className="py-1 px-[18px] stroke-borderGrey border rounded-[10px] cursor-pointer mx-0.5">
                                <p className="text-center text-textGreyDark text-sm font-SatoshiMedium m-auto">25</p>
                            </div>
                            <div className="py-1 px-[18px] stroke-borderGrey border rounded-[10px] cursor-pointer mx-0.5">
                                <p className="text-center text-textGreyDark text-sm font-SatoshiMedium m-auto">50</p>
                            </div>



                        </div>

                        <p className="mt-4 text-left text-black text-xs font-SatoshiMedium">Enter Count</p>

                        <input
                            style={{
                                fontFamily: 'SatoshiMedium',
                            }}
                            type="text"
                            value={"2"}
                            className="mt-2 text-black px-2 py-2 rounded-md focus:outline-none stroke-borderGrey border-2 min-h-8  w-full"
                        />



                        <div className="flex items-center mt-4 justify-between">
                            <p className="ml-2 font-SatoshiMedium text-textGreyDark text-sm">You'll have</p>
                            <div className="flex items-center px-2.5 py-1.5 bg-greyVeryLight rounded-full">
                                <img className="size-6 object-contain mr-2" src={blueTicket} />
                                <p className="text-textGreyDark font-SatoshiMedium text-base">0 Ticket</p>
                            </div>
                        </div>

                        <div className=" py-3 bg-bgBlue rounded-lg cursor-pointer mt-4">
                            <p className="text-center text-white text-base font-SatoshiBold m-auto">Spend Tickets   </p>
                        </div>
                        <p style={{ color: "#2071EE" }} className="text-center text-sm font-SatoshiMedium mx-auto mt-3.5 underline">Buy Tickets ?</p>


                    </div>
                </div>
            </div>
        </Modal>
    )
}