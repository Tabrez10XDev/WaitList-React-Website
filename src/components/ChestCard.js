import chest1 from "../assets/chest1.png"
import chest2 from "../assets/chest2.png"
import yellowDiamond from "../assets/yellow_diamond.svg"
import "../App.css"

export default function ChestCard({startColour, endColour, image}){
    return(
        <div className="h-[220px] w-[200px] rounded-xl custom-shadow p-2.5 chest-card">
        <div 
        style={{
            background: `radial-gradient(#${startColour}, #${endColour})`,

        }}
        className="rounded-md w-full h-[130px] flex align-center justify-center blinking-div">
            <img className="h-[100px] w-[100px] m-auto object-contain" src={image}/>
        </div>
        <div className="flex justify-between">
                <p className="font-SatoshiBold text-sm">
                        Rare Chest
                </p>
                <div className="flex align-items">
                    <p className="font-SatoshiMedium text-xs">
                        10,000
                    </p>
                    <img src={yellowDiamond}/>
                </div>
        </div>

        <div className="flex justify-between">
                <p className="font-SatoshiMedium text-xs text-grey">
                        Slots
                </p>
                <div className="flex align-items">
                    <p className="font-SatoshiMedium text-xs">
                        125/125
                    </p>
                </div>
        </div>

        <div className="flex justify-between">
                <p className="font-SatoshiMedium text-xs text-grey">
                        Opens in
                </p>
                <div className="flex align-items">
                    <p className="font-SatoshiMedium text-xs text-textBlue">
                    70d : 12h : 30m
                    </p>
                </div>
        </div>


    </div>
    )
}