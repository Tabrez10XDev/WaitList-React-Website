import defy from "../assets/Defy_logo.svg"
import yellowDiamond from "../assets/yellow_diamond.svg"
import blueTicket from "../assets/blue_ticket.svg"

export default function Navbar({handleOpen}) {
    return (
        <nav className="w-8/12 mx-auto my-8">
            <ul className="flex justify-between align-center">
                <ul className="flex align-center">
                    <img src={defy} />
                    <li><a className="p-4 font-SatoshiBold text-2xl">Defy</a></li>

                </ul>
                <ul className="flex align-center justify-center">
                    <li><a className="font-SatoshiMedium text-xl">Quest</a></li>
                    <li><a className="font-SatoshiMedium text-xl">Raffle</a></li>
                    <li><a className="font-SatoshiMedium text-xl">Leaderboard</a></li>
                    <div className="bg-divider h-full" style={{ width: 2 }}></div>
                    <div className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointer">
                        <img className="h-5 w-5" src={yellowDiamond} />
                        <p className="font-SatoshiMedium text-sm text-textGreyDark">90 Coins</p>
                    </div>
                    <div onClick={handleOpen}  className="p-2 rounded-full bg-greyVeryLight flex max-h-10 cursor-pointer">
                        <img className="h-5 w-5" src={blueTicket} />
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