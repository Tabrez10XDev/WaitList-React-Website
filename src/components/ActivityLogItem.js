import blueTicket from "../assets/blueTicket.png"

export default function ActivityLogItem(){
    return(
        <div className="w-full rounded-md bg-white py-1 px-1.5">
            <div className="flex items-center justify-between">
                   <p className="font-SatoshiMedium text-sm">☀️ Summer Warmer 1.2</p>
                   <p className="font-SatoshiMedium text-sm text-green">70%</p>

            </div>

            <div className="flex items-center justify-between">
                   <p className="font-SatoshiMedium text-xs text-textGreyLight">on April 2, 2024</p>
                   <div className="flex items-center mt-1">
                    <img className="object-contain h-4 w-4 mr-1" src={blueTicket}/>
                   <p className="font-SatoshiMedium text-xs text-textGreyLight">3</p>
   
                   </div>

            </div>

        </div>
    )
}