import horse from "../assets/horse.png"

export default function MarqueeItem(){
    return(
        <div className="relative w-[120px] h-[150px] overflow-hidden rounded mx-3">
        <img
            src={horse}
            style={{
                width: '100%', height: '100%',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                filter: 'blur(25px)',
                zIndex: 0,
                top: 0,
                left: 0,
                transform: 'scale(1)',

            }}>
        </img>
        <div
            className="w-[120px] h-[150px] flex items-center justify-center flex-col absolute top-0 left-0 z-2">
            <img className="w-[80px] h-[80px] object-cover rounded" src={horse} />
            <p className="text-[10px] text-white text-center font-SatoshiBold mt-1.5" >Cashback</p>
            <p className="text-[10px] text-greyVeryLight mt-0.5 text-center font-SatoshiMedium">GUI Tokens</p>
        </div>
    </div>
    )
}