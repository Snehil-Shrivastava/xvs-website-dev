'use client'

import { createContext, useContext, useState } from "react"

const ModalContext = createContext({})

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
    const [isOpen, setisOpen] = useState(false)

    const toggleModal = () => {
        setisOpen((prevState) => !prevState)
        console.log(isOpen);
        
    }

    return (
        <ModalContext.Provider value={{isOpen, toggleModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => useContext(ModalContext)