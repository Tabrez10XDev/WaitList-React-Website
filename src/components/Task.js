import voltLogo from "../assets/volt_logo.png";
import yellowDiamond from "../assets/yellow_diamond.svg";
import xLogo from "../assets/xLogo.png";

export const TaskVolt = ({ onclick, ele }) => {
  return (
    <div
      onClick={onclick}
      className="w-full h-[64px] rounded-md bg-greyVeryLight flex align-items justify-between p-2 mt-5"
    >
      <div className="flex items-align">
        <div className="flex overflow-hidden w-[56px] task-holder">
          <img
            className="rounded-md object-contain h-full task-logo task-to-bottom"
            src={voltLogo}
          />
          <img
            className="rounded-md object-contain h-full ml-2 task-logo mt-[30px] task-to-top"
            src={voltLogo}
          />
        </div>
        <div className="ml-1">
          <p className="text-left font-SatoshiBold text-lg">{ele.title}</p>
          <p className="text-left font-SatoshiMedium text-base">
            {ele.description}
          </p>
        </div>
      </div>
      <div className="px-2 rounded-full bg-white flex items-center justify-center max-h-10 ">
        <p className="font-SatoshiBold text-base text-textGreyDark">
          {ele.points} Coins
        </p>
        <img className="h-5 w-5 ml-2" src={yellowDiamond} />
      </div>
    </div>
  );
};

export const TaskX = ({ onclick, ele }) => {


  let logo = voltLogo


  return (
    <div
    onClick={()=>onclick(ele['_id'])}
    className="w-full h-[64px] rounded-md bg-greyVeryLight flex align-items justify-between p-2 mt-5 cursor-pointer"
  >
    <div className="flex items-align">
      <div className="flex overflow-hidden w-[56px] task-holder">
        <img
          className="rounded-md object-contain h-full task-logo task-to-bottom"
          src={voltLogo}
        />
        <img
          className="rounded-md object-contain h-full ml-2 task-logo mt-[30px] task-to-top"
          src={voltLogo}
        />
      </div>
      <div className="ml-1">
        <p className="text-left font-SatoshiBold text-lg max-[600px]:text-base">{ele.title}</p>
        <p className="text-left font-SatoshiMedium text-base max-[600px]:text-sm">
          {ele.description}
        </p>
      </div>
    </div>
    <div className="px-2 rounded-full bg-white flex items-center justify-center max-h-10 min-w-[120px] ">
      <p className="font-SatoshiBold text-base text-textGreyDark">
        {ele.points} Coins
      </p>
      <img className="h-5 w-5 ml-2" src={yellowDiamond} />
    </div>
  </div>
  );
};
