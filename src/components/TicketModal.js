import Modal from "@material-ui/core/Modal";
import blueTicket from "../assets/blueTicket.png"

export default function TicketModal({open, handleClose}){
    return(
        <Modal
        onClose={handleClose}
        open={open}
        style={{
            position: "absolute",
            backgroundColor: "#FFF",
            // boxShadow: "2px solid black",
            height: 320,
            width: 350,
            margin: "auto",
            color: "white",
            className:"NFTModal"
        }}
    >
        <div className="w-full h-full bg-white p-5 rounded-lg NFTModal">
            <p className="text-xl font-SatoshiBold mx-auto text-black text-center">Raffle Ticket</p>
            <img className="w-1/3 my-8 mx-auto" src={blueTicket}/>

            <div className="flex w-2/3 mx-auto px-1.5 stroke-borderGrey border items-center justify-between rounded-[10px]">
                <p className="text-left text-base font-SatoshiMedium text-black">
                Your Have
                </p>
                <div className="px-3 my-1 py-1 rounded-lg bg-greyVeryLight flex items-center">
                    <p className="text-base font-SatoshiBold text-black">52</p>
                    <img className="h-4 ml-2" src={blueTicket}/>
                </div>
            </div>
            <p className="text-center text-sm font-SatoshiMedium text-textGreyDark mt-6">
            Using Raffle tickets you can purchase NFTs and win much more.
            </p>
        </div>
    </Modal>
    )
}