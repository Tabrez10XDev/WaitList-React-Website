import Modal from "@material-ui/core/Modal";
import blueTicket from "../assets/blueTicket.png";
import xLogo from "../assets/xLogo.png";
import twitterConnectPoster from "../assets/twitterConnectPoster.png";
import profilePic from "../assets/profilePic.png";
import coinAnim from "../assets/coinAnim.gif";
import groupProfile from "../assets/groupProfile.svg";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useMediaQuery } from "react-responsive";

export default function TaskModal({ open, handleClose, state }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

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

  return (
    <Modal
      onClose={handleClose}
      open={open}
      style={{
        position: "absolute",
        backgroundColor: "#FFF",
        // boxShadow: "2px solid black",
        height: isSmallScreen ? "60%" : 500,
        width: isSmallScreen ? "90%" : 800,
        margin: "auto",
        color: "white",
        className: "NFTModal",
      }}
    >
      <div className="w-full h-full bg-white p-5 rounded-lg NFTModal">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-8 w-8 object-contain" src={xLogo} />
            <p className="text-xl font-SatoshiBold ml-2 text-black text-center">
              {state.task.title}
            </p>
          </div>
          <div className="flex items-center">
            <img className="h-6 w-6 object-contain mr-2" src={profilePic} />
            {account && (
              <p className="text-xs font-SatoshiMedium text-black text-center">
                {account.address.substring(0, 8)}....{account.address.slice(-8)}
              </p>
            )}
          </div>
        </div>

        <div className="flex p-2 sm:flex sm:flex-col">
          <div style={{ flex: 2 }} className="p-4">
            <img
              className="w-full object-contain sm:w-full"
              src={twitterConnectPoster}
            />
            <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
              Description:
              <br />
              {state.task.description}
            </p>
          </div>

          <div className="flex-1 p-2">
            <div className="size-full h-auto bg-greyVeryLight rounded-xl">
              <img
                className="m-auto w-2/3 object-contain sm:w-1/5"
                src={coinAnim}
              />
            </div>

            <div className="stroke-borderGrey border rounded py-1.5 px-2 mt-3">
              <p className="font-SatoshiMedium text-sm text-left text-black">
                Rewards:
              </p>
              <div className="flex items-center justify-between">
                <p className="font-SatoshiMedium text-xs text-left text-textGreyDark">
                  You get:
                </p>
                <p className="font-SatoshiMedium text-xs text-right text-textGreyDark">
                  X 500 Coins
                </p>
              </div>
            </div>

            <div className="flex items-center mt-10 sm:mt-5">
              <img className="h-5 w-5 object-contain" src={groupProfile} />
              <p className="ml-2 font-SatoshiMedium text-textGreyLight text-sm sm:ml-1">
                234 Participants
              </p>
            </div>

            <div className="px-6  py-2.5 rounded-lg bg-bgBlue flex items-center justify-center mt-3">
              <p className="font-SatoshiMedium text-base text-white">
                Connect X
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
