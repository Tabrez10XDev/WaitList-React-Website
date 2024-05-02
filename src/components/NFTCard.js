export default function NFTCard({ nft, onclick }) {
    return (
        <div onClick={onclick} className="w-[200px] max-[600px]:w-[150px] h-fit rounded-[10px] p-1.5 bg-greyVeryLight max-[600px]:mx-2 mx-4 mt-5 overflow-hidden cursor-pointer">
            <img className="w-full h-auto rounded-lg" src={nft?.image} />
            <p className="font-SatoshiMedium text-sm text-black text-left mt-2.5">{nft?.name}</p>
            <p className="font-SatoshiMedium text-xs text-textGreyLight text-left">{nft?.name}</p>
            <div className="mt-3 flex items-center justify-between">
                <p className="font-SatoshiMedium text-xs text-textGreyDark text-left">Floor Price</p>
                <p className="font-SatoshiMedium text-sm text-black text-right">{nft?.floorPrice} ETH</p>
            </div>
        </div>
    )
}