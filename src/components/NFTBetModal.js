import Modal from "@material-ui/core/Modal";
import sortGrid from "../assets/sortGrid.svg"
import sortList from "../assets/sortList.svg"
import close from "../assets/close.svg"
import NFTCard from "./NFTCard";
import "../App.css"
import nft1 from "../assets/nft1.png"
import { useState } from "react";
import search from "../assets/search.svg"

export default function NFTBetModal({ open, handleClose }) {


    const [isGrid, setIsGrid] = useState(true)

    return (
        <Modal
            onClose={handleClose}
            open={open}
            style={{
                position: "absolute",
                backgroundColor: "#FFF",
                // boxShadow: "2px solid black",
                height: '80vh',
                width: '80vw',
                margin: "auto",
                outlineWidth: 0,
                outline: 'none',
                color: "white",
            }}
            outline='none'
            className="NFTModal"
        >
            <div className="w-full h-full bg-white px-5 py-6 rounded-lg flex flex-col NFTModal">
                
            </div>
        </Modal>
    )
}




