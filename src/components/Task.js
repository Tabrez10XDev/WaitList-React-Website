import voltLogo from "../assets/volt_logo.png"

export default function Task(){
    return(
        <div className="w-full h-[64px] rounded-md bg-greyVeryLight flex align-items justify-between p-2">
            <div className="flex align-items">
                    <img className="rounded-md" src={voltLogo}/>  
                    <div>
                        
                    </div>
            </div>
        </div>
    )
}