import Modal from "@material-ui/core/Modal";
import blueTicket from "../assets/blueTicket.png"
import coinAnim from "../assets/coinAnim.gif"
import yellowDiamond from "../assets/yellow_diamond.svg"

export default function CoinModal({open, handleClose}){
    return(
        <Modal
        onClose={handleClose}
        open={open}
        style={{
            position: "absolute",
            backgroundColor: "#FFF",
            // boxShadow: "2px solid black",
            height: 350,
            width: 350,
            margin: "auto",
            color: "white",
        }}
    >
        <div className="w-full h-full bg-white p-5 rounded-lg ">
            <p className="text-xl font-SatoshiBold mx-auto text-black text-center">Coins</p>
            <img className="w-1/3 object-contain my-2 mx-auto" src={coinAnim}/>

            <div className="flex w-2/3 mx-auto px-1.5 stroke-borderGrey border items-center justify-between rounded-[10px]">
                <p className="text-left text-base font-SatoshiMedium text-black">
                Your Have
                </p>
                <div className="px-3 my-1 py-1 rounded-lg bg-greyVeryLight flex items-center">
                    <p className="text-base font-SatoshiBold text-black">1,723</p>
                    <img className="h-4 ml-2" src={yellowDiamond}/>
                </div>
            </div>
            <p className="text-center text-sm font-SatoshiMedium text-textGreyDark mt-6">
            Coins enables you to unlock treasures, get<br/>exciting rewards and much more
            </p>
        </div>
    </Modal>
    )
}