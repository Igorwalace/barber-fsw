'use client'

//prisma

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
    const [openDialogConfirmedBooking, setOpenDialogConfirmedBooking] = useState(false)

    return (
        <AppContext.Provider value={{
            openSheetMenu,
            setOpenSheetMenu,
            openDialogLogado,
            setOpenDialogLogado,
            openDialogLogin,
            setOpenDialogLogin,
            dialogLoginFinally,
            setDialogLoginFinally,
            openDialogConfirmedBooking,
            setOpenDialogConfirmedBooking
        }} >
            {children}
        </AppContext.Provider>
    )
}

export default function useAppUtils() {
    return useContext(AppContext)
}