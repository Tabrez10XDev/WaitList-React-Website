import Modal from "@material-ui/core/Modal";


export default function TicketModal({open, handleClose}){
    return(
        <Modal
        onClose={handleClose}
        open={open}
        style={{
            position: "absolute",
            border: "2px solid #000",
            backgroundColor: "lightgray",
            boxShadow: "2px solid black",
            height: 150,
            width: 240,
            margin: "auto",
            padding: "2%",
            color: "white",
        }}
    >
        <>
            <h2>GFG</h2>
            <p>A computer science portal!</p>
        </>
    </Modal>
    )
}