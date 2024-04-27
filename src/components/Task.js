import voltLogo from "../assets/volt_logo.png"
import yellowDiamond from "../assets/yellow_diamond.svg"

export default function Task(){
    return(
        <div className="w-full h-[64px] rounded-md bg-greyVeryLight flex align-items justify-between p-2">
            <div className="flex items-align">
                <div className="flex overflow-hidden w-[56px] task-holder">
                <img className="rounded-md object-contain h-full task-logo task-to-bottom" src={voltLogo}/>  
                <img className="rounded-md object-contain h-full ml-2 task-logo mt-[30px] task-to-top" src={voltLogo}/>  

                </div>
                    <div className="ml-1">
                        <p className="text-left font-SatoshiBold text-lg">Swap on Volt</p>
                        <p className="text-left font-SatoshiMedium text-base">🎁 Get 1 coin per swap volume of $1 in Volt.</p>        
                    </div>
            </div>
            <div className="px-2 rounded-full bg-white flex items-center justify-center max-h-10 ">
                        <p className="font-SatoshiBold text-base text-textGreyDark">500 Coins</p>
                        <img className="h-5 w-5 ml-2" src={yellowDiamond} />
                    </div>
        </div>
    )
}