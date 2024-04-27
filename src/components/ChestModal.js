import Modal from "@material-ui/core/Modal";
import blueTicket from "../assets/blueTicket.png"
import chest1 from "../assets/chest2.png"
import twitterConnectPoster from "../assets/twitterConnectPoster.png"
import profilePic from "../assets/profilePic.png"
import coinAnim from "../assets/coinAnim.gif"
import yellowDiamond from "../assets/yellow_diamond.svg"
import treasure from "../assets/treasure.svg"

export default function ChestModal({ open, handleClose }) {
    return (
        <Modal
            onClose={handleClose}
            open={open}
            style={{
                position: "absolute",
                backgroundColor: "#FFF",
                // boxShadow: "2px solid black",
                height: 500,
                width: 800,
                margin: "auto",
                color: "white",
            }}
        >
            <div className="w-full h-full bg-white p-5 rounded-lg ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img className="h-8 w-8 object-contain" src={treasure} />
                        <p className="text-xl font-SatoshiBold ml-2 text-black text-center">Golden Chest</p>

                    </div>
                    <div className="flex items-center">
                        <img className="h-6 w-6 object-contain mr-2" src={profilePic} />
                        <p className="text-xs font-SatoshiMedium text-black text-center">0xa19009....13454</p>

                    </div>
                </div>

                <div className="flex p-2">
                    <div style={{ flex: 2 }} className="p-4">
                        <div
                            style={{
                                background: `radial-gradient(#01D1F7, #077BB3)`,

                            }}
                            className="rounded-xl w-full h-[130px] flex align-center justify-center min-h-[210px]">
                            <img className="h-[100px] m-auto object-contain" src={chest1} />
                        </div>
                        <p className="font-SatoshiMedium text-base text-textGreyDark text-left mt-7">
                        Unlock Common chest and get exciting prized like NFTs and Raffle
                        </p>
                        <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
                        Tickets and level up yourself as a most astounding user in the realm of Defy 
                        </p>
                        <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
                        Note: The chest will open once the Countdown ends
                        </p>
                    </div>

                    <div className="flex-1 p-2">
                        <div className="size-full h-auto bg-greyVeryLight rounded-xl">
                            <img className="m-auto w-2/3 object-contain" src={coinAnim} />
                        </div>

                        <div className="stroke-borderGrey border rounded py-1.5 px-2 mt-3">
                            <p className="font-SatoshiMedium text-sm text-left text-black">Rewards:</p>
                            <div className="flex items-center justify-between">
                                <p className="font-SatoshiMedium text-xs text-left text-textGreyDark">You get:</p>
                                <p className="font-SatoshiMedium text-xs text-right">NFTs, Raffle Token</p>

                            </div>
                        </div>

                        <div className="flex items-center mt-4 justify-between">
                            <p className="ml-2 font-SatoshiMedium text-textGreyDark text-sm">You'll spend</p>
                            <div className="flex items-center p-1.5 bg-greyVeryLight rounded-full">
                                <p className="text-black font-SatoshiBold text-base">500</p>
                                <img className="size-6 ml-2" src={yellowDiamond}/>
                            </div>
                        </div>

                        <div className="px-6  py-2.5 rounded-lg bg-bgBlue flex items-center justify-center mt-3">
                            <p className="font-SatoshiMedium text-base text-white">Connect X</p>
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    )
}