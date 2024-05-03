import Modal from "@material-ui/core/Modal";
import copy from "../assets/copy.svg";
import profilePic from "../assets/profilePic.png";
import groupProfile from "../assets/groupProfile.svg";
import referralPoster from "../assets/referralPoster.png";
import referralIcon from "../assets/referralIcon.svg";
import yellowDiamond from "../assets/yellow_diamond.svg";
import xLogo from "../assets/xLogo.png";
import { useMediaQuery } from "react-responsive";

export default function ReferralModal({ open, handleClose }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <Modal
      onClose={handleClose}
      open={open}
      style={{
        position: "absolute",
        backgroundColor: "#FFF",
        height: isSmallScreen ? "60%" : 500,
        width: isSmallScreen ? "90%" : 800,
        margin: "auto",
        color: "white",
        className: "NFTModal",
      }}
      className="h-[500px] w-[800px] max-[600px]:w-[95%]"
    >
      <div className="w-full h-full bg-white p-5 rounded-lg NFTModal sm:p-3overflow-y-scroll">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img alt="" className="h-8 w-8 object-contain" src={referralIcon} />
            <p className="text-xl font-SatoshiBold ml-2 text-black text-center">
              Referral
            </p>
          </div>
          <div className="flex items-center">
            <img
              alt=""
              className="h-6 w-6 object-contain mr-2"
              src={profilePic}
            />
            <p className="text-xs font-SatoshiMedium text-black text-center">
              0xa19009....13454
            </p>
          </div>
        </div>

        <div className="flex p-2 max-[600px]:flex-col">
          <div style={{ flex: 2 }} className="p-4">
            <img
              alt=""
              className="w-full object-contain"
              src={referralPoster}
            />
            <p className="font-SatoshiMedium text-base text-textGreyDark text-left mt-7">
              Unlock Common chest and get exciting prized like NFTs and Raffle
            </p>
            <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
              Tickets and level up yourself as a most astounding user in the
              realm of Defy
            </p>
            <p className="font-SatoshiMedium text-base text-textGreyDark text-left">
              Note: The chest will open once the Countdown ends
            </p>
          </div>

          <div className="flex-1 p-2">
            <div className="flex items-center justify-between sm:flex sm:flex-col">
              <div>
                <p className="font-SatoshiMedium text-base text-left text-black">
                  Defy Referrals
                </p>
                <p className="font-SatoshiMedium text-sm text-left text-textGreyDark mt sm:text-center">
                  You'll Get
                </p>
              </div>

              <div className="flex items-center py-2 px-3 bg-greyVeryLight rounded-full">
                <p className="text-black font-SatoshiBold text-base sm:text-sm">
                  2000
                </p>
                <img alt="" className="size-6 ml-2" src={yellowDiamond} />
              </div>
            </div>

            <div className="stroke-borderGrey border rounded py-1.5 px-2 mt-3 sm:flex sm:flex-col">
              <p className="font-SatoshiMedium text-sm text-left text-black sm:text-xs">
                Referral Code:
              </p>
              <div className="flex items-end justify-between sm:flex sm:flex-col">
                <p className="font-SatoshiMedium text-xs text-left text-textGreyDark sm:text-xs">
                  D E F Y 2 1 9 A J
                </p>
                <div className="flex items-center px-2 py-1 bg-greyVeryLight rounded-full mt-1">
                  <p className="text-textGreyDark font-SatoshiMedium text-sm">
                    Copy
                  </p>
                  <img alt="" className="size-4 ml-2" src={copy} />
                </div>
              </div>
            </div>

            <div className="bg-greyVeryLight py-4 px-3 mt-4">
              <p className="font-SatoshiMedium text-sm text-left text-black font-bold sm:text-xs">
                Share Link to your friends
              </p>
              <div className="items-center mt-6 flex sm:overflow-auto">
                <img alt="" className="size-6" src={xLogo} />
                <img alt="" className="size-6 ml-3" src={xLogo} />
                <img alt="" className="size-6 ml-3" src={xLogo} />
              </div>
            </div>

            <div className="flex items-center mt-10 sm:mt-5">
              <img
                alt=""
                className="h-5 w-5 object-contain"
                src={groupProfile}
              />
              <p className="ml-2 font-SatoshiMedium text-textGreyLight text-sm">
                234 Participants
              </p>
            </div>

            <div className="px-6  py-2.5 rounded-lg bg-bgBlue flex items-center justify-center mt-3 sm:w-full sm:p-1.5 sm:text-center">
              <p className="font-SatoshiMedium text-base text-white sm:text-xs">
                Copy Referral Link
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
