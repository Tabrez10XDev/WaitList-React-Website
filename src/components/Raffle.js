import Navbar from "./Navbar"
import { useState } from "react"


export default function Raffle(){

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

    return(
        <div>
                    <Navbar handleOpenTicket={handleOpenTicket} handleOpenCoin={handleOpenCoin}/>
                    <div className="flex items-center">
                        <div style={{flex:1}}>

                        </div>

                        <div style={{flex:2}}>

                        </div>

                        <div style={{flex:1}}>

                        </div>

                    </div>

        </div>
    )
}