import React from 'react'

import BmiCalculator from "./BmiCalculator";
import { useModal } from '../../hooks/useModal'

let ModalContext;

const { Provider } = (ModalContext = React.createContext({}));

const ModalProvider = ({ children }) => {
    const { isVisible, handleModal, user } = useModal()

    return (
        <Provider value={{ isVisible, handleModal, user }}>
            {children}
            <BmiCalculator />
        </Provider>
    )
}

export { ModalProvider, ModalContext }

