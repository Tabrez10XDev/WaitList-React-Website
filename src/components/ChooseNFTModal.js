import Modal from "@material-ui/core/Modal";
import sortGrid from "../assets/sortGrid.svg";
import sortList from "../assets/sortList.svg";
import close from "../assets/close.svg";
import NFTCard from "./NFTCard";
import "../App.css";
import nft1 from "../assets/nft1.png";
import { useState, useEffect } from "react";
import search from "../assets/search.svg";
import NFTBetModal from "./NFTBetModal";
import axios from "axios";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

const aptosConfig = new AptosConfig({
  network: Network.MAINNET,
});
const aptos = new Aptos(aptosConfig);

export default function ChooseNFTModal({ open, handleClose, handleOpenNFT }) {
  const [isGrid, setIsGrid] = useState(true);
  const [nfts, setNfts] = useState([]);
  const [nftsV2, setNftsV2] = useState([]);

  const getNfts = async () => {
    try {
      const lotteryManager = await aptos.getAccountResource({
        accountAddress: process.env.REACT_APP_RESOURCE_ADDR,
        resourceType: `${process.env.REACT_APP_MODULE_ADDR}::nft_lottery::LotteryManager`,
      });
      if (!lotteryManager) return;
      const nft_v1 = lotteryManager.nft_v1.map((nft) => nft.inner);
      console.log(nft_v1);
      setNfts(nft_v1);
      const nft_v2 = lotteryManager.nft_v2.map((nft) => nft.inner);
      setNftsV2(nft_v2);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    if (open) getNfts();
  }, [open]);
  const fetchNfts = async () => {
    const moduleAddress = process.env.REACT_APP_MODULE_ADDR;
    const nfts = await fetchNftV1(moduleAddress);
    console.log(nfts, "asdasd");
    setNfts(nfts);
    const nftsV2 = await fetchNftV2(moduleAddress);
    setNftsV2(nftsV2);
  };

  useEffect(() => {
    if (open) fetchNfts();
  }, [open]);

  return (
    <Modal
      onClose={handleClose}
      open={open}
      style={{
        position: "absolute",
        backgroundColor: "#FFF",
        // boxShadow: "2px solid black",
        height: "80vh",
        width: "80vw",
        margin: "auto",
        outlineWidth: 0,
        outline: "none",
        color: "white",
      }}
      outline="none"
      className="NFTModal"
    >
      <div className="w-full h-full bg-white px-5 py-6 rounded-lg flex flex-col NFTModal">
        <div className="flex items-center justify-between">
          <div style={{ flex: 3 }}>
            <p className="font-SatoshiBold text-base text-black text-left">
              Choose NFT to Raffle
            </p>
            <p className="font-SatoshiMedium text-sm text-textGreyDark text-left">
              Select NFT to Raffle and win other exciting Prizes
            </p>
          </div>
          <div
            style={{ flex: 2 }}
            className="flex items-center justify-between"
          >
            <div className="relative">
              <input
                style={{
                  fontFamily: "Satoshi",
                }}
                type="text"
                placeholder="Search Tokens"
                className="bg-greyVeryLight text-textGreyLight px-2 py-2 rounded-md focus:outline-none stroke-none border-none min-h-9 min-w-80"
              />
              <img
                className="size-5 object-contain absolute right-2 top-1/2 transform -translate-y-1/2"
                src={search}
              />
            </div>
            <div
              onClick={() => setIsGrid((current) => !current)}
              className="flex items-center cursor-pointer"
            >
              {isGrid ? (
                <img className="size-5 mr-8" src={sortGrid} />
              ) : (
                <img className="size-5 mr-8" src={sortList} />
              )}
              <img
                onClick={handleClose}
                className="size-5 cursor-pointer"
                src={close}
              />
            </div>
          </div>
        </div>
        {isGrid ? (
          <div
            style={{
              flexWrap: "wrap",
            }}
            className="w-full h-full flex overflow-y-scroll flex-1 mt-2 "
          >
            {[...nfts, ...nftsV2].map((ele) => {
              return <NFTCard onclick={handleOpenNFT} />;
            })}
          </div>
        ) : (
          <div
            style={{
              flexWrap: "wrap",
            }}
            className="w-full h-full flex flex-col overflow-y-scroll flex-1 mt-2 "
          >
            <div className="flex items-center h-12 mt-6 px-2">
              <img className="h-12 w-12 object-cover rounded-lg" src={nft1} />
              <div className="ml-1.5">
                <p className="font-SatoshiBold text-base text-black text-left">
                  Cool Bear
                </p>
                <p className="font-SatoshiMedium text-sm text-textGreyDark text-left">
                  FLOOR - 5.576 APT
                </p>
              </div>
            </div>
            <div
              style={{
                flexWrap: "wrap",
              }}
              className="w-full h-full flex overflow-y-scroll flex-1 "
            >
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
              <NFTCard />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
