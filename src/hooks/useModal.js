import { useState } from "react";

function useModal(){
    const [isVisible, setIsVisible] = useState(false)
    const [user, setUser] = useState(null)
    const handleModal = (currentUser = null) => {
        setIsVisible(!isVisible)
        if (currentUser) {
            setUser(currentUser)
        } else {
            setUser(null)
        }
    }

    return {
        isVisible, user, handleModal
    }
}

export { useModal }