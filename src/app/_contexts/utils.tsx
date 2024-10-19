'use client'

//prisma
import { Booking } from "@prisma/client";

//next-react
import { createContext, useContext, useState } from "react"

export const AppContext = createContext<any>(undefined);

export function AppUtils({ children }: {
    children: React.ReactNode;
}) {
    const [openSheetMenu, setOpenSheetMenu] = useState(false)
    const [openDialogLogado, setOpenDialogLogado] = useState(false)
    const [openDialogLogin, setOpenDialogLogin] = useState(false)
    const [dialogLoginFinally, setDialogLoginFinally] = useState(false)

    return (
        <AppContext.Provider value={{
            openSheetMenu,
            setOpenSheetMenu,
            openDialogLogado,
            setOpenDialogLogado,
            openDialogLogin,
            setOpenDialogLogin,
            dialogLoginFinally,
            setDialogLoginFinally
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppUtils() {
    return useContext(AppContext)
}