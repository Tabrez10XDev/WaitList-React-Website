import chest1 from "../assets/chest1.png"
import chest2 from "../assets/chest2.png"
import chest3 from "../assets/chest3.png"
import chest4 from "../assets/chest4.png"
import ChestCard from "./ChestCard"
import { useState } from "react"
import Task from "./Task"

export default function Dashboard() {


    const [category, setCategory] = useState(0)

    return (
        <div className="w-10/12 mx-auto flex">
            <div className="w-4/6">
                <p className="font-SatoshiBold text-2xl text-left">
                    Get Defy Insiders <span className="bg-gradient-to-r from-purple to-blue text-transparent bg-clip-text">NFT</span>
                </p>
                <p className="font-SatoshiMedium text-base text-grey text-left">
                    Earn coins to buy chest and get Defy Insiders NFT collection and early access to app.
                </p>
                <div className="flex">
                    <ChestCard startColour={'DA55F9'} endColour={'9225FA'} image={chest1} />
                    <ChestCard startColour={'01D1F7'} endColour={'077BB3'} image={chest2} />
                    <ChestCard startColour={'64C5B2'} endColour={'2F9B86'} image={chest3} />
                    <ChestCard startColour={'FFDF7A'} endColour={'E5A11B'} image={chest4} />

                </div>

                <p className="font-SatoshiBold text-2xl text-left">
                    Recommended Task
                </p>

                <div className="flex justify-start align-items">
                    <div onClick={()=>setCategory(0)} 
                    className={category == 0 ? "selected-div" :"unselected-div"}>
                        <p className={category == 0 ? "selected" :"unselected"}>All(32)</p>
                    </div>
                    <div onClick={()=>setCategory(1)} 
                    className={category == 1 ? "selected-div" :"unselected-div"}>
                    <p className={category == 1 ? "selected" :"unselected"}>Social(12)</p>
                    </div>

                    <div onClick={()=>setCategory(2)} 
                    className={category == 2 ? "selected-div" :"unselected-div"}>
                    <p className={category == 2 ? "selected" :"unselected"}>De-Fi(6)</p>
                    </div>

                    <div onClick={()=>setCategory(3)} 
                    className={category == 3 ? "selected-div" :"unselected-div"}>
                    <p className={category == 3 ? "selected" :"unselected"}>Games(20)</p>
                    </div>

                    <div onClick={()=>setCategory(4)} 
                    className={category == 4 ? "selected-div" :"unselected-div"}>
                    <p className={category == 4 ? "selected" :"unselected"}>Featured(12)</p>
                    </div>

                    <div onClick={()=>setCategory(5)} 
                    className={category == 5 ? "selected-div" :"unselected-div"}>
                    <p className={category == 5 ? "selected" :"unselected !text-green"}>Completed(10)</p>
                    </div>


                    

                </div>
                <div className="h-[1px] w-full bg-textGreyLight"/>
                <Task/>



            </div>

            <div className="w-2/6">

            </div>
        </div>
    )
}