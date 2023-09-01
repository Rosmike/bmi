import React from "react";

import BmiCalculatorModal from "../../components/BmiCalculatorModal";
import { ModalContext } from "./modalContext";

function BmiCalculator() {
    const { isVisible, handleModal, user } = React.useContext(ModalContext)

    return (
        <BmiCalculatorModal isVisible={isVisible} handleModal={handleModal} user={user}/>
    )
}

export default BmiCalculator;