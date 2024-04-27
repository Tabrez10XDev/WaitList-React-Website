import Modal from "@material-ui/core/Modal";
import blueTicket from "../assets/blueTicket.png"
import xLogo from "../assets/xLogo.png"
import twitterConnectPoster from "../assets/twitterConnectPoster.png"
import profilePic from "../assets/profilePic.png"
import coinAnim from "../assets/coinAnim.gif"
import groupProfile from "../assets/groupProfile.svg"

export default function TaskModal({open, handleClose}){
    return(
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
                        <img className="h-8 w-8 object-contain" src={xLogo}/>
                        <p className="text-xl font-SatoshiBold ml-2 text-black text-center">Connect in X</p>

                </div>
                <div className="flex items-center">
                        <img className="h-6 w-6 object-contain mr-2"  src={profilePic}/>
                        <p className="text-xs font-SatoshiMedium text-black text-center">0xa19009....13454</p>

                </div>
            </div>

            <div className="flex p-2">
                <div style={{flex:2}} className="p-4">
                    <img className="w-full object-contain" src={twitterConnectPoster}/>
                    <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
                        Description:<br/>Claim 1000 coins by making a meme on the topic “Move On”.
                    </p>
                    <p className="font-SatoshiMedium text-base text-textGreyDark text-left mt-2">
                    Follow the instructions below:<br/>- Make a meme on the topic “Move On”. You can take some examples here:<br/>
                    Link 1, Link 2.<br/>- Post the meme on X and tag @defy.<br/>- Enter the link to your post here.
                    </p>
                </div>

                <div className="flex-1 p-2">
                    <div className="size-full h-auto bg-greyVeryLight rounded-xl">
                        <img className="m-auto w-2/3 object-contain" src={coinAnim}/>
                    </div>

                    <div className="stroke-borderGrey border rounded py-1.5 px-2 mt-3">
                        <p className="font-SatoshiMedium text-sm text-left text-black">Rewards:</p>
                        <div className="flex items-center justify-between">
                        <p className="font-SatoshiMedium text-xs text-left text-textGreyDark">You get:</p>
                        <p className="font-SatoshiMedium text-xs text-right">X 500 Coins</p>

                        </div>
                    </div>

                    <div className="flex items-center mt-10">
                        <img className="h-5 w-5 object-contain" src={groupProfile}/>
                        <p className="ml-2 font-SatoshiMedium text-textGreyLight text-sm">234 Participants</p>
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