import { useState } from "react";
import OneButtonModal from "./OneButtonModal";
import TwoButtonModal from "./TwoButtonModal";
import Button from "./Button";

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
        <>
            <h1>Modal</h1>
            <Button
                size="small"
                name="open modal"
                status="primary"
                onClick={showModal}
                showModal={showModal}
            >
                open modal
            </Button>
            {modalOpen && <TwoButtonModal setModalOpen={setModalOpen} />}

            <Button
                size="big"
                name="open modal"
                status="negative"
                onClick={clickModal}
                clickModal={clickModal}
            >
                open modal
            </Button>
            {clickOpen && <OneButtonModal setClickOpen={setClickOpen} />}
        </>
    );
}
