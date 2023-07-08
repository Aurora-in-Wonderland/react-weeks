import { useState } from "react";
import OneButtonModal from "./OneButtonModal";
import TwoButtonModal from "./TwoButtonModal";

export default function Modals() {
    const [modalOpen, setModalOpen] = useState(false);
    const [clickOpen, setClickOpen] = useState(false);
    const showModal = () => {
        setModalOpen(true);
    };
    const clickModal = () => {
        setClickOpen(true);
    };

    return (
        <div>
            <button onClick={showModal}>open modal</button>
            {modalOpen && <TwoButtonModal setModalOpen={setModalOpen} />}

            <button onClick={clickModal}>open modal</button>
            {clickOpen && <OneButtonModal setClickOpen={setClickOpen} />}
        </div>
    );
}
