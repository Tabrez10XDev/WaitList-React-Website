import nft1 from "../assets/nft1.png"

export default function NFTCard({onclick}){
    return(
        <div onClick={onclick} className="w-[200px] h-fit rounded-[10px] p-1.5 bg-greyVeryLight mx-4 mt-5 overflow-hidden cursor-pointer">
                <img className="w-full h-auto rounded-lg" src={nft1}/>
                <p className="font-SatoshiMedium text-sm text-black text-left mt-2.5">Cyberpunk kid #68</p>
                <p className="font-SatoshiMedium text-xs text-textGreyLight text-left">Cyberpunk kid #68</p>
                <div className="mt-3 flex items-center justify-between">
                    <p className="font-SatoshiMedium text-xs text-textGreyDark text-left">Floor Price</p>
                    <p className="font-SatoshiMedium text-sm text-black text-right">0.02ETH</p>
                </div>
        </div>
    )
}