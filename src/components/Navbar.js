import defy from "../assets/Defy_logo.svg"
import yellowDiamond from "../assets/yellow_diamond.svg"
import blueTicket from "../assets/blue_ticket.svg"

export default function Navbar({handleOpenTicket, handleOpenCoin}) {
    return (
        <nav className="w-9/12 mx-auto mt-8 mb-10">
            <ul className="flex justify-between align-center">
                <ul className="flex align-center">
                    <img src={defy} />
                    <li><a className="p-4 font-SatoshiBold text-2xl">Defy</a></li>

                </ul>
                <ul className="flex items-center justify-center">
                    <li><a className="font-SatoshiMedium text-xl mr-6">Quest</a></li>
                    <li><a className="font-SatoshiMedium text-xl mr-6">Raffle</a></li>
                    <li><a className="font-SatoshiMedium text-xl mr-6">Leaderboard</a></li>
                    <div className="bg-divider h-2/3 mr-6" style={{ width: 2 }}></div>
                    <div onClick={handleOpenCoin} className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointe mr-5">
                        <img className="h-5 w-5 mr-1.5" src={yellowDiamond} />
                        <p className="font-SatoshiMedium text-sm text-textGreyDark">90 Coins</p>
                    </div>
                    <div onClick={handleOpenTicket} className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointer mr-5">
                        <img className="h-5 w-5 mr-1.5" src={blueTicket} />
                        <p className="font-SatoshiMedium text-sm text-textGreyDark">3 Tickets</p>
                    </div>
                    <div className="px-6 py-2.5 rounded-full bg-black flex align-center justify-center cursor-pointer">
                        <p className="font-SatoshiMedium text-base text-white">Connect Wallet</p>
                    </div>
                </ul>
            </ul>
        </nav>
    );
}